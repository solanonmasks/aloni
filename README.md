# Aloni Renovation website

Marketing site for Aloni Renovations Corp. (alonirenovation.ca), built with [Astro](https://astro.build).
Astro turns the files in `src/` into plain HTML pages, so the finished site is fast and good for SEO.

## Pages

| Page | File |
|---|---|
| Home | `src/pages/index.astro` |
| Bathrooms | `src/pages/bathrooms.astro` |
| Kitchens | `src/pages/kitchens.astro` |
| Our work (projects) | `src/pages/projects.astro` |
| About | `src/pages/about.astro` |
| Contact | `src/pages/contact.astro` |
| Thank you (after the form, without JavaScript) | `src/pages/thanks.astro` |
| 404 | `src/pages/404.astro` |

## Where to change things

- **Text, photos, phone number, reviews, gallery, before/after jobs:** `src/data/site.js`. Most edits happen here.
- **Colors and fonts:** the top of `src/styles/global.css`.
- **Header, footer, mobile call bar, SEO tags:** `src/layouts/Base.astro`.
- **Page sections** (hero, gallery, quote form, …): `src/components/`.

## Run it on your computer

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install      # first time only
npm run dev      # open http://localhost:4321 — the page reloads as you edit
npm run build    # makes the finished site in the dist/ folder
```

## Put it online (Netlify)

1. Sign in to Netlify and choose **Add new site → Import an existing project**, then pick this GitHub repo.
2. Netlify reads `netlify.toml`, so the build settings fill themselves in. Click **Deploy**.
3. Quote requests appear under **Forms** in the Netlify dashboard. Under **Forms → Form notifications**, add an email notification to info@alonirenovation.ca.

The form has a hidden spam-trap field. It only works when hosted on Netlify; on your own computer it shows an error message with the phone number.

## Before launch

- [ ] **Images** load from the old Wix site right now. Download the originals, put them in `public/images/`, and change the `wix()` function in `src/data/site.js`. If the Wix site is shut down before this is done, the images will break.
- [ ] **About page:** add the owner's name, photo and story (replace the `[square brackets]` in `src/pages/about.astro`).
- [ ] **Reviews:** add 3–5 real reviews from HomeStars/Google in `src/data/site.js`.
- [ ] **Confirm with the client:** job durations (bathroom 3–4 weeks, kitchen 5–8, repairs "often within the week"), the kitchen timeline steps (drafted), "we call back within one business day", that the second before/after pair is the same job, and the preferred email address.
- [ ] More kitchen photos: the Kitchens page only has 2 kitchen photos, so its gallery also shows living spaces.
- [ ] A vector version of the logo and the official HomeStars badge.

## Design reference

The original design handoff is in `design/` (open `design/README.md`).
