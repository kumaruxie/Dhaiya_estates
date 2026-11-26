export interface NavItem {
  label: string;
  href: string;
}

export interface ExpertiseItem {
  number: string;
  title: string;
  description: string;
  icon: 'agricultural' | 'farmhouse' | 'plots' | 'development';
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
}

export interface PillarItem {
  number: string;
  title: string;
  description: string;
}

export interface HeritageImage {
  src: string;
  alt: string;
  featured?: boolean;
}

export interface TeamMember {
  role: string;
  subtitle: string;
  image: string;
  alt: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Corridors', href: '#corridors' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_DATA = {
  eyebrow: 'ROOTED IN LAND. BUILT ON TRUST.',
  titleLead: 'Building',
  titleAccent: 'Landmarks.',
  subtitle:
    'Creating legacies through agricultural land, farmhouses, plotted developments and real estate shaped for generations.',
  ctaLabel: 'EXPLORE',
  ctaHref: '#expertise',
  cornerBadge: 'DAHIYA AGRO ESTATES PVT. LTD.',
  image:
    'https://images.unsplash.com/photo-1681226298721-88cdb4096e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBhZ3JpY3VsdHVyYWwlMjBmYXJtbGFuZCUyMEluZGlhJTIwZ29sZGVuJTIwaG91cnxlbnwxfHx8fDE3OTUwODEzODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  imageAlt: 'Aerial view of green agricultural land divided by a river',
};

export const ABOUT_DATA = {
  eyebrow: 'THE DAHIYA PERSPECTIVE',
  headingLead: 'Land is more than an asset. ',
  headingMuted: 'It is where every legacy begins.',
  paragraphs: [
    'Dahiya Estates is a real estate enterprise focused on land with potential—carefully considered, responsibly developed and transparently delivered.',
    'As the customer-facing identity of Dahiya Agro Estates Private Limited, we bring a clear, contemporary approach to agricultural land, plotted estates, farmhouses and development.',
  ],
};

export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    number: '01',
    title: 'Agricultural Land',
    description:
      'Thoughtfully selected land parcels with long-term potential and clear possibilities.',
    icon: 'agricultural',
  },
  {
    number: '02',
    title: 'Farmhouses',
    description:
      'Private countryside retreats that bring considered living closer to nature.',
    icon: 'farmhouse',
  },
  {
    number: '03',
    title: 'Residential Plots',
    description:
      'Well-positioned plots for homes, investments and the next generation.',
    icon: 'plots',
  },
  {
    number: '04',
    title: 'Land Development',
    description:
      'From demarcation and roads to infrastructure, we shape land with purpose.',
    icon: 'development',
  },
];

export const CORRIDOR_ITEMS: CorridorItem[] = [
  {
    tag: 'LAND SOURCING',
    number: '01',
    region: 'CHANDIGARH TRICITY REGION',
    title: 'The Northern Growth Belt',
    description:
      'Exploring well-connected agricultural and farmhouse land around the wider Chandigarh–Mohali–Panchkula region.',
    image:
      'https://images.unsplash.com/photo-1585652516863-fbc02c1c206e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxDaGFuZGlnYXJoJTIwUHVuamFiJTIwaGlnaHdheSUyMGdyZWVuJTIwZmllbGRzJTIwSW5kaWF8ZW58MXx8fHwxNzk1MDgxODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Chandigarh Tricity Region road and land setting',
    interestOption: 'Agricultural land',
  },
  {
    tag: 'MARKET WATCH',
    number: '02',
    region: 'DELHI–MUMBAI CORRIDOR',
    title: 'Expressway-led opportunity',
    description:
      'Tracking land opportunities in influence zones connected to one of India’s most important new mobility corridors.',
    image:
      'https://images.unsplash.com/photo-1750715832092-120c462d4d65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxJbmRpYSUyMGV4cHJlc3N3YXklMjBhZXJpYWwlMjBoaWdod2F5JTIwcm9hZCUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3OTUwODE4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Delhi–Mumbai Corridor road and land setting',
    interestOption: 'Development partnership',
  },
  {
    tag: 'EXPRESSIONS OF INTEREST',
    number: '03',
    region: 'WESTERN INDIA',
    title: 'Land with strategic access',
    description:
      'Identifying countryside parcels where road connectivity, natural setting and long-term potential meet.',
    image:
      'https://images.unsplash.com/photo-1646318362784-e959d033064f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxJbmRpYW4lMjBhZ3JpY3VsdHVyYWwlMjBsYW5kJTIwZmFybSUyMGFlcmlhbCUyMHBsb3RzfGVufDF8fHx8MTc5NTA4MTg4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Western India road and land setting',
    interestOption: 'Farmhouses',
  },
];

