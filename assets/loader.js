/* Loader Lab picks in demo3 (16 Nov 2026). Plan: brainstorms/2026-11-15-loader-picks-plan.md
   1. LD2 + LD4 first-load loader: the mark (drawn and filled by loader.css while the scripts load) waits for the page and its
      hero photo, then flies onto the mark in the header logo while the wordmark wipes in and the page rises. First visit per
      session only; returning visits show a skeleton of the page shell instead. Tap or any key skips. Runs last on the page,
      after site.js has drawn it. The inline script before the markup sets window.AELD (queue for things that must wait) and an
      8 s failsafe.
   2. W6 photo skeletons: every <img> on the site that hasn't loaded yet shimmers until it does, then fades in.
   3. FX7 ink buttons: one delegated listener; ink spreads from where the pointer enters, drains where it leaves.
   (W8, the PDF button fill, lives in d3.js next to the PDF code.) */
(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const site = $('#site'), root = document.documentElement;
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches || !!(window.SITE && SITE.motionEff && SITE.motionEff() === 'off');
const capped = (p, ms) => Promise.race([p.catch(() => {}), new Promise(r => setTimeout(r, ms))]);
const AE = window.AELD || (window.AELD = { done: false, q: [], after(f){ this.done ? f() : this.q.push(f); } });

/* ---------- 1 · first-load loader ---------- */
// the AE mark inside AE_logo_horizontal.png (1484 x 299 px) spans x 0–441, y 5–300: the loader's SVG uses the same box
const LOGO_W = 1484, LOGO_H = 299, MK = { x: 0, y: 5, w: 441, h: 295 };
const release = () => root.classList.remove('ae-hold');
let hidden = null; // the header logo, while the mark stands in for it
function finish(){
  if (AE.done) return; AE.done = true; release(); if (hidden){ hidden.style.opacity = ''; hidden = null; }
  const ld = $('#aeld'); if (ld) ld.remove();
  const q = AE.q.splice(0); q.forEach(f => { try { f(); } catch (e){ console.error(e); } });
}
AE.finish = finish;
function heroReady(){
  // while the page is held off-screen (html.ae-hold moves it down 300vh), find the photos that will be in the first screen
  const shift = root.classList.contains('ae-hold') ? 3 * innerHeight : 0;
  const vis = $$('main img', site).filter(i => { const r = i.getBoundingClientRect(), t = r.top - shift; return r.width > 40 && t < innerHeight && t + r.height > 0; }).slice(0, 3);
  vis.forEach(i => { if (i.loading === 'lazy') i.loading = 'eager'; }); // lazy photos wouldn't load while held off-screen
  return Promise.all(vis.map(i => (i.complete ? Promise.resolve() : new Promise(r => { i.addEventListener('load', r, { once: true }); i.addEventListener('error', r, { once: true }); }))
    .then(() => i.decode ? i.decode().catch(() => {}) : null)));
}
const frames = n => new Promise(r => { const f = () => (--n <= 0 ? r() : requestAnimationFrame(f)); requestAnimationFrame(f); });
const idle = ms => new Promise(r => (window.requestIdleCallback ? requestIdleCallback(() => r(), { timeout: ms }) : setTimeout(r, Math.min(ms, 120))));
function rise(){ // the page arrives under the lifting cover
  const m = $('main', site); if (!m || reduced()) return;
  m.animate([{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }], { duration: 600, delay: 120, easing: 'cubic-bezier(0,0,.3,1)', fill: 'backwards' });
}
async function loader(){
  const ld = $('#aeld'); if (!ld || AE.done) return finish();
  const seen = root.classList.contains('ae-seen'), bg = $('.ae-bg', ld), mk = $('.ae-mk', ld);
  try { sessionStorage.setItem('ae-intro', '1'); } catch (e){}
  let skipped = false;
  const skip = () => { if (skipped) return; skipped = true; ld.style.transition = 'opacity .18s'; ld.style.opacity = 0; setTimeout(finish, 180); };
  ld.addEventListener('pointerdown', skip); addEventListener('keydown', skip, { once: true });
  const ready = Promise.all([capped(document.fonts ? document.fonts.ready : Promise.resolve(), 800), capped(heroReady(), 1500)]);
  if (seen || reduced()){ // returning visit or reduced motion: no flight, the cover simply goes once the page is ready
    await ready; if (skipped) return;
    release(); await frames(2); if (skipped) return;
    const a = ld.animate([{ opacity: 1 }, { opacity: 0 }], { duration: seen && !reduced() ? 260 : 120, easing: 'cubic-bezier(.4,.14,1,1)', fill: 'forwards' });
    if (seen) rise(); a.onfinish = finish; return;
  }
  // First visit, in strict order so that every frame of the intro has the browser to itself:
  // 1. page drawn, fonts and first-screen photos ready (the page is still held off-screen, unpainted)
  await ready; if (skipped) return;
  // the page's own canvas effects stay on a still frame until the intro is over (restored in finish)
  if (window.FX && FX.setMotion){ FX.setMotion('off'); AE.q.unshift(() => { try { FX.setMotion(window.SITE && SITE.motionEff ? SITE.motionEff() : 'full'); } catch (e){} }); }
  // 2. the page is let go under the cover while only the faint outline shows. For these few frames the cover is 99.9 %, so
  //    the browser can't skip painting what's under it: the page gets laid out and drawn now, not when the cover fades.
  //    Its own entrance effects (blur-and-rise reveals) start as it is let go; nobody can see them under the cover and blur
  //    is costly, so they are fast-forwarded. Then the cover goes back to fully solid before anything moves.
  const settle = () => site.getAnimations({ subtree: true }).forEach(a => { try { if (a.effect && a.effect.getComputedTiming().iterations !== Infinity) a.finish(); } catch (e){} });
  release(); bg.style.opacity = .999; await frames(3); settle(); await idle(400); settle(); await frames(2);
  bg.style.opacity = 1; if (skipped) return;
  // 3. measure the header logo and prepare the mark's layer, all before anything moves
  const logo = $('.shdr .logoimg', site) || $('.logoimg', site), L = logo && logo.getBoundingClientRect();
  const src = mk.getBoundingClientRect();
  const land = !!L && L.width >= 20 && L.bottom > 0 && L.top < innerHeight;
  let k = 1, tx = 0, ty = 0, s = 1, ink = '#576630';
  if (land){ // where the mark sits inside the masked logo image (background-size: contain, left centre)
    k = Math.min(L.width / LOGO_W, L.height / LOGO_H); const oy = L.top + (L.height - LOGO_H * k) / 2;
    tx = L.left + MK.x * k; ty = oy + MK.y * k; s = (MK.w * k) / src.width;
    ink = getComputedStyle(logo).backgroundColor || ink;
    logo.style.opacity = 0; hidden = logo;
  }
  mk.style.willChange = 'transform'; bg.style.willChange = 'opacity';
  await frames(2); await idle(250); settle(); await frames(2); if (skipped) return;
  // 4. the outline draws itself (4 shapes, 100 ms apart) and fills with olive: ~1.05 s
  const ps = $$('path', mk), E0 = 'cubic-bezier(.4,.14,.3,1)';
  const draw = ps.map((p, i) => p.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], { duration: 500, delay: i * 100, easing: E0, fill: 'forwards' }));
  const fillA = ps.map(p => p.animate([{ fill: 'rgba(87,102,48,0)', strokeOpacity: 1 }, { fill: ink, strokeOpacity: 0 }], { duration: 250, delay: 800, easing: 'cubic-bezier(0,0,.3,1)', fill: 'forwards' }));
  const gh = $('.ae-gh', ld); if (gh) gh.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, delay: 700, fill: 'forwards' });
  await Promise.all(draw.concat(fillA).map(a => a.finished)); if (skipped) return;
  removeEventListener('keydown', skip);
  if (!land){ // no header logo on screen: plain fade
    const a = ld.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, fill: 'forwards' }); a.onfinish = finish; return;
  }
  // 5. straight into the flight. The cover stays solid, so the only thing moving is the small mark (compositor only)
  const E = 'cubic-bezier(.4,.14,.3,1)';
  const fly = mk.animate([{ transform: 'none' }, { transform: `translate(${(tx - src.left).toFixed(1)}px,${(ty - src.top).toFixed(1)}px) scale(${s.toFixed(4)})` }], { duration: 650, easing: E, fill: 'forwards' });
  ld.style.pointerEvents = 'none';
  await fly.finished; if (skipped) return;
  // 6. landed on the logo's spot: only now does the page open, fading in around the mark
  await frames(1);
  await bg.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 380, easing: 'cubic-bezier(0,0,.3,1)', fill: 'forwards' }).finished;
  // the real logo takes over under the mark, and the wordmark wipes in beside it
  logo.style.opacity = ''; hidden = null;
  const cut = (100 - (MK.w * k) / L.width * 100).toFixed(2);
  logo.animate([{ clipPath: `inset(0 ${cut}% 0 0)` }, { clipPath: 'inset(0 0% 0 0)' }], { duration: 320, easing: 'cubic-bezier(0,0,.3,1)' });
  finish();
}

