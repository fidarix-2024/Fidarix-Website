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
    industry: 'Education & Coaching',
    stack: 'React, Vite, CSS Modules, REST APIs',
    problem: 'Needed a scalable coaching portal to manage Lateral Entry registrations, mock tests, and digital announcements for Delhi polytechnic students.',
    result: 'Redesigned their technical infrastructure, boosting page loads to 98% and driving a 45% increase in online student admissions.',
    image: '/images/HomePage/mission-client-pic.png'
  },
  {
    name: 'Aarav Academy',
    url: 'https://aaravacademy.in/',
    industry: '9th-12th Coaching',
    stack: 'Vite, React Router, Custom Keyframe Motion',
    problem: 'Lacked a high-end web identity to capture digital course inquiries, distribute test scores, and match their premium classroom tutoring standards.',
    result: 'Constructed a responsive, conversion-focused landing experience that doubled digital admissions inquiries in 30 days.',
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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80"
  },
  {
    quote: "Partnering with Fidarix was a game-changer for Aarav Academy. The UI animations are stunning, and we've doubled our digital course registrations.",
    name: "Arvind Kumar",
    role: "Founder, Aarav Academy",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80"
  }
];

export const pricingPlans = [
  {
    name: 'Starter',
    tagline: 'Perfect for individuals and small businesses looking to establish an online presence.',
    price: '₹3,999 – ₹6,999',
    delivery: '2–4 days',
    revisions: 'Basic setup',
    support: 'SSL setup guidance',
    features: [
      'Up to 5 custom-designed pages',
      'Home, About, Services, Gallery/Portfolio, Contact',
      'Mobile-responsive design',
      'Basic SEO setup',
      'Contact form & WhatsApp integration',
      'Google Maps & Social media links',
      'SSL setup guidance',
      'Basic speed optimization',
    ],
    popular: false,
    bestFor: 'Freelancers, Local shops, Coaches, Tutors, Small service businesses'
  },
  {
    name: 'Business',
    tagline: 'For businesses that need a stronger online presence and better lead generation.',
    price: '₹7,999 – ₹11,999',
    delivery: '4–7 days',
    revisions: '1 round of revisions',
    support: 'Google Analytics & Search Console setup',
    features: [
      'Everything in Starter included',
      'Up to 7 custom pages',
      'Custom UI design',
      'Advanced contact & inquiry forms',
      'Blog setup',
      'Testimonials & FAQ section',
      'Google Analytics & Console setup',
      'On-page SEO optimization',
      'Lead capture forms',
      'Performance optimization',
    ],
    popular: true,
    bestFor: 'Consultants, Real estate agents, Clinics, Gyms, Restaurants, Growing businesses'
  },
  {
    name: 'Growth',
    tagline: 'Built for businesses ready to scale and generate consistent leads online.',
    price: '₹12,999 – ₹15,999',
    delivery: '7–10 days',
    revisions: '2 rounds of revisions',
    support: '30 days priority support',
    features: [
      'Everything in Business included',
      'Up to 10 pages',
      'Premium custom design',
      'Brand color & typography setup',
      'Landing page optimization',
      'Blog & content structure setup',
      'Advanced SEO setup',
      'Lead generation funnel setup',
      'Email capture & CRM integration (if required)',
      'Booking / Appointment system',
      'Analytics dashboard setup',
    ],
    popular: false,
    bestFor: 'Established businesses, Coaches, SaaS startups, Professional services'
  },
  {
    name: 'Premium',
    tagline: 'A complete business growth package with advanced functionality and automation.',
    price: '₹24,999 – ₹29,999',
    delivery: '10–14 days',
    revisions: '3 rounds of revisions',
    support: '60 days priority support',
    features: [
      'Everything in Growth included',
      'Up to 15 pages',
      'Fully custom premium design',
      'Conversion-focused UX',
      'Multiple landing pages',
      'Advanced forms & workflows',
      'CRM & automation integration',
      'Email marketing integration',
      'Advanced booking system',
      'Membership or basic client portal',
      'E-commerce setup (up to 20 products) OR custom business functionality',
      'Technical SEO & Schema markup',
      'Performance optimization & Security hardening',
    ],
    popular: false,
    bestFor: 'Multi-location businesses, Startups, E-commerce brands, Scaling businesses'
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