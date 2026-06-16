export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Pricing', path: '/pricing' },
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
    name: 'Mission Engineering',
    url: 'https://missionengineering.in/',
    industry: 'Education',
    description: 'A streamlined admissions platform designed for students and parents.',
    outcome: 'Reduced friction in the enrollment process and created a more professional digital presence.',
    image: '/images/HomePage/mission-client-pic.png'
  },
  {
    name: 'Aarav Academy',
    url: 'https://aaravacademy.in/',
    industry: 'Coaching Institute',
    description: 'A modern website built to showcase programs and strengthen credibility.',
    outcome: 'Improved online trust and made it easier for prospective students to discover and contact the academy.',
    image: '/images/HomePage/aarav-client-pic.jpeg'
  }
];


export const reasons = [
  { title: 'Fast delivery', text: 'Tight process and clear milestones keep projects moving.' },
  { title: 'Modern tech stack', text: 'React, Vite, clean component systems, and practical tooling.' },
  { title: 'Responsive design', text: 'Every layout is designed to hold up on mobile first.' },
  { title: 'Affordable pricing', text: 'Flexible packages for lean teams and growing brands.' },
  { title: 'SEO Optimized', text: 'Built with search engines in mind from day one.' },
  { title: 'Ongoing Support', text: 'Reliable maintenance to keep your site fast and secure.' },
];

export const processSteps = [
  { title: 'Discovery', text: 'We map your offer, audience, and conversion goals.' },
  { title: 'Design', text: 'We shape the visual system and page flow.' },
  { title: 'Development', text: 'We build the responsive, production-ready site.' },
  { title: 'Launch', text: 'We polish, deploy, and hand over with confidence.' },
];

export const testimonials = [
  {
    quote: "Fidarix completely transformed how we handle admissions. Our Lateral Entry engineering coaching portal is now incredibly fast, responsive, and handles test series data flawlessly. Our student inquiries grew by 45% within a month of launch.",
    name: "Ranjan Shrivastav",
    role: "Director, Mission Engineering",
    image: "/images/HomePage/ranjan.png"
  },
  {
    quote: "Partnering with Fidarix was a game-changer for Aarav Academy. The UI animations are stunning, and we've doubled our digital course registrations.",
    name: "Arvind Kumar",
    role: "Founder, Aarav Academy",
    image: "/images/HomePage/arvind.png"
  }
];

export const pricingPlans = [
  {
    name: 'Starter',
    tagline: 'Fast, mobile-optimized site to build your online presence.',
    price: '₹2,999 – ₹5,999',
    delivery: '2–4 days',
    revisions: 'Basic setup',
    support: 'SSL support',
    features: [
      '5 Custom Pages',
      'Mobile-Responsive Design',
      'Core SEO & Speed Setup',
      'Contact Form & WhatsApp Link',
      'Google Maps & Social Links',
    ],
    popular: false,
    bestFor: 'Freelancers, Local shops, Small service businesses'
  },
  {
    name: 'Business',
    tagline: 'Premium UI designed to capture leads and build credibility.',
    price: '₹7,999 – ₹11,999',
    delivery: '4–7 days',
    revisions: '1 revision round',
    support: 'Analytics setup',
    features: [
      'Everything in Starter',
      '7 Pages + Custom UI Design',
      'Advanced On-Page SEO',
      'Blog or Testimonials Section',
      'Google Analytics Setup',
    ],
    popular: true,
    bestFor: 'Consultants, Real estate agents, Growing agencies'
  },
  {
    name: 'Growth',
    tagline: 'Advanced integrations to automate bookings and scale operations.',
    price: '₹12,999 – ₹15,999',
    delivery: '7–10 days',
    revisions: '2 revision rounds',
    support: '30 days support',
    features: [
      'Everything in Business',
      '10 Pages + Branding Assets',
      'Online Booking & Scheduling',
      'CRM & Email Marketing Setup',
      'Lead Generation Funnel',
    ],
    popular: false,
    bestFor: 'SaaS startups, Professional firms, Established brands'
  },
  {
    name: 'Premium',
    tagline: 'Custom e-commerce platforms and automated business portals.',
    price: '₹24,999 – ₹29,999',
    delivery: '10–14 days',
    revisions: '3 revision rounds',
    support: '60 days support',
    features: [
      'Everything in Growth',
      '15 Pages + Custom Portal',
      'E-commerce (Up to 20 Products)',
      'Custom Workflow Automation',
      'Technical SEO & Schema Setup',
    ],
    popular: false,
    bestFor: 'E-commerce brands, Tech startups, Enterprises'
  },
];