/* ---------- 2 · photo skeletons (slow shimmer) ---------- */
function photos(){
  $$('img:not([data-aew])', site).forEach(i => {
    i.dataset.aew = '1';
    if (i.complete && i.naturalWidth) return;
    i.classList.add('ae-wait');
    const done = ok => { i.classList.remove('ae-wait'); if (ok && !reduced() && i.isConnected) i.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, easing: 'cubic-bezier(0,0,.3,1)' }); };
    i.addEventListener('load', () => done(true), { once: true }); i.addEventListener('error', () => done(false), { once: true });
  });
}
let pq = 0;
new MutationObserver(() => { if (!pq) pq = requestAnimationFrame(() => { pq = 0; photos(); }); }).observe(site, { childList: true, subtree: true });

/* ---------- 3 · ink-fill buttons ---------- */
const INK = '.btng, .btnp, .p-btn, .p-sbtn, .fbtn, .l2-btn, .d2-pbtn';
function inkOf(b){
  if (!b.classList.contains('ae-ib')){
    b.classList.add('ae-ib'); if (getComputedStyle(b).position === 'static') b.classList.add('ae-rel');
  }
  let i = b.querySelector(':scope > .ae-ink');
  if (!i){ i = document.createElement('i'); i.className = 'ae-ink'; i.setAttribute('aria-hidden', 'true'); b.prepend(i); }
  return i;
}
function inkAt(b, x, y){
  const r = b.getBoundingClientRect(), i = inkOf(b), d = 2 * Math.hypot(Math.max(x, r.width - x), Math.max(y, r.height - y));
  i.style.left = x + 'px'; i.style.top = y + 'px'; i.style.width = i.style.height = d + 'px';
}
const btnOf = t => t && t.closest ? t.closest(INK) : null;
site.addEventListener('pointerover', e => {
  if (e.pointerType === 'touch') return;
  const b = btnOf(e.target); if (!b || b.contains(e.relatedTarget) || b.disabled) return;
  const r = b.getBoundingClientRect(); inkAt(b, e.clientX - r.left, e.clientY - r.top);
  b.offsetWidth; b.classList.add('ae-on');
});
site.addEventListener('pointerout', e => {
  if (e.pointerType === 'touch') return;
  const b = btnOf(e.target); if (!b || b.contains(e.relatedTarget)) return;
  const r = b.getBoundingClientRect(); inkAt(b, e.clientX - r.left, e.clientY - r.top);
  b.classList.remove('ae-on');
});
site.addEventListener('pointerdown', e => { // phones: a quick fill from the tap point, as press feedback
  if (e.pointerType !== 'touch') return;
  const b = btnOf(e.target); if (!b || b.disabled) return;
  const r = b.getBoundingClientRect(); inkAt(b, e.clientX - r.left, e.clientY - r.top);
  b.classList.add('ae-tap'); b.offsetWidth; b.classList.add('ae-on');
  clearTimeout(b._aet); b._aet = setTimeout(() => { b.classList.remove('ae-on'); setTimeout(() => b.classList.remove('ae-tap'), 300); }, 240);
});
site.addEventListener('focusin', e => {
  const b = btnOf(e.target); if (!b || b !== e.target || !b.matches(':focus-visible')) return;
  const r = b.getBoundingClientRect(); inkAt(b, r.width / 2, r.height / 2); b.offsetWidth; b.classList.add('ae-on');
});
site.addEventListener('focusout', e => { const b = btnOf(e.target); if (b && b === e.target && !b.matches(':hover')) b.classList.remove('ae-on'); });

photos();
loader();
})();
