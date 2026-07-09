import {
  Building2,
  Briefcase,
  ShieldCheck,
  Wrench,
  LineChart,
  Users,
  Factory,
  Landmark,
  Home,
  Hotel,
  ShoppingBag,
  TrainFront,
  type LucideIcon,
} from 'lucide-react';
import { officeLocations } from './offices';

const officeLocationCount = officeLocations.length;

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  deliverables: string[];
  stats: [number, string, string][]; // [value, suffix, label]
}

export const services: ServiceData[] = [
  {
    slug: 'valuation',
    icon: Building2,
    title: 'Valuation Services',
    tagline: 'Bank-ready valuations for every asset class',
    description:
      'Defensible, evidence-backed valuation of land, built-up properties, townships, SEZs, and special-use assets — trusted by 180+ banks and NBFCs across India.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    highlights: [
      'Vacant land and built-up properties',
      'Residential, commercial, hospitality, retail, and mixed-use assets',
      'Large development projects — townships, IT parks, SEZs',
      'Special-use assets like golf resorts and health spas',
      'Retail lending portfolio valuations at scale',
      'Statutory valuations under IBBI, Income Tax, and SARFAESI',
    ],
    deliverables: ['Fair market value reports', 'Distress and forced-sale value', 'Rental assessments', 'Stage-of-construction certification'],
    stats: [
      [800000, '+ Cr', 'Funding supported (Rs)'],
      [180, '+', 'Banks & NBFCs served'],
      [officeLocationCount, '', 'Mapped office locations'],
    ],
  },
  {
    slug: 'project-management',
    icon: Briefcase,
    title: 'Project Management Consultancy',
    tagline: 'From drawing board to move-in stage',
    description:
      'End-to-end project consultancy covering design review, estimation, tendering, cash-flow planning, PERT/CPM scheduling, and construction monitoring.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop',
    highlights: [
      'Pre-construction design and planning',
      'Estimation, tendering, and costing',
      'Cash and fund-flow preparation with cost monitoring',
      'Project planning and scheduling (PERT/CPM)',
      'Construction monitoring and quality assurance',
      'Move-in stage support and handover audits',
    ],
    deliverables: ['Monthly progress reports', 'Cost variance dashboards', 'Lender monitoring certificates', 'Completion audits'],
    stats: [
      [250, '+', 'Projects monitored'],
      [98, '%', 'On-schedule reporting'],
      [24, 'x7', 'Field coverage'],
    ],
  },
  {
    slug: 'inspections',
    icon: ShieldCheck,
    title: 'Project Inspections (LEI)',
    tagline: 'Independent eyes on every asset',
    description:
      'Rigorous, independent inspections for raw materials, finished products, plant and machinery, household goods, real estate, and containers.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
    highlights: [
      'Raw material and finished product checks',
      'Plant and machinery inspections',
      'Household goods and container inspections',
      'Real estate and project-stage inspections',
      'Geo-tagged photographic evidence',
      'Standardised digital checklists',
    ],
    deliverables: ['Inspection certificates', 'Photographic evidence packs', 'Deviation reports', 'Compliance summaries'],
    stats: [
      [10000, '+', 'Inspections completed'],
      [17, '+', 'States covered'],
      [48, 'hr', 'Typical turnaround'],
    ],
  },
  {
    slug: 'risk-inspection',
    icon: Wrench,
    title: 'Industrial & Risk Inspection',
    tagline: 'Find the risk before it finds you',
    description:
      'Fire and safety audits, machine breakdown assessments, erection and coating inspections that protect people, plants, and balance sheets.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop',
    highlights: [
      'Fire and safety audits',
      'Machine breakdown and risk assessments',
      'Erection and coating inspections',
      'Raw material and finished product checks',
      'Insurance-linked risk surveys',
      'Preventive maintenance recommendations',
    ],
    deliverables: ['Risk grading reports', 'Safety compliance audits', 'Breakdown root-cause analysis', 'Insurance survey reports'],
    stats: [
      [500, '+', 'Industrial audits'],
      [40, '+', 'Industry segments'],
      [0, ' major misses', 'Reported incidents'],
    ],
  },
  {
    slug: 'strategic-consultancy',
    icon: LineChart,
    title: 'Strategic Consultancy',
    tagline: 'Data-driven answers to big questions',
    description:
      'Feasibility studies, market research, demand forecasting, location strategy, and portfolio optimization for confident capital allocation.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    highlights: [
      'Feasibility studies and concept testing',
      'Business planning and investment advice',
      'Market research and demand forecasting',
      'Location strategy and catchment analysis',
      'Portfolio optimization and asset utilization',
      'Techno-economic viability (TEV) studies',
    ],
    deliverables: ['TEV study reports', 'Market entry playbooks', 'Highest-and-best-use analysis', 'Investment committee decks'],
    stats: [
      [120, '+', 'Strategy engagements'],
      [30, '+', 'Cities analysed'],
      [15, '+', 'Years of leadership experience'],
    ],
  },
  {
    slug: 'transaction-advisory',
    icon: Users,
    title: 'Transaction Advisory',
    tagline: 'Deal confidence from diligence to integration',
    description:
      'M&A support, due diligence, capital raising, restructuring, and insolvency advisory — structured for speed and defensibility.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    highlights: [
      'Mergers & acquisitions — buy-side and sell-side',
      'Joint ventures and strategic alliances',
      'Financial, tax, commercial, and legal due diligence',
      'Private equity, debt syndication, structured finance',
      'Corporate restructuring and turnaround strategies',
      'Deal structuring and post-merger integration',
    ],
    deliverables: ['Due diligence reports', 'Deal structuring memos', 'Valuation opinions', 'Integration roadmaps'],
    stats: [
      [75, '+', 'Transactions advised'],
      [12, '+', 'Sectors covered'],
      [100, '%', 'Confidentiality record'],
    ],
  },
  {
    slug: 'plant-machinery',
    icon: Factory,
    title: 'Plant & Machinery',
    tagline: 'Specialist valuation of complex industrial assets',
    description:
      'Heavy machinery and specialized equipment valuation for M&A, financial reporting (IndAS/IFRS), insolvency (IBC), and asset management.',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=2074&auto=format&fit=crop',
    highlights: [
      'Complex industrial assets and heavy machinery',
      'Valuations for M&A, IndAS/IFRS, and IBC',
      'Technical due diligence and TEV studies',
      'Chartered Engineer (CE) certifications',
      'Remaining useful life and impairment testing',
      'Fixed asset verification, componentization, tagging',
    ],
    deliverables: ['CE certificates', 'Impairment testing reports', 'Fixed asset registers', 'Scrap and salvage valuations'],
    stats: [
      [300, '+', 'Plants valued'],
      [50, '+', 'Machinery categories'],
      [20, '+', 'IBC assignments'],
    ],
  },
];