export const WHY_DAHIYA_DATA = {
  image:
    'https://images.unsplash.com/photo-1629946488804-217c002178cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXJtaG91c2UlMjBtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBncmVlbiUyMGxhbmRzY2FwZSUyMEluZGlhfGVufDF8fHx8MTc5NTA4MTM4OHww&ixlib=rb-4.1.0&q=80&w=1080',
  imageAlt: 'Contemporary estate building surrounded by mature greenery',
  overlayTitle: 'Grounded in possibility.',
  overlaySubtitle: 'DESIGNED FOR PERMANENCE',
  eyebrow: 'WHY DAHIYA ESTATES',
  headingLine1: 'Confidence,',
  headingLine2: 'built into the land.',
  pillars: [
    {
      number: '01',
      title: 'Clarity at every step',
      description:
        'Straightforward communication from first conversation to final handover.',
    },
    {
      number: '02',
      title: 'Land-led expertise',
      description:
        'Decisions grounded in context, access, potential and responsible development.',
    },
    {
      number: '03',
      title: 'A long-term view',
      description:
        'We create enduring value—for owners, communities and generations to come.',
    },
  ] as PillarItem[],
};

export const HERITAGE_DATA = {
  eyebrow: 'A HERITAGE OF LAND',
  headingLine1: 'Rooted here.',
  headingLine2: 'Looking ahead.',
  description:
    'Inspired by India’s enduring relationship with land, architecture and generational ownership.',
  images: [
    {
      src: 'https://images.unsplash.com/photo-1519955266818-0231b63402bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdW5qYWIlMjBJbmRpYSUyMGhlcml0YWdlJTIwYXJjaGl0ZWN0dXJlJTIwY291bnRyeXNpZGV8ZW58MXx8fHwxNzk1MDgxODc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Historic Indian stone pavilion with arched columns',
      featured: true,
    },
    {
      src: 'https://images.unsplash.com/photo-1596901224267-67ca38199090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxQdW5qYWIlMjBJbmRpYSUyMGhlcml0YWdlJTIwYXJjaGl0ZWN0dXJlJTIwY291bnRyeXNpZGV8ZW58MXx8fHwxNzk1MDgxODc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Traditional Indian heritage building',
    },
    {
      src: 'https://images.unsplash.com/photo-1736664122955-e35a73319de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxJbmRpYW4lMjBhZ3JpY3VsdHVyYWwlMjBsYW5kJTIwZmFybSUyMGFlcmlhbCUyMHBsb3RzfGVufDF8fHx8MTc5NTA4MTg4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Aerial view of green Indian fields and trees',
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
    role: 'Founder',
    subtitle: 'VISION & STRATEGY',
    image:
      'https://images.unsplash.com/photo-1742981365879-7ad5b7e7e4ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxJbmRpYW4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwbWFuJTIwcmVhbCUyMGVzdGF0ZXxlbnwxfHx8fDE3OTUwODE4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Representative portrait for the Founder role',
  },
  {
    role: 'Director',
    subtitle: 'LAND & DEVELOPMENT',
    image:
      'https://images.unsplash.com/photo-1632482150998-df2760232c90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxJbmRpYW4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwbWFuJTIwcmVhbCUyMGVzdGF0ZXxlbnwxfHx8fDE3OTUwODE4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Representative portrait for the Director role',
  },
  {
    role: 'Marketing',
    subtitle: 'CLIENT RELATIONSHIPS',
    image:
      'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3b21hbiUyMG1hcmtldGluZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwb2ZmaWNlfGVufDF8fHx8MTc5NTA4MTg4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Representative portrait for the Marketing role',
  },
];

export const INTEREST_OPTIONS = [
  'Agricultural land',
  'Farmhouses',
  'Residential plots',
  'Development partnership',
];
