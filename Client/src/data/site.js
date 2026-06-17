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

export const detailedServices = [
  { title: "Web Development", description: "Business websites, corporate websites, landing pages, and custom website solutions.", number: "01", image: "/images/services/1.jpg" },
  { title: "Web Design", description: "Modern UI/UX design, responsive layouts, and user-friendly interfaces.", number: "02", image: "/images/services/2.jpg" },
  { title: "Custom Web Applications", description: "Booking systems, dashboards, portals, management systems, and custom business tools.", number: "03", image: "/images/services/3.jpg" },
  { title: "E-Commerce Development", description: "Online stores, payment integration, inventory management, and custom ecommerce solutions.", number: "04", image: "/images/services/4.jpg" },
  { title: "SEO Optimization", description: "Technical SEO, speed optimization, analytics setup, and search visibility improvements.", number: "05", image: "/images/services/5.jpg" },
  { title: "Product Development", description: "MVPs, SaaS products, startup platforms, and scalable web solutions.", number: "06", image: "/images/services/6.jpg" },
  { title: "Maintenance & Support", description: "Website updates, security monitoring, backups, bug fixes, and ongoing support.", number: "07", image: "/images/services/7.jpg" },
];

export const optionalAddOns = [
  { service: "Additional Page", price: "₹300–₹700" },
  { service: "Blog Upload", price: "₹100/post" },
  { service: "Google Business Profile Setup", price: "₹999" },
  { service: "Hosting Setup", price: "₹500" },
  { service: "Domain Setup", price: "₹300" },
  { service: "Monthly Maintenance", price: "₹499–₹1,499/month" },
  { service: "E-Commerce Product Upload", price: "₹25–₹50/product" },
  { service: "Payment Gateway Integration", price: "₹999–₹1,999" },
  { service: "WhatsApp Integration", price: "₹299–₹799" },
  { service: "Contact Form Integration", price: "₹299–₹699" },
  { service: "Analytics Setup (GA4 & Search Console)", price: "₹499" },
  { service: "Speed Optimization", price: "₹999–₹2,499" },
  { service: "Website Migration", price: "₹999–₹2,999" },
  { service: "Security Setup", price: "₹499–₹1,499" },
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
    quote: "Fidarix completely transformed our digital presence. They built a stunning, professional website that perfectly represents our institute and has significantly boosted our online visibility. Our student inquiries grew by 45% within a month of launch.",
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

// Optional AddOns are now moved to the top of the file

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
  { label: 'info@fidarix.com', href: 'mailto:info@fidarix.com' },
  { label: '+91 87961 98381', href: 'https://wa.me/918796198381' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/fidarix/?viewAsMember=true' },
];

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/fidarix/?viewAsMember=true' },
  { label: 'X', href: 'https://x.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
];