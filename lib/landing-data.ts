import { Shield, Fingerprint, ScrollText, Ban, ShieldCheck } from "lucide-react"

// Social proof logos
export const SOCIAL_PROOF_LOGOS = [
  "Nirvana",
  "Acrisure",
  "Marsh",
  "Aon",
  "Willis",
  "Brown & Brown",
] as const

// Security badges data
export const SECURITY_BADGES = [
  { icon: Shield, label: "SOC 2 Type II" },
  { icon: ShieldCheck, label: "HIPAA Ready" },
  { icon: Ban, label: "No model training" },
  { icon: Fingerprint, label: "SSO & MFA" },
  { icon: ScrollText, label: "RBAC & audit logs" },
] as const

// Professional types and their features
export const PROFESSIONALS = [
  {
    title: "Retail Brokers",
    description: "Win more business and serve clients better with less paperwork.",
    features: [
      "Instant submission processing",
      "Policy comparison in plain language",
      "Cross-sell opportunity identification",
      "Automated renewal management",
    ],
  },
  {
    title: "Wholesale Brokers",
    description: "Place more business faster with intelligent market matching.",
    features: [
      "Carrier appetite matching",
      "Submission standardization",
      "Side-by-side quote comparison",
      "Retail broker communication",
    ],
  },
  {
    title: "Insurers & MGAs",
    description: "Scale underwriting and program management efficiently.",
    features: [
      "Automated submission intake",
      "Multi-program management",
      "Guideline compliance verification",
      "Bordereau & carrier reporting",
    ],
  },
  {
    title: "Reinsurers",
    description: "Optimize treaty management and risk analysis.",
    features: [
      "Treaty compliance monitoring",
      "Portfolio exposure analysis",
      "Cedent reporting validation",
      "Claims recovery analysis",
    ],
  },
  {
    title: "Claims TPAs",
    description: "Streamline claims administration and reporting.",
    features: [
      "Automated claims intake",
      "Coverage verification",
      "Adjudication support",
      "Carrier reporting & loss runs",
    ],
  },
] as const

// Feature sections content
export const FEATURES = [
  {
    id: "intelligent-intake",
    label: "Intelligent Intake",
    title: "Every document,",
    titleLine2: "instantly organized",
    description: "Emails, PDFs, applications, claims forms. Drop them in and Cooper extracts the key information, flags what's missing, and structures everything for your workflow.",
    benefits: [
      {
        title: "Multi-format ingestion",
        description: "Process emails, PDFs, images, and scanned documents automatically",
      },
      {
        title: "Smart data extraction",
        description: "Pull names, dates, limits, and coverage details into structured fields",
      },
      {
        title: "Completeness checking",
        description: "Instantly identify missing information before it slows you down",
      },
    ],
  },
  {
    id: "deep-insights",
    label: "Deep Insights",
    title: "Find what matters,",
    titleLine2: "skip the noise",
    description: "Cooper reads policies, loss runs, and applications like an expert. It surfaces critical details, compares terms, and catches issues that would take hours to find manually.",
    benefits: [
      {
        title: "Coverage comparison",
        description: "See exactly what changed between policies, quotes, or endorsements",
      },
      {
        title: "Loss history analysis",
        description: "Calculate ratios, spot trends, and summarize claims in seconds",
      },
      {
        title: "Red flag detection",
        description: "Automatically surface exclusions, limitations, and inconsistencies",
      },
    ],
  },
  {
    id: "workflow-automation",
    label: "Workflow Automation",
    title: "Work the way",
    titleLine2: "you already do, faster",
    description: "Cooper fits into your existing process, whether you're checking guidelines, generating correspondence, or preparing reports. Same workflow, fraction of the time.",
    benefits: [
      {
        title: "Guideline & compliance checks",
        description: "Verify against underwriting rules, state requirements, or internal policies",
      },
      {
        title: "Correspondence generation",
        description: "Draft emails, summaries, and reports with the right context already filled in",
      },
      {
        title: "Ask anything",
        description: "Query your documents in plain English and Cooper finds the answers",
      },
    ],
  },
] as const

// Testimonial data
export const TESTIMONIAL = {
  quote: "Cooper transformed how we process submissions. What took hours now takes minutes. It's like having an insurance expert available 24/7. Cooper has become essential to scaling fast and staying competitive.",
  author: "Rushil Goel",
  title: "CEO, Nirvana Insurance",
  image: "/rushil-goel.png",
} as const

// Sidebar navigation items for product mockup
export const SIDEBAR_NAV_ITEMS = [
  { label: "Home", active: true, hasChevron: false },
  { label: "Workflows", active: false, hasChevron: true },
  { label: "Vault", active: false, hasChevron: true },
  { label: "Library", active: false, hasChevron: false },
  { label: "History", active: false, hasChevron: true },
] as const

// Popular workflows for product mockup
export const POPULAR_WORKFLOWS = [
  {
    title: "Process Submissions",
    description: "Guide submission intake with step-by-step processing",
    steps: 5,
    popular: true,
  },
  {
    title: "Extract IFTAs",
    description: "Automatically extract IFTA data from documents and forms",
    steps: 3,
    popular: true,
  },
  {
    title: "Generate UW Email",
    description: "Create professional underwriter correspondence",
    steps: 2,
    popular: false,
  },
] as const

// Workflow categories for product mockup
export const WORKFLOW_CATEGORIES = [
  {
    name: "Data Extraction",
    items: [
      {
        title: "Extract Driver Data",
        description: "Pull driver information from MVRs and applications",
        steps: 2,
      },
      {
        title: "Extract Vehicle List",
        description: "Extract vehicle information from schedules",
        steps: 2,
      },
    ],
  },
  {
    name: "Analysis & Comparison",
    items: [
      {
        title: "Compare Quotes",
        description: "Side-by-side comparison from multiple carriers",
        steps: 3,
      },
      {
        title: "Check Appetite",
        description: "Verify if risk matches carrier guidelines",
        steps: 2,
      },
    ],
  },
] as const
