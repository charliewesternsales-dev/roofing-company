import { imagery } from './imagery';

export const site = {
  name: 'Platinum Exteriors, Inc.',
  brand: { wordmark: 'Platinum', descriptor: 'Exteriors, Inc.' },
  owner: 'Keeton Epps',
  phone: '(503) 444-1322',
  phoneHref: 'tel:+15034441322',
  cellPhone: '(541) 936-1257',
  cellPhoneHref: 'tel:+15419361257',
  fax: '(541) 327-2816',
  email: 'keetonplatinumext@gmail.com',
  emailHref: 'mailto:keetonplatinumext@gmail.com',
  address: '1109 1st Avenue, Suite F, Box 538, Canby, Oregon 97013',
  mailingAddress: { streetAddress: '1109 1st Avenue, Suite F, Box 538', addressLocality: 'Canby', addressRegion: 'OR', postalCode: '97013', addressCountry: 'US' },
  hours: 'Call to arrange a consultation',
  license: '',
  licenseVerified: false,
  insuranceVerified: false,
  warranty: 'Ask about the workmanship coverage included in your written project agreement, including its terms and exclusions.',
  readyToPublish: true,
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://roofing-company-omega.vercel.app',
  description: 'Professional residential roofing services in Portland, Oregon. Roof repair, replacement, inspections, and new roof installation. Request a free estimate.',
};

export const navigation = [
  ['Home', '/'], ['Roofing Services', '/roofing-services'], ['About Us', '/about'],
  ['Our Projects', '/projects'], ['Service Areas', '/service-areas'], ['Reviews', '/reviews'], ['Contact', '/contact'],
];

export const services = [
  { slug: 'roof-replacement', name: 'Roof Replacement', short: 'A fresh start. Built to last.', description: 'A complete roofing system, thoughtfully selected for your home and installed with attention to every detail.', image: imagery['service-replacement'].src, imageAlt: imagery['service-replacement'].alt, overviewImage: imagery['material-shingles'].src, overviewAlt: imagery['material-shingles'].alt, icon: 'house', problems: ['Widespread shingle wear or missing shingles', 'Recurring leaks and moisture concerns', 'An aging roof that needs a fresh assessment'], approach: 'Start with the condition of the entire roof, including decking, flashing, ventilation, and drainage. Review repair and replacement options before deciding on a scope of work.', benefits: ['A coordinated roof system', 'A chance to address underlying issues', 'Materials that complement your home'] },
  { slug: 'roof-repair', name: 'Roof Repair', short: 'Small fixes. A big difference.', description: 'From a persistent leak to damaged flashing, address the source of the problem and help protect your home.', image: imagery['service-repair'].src, imageAlt: imagery['service-repair'].alt, overviewImage: imagery['workmanship'].src, overviewAlt: imagery['workmanship'].alt, icon: 'tool', problems: ['Leaks around chimneys or roof penetrations', 'Loose, damaged, or missing shingles', 'Worn flashing or damaged roof edges'], approach: 'Inspect the affected area and nearby roof components to understand where water may be entering. Recommend a targeted repair when the surrounding roof is in suitable condition.', benefits: ['Targeted attention to roof concerns', 'Clear explanation of repair options', 'Practical next steps for ongoing care'] },
  { slug: 'roof-inspection', name: 'Roof Inspection', short: 'Know your roof. Plan ahead.', description: 'Understand the condition of your roof with a careful assessment and clear, practical next steps.', image: imagery['service-inspection'].src, imageAlt: imagery['service-inspection'].alt, overviewImage: imagery['service-maintenance'].src, overviewAlt: imagery['service-maintenance'].alt, icon: 'search', problems: ['Uncertainty about the age or condition of a roof', 'Water stains or changes in the attic', 'Visible wear after a windy season'], approach: 'Review accessible roof surfaces and related components. Discuss observations, inspection limitations, and any areas that call for further investigation.', benefits: ['A clearer picture of roof condition', 'A basis for maintenance planning', 'Recommendations you can discuss'] },
  { slug: 'new-roof-installation', name: 'New Roof Installation', short: 'A strong start for your home.', description: 'Roofing for new construction and major home projects, with the details considered from the start.', image: imagery['service-installation'].src, imageAlt: imagery['service-installation'].alt, overviewImage: imagery['material-metal'].src, overviewAlt: imagery['material-metal'].alt, icon: 'layers', problems: ['A new home needing a coordinated roofing plan', 'An addition that must meet the existing roof', 'Material and ventilation choices to work through'], approach: 'Coordinate the roof design, materials, flashing details, and installation sequence with your project team. Confirm the scope and scheduling before work begins.', benefits: ['Roofing planned with the whole home in mind', 'Coordinated details and material choices', 'An agreed installation sequence'] },
  { slug: 'storm-damage-roofing', name: 'Storm Damage Repair', short: 'After the storm, a clear next step.', description: 'Assess wind and weather damage, understand your options, and make a plan to restore your roof.', image: imagery['service-storm'].src, imageAlt: imagery['service-storm'].alt, overviewImage: imagery['service-repair'].src, overviewAlt: imagery['service-repair'].alt, icon: 'cloud', problems: ['Shingles displaced by strong wind', 'Roof damage from falling branches', 'New water intrusion after heavy rain'], approach: 'Arrange an assessment when conditions are safe. Identify visible damage, discuss immediate concerns, and outline the recommended roofing work. Insurance coverage is determined by your insurer.', benefits: ['A clear assessment of visible damage', 'Prioritized repair recommendations', 'Documentation of the proposed work'] },
  { slug: 'roof-maintenance', name: 'Roof Maintenance', short: 'A little care goes a long way.', description: 'Stay ahead of roof concerns with maintenance tailored to your roof, surrounding trees, and seasonal conditions.', image: imagery['service-maintenance'].src, imageAlt: imagery['service-maintenance'].alt, overviewImage: imagery['woodland-home'].src, overviewAlt: imagery['woodland-home'].alt, icon: 'leaf', problems: ['Debris collecting in roof valleys', 'Moss or algae on roof surfaces', 'Blocked drainage or changing roof condition'], approach: 'Assess the roof and follow material-specific care guidance. Discuss debris, drainage, and visible wear without recommending treatments that may damage roofing materials.', benefits: ['Attention to small issues early', 'A roof-specific maintenance plan', 'Seasonal drainage and debris checks'] },
];

