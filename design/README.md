# Handoff: Aloni Renovation website

## Overview
This is a redesigned marketing site for **Aloni Renovations Corp.** (alonirenovation.ca), an owner-operated bathroom and kitchen renovation company in Coquitlam, BC. They have 15+ years of experience and won the HomeStars Best of Award 2026.

The site's goal is **free-quote requests, phone calls and WhatsApp messages**. Contact details:
- Phone: 604-727-2882 (`tel:+16047272882`)
- WhatsApp: `https://wa.me/16047272882`
- Email: info@alonirenovation.ca

This package covers the **Home page**. The current site also has Services, Projects, Reviews, About and Contact pages; build those in the same system (spec at the bottom).

## About the design files
`Home.dc.html` is a **design reference built in HTML**. It is a prototype of the intended look and behavior, not production code to copy. Open it in a browser with `support.js` next to it.

Recreate it in the target stack. If there is no existing codebase, a good default is Astro or Next.js with static output, plain CSS or Tailwind, deployed on Netlify, Vercel or Cloudflare Pages. The site is content-heavy, needs minimal JS, and SEO matters.

How the file is organized:
- The markup is the template.
- The `class Component` script at the bottom holds all the data: gallery list, before/after jobs, services, process steps, and the interaction state.
- Styles are inline. Extract them into CSS or components.

## Fidelity
**High fidelity.** Colors, typography, spacing, copy and interactions are final.

## Design tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| limestone | `#EEEAE3` | Page background, header, text on dark sections |
| stone | `#E4DED3` | Gallery section background |
| pill | `#E2DACB` | HomeStars pill background in the hero |
| espresso | `#1E1C19` | Text, proof strip, quote section, footer, active chips |
| tile-green | `#2E4A3E` | Primary buttons, before/after section background, small accent labels, links |
| green-text | `#D3DCD5` | Body text on tile-green |
| brass | `#C29B57` | Hover state on the big phone number only. Never use it for body text on light backgrounds (fails contrast). |
| body-2 | `#4A453E` | Secondary body text on limestone |
| meta | `#6B645A` | Captions and helper text |
| on-dark | `#C9C2B6` | Body text on espresso |
| footer-text | `#9C9488` | Footer |
| rule | `#CFC7BA` | Light dividers, header bottom border |
| footer-rule | `#3A3631` | Footer top border |
| img-bg | `#DAD3C7` | Background behind images while they load |

### Typography
- **Headlines:** **Young Serif** (Google Fonts), a single 400 weight.
  - H1: `clamp(48px, 6.4vw, 104px)`, line-height 1, letter-spacing -.025em, `text-wrap: balance`.
  - H2: `clamp(38px, 4.6vw, 72px)`, line-height 1.04, letter-spacing -.02em.
  - Card titles: `clamp(26px, 2.4vw, 34px)`.
  - Review quote: `clamp(28px, 3.4vw, 52px)`, line-height 1.2.
  - Big phone number: `clamp(36px, 4vw, 60px)`.
  - Wordmark "Aloni Renovation": 23px.
- **Body:** **Hanken Grotesk**, weights 400/500/600/700.
  - Body text: 18px, line-height 1.55.
  - Hero sub: 20px.
  - Buttons: 17–18px, weight 600–700.
- Use sentence case everywhere. The smallest text is 15px.

### Shape
- Buttons, chips and pills: **fully rounded** (`border-radius: 999px`).
- Photos: **4px** radius.
- Form inputs: 4px. The form card: 6px.
- Rules: 1px `#CFC7BA` (light) or 1.5px espresso (structural).
- No shadows, no gradients, no icon rows, no stat counters.

### Layout
- Max width 1440px. Side padding `clamp(16px, 3vw, 40px)`.
- Section vertical padding `clamp(64px, 8vw, 120px)`.
- Two-column sections: `repeat(auto-fit, minmax(min(100%, 460–520px), 1fr))`, column gap `clamp(32px, 5vw, 80px)`.
- **Breakpoints:**
  - **1100px:** below it, hide the desktop nav and header button, keep only the logo and the tappable phone number in the header, and show the sticky bottom bar.
  - **860px:** below it, the services grid and process steps become single-column.

