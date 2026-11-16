/* Arshad Electronics: visitor stats for the site admin (13 Nov 2026).
   No cookies and nothing stored in the browser. Sends small events to admin/t.php:
   - pv:  a page view (page id, site language, time zone for the country, phone/tablet hint; on the first page of a
          visit also where the visitor came from)
   - end: seconds the page was on screen
   - ser: a product series picked on a product page
   - clk: a click on a phone number, email, WhatsApp, "Open in Google Maps" or a copy button
   The admin's Stats tab adds them up. Does nothing on GitHub Pages or from a file (no PHP there). */
(function () {
  'use strict';
  if (!navigator.sendBeacon || location.protocol === 'file:' || /github\.io$/i.test(location.hostname)) return;
  var URL_T;
  try { URL_T = new URL('admin/t.php', document.baseURI).href; } catch (e) { return; }

  function send(o) { try { navigator.sendBeacon(URL_T, new Blob([JSON.stringify(o)], { type: 'text/plain' })); } catch (e) {} }
  function pid() { try { return window.DRAFT && DRAFT.idFromPath ? DRAFT.idFromPath() : 'home'; } catch (e) { return 'home'; } }
  function lang() { return (document.documentElement.lang || 'en').slice(0, 2).toLowerCase(); }
  function vis() { return document.visibilityState === 'visible'; }
  var tz = ''; try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) {}

  var cur = null, shown = 0, acc = 0, landing = true;
  // time on page: only while the tab is on screen; sent when the page changes or the tab is hidden
  function flush() {
    if (!cur) return;
    if (shown) acc += Date.now() - shown;
    shown = vis() ? Date.now() : 0;
    var d = Math.round(acc / 1000); acc = 0;
    if (d >= 1) send({ t: 'end', p: cur, d: d });
  }
  function view() {
    var p = pid(); if (p === cur) return;
    flush(); cur = p; acc = 0; shown = vis() ? Date.now() : 0;
    var o = { t: 'pv', p: p, l: lang(), z: tz, m: navigator.maxTouchPoints > 1 ? 1 : 0 };
    if (landing) {
      landing = false; o.n = 1;
      try { var r = document.referrer; if (r && new URL(r).host !== location.host) o.r = r.slice(0, 300); } catch (e) {}
      try { var u = new URLSearchParams(location.search).get('utm_source'); if (u) o.u = u.slice(0, 60); } catch (e) {}
    }
    send(o);
  }

  // the site changes pages with history.pushState (and the back button), so watch both
  var push = history.pushState;
  history.pushState = function () { var r = push.apply(this, arguments); setTimeout(view, 0); return r; };
  addEventListener('popstate', function () { setTimeout(view, 0); });
  document.addEventListener('visibilitychange', function () { if (vis()) { if (!shown) shown = Date.now(); } else flush(); });
  addEventListener('pagehide', flush);

  // which contact a number or address belongs to (Sales, Service...), from the admin's contact details
  function who(v) {
    if (!v) return '';
    var d = v.replace(/\D/g, '').slice(-10), L = (window.D2C && D2C.contact && D2C.contact.pairs) || [];
    for (var i = 0; i < L.length; i++) {
      var q = L[i] || {};
      if (d.length >= 6 && q.phone && q.phone.replace(/\D/g, '').slice(-10) === d) return q.label || '';
      if (q.email && v.toLowerCase() === String(q.email).toLowerCase()) return q.label || '';
    }
    return v.indexOf('@') > -1 ? 'other email' : d.length >= 6 ? 'other number' : '';
  }
  document.addEventListener('click', function (e) {
    var el = e.target && e.target.closest ? e.target : null; if (!el) return;
    var s = el.closest('.l3-series button, .l3-series [role="tab"]');
    if (s) {
      setTimeout(function () {
        var b = document.querySelector('.pp .thero .l3-series [aria-pressed="true"] b, .pp .thero .l3-series [aria-selected="true"] b');
        var n = b ? b.textContent.replace(/\s+/g, ' ').trim().slice(0, 40) : '';
        if (n) send({ t: 'ser', p: cur || pid(), s: n });
      }, 60);
      return;
    }
    // the round Call / WhatsApp buttons at the bottom right open a small box with the main number
    var fab = el.closest('[data-fab]');
    if (fab) {
      var c = (window.D2C && D2C.contact) || {}, q = (c.pairs || [])[c.primary || 0] || {};
      send({ t: 'clk', p: cur || pid(), k: fab.getAttribute('data-fab') === 'wa' ? 'whatsapp' : 'call', x: q.label || '' });
      return;
    }
    var a = el.closest('a[href], [data-copy]'); if (!a) return;
    var k = '', v = '';
    if (a.hasAttribute('data-copy')) {
      v = a.getAttribute('data-copy') || '';
      k = v.indexOf('@') > -1 ? 'copy-email' : v.replace(/\D/g, '').length >= 6 ? 'copy-phone' : '';
    } else {
      var h = a.getAttribute('href') || '';
      if (/^tel:/i.test(h)) { k = 'call'; v = h.slice(4); }
      else if (/^mailto:/i.test(h)) { k = 'email'; v = decodeURIComponent(h.slice(7).split('?')[0]); }
      else if (/wa\.me\/|api\.whatsapp\.com|^whatsapp:/i.test(h)) { k = 'whatsapp'; v = (h.match(/\d{8,}/) || [''])[0]; }
      else if (/maps\.google\.|google\.[a-z.]+\/maps|maps\.app\.goo\.gl|goo\.gl\/maps/i.test(h)) k = 'map';
    }
    if (k) send({ t: 'clk', p: cur || pid(), k: k, x: who(v) });
  }, true);

  view();
})();
