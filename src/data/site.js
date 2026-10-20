// ─────────────────────────────────────────────────────────────
// All site content lives here: contact details, images, services,
// before/after jobs, process steps, gallery and reviews.
// Edit text in this file and every page that uses it updates.
// ─────────────────────────────────────────────────────────────

export const contact = {
  business: 'Aloni Renovations Corp.',
  phone: '604-727-2882',
  tel: 'tel:+16047272882',
  whatsapp: 'https://wa.me/16047272882',
  email: 'info@alonirenovation.ca',
  instagram: 'https://www.instagram.com/aloni_renovation',
  facebook: 'https://www.facebook.com/share/1F9Epa4JrQ/',
  homestars: 'https://www.homestars.com/profile/3004677-aloni-renovations-corp',
  street: '1330 Winslow Ave',
  city: 'Coquitlam',
  region: 'BC',
  country: 'CA',
  bn: '757812102',
};

// ── Images ───────────────────────────────────────────────────
// Images are currently loaded from the client's Wix site.
// The file extension matters: a wrong one returns a 404.
// To self-host later, change wix() to point at your own files.
export function wix(id, w, h, ext = 'jpg') {
  return `https://static.wixstatic.com/media/e92e3c_${id}~mv2.${ext}/v1/fill/w_${w},h_${h},al_c,q_85,enc_auto/a.jpg`;
}

// Builds a srcset (several sizes) for an image with a given aspect ratio "a/b".
export function wixSrcset(id, ratio, ext = 'jpg', widths = [480, 800, 1200, 1600]) {
  const [a, b] = ratio.split('/').map(Number);
  return widths.map((w) => `${wix(id, w, Math.round((w * b) / a), ext)} ${w}w`).join(', ');
}

export const logo = 'https://static.wixstatic.com/media/e92e3c_03bf017c85c24d53911c3dd8c389c71a~mv2.png/v1/fill/w_120,h_118,al_c,q_90/logo.png';
export const homestarsIcon = 'https://static.wixstatic.com/media/e92e3c_f177a064fe7344f185f5180db37233be~mv2.png/v1/fill/w_80,h_80,al_c,q_90/hs.png';

export const hero = {
  main: { id: '9b10be874d1b45f1ac6a6968e79ea787', alt: 'Renovated bathroom with skylight, freestanding tub and walnut vanity' },
  inset: { id: 'bfd0d6c3c6e643d5b3e63f562e48658b', alt: 'Freestanding tub under a corner window' },
};

// ── Services (home page) ────────────────────────────────────
// "layout" controls where the card sits in the uneven grid.
export const services = [
  {
    name: 'Bathroom renovation',
    body: 'Tub-to-shower conversions, curbless showers, heated floors, double vanities, tile to the ceiling. Everything behind the wall is done properly: Schluter waterproofing, new valves, venting that actually vents.',
    meta: 'Usually 3–4 weeks',
    href: '/bathrooms',
    id: 'fef4d71f7e3a4e9c8500030788bbe9fd', ext: 'jpg', ratio: '7/5',
    alt: 'Freestanding tub under a corner window',
    layout: 'a',
  },
  {
    name: 'Kitchen remodeling',
    body: 'New layout or same footprint. Cabinets, quartz, backsplash, lighting, plumbing and electrical, coordinated by us so you’re not chasing five trades.',
    meta: 'Usually 5–8 weeks',
    href: '/kitchens',
    id: '2f14eb903bcc4cc3b71dd8fe02d20be9', ext: 'jpeg', ratio: '4/5',
    alt: 'Kitchen with grey shaker cabinets',
    layout: 'b',
  },
  {
    name: 'Full house renovation',
    body: 'Floors, walls, trim, lighting, bathrooms and kitchen in one schedule, for a house you just bought or one you’ve been in for twenty years.',
    meta: 'Scoped room by room',
    id: '152022d8fc4a46eda47d10fbc1e52f27', ext: 'jpeg', ratio: '4/3',
    alt: 'Living room with fireplace',
    layout: 'c',
  },
  {
    name: 'Home repair',
    body: 'Drywall, tile and grout repairs, leaks behind showers, doors and trim. The small jobs other renovators won’t call back about.',
    meta: 'Often within the week',
    id: 'f7da93bb74b7478ba0ad8289944622dd', ext: 'jpg', ratio: '7/5',
    alt: 'Double vanity with backlit mirrors',
    layout: 'd',
  },
];

// ── Before & after jobs ──────────────────────────────────────
// Add more pairs here and they appear on the Home and Projects pages.
export const beforeAfter = [
  {
    label: 'Main bath, Coquitlam',
    before: '30924e5d10794cc28254ff933246a79c',
    after: 'b2986b12d7b5444b860783462ac827ed',
    story: 'An almond vanity with a cultured-marble top, brass lights and a dated tub. We took it to the studs, moved to a long two-sink vanity in white quartz and redid the lighting.',
  },
  {
    label: 'Tub and shower',
    before: 'ca5239cea1de47dd9c6ce66e4cf564ee',
    after: '95469b89c07e403195467906fa3c73e6',
    story: 'Old tile came off down to the framing. New waterproofing, large-format porcelain to the ceiling, a niche, and a wood vanity to warm it up.',
  },
];

