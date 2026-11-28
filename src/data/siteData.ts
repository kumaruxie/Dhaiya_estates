export interface NavItem {
  label: string;
  href: string;
}

export interface ExpertiseItem {
  number: string;
  title: string;
  description: string;
  icon: 'agricultural' | 'farmhouse' | 'plots' | 'development';
  image: string;
  imageAlt: string;
}

export interface CorridorItem {
  tag: string;
  number: string;
  region: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  interestOption: string;
  coordinatesLabel: string;
  mapEmbedUrl: string;
  mapOpenUrl: string;
}

export interface PillarItem {
  number: string;
  title: string;
  description: string;
}

export interface HeritageImage {
  src: string;
  alt: string;
  caption: string;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  role: string;
  subtitle: string;
  name: string;
  locationFocus: string;
  image: string;
  alt: string;
  summary: string;
  story: string[];
  focusAreas: string[];
}

export type PolicyKey = 'privacy' | 'terms' | 'diligence';

export interface PolicyContent {
  title: string;
  subtitle: string;
  sections: { heading: string; body: string }[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Corridors', href: '#corridors' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_DATA = {
  eyebrow: 'SARISKA · ALWAR · KHAIRTHAL · TATARPUR',
  titleLead: 'Building',
  titleAccent: 'Landmarks.',
  subtitle:
    'Creating legacies through agricultural land, farmhouses, plotted developments and heritage-belt real estate across Alwar, Sariska, Khairthal and Tatarpur.',
  ctaLabel: 'EXPLORE',
  ctaHref: '#expertise',
  cornerBadge: 'DAHIYA AGRO ESTATES PVT. LTD.',
  image: './images/sariska-view.jpg',
  imageAlt:
    'Panoramic view from an Aravalli hill fort over the Sariska valley and lake in Alwar, Rajasthan',
};

export const ABOUT_DATA = {
  eyebrow: 'THE DAHIYA PERSPECTIVE',
  headingLead: 'Land is more than an asset. ',
  headingMuted: 'It is where every legacy begins.',
  paragraphs: [
    'Dahiya Estates is a real estate enterprise focused on high-conviction land across Alwar, Sariska, Khairthal and Tatarpur—carefully considered, responsibly developed and transparently delivered.',
    'As the customer-facing identity of Dahiya Agro Estates Private Limited, we combine on-ground regional knowledge with clear title verification for agricultural parcels, private farmhouses and plotted estates.',
  ],
};

export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    number: '01',
    title: 'Agricultural Land',
    description:
      'Fertile plains and Aravalli-foothill parcels across Khairthal, Tatarpur and Alwar with verified titles and clear access.',
    icon: 'agricultural',
    image: './images/rajasthan-farmland.jpg',
    imageAlt: 'Agricultural mustard and green fields beneath the Aravalli hills in Alwar district',
  },
  {
    number: '02',
    title: 'Farmhouses',
    description:
      'Private countryside retreats near Sariska Tiger Reserve and Dhadikar Fort designed around nature, stone and silence.',
    icon: 'farmhouse',
    image: './images/sariska-kankwari.jpg',
    imageAlt: 'Historic fort and forested Aravalli valley landscape near Sariska, Alwar',
  },
  {
    number: '03',
    title: 'Residential Plots',
    description:
      'Well-demarcated residential plots connected to Alwar’s expanding highways and growth corridors for generations to come.',
    icon: 'plots',
    image: './images/aravalli-alwar.jpg',
    imageAlt: 'Stone-walled hillside road and Aravalli terrain in Alwar, Rajasthan',
  },
  {
    number: '04',
    title: 'Land Development',
    description:
      'From boundary walls, levelling and internal stone roads to enabling utilities, we shape raw land with lasting structure.',
    icon: 'development',
    image: './images/bala-quila-1.jpg',
    imageAlt: 'Sandstone courtyard and stone development craftsmanship at Bala Quila, Alwar',
  },
];

