export interface Project {
  id: string;
  title: string;
  category: 'Luxury Living' | 'Master Suites' | 'Double-Height Units' | 'Commercial' | 'Landscaping';
  location: string;
  state: 'Telangana' | 'Andhra Pradesh';
  year: string;
  area: string;
  coverImage: string;
  gallery: string[];
  description: string;
  scope: string[];
  materials: string[];
  highlights: string[];
  client: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  deliverables: string[];
  keyFeatures: { title: string; desc: string }[];
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  subtitle: string;
  description: string;
  milestones: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  designation: string;
  location: string;
  projectType: string;
  quote: string;
  rating: number;
  image: string;
  projectImage: string;
}

export const STUDIO_INFO = {
  name: "Into Design Studio",
  founder: "Vamsi Atluri",
  founderTitle: "Managing Director & Principal Architect",
  established: 2008,
  tagline: "Transforming Spaces into Timeless Experiences Since 2008.",
  subheadline: "Bespoke Architecture, Interior Design & Landscape Architecture across Telangana & Andhra Pradesh.",
  location: "Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033",
  serving: "Telangana & Andhra Pradesh (Hyderabad, Secunderabad, Vijayawada, Visakhapatnam, Amaravati, Guntur, Warangal)",
  phone: "+91 98490 28456",
  email: "connect@intodesignstudio.com",
  directDesk: "desk.vamsi@intodesignstudio.com",
  whatsapp: "919849028456",
  metrics: [
    { value: "16+", label: "Years of Excellence", sub: "Since 2008" },
    { value: "150+", label: "Curated Projects", sub: "Luxury Villas & Estates" },
    { value: "100%", label: "On-Time Execution", sub: "Turnkey Precision" },
    { value: "4.95★", label: "Client Satisfaction", sub: "Verified Reviews" }
  ]
};

export const VALUE_PILLARS = [
  {
    title: "Uncompromising Craftsmanship",
    desc: "From custom bookmatched Statuario Italian marble to seamless concealed joinery, every detail is engineered to perfection.",
    icon: "Gem"
  },
  {
    title: "Architectural Precision & Timelines",
    desc: "Detailed 3D millimeter-level CAD planning and milestone-locked execution ensuring zero-compromise, 100% on-time delivery.",
    icon: "Compass"
  },
  {
    title: "Client-Centric Collaboration",
    desc: "We co-author your sanctuary with personalized design workshops, tactile material curation, and bespoke lifestyle mapping.",
    icon: "Users"
  },
  {
    title: "End-to-End Turnkey Mastery",
    desc: "Complete single-point accountability from foundation blueprint and structural elevation to bespoke styling and lighting.",
    icon: "ShieldCheck"
  }
];