## Home page sections

1. **Header**
   - Sticky, 78px tall, limestone background, 1px rule along the bottom.
   - Left: logo (48×48, `object-fit: contain`) and the "Aloni Renovation" wordmark in Young Serif.
   - Nav (17px, weight 500, gap 28px): Bathrooms, Kitchens, Our work, How it goes, Contact. On hover, links turn tile-green and underline.
   - Right: the phone number 604-727-2882 (20px, weight 700, nowrap) and a **"Free quote"** pill button (tile-green; espresso on hover).

2. **Hero** (two columns, vertically centered)
   - **Left column:**
     - **HomeStars pill**: pill background, the 26px HomeStars crown icon and "HomeStars Best of 2026" (nowrap). Links to `https://www.homestars.com/profile/3004677-aloni-renovations-corp`.
     - H1: "Bathrooms and kitchens, from first sketch to final caulk line."
     - Sub: "Owner-operated in Coquitlam for over 15 years. We design it, take it down to the studs, build it back and clean up. One crew, one quote, one person to call."
     - Buttons:
       - **Get a free quote**: tile-green pill.
       - **WhatsApp us a photo**: 1.5px espresso outline pill.
   - **Right column:**
     - Main photo at 4:5, with padding left and bottom so the inset can overlap.
     - **Overlapping inset photo**: 44% width, 3:4, absolutely positioned bottom-left, with an 8px limestone border so it looks cut out of the page.

3. **Proof strip**
   - Espresso background, single row: `grid repeat(auto-fit, minmax(180px, 1fr))`, 17px, weight 500.
   - Items: HomeStars Best of Award 2026 · 15+ years renovating · Owner on every job · Coquitlam & the Tri-Cities · Free in-home quotes.

4. **Services**
   - H2: "Mostly bathrooms. A lot of kitchens. Sometimes the whole house."
   - **Uneven 12-column grid**, gap 40px 24px:
     - **Bathroom renovation**: columns 1–7, photo 7:5.
     - **Kitchen remodeling**: columns 8–12, photo 4:5.
     - **Full house renovation**: columns 1–5, photo 4:3.
     - **Home repair**: columns 6–12, photo 7:5.
   - Each card has a photo, a Young Serif title, body text, and a meta line (16px, weight 600, tile-green).
   - Copy:
     - **Bathroom renovation:** "Tub-to-shower conversions, curbless showers, heated floors, double vanities, tile to the ceiling. Everything behind the wall is done properly: Schluter waterproofing, new valves, venting that actually vents." Meta: "Usually 3–4 weeks".
     - **Kitchen remodeling:** "New layout or same footprint. Cabinets, quartz, backsplash, lighting, plumbing and electrical, coordinated by us so you're not chasing five trades." Meta: "Usually 5–8 weeks".
     - **Full house renovation:** "Floors, walls, trim, lighting, bathrooms and kitchen in one schedule, for a house you just bought or one you've been in for twenty years." Meta: "Scoped room by room".
     - **Home repair:** "Drywall, tile and grout repairs, leaks behind showers, doors and trim. The small jobs other renovators won't call back about." Meta: "Often within the week".

5. **Before & after** (tile-green background)
   - **Left column:**
     - H2: "Same room. Same window."
     - The story paragraph for the selected job.
     - **Job picker pills.** Selected: limestone background with green text. Unselected: transparent with a limestone outline.
     - A **Before/After segmented toggle**: espresso track, 5px padding. The active segment is limestone with espresso text. Minimum height 48px.
   - **Right column:**
     - One 3:4 photo (max-height 760px) that swaps between the before and after image.
     - A pill label in the top-left corner reading "Before" or "After".
   - Behavior:
     - Default view: job 0, After.
     - Choosing a different job switches the view to Before.
     - A 150–200ms crossfade between images is optional.
   - Jobs:
     - **Main bath, Coquitlam:** "An almond vanity with a cultured-marble top, brass lights and a dated tub. We took it to the studs, moved to a long two-sink vanity in white quartz and redid the lighting."
     - **Tub and shower:** "Old tile came off down to the framing. New waterproofing, large-format porcelain to the ceiling, a niche, and a wood vanity to warm it up."

