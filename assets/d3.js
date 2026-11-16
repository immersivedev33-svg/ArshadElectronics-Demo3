/* ArshadElectronics-demo3 (13 Nov 2026): the client's change list of 13 Nov.
   Plan and decisions: brainstorms/2026-11-13-client-changes-plan.md (+ the checks report and the user's picks).
   Loads after site-builds.js and before site.js, so the data below is in place before any page is drawn.
   - cap sealers: Brezo A, Brezo 2, Brezo 3 and Aurae 3 from the ICS brochure (ICS_Brochure_New_Final.pdf);
     "Brezo 3" with "3C SS" as its variant line; old-site extras kept without a note; Brezo P as it was
   - sealer hub: the brochure's "What is induction cap sealing" with a 3-step drawing, merged applications and
     advantages, the bottle types, and the ICS signature row (logo + "Sealing consistently, since 1994.")
   - corona: the catalogue's "What is corona treatment" with its results, the lines it fits, the ACT signature row
     (logo + "Surface Treatment, Guaranteed."), catalogue photos for the ACT series, ACT CBL / LBL CM features, ACT ABA safety
   - two pages: Simco-Ion (modelled on simco-ion.eu, the user's prototype picks) and PlasmaRight (new)
   - the announcement pop-up: docked to the right edge, mid-height, one at a time with arrows (Pop-up Lab A3 + B1 + D2)
   - Spanish and Russian for all of the above */
