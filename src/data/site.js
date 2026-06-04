export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export const homeStats = [
  { value: '120+', label: 'projects completed' },
  { value: '45+', label: 'clients served' },
  { value: '8 yrs', label: 'combined experience' },
  { value: '24h', label: 'average response time' },
];

export const services = [
  {
    title: 'Web Development',
    subtitle: 'High-conversion sites built on a modern stack.',
    price: 'From $1,500',
    timeline: '2-4 weeks',
    features: ['Marketing sites', 'Landing pages', 'Custom React builds'],
  },
  {
    title: 'UI/UX Design',
    subtitle: 'Clear information architecture and bold visual systems.',
    price: 'From $900',
    timeline: '1-2 weeks',
    features: ['Wireframes', 'Design systems', 'Prototype handoff'],
  },
  {
    title: 'SEO Optimization',
    subtitle: 'Technical foundations that help pages rank and convert.',
    price: 'From $600',
    timeline: '1 week',
    features: ['Keyword mapping', 'On-page SEO', 'Performance fixes'],
  },
  {
    title: 'Branding',
    subtitle: 'Identity systems that feel premium, memorable, and consistent.',
    price: 'From $800',
    timeline: '1-2 weeks',
    features: ['Logo polish', 'Color systems', 'Brand guidelines'],
  },
  {
    title: 'Website Maintenance',
    subtitle: 'Ongoing care for updates, improvements, and uptime.',
    price: 'From $250/mo',
    timeline: 'Monthly',
    features: ['Updates', 'Fixes', 'Backup support'],
  },
  {
    title: 'Custom Web Apps',
    subtitle: 'Operational tools and dashboards tailored to your workflows.',
    price: 'Custom quote',
    timeline: '4-8 weeks',
    features: ['Dashboards', 'Automation', 'API integrations'],
  },
];

export const projects = [
  {
    name: 'Northstar Studio',
    industry: 'Creative agency',
    stack: 'React, Vite, Framer, Sanity',
    problem: 'Needed a premium site that made services feel more valuable.',
    result: 'Raised qualified leads by 38% after launch.',
  },
  {
    name: 'Harbor Clinic',
    industry: 'Healthcare',
    stack: 'Next.js, Tailwind, HubSpot',
    problem: 'They were losing bookings because the enquiry journey was unclear.',
    result: 'Reduced abandonment and doubled booking requests.',
  },
  {
    name: 'Vertex Supply',
    industry: 'B2B ecommerce',
    stack: 'React, CommerceTools, SEO',
    problem: 'Catalog pages were slow and not ranking for key terms.',
    result: 'Improved Core Web Vitals and boosted organic traffic.',
  },
  {
    name: 'Luma Finance',
    industry: 'Fintech',
    stack: 'Design system, Motion, Analytics',
    problem: 'Brand lacked trust signals for high-value prospects.',
    result: 'Increased demo bookings with a clearer narrative.',
  },
];

export const reasons = [
  { title: 'Fast delivery', text: 'Tight process and clear milestones keep projects moving.' },
  { title: 'Modern tech stack', text: 'React, Vite, clean component systems, and practical tooling.' },
  { title: 'Responsive design', text: 'Every layout is designed to hold up on mobile first.' },
  { title: 'Affordable pricing', text: 'Flexible packages for lean teams and growing brands.' },
];

export const processSteps = [
  { title: 'Discovery', text: 'We map your offer, audience, and conversion goals.' },
  { title: 'Design', text: 'We shape the visual system and page flow.' },
  { title: 'Development', text: 'We build the responsive, production-ready site.' },
  { title: 'Launch', text: 'We polish, deploy, and hand over with confidence.' },
];

export const testimonials = [
  {
    quote: 'The site finally feels like the brand we wanted to become.',
    name: 'Aarav Mehta',
    role: 'Founder, Northstar Studio',
  },
  {
    quote: 'We got a cleaner process, clearer messaging, and better inquiries.',
    name: 'Mira Shah',
    role: 'Operations Lead, Harbor Clinic',
  },
  {
    quote: 'Fidarix made the whole experience easy and the results visible.',
    name: 'Daniel Cruz',
    role: 'Director, Vertex Supply',
  },
];