export const CORRIDOR_ITEMS: CorridorItem[] = [
  {
    tag: 'LAND SOURCING',
    number: '01',
    region: 'KHAIRTHAL & TATARPUR BELT',
    title: 'The Northern Growth Belt',
    description:
      'Fertile agricultural and plotted land parcels across Khairthal and Tatarpur with direct district road frontage and NCR connectivity.',
    image: './images/rajasthan-farmland.jpg',
    alt: 'Cultivated mustard and green agricultural fields beneath the Aravalli hills in Alwar district, Rajasthan',
    interestOption: 'Agricultural land',
    coordinatesLabel: '27.80° N, 76.61° E · Khairthal–Tatarpur',
    mapEmbedUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=76.535%2C27.745%2C76.685%2C27.855&layer=mapnik&marker=27.802%2C76.615',
    mapOpenUrl:
      'https://www.openstreetmap.org/?mlat=27.802&mlon=76.615#map=12/27.802/76.615',
  },
  {
    tag: 'ECO-RETREAT & FORTS',
    number: '02',
    region: 'SARISKA & DHADIKAR FORT BELT',
    title: 'Aravalli Heritage & Sanctuary Zone',
    description:
      'Scenic hillside acreage around Dhadikar Fort and the Sariska approach—ideal for private farmhouses and heritage-inspired retreats.',
    image: './images/sariska-kankwari.jpg',
    alt: 'Historic hill fort surrounded by forested Aravalli hills in Sariska Tiger Reserve, Alwar',
    interestOption: 'Farmhouses',
    coordinatesLabel: '27.55° N, 76.51° E · Dhadikar–Sariska',
    mapEmbedUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=76.380%2C27.270%2C76.620%2C27.600&layer=mapnik&marker=27.554%2C76.517',
    mapOpenUrl:
      'https://www.openstreetmap.org/?mlat=27.554&mlon=76.517#map=11/27.554/76.517',
  },
  {
    tag: 'EXPRESSIONS OF INTEREST',
    number: '03',
    region: 'ALWAR FORT & DELHI–MUMBAI CORRIDOR',
    title: 'Land with strategic access',
    description:
      'High-potential land parcels linked to Alwar city landmarks, Bala Quila heritage tourism, and the Delhi–Mumbai Expressway.',
    image: './images/neemrana-hills.jpg',
    alt: 'Stone fort palace architecture built into the Aravalli hillside in Alwar district, Rajasthan',
    interestOption: 'Development partnership',
    coordinatesLabel: '27.57° N, 76.59° E · Alwar District',
    mapEmbedUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=76.480%2C27.480%2C76.760%2C27.680&layer=mapnik&marker=27.571%2C76.588',
    mapOpenUrl:
      'https://www.openstreetmap.org/?mlat=27.571&mlon=76.588#map=11/27.571/76.588',
  },
];

export const WHY_DAHIYA_DATA = {
  image: './images/moosi-chhatri.jpg',
  imageAlt:
    'Moosi Maharani ki Chhatri, Alwar City Palace, and Bala Quila Fort atop the Aravalli hills in Alwar',
  overlayTitle: 'Grounded in heritage.',
  overlaySubtitle: 'ALWAR · SARISKA · ARAVALLI',
  eyebrow: 'WHY DAHIYA ESTATES',
  headingLine1: 'Confidence,',
  headingLine2: 'built into the land.',
  pillars: [
    {
      number: '01',
      title: 'Clarity at every step',
      description:
        'Verified revenue records, jamabandi checks and straightforward communication from first visit to final registry.',
    },
    {
      number: '02',
      title: 'On-ground Alwar expertise',
      description:
        'Hands-on regional familiarity across Khairthal, Tatarpur, Dhadikar and the Sariska buffer corridor.',
    },
    {
      number: '03',
      title: 'A long-term view',
      description:
        'We curate enduring land holdings—for families, weekend retreats and multi-generational ownership.',
    },
  ] as PillarItem[],
};

