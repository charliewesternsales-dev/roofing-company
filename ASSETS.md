# Imagery

All imagery is illustrative. Stock photographs are not represented as Portland locations or company projects. Genuine project photography should replace gallery references before publication.

## Generated hero and professional image

Created using the built-in imagegen tool. Final optimized project files:

- `public/images/pnw-home.webp`
- `public/images/roof-professional.webp`

Hero prompt:

> Use case: photorealistic-natural. Asset type: wide website hero photograph for premium residential roofing business in Portland Oregon. Create a natural high-end architectural editorial photograph of a beautiful established Pacific Northwest craftsman family home: warm off-white siding, deep charcoal architectural shingle pitched roof with elegant cross-gables, cedar porch accents, a lush but realistic front garden, mature Douglas firs and deciduous trees. Entire house roof clearly visible. Slight elevated three-quarter frontal camera view. House occupies the center and right two thirds; left third darker trees and subdued garden provides space for website copy. Soft late afternoon overcast sunlight, serene forest green and warm neutral tones, crisp roofing textures, no exaggerated HDR, no artificial glow, no pool, no palm trees, no people, no text, no logo, no watermark. Horizontal landscape composition approximately 16:9. Should feel like an authentic architectural photograph, not a 3D render. This is an illustrative concept image, not a real company project.

Professional prompt:

> Use case: photorealistic-natural. Asset type: premium roofing website editorial vertical photo. Realistic documentary photograph of an adult roofing professional in a charcoal work jacket, tan work pants, sturdy boots, gloves and correctly worn safety harness connected to a visible secured fall arrest line, crouching while inspecting a clean dark gray architectural shingle roof on a Pacific Northwest craftsman home. Medium view from roof height, subject viewed in profile from behind and located upper right area, face not prominent, pitched roof texture in foreground, cedar and Douglas fir trees soft in background. Cool soft daylight, natural forest green and charcoal and warm neutrals, restrained professional photography, authentic material textures. Vertical 4:5 composition. No words, logos, watermark, fake certificates. This is illustrative concept photography, not a real company employee or project.

## Reference stock photography

Downloaded from Unsplash's image CDN and optimized locally to WebP:

- `public/images/home-exterior.webp`: https://images.unsplash.com/photo-1600585154340-be6161a56a0c — contemporary home exterior.
- `public/images/forest-home.webp`: https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8 — wooded cabin.
- `public/images/roof-detail.webp`: https://images.unsplash.com/photo-1628624747186-a941c476b7ef — residential home with pitched roof.

The Platinum Exteriors, Inc. identity is original vector artwork: a roofline and P monogram in navy `#193b50`, platinum `#9eacb4`, and an off-white reversed version. Exportable full logos and standalone marks are in `public/brand/`; the matching browser icon is `src/app/icon.svg`. Website wordmark typography uses locally bundled Manrope; standalone SVG wordmarks use Arial/Helvetica. The supplied business card informed the palette; its artwork was not copied. Interface icons use Lucide.

## Expanded image library

Fourteen additional images were created with the **built-in imagegen tool**, bringing the library to nineteen distinct photographs. Each homepage image has its own subject. Service pages pair their service-specific hero with a different supporting photograph, and inner pages have explicit hero assignments instead of sharing the homepage image. Legal pages use a text-only hero.

All final generated assets are saved locally as optimized WebP files:

| File in `public/images/` | Subject |
| --- | --- |
| `service-replacement.webp` | Sage bungalow and new architectural shingle roof |
| `service-repair.webp` | Chimney flashing inspection detail |
| `service-inspection.webp` | Inspector assessing a roof from the ground |
| `service-installation.webp` | Timber roof framing and partial sheathing |
| `service-storm.webp` | Localized wind damage and fallen branch |
| `service-maintenance.webp` | Clearing autumn leaves from a gutter |
| `material-shingles.webp` | Asphalt shingle texture and layered edges |
| `material-metal.webp` | Graphite standing-seam metal roofing |
| `material-slate.webp` | Slate tiles and copper valley flashing |
| `weather-rain.webp` | Blue-gray home in a rainy evergreen setting |
| `project-colonial.webp` | Ivory Dutch Colonial home with gambrel roof |
| `project-cedar.webp` | Cedar-sided midcentury home with low roofline |
| `portland-neighborhood.webp` | Illustrative neighborhood rooflines and streets |
| `contact-porch.webp` | Welcoming cedar door and covered porch |

The complete final prompt for each image is recorded in [docs/image-prompts.json](docs/image-prompts.json). Image assignments and alt text are centralized in [src/lib/imagery.ts](src/lib/imagery.ts). Original source images were preserved in the imagegen output directory; the website serves only the optimized copies.

These are illustrative concepts, not verified company projects, employees, product offerings, or actual Portland locations. Existing disclosure text remains in place.

## Design references

The supplied references were consulted for service discoverability, prominent estimate calls to action, and the sequence of information a homeowner needs. No competitor content, images, branding, claims, or exact layout was copied. Premier Pacific Roofing was accessible; Bliss Roofing and KVN returned retrieval errors during the initial review.