export const reasons = [
  ['Quality workmanship', 'Care in the details. From the first layer to the final shingle.'],
  ['Clear communication', 'Understand the work, the timeline, and what happens next.'],
  ['Materials that make sense', 'Thoughtful roofing choices for your home and our climate.'],
  ['Respect for your home', 'Plan for your landscaping, property, and everyday routine.'],
  ['Straightforward estimates', 'A clear scope of work before your project begins.'],
];

export const steps = [
  ['Let’s talk about your roof', 'Tell us about your home, your concerns, and what you have in mind.'],
  ['Take a closer look', 'A roof inspection helps identify what needs attention.'],
  ['Find the right solution', 'Review your options, materials, timeline, and estimate.'],
  ['Bring it all together', 'Complete the agreed work, clean up, and walk through the details.'],
];

export const faqs = [
  ['How do I know if I need a new roof?', 'Recurring leaks, widespread shingle damage, and visible wear can be reasons to arrange an inspection. An assessment helps determine whether a targeted repair or a full replacement makes sense. Age alone does not tell the whole story.'],
  ['How often should a roof be inspected?', 'The right schedule depends on the material, roof age, nearby trees, and manufacturer guidance. Consider an inspection when you notice a change, after significant weather, or when planning maintenance.'],
  ['How long does a roof replacement take?', 'Timing depends on roof size, complexity, materials, weather, and any underlying repairs. Your estimate should explain the anticipated schedule and conditions that could change it.'],
  ['How much does a roof replacement cost in Portland?', 'Every home is different. Roof area, slope, access, material choices, and the condition of the decking all affect the price. A written estimate based on an inspection is the best starting point.'],
  ['Can you repair a leaking roof?', 'Many leaks can be addressed with a targeted repair, depending on their source and the condition of the roof. An inspection helps identify the cause and whether additional work may be needed.'],
  ['What roofing materials are available?', 'Architectural asphalt shingles, metal, and other roofing systems may be options. Discuss product availability, suitability, and care requirements when planning your project.'],
  ['Do you provide free estimates?', 'Request a free roofing estimate using our contact form or by phone. We will discuss your project and arrange the next steps. Any separate inspection fees will be discussed before scheduling.'],
  ['Do you work with insurance claims?', 'Ask what project documentation can be provided, and contact your insurer directly about coverage and claim requirements.'],
  ['How long does a typical roof last?', 'Roof life varies with material, installation, ventilation, maintenance, and exposure. Review the product information and ask for an assessment of your existing roof instead of relying on a general lifespan.'],
  ['What should I do if my roof starts leaking?', 'Keep clear of wet electrical fixtures and sagging ceilings, and avoid climbing onto a wet roof. If safe, protect belongings and contain drips. Contact a roofing professional to assess the source; urgent safety concerns need appropriate emergency assistance.'],
];

