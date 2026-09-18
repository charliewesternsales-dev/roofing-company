// Purpose-specific imagery. Concept photographs do not represent company projects.
export const imagery = {
  'home-hero': { src: "/images/pnw-home.webp", alt: "Illustrative Pacific Northwest craftsman home with a charcoal shingle roof and evergreen landscaping." },
  'workmanship': { src: "/images/roof-professional.webp", alt: "Illustrative roofing professional inspecting architectural shingles while wearing a safety harness." },
  'project-modern': { src: "/images/home-exterior.webp", alt: "Reference photograph of a contemporary home with angular rooflines and mature landscaping." },
  'project-traditional': { src: "/images/roof-detail.webp", alt: "Reference photograph of a red-sided neighborhood home with a pitched shingle roof." },
  'woodland-home': { src: "/images/forest-home.webp", alt: "Reference photograph of a timber cabin and its roof beneath mature forest trees." },
  'service-replacement': { src: "/images/service-replacement.webp", alt: "Illustrative sage-green bungalow with a charcoal architectural shingle roof." },
  'service-repair': { src: "/images/service-repair.webp", alt: "Illustrative close-up of gloved hands checking flashing at a brick chimney." },
  'service-inspection': { src: "/images/service-inspection.webp", alt: "Illustrative inspector assessing a home's roof from the ground." },
  'service-installation': { src: "/images/service-installation.webp", alt: "Illustrative new home with exposed timber roof framing and partially installed sheathing." },
  'service-storm': { src: "/images/service-storm.webp", alt: "Illustrative wind-damaged shingles and a fallen branch near a roof edge." },
  'service-maintenance': { src: "/images/service-maintenance.webp", alt: "Illustrative gloved hands clearing leaves from a residential gutter." },
  'material-shingles': { src: "/images/material-shingles.webp", alt: "Illustrative close-up of the layered edges and mineral texture of architectural shingles." },
  'material-metal': { src: "/images/material-metal.webp", alt: "Illustrative graphite standing-seam metal roof with raised seams and a folded eave." },
  'material-slate': { src: "/images/material-slate.webp", alt: "Illustrative blue-gray slate roofing with subtle stone texture and copper valley flashing." },
  'weather-rain': { src: "/images/weather-rain.webp", alt: "Illustrative blue-gray home with a rain-wet roof, ferns, and misty evergreens." },
  'project-colonial': { src: "/images/project-colonial.webp", alt: "Illustrative ivory Dutch Colonial home with a charcoal gambrel roof and dormer windows." },
  'project-cedar': { src: "/images/project-cedar.webp", alt: "Illustrative cedar-sided midcentury home with a low-pitched roof among mature fir trees." },
  'portland-neighborhood': { src: "/images/portland-neighborhood.webp", alt: "Illustrative aerial view of varied residential rooflines and tree-lined streets in a Pacific Northwest neighborhood." },
  'contact-porch': { src: "/images/contact-porch.webp", alt: "Illustrative cedar front door and covered craftsman porch with fern planting." },
} as const;

export const pageImagery: Record<string, { src: string; alt: string } | undefined> = {
  about: imagery['woodland-home'],
  'roofing-services': imagery.workmanship,
  projects: imagery['material-slate'],
  'service-areas': imagery['portland-neighborhood'],
  reviews: imagery['project-traditional'],
  contact: imagery['contact-porch'],
};