6. **How a bathroom usually goes**
   - Header row:
     - H2 on the left.
     - Note on the right: "A full bathroom is about three to four weeks of work once materials are on site. Kitchens run five to eight."
   - Five columns, with a 1.5px espresso top rule and 1px dividers between columns. Columns stack on narrow screens.
   - Each step has a label (15px, weight 700, tile-green), a Young Serif title at 26px, and a description at 17px.
   - Steps:
     - **Day one, Visit and measure:** "We look at the room, the plumbing and what's under the floor, and talk through what you want."
     - **Within a week, Design and quote:** "Layout, tile and fixture picks, and a written quote with each item listed."
     - **Week 1, Demo and rough-in:** "Down to the studs. Plumbing and electrical moved, walls and floor made flat."
     - **Weeks 2–3, Waterproof and tile:** "Membrane, flood test, then tile. This is where the time goes, and it should."
     - **Week 4, Fixtures and finish:** "Vanity, glass, fixtures, paint, caulk. Then a walkthrough and a clean room."

7. **Recent work (gallery)** (stone background)
   - H2, with **filter pills** on the right: All, Bathrooms, Kitchens, Living.
     - Active pill: espresso background with limestone text. Inactive pills: outlined.
   - **Masonry** layout: `column-width: 300px; column-gap: 16px`. Each image keeps its natural aspect ratio (listed in the `G` array) and uses `break-inside: avoid`.
   - Clicking an image opens a **lightbox**:
     - Fixed overlay `rgba(30,28,25,.94)`, image at max-height 90vh.
     - Clicking anywhere closes it.
     - In production also add Esc-to-close, arrow-key navigation and focus trapping.

8. **Review**
   - A single large quote in Young Serif: "They removed my old kitchen and bathroom and replaced them at a reasonable cost. The quality of the work is excellent, and both rooms look fantastic."
   - Attribution: "M. Milano · Kitchen and bathroom".
   - Below a rule: the HomeStars icon, "HomeStars Best of Award 2026" and a "Read our HomeStars reviews" link.
   - **Pull 3–5 more real reviews from HomeStars and Google.** Rotate them, or show two or three in a row.

9. **Quote** (espresso background)
   - **Left column:**
     - H2: "Tell us about the room."
     - Sub: "We come out, measure, talk through what you want and send a written quote. It's free, and there's no pressure to book."
     - Big phone number in Young Serif; hover turns it brass.
     - A 2×2 grid:
       - Email: info@alonirenovation.ca
       - Hours: Mon–Fri 8am–6pm, Saturday 9am–3pm
       - Office: 1330 Winslow Ave, Coquitlam, BC
       - Message: WhatsApp · Instagram
   - **Right column: form card** (limestone background, 6px radius)
     - **"Which room?"** pills: Bathroom, Kitchen, Both, Whole house, Repair. Single select, default Bathroom.
     - Name (required) and Phone (required), side by side.
     - A textarea labeled "What would you like to change?", with the placeholder "Main bathroom, about 8x10. Want to swap the tub for a walk-in shower and replace the vanity."
     - Submit button "Request a free quote" (tile-green pill).
     - Helper text: "We call back within one business day."
   - **On success:** replace the form with "Thank you. We'll call you." / "Usually within one business day. In a hurry? Call 604-727-2882."
   - Wire the form to a real handler (Formspree, Netlify Forms, or an API route emailing info@alonirenovation.ca). Include the selected room in the submission, and add a honeypot field or Turnstile for spam.

10. **Footer** (espresso background)
    - One row: "© 2026 Aloni Renovations Corp. · Coquitlam, BC · BN 757812102" on the left.
    - Links on the right: Instagram, Facebook, HomeStars.