export const SERVICES: Service[] = [
  {
    id: "architecture",
    title: "Architecture & Structural Planning",
    tagline: "Monolithic luxury and spatial grandeur engineered for tropical elegance.",
    description: "Our architectural practice blends timeless classical proportions with bold contemporary forms. We specialize in luxury custom villas, multi-generational estates, and commercial headquarters designed around natural light, cross-ventilation, and majestic site vistas.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Concept Development & Site Spatial Analysis",
      "3D Realistic Elevation & Walkthrough Visuals",
      "Structural Engineering & Municipal Approvals",
      "Comprehensive On-Site Execution Supervision"
    ],
    keyFeatures: [
      { title: "Bespoke Massing", desc: "Cantilevered overhangs, double-height volumes, and climate-responsive thermal facades." },
      { title: "Natural Illumination", desc: "Central skylit atriums and floor-to-ceiling thermally insulated low-E glazing." }
    ]
  },
  {
    id: "interiors",
    title: "Bespoke Luxury Interior Design",
    tagline: "Sensory indulgence, curated Italian stones, and artisanal joinery.",
    description: "We create intimate, breathtaking sanctuaries. From grand double-height living halls in Jubilee Hills to tranquil penthouse suites in Gachibowli and Amaravati, our turnkey interiors balance tactile opulence, acoustic serenity, and smart ambient automation.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Turnkey Residential & Commercial Fitouts",
      "Imported Italian Marble Selection & Bookmatching",
      "Custom German Veneer & Fluted Joinery",
      "Architectural Layered Lighting Design (3000K Warm Ambiance)"
    ],
    keyFeatures: [
      { title: "Material Alchemy", desc: "Rare onyx panels, brushed brass trims, fluted oak wood, and acoustic fabrics." },
      { title: "Smart Living", desc: "Invisible DALI architectural lighting, motorized drapery, and integrated automation." }
    ]
  },
  {
    id: "landscape",
    title: "Landscape Architecture & Outdoor Living",
    tagline: "Harmonizing verdant nature with structural serenity.",
    description: "Extending your living room into the open sky. We curate bespoke terrace gardens, zen reflection pools, water walls, and open-air gazebo lounges that age gracefully under the Deccan climate.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    deliverables: [
      "Infinity Pools & Sculptural Water Features",
      "Terrace & Balcony Garden Architecture",
      "Ambient Exterior & Landscape Luminescence",
      "Micro-Irrigation & Native Flora Landscaping"
    ],
    keyFeatures: [
      { title: "Biophilic Retreats", desc: "Courtyards with frangipani trees, basalt stone stepping pads, and ambient soundscapes." },
      { title: "All-Weather Lounges", desc: "Teakwood pergolas, outdoor fire tables, and rain-protected entertainment decks." }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "jubilee-hills-villa-42",
    title: "The Alabaster Haven - Jubilee Hills",
    category: "Double-Height Units",
    location: "Jubilee Hills, Hyderabad",
    state: "Telangana",
    year: "2024",
    area: "9,800 Sq. Ft.",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A monumental 3-level villa showcasing a dramatic 24-foot double-height foyer with bookmatched Michael Angelo marble wall claddings and bespoke champagne-gold suspended chandelier.",
    scope: ["Turnkey Architecture", "Interior Architecture", "Bespoke Lighting", "Courtyard Landscape"],
    materials: ["Statuario Italian Marble", "Smoked European Oak", "Brushed Champagne Brass", "Acoustic Suede Paneling"],
    highlights: ["24ft Double-Height Grand Living", "Custom Italian Glass Elevator", "Internal Zen Waterfall Court"],
    client: "Private Industrialist Family",
    featured: true
  },
  {
    id: "banjara-hills-sky-penthouse",
    title: "The Obsidian Grandeur - Banjara Hills",
    category: "Luxury Living",
    location: "Road No. 12, Banjara Hills, Hyderabad",
    state: "Telangana",
    year: "2024",
    area: "7,200 Sq. Ft.",
    coverImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A panoramic sky penthouse overlooking KBR National Park. Featuring a minimalist matte black & brushed brass palette with open-plan entertainment lounges and bespoke wine gallery.",
    scope: ["Complete Interior Architecture", "Custom Furniture Design", "Acoustic Home Cinema"],
    materials: ["Nero Marquina Marble", "Fluted Canaletto Walnut", "Titanium Glass Partitions"],
    highlights: ["180° Panoramic Skyline Views", "Custom 12-Seater Marble Dining Slab", "Concealed Smart Automation"],
    client: "Tech Entrepreneur & Investor",
    featured: true
  },
  {
    id: "amaravati-royal-palazzo",
    title: "The Regal Waterfront Estate - Amaravati",
    category: "Luxury Living",
    location: "Riverside Enclave, Amaravati",
    state: "Andhra Pradesh",
    year: "2023",
    area: "12,500 Sq. Ft.",
    coverImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Expansive luxury manor on the banks of Krishna River, combining neoclassical grandeur with contemporary luxury indoor-outdoor living flow.",
    scope: ["Masterplan Architecture", "Interior Architecture", "Terrace Infinity Pool"],
    materials: ["Travertine Navona", "Teak Wood Trusses", "Onyx Backlit Bars"],
    highlights: ["Private Waterfront Infinity Pool", "Double-Height Grand Entrance Arch", "Dedicated Spa Suite"],
    client: "Prominent Business Dynasty",
    featured: true
  },
  {
    id: "gachibowli-presidential-master-suite",
    title: "The Serene Sanctuary Master Suite",
    category: "Master Suites",
    location: "Financial District, Gachibowli",
    state: "Telangana",
    year: "2024",
    area: "1,850 Sq. Ft.",
    coverImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An ultra-luxurious private wing featuring a walk-in wardrobe with Italian Rimadesio-style glass cabinetry, integrated vanity, and an en-suite with freestanding volcanic stone soaking tub.",
    scope: ["Master Bedroom Interiors", "Walk-in Wardrobe", "En-suite Bath Architecture"],
    materials: ["Calacatta Gold Marble", "Brushed Bronze Hardware", "Textured Silk Wallpaper"],
    highlights: ["Rimadesio Style Wardrobe Systems", "Freestanding Monolithic Bathtub", "Acoustic Bedhead Paneling"],
    client: "Healthcare Visionary",
    featured: false
  },
  {
    id: "vizag-coastal-villa-retreat",
    title: "The Horizon Coastal Villa - Visakhapatnam",
    category: "Landscaping",
    location: "Beach Road, Visakhapatnam",
    state: "Andhra Pradesh",
    year: "2023",
    area: "8,400 Sq. Ft.",
    coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A breezy cliffside retreat engineered for coastal resilience, featuring cantilevered sea-facing decks, salt-resistant materials, and a multi-level cascading water garden.",
    scope: ["Architecture", "Outdoor Lounges", "Terrace Garden & Infinity Pool"],
    materials: ["Corten Steel Accents", "Kota Stone Paving", "Marine-Grade Teak"],
    highlights: ["Sea-facing Cantilevered Lounge", "Cascading Zen Koi Pond", "Terrace Cocktail Pavilion"],
    client: "Maritime Shipping Director",
    featured: false
  },
  {
    id: "hitec-city-corporate-headquarters",
    title: "The Apex Boardroom & Executive Lounge",
    category: "Commercial",
    location: "HITEC City, Hyderabad",
    state: "Telangana",
    year: "2024",
    area: "14,000 Sq. Ft.",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A bespoke corporate sanctum for a private equity leadership team, balancing confidential meeting pods, museum-grade art displays, and acoustic perfection.",
    scope: ["Commercial Interior Design", "Acoustic Engineering", "Bespoke Boardroom Tables"],
    materials: ["Armani Grey Marble", "Acoustic Wood Slats", "Cognac Saddle Leather"],
    highlights: ["32-Seater Custom Onyx Boardroom Table", "Private C-Suite Cigar Lounge", "Integrated Video-Wall Telepresence"],
    client: "Global Private Equity Firm",
    featured: false
  },
  {
    id: "vijayawada-luxury-duplex",
    title: "The Lumina Duplex - Vijayawada",
    category: "Double-Height Units",
    location: "Benz Circle, Vijayawada",
    state: "Andhra Pradesh",
    year: "2023",
    area: "5,600 Sq. Ft.",
    coverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Modern duplex featuring a floating cantilevered spiral staircase in black matte steel and American walnut, creating an iconic centerpiece.",
    scope: ["Turnkey Interior Renovation", "Architectural Staircase", "Smart Lighting"],
    materials: ["Botticino Marble", "Brushed Brass Railings", "Warm Walnut Wood"],
    highlights: ["Sculptural Floating Staircase", "Double-Height Glass Curtain Wall", "Integrated Puja Room in White Makrana Marble"],
    client: "Senior Surgeon",
    featured: false
  },
  {
    id: "neopolis-kokapet-sky-villa",
    title: "The Celestial Sky Villa - Neopolis Kokapet",
    category: "Luxury Living",
    location: "Neopolis, Kokapet, Hyderabad",
    state: "Telangana",
    year: "2024",
    area: "8,900 Sq. Ft.",
    coverImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Ultra-luxury high-rise residence featuring double living rooms, a temperature-controlled cigar room, and custom Poliform-inspired walk-in suites.",
    scope: ["Complete Turnkey Interior Fitout", "Custom Lighting Schemas", "Home Automation"],
    materials: ["Portoro Gold Marble", "Champagne Gold PVD Stainless Steel", "Italian Suede"],
    highlights: ["Custom 100-Bottle Wine Display", "Double Living Room Spatial Division", "Integrated Touchless Controls"],
    client: "Fintech Co-Founder",
    featured: true
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Site Consultation",
    duration: "Week 1 - 2",
    subtitle: "Understanding your lifestyle DNA, spatial dreams, and site contours.",
    description: "We initiate every project with in-depth lifestyle mapping led personally by Vamsi Atluri. We analyze micro-climates, sun angles, family circulation patterns, and aesthetic inclinations before putting pen to paper.",
    milestones: [
      "Personal Lifestyle & Spatial Audit with Vamsi Atluri",
      "Site Laser Topography & Sun-Path Mapping",
      "Budget Matrix & Turnkey Scope Definition",
      "Initial Spatial Conceptual Moodboards"
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: "02",
    title: "3D Visualization & Material Curation",
    duration: "Week 3 - 6",
    subtitle: "Photorealistic 3D virtual walkthroughs and tactile material curation.",
    description: "Experience your finished home in high-definition 3D before a single brick is laid. We escort you through tactile material workshops to select Italian marble slabs, rare wood veneers, and custom lighting fixtures.",
    milestones: [
      "Millimeter-Accurate 3D Elevation & Interior Renders",
      "Direct Italian Marble Yard Selection & Slab Tagging",
      "Custom Joinery, Millwork & Fixtures Specification",
      "Comprehensive BOQ (Bill of Quantities) with Zero Hidden Costs"
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: "03",
    title: "Precision Execution & Project Management",
    duration: "Week 7 - 24",
    subtitle: "Master artisans, stringent quality milestones, and dedicated site supervision.",
    description: "Our in-house project engineers and master craftsmen execute every detail strictly according to schedule. Weekly photographic logs and milestone inspections guarantee uncompromising quality.",
    milestones: [
      "Dedicated Full-Time Senior Site Engineer",
      "Weekly Digital Progress Reports & 360° Site Scans",
      "Multi-Point Quality Audits for Waterproofing & Concealed MEP",
      "German Precision Joinery & Bookmatched Marble Laying"
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: "04",
    title: "Handover & Lifetime Post-Care",
    duration: "Final Milestone",
    subtitle: "White-glove deep cleaning, styling, and long-term care warranty.",
    description: "We deliver a pristine, fully accessorized sanctuary ready for living. Every client receives a comprehensive 'As-Built' digital archive, maintenance guidelines, and our dedicated post-care concierge warranty.",
    milestones: [
      "White-Glove Deep Cleaning & Bespoke Styling",
      "Complete MEP & Smart Automation Commissioning",
      "Comprehensive Digital 'As-Built' Blueprint Dossier",
      "10-Year Structural & Joinery Warranty Assurance"
    ],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    clientName: "Dr. K. Ravinder Reddy & Dr. Sumitra",
    designation: "Renowned Cardiac Surgeons",
    location: "Jubilee Hills, Hyderabad",
    projectType: "9,800 Sq. Ft. Luxury Villa",
    quote: "Working with Vamsi Atluri and Into Design Studio was the smoothest experience of our lives. They transformed our Jubilee Hills villa into an architectural masterpiece with Italian Statuario marble bookmatching that leaves every guest mesmerized. 100% on-time handover as promised!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    projectImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "t2",
    clientName: "Srikanth & Ananya Raju",
    designation: "Founders, Apex Infrastructure",
    location: "Road No. 12, Banjara Hills",
    projectType: "7,200 Sq. Ft. Penthouse Suite",
    quote: "The attention to detail in acoustic planning and subtle champagne-brass detailing is simply world-class. Into Design Studio brings a rare combination of structural engineering rigor and refined luxury interior aesthetic. Vamsi is a true visionary.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    projectImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "t3",
    clientName: "Venkata Satyanarayana Chowdary",
    designation: "Managing Director, Coastal Agro Industries",
    location: "Amaravati, Andhra Pradesh",
    projectType: "12,500 Sq. Ft. Waterfront Estate",
    quote: "From Hyderabad to Amaravati, their logistical capability and site supervision team delivered flawlessly. Our waterfront villa captures both tropical river breezes and majestic palace-grade luxury. Highly recommend Into Design Studio across AP and Telangana.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    projectImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80"
  }
];

export const BEFORE_AFTER_DATA = {
  title: "Bare Shell to Bespoke Luxury",
  subtitle: "Interactive Jubilee Hills Villa Transformation",
  location: "Jubilee Hills, Hyderabad",
  area: "4,200 Sq. Ft. Double-Height Living Room",
  beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  beforeLabel: "Raw Concrete Shell (Site Takeover)",
  afterLabel: "Completed Turnkey Luxury Interior",
  details: [
    "Installed 24-foot bookmatched Statuario marble feature wall with brass inlays",
    "Concealed architectural DALI dimmable magnetic track lighting",
    "Acoustic fluted walnut paneling with invisible pivot doors",
    "Italian custom velvet modular seating and solid bronze coffee tables"
  ]
};