export const optionalAddOns = [
  { service: 'Additional Page', price: '₹500–₹1,000' },
  { service: 'Blog Upload (per post)', price: '₹200' },
  { service: 'Logo Design', price: '₹2,000–₹5,000' },
  { service: 'Google Business Profile Setup', price: '₹1,500' },
  { service: 'Hosting Setup', price: '₹1,000' },
  { service: 'Domain Setup', price: '₹500' },
  { service: 'Monthly Maintenance', price: '₹999–₹2,999/month' },
  { service: 'E-commerce Products Upload', price: '₹50–₹100/product' },
];

export const faqs = [
  {
    question: 'How much does a Fidarix website cost?',
    answer: 'Our pricing is customized based on the scope and requirements of your project. We offer different packages that cater to startups and enterprises alike. Contact us for a detailed quote.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'Project timelines vary depending on complexity. A standard website typically takes 2-4 weeks from start to finish, while custom web applications may require 4-8 weeks or more.',
  },
  {
    question: 'Do you handle hosting?',
    answer: 'Yes, we provide end-to-end solutions including hosting setup, server configuration, and deployment on platforms like Vercel, AWS, or your preferred provider.',
  },
  {
    question: 'How many revisions are included?',
    answer: 'We believe in collaborative design. Most of our packages include 2-3 major revision rounds during the design phase to ensure the final product perfectly aligns with your vision.',
  },
  {
    question: 'Can you improve SEO too?',
    answer: 'Absolutely. All our websites are built with technical SEO best practices in mind, including optimized metadata, fast loading speeds, and clean semantic HTML structure.',
  },
];

export const pricingFaqs = [
  {
    question: 'How long does a website take?',
    answer: 'Timeline varies by package. The Starter site takes 2–4 days, Business takes 4–7 days, Growth takes 7–10 days, and Custom/Premium builds take 10–14 days. We prioritize clean code and speed from day one.'
  },
  {
    question: 'Do I need hosting?',
    answer: 'No, we assist with hosting setup. For static websites, we can deploy them on fast platforms like Vercel or Netlify. For custom databases or e-commerce, we set up AWS, Hostinger, or your preferred provider.'
  },
  {
    question: 'Can I update content myself?',
    answer: 'Yes! All sites are built on clean component structures. If you select our Growth or Premium plans, we can also integrate an easy-to-use CMS or operational admin panel so you can make updates without writing code.'
  },
  {
    question: 'Do you provide support?',
    answer: 'Absolutely. We provide free post-launch support: SSL setup for Starter/Business, 30 days of active support for Growth, and 60 days for Premium. You can also sign up for our optional monthly maintenance packages.'
  }
];

export const aboutTimeline = [
  { year: '2024', title: 'The Genesis', text: 'Fidarix is born. We spent our early days strategizing, defining our core vision, and planning our approach to the digital space.' },
  { year: '2025', title: 'First Partnerships', text: 'We officially launched our services and successfully delivered high-end digital experiences for our first two major clients.' },
  { year: '2026', title: 'Expanding Horizons', text: 'Scaling operations and expanding our global network to establish Fidarix as the premier partner for ambitious founders.' },
];

export const founders = [
  {
    name: 'Dishi Gautam',
    role: 'Founder',
    bio: 'Driving the visual language and strategic direction of Fidarix with a focus on premium aesthetics.',
    image: '/images/AboutPage/Dishi_founder.jpeg'
  },
  {
    name: 'Yash Raj',
    role: 'Founder',
    bio: 'Architecting high-performance digital experiences and ensuring technical excellence across all builds.',
    image: '/images/AboutPage/Yash_founder.jpeg'
  }
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