(() => {
'use strict';
const D = window.PD, SD = window.SD, HD = window.HD, PB = window.PB, U = window.PU;
if (!D || !SD || !PB) return;
const P = D.P;
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const href = id => (window.DRAFT && DRAFT.href) ? DRAFT.href(id) : '#' + id;
const link = (id, inner, extra = '') => `<a href="${href(id)}" data-page="${id}" ${extra}>${inner}</a>`;
const ext = (url, inner, extra = '') => `<a href="${url}" target="_blank" rel="noopener" ${extra}>${inner}</a>`;

/* ---------- 1 · cap sealers from the ICS brochure ---------- */
const INPUT = '230 V AC, single phase, 50 Hz, 15 A', HEAD = '0 – 350 mm, adjustable', FOOT = '800 × 800 × 1500 mm (l × b × h)';
const PLC = ['No wad detector with bottle rejection system', 'Auto on / off system', 'Low / high voltage protection', 'Low / high current indication', 'Stalled bottle interlock', 'Production / reject bottle counter', 'Modular tower light for fault indication'];
const FEAT = ['Digital height position indicator with position lock', 'Adjustable height of sealing coil head: 0 – 350 mm', 'Castor PU wheels for easy movement of the machine', 'Levelling feet pads keep the machine level and secured to the floor', 'Touch screen control interface', 'Ambient operating temperature'];
const TOUCH = 'Touch-screen PLC control';
const lineDesc = (n, kind) => `The ${n} is a ${kind} online induction cap sealing machine used on a continuous production filling and capping line. It consists of an induction sealing head unit placed over the line conveyor.`;
Object.assign(P.brezoa, { sub: 'Online, medium speed', desc: lineDesc('Brezo A', 'medium speed air cooled'), cap: [20, 120], ftmin: 60, ftminLo: 40, sm: 'd3/brezoa-sm.webp',
  spec: [['Type', 'Air cooled'], ['Input', INPUT], ['Sealing speed', '40 – 60 ft/min'], ['Neck diameter', '20 – 120 mm'], ['Head height', HEAD], ['MOC', 'MS powder-coated or SS 304 enclosure'], ['Max power', '1000 W'], ['Footprint', FOOT]],
  // the old site's options stay (C3), without a note
  variants: [['MS', 'powder-coated'], ['SS 304', 'stainless'], ['+ Conveyor', 'slat chain, optional'], ['+ Rejection', 'pneumatic no-foil rejection, optional']],
  feats: ['No foil detection system', 'Easy line relocation', 'Plug and play system'], // the old site's wording
  safety: ['No foil detection system: if the foil is absent in the bottle cap, an audio-visual alarm gets activated', 'Auto on / off system: if a bottle is jammed or no bottle is detected, the machine stops sealing'] });
Object.assign(P.brezo2, { sub: 'Online, high speed', desc: lineDesc('Brezo 2', 'high speed air cooled'), cap: [20, 120], ftmin: 60, ftminLo: 40, touch: 1, sm: 'd3/brezo2-sm.webp',
  spec: [['Type', 'Air cooled'], ['Input', INPUT], ['Sealing speed', '40 – 60 ft/min'], ['Neck diameter', '20 – 120 mm'], ['Head height', HEAD], ['MOC', 'SS 304 enclosure'], [TOUCH, 'Yes, with HMI'], ['Max power', '1000 W'], ['Footprint', FOOT]],
  variants: [['SS 304', 'stainless enclosure'], ['+ Conveyor', 'slat chain, optional'], ['+ Rejection', 'pneumatic no-foil rejection, optional'], ['+ Loose cap', 'loose cap detector, optional']],
  feats: FEAT.slice(), safety: PLC.slice() });
Object.assign(P.brezo3, { name: 'Brezo 3', sub: '3C SS · online, high speed', desc: lineDesc('Brezo 3', 'high-speed air cooled'), cap: [20, 120], ftmin: 80, ftminLo: 60, touch: 1, sm: 'd3/brezo3-sm.webp',
  spec: [['Type', 'Air cooled'], ['Input', INPUT], ['Sealing speed', '60 – 80 ft/min'], ['Neck diameter', '20 – 120 mm'], ['Head height', HEAD], ['MOC', 'SS 304 enclosure'], [TOUCH, 'Yes, with HMI'], ['Max power', '2000 W'], ['Footprint', FOOT],
    ['Conveyor', '1500 mm long, 850 ± 50 mm high, 150 mm Delrin slats, 0 – 50 ft/min, ¼ HP with VFD'], ['Conveyor footprint', '1500 × 400 × 900 mm']],
  variants: [['3C SS', 'stainless enclosure'], ['SS slat chain', 'instead of Delrin slats, optional']],
  feats: FEAT.slice(), safety: PLC.slice() });
Object.assign(P.aurae3, { sub: 'Water cooled, high speed', desc: lineDesc('Aurae 3', 'water cooled high speed'), cap: [20, 150], ftmin: 80, touch: 1, sm: 'd3/aurae3-sm.webp',
  spec: [['Type', 'Water cooled'], ['Input', INPUT], ['Sealing speed', '80 ft/min'], ['Neck diameter', '20 – 150 mm'], ['Head height', HEAD], ['MOC', 'SS 304 enclosure'], [TOUCH, 'Yes, with HMI'], ['Max power', '2000 W'], ['Footprint', '1000 × 1000 × 1500 mm (l × b × h)'], ['Cooling water', 'Demineralised'], ['Water tank MOC', 'SS 304']],
  variants: [['SS 304', 'stainless enclosure'], ['+ Conveyor', 'slat chain, optional'], ['+ Rejection', 'pneumatic no-foil rejection, optional']],
  feats: ['Cooling water type: demineralised', 'Water tank MOC: stainless steel 304'], safety: PLC.slice() });
// Brezo P is not in the brochure and stays as it was; only its two empty rows take the shared names, so the comparison lines up
P.brezop.spec = P.brezop.spec.map(r => r[0] === 'Power rating' ? ['Max power', r[1]] : r[0] === 'Dimensions / weight' ? ['Footprint', r[1]] : r);
P.brezop.sm = P.brezop.img;
// applications and advantages: the brochure's, merged with the site's (C7); the brochure's bottle types
D.sealing.industries = ['Food', 'Edible oil', 'Agro chemicals', 'Dairy products', 'Lubricants', 'Pharma', 'Detergent', 'Adhesives', 'Chemicals', 'Cosmetics & personal care'];
D.sealing.benefits = ['Leak proof sealing', 'Customer confidence', 'Printing on seal', 'Airtight hermetic sealing', 'Tamper evident', 'Increased shelf life', 'Protects product freshness & integrity'];
D.sealing.containers = ['LDPE', 'PET', 'Glass', 'HDPE', 'PP', 'PVC'];
const ICON_ALIAS = { 'Edible oil': 'Food', 'Agro chemicals': 'Agro-chemicals', 'Dairy products': 'Dairy', 'Pharma': 'Pharmaceuticals', 'Detergent': 'Detergents', 'Cosmetics & personal care': 'Cosmetics and personal care' };

/* ---------- 2 · corona: catalogue photos and wording ---------- */
const ACTPH = { mnl: 'act/mnl.webp', mnlaba: 'act/mnl-aba.webp', mml: 'act/mml.webp', mmlibc: 'act/mml-ibc.webp', cmbr: 'act/cm-br.webp', ncf: 'act/ncf.webp' };
Object.keys(ACTPH).forEach(k => { if (P[k]) P[k].img = ACTPH[k]; });
if (P.cbl) P.cbl.feats = ['Fin-type electrodes designed for easy maintenance and precise treatment control', 'Aluminium treatment rollers fitted with a high-quality dielectric, ozone-resistant sleeve for long service life and consistent treatment', 'Precision guide rollers ensure smooth web entry and exit through the treatment station'];
if (P.lblcm) P.lblcm.feats = ['Easy to maintain fin type electrodes for fixed treatment and micro gap adjustment', 'Aluminium rollers, dynamically balanced and covered with a pure dielectric, ozone-resistant sleeve for long life', 'Guide rollers for entry and exit of film'];
if (P.mnlaba) P.mnlaba.safety = ['Zero speed cut off', 'Active spark protection', 'Assembly door open cut off'];

/* ---------- 3 · pages, hubs, timeline ---------- */
const PG = id => SD.PAGES.find(p => p.id === id);
PG('films').cut = 'act/mml.webp';
if (!PG('plasmaright')) SD.PAGES.splice(SD.PAGES.findIndex(p => p.id === 'simco') + 1, 0, { id: 'plasmaright', t: 'PlasmaRight', kind: 'product', fam: 'P', crumb: ['Products', 'PlasmaRight plasma treaters'], photo: 'img/d3/pr-machine.jpg', cut: 'd3/pr-machine.webp', fx: 'plasma' });
if (!SD.PRODUCT_ORDER.includes('plasmaright')) SD.PRODUCT_ORDER.push('plasmaright');
const HS = SD.HUBS.fluxosealer, HC = SD.HUBS.fluxomatic;
HS.intro = [
  'Induction cap sealing is a process where an aluminium foil is sealed on to the mouth of the plastic bottle to ensure airtight and leak-proof sealing. This is done by heating the aluminium foil by electromagnetic lines of force, which melts the coating under the foil that fuses on the bottle mouth.',
  'This is a non-contact process and hence can be done at very high speeds and precision. This sealing process is used for pharmaceuticals, food products, lubricants, cosmetics, pesticides, chemicals, dyes, detergents, nutraceuticals, powders, agro chemicals, etc.',
  'Fluxosealer® induction cap sealers come in two categories: the Brezo series of air-cooled systems and the Aurae series of water-cooled systems.'
];
HS.apps = D.sealing.industries.slice();
HS.advantages = D.sealing.benefits.slice();
HS.bottles = D.sealing.containers.slice();
HC.intro = [
  'Corona treatment is a surface modification process that increases the surface energy of polymer films, foils, paper, fabrics and other substrates before printing, coating or lamination.',
  'During the process, a controlled high-voltage electrical discharge creates microscopic changes on the material surface, improving its ability to bond with inks, adhesives, coatings and laminating films.'
];
const RESULTS = ['Improved ink adhesion', 'Better laminate bond strength', 'Enhanced coating performance', 'Consistent print quality', 'Reduced rejection during production'];
const FITS_BLOWN = ['Mono layer', 'ABA', 'OBC multilayer lines', 'Internal bubble cooling (IBC) lines'];
const FITS = ['Cast film lines', 'Cable printing', 'Boosting', 'Coating machines', 'Printing machines', 'Lamination machines', 'Narrow web label printers'];
[['2015', '5100 mm corona treater for woven fabric'], ['2021', 'Plasma treater for grains'], ['2023', 'High-speed corona treater for conductive films']].forEach(m => { if (!SD.TIMELINE.some(t => t[0] === m[0])) SD.TIMELINE.push(m); });
SD.TIMELINE.sort((a, b) => +a[0] - +b[0]);

/* ---------- 4 · homepage panels, finder, PlasmaRight naming ---------- */
// panel photos shown whole: { bg, w, h (share of the panel), top, max (largest scale; 1 = the photo's own size) }
const PHOTOFIT = {};
if (HD){
  const S = HD.BRANDS.find(b => b.k === 'S'), Pl = HD.BRANDS.find(b => b.k === 'Pl'), F = HD.BRANDS.find(b => b.k === 'F');
  // the homepage sealer panel: the Brezo page's "How the seal is made" photo (the user's pick, 13 Nov)
  if (S){ S.photo = 'img/jars-hero.jpg'; S.photoLbl = 'Jars under the sealing head'; S.list = S.list.map(r => r[0] === 'Brezo 3C SS' ? ['Brezo 3', 'Online, high speed'] : r[0] === 'Brezo A' ? ['Brezo A', 'Online, medium speed'] : r[0] === 'Aurae 3' ? ['Aurae 3', 'Water cooled, high speed'] : r); S.specs = ['20–150 mm necks', 'up to 80 ft/min', 'air or water cooled']; }
  if (F) F.cut = 'img/act/mnl.webp';
  // the homepage Simco-Ion panel: the IQ Power system photo (Options Lab pick S6, 15 Nov)
  const I = HD.BRANDS.find(b => b.k === 'I'); if (I){ I.photo = 'img/d3/iq-power-system.jpg'; I.photoLbl = 'Simco-Ion IQ Power system'; }
  // Simco Panel Lab pick S1 (16 Nov): the photo is only 400 × 270, so it is shown whole on white and never enlarged past its own size
  PHOTOFIT['img/d3/iq-power-system.jpg'] = { bg: '#FFFFFF', w: .86, h: .48, max: 1 };
  if (Pl){ delete Pl.ext; Object.assign(Pl, { name: 'PlasmaRight', photo: 'img/d3/pr-machine.jpg', photoLbl: 'PlasmaRight plasma treater', list: [['Textiles', 'Plasma treatment of fabric'], ['Grains', 'An alternative to fumigation']] }); }
  ['cur', 'neu'].forEach(k => { if (HD.T && HD.T[k] && HD.T[k].Pl) HD.T[k].Pl = ['Plasma treaters', 'PlasmaRight plasma treaters for textiles and grains.']; });
  const fs = HD.FINDER && HD.FINDER.S;
  if (fs) fs.a = [
    ['By hand, low volume or lab', ['brezop'], 'Brezo P, hand-held, 4–6 bottles a minute.'],
    ['Online, medium speed', ['brezoa'], 'Brezo A, 40–60 ft/min, runs in ambient temperatures up to 45 °C.'],
    ['Online, high speed', ['brezo2', 'brezo3'], 'Brezo 2 at 40–60 ft/min, or Brezo 3 at 60–80 ft/min, both with touch-screen PLC control.'],
    ['Wide mouths up to 150 mm, water cooled', ['aurae3'], 'Aurae 3, water cooled, 80 ft/min, necks up to 150 mm.']];
  const par = (HD.PARTNERS || []).find(p => p[0] === 'Plasmaright'); if (par) par[0] = 'PlasmaRight';
}
// enquiry entries for the PlasmaRight page
P.plasmatex = { name: 'PlasmaRight · textiles', sub: 'Plasma treatment of fabric', img: null, spec: [] };
P.plasmagrain = { name: 'PlasmaRight · grains', sub: 'Plasma treatment of grain', img: null, spec: [] };

/* ---------- 5 · hub pieces site.js asks for ---------- */
const SIG = {
  fluxosealer: ['img/d3/ics-logo.webp', 'ICS · Induction Cap Sealer by Arshad Electronics', 'Sealing consistently, since 1994.', 720, 111],
  fluxomatic: ['img/d3/act-logo.webp', 'ACT · Arshad Corona Treater', 'Surface Treatment, Guaranteed.', 720, 95]
};
const sig = id => { const s = SIG[id]; return s ? `<div class="d3-sig rv"><img src="${s[0]}" alt="${esc(s[1])}" width="${s[3]}" height="${s[4]}"><span class="d3-sigl" aria-hidden="true"></span><span class="d3-sigt">${esc(s[2])}</span></div>` : ''; };
// the three steps of the brochure's drawing, redrawn in the site's style (C6)
function sealSteps(){
  const head = n => `<rect x="18" y="8" width="124" height="20" rx="7" class="hd"/>${Array.from({ length: 14 }, (_, i) => `<circle cx="${26 + i * 8.5}" cy="18" r="1.6" class="dot"/>`).join('')}<circle cx="80" cy="18" r="13" class="num"/><text x="80" y="23" text-anchor="middle" class="numt">${n}</text>`;
  const bottle = '<path d="M56 96h48v22l34 40v52H22v-52l34-40z" class="bt"/>';
  const cap = '<path d="M46 124V74a6 6 0 0 1 6-6h56a6 6 0 0 1 6 6v50" class="cp"/>';
  const st = [
    [1, `${head(1)}${bottle}<rect x="54" y="80" width="52" height="7" rx="2" class="fl"/>${cap}`, 'The capped bottle, with the foil liner inside the cap'],
    [2, `${head(2)}<g class="fld">${[0, 1, 2].map(i => `<ellipse cx="58" cy="${52 - i}" rx="${13 + i * 6}" ry="${8 + i * 4}"/><ellipse cx="102" cy="${52 - i}" rx="${13 + i * 6}" ry="${8 + i * 4}"/>`).join('')}</g>${bottle}<rect x="54" y="86" width="52" height="7" rx="2" class="fl hot"/>${cap}`, 'The field heats the foil and melts its coating'],
    [3, `${head(3)}${bottle}<rect x="54" y="90" width="52" height="7" rx="2" class="fl done"/>${cap}`, 'The coating fuses on the bottle mouth: sealed']
  ];
  return `<div class="d3-steps rv" role="list">${st.map(s => `<figure class="d3-step" role="listitem"><svg viewBox="0 0 160 212" aria-hidden="true">${s[1]}</svg><figcaption><b>${s[0]}</b>${esc(s[2])}</figcaption></figure>`).join('')}</div>`;
}
const coronaResults = () => `<p class="d3-resh">The result is:</p><ul class="d3-ticks">${RESULTS.map(r => `<li>${esc(r)}</li>`).join('')}</ul>`;
function hubExtra(id, sec, SHd){
  if (id !== 'fluxomatic') return '';
  return sec('', 'h-fits', 'Where it fits', `${SHd('Where it fits', 'The lines a corona treater fits')}<div class="d3-fits rv"><div class="d3-fitg"><b>Blown film extruders</b><div class="chiprow">${FITS_BLOWN.map(x => `<span>${esc(x)}</span>`).join('')}</div></div><div class="d3-fitg"><b>Converting and other lines</b><div class="chiprow">${FITS.map(x => `<span>${esc(x)}</span>`).join('')}</div></div></div>`);
}
const bottles = () => `<div class="d3-bottles rv"><span class="eb">Types of bottles</span><div class="chiprow">${HS.bottles.map(b => `<span>${esc(b)}</span>`).join('')}</div></div>`;
// the series cards on the two family pages say what the series is (fix #3)
const CARD = { brezo: 'Air cooled induction cap sealers: Brezo P, Brezo A, Brezo 2 and Brezo 3.', aurae: 'Water cooled induction cap sealer: Aurae 3.' };

/* ---------- 5b · Options Lab picks (15 Nov) ---------- */
// Aurae page, A1: "What comes with an Aurae 3" replaces "More about Aurae series" (the motto quote and the client marquee).
// The numbers sit on the brochure photo; their places are shares of the photo's own box. Wording from the ICS brochure.
const AU_PARTS = [
  ['Panel cabinet', 'The induction sealer control panel', 10.8, 45.7],
  ['Touch-screen stand', 'PLC controlled safety interlocks with HMI', 35.2, 12],
  ['Sealing head', 'Adjustable height, 0 – 350 mm', 71.2, 13.1],
  ['Line conveyor', 'The head unit sits over the conveyor', 61.6, 50],
  ['Modular tower light', 'For fault indication', 56.9, 1.2]
];
const auParts = () => `<div class="d3-parts"><figure class="rv"><div class="d3-pimg"><img src="img/cut-fluxosealer--aurae3.webp" alt="Aurae 3 with its panel cabinet, touch-screen stand and sealing head over the line conveyor">${AU_PARTS.map((p, i) => `<i aria-hidden="true" style="left:${p[2]}%;top:${p[3]}%">${i + 1}</i>`).join('')}</div></figure>
  <ol class="rv">${AU_PARTS.map((p, i) => `<li><b aria-hidden="true">${i + 1}</b><span>${esc(p[0])}<small>${esc(p[1])}</small></span></li>`).join('')}</ol></div>`;
// Blown / cast film finder, F2: each card scores the five checks ("4 of 5 match", a five-step meter) and says what is off
const APP_ORDER = ['Printing', 'Lamination', 'Coating'];
const andList = a => a.length > 1 ? a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1] : a[0] || '';
function fitScore(p, blown, f, W, V){
  const c = [
    [f.line === 'blown' ? blown : !blown, f.line === 'blown' ? 'needs a printing / lamination machine' : 'needs a blown film extruder'],
    [f.film !== 'c' || !!p.conductive, 'non-conductive film only'],
    [p.app.includes(f.app), 'made for ' + andList([...p.app].sort((a, b) => APP_ORDER.indexOf(a) - APP_ORDER.indexOf(b))).toLowerCase()],
    [W >= p.w[0] && W <= p.w[1], W < p.w[0] ? `starts at ${p.w[0]} mm` : `up to ${p.w[1]} mm`],
    [V <= p.v, `tops out at ${p.v} m/min`]
  ];
  const k = c.filter(x => x[0]).length, bad = c.filter(x => !x[0]);
  return `<span class="d3-score">${k === 5 ? 'Full match' : `${k} of 5 match`}</span><span class="d3-meter" aria-hidden="true">${c.map(x => `<i${x[0] ? ' class="on"' : ''}></i>`).join('')}</span>` +
    (bad.length ? `<span class="d3-off"><b>Off:</b> ${bad.map(x => `<em>${esc(x[1])}</em>`).join(' · ')}</span>` : '');
}

/* ---------- 6 · Simco-Ion page (modelled on simco-ion.eu; the user's prototype, system strip removed) ---------- */
const sOne = (cls, inner, id) => `<section class="p-sec d3-sec ${cls || ''}"${id ? ` id="${id}"` : ''}><div class="p-wrap">${inner}</div></section>`;
const sech = (eb, h, sub) => `<div class="d3-sech"><span class="d3-eb">${esc(eb)}</span><h2 class="p-h2 rv">${esc(h)}</h2>${sub ? `<p class="p-sub">${esc(sub)}</p>` : ''}</div>`;
const enqLinks = (html, rows) => html.replace('</div></div>\n    <form class="p-card" data-enq', `</div><div class="p-card d3-links">${rows.map(r => `<div><small>${esc(r[0])}</small>${ext(r[1], esc(r[2]) + ' <span aria-hidden="true">↗</span>')}</div>`).join('')}</div></div>\n    <form class="p-card" data-enq`);
const simco = PB.BUILDS.find(b => b.id === 'simco');
if (simco){
  simco.style = 'industrial';
  simco.render = () => {
    const S = D.simco;
    return `<div class="d3p d3-simco">
    <section class="p-sec d3-hero" data-hero><div class="p-wrap d3-herog"><div>
      <span class="d3-kick">Simco-Ion · authorised distributor in India</span>
      <h1 class="p-h1">Static control for plastics and packaging lines</h1>
      <p class="p-lede">Arshad Electronics is the authorised distributor for Simco-Ion products in India. Simco-Ion makes the equipment that takes static charge off film, sheet and labels, so your line runs clean and your operators stay safe.</p>
      <div class="p-actions"><a class="p-btn acc" href="#d3-products">See the products</a><a class="p-btn" href="#enq">Ask about your line</a></div></div>
      <figure class="d3-heropic d3-white"><img class="d3-slogo" src="img/d3/simco-logo.webp" alt="Simco-Ion" width="300" height="74"><img class="d3-main zoomable" src="img/d3/iq-power-system.webp" alt="Simco-Ion IQ Power static neutralising system: control station, bars and power supplies"></figure></div></section>
    ${sOne('', `<div class="d3-two">${sech('Why static control', 'Static costs time, material and safety')}<p class="p-lede">Static builds up wherever film, sheet or labels run fast over rollers. It makes material cling and jam, pulls dust onto the surface, and gives operators shocks. Simco-Ion's static neutralising systems and bars are suitable for plastic and packaging solutions, and Arshad Electronics is the authorised distributor for Simco-Ion products in India.</p></div>`)}
    ${sOne('', `${sech('Products', 'Two ways to control it', 'Both are suitable for plastic and packaging applications. Models, specifications and datasheets come from Simco-Ion.')}
      <div class="d3-g2">${[['iqpower', 'iq-power-system', 'Simco-Ion IQ Power static neutralising system', 'Static neutralising system', 'IQ Power', 'A static neutralising system for plastics and packaging lines that need controlled, monitored static elimination.'],
        ['iqeasy', 'iq-easy-bar', 'Simco-Ion IQ Easy static neutralising bar', 'Static neutralising bar', 'IQ Easy', 'A static neutralising bar for the same plastic and packaging applications.']].map(c => `<article class="p-card d3-prod"><div class="d3-pic d3-white"><img class="zoomable" src="img/d3/${c[1]}.webp" alt="${esc(c[2])}"></div><div class="d3-pad"><span class="d3-tag">${esc(c[3])}</span><h3 class="p-h2 d3-h3">${esc(c[4])}</h3><p>${esc(c[5])}</p><div class="p-actions"><button class="p-btn acc sm" type="button" data-ask="${c[0]}">Ask for the datasheet</button></div></div></article>`).join('')}</div>`, 'd3-products')}
    ${sOne('', `${sech('Simco-Ion worldwide', 'A global name in static control', "Simco-Ion's own figures for its business worldwide.")}<div class="d3-nums">${[['150+', 'countries where Simco-Ion is active'], ['10,000+', 'static solutions supplied every year'], ['450+', 'OEM customers']].map(n => `<div class="d3-num"><b>${n[0]}</b><span>${esc(n[1])}</span></div>`).join('')}</div>`)}
    ${sOne('', `${sech("Where it's used", 'Where static costs you')}<div class="d3-g2">${[['Static control solutions for plastic applications', S.plasticsP, S.plastics], ['Static control solutions for packaging', S.packagingP, S.packaging]].map(c => `<div class="p-card d3-pad"><h3 class="p-h3">${esc(c[0])}</h3><p class="p-note" style="margin:8px 0 0">${esc(c[1])}</p><div class="d3-chips">${c[2].map(x => `<span>${esc(x)}</span>`).join('')}</div></div>`).join('')}</div>`)}
    ${sOne('', `<div class="d3-two">${sech('About Simco-Ion', 'Part of the ITW group')}<p class="p-lede">Simco-Ion is a member of the global ITW group. It describes itself as the largest manufacturer of static eliminators and materials in the anti-static industry, with static control solutions supplied worldwide. Arshad Electronics represents Simco-Ion in India.</p></div>`)}
    ${sOne('', `${sech('From Simco-Ion', 'Watch and read more')}<div class="d3-g2">${[['https://www.youtube.com/@simco-ioneurope545', "Simco-Ion's corporate film", 'How Simco-Ion helps companies improve safety, efficiency and product quality. On YouTube.'], ['https://simco-ion.eu/resources/articles', 'Articles on static electricity', 'What static is, how to control it and how to use it. On simco-ion.eu.']].map(l => ext(l[0], `<span><b>${esc(l[1])}</b><span>${esc(l[2])}</span></span><i aria-hidden="true">↗</i>`, 'class="p-card d3-lk"')).join('')}</div>`)}
    ${enqLinks(U.enquiry({ products: ['iqpower', 'iqeasy'], title: 'Tell us about the static', sub: 'Describe the problem and the process; Arshad matches the right Simco-Ion product.', fields: [['problem', 'What you see', 'e.g. dust on film'], ['process', 'Process', 'e.g. film extrusion'], ['width', 'Web or bar width', 'e.g. 1600 mm'], ['speed', 'Line speed', 'e.g. 200 m/min']] }), [['Simco-Ion Europe', 'https://simco-ion.eu/', 'simco-ion.eu'], ['Simco-Ion', 'https://www.simco-ion.com/', 'simco-ion.com']])}</div>`;
  };
  simco.init = r => { askBtns(r); };
}
function askBtns(r){
  r.addEventListener('click', e => {
    const a = e.target.closest('[data-ask]'); if (!a) return;
    const f = r.querySelector('[data-enq]'); if (!f) return;
    if (f.prod) f.prod.value = a.dataset.ask;
    if (f.msg && P[a.dataset.ask]) f.msg.value = (a.dataset.msg || 'Please send the {0} datasheet.').replace('{0}', P[a.dataset.ask].name);
    const t = r.querySelector('#enq'); if (t) t.scrollIntoView({ behavior: 'smooth' });
  });
}

/* ---------- 7 · PlasmaRight page (new; the user's prototype picks: family option D, patented line in the hero) ---------- */
const plasma = {
  id: 'plasmaright', t: 'PlasmaRight', vert: 'Plasma treaters · textiles and grains', img: null, style: 'industrial', notes: {},
  render(){
    return `<div class="d3p d3-plasma">
    <section class="p-sec d3-hero" data-hero><div class="p-wrap d3-herog"><div>
      <span class="d3-kick">PlasmaRight · part of the Arshad family</span>
      <h1 class="p-h1">Plasma treaters for textiles and grains</h1>
      <p class="d3-co">Plasma Right India Pvt. Ltd.</p>
      <p class="p-lede">PlasmaRight is our patented plasma treater technology for textiles and grains. Its treaters change the surface of fabric and grain using ionised gas, instead of chemicals or heat.</p>
      <div class="p-actions"><a class="p-btn acc" href="#enq">Ask about plasma treatment</a>${ext('https://plasmaright.com/', 'Visit plasmaright.com <span aria-hidden="true">↗</span>', 'class="p-btn"')}</div></div>
      <figure class="d3-heropic d3-sq"><img class="zoomable" src="img/d3/pr-machine.webp" alt="PlasmaRight plasma treatment machine running fabric over a roller" width="1079" height="1079"></figure></div></section>
    ${sOne('', `<div class="d3-two">${sech('What is plasma treatment', 'The fourth state of matter')}<div><p class="p-lede">Plasma is a partially ionised gas, created by combining reactive gas molecules with an electric field. Plasma surface treatment uses it to modify only the surface of a material, enhancing its properties without compromising its core characteristics.</p><p class="p-lede" style="margin-top:14px">It is a highly effective, economical and environmentally safe way to treat a surface.</p>
      <ul class="d3-facts">${[['Low temperature', 'Cold plasma, no excess heat'], ['Fewer chemicals', 'Less use of harmful chemicals'], ['Surface only', 'The core of the material is unchanged']].map(f => `<li><b>${esc(f[0])}</b><span>${esc(f[1])}</span></li>`).join('')}</ul></div></div>`)}
    ${sOne('', `${sech('Two uses', 'Textiles and grains')}<div class="d3-uses">
      <article class="p-card d3-use"><div class="d3-usepic"><img class="zoomable" src="img/d3/pr-textiles.webp" alt="Textile: folded grey fabric" width="1024" height="1024"></div><div class="d3-pad"><span class="d3-tag">Textiles</span><h3 class="p-h2 d3-h3">Better fabric, fewer chemicals</h3><p>Plasma treatment improves how fabric takes dye, water and adhesive, and it fits into existing production lines.</p>
        <ul class="d3-ticks d3-2col">${['Wettability', 'Adhesive bonding between layers', 'Printability', 'Water-repellent or water-absorbent finishes', 'Dirt repellence', 'Anti-static properties'].map(x => `<li>${esc(x)}</li>`).join('')}</ul></div></article>
      <article class="p-card d3-use gr"><div class="d3-usepic"><img class="zoomable" src="img/d3/pr-grains.webp" alt="Grains: a bowl of rice with wheat ears" width="1024" height="1024"></div><div class="d3-pad"><span class="d3-tag">Grains</span><h3 class="p-h2 d3-h3">An alternative to fumigation</h3><p>A non-chemical, non-thermal way to treat stored grain. Studies show it acts on insects at every stage (eggs, larvae and adults), and on fungi and bacteria, within minutes.</p>
        <ul class="d3-ticks d3-2col">${['Disinfestation', 'Microbial and enzyme inactivation', 'Germination', 'Pesticide reduction'].map(x => `<li>${esc(x)}</li>`).join('')}</ul></div></article></div>`)}
    ${sOne('', `<div class="d3-band"><div class="d3-lock"><img src="img/d3/ae-logo.webp" alt="Arshad Electronics" width="300" height="66"><span class="d3-plus" aria-hidden="true"></span><span class="d3-prw" translate="no">Plasma<b>Right</b></span></div>
      <h2 class="p-h2 rv">Two names, one team</h2><p>PlasmaRight comes from the people behind Arshad Electronics' corona treaters and induction cap sealers. The same engineers, the same factory floor, a new kind of surface treatment.</p>
      <div class="p-actions">${link('about', 'About Arshad Electronics', 'class="p-btn acc"')}${ext('https://plasmaright.com/', 'plasmaright.com <span aria-hidden="true">↗</span>', 'class="p-btn"')}</div></div>`, 'd3-family')}
    ${enqLinks(U.enquiry({ products: ['plasmatex', 'plasmagrain'], title: 'Ask about plasma treatment', sub: 'Tell us what you want to treat. Arshad passes it to the PlasmaRight team.', fields: [['mat', 'Material', 'e.g. cotton, polyester, wheat'], ['goal', 'What do you want to achieve?', 'e.g. better dye uptake, insect control']] }), [['PlasmaRight', 'https://plasmaright.com/', 'plasmaright.com'], ['Get a quote there', 'https://plasmaright.com/Plasma/contact/', 'PlasmaRight contact page']])}</div>`;
  },
  init(r){ askBtns(r); }
};
if (!PB.BUILDS.some(b => b.id === 'plasmaright')) PB.BUILDS.push(plasma);

/* ---------- 8 · the announcement pop-up (d2.js calls this; Pop-up Lab picks A3 + B1 + D2) ---------- */
const BELL = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9a6 6 0 1 1 12 0c0 6 2.5 7.5 2.5 7.5h-17S6 15 6 9"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>';
function popup(list, card, done){
  if (!list || !list.length || document.querySelector('.d3-pop')) return;
  let i = 0;
  const box = document.createElement('aside'); box.className = 'd3-pop'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-label', 'Announcement');
  const site = document.getElementById('site');
  if (site){ const cs = getComputedStyle(site); ['--bg', '--surf', '--surf2', '--ink', '--mut', '--line', '--brand', '--brandInk', '--brandTx', '--fH', '--fB', '--fM'].forEach(k => { const v = cs.getPropertyValue(k).trim(); if (v) box.style.setProperty(k, v); }); }
  const draw = () => {
    box.innerHTML = `<div class="hd">${BELL}<span>Announcement</span><button type="button" class="x" data-d3x aria-label="Close">×</button></div><div class="bd" aria-live="polite">${card(list[i])}
      ${list.length > 1 ? `<div class="pg"><span>${i + 1} of ${list.length}</span><span><button type="button" data-d3pg="-1" aria-label="Previous announcement"${i ? '' : ' disabled'}>‹</button><button type="button" data-d3pg="1" aria-label="Next announcement"${i < list.length - 1 ? '' : ' disabled'}>›</button></span></div>` : ''}</div>`;
  };
  const close = () => { box.classList.remove('on'); document.removeEventListener('keydown', key); setTimeout(() => box.remove(), 450); if (done) done(); };
  const key = e => { if (e.key === 'Escape') close(); };
  box.addEventListener('click', e => {
    if (e.target.closest('[data-d3x]') || e.target.closest('.d2-annlink')) { close(); return; }
    const b = e.target.closest('[data-d3pg]'); if (b){ i = Math.max(0, Math.min(list.length - 1, i + +b.dataset.d3pg)); draw(); const f = box.querySelector(`[data-d3pg="${b.dataset.d3pg}"]:not([disabled])`) || box.querySelector('[data-d3x]'); f.focus(); }
  });
  document.addEventListener('keydown', key);
  draw(); document.body.appendChild(box);
  requestAnimationFrame(() => requestAnimationFrame(() => box.classList.add('on')));
}
window.D3POP = popup;

/* ---------- 8b · "Save as PDF" on every product page's spec table and in the shortlist (replaces "Save .csv") ----------
   Builds an A4 spec sheet in the browser with jsPDF (loaded from cdnjs on first use) and downloads it. pages-ui.js calls
   D3PDF(pids, conv, units): conv turns a value into the visitor's units. */
const PDF_JS = ['https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js'];
let pdfLib = null;
const loadJs = src => new Promise((res, rej) => { const el = document.createElement('script'); el.src = src; el.onload = res; el.onerror = () => rej(new Error('load')); document.head.appendChild(el); });
/* Loader Lab W8 (16 Nov): the pressed button fills with the real download progress of jsPDF.
   The scripts are fetched as a stream (cdnjs allows CORS) and run from a blob URL; cdnjs sends them compressed, so the
   uncompressed sizes below stand in when Content-Length is the smaller compressed size. Any fetch problem falls back to a plain <script>. */
const PDF_KB = [356, 38];
const fetchJs = (src, kb, on) => fetch(src, { mode: 'cors' }).then(r => {
  if (!r.ok || !r.body || !r.body.getReader) throw new Error('fetch');
  const tot = Math.max(+r.headers.get('content-length') || 0, kb * 1024), rd = r.body.getReader(), parts = []; let got = 0;
  const pump = () => rd.read().then(({ done, value }) => { if (done) return new Blob(parts, { type: 'text/javascript' }); parts.push(value); got += value.length; on(Math.min(1, got / tot)); return pump(); });
  return pump();
}).then(b => new Promise((res, rej) => { const u = URL.createObjectURL(b), el = document.createElement('script'); el.src = u; el.onload = () => { URL.revokeObjectURL(u); res(); }; el.onerror = () => rej(new Error('load')); document.head.appendChild(el); }));
const loadJsP = (src, kb, on) => fetchJs(src, kb, on).catch(() => window.jspdf && src === PDF_JS[0] ? null : loadJs(src)).then(() => on(1));
const pdfReady = (on = () => {}) => (pdfLib = pdfLib || (async () => { if (!window.jspdf) await loadJsP(PDF_JS[0], PDF_KB[0], k => on(k * .78)); if (!window.jspdf.jsPDF.API.autoTable) await loadJsP(PDF_JS[1], PDF_KB[1], k => on(.78 + k * .1)); return window.jspdf.jsPDF; })().catch(e => { pdfLib = null; throw e; }));
// the button that asked for the PDF (pages-ui.js calls D3PDF without it): caught on the way down, before its own click handler
let pdfBtn = null;
document.addEventListener('click', e => { const b = e.target && e.target.closest && e.target.closest('[data-savespec], [data-csv]'); if (b) pdfBtn = b; }, true);
function pbar(b){
  if (!b || !b.isConnected) return null;
  clearTimeout(b._aept); b.classList.remove('ae-pok', 'ae-pbad'); b.classList.add('ae-pf'); b.setAttribute('aria-busy', 'true');
  let shown = 0;
  const set = k => { shown = Math.max(shown, Math.min(1, k)); b.style.setProperty('--aep', shown.toFixed(3)); b.dataset.aep = Math.round(shown * 100) + '%'; };
  const end = (cls, txt) => { b.classList.add(cls); b.dataset.aep = txt; b.removeAttribute('aria-busy');
    b._aept = setTimeout(() => { b.classList.remove('ae-pf', 'ae-pok', 'ae-pbad'); b.removeAttribute('data-aep'); b.style.removeProperty('--aep'); }, 1800); };
  set(0.02);
  return { set, done: () => { set(1); end('ae-pok', '✓'); }, fail: () => end('ae-pbad', '!') };
}
const logoData = () => new Promise(res => { const i = new Image(); i.onload = () => { try { const k = Math.min(1, 520 / i.naturalWidth), c = document.createElement('canvas'); c.width = Math.round(i.naturalWidth * k); c.height = Math.round(i.naturalHeight * k); const x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height); x.drawImage(i, 0, 0, c.width, c.height); res([c.toDataURL('image/jpeg', 0.9), i.naturalWidth / i.naturalHeight]); } catch (e){ res(null); } }; i.onerror = () => res(null); i.src = 'img/brand/AE_logo_horizontal.png'; });
// the PDF's built-in fonts cover Western European text; anything else (arrows, stars) is swapped for a plain sign
const pdfTxt = s => String(s == null ? '' : s).replace(/\s+/g, ' ').replace(/\u2192/g, '->').replace(/\u2190/g, '<-').replace(/\u2212/g, '-').replace(/[\u2606\u2605]/g, '').replace(/[^\x00-\xFF\u2013\u2014\u2018\u2019\u201C\u201D\u2022\u2026\u20AC\u2122]/g, '').trim();
const FAM = { films: 'Fluxomatic® corona treaters', woven: 'Fluxomatic® corona treaters', objects: 'Fluxomatic® corona treaters', brezo: 'Fluxosealer® induction cap sealers', aurae: 'Fluxosealer® induction cap sealers', simco: 'Simco-Ion static eliminators', plasmaright: 'PlasmaRight plasma treaters' };
const toast = m => { try { if (window.PU && PU.toast) PU.toast(m); } catch (e){} };
async function specPdf(pids, conv, units){
  pids = (pids || []).filter(id => P[id]); if (!pids.length) return;
  const bar = pbar(pdfBtn); pdfBtn = null;
  if (!bar) toast('Making the PDF…');
  let J; try { J = await pdfReady(k => bar && bar.set(k)); } catch (e){ if (bar) bar.fail(); toast('Couldn’t make the PDF. Check your connection and try again.'); return; }
  if (bar) bar.set(.88);
  const logo = await logoData();
  if (bar) bar.set(.93);
  const many = pids.length > 1, doc = new J({ unit: 'mm', format: 'a4', orientation: pids.length > 3 ? 'landscape' : 'portrait' });
  const W = doc.internal.pageSize.getWidth(), H = doc.internal.pageSize.getHeight(), M = 16;
  const INK = [31, 29, 23], MUT = [98, 92, 78], OLIVE = [87, 102, 48], LINE = [221, 213, 195], PAPER = [245, 241, 232];
  const val = (pid, label) => { const r = P[pid].spec.find(x => x[0] === label); return !r ? '–' : r[1] ? pdfTxt(conv ? conv(r[1]) : r[1]) : 'On request'; };
  const head = () => {
    if (logo) doc.addImage(logo[0], 'JPEG', M, 11, 9 * logo[1], 9, 'aelogo'); else { doc.setFont('helvetica', 'bold'); doc.setFontSize(14); doc.setTextColor(...OLIVE); doc.text('ARSHAD ELECTRONICS', M, 18); }
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5); doc.setTextColor(...MUT); doc.text(many ? 'Shortlist · specifications' : 'Specification sheet', W - M, 17, { align: 'right' });
    doc.setDrawColor(...OLIVE); doc.setLineWidth(0.6); doc.line(M, 24, W - M, 24);
  };
  head();
  let y = 30;
  const cur = (window.SITE && SITE.ST && SITE.ST.cur) || '';
  const ensure = need => { if (y + need > H - 26){ doc.addPage(); head(); y = 30; } };
  const para = (t, size, color, style, gap) => { doc.setFont('helvetica', style || 'normal'); doc.setFontSize(size); doc.setTextColor(...color); const lines = doc.splitTextToSize(pdfTxt(t), W - 2 * M); lines.forEach(l => { ensure(size * 0.45); y += size * 0.42; doc.text(l, M, y); }); y += size * 0.14 + (gap || 0); };
  if (!many){
    const p = P[pids[0]];
    para(((FAM[cur] ? FAM[cur] + ' · ' : '') + (p.sub || '')).toUpperCase(), 8.5, OLIVE, 'bold', 2);
    para(p.name, 22, INK, 'bold', 2.5);
    if (p.desc) para(p.desc, 10, MUT, 'normal', 4);
  } else { para('Your shortlist', 22, INK, 'bold', 2.5); para(pids.map(id => P[id].name).join(', '), 10, MUT, 'normal', 4); }
  const labels = []; pids.forEach(id => P[id].spec.forEach(r => { if (!labels.includes(r[0])) labels.push(r[0]); }));
  doc.autoTable({
    startY: y, margin: { left: M, right: M, top: 32, bottom: 26 }, theme: 'plain',
    head: many ? [['', ...pids.map(id => pdfTxt(P[id].name))]] : undefined,
    body: labels.map(l => [pdfTxt(l), ...pids.map(id => val(id, l))]),
    styles: { font: 'helvetica', fontSize: 9.5, textColor: INK, cellPadding: { top: 1.8, bottom: 1.8, left: 1.5, right: 3 }, lineColor: LINE, lineWidth: { bottom: 0.25 } },
    headStyles: { fontStyle: 'bold', textColor: INK, fillColor: PAPER, lineWidth: { bottom: 0.5 }, lineColor: OLIVE },
    columnStyles: { 0: { fontStyle: 'bold', textColor: MUT, cellWidth: many ? 40 : 58 } },
    didDrawPage: () => head()
  });
  y = doc.lastAutoTable.finalY + 6;
  if (units && units !== 'site') para('Figures converted to ' + units + ' units on the website.', 8.5, MUT, 'normal', 3);
  if (!many){
    const p = P[pids[0]];
    const block = (title, items) => { if (!items || !items.length) return; ensure(14); para(title, 12, INK, 'bold', 1.5);
      items.forEach(it => { doc.setFont('helvetica', 'normal'); doc.setFontSize(9.5); const lines = doc.splitTextToSize(pdfTxt(it), W - 2 * M - 6); ensure(lines.length * 4.2 + 1); y += 3.4; doc.setFillColor(...OLIVE); doc.rect(M + 0.5, y - 2.3, 1.7, 1.7, 'F'); doc.setTextColor(...INK); lines.forEach((l, k) => { if (k) y += 4.2; doc.text(l, M + 6, y); }); y += 1.2; }); y += 3.5; };
    block('Variants and options', (p.variants || []).map(v => v[0] + ' – ' + v[1]));
    block('Features', p.feats);
    block('Safety and interlocks', p.safety);
  }
  // footer on every page: contacts, address, page numbers
  const C = D.company || {}, pairs = (C.pairs || []).map(q => [q.label, q.phone, q.email].filter(Boolean).join('  ')).join('   ·   ');
  const n = doc.getNumberOfPages(), when = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  for (let i = 1; i <= n; i++){
    doc.setPage(i); doc.setDrawColor(...LINE); doc.setLineWidth(0.3); doc.line(M, H - 19, W - M, H - 19);
    doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(...INK); doc.text('Arshad Electronics Pvt. Ltd.', M, H - 14);
    doc.setFont('helvetica', 'normal'); doc.setTextColor(...MUT); doc.text(pdfTxt(pairs), M, H - 10); doc.text(pdfTxt(C.addr || ''), M, H - 6);
    doc.text('Page ' + i + ' of ' + n, W - M, H - 14, { align: 'right' }); doc.text(when, W - M, H - 10, { align: 'right' });
  }
  const slug = t => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  doc.save(many ? 'arshad-shortlist-specs.pdf' : 'arshad-' + slug(P[pids[0]].name) + '-spec.pdf');
  if (bar) bar.done();
  toast('PDF saved');
}
window.D3PDF = specPdf;

/* ---------- 8c · product photos enlarge on click (fix, 13 Nov) ----------
   site.js only reaches its "enlarge" step for clicks inside a button or link, so the photo stages on the product pages
   (a plain <img class="zoomable">) never opened. This handles exactly those images; buttons and links keep their own. */
document.addEventListener('click', e => {
  const t = e.target;
  if (!t || !t.matches || !t.matches('#site img.zoomable') || t.closest('a, button')) return;
  if (window.SITE && SITE.X && !SITE.X.gallery) return;
  if (window.PU && PU.lightbox){ e.preventDefault(); PU.lightbox(t.currentSrc || t.src, t.alt); }
});

/* ---------- 9 · Spanish and Russian for the new text ---------- */
const TR = {
  // cap sealers
  'Online, medium speed': ['En línea, velocidad media', 'Поточный, средняя скорость'],
  'Water cooled, high speed': ['Refrigerado por agua, alta velocidad', 'Водяное охлаждение, высокая скорость'],
  '3C SS · online, high speed': ['3C SS · en línea, alta velocidad', '3C SS · поточный, высокая скорость'],
  'Brezo 3': ['Brezo 3', 'Brezo 3'],
  'The Brezo A is a medium speed air cooled online induction cap sealing machine used on a continuous production filling and capping line. It consists of an induction sealing head unit placed over the line conveyor.': ['La Brezo A es una selladora de tapas por inducción en línea, refrigerada por aire y de velocidad media, para líneas continuas de llenado y tapado. Consiste en un cabezal de sellado por inducción situado sobre el transportador de la línea.', 'Brezo A — поточная индукционная машина для запайки крышек с воздушным охлаждением, средней скорости, для непрерывных линий розлива и укупорки. Индукционная запаечная головка установлена над конвейером линии.'],
  'The Brezo 2 is a high speed air cooled online induction cap sealing machine used on a continuous production filling and capping line. It consists of an induction sealing head unit placed over the line conveyor.': ['La Brezo 2 es una selladora de tapas por inducción en línea, refrigerada por aire y de alta velocidad, para líneas continuas de llenado y tapado. Consiste en un cabezal de sellado por inducción situado sobre el transportador de la línea.', 'Brezo 2 — поточная высокоскоростная индукционная машина для запайки крышек с воздушным охлаждением для непрерывных линий розлива и укупорки. Индукционная запаечная головка установлена над конвейером линии.'],
  'The Brezo 3 is a high-speed air cooled online induction cap sealing machine used on a continuous production filling and capping line. It consists of an induction sealing head unit placed over the line conveyor.': ['La Brezo 3 es una selladora de tapas por inducción en línea, refrigerada por aire y de alta velocidad, para líneas continuas de llenado y tapado. Consiste en un cabezal de sellado por inducción situado sobre el transportador de la línea.', 'Brezo 3 — поточная высокоскоростная индукционная машина для запайки крышек с воздушным охлаждением для непрерывных линий розлива и укупорки. Индукционная запаечная головка установлена над конвейером линии.'],
  'The Aurae 3 is a water cooled high speed online induction cap sealing machine used on a continuous production filling and capping line. It consists of an induction sealing head unit placed over the line conveyor.': ['La Aurae 3 es una selladora de tapas por inducción en línea, refrigerada por agua y de alta velocidad, para líneas continuas de llenado y tapado. Consiste en un cabezal de sellado por inducción situado sobre el transportador de la línea.', 'Aurae 3 — поточная высокоскоростная индукционная машина для запайки крышек с водяным охлаждением для непрерывных линий розлива и укупорки. Индукционная запаечная головка установлена над конвейером линии.'],
  'Air cooled': ['Refrigerado por aire', 'Воздушное охлаждение'], 'Water cooled': ['Refrigerado por agua', 'Водяное охлаждение'],
  '{0} V AC, single phase, {1} Hz, {2} A': ['{0} V CA, monofásica, {1} Hz, {2} A', '{0} В перем. тока, одна фаза, {1} Гц, {2} А'],
  'Sealing speed': ['Velocidad de sellado', 'Скорость запайки'], 'Neck diameter': ['Diámetro del cuello', 'Диаметр горловины'], 'Head height': ['Altura del cabezal', 'Высота головки'],
  'Max power': ['Potencia máxima', 'Макс. мощность'], 'Footprint': ['Dimensiones', 'Габариты'],
  '{0} × {1} × {2} mm (l × b × h)': ['{0} × {1} × {2} mm (l × a × h)', '{0} × {1} × {2} мм (Д × Ш × В)'],
  'MS powder-coated or SS 304 enclosure': ['Carcasa de acero dulce con pintura en polvo o de acero inoxidable 304', 'Корпус из малоуглеродистой стали с порошковой окраской или из SS 304'],
  'SS 304 enclosure': ['Carcasa de acero inoxidable 304', 'Корпус из нержавеющей стали SS 304'],
  'Touch-screen PLC control': ['Control PLC con pantalla táctil', 'ПЛК-управление с сенсорным экраном'], 'Yes, with HMI': ['Sí, con HMI', 'Да, с HMI'],
  'Cooling water': ['Agua de refrigeración', 'Охлаждающая вода'], 'Demineralised': ['Desmineralizada', 'Деминерализованная'], 'Water tank MOC': ['Material del depósito de agua', 'Материал бака для воды'],
  'stainless enclosure': ['carcasa inoxidable', 'корпус из нержавеющей стали'],
  'No foil detection system: if the foil is absent in the bottle cap, an audio-visual alarm gets activated': ['Sistema de detección de lámina: si falta la lámina en la tapa, se activa una alarma audiovisual', 'Система обнаружения фольги: если в крышке нет фольги, включается звуковая и световая сигнализация'],
  'Auto on / off system: if a bottle is jammed or no bottle is detected, the machine stops sealing': ['Sistema de encendido / apagado automático: si una botella se atasca o no se detecta ninguna, la máquina deja de sellar', 'Система автоматического включения / выключения: если бутылка застряла или не обнаружена, машина прекращает запайку'],
  'No wad detector with bottle rejection system': ['Detector de falta de lámina con sistema de rechazo de botellas', 'Датчик отсутствия прокладки с системой отбраковки бутылок'],
  'Auto on / off system': ['Sistema de encendido / apagado automático', 'Система автоматического включения / выключения'],
  'Low / high voltage protection': ['Protección contra baja / alta tensión', 'Защита от пониженного / повышенного напряжения'],
  'Low / high current indication': ['Indicación de corriente baja / alta', 'Индикация низкого / высокого тока'],
  'Stalled bottle interlock': ['Bloqueo por botella detenida', 'Блокировка при остановке бутылки'],
  'Production / reject bottle counter': ['Contador de producción / botellas rechazadas', 'Счётчик продукции / отбракованных бутылок'],
  'Modular tower light for fault indication': ['Torre de señalización modular para indicar fallos', 'Модульная сигнальная колонна для индикации неисправностей'],
  'Digital height position indicator with position lock': ['Indicador digital de altura con bloqueo de posición', 'Цифровой указатель высоты с фиксатором положения'],
  'Adjustable height of sealing coil head: {0} – {1} mm': ['Altura ajustable del cabezal de la bobina de sellado: {0} – {1} mm', 'Регулируемая высота головки с катушкой: {0} – {1} мм'],
  'Castor PU wheels for easy movement of the machine': ['Ruedas de PU para mover la máquina con facilidad', 'Полиуретановые колёса для удобного перемещения машины'],
  'Levelling feet pads keep the machine level and secured to the floor': ['Patas niveladoras que mantienen la máquina nivelada y fija al suelo', 'Регулируемые опоры удерживают машину ровно и надёжно на полу'],
  'Touch screen control interface': ['Interfaz de control con pantalla táctil', 'Интерфейс управления с сенсорным экраном'],
  'Ambient operating temperature': ['Funciona a temperatura ambiente', 'Работа при температуре окружающей среды'],
  'Cooling water type: demineralised': ['Tipo de agua de refrigeración: desmineralizada', 'Тип охлаждающей воды: деминерализованная'],
  'Water tank MOC: stainless steel 304': ['Material del depósito de agua: acero inoxidable 304', 'Материал бака для воды: нержавеющая сталь 304'],
  'Edible oil': ['Aceite comestible', 'Пищевое масло'], 'Agro chemicals': ['Agroquímicos', 'Агрохимия'], 'Dairy products': ['Productos lácteos', 'Молочные продукты'], 'Pharma': ['Farmacéutica', 'Фармацевтика'],
  'Detergent': ['Detergentes', 'Моющие средства'], 'Chemicals': ['Químicos', 'Химия'], 'Cosmetics & personal care': ['Cosmética y cuidado personal', 'Косметика и средства личной гигиены'],
  'Leak proof sealing': ['Sellado sin fugas', 'Герметичная запайка без протечек'], 'Customer confidence': ['Confianza del cliente', 'Доверие покупателей'], 'Printing on seal': ['Impresión en el sello', 'Печать на мембране'],
  'Airtight hermetic sealing': ['Sellado hermético', 'Воздухонепроницаемая герметичная запайка'], 'Increased shelf life': ['Mayor vida útil', 'Увеличенный срок хранения'],
  'Protects product freshness & integrity': ['Protege la frescura y la integridad del producto', 'Сохраняет свежесть и целостность продукта'],
  'LDPE': ['LDPE', 'ПЭНП'], 'PET': ['PET', 'ПЭТ'], 'Glass': ['Vidrio', 'Стекло'], 'HDPE': ['HDPE', 'ПЭВП'], 'PP': ['PP', 'ПП'], 'PVC': ['PVC', 'ПВХ'],
  'Types of bottles': ['Tipos de botellas', 'Типы бутылок'],
  'What is induction cap sealing?': ['¿Qué es el sellado de tapas por inducción?', 'Что такое индукционная запайка крышек?'],
  'Induction cap sealing is a process where an aluminium foil is sealed on to the mouth of the plastic bottle to ensure airtight and leak-proof sealing. This is done by heating the aluminium foil by electromagnetic lines of force, which melts the coating under the foil that fuses on the bottle mouth.': ['El sellado de tapas por inducción es un proceso en el que una lámina de aluminio se sella sobre la boca de la botella de plástico para lograr un cierre hermético y sin fugas. Para ello se calienta la lámina de aluminio con líneas de fuerza electromagnéticas, que funden el recubrimiento bajo la lámina, y este se funde con la boca de la botella.', 'Индукционная запайка крышек — процесс, при котором алюминиевая фольга запаивается на горловине пластиковой бутылки, обеспечивая воздухонепроницаемость и отсутствие протечек. Фольга нагревается электромагнитными силовыми линиями, покрытие под ней плавится и сплавляется с горловиной бутылки.'],
  'This is a non-contact process and hence can be done at very high speeds and precision. This sealing process is used for pharmaceuticals, food products, lubricants, cosmetics, pesticides, chemicals, dyes, detergents, nutraceuticals, powders, agro chemicals, etc.': ['Es un proceso sin contacto, por lo que puede hacerse a muy alta velocidad y con gran precisión. Se usa para productos farmacéuticos, alimentos, lubricantes, cosméticos, pesticidas, químicos, tintes, detergentes, nutracéuticos, polvos, agroquímicos, etc.', 'Это бесконтактный процесс, поэтому он выполняется на очень высоких скоростях и с высокой точностью. Он применяется для фармацевтики, продуктов питания, смазочных материалов, косметики, пестицидов, химии, красителей, моющих средств, нутрицевтиков, порошков, агрохимии и т. д.'],
  'Fluxosealer® induction cap sealers come in two categories: the Brezo series of air-cooled systems and the Aurae series of water-cooled systems.': ['Las selladoras de tapas por inducción Fluxosealer® se dividen en dos categorías: la serie Brezo, refrigerada por aire, y la serie Aurae, refrigerada por agua.', 'Индукционные запайщики Fluxosealer® делятся на две категории: серия Brezo с воздушным охлаждением и серия Aurae с водяным охлаждением.'],
  'The capped bottle, with the foil liner inside the cap': ['La botella tapada, con la lámina dentro de la tapa', 'Закрытая бутылка с фольгой внутри крышки'],
  'The field heats the foil and melts its coating': ['El campo calienta la lámina y funde su recubrimiento', 'Поле нагревает фольгу и плавит её покрытие'],
  'The coating fuses on the bottle mouth: sealed': ['El recubrimiento se funde con la boca de la botella: sellada', 'Покрытие сплавляется с горловиной: запаяно'],
  'Sealing consistently, since 1994.': ['Sellando con constancia desde 1994.', 'Надёжная запайка с 1994 года.'],
  'Air cooled induction cap sealers: Brezo P, Brezo A, Brezo 2 and Brezo 3.': ['Selladoras de tapas por inducción refrigeradas por aire: Brezo P, Brezo A, Brezo 2 y Brezo 3.', 'Индукционные запайщики с воздушным охлаждением: Brezo P, Brezo A, Brezo 2 и Brezo 3.'],
  'Water cooled induction cap sealer: Aurae 3.': ['Selladora de tapas por inducción refrigerada por agua: Aurae 3.', 'Индукционный запайщик с водяным охлаждением: Aurae 3.'],
  'Online, medium speed · ': ['En línea, velocidad media · ', 'Поточный, средняя скорость · '],
  '{0}–{1} mm necks': ['cuellos de {0}–{1} mm', 'горловины {0}–{1} мм'],
  'Online, medium speed': ['En línea, velocidad media', 'Поточный, средняя скорость'],
  'Wide mouths up to {0} mm, water cooled': ['Bocas anchas de hasta {0} mm, refrigerada por agua', 'Широкие горловины до {0} мм, водяное охлаждение'],
  'Brezo A, {0}–{1} ft/min, runs in ambient temperatures up to {2} °C.': ['Brezo A, {0}–{1} ft/min, funciona a temperaturas ambiente de hasta {2} °C.', 'Brezo A, {0}–{1} фут/мин, работает при температуре окружающей среды до {2} °C.'],
  'Brezo {0} at {1}–{2} ft/min, or Brezo {3} at {4}–{5} ft/min, both with touch-screen PLC control.': ['Brezo {0} a {1}–{2} ft/min, o Brezo {3} a {4}–{5} ft/min, ambas con control PLC y pantalla táctil.', 'Brezo {0} на {1}–{2} фут/мин или Brezo {3} на {4}–{5} фут/мин, обе с ПЛК-управлением и сенсорным экраном.'],
  'Aurae {0}, water cooled, {1} ft/min, necks up to {2} mm.': ['Aurae {0}, refrigerada por agua, {1} ft/min, cuellos de hasta {2} mm.', 'Aurae {0}, водяное охлаждение, {1} фут/мин, горловины до {2} мм.'],
  'touch-screen PLC control': ['control PLC con pantalla táctil', 'ПЛК-управление с сенсорным экраном'],
  'Water cooled. High speed.': ['Refrigerada por agua. Alta velocidad.', 'Водяное охлаждение. Высокая скорость.'],
  'Water cooled · high speed': ['Refrigerada por agua · alta velocidad', 'Водяное охлаждение · высокая скорость'],
  'cooled, with demineralised water': ['refrigerada con agua desmineralizada', 'охлаждение деминерализованной водой'],
  'mm neck diameter': ['mm de diámetro del cuello', 'мм — диаметр горловины'],
  'Its PLC controlled safety interlocks work through a touch screen HMI, and its enclosure and water tank are stainless steel 304.': ['Sus bloqueos de seguridad controlados por PLC funcionan con una HMI de pantalla táctil, y la carcasa y el depósito de agua son de acero inoxidable 304.', 'Её защитные блокировки с ПЛК управляются через сенсорную HMI-панель, а корпус и бак для воды выполнены из нержавеющей стали 304.'],
  'Options include a slat chain conveyor and pneumatic rejection of any bottle that arrives without a foil.': ['Entre las opciones hay un transportador de cadena de tablillas y el rechazo neumático de cualquier botella que llegue sin lámina.', 'В числе опций — пластинчатый цепной конвейер и пневматическая отбраковка бутылок без фольги.'],
  'neck diameter': ['diámetro del cuello', 'диаметр горловины'], 'sealing speed': ['velocidad de sellado', 'скорость запайки'], 'max power': ['potencia máxima', 'макс. мощность'],
  // corona
  'Corona treatment is a surface modification process that increases the surface energy of polymer films, foils, paper, fabrics and other substrates before printing, coating or lamination.': ['El tratamiento corona es un proceso de modificación superficial que aumenta la energía superficial de películas poliméricas, láminas, papel, tejidos y otros sustratos antes de la impresión, el recubrimiento o el laminado.', 'Коронная обработка — процесс модификации поверхности, который повышает поверхностную энергию полимерных плёнок, фольги, бумаги, тканей и других материалов перед печатью, нанесением покрытия или ламинированием.'],
  'During the process, a controlled high-voltage electrical discharge creates microscopic changes on the material surface, improving its ability to bond with inks, adhesives, coatings and laminating films.': ['Durante el proceso, una descarga eléctrica controlada de alta tensión crea cambios microscópicos en la superficie del material y mejora su capacidad de adherirse a tintas, adhesivos, recubrimientos y películas de laminado.', 'В ходе процесса управляемый высоковольтный электрический разряд создаёт микроскопические изменения на поверхности материала и улучшает его сцепление с красками, клеями, покрытиями и ламинирующими плёнками.'],
  'The result is:': ['El resultado:', 'Результат:'],
  'Improved ink adhesion': ['Mejor adherencia de la tinta', 'Лучшая адгезия краски'], 'Better laminate bond strength': ['Mayor resistencia de la unión del laminado', 'Более прочное сцепление ламината'],
  'Enhanced coating performance': ['Mejor rendimiento del recubrimiento', 'Лучшее качество покрытия'], 'Consistent print quality': ['Calidad de impresión constante', 'Стабильное качество печати'],
  'Reduced rejection during production': ['Menos rechazos en producción', 'Меньше брака в производстве'],
  'Where it fits': ['Dónde encaja', 'Где применяется'], 'The lines a corona treater fits': ['Las líneas en las que encaja un tratador corona', 'Линии, на которые ставится установка коронной обработки'],
  'Blown film extruders': ['Extrusoras de película soplada', 'Экструдеры рукавной плёнки'], 'Converting and other lines': ['Conversión y otras líneas', 'Переработка и другие линии'],
  'Mono layer': ['Monocapa', 'Однослойные'], 'ABA': ['ABA', 'ABA'], 'OBC multilayer lines': ['Líneas multicapa OBC', 'Многослойные линии OBC'], 'Internal bubble cooling (IBC) lines': ['Líneas con enfriamiento interno de burbuja (IBC)', 'Линии с внутренним охлаждением рукава (IBC)'],
  'Cast film lines': ['Líneas de película cast', 'Линии плоскощелевой плёнки'], 'Cable printing': ['Impresión de cables', 'Печать на кабеле'], 'Boosting': ['Refuerzo del tratamiento', 'Дообработка'],
  'Coating machines': ['Recubridoras', 'Машины для нанесения покрытий'], 'Printing machines': ['Impresoras', 'Печатные машины'], 'Lamination machines': ['Laminadoras', 'Ламинаторы'], 'Narrow web label printers': ['Impresoras de etiquetas de banda estrecha', 'Узкорулонные принтеры этикеток'],
  'Surface Treatment, Guaranteed.': ['Tratamiento superficial, garantizado.', 'Обработка поверхности. Гарантированно.'],
  'Fin-type electrodes designed for easy maintenance and precise treatment control': ['Electrodos de aletas de fácil mantenimiento y control preciso del tratamiento', 'Ребристые электроды, простые в обслуживании, с точным контролем обработки'],
  'Aluminium treatment rollers fitted with a high-quality dielectric, ozone-resistant sleeve for long service life and consistent treatment': ['Rodillos de aluminio con manguito dieléctrico de alta calidad resistente al ozono, para una larga vida útil y un tratamiento constante', 'Алюминиевые валы с качественной диэлектрической озоностойкой оболочкой для долгого срока службы и стабильной обработки'],
  'Precision guide rollers ensure smooth web entry and exit through the treatment station': ['Rodillos guía de precisión para una entrada y salida suaves de la banda en la estación de tratamiento', 'Прецизионные направляющие валы обеспечивают плавный вход и выход полотна'],
  'Easy to maintain fin type electrodes for fixed treatment and micro gap adjustment': ['Electrodos de aletas de fácil mantenimiento para tratamiento fijo, con ajuste micrométrico del entrehierro', 'Простые в обслуживании ребристые электроды для постоянной обработки с микрорегулировкой зазора'],
  'Aluminium rollers, dynamically balanced and covered with a pure dielectric, ozone-resistant sleeve for long life': ['Rodillos de aluminio equilibrados dinámicamente y cubiertos con un manguito dieléctrico puro resistente al ozono, para una larga vida útil', 'Динамически сбалансированные алюминиевые валы с чистой диэлектрической озоностойкой оболочкой для долгого срока службы'],
  'Guide rollers for entry and exit of film': ['Rodillos guía para la entrada y salida de la película', 'Направляющие валы на входе и выходе плёнки'],
  'Assembly door open cut off': ['Corte al abrir la puerta del conjunto', 'Отключение при открытии дверцы узла'],
  '{0} corona treater for woven fabric': ['Tratador corona de {0} para tejido', 'Установка коронной обработки {0} для тканого материала'],
  '{0} mm corona treater for woven fabric': ['Tratador corona de {0} mm para tejido', 'Установка коронной обработки {0} мм для тканого материала'],
  'Plasma treater for grains': ['Tratador de plasma para granos', 'Плазменная установка для зерна'],
  'High-speed corona treater for conductive films': ['Tratador corona de alta velocidad para películas conductoras', 'Высокоскоростная установка коронной обработки для проводящих плёнок'],
  'There is no 3D model of this series yet.': ['Aún no hay modelo 3D de esta serie.', '3D-модели этой серии пока нет.'],
  // Simco-Ion
  'Simco-Ion · authorised distributor in India': ['Simco-Ion · distribuidor autorizado en la India', 'Simco-Ion · официальный дистрибьютор в Индии'],
  'Static control for plastics and packaging lines': ['Control de la estática para líneas de plásticos y envases', 'Контроль статики на линиях пластмасс и упаковки'],
  'Arshad Electronics is the authorised distributor for Simco-Ion products in India. Simco-Ion makes the equipment that takes static charge off film, sheet and labels, so your line runs clean and your operators stay safe.': ['Arshad Electronics es el distribuidor autorizado de los productos Simco-Ion en la India. Simco-Ion fabrica los equipos que eliminan la carga estática de películas, láminas y etiquetas, para que su línea funcione limpia y sus operarios estén seguros.', 'Arshad Electronics — официальный дистрибьютор продукции Simco-Ion в Индии. Simco-Ion выпускает оборудование, которое снимает статический заряд с плёнки, листа и этикеток, чтобы линия работала чисто, а операторы были в безопасности.'],
  'See the products': ['Ver los productos', 'Смотреть продукты'], 'Ask about your line': ['Pregunte por su línea', 'Спросить о вашей линии'],
  'Why static control': ['Por qué controlar la estática', 'Зачем контролировать статику'], 'Static costs time, material and safety': ['La estática cuesta tiempo, material y seguridad', 'Статика стоит времени, материала и безопасности'],
  "Static builds up wherever film, sheet or labels run fast over rollers. It makes material cling and jam, pulls dust onto the surface, and gives operators shocks. Simco-Ion's static neutralising systems and bars are suitable for plastic and packaging solutions, and Arshad Electronics is the authorised distributor for Simco-Ion products in India.": ['La estática se acumula donde la película, la lámina o las etiquetas pasan rápido sobre rodillos. Hace que el material se pegue y se atasque, atrae polvo a la superficie y da descargas a los operarios. Los sistemas y barras neutralizadores de Simco-Ion son adecuados para soluciones de plásticos y envases, y Arshad Electronics es el distribuidor autorizado de los productos Simco-Ion en la India.', 'Статика накапливается везде, где плёнка, лист или этикетки быстро идут по валам. Материал липнет и заминается, на поверхность налипает пыль, операторов бьёт током. Системы и штанги нейтрализации статики Simco-Ion подходят для пластмасс и упаковки, а Arshad Electronics — официальный дистрибьютор продукции Simco-Ion в Индии.'],
  'Products': ['Productos', 'Продукты'], 'Two ways to control it': ['Dos formas de controlarla', 'Два способа её контролировать'],
  'Both are suitable for plastic and packaging applications. Models, specifications and datasheets come from Simco-Ion.': ['Ambos sirven para aplicaciones de plásticos y envases. Los modelos, especificaciones y fichas técnicas proceden de Simco-Ion.', 'Оба подходят для пластмасс и упаковки. Модели, характеристики и техпаспорта предоставляет Simco-Ion.'],
  'Static neutralising system': ['Sistema neutralizador de estática', 'Система нейтрализации статики'], 'Static neutralising bar': ['Barra neutralizadora de estática', 'Штанга нейтрализации статики'],
  'A static neutralising system for plastics and packaging lines that need controlled, monitored static elimination.': ['Un sistema neutralizador de estática para líneas de plásticos y envases que necesitan una eliminación de la estática controlada y supervisada.', 'Система нейтрализации статики для линий пластмасс и упаковки, где нужно управляемое и контролируемое снятие статики.'],
  'A static neutralising bar for the same plastic and packaging applications.': ['Una barra neutralizadora de estática para las mismas aplicaciones de plásticos y envases.', 'Штанга нейтрализации статики для тех же применений в пластмассах и упаковке.'],
  'Ask for the datasheet': ['Pedir la ficha técnica', 'Запросить техпаспорт'],
  'Simco-Ion worldwide': ['Simco-Ion en el mundo', 'Simco-Ion в мире'], 'A global name in static control': ['Un nombre global en el control de la estática', 'Мировое имя в контроле статики'],
  "Simco-Ion's own figures for its business worldwide.": ['Cifras propias de Simco-Ion para su actividad en todo el mundo.', 'Собственные данные Simco-Ion о его работе в мире.'],
  'countries where Simco-Ion is active': ['países donde Simco-Ion está presente', 'стран, где работает Simco-Ion'], 'static solutions supplied every year': ['soluciones antiestáticas suministradas cada año', 'решений по статике поставляется ежегодно'], 'OEM customers': ['clientes OEM', 'OEM-клиентов'],
  "Where it's used": ['Dónde se usa', 'Где применяется'], 'Where static costs you': ['Dónde le cuesta la estática', 'Где статика обходится дорого'],
  'About Simco-Ion': ['Acerca de Simco-Ion', 'О Simco-Ion'], 'Part of the ITW group': ['Parte del grupo ITW', 'Часть группы ITW'],
  'Simco-Ion is a member of the global ITW group. It describes itself as the largest manufacturer of static eliminators and materials in the anti-static industry, with static control solutions supplied worldwide. Arshad Electronics represents Simco-Ion in India.': ['Simco-Ion forma parte del grupo global ITW. Se describe como el mayor fabricante de eliminadores de estática y materiales de la industria antiestática, con soluciones suministradas en todo el mundo. Arshad Electronics representa a Simco-Ion en la India.', 'Simco-Ion входит в международную группу ITW и называет себя крупнейшим производителем нейтрализаторов статики и материалов в антистатической отрасли, с решениями по всему миру. Arshad Electronics представляет Simco-Ion в Индии.'],
  'From Simco-Ion': ['De Simco-Ion', 'От Simco-Ion'], 'Watch and read more': ['Vea y lea más', 'Смотрите и читайте'],
  "Simco-Ion's corporate film": ['La película corporativa de Simco-Ion', 'Корпоративный фильм Simco-Ion'],
  'How Simco-Ion helps companies improve safety, efficiency and product quality. On YouTube.': ['Cómo Simco-Ion ayuda a las empresas a mejorar la seguridad, la eficiencia y la calidad del producto. En YouTube.', 'Как Simco-Ion помогает компаниям повышать безопасность, эффективность и качество продукции. На YouTube.'],
  'Articles on static electricity': ['Artículos sobre la electricidad estática', 'Статьи о статическом электричестве'],
  'What static is, how to control it and how to use it. On simco-ion.eu.': ['Qué es la estática, cómo controlarla y cómo usarla. En simco-ion.eu.', 'Что такое статика, как её контролировать и использовать. На simco-ion.eu.'],
  'Simco-Ion Europe': ['Simco-Ion Europa', 'Simco-Ion Европа'],
  'Tell us about the static': ['Cuéntenos sobre la estática', 'Расскажите о статике'],
  'Describe the problem and the process; Arshad matches the right Simco-Ion product.': ['Describa el problema y el proceso; Arshad elige el producto Simco-Ion adecuado.', 'Опишите проблему и процесс — Arshad подберёт нужный продукт Simco-Ion.'],
  'Please send the {0} datasheet.': ['Envíenme la ficha técnica de {0}.', 'Пришлите, пожалуйста, техпаспорт {0}.'],
  'Simco-Ion IQ Power static neutralising system: control station, bars and power supplies': ['Sistema neutralizador de estática Simco-Ion IQ Power: estación de control, barras y fuentes de alimentación', 'Система нейтрализации статики Simco-Ion IQ Power: станция управления, штанги и блоки питания'],
  'Simco-Ion IQ Power static neutralising system': ['Sistema neutralizador de estática Simco-Ion IQ Power', 'Система нейтрализации статики Simco-Ion IQ Power'], 'Simco-Ion IQ Easy static neutralising bar': ['Barra neutralizadora de estática Simco-Ion IQ Easy', 'Штанга нейтрализации статики Simco-Ion IQ Easy'],
  // PlasmaRight
  'PlasmaRight': ['PlasmaRight', 'PlasmaRight'], 'PlasmaRight · part of the Arshad family': ['PlasmaRight · de la familia Arshad', 'PlasmaRight · часть семьи Arshad'],
  'Plasma treaters for textiles and grains': ['Tratadores de plasma para textiles y granos', 'Плазменные установки для текстиля и зерна'],
  'PlasmaRight is our patented plasma treater technology for textiles and grains. Its treaters change the surface of fabric and grain using ionised gas, instead of chemicals or heat.': ['PlasmaRight es nuestra tecnología patentada de tratamiento por plasma para textiles y granos. Sus equipos cambian la superficie del tejido y del grano con gas ionizado, en lugar de químicos o calor.', 'PlasmaRight — наша запатентованная технология плазменной обработки текстиля и зерна. Её установки меняют поверхность ткани и зерна ионизированным газом вместо химикатов или нагрева.'],
  'Ask about plasma treatment': ['Pregunte por el tratamiento por plasma', 'Спросить о плазменной обработке'], 'Visit plasmaright.com': ['Visite plasmaright.com', 'Перейти на plasmaright.com'],
  'What is plasma treatment': ['Qué es el tratamiento por plasma', 'Что такое плазменная обработка'], 'The fourth state of matter': ['El cuarto estado de la materia', 'Четвёртое состояние вещества'],
  'Plasma is a partially ionised gas, created by combining reactive gas molecules with an electric field. Plasma surface treatment uses it to modify only the surface of a material, enhancing its properties without compromising its core characteristics.': ['El plasma es un gas parcialmente ionizado que se crea combinando moléculas de gas reactivo con un campo eléctrico. El tratamiento superficial por plasma lo usa para modificar solo la superficie de un material y mejorar sus propiedades sin alterar sus características internas.', 'Плазма — частично ионизированный газ, который получают, сочетая молекулы реактивного газа с электрическим полем. Плазменная обработка меняет только поверхность материала, улучшая её свойства и не затрагивая его внутренние характеристики.'],
  'It is a highly effective, economical and environmentally safe way to treat a surface.': ['Es una forma muy eficaz, económica y segura para el medio ambiente de tratar una superficie.', 'Это очень эффективный, экономичный и экологически безопасный способ обработки поверхности.'],
  'Low temperature': ['Baja temperatura', 'Низкая температура'], 'Cold plasma, no excess heat': ['Plasma frío, sin exceso de calor', 'Холодная плазма без лишнего нагрева'],
  'Fewer chemicals': ['Menos químicos', 'Меньше химикатов'], 'Less use of harmful chemicals': ['Menor uso de químicos nocivos', 'Меньше вредных химикатов'],
  'Surface only': ['Solo la superficie', 'Только поверхность'], 'The core of the material is unchanged': ['El interior del material no cambia', 'Внутренняя структура материала не меняется'],
  'Two uses': ['Dos usos', 'Два применения'], 'Textiles and grains': ['Textiles y granos', 'Текстиль и зерно'], 'Textiles': ['Textiles', 'Текстиль'], 'Grains': ['Granos', 'Зерно'],
  'Better fabric, fewer chemicals': ['Mejor tejido, menos químicos', 'Лучше ткань, меньше химии'],
  'Plasma treatment improves how fabric takes dye, water and adhesive, and it fits into existing production lines.': ['El tratamiento por plasma mejora cómo el tejido absorbe el tinte, el agua y el adhesivo, y se integra en las líneas de producción existentes.', 'Плазменная обработка улучшает восприятие тканью красителя, воды и клея и встраивается в существующие линии.'],
  'Wettability': ['Humectabilidad', 'Смачиваемость'], 'Adhesive bonding between layers': ['Adhesión entre capas', 'Склеивание слоёв'], 'Printability': ['Imprimibilidad', 'Пригодность для печати'],
  'Water-repellent or water-absorbent finishes': ['Acabados hidrófugos o absorbentes', 'Водоотталкивающая или впитывающая отделка'], 'Dirt repellence': ['Repelencia a la suciedad', 'Грязеотталкивание'], 'Anti-static properties': ['Propiedades antiestáticas', 'Антистатические свойства'],
  'An alternative to fumigation': ['Una alternativa a la fumigación', 'Альтернатива фумигации'],
  'A non-chemical, non-thermal way to treat stored grain. Studies show it acts on insects at every stage (eggs, larvae and adults), and on fungi and bacteria, within minutes.': ['Una forma no química y no térmica de tratar el grano almacenado. Los estudios muestran que actúa sobre los insectos en todas sus fases (huevos, larvas y adultos) y sobre hongos y bacterias, en minutos.', 'Нехимический и нетермический способ обработки хранящегося зерна. Исследования показывают, что за минуты он действует на насекомых на всех стадиях (яйца, личинки, взрослые особи), а также на грибы и бактерии.'],
  'Disinfestation': ['Desinsectación', 'Дезинсекция'], 'Microbial and enzyme inactivation': ['Inactivación microbiana y enzimática', 'Инактивация микробов и ферментов'], 'Germination': ['Germinación', 'Прорастание'], 'Pesticide reduction': ['Reducción de pesticidas', 'Снижение пестицидов'],
  'Two names, one team': ['Dos nombres, un equipo', 'Два имени, одна команда'],
  "PlasmaRight comes from the people behind Arshad Electronics' corona treaters and induction cap sealers. The same engineers, the same factory floor, a new kind of surface treatment.": ['PlasmaRight viene de las personas detrás de los tratadores corona y las selladoras de tapas por inducción de Arshad Electronics. Los mismos ingenieros, la misma planta, un nuevo tipo de tratamiento superficial.', 'PlasmaRight создают те же люди, что стоят за установками коронной обработки и индукционными запайщиками Arshad Electronics. Те же инженеры, тот же цех — новый вид обработки поверхности.'],
  'About Arshad Electronics': ['Acerca de Arshad Electronics', 'Об Arshad Electronics'],
  'Tell us what you want to treat. Arshad passes it to the PlasmaRight team.': ['Díganos qué quiere tratar. Arshad lo pasa al equipo de PlasmaRight.', 'Расскажите, что вы хотите обработать. Arshad передаст запрос команде PlasmaRight.'],
  'Material': ['Material', 'Материал'], 'e.g. cotton, polyester, wheat': ['p. ej., algodón, poliéster, trigo', 'например, хлопок, полиэстер, пшеница'],
  'What do you want to achieve?': ['¿Qué quiere conseguir?', 'Чего вы хотите добиться?'], 'e.g. better dye uptake, insect control': ['p. ej., mejor absorción del tinte, control de insectos', 'например, лучшее поглощение красителя, борьба с насекомыми'],
  'Get a quote there': ['Pida un presupuesto allí', 'Запросить цену там'], 'PlasmaRight contact page': ['Página de contacto de PlasmaRight', 'Страница контактов PlasmaRight'],
  'PlasmaRight · textiles': ['PlasmaRight · textiles', 'PlasmaRight · текстиль'], 'PlasmaRight · grains': ['PlasmaRight · granos', 'PlasmaRight · зерно'],
  'Plasma treatment of fabric': ['Tratamiento por plasma de tejidos', 'Плазменная обработка ткани'], 'Plasma treatment of grain': ['Tratamiento por plasma de granos', 'Плазменная обработка зерна'],
  'PlasmaRight plasma treatment machine running fabric over a roller': ['Máquina de tratamiento por plasma PlasmaRight con tejido sobre un rodillo', 'Плазменная установка PlasmaRight: ткань идёт по валу'],
  'Textile: folded grey fabric': ['Textil: tejido gris doblado', 'Текстиль: сложенная серая ткань'], 'Grains: a bowl of rice with wheat ears': ['Granos: un cuenco de arroz con espigas de trigo', 'Зерно: миска риса с колосьями пшеницы'],
  'Plasma treaters': ['Tratadores de plasma', 'Плазменные установки'], 'PlasmaRight plasma treaters for textiles and grains.': ['Tratadores de plasma PlasmaRight para textiles y granos.', 'Плазменные установки PlasmaRight для текстиля и зерна.'],
  'PlasmaRight plasma treater': ['Tratador de plasma PlasmaRight', 'Плазменная установка PlasmaRight'], 'An alternative to fumigation · ': ['Una alternativa a la fumigación · ', 'Альтернатива фумигации · '],
  'Plasma treaters for textiles and grains.': ['Tratadores de plasma para textiles y granos.', 'Плазменные установки для текстиля и зерна.'], 'See PlasmaRight': ['Ver PlasmaRight', 'Смотреть PlasmaRight'],
  'Glass jar with a sealed lid': ['Tarro de vidrio con la tapa sellada', 'Стеклянная банка с запаянной крышкой'],
  'ICS · Induction Cap Sealer by Arshad Electronics': ['ICS · selladora de tapas por inducción de Arshad Electronics', 'ICS · индукционный запайщик крышек от Arshad Electronics'],
  'ACT · Arshad Corona Treater': ['ACT · tratador corona de Arshad', 'ACT · установка коронной обработки Arshad'],
  // compound labels the pages build from the pieces above
  'cap {0} mm fits {1}–{2} mm · {3}–{4} ft/min': ['tapa de {0} mm dentro de {1}–{2} mm · {3}–{4} ft/min', 'крышка {0} мм в диапазоне {1}–{2} мм · {3}–{4} фут/мин'],
  'cap {0} mm fits {1}–{2} mm · {3}–{4} ft/min · touch-screen PLC control': ['tapa de {0} mm dentro de {1}–{2} mm · {3}–{4} ft/min · control PLC con pantalla táctil', 'крышка {0} мм в диапазоне {1}–{2} мм · {3}–{4} фут/мин · ПЛК-управление с сенсорным экраном'],
  'cap {0} mm fits {1}–{2} mm · {3} ft/min · touch-screen PLC control': ['tapa de {0} mm dentro de {1}–{2} mm · {3} ft/min · control PLC con pantalla táctil', 'крышка {0} мм в диапазоне {1}–{2} мм · {3} фут/мин · ПЛК-управление с сенсорным экраном'],
  'cap range is {0}–{1} mm · {2}–{3} ft/min': ['rango de tapas {0}–{1} mm · {2}–{3} ft/min', 'диапазон крышек {0}–{1} мм · {2}–{3} фут/мин'],
  'cap range is {0}–{1} mm · {2}–{3} ft/min · touch-screen PLC control': ['rango de tapas {0}–{1} mm · {2}–{3} ft/min · control PLC con pantalla táctil', 'диапазон крышек {0}–{1} мм · {2}–{3} фут/мин · ПЛК-управление с сенсорным экраном'],
  'cap range is {0}–{1} mm · {2} ft/min · touch-screen PLC control': ['rango de tapas {0}–{1} mm · {2} ft/min · control PLC con pantalla táctil', 'диапазон крышек {0}–{1} мм · {2} фут/мин · ПЛК-управление с сенсорным экраном'],
  'Air cooled · {0} V AC, single phase, {1} Hz, {2} A': ['Refrigerado por aire · {0} V CA, monofásica, {1} Hz, {2} A', 'Воздушное охлаждение · {0} В перем. тока, одна фаза, {1} Гц, {2} А'],
  'Water cooled · {0} V AC, single phase, {1} Hz, {2} A': ['Refrigerado por agua · {0} V CA, monofásica, {1} Hz, {2} A', 'Водяное охлаждение · {0} В перем. тока, одна фаза, {1} Гц, {2} А'],
  'Aurae {0} · Water cooled, high speed': ['Aurae {0} · Refrigerada por agua, alta velocidad', 'Aurae {0} · Водяное охлаждение, высокая скорость'],
  'Brezo A · Online, medium speed': ['Brezo A · En línea, velocidad media', 'Brezo A · Поточный, средняя скорость'],
  'Brezo {0} · {1}C SS · online, high speed': ['Brezo {0} · {1}C SS · en línea, alta velocidad', 'Brezo {0} · {1}C SS · поточный, высокоскоростной'],
  'Fluxosealer® · Online, medium speed': ['Fluxosealer® · En línea, velocidad media', 'Fluxosealer® · Поточный, средняя скорость'],
  'Fluxosealer® · {0}C SS · online, high speed': ['Fluxosealer® · {0}C SS · en línea, alta velocidad', 'Fluxosealer® · {0}C SS · поточный, высокоскоростной'],
  'Fluxosealer® · Water cooled, high speed': ['Fluxosealer® · Refrigerada por agua, alta velocidad', 'Fluxosealer® · Водяное охлаждение, высокая скорость'],
  'PlasmaRight · textiles · Plasma treatment of fabric': ['PlasmaRight · textiles · Tratamiento por plasma de tejidos', 'PlasmaRight · текстиль · Плазменная обработка ткани'],
  'PlasmaRight · grains · Plasma treatment of grain': ['PlasmaRight · granos · Tratamiento por plasma de granos', 'PlasmaRight · зерно · Плазменная обработка зерна'],
  'Explore PlasmaRight': ['Ver PlasmaRight', 'Смотреть PlasmaRight'], 'PlasmaRight: Plasma treaters': ['PlasmaRight: tratadores de plasma', 'PlasmaRight: установки плазменной обработки'],
  'PlasmaRight Plasma Treaters - Arshad Electronics': ['Tratadores de plasma PlasmaRight - Arshad Electronics', 'Плазменные установки PlasmaRight - Arshad Electronics'],
  'PlasmaRight (opens their website)': ['PlasmaRight (abre su sitio web)', 'PlasmaRight (откроется их сайт)'],
  // names and the address stay as written
  'Plasma Right India Pvt. Ltd.': ['Plasma Right India Pvt. Ltd.', 'Plasma Right India Pvt. Ltd.'], 'Arshad Electronics': ['Arshad Electronics', 'Arshad Electronics'], 'simco-ion.eu': ['simco-ion.eu', 'simco-ion.eu'],
  '{0}, Hammersmith Industrial Estate, Off Sitladevi Temple Rd, Mahim West, Mumbai {1}, Maharashtra, India': ['{0}, Hammersmith Industrial Estate, Off Sitladevi Temple Rd, Mahim West, Mumbai {1}, Maharashtra, India', '{0}, Hammersmith Industrial Estate, Off Sitladevi Temple Rd, Mahim West, Mumbai {1}, Maharashtra, India'],
  'Save as PDF': ['Guardar como PDF', 'Сохранить в PDF'], 'Making the PDF…': ['Creando el PDF…', 'Создаём PDF…'], 'PDF saved': ['PDF guardado', 'PDF сохранён'],
  'Couldn’t make the PDF. Check your connection and try again.': ['No se pudo crear el PDF. Revise su conexión e inténtelo de nuevo.', 'Не удалось создать PDF. Проверьте подключение и попробуйте ещё раз.'],
  // pop-up
  'Announcement': ['Anuncio', 'Объявление'], '{0} of {1}': ['{0} de {1}', '{0} из {1}'], 'Previous announcement': ['Anuncio anterior', 'Предыдущее объявление'], 'Next announcement': ['Anuncio siguiente', 'Следующее объявление'],
  // Aurae page: what comes with an Aurae 3
  'The machine': ['La máquina', 'Машина'], 'What comes with an Aurae 3': ['Qué incluye un Aurae 3', 'Что входит в Aurae 3'],
  'Panel cabinet': ['Armario del panel', 'Шкаф управления'], 'The induction sealer control panel': ['El panel de control del sellador por inducción', 'Панель управления индукционного запайщика'],
  'Touch-screen stand': ['Soporte de la pantalla táctil', 'Стойка с сенсорным экраном'], 'PLC controlled safety interlocks with HMI': ['Enclavamientos de seguridad controlados por PLC, con HMI', 'Защитные блокировки с управлением от ПЛК и HMI'],
  'Sealing head': ['Cabezal de sellado', 'Запаечная головка'], 'Adjustable height, 0 – 350 mm': ['Altura regulable, 0 – 350 mm', 'Регулируемая высота, 0 – 350 мм'],
  'Line conveyor': ['Transportador de la línea', 'Конвейер линии'], 'The head unit sits over the conveyor': ['El cabezal se sitúa sobre el transportador', 'Головка стоит над конвейером'],
  'Modular tower light': ['Baliza modular', 'Модульная сигнальная колонна'], 'For fault indication': ['Para indicar fallos', 'Для индикации неисправностей'],
  'Aurae 3 with its panel cabinet, touch-screen stand and sealing head over the line conveyor': ['Aurae 3 con su armario del panel, el soporte de la pantalla táctil y el cabezal de sellado sobre el transportador', 'Aurae 3 со шкафом управления, стойкой с сенсорным экраном и запаечной головкой над конвейером'],
  // blown / cast film finder: match score
  'Full match': ['Coincide en todo', 'Полное совпадение'], '{0} of {1} match': ['Coinciden {0} de {1}', 'Совпадает {0} из {1}'], 'Off:': ['No encaja:', 'Не подходит:'],
  'needs a printing / lamination machine': ['requiere una máquina de impresión / laminación', 'нужна печатная / ламинационная машина'],
  'needs a blown film extruder': ['requiere una extrusora de película soplada', 'нужен экструдер рукавной плёнки'],
  'made for printing': ['hecho para impresión', 'для печати'], 'made for lamination': ['hecho para laminación', 'для ламинации'], 'made for coating': ['hecho para recubrimiento', 'для нанесения покрытий'],
  'made for printing and lamination': ['hecho para impresión y laminación', 'для печати и ламинации'], 'made for printing and coating': ['hecho para impresión y recubrimiento', 'для печати и нанесения покрытий'],
  'made for lamination and coating': ['hecho para laminación y recubrimiento', 'для ламинации и нанесения покрытий'],
  'made for printing, lamination and coating': ['hecho para impresión, laminación y recubrimiento', 'для печати, ламинации и нанесения покрытий'],
  'starts at {0} mm': ['desde {0} mm', 'от {0} мм'], 'up to {0} mm': ['hasta {0} mm', 'до {0} мм'], 'tops out at {0} m/min': ['máximo {0} m/min', 'максимум {0} м/мин'],
  // homepage photos
  'Simco-Ion IQ Power system': ['Sistema Simco-Ion IQ Power', 'Система Simco-Ion IQ Power'],
  'Violet corona glow between a treater electrode and its roller': ['Brillo corona violeta entre un electrodo del tratador y su rodillo', 'Фиолетовое коронное свечение между электродом и валом'],
  'A wide corona treater installed on a production line, blue corona along the roller': ['Un tratador corona ancho instalado en una línea de producción, con corona azul a lo largo del rodillo', 'Широкий коронатор на производственной линии, синяя корона вдоль вала'],
  'Fluxosealer jars labelled Celebrating 50 years on the conveyor': ['Tarros Fluxosealer con la etiqueta Celebrating 50 years en el transportador', 'Банки Fluxosealer с надписью Celebrating 50 years на конвейере'],
  // the bell: how many announcements are current
  'Announcements ({0})': ['Anuncios ({0})', 'Объявления ({0})'],
  // About: rolling year (Motion Lab T2)
  'Pause': ['Pausa', 'Пауза'], 'Play': ['Reproducir', 'Воспроизвести'], 'Milestone {0} of {1}': ['Hito {0} de {1}', 'Этап {0} из {1}'],
  'Previous milestone': ['Hito anterior', 'Предыдущий этап'], 'Next milestone': ['Hito siguiente', 'Следующий этап'],
  'Milestones, {0} to {1}': ['Hitos, de {0} a {1}', 'Этапы, {0}–{1}'], 'Pause the milestones': ['Pausar los hitos', 'Остановить этапы'], 'Play the milestones': ['Reproducir los hitos', 'Запустить этапы']
};
[['I18N_ES', 0], ['I18N_RU', 1]].forEach(([g, i]) => { const d = window[g]; if (!d) return; Object.keys(TR).forEach(k => { if (!(k in d)) d[k] = TR[k][i]; }); });

/* ---------- 10 · About: rolling year (Motion Lab pick T2, 16 Nov, with manual buttons) ----------
   The year rolls like an odometer to each milestone, 1971 to 2023, every 2.6 s while it is on screen.
   Previous / Next (also the ← → keys) step by hand and the roll carries on from there; only Pause stops it. Hovering or focusing does not stop it.
   Reduced motion: no auto-roll and no wheel movement; the buttons still step through. Screen readers get the full list. */
const ROLL_MS = 2600; // one fixed step: quick, and enough to read the longest line (9 words) (16 Nov)
function rollingYear(){
  const site = document.getElementById('site'); if (!site || !window.SITE || SITE.ST.cur !== 'about') return;
  const old = site.querySelector('#a-timeline .tlx'); if (!old) return;
  const TL = (SD && SD.TIMELINE) || []; if (!TL.length) return;
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const box = document.createElement('div'); box.className = 'd3-roll rv in';
  box.setAttribute('role', 'group'); box.setAttribute('aria-roledescription', 'carousel'); box.setAttribute('aria-label', `Milestones, ${TL[0][0]} to ${TL[TL.length - 1][0]}`);
  const wheel = `<span class="d3-d"><span>${'0123456789'.split('').map(n => `<span>${n}</span>`).join('')}</span></span>`;
  box.innerHTML = `<div class="d3-odo" aria-hidden="true">${wheel.repeat(4)}</div>
    <p class="d3-ms" aria-live="polite"></p>
    <div class="d3-prog" aria-hidden="true"><i></i></div>
    <div class="d3-rc">
      <button type="button" class="d3-rb" data-r="-1" aria-label="Previous milestone"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <button type="button" class="d3-rb d3-pp" aria-label="Pause the milestones">Pause</button>
      <button type="button" class="d3-rb" data-r="1" aria-label="Next milestone"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    </div>
    <ol class="d3-sr">${TL.map(m => `<li>${esc(m[0])}: ${esc(m[1])}</li>`).join('')}</ol>`;
  old.replaceWith(box);
  if (calm) box.classList.add('calm');
  const ds = [...box.querySelectorAll('.d3-d > span')], ms = box.querySelector('.d3-ms'), bar = box.querySelector('.d3-prog i'), pp = box.querySelector('.d3-pp');
  let i = 0, paused = calm, vis = false, timer = 0;
  const setPlay = () => { pp.textContent = paused ? 'Play' : 'Pause'; pp.setAttribute('aria-label', paused ? 'Play the milestones' : 'Pause the milestones'); };
  const show = k => {
    i = (k + TL.length) % TL.length;
    const y = String(TL[i][0]).padStart(4, '0'); ds.forEach((d, j) => { d.style.transform = `translateY(-${+y[j]}em)`; });
    ms.textContent = TL[i][1];
    bar.style.transform = `scaleX(${(i + 1) / TL.length})`;
    if (!calm) ms.animate([{ opacity: 0, transform: 'translateY(4px)' }, { opacity: 1, transform: 'none' }], { duration: 220, easing: 'cubic-bezier(0,0,0.3,1)' });
  };
  // one fixed step: every milestone gets the same ROLL_MS. The clock only runs while playing, on screen and the tab is open;
  // it restarts in full whenever any of those comes back, so no milestone is cut short.
  const stop = () => { clearTimeout(timer); timer = 0; };
  const start = () => { stop(); if (paused || !vis || document.hidden || !box.isConnected) return;
    timer = setTimeout(() => { timer = 0; if (!box.isConnected) return; show(i + 1); start(); }, ROLL_MS); };
  box.addEventListener('click', e => {
    const b = e.target.closest('.d3-rb'); if (!b) return;
    if (b === pp){ paused = !paused; setPlay(); if (paused) stop(); else { show(i + 1); start(); } return; }
    show(i + +b.dataset.r); start(); // stepping by hand keeps the roll going (only Pause stops it); the next step gets the full time
  });
  box.addEventListener('keydown', e => { if (e.key === 'ArrowLeft' || e.key === 'ArrowRight'){ e.preventDefault(); show(i + (e.key === 'ArrowRight' ? 1 : -1)); start(); } });
  setPlay(); show(0);
  if (calm) return;
  new IntersectionObserver(es => { vis = es[0].isIntersecting; if (vis) start(); else stop(); }, { threshold: .25 }).observe(box);
  const onVis = () => { if (!box.isConnected){ document.removeEventListener('visibilitychange', onVis); return; } if (document.hidden) stop(); else start(); };
  document.addEventListener('visibilitychange', onVis);
}
/* ---------- 11 · Hub titles: rotating word (Motion Lab pick TX6; Rotating Word Lab picks R1 + R2, 16 Nov) ----------
   A line under the hub's title cycles one word every 2.4 s: the old word slides up and fades, the new one rises in.
   It is written per language (translate="no", so the translation layer leaves it alone) and redrawn when the language changes.
   Reduced motion: one still sentence with every word. */
const ROT = {
  fluxomatic: { en: ['Made for', ['film', 'woven fabric', 'moulded parts', 'cables'], 'Made for film, woven fabric, moulded parts and cables'],
    es: ['Para', ['película', 'tejido', 'piezas moldeadas', 'cables'], 'Para película, tejido, piezas moldeadas y cables'],
    ru: ['Для', ['плёнки', 'тканей', 'литых изделий', 'кабелей'], 'Для плёнки, тканей, литых изделий и кабелей'] },
  fluxosealer: { en: ['Seals', ['PET', 'glass', 'HDPE', 'PP', 'PVC', 'LDPE'], 'Seals PET, glass, HDPE, PP, PVC and LDPE'],
    es: ['Sella', ['PET', 'vidrio', 'HDPE', 'PP', 'PVC', 'LDPE'], 'Sella PET, vidrio, HDPE, PP, PVC y LDPE'],
    ru: ['Запаивает', ['PET', 'стекло', 'HDPE', 'PP', 'PVC', 'LDPE'], 'Запаивает PET, стекло, HDPE, PP, PVC и LDPE'] }
};
const ROT_MS = 2400;
let rotT = 0;
const rotLang = () => (document.documentElement.lang || 'en').slice(0, 2);
const rotCalm = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
function rotPaint(p){
  const R = ROT[p.dataset.pg][rotLang()] || ROT[p.dataset.pg].en, i = +p.dataset.i % R[1].length;
  p.innerHTML = rotCalm() ? esc(R[2]) : `${esc(R[0])} <span class="d3-rw"><span>${esc(R[1][i])}</span></span>`;
}
function rotWord(){
  const site = document.getElementById('site'); if (!site || !window.SITE) return;
  const pg = SITE.ST.cur; if (!ROT[pg]) return;
  const h = site.querySelector('.hubhero h1'); if (!h || (h.nextElementSibling && h.nextElementSibling.classList.contains('d3-rot'))) return;
  const p = document.createElement('p'); p.className = 'd3-rot'; p.setAttribute('translate', 'no'); p.dataset.pg = pg; p.dataset.i = '0';
  h.after(p); rotPaint(p);
  clearInterval(rotT); if (rotCalm()) return;
  rotT = setInterval(() => {
    if (!p.isConnected){ clearInterval(rotT); return; }
    if (document.hidden) return;
    const w = p.querySelector('.d3-rw'); if (!w) return;
    const R = ROT[pg][rotLang()] || ROT[pg].en, i = (+p.dataset.i + 1) % R[1].length; p.dataset.i = String(i);
    const old = w.lastElementChild, n = document.createElement('span'); n.textContent = R[1][i]; w.appendChild(n);
    const gone = () => { if (old.parentNode) old.parentNode.removeChild(old); };
    old.animate([{ transform: 'none', opacity: 1 }, { transform: 'translateY(-100%)', opacity: 0 }], { duration: 240, easing: 'cubic-bezier(0.4,0.14,1,1)', fill: 'forwards' }).finished.then(gone, gone);
    n.animate([{ transform: 'translateY(100%)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 320, delay: 60, easing: 'cubic-bezier(0,0,0.3,1)', fill: 'both' });
  }, ROT_MS);
}
new MutationObserver(() => { const p = document.querySelector('#site .d3-rot'); if (p) rotPaint(p); }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

{ const site = document.getElementById('site'); let raf = 0;
  const run = () => { raf = 0; rollingYear(); rotWord(); };
  if (site) new MutationObserver(() => { if (!raf) raf = requestAnimationFrame(run); }).observe(site, { childList: true, subtree: true });
  addEventListener('load', run); }

// the product menu's short line per series
const MEGA = { brezo: 'Air cooled', aurae: 'Water cooled', plasmaright: 'Textiles and grains' };
window.D3 = { sig, sealSteps, coronaResults, hubExtra, bottles, CARD, ICON_ALIAS, MEGA, auParts, fitScore, PHOTOFIT };
})();
