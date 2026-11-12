export const CONTACT = {
  address: "542 Karee Drive, Bassonia Estate, 2190",
  phone: "+27 00 000 0000",
  phoneHref: "tel:+2700000000",
  email: "emily@hlelauthuthuke.co.za",
  domain: "hlelauthuthuke.co.za",
  mapEmbed:
    "https://www.google.com/maps?q=542+Karee+Drive,+Bassonia+Estate,+2190&output=embed",
} as const;

export const NAV_LINKS = [
  { label: "Who We Are", href: "/#who-we-are" },
  { label: "Approach", href: "/#approach" },
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Why Hlela", href: "/#why-hlela" },
  { label: "Team", href: "/#team" },
] as const;

export const WHO_WE_ARE = [
  "Hlela Development Management is a specialist property development management and advisory firm that partners with property owners, developers, investors, financiers and public sector institutions to unlock the full value of land and property assets.",
  "We provide strategic leadership throughout the entire development lifecycle, transforming ideas into viable, fundable and successful developments.",
  "Our role extends far beyond traditional planning services. Acting as our clients' Development Manager, we coordinate multidisciplinary professional teams, structure development opportunities, manage project implementation and oversee delivery until developments are occupied, sold or operational.",
  "With more than two decades of experience across South Africa's public and private property sectors, HLELA brings together technical expertise, commercial understanding and strategic leadership to deliver developments that are financially viable, technically sound and commercially successful.",
] as const;

export const VISION =
  "To become South Africa\u2019s leading boutique development management firm, recognised for delivering innovative, sustainable and commercially successful property developments that create lasting economic and social value.";

export const MISSION =
  "To guide clients through every stage of the property development journey by providing strategic advice, expert development management and integrated professional services that reduce risk, unlock funding and deliver exceptional outcomes.";

export const VALUES = [
  {
    title: "Integrity",
    description:
      "We build lasting relationships through honesty, transparency and professional excellence.",
  },
  {
    title: "Leadership",
    description:
      "We take ownership of every project and provide decisive leadership throughout the development process.",
  },
  {
    title: "Collaboration",
    description:
      "Successful developments are built by strong partnerships. We bring together the right expertise to achieve exceptional results.",
  },
  {
    title: "Innovation",
    description:
      "We continuously seek practical and innovative solutions that maximise development opportunities.",
  },
  {
    title: "Excellence",
    description:
      "We are committed to delivering projects that exceed expectations in quality, efficiency and value.",
  },
] as const;

export const APPROACH = [
  {
    title: "Discover",
    intro:
      "Every project begins with understanding the client's vision and the property's potential. We assess:",
    items: [
      "Market demand",
      "Development opportunities",
      "Planning constraints",
      "Investment potential",
      "Highest and best use",
    ],
  },
  {
    title: "Define",
    intro: "We prepare the strategic roadmap. This includes:",
    items: [
      "Feasibility studies",
      "Development strategy",
      "Financial modelling",
      "Development concept",
      "Risk analysis",
      "Development programme",
    ],
  },
  {
    title: "Design",
    intro:
      "Our multidisciplinary professional team prepares all technical work required to move the project forward, including:",
    items: [
      "Town Planning",
      "Architecture",
      "Engineering",
      "Environmental approvals",
      "Quantity surveying",
      "Infrastructure planning",
    ],
  },
  {
    title: "Package",
    intro:
      "One of HLELA's greatest strengths is turning developments into bankable investment opportunities. We prepare:",
    items: [
      "Business cases",
      "Investment proposals",
      "Funding applications",
      "Financial models",
      "Development budgets",
      "Cashflow projections",
    ],
  },
  {
    title: "Secure",
    intro:
      "We assist clients throughout the funding process by engaging financial institutions, development finance institutions and investors. We prepare:",
    items: [
      "Funding applications",
      "Grant funding",
      "Debt funding",
      "Equity funding",
      "Development finance negotiations",
    ],
  },
  {
    title: "Deliver",
    intro:
      "Once funding has been secured, HLELA leads implementation. We coordinate professional teams, contractors, local authorities, funders and stakeholders \u2014 while monitoring:",
    items: ["Budget", "Programme", "Quality", "Risk", "Compliance"],
  },
  {
    title: "Complete",
    intro:
      "Our responsibility continues until the project has been successfully delivered. This includes:",
    items: [
      "Practical completion",
      "Final completion",
      "Occupation",
      "Tenant coordination",
      "Sales support",
      "Project close-out",
    ],
  },
  {
    title: "Manage",
    intro:
      "For clients seeking long-term support, we provide asset management services that protect and maximise the value of completed developments.",
    items: [],
  },
] as const;