export const HERITAGE_DATA = {
  eyebrow: 'A HERITAGE OF LAND',
  headingLine1: 'Rooted here.',
  headingLine2: 'Looking ahead.',
  description:
    'Inspired by Alwar’s stone forts, royal palaces and timeless Aravalli terrain—where heritage architecture meets enduring land stewardship.',
  images: [
    {
      src: './images/bala-quila-1.jpg',
      alt: 'Courtyard and sandstone arches of Bala Quila (Alwar Fort) in Rajasthan',
      caption: 'Bala Quila (Alwar Fort)',
      featured: true,
    },
    {
      src: './images/bhangarh-fort.jpg',
      alt: 'Historic stone fort walls set against lush green Aravalli hills in Alwar district',
      caption: 'Alwar Stone Fortifications',
    },
    {
      src: './images/aravalli-alwar.jpg',
      alt: 'Stone parapet road winding along the Aravalli hills and Alwar forest reserve',
      caption: 'Aravalli Hill Approach, Alwar',
    },
  ] as HeritageImage[],
};

export const SCOPE_ITEMS = [
  'Acquire, lease, develop and improve all classes of land',
  'Plotting, subdivision, demarcation and levelling',
  'Fencing, internal roads and enabling infrastructure',
  'Sale, lease, transfer and marketing of land and farmhouses',
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'founder',
    role: 'Founder',
    subtitle: 'VISION & STRATEGY',
    name: 'Rajender Dahiya',
    locationFocus: 'Alwar · Khairthal · Tatarpur',
    image:
      'https://images.unsplash.com/photo-1742981365879-7ad5b7e7e4ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxJbmRpYW4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwbWFuJTIwcmVhbCUyMGVzdGF0ZXxlbnwxfHx8fDE3OTUwODE4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Representative portrait for the Founder role',
    summary:
      'Leading long-term land vision, institutional trust, and strategic parcel selection across the NCR–Alwar growth belt.',
    story: [
      'Rooted in northern India’s agrarian heritage, the Founder established Dahiya Agro Estates Private Limited with a clear conviction: real estate value begins with clean, verifiable land.',
      'Over years of walking tracts across Khairthal, Tatarpur and the foothills surrounding Alwar, he built deep grassroots relationships with landowners, revenue officials and regional planners—ensuring every parcel evaluated by Dahiya Estates passes strict title continuity, access and zoning scrutiny.',
      'Today, he guides the firm’s long-horizon acquisition strategy, focusing on corridors benefiting from the Delhi–Mumbai Expressway and sustainable countryside living near Sariska.',
    ],
    focusAreas: [
      'Strategic land banking in Khairthal & Tatarpur',
      'Clean-title due diligence & revenue record verification',
      'Long-term institutional & family estate partnerships',
    ],
  },
  {
    id: 'director',
    role: 'Director',
    subtitle: 'LAND & DEVELOPMENT',
    name: 'Vikram Dahiya',
    locationFocus: 'Sariska · Dhadikar · Bala Quila Belt',
    image:
      'https://images.unsplash.com/photo-1632482150998-df2760232c90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxJbmRpYW4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwbWFuJTIwcmVhbCUyMGVzdGF0ZXxlbnwxfHx8fDE3OTUwODE4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Representative portrait for the Director role',
    summary:
      'Overseeing on-ground survey, demarcation, stone-boundary development and farmhouse infrastructure across the Aravalli foothills.',
    story: [
      'Turning raw acreage into ready-to-hold estates requires hands-on execution on the ground. As Director of Land & Development, he supervises every physical stage—from GPS demarcation and soil grading to internal road alignment and water harvesting.',
      'Working closely across Dhadikar, Sariska and Alwar’s heritage precincts, he champions local stone craftsmanship and low-density planning that respects the Aravalli topography rather than flattening it.',
      'Clients rely on his practical oversight to ensure that what is promised on paper is delivered accurately on site—with clear boundaries, durable roads and transparent project timelines.',
    ],
    focusAreas: [
      'On-site demarcation, levelling & boundary fencing',
      'Aravalli-sensitive farmhouse & retreat infrastructure',
      'Statutory approvals, CLU guidance & site handovers',
    ],
  },
  {
    id: 'marketing',
    role: 'Marketing',
    subtitle: 'CLIENT RELATIONSHIPS',
    name: 'Ananya Sharma',
    locationFocus: 'NCR · Alwar · Private Advisory',
    image:
      'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3b21hbiUyMG1hcmtldGluZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwb2ZmaWNlfGVufDF8fHx8MTc5NTA4MTg4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Representative portrait for the Marketing role',
    summary:
      'Curating private site visits, buyer advisory and transparent documentation packs for families and institutional investors.',
    story: [
      'Buying agricultural or farmhouse land is deeply personal—and too often clouded by unclear paperwork. Leading Client Relationships, she ensures every prospective owner experiences complete clarity from their very first enquiry.',
      'She organizes guided, hands-on site inspections across Khairthal, Tatarpur, Dhadikar Fort and Alwar’s emerging expressway zones, pairing real location maps and connectivity briefs with straightforward documentation walk-throughs.',
      'Her focus is building lasting relationships grounded in responsiveness, accurate reporting and zero high-pressure sales tactics.',
    ],
    focusAreas: [
      'Curated on-ground site tours across Alwar & Sariska',
      'Buyer advisory for farmhouses & plotted investments',
      'Transparent documentation & post-handover support',
    ],
  },
];