// ── Process steps ────────────────────────────────────────────
export const bathroomProcess = [
  { when: 'Day one', t: 'Visit and measure', d: 'We look at the room, the plumbing and what’s under the floor, and talk through what you want.' },
  { when: 'Within a week', t: 'Design and quote', d: 'Layout, tile and fixture picks, and a written quote with each item listed.' },
  { when: 'Week 1', t: 'Demo and rough-in', d: 'Down to the studs. Plumbing and electrical moved, walls and floor made flat.' },
  { when: 'Weeks 2–3', t: 'Waterproof and tile', d: 'Membrane, flood test, then tile. This is where the time goes, and it should.' },
  { when: 'Week 4', t: 'Fixtures and finish', d: 'Vanity, glass, fixtures, paint, caulk. Then a walkthrough and a clean room.' },
];

// DRAFT: confirm the kitchen timeline with the client.
export const kitchenProcess = [
  { when: 'Day one', t: 'Visit and measure', d: 'We measure the room, check the plumbing, venting and panel, and talk through how you cook and what bothers you now.' },
  { when: 'Within two weeks', t: 'Layout and quote', d: 'Cabinet layout, quartz and backsplash picks, lighting plan, and a written quote with each item listed.' },
  { when: 'Week 1', t: 'Demo and rough-in', d: 'Old cabinets and counters out. Plumbing, gas and electrical moved, new circuits run, walls patched flat.' },
  { when: 'Weeks 2–5', t: 'Cabinets and counters', d: 'Cabinets set level, quartz templated and installed. Templating to install is usually the longest wait.' },
  { when: 'Weeks 6–8', t: 'Backsplash and finish', d: 'Backsplash, sink, faucet, appliances, lighting and trim. Then a walkthrough and a clean kitchen.' },
];

// ── Gallery ──────────────────────────────────────────────────
// [id, category, aspect ratio, alt text, extension]
// category is one of: Bath, Kitchen, Living
export const gallery = [
  ['9b10be874d1b45f1ac6a6968e79ea787', 'Bath', '4/5', 'Bathroom with skylight and freestanding tub'],
  ['2f14eb903bcc4cc3b71dd8fe02d20be9', 'Kitchen', '4/3', 'Kitchen corner with grey cabinets', 'jpeg'],
  ['46d4d376ac39408d81d2e1fa753902d9', 'Bath', '3/4', 'Skylit bathroom, glass shower and tub'],
  ['b824a5569e6243b4bf5fef08260e03ec', 'Living', '4/3', 'Dining area with pendant light'],
  ['03b98328e16c40029688a0860371b96a', 'Bath', '9/16', 'Green tile tub surround with niche'],
  ['348514d4db254d6c95aa640d7adcac61', 'Bath', '4/3', 'Glass shower and long vanity under skylight'],
  ['f7c30459dba74264a42ac11c2e90c217', 'Kitchen', '16/10', 'Quartz counter with under-cabinet lighting'],
  ['ac5b1ad080d741ba94371eea5876394d', 'Bath', '3/4', 'Tub shower with brass fixtures'],
  ['152022d8fc4a46eda47d10fbc1e52f27', 'Living', '4/3', 'Living room with fireplace and panelled wall', 'jpeg'],
  ['678b86774d2d45cc864670a42f27bca7', 'Bath', '9/16', 'White tile shower with gold hardware'],
  ['9ea48662a28d45e0a16c243ac003af1f', 'Bath', '4/3', 'Freestanding tub on black hex tile', 'png'],
  ['704fdfe7d6814563a44e2d57de47f218', 'Bath', '3/4', 'Powder room with wainscoting'],
  ['00fe476f00004ffb935afdf9e1bc846f', 'Bath', '3/4', 'Walk-in shower with black frame', 'jpeg'],
  ['98c2f052153942b39de6669dc7e148f4', 'Bath', '3/4', 'Dark accent wall and floating vanity'],
].map(([id, cat, ratio, alt, ext = 'jpg']) => ({ id, cat, ratio, alt, ext }));

// ── Reviews ──────────────────────────────────────────────────
// Only add real reviews (copied from HomeStars or Google).
// "tags" decides which service pages show the review.
export const reviews = [
  {
    quote: 'They removed my old kitchen and bathroom and replaced them at a reasonable cost. The quality of the work is excellent, and both rooms look fantastic.',
    name: 'M. Milano',
    job: 'Kitchen and bathroom',
    tags: ['bathroom', 'kitchen'],
  },
  // { quote: '…', name: '…', job: 'Bathroom', tags: ['bathroom'] },
];
