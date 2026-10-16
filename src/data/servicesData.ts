export type ServiceFeature = {
  title: string;
  description: string;
  icon: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type TechTool = {
  name: string;
  iconSvg?: string;
  badge?: string;
};

export type CaseStudyItem = {
  tag: string;
  title: string;
  image: string;
  metric1: { value: string; label: string };
  metric2: { value: string; label: string };
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ServicePageData = {
  slug: string;
  name: string;
  category: string;
  eyebrow: string;
  heroHeadline: string;
  heroHeadlineHighlight: string;
  heroDescription: string;
  heroImage: string;
  heroPreviewBadge: string;
  heroPreviewTitle: string;
  heroStrip: { title: string; subtitle: string; icon: string }[];
  includedTitle: string;
  includedDescription: string;
  includedFeatures: ServiceFeature[];
  overviewHeading: string;
  overviewHeadingHighlight: string;
  overviewDescription: string;
  overviewImage: string;
  overviewBenefits: string[];
  processEyebrow: string;
  processHeading: string;
  processSteps: ProcessStep[];
  toolsHeading: string;
  tools: TechTool[];
  caseStudies: CaseStudyItem[];
  faqs: FaqItem[];
  ctaEyebrow: string;
  ctaHeading: string;
  ctaSubtitle: string;
};

export const servicesData: Record<string, ServicePageData> = {
  "website-development": {
    slug: "website-development",
    name: "Website Development",
    category: "Technology",
    eyebrow: "WEBSITE DEVELOPMENT",
    heroHeadline: "High-Performance Websites Built for",
    heroHeadlineHighlight: "Real Business Growth.",
    heroDescription:
      "We design and build modern, fast and scalable websites that convert visitors into customers and support your long-term growth.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    heroPreviewBadge: "Enterprise Web",
    heroPreviewTitle: "Modern Websites for Growing Businesses.",
    heroStrip: [
      {
        title: "Custom Design",
        subtitle: "Tailored to Your Brand",
        icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
      },
      {
        title: "Mobile Optimised",
        subtitle: "Perfect on Every Device",
        icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
      },
      {
        title: "SEO Ready",
        subtitle: "Built for Visibility",
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      },
      {
        title: "Ongoing Support",
        subtitle: "We're With You Long Term",
        icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
      },
    ],
    includedTitle: "Everything You Need for a Successful Website.",
    includedDescription:
      "From strategy and design to development and ongoing support, we handle the entire process so you can focus on running your business.",
    includedFeatures: [
      {
        title: "Custom Website Design",
        description: "Unique, modern designs aligned with your brand identity and conversion goals.",
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      },
      {
        title: "Responsive Development",
        description: "Optimised for all devices and screen sizes with ultra-fast loading speed.",
        icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
      },
      {
        title: "SEO Optimisation",
        description: "Built with best practices, structured data, and semantic hierarchy to rank higher.",
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      },
      {
        title: "Content Management",
        description: "Easy-to-use CMS for full control of your content, blogs, and team updates.",
        icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      },
      {
        title: "Performance Focused",
        description: "Fast loading, secure, and scalable cloud hosting infrastructure.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
      },
      {
        title: "Ongoing Support",
        description: "Continuous maintenance, security patches, and technical support on demand.",
        icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      },
    ],
    overviewHeading: "Websites That Do",
    overviewHeadingHighlight: "More Than Look Good.",
    overviewDescription:
      "A great website is more than just a digital brochure — it's your most powerful marketing tool. We build websites that not only look stunning but are also designed to generate leads, increase conversions and support your long-term business goals.",
    overviewImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    overviewBenefits: [
      "Built around your business goals and revenue KPIs",
      "Designed for seamless user experience and conversions",
      "Integrated with the tools and CRM systems you already use",
      "Dedicated UK team support from discovery to post-launch",
    ],
    processEyebrow: "OUR PROCESS",
    processHeading: "A Simple Process. Powerful Results.",
    processSteps: [
      {
        step: "01",
        title: "Discover",
        description: "Understand your goals, target audience, brand and technical requirements.",
      },
      {
        step: "02",
        title: "Plan",
        description: "Create a tailored strategy, sitemap, wireframes and content blueprint.",
      },
      {
        step: "03",
        title: "Design & Develop",
        description: "Build a modern, accessible, high-performance bespoke website.",
      },
      {
        step: "04",
        title: "Test & Launch",
        description: "Cross-browser QA, mobile testing, SEO auditing and seamless go-live.",
      },
      {
        step: "05",
        title: "Support & Grow",
        description: "Ongoing technical support, analytics monitoring and continuous optimisation.",
      },
    ],
    toolsHeading: "Modern Tools for Modern Websites.",
    tools: [
      { name: "Next.js", badge: "Framework" },
      { name: "React", badge: "UI" },
      { name: "TypeScript", badge: "Language" },
      { name: "Tailwind CSS", badge: "Styling" },
      { name: "Figma", badge: "Design" },
      { name: "WordPress", badge: "CMS" },
    ],
    caseStudies: [
      {
        tag: "SME",
        title: "E-commerce Website for Retail Brand",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
        metric1: { value: "+120%", label: "Online Sales" },
        metric2: { value: "3.5x", label: "Conversion Rate" },
      },
      {
        tag: "Professional Services",
        title: "Corporate Website Redesign",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
        metric1: { value: "+80%", label: "Lead Generation" },
        metric2: { value: "50%", label: "Lower Bounce Rate" },
      },
      {
        tag: "Healthcare",
        title: "Clinic Website & Booking System",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
        metric1: { value: "+200%", label: "Appointments" },
        metric2: { value: "4.2x", label: "Page Views" },
      },
    ],
    faqs: [
      {
        question: "How long does a website take to build?",
        answer:
          "Most standard corporate websites take 3 to 6 weeks from kickoff to launch. More complex bespoke platforms or custom web applications typically range from 6 to 12 weeks depending on requirements and integrations.",
      },
      {
        question: "Will my website be mobile friendly?",
        answer:
          "Yes, 100%. Every website we build is designed mobile-first and tested rigorously across smartphones, tablets, laptops, and ultra-wide desktop monitors.",
      },
      {
        question: "Do you provide search engine optimisation (SEO)?",
        answer:
          "Yes. All our websites are architected with clean semantic HTML, schema structured markup, ultra-fast Core Web Vitals, OpenGraph tags, and sitemap indexing ready for Google ranking.",
      },
      {
        question: "Do you provide ongoing website maintenance?",
        answer:
          "Yes, we provide flexible monthly support plans that include managed cloud hosting, security patches, regular backups, and dedicated development hours for updates.",
      },
      {
        question: "Can you redesign or migrate an existing website?",
        answer:
          "Absolutely. We can preserve your existing SEO domain authority, URLs, and redirect structure while completely redesigning the visual experience and upgrading the tech stack.",
      },
    ],
    ctaEyebrow: "LET'S BUILD YOUR WEBSITE",
    ctaHeading: "Ready to Build a Website That Grows Your Business?",
    ctaSubtitle: "Let's discuss your project and create a website that delivers real, measurable results.",
  },

  "custom-software": {
    slug: "custom-software",
    name: "Custom Software Development",
    category: "Technology",
    eyebrow: "CUSTOM SOFTWARE",
    heroHeadline: "Purpose-Built Software Engineered for",
    heroHeadlineHighlight: "Complex Operational Workflows.",
    heroDescription:
      "We engineer bespoke web applications, internal tools and cloud software that streamline operations, eliminate manual overhead, and scale seamlessly.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    heroPreviewBadge: "Custom Cloud Platform",
    heroPreviewTitle: "Operations & Workflow Automation System",
    heroStrip: [
      {
        title: "Bespoke Codebase",
        subtitle: "100% Tailored to You",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      },
      {
        title: "Enterprise Scale",
        subtitle: "High-Volume Data Handling",
        icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
      },
      {
        title: "Secure & GDPR",
        subtitle: "UK Regulated Protocols",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      },
      {
        title: "Full Ownership",
        subtitle: "Zero SaaS Subscription Lock-in",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      },
    ],
    includedTitle: "Everything You Need for Custom Software Success.",
    includedDescription:
      "From technical architecture and UI engineering to API integrations and cloud deployments, we deliver turnkey software solutions.",
    includedFeatures: [
      {
        title: "Tailored Architecture",
        description: "Bespoke database schemas and backend services built specifically for your workflows.",
        icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      },
      {
        title: "Modern UI/UX Interface",
        description: "Intuitive, clean dashboards that make complex operations simple for your team.",
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      },
      {
        title: "API & Data Integrations",
        description: "Connect seamlessly with payment gateways, CRMs, accounting systems, and third-party APIs.",
        icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      },
      {
        title: "Automated Testing & QA",
        description: "Rigorous unit, integration, and security tests to guarantee bulletproof stability.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      },
      {
        title: "Cloud Infrastructure",
        description: "High-availability AWS / GCP cloud configuration with automatic backups and failovers.",
        icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z",
      },
      {
        title: "Dedicated SLA Maintenance",
        description: "Guaranteed response times, system health monitoring, and iterative feature updates.",
        icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      },
    ],
    overviewHeading: "Custom Software That",
    overviewHeadingHighlight: "Scales Your Operations.",
    overviewDescription:
      "Off-the-shelf software forces your business into restrictive boxes. We build bespoke software platforms tailored to how your company actually works, saving hundreds of manual hours and providing an unmatched competitive edge.",
    overviewImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    overviewBenefits: [
      "Eliminate repetitive manual data entry and spreadsheet errors",
      "Centralise disparate business systems into one unified portal",
      "Full intellectual property and source code ownership",
      "Direct communication with senior UK software engineers",
    ],
    processEyebrow: "OUR PROCESS",
    processHeading: "A Simple Process. Powerful Results.",
    processSteps: [
      {
        step: "01",
        title: "Discover",
        description: "Deep dive into your workflows, data structures, and operational bottlenecks.",
      },
      {
        step: "02",
        title: "Architecture",
        description: "Design technical specifications, database schema, and interactive UI prototypes.",
      },
      {
        step: "03",
        title: "Development",
        description: "Agile 2-week sprints with transparent progress demos and continuous integration.",
      },
      {
        step: "04",
        title: "Testing & QA",
        description: "Comprehensive security audits, load testing, and user acceptance testing.",
      },
      {
        step: "05",
        title: "Deployment & SLAs",
        description: "Seamless deployment, team onboarding, and dedicated maintenance agreements.",
      },
    ],
    toolsHeading: "Modern Tools for Custom Software.",
    tools: [
      { name: "React", badge: "Frontend" },
      { name: "Node.js", badge: "Backend" },
      { name: "TypeScript", badge: "Language" },
      { name: "PostgreSQL", badge: "Database" },
      { name: "Supabase", badge: "BaaS" },
      { name: "AWS", badge: "Cloud" },
    ],
    caseStudies: [
      {
        tag: "Operations",
        title: "CRM & Workflow Platform for Legal Firm",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
        metric1: { value: "3.2x", label: "Faster Case Processing" },
        metric2: { value: "-75%", label: "Manual Paperwork" },
      },
      {
        tag: "Automation",
        title: "Multi-branch Inventory Management System",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
        metric1: { value: "100%", label: "Stock Accuracy" },
        metric2: { value: "£45k+", label: "Saved Annually" },
      },
      {
        tag: "Healthcare",
        title: "Patient Booking & Clinical Rota Portal",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
        metric1: { value: "99.99%", label: "Uptime SLA" },
        metric2: { value: "24,000+", label: "Monthly Bookings" },
      },
    ],
    faqs: [
      {
        question: "Do we own the software and source code?",
        answer:
          "Yes. Once delivered and paid for, 100% of the custom codebase, intellectual property, and database assets belong entirely to your organisation.",
      },
      {
        question: "How do you handle security and data protection?",
        answer:
          "We follow UK GDPR, ISO standards, end-to-end encryption, role-based access control (RBAC), and automated vulnerability monitoring.",
      },
      {
        question: "Can you integrate with our existing CRM or accounting tools?",
        answer:
          "Yes, we build custom REST and GraphQL integrations with platforms like Xero, QuickBooks, Salesforce, HubSpot, Stripe, and legacy internal databases.",
      },
      {
        question: "What happens after the software is launched?",
        answer:
          "We provide proactive SLA maintenance contracts that cover uptime monitoring, security updates, bug fixes, and continuous feature enhancements.",
      },
    ],
    ctaEyebrow: "LET'S BUILD YOUR SOFTWARE",
    ctaHeading: "Ready to Build Custom Software That Scales Your Business?",
    ctaSubtitle: "Book a consultation with our software architects to review your technical requirements.",
  },

  "digital-marketing": {
    slug: "digital-marketing",
    name: "Digital Marketing & Growth",
    category: "Digital Growth",
    eyebrow: "DIGITAL MARKETING",
    heroHeadline: "Data-Driven Marketing Campaigns That Generate",
    heroHeadlineHighlight: "Qualified High-Value Leads.",
    heroDescription:
      "We build integrated search, paid advertising, and conversion funnels that position your brand in front of ready-to-buy decision makers.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
    heroPreviewBadge: "Growth Analytics",
    heroPreviewTitle: "Multi-Channel Campaign Performance: +380% ROI",
    heroStrip: [
      {
        title: "Targeted Reach",
        subtitle: "High-Intent Audiences",
        icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
      },
      {
        title: "Proven Funnels",
        subtitle: "Optimised for Conversion",
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      },
      {
        title: "Transparent Data",
        subtitle: "Live Attribution Dashboards",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      },
      {
        title: "UK Regulated",
        subtitle: "Compliant Ad Copy & Tracking",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      },
    ],
    includedTitle: "Everything You Need for Digital Growth.",
    includedDescription:
      "A complete growth engine covering organic search, high-converting paid ads, landing page testing, and full-funnel attribution.",
    includedFeatures: [
      {
        title: "Search Engine Optimisation (SEO)",
        description: "Technical SEO, content authority building, and local map pack dominance.",
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      },
      {
        title: "Google Ads (PPC)",
        description: "Search, Display, and Performance Max campaigns targeting high-intent commercial keywords.",
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      },
      {
        title: "Meta Ads (Facebook & Instagram)",
        description: "Creative visual campaigns, retargeting funnels, and lookalike audience scaling.",
        icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
      },
      {
        title: "High-Converting Landing Pages",
        description: "Dedicated conversion-focused landing pages engineered for maximum lead capture.",
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      },
      {
        title: "Lead Generation & Nurturing",
        description: "Automated email sequences, CRM routing, and lead qualification workflows.",
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      },
      {
        title: "Analytics & ROI Reporting",
        description: "Real-time Google Analytics 4, Server-side tracking, and transparent ROI metrics.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      },
    ],
    overviewHeading: "Marketing That Delivers",
    overviewHeadingHighlight: "Predictable Returns.",
    overviewDescription:
      "We don't focus on vanity metrics like impressions and clicks. Our growth strategies are engineered around customer acquisition cost (CAC), lead quality, and revenue generation.",
    overviewImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    overviewBenefits: [
      "Reach targeted decision-makers in your specific industry niche",
      "Continuous A/B testing of ad creatives, headlines, and landing pages",
      "Live analytics dashboard showing real cost-per-lead and ROI",
      "Dedicated UK marketing strategist and campaign manager",
    ],
    processEyebrow: "OUR PROCESS",
    processHeading: "A Simple Process. Powerful Results.",
    processSteps: [
      {
        step: "01",
        title: "Discover",
        description: "Analyze competitors, customer personas, keyword intent, and existing funnels.",
      },
      {
        step: "02",
        title: "Strategy",
        description: "Build an omni-channel roadmap, conversion goals, and budget allocation plan.",
      },
      {
        step: "03",
        title: "Launch Campaigns",
        description: "Deploy high-converting copy, visual assets, tracking pixels, and landing pages.",
      },
      {
        step: "04",
        title: "Optimise",
        description: "Daily bidding tweaks, negative keyword pruning, and creative A/B testing.",
      },
      {
        step: "05",
        title: "Scale",
        description: "Scale winning campaigns profitably while expanding into adjacent channels.",
      },
    ],
    toolsHeading: "Modern Tools for Digital Growth.",
    tools: [
      { name: "Google Ads", badge: "PPC" },
      { name: "Meta Ads", badge: "Paid Social" },
      { name: "GA4", badge: "Analytics" },
      { name: "Search Console", badge: "SEO" },
      { name: "SEMrush", badge: "Keyword Intel" },
      { name: "HubSpot", badge: "CRM" },
    ],
    caseStudies: [
      {
        tag: "B2B Services",
        title: "Multi-Channel PPC & SEO for Consultancy",
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80",
        metric1: { value: "+280%", label: "Qualified Enquiries" },
        metric2: { value: "-42%", label: "Cost Per Lead" },
      },
      {
        tag: "Healthcare",
        title: "Local SEO & Google Ads for Private Practice",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
        metric1: { value: "#1 Rank", label: "Top 20 Local Keywords" },
        metric2: { value: "+145%", label: "Private Patient Bookings" },
      },
      {
        tag: "SME",
        title: "Meta Retargeting & Lead Generation Funnel",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
        metric1: { value: "4.8x", label: "Return on Ad Spend" },
        metric2: { value: "620+", label: "New MQLs per month" },
      },
    ],
    faqs: [
      {
        question: "How quickly can we expect to see results?",
        answer:
          "Paid search and social campaigns (Google & Meta Ads) typically begin generating leads within the first 7 to 14 days of launch. Organic SEO is a compounding channel that builds substantial momentum within 60 to 90 days.",
      },
      {
        question: "Do you require long-term lock-in contracts?",
        answer:
          "No. We believe in earning our partnership each month through verified ROI. We work on flexible monthly agreements after an initial 3-month setup and calibration sprint.",
      },
      {
        question: "Who owns the ad accounts and creative assets?",
        answer:
          "You own 100% of your Google Ads, Meta Ads Manager, analytics accounts, and all creative materials created for your campaigns.",
      },
    ],
    ctaEyebrow: "LET'S GROW YOUR BUSINESS",
    ctaHeading: "Ready to Scale With High-Performing Digital Marketing?",
    ctaSubtitle: "Get in touch for a complimentary growth audit and marketing strategy proposal.",
  },

  "virtual-assistance": {
    slug: "virtual-assistance",
    name: "Virtual Assistance & Support",
    category: "Virtual Assistance",
    eyebrow: "VIRTUAL ASSISTANCE",
    heroHeadline: "Dedicated Virtual Assistance Built for",
    heroHeadlineHighlight: "High-Performing Leaders.",
    heroDescription:
      "Delegate administrative, customer support, data processing and operational tasks to trusted, UK-aligned professionals.",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
    heroPreviewBadge: "Executive Support",
    heroPreviewTitle: "Dedicated Virtual Operations & Task Management",
    heroStrip: [
      {
        title: "24/7 Aligned",
        subtitle: "24/7 Availability & Native English",
        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      },
      {
        title: "Vetted Specialists",
        subtitle: "Trained in Executive Support",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      },
      {
        title: "Flexible Hours",
        subtitle: "Scale Up or Down As Needed",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
      },
      {
        title: "Secure & GDPR",
        subtitle: "Strict Confidentiality Agreements",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      },
    ],
    includedTitle: "Everything You Need for Seamless Virtual Support.",
    includedDescription:
      "Hand off repetitive administrative chores, inbox clutter, scheduling friction, and back-office management to dedicated professionals.",
    includedFeatures: [
      {
        title: "Administrative Coordination",
        description: "Diary scheduling, document formatting, travel logistics, and executive support.",
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      },
      {
        title: "Customer Support & Live Chat",
        description: "Prompt, polite and professional front-line responses to email and ticket enquiries.",
        icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      },
      {
        title: "Data Entry & Document Processing",
        description: "Fast, accurate CRM updates, document filing, transcription, and database cleaning.",
        icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
      },
      {
        title: "Email Triage & Inbox Zero",
        description: "Daily filtering, priority tagging, drafting responses, and scheduling meetings.",
        icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      },
      {
        title: "Market & Prospect Research",
        description: "Supplier benchmarking, lead list building, competitor pricing, and briefing packs.",
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      },
      {
        title: "Back Office Operations",
        description: "Invoice chasing, recurring reporting, vendor coordination, and compliance filings.",
        icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      },
    ],
    overviewHeading: "Virtual Support That",
    overviewHeadingHighlight: "Reclaims Your Time.",
    overviewDescription:
      "Your leadership team should be focused on high-value strategy and client relationships. Our virtual assistants manage the day-to-day operational execution seamlessly with complete discretion.",
    overviewImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    overviewBenefits: [
      "Reclaim 15+ hours per week of senior leadership focus",
      "Consistent coverage without employee overhead or pension costs",
      "Trained on modern productivity suites and task management apps",
      "Strict confidentiality agreements and GDPR compliance",
    ],
    processEyebrow: "OUR PROCESS",
    processHeading: "A Simple Process. Powerful Results.",
    processSteps: [
      {
        step: "01",
        title: "Discover",
        description: "Assess your daily tasks, communication channels, and required hours.",
      },
      {
        step: "02",
        title: "Assign",
        description: "Match you with a dedicated, experienced UK-aligned virtual assistant.",
      },
      {
        step: "03",
        title: "Onboard",
        description: "Secure handover of tools, email access, templates, and SOP guidelines.",
      },
      {
        step: "04",
        title: "Operate",
        description: "Seamless daily task execution with weekly progress and hours logs.",
      },
      {
        step: "05",
        title: "Optimise",
        description: "Continuous workflow refinement and scaling as your business expands.",
      },
    ],
    toolsHeading: "Modern Tools for Virtual Operations.",
    tools: [
      { name: "Google Workspace", badge: "Suite" },
      { name: "Microsoft 365", badge: "Office" },
      { name: "Notion", badge: "Docs" },
      { name: "Asana / ClickUp", badge: "Tasks" },
      { name: "Slack", badge: "Comms" },
      { name: "Zendesk", badge: "Helpdesk" },
    ],
    caseStudies: [
      {
        tag: "Executive",
        title: "EA Support for Growing Consultancy CEO",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
        metric1: { value: "20 hrs", label: "Saved Weekly" },
        metric2: { value: "100%", label: "Inbox Zero Met" },
      },
      {
        tag: "Customer Service",
        title: "Dedicated Helpdesk Support for SaaS Platform",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
        metric1: { value: "< 15 min", label: "Avg Response Time" },
        metric2: { value: "98.4%", label: "Customer CSAT" },
      },
      {
        tag: "Operations",
        title: "Back Office & Invoicing for Trade Group",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
        metric1: { value: "-60%", label: "Unpaid Invoice Delay" },
        metric2: { value: "Zero", label: "Data Backlog" },
      },
    ],
    faqs: [
      {
        question: "How do you ensure data security and confidentiality?",
        answer:
          "All our assistants sign strict Non-Disclosure Agreements (NDAs), use password managers (1Password / Bitwarden) with 2FA, and work within encrypted GDPR-compliant environments.",
      },
      {
        question: "What working hours do the assistants cover?",
        answer:
          "Our assistants operate with 24/7 coverage, providing round-the-clock availability or flexible custom shifts to support your business at any time.",
      },
      {
        question: "Can I scale my hours up or down?",
        answer:
          "Yes, we offer flexible hourly tiers ranging from 20 hours/month to full-time 160 hours/month dedicated assistants.",
      },
    ],
    ctaEyebrow: "LET'S FREE UP YOUR TIME",
    ctaHeading: "Ready to Delegate and Focus on Growing Your Business?",
    ctaSubtitle: "Talk to our team today to get matched with your dedicated virtual assistant.",
  },

  "healthcare-support": {
    slug: "healthcare-support",
    name: "Healthcare Support & Governance",
    category: "Healthcare Support",
    eyebrow: "HEALTHCARE SUPPORT",
    heroHeadline: "Clinical Governance & Operational Support Built for",
    heroHeadlineHighlight: "Modern Healthcare Providers.",
    heroDescription:
      "We provide practice management, clinical governance frameworks, medical records digitisation, and workforce solutions for UK healthcare organisations.",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    heroPreviewBadge: "NHS / Private Clinical Ops",
    heroPreviewTitle: "Audit Ready Practice Governance & Record Systems",
    heroStrip: [
      {
        title: "Audit Ready",
        subtitle: "Clinical Governance Standards",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      },
      {
        title: "Clinical Coding",
        subtitle: "Accurate Summarisation",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      },
      {
        title: "DBS & Vetted",
        subtitle: "Full Clinical Safeguarding",
        icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      },
      {
        title: "Data Secure",
        subtitle: "Caldicott & GDPR Aligned",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      },
    ],
    includedTitle: "Everything You Need for Healthcare Operational Excellence.",
    includedDescription:
      "Expert practice management, clinical audit preparation, digitised record flows, and compliant staffing support.",
    includedFeatures: [
      {
        title: "Practice Management Support",
        description: "Day-to-day coordination, patient enquiry management, and clinic workflow optimisation.",
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      },
      {
        title: "Clinical Governance & Audit",
        description: "Full clinical policy reviews, risk management, incident reporting, and safety frameworks.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      },
      {
        title: "Practice Audit Preparation",
        description: "Evidence packaging, mock practice audits, action plan remediation, and ongoing regulatory compliance.",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      },
      {
        title: "Medical Records Digitisation",
        description: "Scanning Lloyd George paper files, secure summarising, and electronic health records (EHR) entry.",
        icon: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2",
      },
      {
        title: "Workforce & Locum Optimisation",
        description: "Clinician scheduling, locum vetting, rota coordination, and compliance tracking.",
        icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      },
      {
        title: "Information Governance & GDPR",
        description: "DPO advisory, Caldicott Guardian principles, DSPT toolkit submissions, and data privacy.",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      },
    ],
    overviewHeading: "Healthcare Support That",
    overviewHeadingHighlight: "Guarantees Compliance.",
    overviewDescription:
      "Modern healthcare regulation demands perfection. We provide experienced NHS and private sector managers who ensure your clinics operate at peak efficiency while exceeding UK clinical practice standards.",
    overviewImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    overviewBenefits: [
      "Achieve robust clinical governance and regulatory audit readiness",
      "Seamless digital transition from paper records to electronic EHR",
      "Optimise doctor and nurse rotas to eliminate locum overspend",
      "Rigorous Caldicott and Data Protection compliance",
    ],
    processEyebrow: "OUR PROCESS",
    processHeading: "A Simple Process. Powerful Results.",
    processSteps: [
      {
        step: "01",
        title: "Discover",
        description: "Audit current clinical processes, staffing rotas, and compliance documentation.",
      },
      {
        step: "02",
        title: "Plan",
        description: "Create an action matrix for audit readiness, records digitisation, and operations.",
      },
      {
        step: "03",
        title: "Implement",
        description: "Deploy trained practice managers, scanning systems, and clinical governance protocols.",
      },
      {
        step: "04",
        title: "Deliver",
        description: "Execute mock audits, staff compliance training, and rota workflow optimisation.",
      },
      {
        step: "05",
        title: "Support & Grow",
        description: "Ongoing governance reviews, regulatory monitoring, and operational maintenance.",
      },
    ],
    toolsHeading: "Healthcare Systems & Standards.",
    tools: [
      { name: "EMIS Web", badge: "Clinical System" },
      { name: "SystmOne", badge: "EHR" },
      { name: "Clinical Governance", badge: "Compliance" },
      { name: "DSPT Toolkit", badge: "Governance" },
      { name: "Clarity Rota", badge: "Workforce" },
      { name: "Accurx", badge: "Comms" },
    ],
    caseStudies: [
      {
        tag: "Primary Care",
        title: "Multi-site GP Practice Rota & Compliance Overhaul",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
        metric1: { value: "100%", label: "Audit Readiness" },
        metric2: { value: "-35%", label: "Admin Workload" },
      },
      {
        tag: "Private Clinic",
        title: "Records Digitisation for Specialist Group",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
        metric1: { value: "15,000+", label: "Records Digitised" },
        metric2: { value: "100%", label: "Searchable Access" },
      },
      {
        tag: "Healthcare Group",
        title: "Clinical Governance & Audit Implementation",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
        metric1: { value: "100%", label: "DSPT Compliance" },
        metric2: { value: "£32k+", label: "Locum Savings" },
      },
    ],
    faqs: [
      {
        question: "How do you assist with healthcare compliance audits?",
        answer:
          "We perform comprehensive mock audits across key practice quality standards, organize clinical evidence, train administrative staff, and provide regulatory remediation plans.",
      },
      {
        question: "Are your healthcare specialists DBS checked?",
        answer:
          "Yes. All staff undergo enhanced DBS checks, mandatory safeguarding training, and sign strict Caldicott/GDPR confidentiality agreements.",
      },
      {
        question: "Can you digitise our historical Lloyd George records?",
        answer:
          "Yes, we provide BS 10008 compliant document scanning, optical character recognition (OCR), and direct upload to EMIS Web or SystmOne.",
      },
    ],
    ctaEyebrow: "LET'S SUPPORT YOUR PRACTICE",
    ctaHeading: "Ready to Elevate Your Healthcare Operations & Compliance?",
    ctaSubtitle: "Speak directly with our healthcare governance and practice management advisors.",
  },

  "medical-records": {
    slug: "medical-records",
    name: "Summarising & Digitisation of Medical Records",
    category: "Healthcare Support",
    eyebrow: "RECORDS DIGITISATION & SUMMARISING",
    heroHeadline: "Secure Medical Record Summarising &",
    heroHeadlineHighlight: "Lloyd George Digitisation.",
    heroDescription:
      "Transform historical paper Lloyd George files and clinic notes into structured, accurate, and 100% searchable digital records with standardised SNOMED CT clinical coding and seamless EMIS Web & SystmOne integration.",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    heroPreviewBadge: "NHS / Caldicott Aligned",
    heroPreviewTitle: "BS 10008 Compliant Scanning & Clinical Summaries",
    heroStrip: [
      {
        title: "Lloyd George Scanning",
        subtitle: "High-Resolution OCR Digitisation",
        icon: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2",
      },
      {
        title: "Clinical Summarising",
        subtitle: "Key History, Allergies & Problems",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      },
      {
        title: "SNOMED CT Coding",
        subtitle: "Accurate Clinical Taxonomy",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      },
      {
        title: "Caldicott & GDPR",
        subtitle: "100% Secure Chain of Custody",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      },
    ],
    includedTitle: "Complete Medical Record Digitisation & Summarising Services.",
    includedDescription:
      "We eliminate paper record backlogs, reclaim practice floor space, and equip clinicians with instantly searchable, accurately summarised electronic patient histories.",
    includedFeatures: [
      {
        title: "Lloyd George Paper Scanning",
        description: "BS 10008 compliant, non-destructive high-speed scanning with automated OCR text recognition.",
        icon: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2",
      },
      {
        title: "Clinical Record Summarising",
        description: "Experienced medical summarisers extract major medical histories, active problems, and chronic conditions.",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      },
      {
        title: "SNOMED CT & Read Coding",
        description: "Precise clinical taxonomy tagging ensuring seamless QOF reporting, audits, and searchability.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      },
      {
        title: "EMIS Web & SystmOne Ingestion",
        description: "Direct, secure electronic upload and attachment into your primary clinical management system.",
        icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
      },
      {
        title: "Confidential Storage & Shredding",
        description: "Tracked off-site secure storage or certified eco-friendly confidential destruction post-digitisation.",
        icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
      },
      {
        title: "Information Governance & DSPT",
        description: "Strict alignment with NHS Information Governance, Caldicott Principles, and Data Security Protection Toolkit.",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      },
    ],
    overviewHeading: "Accurate Summaries That",
    overviewHeadingHighlight: "Transform Clinical Efficiency.",
    overviewDescription:
      "Searching through bulky, deteriorating Lloyd George paper envelopes wastes valuable clinical minutes and risks missing vital patient history. Our specialised medical summarising and digitisation team converts your entire records library into clean, coded, and instantly searchable electronic health records.",
    overviewImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    overviewBenefits: [
      "Instantly retrieve complete patient medical histories during live consultations",
      "Reclaim hundreds of square feet of valuable practice floor space",
      "Ensure 100% SNOMED CT coding accuracy for QOF points and clinical audits",
      "Secure, tracked chain of custody compliant with BS 10008 legal admissibility",
    ],
    processEyebrow: "OUR PROCESS",
    processHeading: "A Secure 5-Stage Digitisation Workflow.",
    processSteps: [
      {
        step: "01",
        title: "Audit & Inventory",
        description: "Assess paper archive volume, condition, and target clinical software requirements.",
      },
      {
        step: "02",
        title: "Secure Collection",
        description: "Barcoded, tracked, and tamper-evident transit to our high-security digitisation facility.",
      },
      {
        step: "03",
        title: "High-Resolution OCR Scanning",
        description: "BS 10008 compliant scanning with automated multi-page OCR text indexing.",
      },
      {
        step: "04",
        title: "Clinical Summarising & Coding",
        description: "Trained summarisers review histories and assign standardized SNOMED CT codes.",
      },
      {
        step: "05",
        title: "EHR Ingestion & Verification",
        description: "Direct batch upload into EMIS Web / SystmOne with 100% clinical QA verification.",
      },
    ],
    toolsHeading: "Clinical Systems & Standards.",
    tools: [
      { name: "EMIS Web", badge: "Primary Care" },
      { name: "TPP SystmOne", badge: "EHR Platform" },
      { name: "Docman 10", badge: "EDM Integration" },
      { name: "SNOMED CT", badge: "Clinical Codes" },
      { name: "BS 10008", badge: "Legal Standard" },
      { name: "DSPT Toolkit", badge: "Governance" },
    ],
    caseStudies: [
      {
        tag: "Primary Care Network",
        title: "Digitisation & Summarising of 38,000 Lloyd George Records",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
        metric1: { value: "38,000+", label: "Records Digitised" },
        metric2: { value: "Zero", label: "Paper Backlog" },
      },
      {
        tag: "GP Practice Group",
        title: "Historical Clinical Coding & Backlog Clearance Sprint",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
        metric1: { value: "100%", label: "SNOMED Coded" },
        metric2: { value: "+18%", label: "QOF Achievement" },
      },
      {
        tag: "Specialist Clinic",
        title: "Physical File Archival & Floor Space Reclamation",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
        metric1: { value: "450 sq ft", label: "Space Reclaimed" },
        metric2: { value: "< 5 sec", label: "File Retrieval" },
      },
    ],
    faqs: [
      {
        question: "What is included in medical record summarising?",
        answer:
          "Our certified summarisers review past Lloyd George files to extract critical past medical history, major operations, chronic illness diagnoses, ongoing medications, drug allergies, immunisations, and family history into standardized electronic summaries.",
      },
      {
        question: "Are digitised files legally admissible in the UK?",
        answer:
          "Yes. Our scanning process complies strictly with British Standard BS 10008 (Evidential Weight and Legal Admissibility of Electronic Information), ensuring digital copies carry full legal validity.",
      },
      {
        question: "How do you integrate records with EMIS Web or SystmOne?",
        answer:
          "We format and import digitised documents and coded summaries directly into your clinical system via standard protocols or document management systems like Docman, ensuring patient matching with NHS numbers.",
      },
      {
        question: "How is patient confidentiality maintained during transit and processing?",
        answer:
          "All files are moved in GPS-tracked, secure transport vehicles with full chain-of-custody tracking. Our staff are enhanced DBS checked, Caldicott trained, and process records in biometric-controlled UK facilities.",
      },
    ],
    ctaEyebrow: "LET'S DIGITISE YOUR RECORDS",
    ctaHeading: "Ready to Clear Your Records Backlog & Go Paperless?",
    ctaSubtitle: "Contact our healthcare records team today for a free consultation and project scope.",
  },
};

// Helper to generate dynamic fallback data for any service slug not explicitly in dictionary
export function getServiceData(slug: string): ServicePageData {
  if (servicesData[slug]) {
    return servicesData[slug];
  }

  // Generate formatted title from slug
  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    slug,
    name: formattedTitle,
    category: "Professional Solutions",
    eyebrow: formattedTitle.toUpperCase(),
    heroHeadline: `Expert ${formattedTitle} Built for`,
    heroHeadlineHighlight: "Real Business Growth.",
    heroDescription: `We provide strategic ${formattedTitle.toLowerCase()} solutions, technology, and dedicated specialist support to help your business operate with efficiency and speed.`,
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80",
    heroPreviewBadge: "Enterprise Delivery",
    heroPreviewTitle: `Professional ${formattedTitle} Services`,
    heroStrip: [
      {
        title: "Strategic Delivery",
        subtitle: "Tailored to Your Goals",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      },
      {
        title: "Dedicated Team",
        subtitle: "Named UK Specialists",
        icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      },
      {
        title: "Regulated Standards",
        subtitle: "UK GDPR & Quality Assured",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      },
      {
        title: "Measurable ROI",
        subtitle: "Clear Value & Accountability",
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      },
    ],
    includedTitle: `Everything You Need for Successful ${formattedTitle}.`,
    includedDescription:
      "From planning and implementation to ongoing operational support, we manage the entire lifecycle with complete clarity.",
    includedFeatures: [
      {
        title: "Strategic Consulting",
        description: "Tailored advisory and scoped roadmaps engineered around your commercial goals.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      },
      {
        title: "End-to-End Execution",
        description: "Dedicated specialists managing workflows, technology, and day-to-day deliverables.",
        icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      },
      {
        title: "Process Optimisation",
        description: "Eliminating friction, automating repetitive tasks, and upgrading system efficiency.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
      },
      {
        title: "Regulatory Compliance",
        description: "Ensuring full adherence to UK standards, data protection, and statutory rules.",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      },
      {
        title: "Transparent Reporting",
        description: "Real-time metrics, weekly milestone reviews, and executive briefing reports.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      },
      {
        title: "Ongoing Support",
        description: "Continuous guidance and technical assistance to scale as your company grows.",
        icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      },
    ],
    overviewHeading: `${formattedTitle} That Delivers`,
    overviewHeadingHighlight: "Measurable Results.",
    overviewDescription: `We combine strategic UK expertise with hands-on technical and operational execution to deliver solutions that solve immediate bottlenecks and position your business for scalable growth.`,
    overviewImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    overviewBenefits: [
      "Built around your specific business goals and operational metrics",
      "Seamless integration with your team's daily routines",
      "Full transparency with named UK project leads",
      "Continuous optimization and ongoing partnership",
    ],
    processEyebrow: "OUR PROCESS",
    processHeading: "A Simple Process. Powerful Results.",
    processSteps: [
      {
        step: "01",
        title: "Discover",
        description: "Understand your current operational setup, goals, and core pain points.",
      },
      {
        step: "02",
        title: "Plan",
        description: "Create a tailored roadmap with defined deliverables, milestones, and owners.",
      },
      {
        step: "03",
        title: "Implement",
        description: "Deploy the specialists, systems, and processes with full accountability.",
      },
      {
        step: "04",
        title: "Deliver",
        description: "Review outcomes against target performance metrics and verify quality.",
      },
      {
        step: "05",
        title: "Support & Grow",
        description: "Provide ongoing support and continuously scale your operational capabilities.",
      },
    ],
    toolsHeading: `Modern Tools for ${formattedTitle}.`,
    tools: [
      { name: "Enterprise Suite", badge: "Core" },
      { name: "Cloud Systems", badge: "Infrastructure" },
      { name: "CRM Integration", badge: "Workflow" },
      { name: "Analytics Engine", badge: "Reporting" },
      { name: "Security Protocols", badge: "Compliance" },
      { name: "Automation Hub", badge: "Ops" },
    ],
    caseStudies: [
      {
        tag: "Enterprise",
        title: `Comprehensive ${formattedTitle} Implementation`,
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
        metric1: { value: "+45%", label: "Operational Speed" },
        metric2: { value: "3.4x", label: "Efficiency Gain" },
      },
      {
        tag: "Growth SME",
        title: "Process Modernisation & Workflow Upgrade",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
        metric1: { value: "£38k+", label: "Cost Reduction" },
        metric2: { value: "100%", label: "SLA Adherence" },
      },
      {
        tag: "Professional Services",
        title: "Turnkey Operational Scaling",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
        metric1: { value: "-50%", label: "Friction Points" },
        metric2: { value: "Zero", label: "Delivery Delay" },
      },
    ],
    faqs: [
      {
        question: `How does onboarding work for ${formattedTitle.toLowerCase()}?`,
        answer:
          "We begin with a thorough discovery session to map your current processes, define target KPIs, and introduce your named UK delivery team within 48 hours.",
      },
      {
        question: "Can we scale services as our requirements change?",
        answer:
          "Yes. Our engagements are flexible, allowing you to increase or adapt specialist capacity as your organisation evolves.",
      },
      {
        question: "How do you maintain communication and reporting?",
        answer:
          "You receive direct access to your dedicated lead via Slack/Teams, weekly progress syncs, and comprehensive monthly performance summaries.",
      },
    ],
    ctaEyebrow: `LET'S WORK ON YOUR ${formattedTitle.toUpperCase()}`,
    ctaHeading: `Ready to Grow With ${formattedTitle}?`,
    ctaSubtitle: "Talk with our team today to get a customized proposal and delivery plan.",
  };
}
