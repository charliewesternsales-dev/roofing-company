export const site = {
  name: '[Company Name]',
  phone: '[PHONE NUMBER]',
  phoneHref: '',
  email: '[EMAIL ADDRESS]',
  address: '[BUSINESS ADDRESS]',
  hours: '[BUSINESS HOURS]',
  license: '',
  licenseVerified: false,
  insuranceVerified: false,
  warranty: '[WORKMANSHIP WARRANTY DETAILS]',
  readyToPublish: false,
  url: process.env.NEXT_PUBLIC_SITE_URL || '',
  description: 'Professional residential roofing services in Portland, Oregon. Roof repair, replacement, inspections, and new roof installation. Request a free estimate.',
};

export const navigation = [
  ['Home', '/'], ['Roofing Services', '/roofing-services'], ['About Us', '/about'],
  ['Our Projects', '/projects'], ['Service Areas', '/service-areas'], ['Reviews', '/reviews'], ['Contact', '/contact'],
];

export const services = [
  { slug: 'roof-replacement', name: 'Roof Replacement', short: 'A fresh start. Built to last.', description: 'A complete roofing system, thoughtfully selected for your home and installed with attention to every detail.', image: '/images/pnw-home.webp', icon: 'house', problems: ['Widespread shingle wear or missing shingles', 'Recurring leaks and moisture concerns', 'An aging roof that needs a fresh assessment'], approach: 'Start with the condition of the entire roof, including decking, flashing, ventilation, and drainage. Review repair and replacement options before deciding on a scope of work.', benefits: ['A coordinated roof system', 'A chance to address underlying issues', 'Materials that complement your home'] },
  { slug: 'roof-repair', name: 'Roof Repair', short: 'Small fixes. A big difference.', description: 'From a persistent leak to damaged flashing, address the source of the problem and help protect your home.', image: '/images/roof-detail.webp', icon: 'tool', problems: ['Leaks around chimneys or roof penetrations', 'Loose, damaged, or missing shingles', 'Worn flashing or damaged roof edges'], approach: 'Inspect the affected area and nearby roof components to understand where water may be entering. Recommend a targeted repair when the surrounding roof is in suitable condition.', benefits: ['Targeted attention to roof concerns', 'Clear explanation of repair options', 'Practical next steps for ongoing care'] },
  { slug: 'roof-inspection', name: 'Roof Inspection', short: 'Know your roof. Plan ahead.', description: 'Understand the condition of your roof with a careful assessment and clear, practical next steps.', image: '/images/forest-home.webp', icon: 'search', problems: ['Uncertainty about the age or condition of a roof', 'Water stains or changes in the attic', 'Visible wear after a windy season'], approach: 'Review accessible roof surfaces and related components. Discuss observations, inspection limitations, and any areas that call for further investigation.', benefits: ['A clearer picture of roof condition', 'A basis for maintenance planning', 'Recommendations you can discuss'] },
  { slug: 'new-roof-installation', name: 'New Roof Installation', short: 'A strong start for your home.', description: 'Roofing for new construction and major home projects, with the details considered from the start.', image: '/images/home-exterior.webp', icon: 'layers', problems: ['A new home needing a coordinated roofing plan', 'An addition that must meet the existing roof', 'Material and ventilation choices to work through'], approach: 'Coordinate the roof design, materials, flashing details, and installation sequence with your project team. Confirm the scope and scheduling before work begins.', benefits: ['Roofing planned with the whole home in mind', 'Coordinated details and material choices', 'An agreed installation sequence'] },
  { slug: 'storm-damage-roofing', name: 'Storm Damage Repair', short: 'After the storm, a clear next step.', description: 'Assess wind and weather damage, understand your options, and make a plan to restore your roof.', image: '/images/forest-home.webp', icon: 'cloud', problems: ['Shingles displaced by strong wind', 'Roof damage from falling branches', 'New water intrusion after heavy rain'], approach: 'Arrange an assessment when conditions are safe. Identify visible damage, discuss immediate concerns, and outline the recommended roofing work. Insurance coverage is determined by your insurer.', benefits: ['A clear assessment of visible damage', 'Prioritized repair recommendations', 'Documentation of the proposed work'] },
  { slug: 'roof-maintenance', name: 'Roof Maintenance', short: 'A little care goes a long way.', description: 'Stay ahead of roof concerns with maintenance tailored to your roof, surrounding trees, and seasonal conditions.', image: '/images/roof-detail.webp', icon: 'leaf', problems: ['Debris collecting in roof valleys', 'Moss or algae on roof surfaces', 'Blocked drainage or changing roof condition'], approach: 'Assess the roof and follow material-specific care guidance. Discuss debris, drainage, and visible wear without recommending treatments that may damage roofing materials.', benefits: ['Attention to small issues early', 'A roof-specific maintenance plan', 'Seasonal drainage and debris checks'] },
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
  ['What roofing materials are available?', 'Architectural asphalt shingles, metal, and other roofing systems may be options. The available materials and product lines for this company are awaiting confirmation; discuss suitability and availability before choosing.'],
  ['Do you provide free estimates?', 'This website is designed for free estimate requests. The business owner must confirm estimate availability and any inspection fees before publication. In preview mode, the form lets you prepare an inquiry without sending it.'],
  ['Do you work with insurance claims?', 'The company’s insurance-claim assistance is awaiting confirmation. Ask what documentation can be provided and contact your insurer directly about coverage and claim requirements.'],
  ['How long does a typical roof last?', 'Roof life varies with material, installation, ventilation, maintenance, and exposure. Review the product information and ask for an assessment of your existing roof instead of relying on a general lifespan.'],
  ['What should I do if my roof starts leaking?', 'Keep clear of wet electrical fixtures and sagging ceilings, and avoid climbing onto a wet roof. If safe, protect belongings and contain drips. Contact a roofing professional to assess the source; urgent safety concerns need appropriate emergency assistance.'],
];