export const CONTACT_PANEL_DATA = {
  eyebrow: 'START A CONVERSATION',
  headingLine1: 'Your next landmark',
  headingLine2: 'starts here.',
  body: 'Whether you are exploring agricultural land in Khairthal–Tatarpur, planning a farmhouse near Sariska & Dhadikar Fort, or evaluating an Alwar corridor opportunity, let us connect.',
  email: 'hello@dahiyaestates.com',
  image: './images/bala-quila-1.jpg',
  imageAlt:
    'Sandstone courtyard and heritage arches of Bala Quila (Alwar Fort) representing Dahiya Estates on-ground Alwar presence',
  imageCaption: 'ON-GROUND IN ALWAR · SARISKA · KHAIRTHAL–TATARPUR',
};

export const INTEREST_OPTIONS = [
  'Agricultural land',
  'Farmhouses',
  'Residential plots',
  'Development partnership',
];

export const POLICIES: Record<PolicyKey, PolicyContent> = {
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'Dahiya Agro Estates Private Limited',
    sections: [
      {
        heading: 'Information We Collect',
        body: 'When you submit an enquiry on dahiyaestates.com, we collect only your name, phone number and land interest category so our advisory team can respond to your request.',
      },
      {
        heading: 'How We Use Your Details',
        body: 'Your contact details are used solely to schedule site visits, share parcel documentation and answer questions regarding properties in Alwar, Sariska, Khairthal and Tatarpur. We never sell or rent your data to third-party brokers.',
      },
      {
        heading: 'Data Requests',
        body: 'You may request deletion or modification of your enquiry details at any time by writing to hello@dahiyaestates.com.',
      },
    ],
  },
  terms: {
    title: 'Terms of Use',
    subtitle: 'Website & Advisory Terms',
    sections: [
      {
        heading: 'Indicative Information',
        body: 'Maps, corridor descriptions and representative imagery on this website are provided for general orientation across Alwar, Sariska, Khairthal and Tatarpur and do not constitute a binding offer or solicitation.',
      },
      {
        heading: 'Verification & Pricing',
        body: 'Parcel availability, dimensions, access roads and commercials are confirmed exclusively through formal site inspection and written allotment documentation.',
      },
    ],
  },
  diligence: {
    title: 'Land Due Diligence & Compliance Policy',
    subtitle: 'Statutory & Title Transparency',
    sections: [
      {
        heading: 'Title & Revenue Verification',
        body: 'All agricultural, farmhouse and plotted transactions facilitated by Dahiya Agro Estates Private Limited are subject to verified jamabandi/khasra chain checks, demarcation confirmation and clear encumbrance status.',
      },
      {
        heading: 'Environmental & Zoning Approvals',
        body: 'Parcels located near the Sariska buffer zone, Aravalli ranges or Dhadikar heritage precincts are evaluated strictly in accordance with Rajasthan revenue laws, forest buffer regulations, CLU rules and applicable RERA/statutory norms.',
      },
    ],
  },
};