export const SERVICE_GROUPS = [
  {
    label: "Advisory & Feasibility",
    services: [
      {
        title: "Development Management",
        description:
          "Comprehensive management of property developments from concept through completion.",
      },
      {
        title: "Property Development Advisory",
        description:
          "Strategic advice on development opportunities, acquisitions and investment decisions.",
      },
      {
        title: "Development Feasibility Studies",
        description:
          "Commercial, technical and planning feasibility assessments.",
      },
      {
        title: "Highest and Best Use Assessments",
        description:
          "Determining the optimal development potential of land and property.",
      },
      {
        title: "Property Acquisition Support",
        description:
          "Identifying and assessing development opportunities for acquisition.",
      },
    ],
  },
  {
    label: "Packaging & Funding",
    services: [
      {
        title: "Development Packaging",
        description: "Preparing developments for investment and funding.",
      },
      {
        title: "Funding Advisory",
        description:
          "Supporting access to debt, grant and institutional funding.",
      },
      {
        title: "Development Finance Coordination",
        description:
          "Managing conditions precedent, financial close and lender requirements.",
      },
      {
        title: "Professional Team Management",
        description:
          "Coordinating architects, engineers, quantity surveyors and specialist consultants.",
      },
    ],
  },
  {
    label: "Delivery & Close-Out",
    services: [
      {
        title: "Contract Administration",
        description:
          "Managing contractual obligations throughout implementation.",
      },
      {
        title: "Stakeholder Management",
        description:
          "Managing relationships with authorities, communities, investors and project stakeholders.",
      },
      {
        title: "Construction Monitoring",
        description:
          "Monitoring implementation against programme, quality and budget.",
      },
      {
        title: "Project Close-Out",
        description: "Managing project completion, occupation and handover.",
      },
      {
        title: "Asset Management",
        description: "Providing ongoing support after project completion.",
      },
    ],
  },
] as const;

export const ALL_SERVICES = SERVICE_GROUPS.flatMap((g) =>
  g.services.map((s) => s.title)
);

export const INDUSTRIES = [
  {
    title: "Affordable Housing",
    description:
      "Well-built homes priced for first-time and lower-income buyers, often supported by subsidies such as FLISP or BNG programmes.",
  },
  {
    title: "Social Housing",
    description:
      "Subsidised rental housing managed by accredited institutions, providing secure, quality homes close to jobs and transport.",
  },
  {
    title: "Residential Developments",
    description:
      "Estates, townhouse complexes and apartment schemes for sale or rental, from land assembly to final hand-over.",
  },
  {
    title: "Mixed-Use Developments",
    description:
      "Projects combining homes, shops, offices and public space in one scheme to create vibrant, walkable neighbourhoods.",
  },
  {
    title: "Commercial Property",
    description:
      "Office parks, corporate headquarters and business premises designed around tenant demand and long-term investment value.",
  },
  {
    title: "Retail Developments",
    description:
      "Shopping centres, convenience nodes and community retail anchored by the right tenant mix for the catchment.",
  },
  {
    title: "Industrial Developments",
    description:
      "Warehousing, logistics hubs and light-industrial parks positioned for access, power and efficient operations.",
  },
  {
    title: "Student Accommodation",
    description:
      "Purpose-built student residences near campuses, meeting accreditation standards for safety, study and community living.",
  },
  {
    title: "Public Infrastructure",
    description:
      "Roads, bulk services, community facilities and other public assets that unlock land and support growing communities.",
  },
  {
    title: "Urban Regeneration",
    description:
      "Revitalising under-used or declining areas through new investment, adaptive reuse and improved public spaces.",
  },
  {
    title: "Precinct Development",
    description:
      "Coordinated, multi-site planning of a defined area so buildings, streets and services work together as one place.",
  },
  {
    title: "Municipal and Government Infrastructure Projects",
    description:
      "Public sector programmes delivered in line with procurement, compliance and funding requirements, on time and on budget.",
  },
] as const;

export const WHY_HLELA = [
  {
    title: "Executive-Level Development Experience",
    description:
      "Over 20 years of experience managing complex property developments across both the public and private sectors.",
  },
  {
    title: "End-to-End Delivery",
    description:
      "We remain involved from the first feasibility assessment through to final occupation and beyond.",
  },
  {
    title: "One Point of Accountability",
    description:
      "Clients deal with one development manager while we coordinate the entire professional team.",
  },
  {
    title: "Investment-Focused",
    description:
      "We understand what funders, investors and development finance institutions require.",
  },
  {
    title: "Proven Delivery",
    description:
      "Our experience includes land acquisition, planning, funding, implementation, programme management and asset optimisation across projects valued in the billions of rand.",
  },
] as const;

export const TEAM = [
  {
    name: "Director Name",
    role: "Director",
    bio: "Bio coming soon.",
    image: "/team/director.jpg",
  },
] as const;
