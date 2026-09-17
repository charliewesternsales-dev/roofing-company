# Portland residential roofing website

A complete Next.js App Router site with 15 pages, TypeScript, Tailwind CSS 4, locally hosted Manrope fonts, and optimized local photography. The design uses forest green, warm white, sand accents, editorial layouts, and a photographic Pacific Northwest hero.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. For production, run `npm run build` followed by `npm start`. Requires Node.js 20.9 or newer.

## Content and pages

Edit `src/lib/site.ts` for the company name, contact details, license verification, warranty, navigation, services, projects, proposed service areas, process, materials, and FAQs. Shared components live in `src/components`; responsive styles are in `src/app/globals.css`.

Routes: `/`, `/about`, `/roofing-services`, `/roof-replacement`, `/roof-repair`, `/roof-inspection`, `/new-roof-installation`, `/storm-damage-roofing`, `/roof-maintenance`, `/projects`, `/service-areas`, `/reviews`, `/contact`, `/privacy-policy`, and `/terms-of-service`.

Interactive features include the mobile menu, service dropdown, project filtering and keyboard-dismissable project dialogs, material detail panels, FAQ accordion, service-area selection with city-prefilled contact links, form validation, and preview inquiry downloads. The map is an intentionally schematic regional illustration, not a confirmed coverage boundary.

## Estimate inquiries

The default is **honest preview mode**: no request is sent, no customer information is stored on the server, and completing the form prepares an optional local text download. Reloading the page clears the draft. A missing business phone leads to contact information rather than a fake telephone number.

To enable delivery, copy `.env.example` to `.env.local` and set `ESTIMATE_WEBHOOK_URL` to an HTTPS endpoint under your control. Optionally set `ESTIMATE_WEBHOOK_TOKEN` for bearer authentication. The endpoint receives JSON with the validated form fields and `source: "roofing-website"`. It must persist or deliver the inquiry before returning a success status. Set these variables at build time and runtime, then rebuild; public pages are prerendered. Secrets are server-only.

The API validates fields, rejects the honeypot and cross-origin browser requests, restricts payload size, times out delivery after ten seconds, and reports delivery failures without a fake success. Add the hosting platform's rate limits before enabling public lead delivery. The external provider's actual receipt and follow-up require an end-to-end check once its URL is supplied.

## Publishing real business content

The site deliberately includes visible placeholders because no business identity or credentials were supplied. Before publication, replace the company identity/logo, phone, email, address, hours, business story, license, insurance verification, actual warranty terms, material offerings, approved reviews, and genuine project photographs. Confirm estimate availability, the service descriptions, and surrounding communities. Complete the privacy and terms drafts for the actual business and inquiry provider.

Set `NEXT_PUBLIC_SITE_URL` to the real HTTPS origin and set `site.readyToPublish` to `true` only after content is complete. Until then, the site sends `noindex, nofollow`, robots disallows indexing, the sitemap has no placeholder URLs, and RoofingContractor JSON-LD is omitted. When enabled, the sitemap and structured data use the configured identity. Only set `licenseVerified`/`insuranceVerified` after verification. Set `phoneHref` to the business's actual `tel:` link.

No reviews, ratings, years in business, awards, license numbers, warranty periods, prices, manufacturer partnerships, or project addresses have been invented. Hero and professional imagery are AI-generated illustrative concepts and are visibly labeled. The gallery does not represent company work; its before/after slots await actual photographs.

## Checks

```sh
npx playwright install chromium
npm run dev
# In a second terminal:
npm test
npm run typecheck
npm run build
```

The browser suite checks all 15 routes, one H1 per page, local navigation, five responsive widths, project controls, FAQ and material controls, city-prefilled contact links, form validation and downloads, API failure cases, and preview indexing. `TEST_BASE_URL` can point it at another local port. Screenshots are generated in the ignored `artifacts/` directory. `node audit.cjs` runs automated WCAG checks on the home, contact, and projects pages while a local server is running.

## Image sources

See `ASSETS.md` for source IDs, generated image prompts, and final asset paths. Images and fonts are served locally; no map API, external image request, tracking, or analytics is required at runtime.
