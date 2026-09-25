# Platinum Exteriors, Inc. website

A complete Next.js App Router site with 15 pages, TypeScript, Tailwind CSS 4, locally hosted Manrope fonts, and optimized local photography. The design uses forest green, warm white, sand accents, editorial layouts, and a photographic Pacific Northwest hero.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. For production, run `npm run build` followed by `npm start`. Requires Node.js 20.9 or newer.

## Deploy to Vercel

Import the GitHub repository as a Next.js project. This repository includes `vercel.json` to explicitly select Next.js, install from the lockfile with `npm ci`, and build with `npm run build`.

Use these settings on the import screen, or in **Project Settings → Build and Deployment**:

- Framework Preset: **Next.js**.
- Root Directory: repository root (`./`), where `package.json` is located.
- Build Command: `npm run build`.
- Install Command: `npm ci`.
- Output Directory: leave the override **off** so Vercel uses the Next.js default.

Commit and push `vercel.json` before retrying the import, so Vercel receives the setting. If the project is already connected, deploy the new commit rather than redeploying an older commit that lacks this file.

An error such as `Expected VCR image registry vcr.vercel.com: <detect>` refers to Vercel's container-image handling. This app has no container configuration and should use the Next.js preset. Explicitly select Next.js and verify the repository root. If the error persists before a build starts, capture the import settings and full error for diagnosis; a successful local build does not verify Vercel's import settings or account state.

Configure Resend in Vercel before accepting inquiries. See the setup below; never commit API keys or `.env.local`.

## Content and pages

Edit `src/lib/site.ts` for the company name, contact details, license verification, warranty, navigation, services, projects, proposed service areas, process, materials, and FAQs. Image paths, descriptive alt text, and page hero assignments live in `src/lib/imagery.ts`. Shared components live in `src/components`; responsive styles are in `src/app/globals.css`.

Routes: `/`, `/about`, `/roofing-services`, `/roof-replacement`, `/roof-repair`, `/roof-inspection`, `/new-roof-installation`, `/storm-damage-roofing`, `/roof-maintenance`, `/projects`, `/service-areas`, `/reviews`, `/contact`, `/privacy-policy`, and `/terms-of-service`.

Interactive features include the mobile menu, service dropdown, project filtering and keyboard-dismissable project dialogs, material detail panels, FAQ accordion, service-area selection with city-prefilled contact links, form validation, and Resend email delivery. The map is an intentionally schematic regional illustration, not a confirmed coverage boundary.

## Resend setup

The form posts to /api/estimate, which sends a plain-text email through Resend. All form fields are included and the homeowner is the reply-to address. The API key stays on the server. The form retains entered details if delivery fails and only shows success after Resend accepts the email with a receipt ID.

In Vercel, open Project Settings > Environment Variables and add:

| Variable | Value |
| --- | --- |
| NEXT_PUBLIC_SITE_URL | https://roofing-company-omega.vercel.app |
| RESEND_API_KEY | Your Resend sending API key |
| RESEND_FROM_EMAIL | A sender on your verified domain, such as estimates@yourdomain.com |
| ESTIMATE_TO_EMAIL | keetonplatinumext@gmail.com, or the inbox you choose |

For local development, copy .env.example to .env.local and fill in the same values. In Vercel, select the Production environment and redeploy after saving the values.

The Vercel app hostname is the website address, not an email sending domain. For production email, [verify a domain you control in Resend](https://resend.com/docs/dashboard/domains/introduction) and use a sender on that domain. You can keep hosting the website at the Vercel address.

For a temporary test without your own domain, set RESEND_FROM_EMAIL to onboarding@resend.dev and ESTIMATE_TO_EMAIL to the email associated with your Resend account. Resend restricts this test sender to that recipient; do not use it as the production sender. See [Resend test-domain restrictions](https://resend.com/docs/knowledge-base/403-error-resend-dev-domain).

After deployment, submit one test inquiry with contact details you control, check the received email and reply-to address, and confirm its delivery status in Resend. Local automated tests mock Resend and do not verify inbox delivery. Identical inquiries use the same idempotency key, avoiding duplicate sends when retrying within Resend's 24-hour retention window. The endpoint validates fields, rejects honeypot submissions and cross-origin browser requests, limits request size, and times out after ten seconds. Configure a Vercel firewall rate limit for POST /api/estimate to limit automated submissions across server instances.

## Business content

The site uses the supplied name, owner, phone numbers, email, and Canby mailing address. About copy describes the company approach without inventing founding dates, credentials, or completed-job counts. Unknown hours and warranty guarantees are replaced by consultation and project-agreement language.

There are three clearly labeled fictional sample reviews and four fictional sample project entries with locations, materials, example schedules, and scope descriptions. Replace these with approved customer reviews and actual project records when available. No sample reviews are included in structured rating data. Illustrative photographs are not evidence of company work.

The site is configured for indexing at https://roofing-company-omega.vercel.app. To move to a custom domain, set NEXT_PUBLIC_SITE_URL to its HTTPS origin and redeploy. Review the privacy and service terms against your actual business operations. Company identity, services, project data, and FAQs live in src/lib/site.ts; sample reviews live in src/components/reviews.tsx.

## Checks

```sh
npx playwright install chromium
npm run dev
# In a second terminal:
npm test
npm run typecheck
npm run build
```

The browser suite checks all 15 routes, one H1 per page, local navigation, five responsive widths, project controls, FAQ and material controls, city-prefilled contact links, form validation and sending states, API failure cases, Resend payloads and retry handling, and production indexing. `TEST_BASE_URL` can point it at another local port. Screenshots are generated in the ignored `artifacts/` directory. `node audit.cjs` runs automated WCAG checks on the home, contact, and projects pages while a local server is running.

## Image sources

See `ASSETS.md` for source IDs, generated image prompts, and final asset paths. Images and fonts are served locally; no map API, external image request, tracking, or analytics is required at runtime.