11. **Mobile sticky bar** (below 1100px)
    - Fixed to the bottom, split into two halves, 60px tall:
      - **Call:** tile-green, `tel:`.
      - **WhatsApp:** espresso, `wa.me`.
    - Add 60px of bottom padding to the page so the bar doesn't cover content.

## State
- `baJob: 0 | 1`, `baSide: 'before' | 'after'`.
- `galleryFilter: 'All' | 'Bathrooms' | 'Kitchens' | 'Living'`, `lightboxIndex: number | null`. The index is relative to the filtered list.
- `room: string` (default `'Bathroom'`), `formSent: boolean`.
- Breakpoints: use CSS media queries in production, not JS.

## Pages to build in the same system
- **Bathrooms** and **Kitchens** (separate service pages, which is better for SEO than one "Services" page):
  - Hero
  - What's included
  - How it goes: the timeline section
  - A filtered gallery
  - 2–3 reviews
  - The quote section
- **Projects:** the full gallery, plus a before/after viewer covering all the pairs the client has.
- **About:**
  - Owner story, first person.
  - 15+ years of experience.
  - Owner on every job.
  - A photo of the owner.
  - The HomeStars award.
- **Contact:** the quote section at full page, plus a "WhatsApp us a photo" call-out. No map embed.

## Copy rules
Write short, plain and specific copy. Name the materials and the steps: Schluter, quartz, large-format porcelain, flood test.

Avoid "bring your vision to life", "sanctuary", "dream kitchen", "quality results" and similar filler (the current site uses these). Note that the current site has the bathroom and kitchen descriptions swapped.

## Assets
All images come from the client's current Wix site. The URL pattern is:

`https://static.wixstatic.com/media/e92e3c_{id}~mv2.{jpg|jpeg|png}/v1/fill/w_{w},h_{h},al_c,q_85,enc_auto/a.jpg`

**The extension matters.** Some files are `.jpeg` and some are `.png`, and a wrong extension returns 404. The `W()` helper and the `G` array in `Home.dc.html` have the correct extension for each id.

**Download the originals and self-host them** as WebP/AVIF with a responsive `srcset`.

Key images:
- Logo: `03bf017c85c24d53911c3dd8c389c71a` (png). Ask the client for a vector version; the current logo is a raster with a dark circle.
- HomeStars icon: `f177a064fe7344f185f5180db37233be` (png). Use the official HomeStars "Best of 2026" badge artwork if available.
- Hero:
  - Main: `9b10be874d1b45f1ac6a6968e79ea787`
  - Inset: `bfd0d6c3c6e643d5b3e63f562e48658b`
- Services:
  - Bathroom: `fef4d71f7e3a4e9c8500030788bbe9fd`
  - Kitchen: `2f14eb903bcc4cc3b71dd8fe02d20be9` (jpeg)
  - Full house: `152022d8fc4a46eda47d10fbc1e52f27` (jpeg)
  - Home repair: `f7da93bb74b7478ba0ad8289944622dd`
- Before/after pairs:
  - Main bath: `30924e5d10794cc28254ff933246a79c` → `b2986b12d7b5444b860783462ac827ed`
  - Tub and shower: `ca5239cea1de47dd9c6ce66e4cf564ee` → `95469b89c07e403195467906fa3c73e6`
- Gallery: the 14 ids in the `G` array.

## Files
- `Home.dc.html`: the Home page design reference. Open it in a browser next to `support.js`.
- `support.js`: the runtime needed to open the reference file. It is not for production.

## Confirm with the client before launch
- Job durations: bathroom 3–4 weeks, kitchen 5–8 weeks, repairs "often within the week".
- "We call back within one business day."
- That the second before/after pair is really the same job.
- The owner's name and photo for the About page.
- Preferred email: the site lists both Aloni.renovation@gmail.com and info@alonirenovation.ca.

## Local SEO
- Add a `LocalBusiness` / `HomeAndConstructionBusiness` schema with the address, phone and hours.
- Suggested page title: "Bathroom & Kitchen Renovation in Coquitlam | Aloni Renovation".
- Write a meta description for each page.
- Alt text is already written in the reference file.