export const pricingPlans = [
  {
    name: 'Starter',
    tagline: 'Entry Level Package',
    price: '$199.99',
    delivery: '5-7 days',
    revisions: '2 rounds',
    support: 'Basic hosting setup',
    features: [
      '5 Web Pages',
      '1 Custom Design',
      'Mobile Responsive',
      'Professional Layout',
      'Pre-Written Content',
      'Up to 10 Photos Integrated',
      'One Custom Email ID',
      'Contact Form & Google Maps',
      'Technical Support',
    ],
    popular: false,
  },
  {
    name: 'Basic',
    tagline: 'Business Startup Package',
    price: '$399.99',
    delivery: '10-14 days',
    revisions: '3 rounds',
    support: 'Hosting setup + support',
    features: [
      '15 Web Pages',
      '2 Custom Designs',
      'Mobile Responsive',
      'Professional Layout',
      'Pre-Written Content',
      'Up to 20 Photos Integrated',
      'Video & Social Media Integration',
      '3 Custom Email IDs',
      'Contact Form & Google Maps',
      'Search Engine Submission',
      'Technical Support',
    ],
    popular: true,
  },
  {
    name: 'Advanced',
    tagline: 'Custom Static Package',
    price: '$599.99',
    delivery: '2-3 weeks',
    revisions: '5 rounds',
    support: 'Priority support & setup',
    features: [
      '25 Web Pages',
      '3 Custom Designs',
      'Mobile Responsive',
      'Professional Layout',
      'Content integration',
      'Up to 50 Photos Integrated',
      'Video & Social Media Integration',
      '5 Custom Email IDs',
      'Contact Form & Google Maps',
      'Search Engine Submission',
      'Technical Support',
    ],
    popular: false,
  },
  {
    name: 'Ultimate',
    tagline: 'Custom Dynamic + Static Package',
    price: '$799.99',
    delivery: '3-4 weeks',
    revisions: 'Unlimited rounds',
    support: '1 month free maintenance',
    features: [
      'Up to 60 Web Pages',
      '4 Custom Designs',
      'Mobile Responsive',
      'Professional Layout',
      'Content integration',
      'Up to 150 Photos Integrated',
      'Video & Social Media Integration',
      '10 Custom Email IDs',
      'Contact Form & Google Maps',
      'Search Engine Submission',
      'Technical Support',
    ],
    popular: false,
  },
];

export const faqs = [
  {
    question: 'How much does a Fidarix website cost?',
    answer: 'Pricing depends on scope, but most projects start with a clear package and optional add-ons.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'A simple launch site can be done in about 10 days; larger builds usually take 2-6 weeks.',
  },
  {
    question: 'Do you handle hosting?',
    answer: 'Yes, we guide setup and can support hosting and deployment handoff.',
  },
  {
    question: 'How many revisions are included?',
    answer: 'Each package includes a revision allowance, with premium plans offering more flexibility.',
  },
  {
    question: 'Can you improve SEO too?',
    answer: 'Yes, SEO structure, metadata, speed, and content guidance are part of the workflow.',
  },
];

export const aboutTimeline = [
  { year: '2018', title: 'Agency foundation', text: 'We started designing and building for small businesses.' },
  { year: '2020', title: 'Systems focus', text: 'We moved toward repeatable, component-driven builds.' },
  { year: '2023', title: 'Conversion strategy', text: 'More emphasis on messaging, speed, and lead generation.' },
  { year: '2026', title: 'Fidarix rebrand', text: 'A sharper visual system for premium digital experiences.' },
];

export const founders = [
  { 
    name: 'Dishi Gautam', 
    role: 'Co-founder',
    bio: 'Driving the visual language and strategic direction of Fidarix with a focus on premium aesthetics.',
    image: '/images/dishi.png'
  },
  { 
    name: 'Yash Raj', 
    role: 'Co-founder',
    bio: 'Architecting high-performance digital experiences and ensuring technical excellence across all builds.',
    image: '/images/yash.png'
  },
];

export const team = [
  { name: 'Strategy', role: 'Positioning and offer clarity' },
  { name: 'Design', role: 'Layouts, systems, and visual polish' },
  { name: 'Build', role: 'React development and performance' },
];

export const techStack = ['React', 'Vite', 'Lenis', 'Lucide', 'Semantic HTML', 'Modern CSS'];

export const blogPosts = [
  {
    title: 'Best Website Trends in 2026',
    excerpt: 'What clients expect from premium business websites this year.',
    category: 'Design',
  },
  {
    title: 'Why Every Business Needs a Website',
    excerpt: 'A strong website still does the heavy lifting for trust and conversion.',
    category: 'Strategy',
  },
  {
    title: 'React vs WordPress',
    excerpt: 'A practical comparison for teams planning their next build.',
    category: 'Development',
  },
  {
    title: 'How Fast Websites Increase Sales',
    excerpt: 'Speed affects bounce rate, trust, and the quality of enquiries.',
    category: 'Performance',
  },
  {
    title: 'How to Write Better CTA Copy',
    excerpt: 'Simple patterns that make calls to action feel clearer and stronger.',
    category: 'Copywriting',
  },
  {
    title: 'SEO Basics for Service Brands',
    excerpt: 'A checklist for pages that need steady organic traffic.',
    category: 'SEO',
  },
];

export const contactLinks = [
  { label: 'hello@fidarix.com', href: 'mailto:hello@fidarix.com' },
  { label: '+1 (555) 014-9900', href: 'https://wa.me/15550149900' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
];

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'X', href: 'https://x.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
];