export const projects = [
  { id: 1, name: 'A classic roofline, renewed', type: 'Roof Replacement', material: 'Architectural shingles · example', image: '/images/pnw-home.webp', alt: 'Illustrative Pacific Northwest craftsman home with a broad charcoal shingle roof' },
  { id: 2, name: 'Modern lines. Thoughtful details.', type: 'New Roof Installation', material: 'Roof system · to be confirmed', image: '/images/home-exterior.webp', alt: 'Reference photograph of a contemporary home framed by landscaping' },
  { id: 3, name: 'At home among the evergreens', type: 'Roof Repair', material: 'Roof materials · to be confirmed', image: '/images/forest-home.webp', alt: 'Reference photograph of a home surrounded by mature trees' },
  { id: 4, name: 'The details that matter', type: 'Roof Replacement', material: 'Roofing detail · reference', image: '/images/roof-detail.webp', alt: 'Reference photograph showing a residential roof and exterior details' },
];

export const areas = ['Portland', 'Beaverton', 'Tigard', 'Lake Oswego', 'Gresham', 'Milwaukie', 'Happy Valley', 'Clackamas', 'Oregon City', 'West Linn', 'Hillsboro', 'Tualatin', 'Sherwood', 'Wilsonville'];
export const materials = [
  { name: 'Architectural shingles', description: 'Layered texture and a familiar look that works with a wide range of home styles.', details: 'Consider color, profile, product specifications, ventilation, and the complete installation system.', image: '/images/roof-detail.webp' },
  { name: 'Metal roofing', description: 'Clean lines and a distinctive finish for traditional and contemporary homes.', details: 'Discuss panel profile, finish, fastening, flashing details, and compatibility with your roof design.', image: '/images/forest-home.webp' },
  { name: 'Premium roofing systems', description: 'Distinctive material options for a considered, cohesive exterior.', details: 'Ask about available products, structural requirements, maintenance, and manufacturer terms.', image: '/images/home-exterior.webp' },
];