export const projects = [
  { id: 1, name: 'A classic roofline, renewed', type: 'Roof Replacement', location: "Canby, Oregon", duration: "Example schedule: 3-4 days", material: "Charcoal architectural shingles", description: "A fictional replacement plan for a two-story home with aging shingles. The concept pairs a charcoal roof with crisp flashing details and balanced attic ventilation.", scope: ["Remove existing shingles and inspect the roof deck","Install underlayment and new valley flashing","Finish with architectural shingles and ridge ventilation"], image: imagery['project-colonial'].src, alt: imagery['project-colonial'].alt },
  { id: 2, name: 'Modern lines. Thoughtful details.', type: 'New Roof Installation', location: "Lake Oswego, Oregon", duration: "Example schedule: 5-7 days", material: "Standing-seam metal roofing", description: "A fictional new-build concept with clean metal rooflines. The scope coordinates roof edges, drainage, and penetrations with the design of the home.", scope: ["Coordinate roof details with the building plans","Install underlayment and metal panels","Detail penetrations and rainwater drainage"], image: imagery['project-modern'].src, alt: imagery['project-modern'].alt },
  { id: 3, name: 'At home among the evergreens', type: 'Roof Repair', location: "West Linn, Oregon", duration: "Example schedule: 1-2 days", material: "Architectural shingles and metal flashing", description: "A fictional repair scenario for a wooded property with a leak near a roof junction. The concept focuses on tracing water entry and restoring affected details.", scope: ["Inspect the valley and adjoining surfaces","Replace damaged shingles and flashing","Review drainage and maintenance"], image: imagery['project-cedar'].src, alt: imagery['project-cedar'].alt },
  { id: 4, name: 'A neighborhood classic', type: 'Roof Replacement', location: "Portland, Oregon", duration: "Example schedule: 3-5 days", material: "Weathered-gray architectural shingles", description: "A fictional roofing update for a traditional Northwest home. The material palette complements the exterior while addressing ventilation and weather protection.", scope: ["Remove the existing roof covering","Assess decking and update flashing","Install shingles, ventilation, and ridge caps"], image: imagery['project-traditional'].src, alt: imagery['project-traditional'].alt },
];

export const areas = ['Canby', 'Portland', 'Beaverton', 'Tigard', 'Lake Oswego', 'Gresham', 'Milwaukie', 'Happy Valley', 'Clackamas', 'Oregon City', 'West Linn', 'Hillsboro', 'Tualatin', 'Sherwood', 'Wilsonville'];
export const materials = [
  { name: 'Architectural shingles', description: 'Layered texture and a familiar look that works with a wide range of home styles.', details: 'Consider color, profile, product specifications, ventilation, and the complete installation system.', image: imagery['material-shingles'].src, imageAlt: imagery['material-shingles'].alt },
  { name: 'Metal roofing', description: 'Clean lines and a distinctive finish for traditional and contemporary homes.', details: 'Discuss panel profile, finish, fastening, flashing details, and compatibility with your roof design.', image: imagery['material-metal'].src, imageAlt: imagery['material-metal'].alt },
  { name: 'Premium roofing systems', description: 'Distinctive material options for a considered, cohesive exterior.', details: 'Ask about available products, structural requirements, maintenance, and manufacturer terms.', image: imagery['material-slate'].src, imageAlt: imagery['material-slate'].alt },
];