export interface SectorData {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  image: string;
  challenges: string[];
  solutions: string[];
  stats: [number, string, string][];
}

export const sectors: SectorData[] = [
  {
    slug: 'banking-nbfc',
    icon: Landmark,
    title: 'Banking & NBFCs',
    tagline: 'Collateral confidence at portfolio scale',
    description:
      'Retail and wholesale lending valuations, technical due diligence, and monitoring for 180+ banks, NBFCs, and housing finance companies.',
    image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=2070&auto=format&fit=crop',
    challenges: ['High-volume retail lending turnaround', 'Collateral risk in stressed accounts', 'Regulatory and audit scrutiny'],
    solutions: ['Automated valuation workflows with field verification', 'Distress-value and recovery assessments', 'Audit-ready, standardised reporting formats'],
    stats: [
      [180, '+', 'Institutions served'],
      [800000, '+ Cr', 'Funding supported (Rs)'],
      [48, 'hr', 'Retail turnaround'],
    ],
  },
  {
    slug: 'real-estate',
    icon: Home,
    title: 'Real Estate & Developers',
    tagline: 'From land parcel to township handover',
    description:
      'Feasibility, valuation, project monitoring, and marketing strategy for residential, commercial, and mixed-use developments.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    challenges: ['Land pricing and acquisition risk', 'Construction cost overruns', 'RERA and lender compliance'],
    solutions: ['Highest-and-best-use and residual land value analysis', 'Stage-wise cost monitoring and certification', 'Lender-grade progress reporting'],
    stats: [
      [250, '+', 'Projects covered'],
      [30, '+', 'Cities active'],
      [100, '+', 'Township assignments'],
    ],
  },
  {
    slug: 'industrial',
    icon: Factory,
    title: 'Industrial & Manufacturing',
    tagline: 'Technical depth for complex plants',
    description:
      'Plant and machinery valuation, risk inspection, TEV studies, and fixed asset management for manufacturing and process industries.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    challenges: ['Specialized equipment with thin markets', 'Safety and breakdown risk', 'IndAS/IFRS reporting requirements'],
    solutions: ['Chartered Engineer certifications and useful-life studies', 'Fire, safety, and breakdown risk audits', 'Impairment testing and componentization'],
    stats: [
      [300, '+', 'Plants assessed'],
      [40, '+', 'Industry segments'],
      [500, '+', 'Risk audits'],
    ],
  },
  {
    slug: 'infrastructure',
    icon: TrainFront,
    title: 'Infrastructure & Public Sector',
    tagline: 'Nation-scale assets, institution-grade rigour',
    description:
      'Valuation and advisory for roads, logistics, utilities, and public sector undertakings with statutory and audit-grade documentation.',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop',
    challenges: ['Long-life assets with regulated returns', 'Multi-stakeholder approvals', 'Statutory valuation frameworks'],
    solutions: ['IBBI and Income Tax registered valuers', 'Government-compliant reporting formats', 'PAN India field teams for large footprints'],
    stats: [
      [17, '+', 'States covered'],
      [officeLocationCount, '', 'Mapped offices'],
      [9, '', 'Professional accreditations'],
    ],
  },
  {
    slug: 'hospitality',
    icon: Hotel,
    title: 'Hospitality & Leisure',
    tagline: 'Value beyond the brick — brands, flags, flows',
    description:
      'Valuation and feasibility for hotels, resorts, golf courses, and health spas where cash flows and operations drive value.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
    challenges: ['Operating-business valuation complexity', 'Seasonality and demand cycles', 'Brand and management contract impacts'],
    solutions: ['Income-approach valuations with market benchmarking', 'Feasibility and concept testing for new builds', 'Special-use asset expertise'],
    stats: [
      [60, '+', 'Hospitality assets'],
      [15, '+', 'Resort valuations'],
      [10, '+', 'Golf & spa assets'],
    ],
  },
  {
    slug: 'retail',
    icon: ShoppingBag,
    title: 'Retail & Commercial',
    tagline: 'Location intelligence for revenue-critical space',
    description:
      'Mall, high-street, and office valuations backed by catchment analysis, rental benchmarking, and demand forecasting.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
    challenges: ['Rental volatility and vacancy risk', 'Anchor-tenant dependencies', 'E-commerce demand shifts'],
    solutions: ['Rental assessments and lease benchmarking', 'Catchment and footfall analysis', 'Portfolio optimization advisory'],
    stats: [
      [80, '+', 'Retail assets valued'],
      [25, '+', 'Malls covered'],
      [30, '+', 'Cities analysed'],
    ],
  },
];

export const clientNames = [
  'IDBI Bank', 'HDFC', 'Capri Global', 'Piramal', 'Aadhar Housing Finance',
  'AU Small Finance Bank', 'RBL Bank', 'Tata Capital', 'Axis Bank', 'LIC Housing Finance',
];
