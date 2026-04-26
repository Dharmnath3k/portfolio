// ============================================================
// data.js — All static content data for Dharmnath Thakur's portfolio
// ============================================================

export const personalInfo = {
  name: 'Dharmnath Thakur',
  role: 'Frontend Developer',
  specialization: 'React.js',
  tagline: 'Building modern, high-performance web experiences with 5+ years of expertise.',
  email: 'dharmnath3k@gmail.com',
  phone: '+91 9625048880',
  whatsapp: 'https://wa.me/919625048880',
  github: 'https://github.com/Dharmnath3k',
  resumeUrl: '#', // Replace with actual resume PDF link
  experience: '5+',
  reactExperience: '1',
  projectsDelivered: '3+',
  skillsCount: '10+',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const skills = [
  {
    name: 'React.js',
    level: 85,
    icon: '⚛️',
    color: '#61dafb',
    category: 'Framework',
  },
  {
    name: 'JavaScript (ES6+)',
    level: 90,
    icon: '🟨',
    color: '#f7df1e',
    category: 'Language',
  },
  {
    name: 'HTML5',
    level: 95,
    icon: '🌐',
    color: '#e34f26',
    category: 'Markup',
  },
  {
    name: 'CSS3',
    level: 92,
    icon: '🎨',
    color: '#264de4',
    category: 'Styling',
  },
  {
    name: 'Bootstrap',
    level: 88,
    icon: '🅱️',
    color: '#7952b3',
    category: 'Framework',
  },
  {
    name: 'Tailwind CSS',
    level: 80,
    icon: '💨',
    color: '#38bdf8',
    category: 'Framework',
  },
  {
    name: 'API Integration',
    level: 85,
    icon: '🔌',
    color: '#22c55e',
    category: 'Backend',
  },
  {
    name: 'Performance Optimization',
    level: 82,
    icon: '⚡',
    color: '#f59e0b',
    category: 'Optimization',
  },
  {
    name: 'Git',
    level: 88,
    icon: '🔀',
    color: '#f05032',
    category: 'Tool',
  },
  {
    name: 'WordPress',
    level: 85,
    icon: '📝',
    color: '#21759b',
    category: 'CMS',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Global Workforce Management System',
    description:
      'A React-based enterprise dashboard for employee task tracking, scheduling, and performance monitoring. Features real-time data visualization, role-based access control, and seamless REST API integration.',
    tags: ['React.js', 'JavaScript', 'REST API', 'Data Visualization', 'Dashboard'],
    icon: '👥',
    color: '#6366f1',
    github: 'https://github.com/Dharmnath3k',
    features: [
      'Real-time task tracking',
      'API integration',
      'Data visualization',
      'Role-based access',
    ],
  },
  {
    id: 2,
    title: 'GIS Mapping Tool',
    description:
      'An interactive real-time map interface with dynamic data layers, geospatial filtering, and performance-optimized rendering. Built for visualizing geographic data with smooth user interactions.',
    tags: ['React.js', 'GIS', 'Maps API', 'Performance Optimization', 'Real-time Data'],
    icon: '🗺️',
    color: '#22c55e',
    github: 'https://github.com/Dharmnath3k',
    features: [
      'Interactive maps',
      'Dynamic data layers',
      'Performance optimized',
      'Real-time updates',
    ],
  },
  {
    id: 3,
    title: 'Healthcare Platforms (Sitecore)',
    description:
      'Built responsive UI components and integrated APIs for patient support platforms using Sitecore CMS. Focused on accessibility, HIPAA-compliant data handling, and seamless user experience.',
    tags: ['React.js', 'Sitecore', 'API Integration', 'Responsive UI', 'Healthcare'],
    icon: '🏥',
    color: '#06b6d4',
    github: 'https://github.com/Dharmnath3k',
    features: [
      'Responsive UI',
      'API integration',
      'Accessibility',
      'CMS integration',
    ],
  },
];

export const services = [
  {
    id: 1,
    title: 'Frontend Development',
    icon: '⚛️',
    color: '#6366f1',
    description:
      'Building modern, scalable frontend applications using React.js and the latest web technologies.',
    benefits: [
      'Clean, maintainable code',
      'Component-based architecture',
      'Cross-browser compatibility',
      'Fast delivery',
    ],
  },
  {
    id: 2,
    title: 'React UI Development',
    icon: '🎨',
    color: '#8b5cf6',
    description:
      'Crafting pixel-perfect, responsive UI components and design systems that delight users.',
    benefits: [
      'Reusable components',
      'Responsive design',
      'Smooth animations',
      'Accessibility compliant',
    ],
  },
  {
    id: 3,
    title: 'Website Design & Development',
    icon: '🌐',
    color: '#06b6d4',
    description:
      'End-to-end website creation from design to deployment — modern, fast, and mobile-friendly.',
    benefits: [
      'Mobile-first approach',
      'SEO-friendly structure',
      'Fast load times',
      'Modern aesthetics',
    ],
  },
  {
    id: 4,
    title: 'API Integration',
    icon: '🔌',
    color: '#22c55e',
    description:
      'Seamlessly connecting your frontend with REST APIs, third-party services, and backend systems.',
    benefits: [
      'RESTful API integration',
      'Error handling',
      'Data transformation',
      'Real-time updates',
    ],
  },
  {
    id: 5,
    title: 'WordPress Development',
    icon: '📝',
    color: '#f59e0b',
    description:
      'Custom WordPress themes, plugins, and full website development for businesses of all sizes.',
    benefits: [
      'Custom themes',
      'Plugin development',
      'WooCommerce setup',
      'Performance tuning',
    ],
  },
  {
    id: 6,
    title: 'Performance Optimization',
    icon: '⚡',
    color: '#ef4444',
    description:
      'Auditing and optimizing web apps for speed, Core Web Vitals, and exceptional user experience.',
    benefits: [
      'Faster load times',
      'Better Core Web Vitals',
      'Code splitting',
      'Bundle optimization',
    ],
  },
];

export const experiences = [
  {
    id: 1,
    role: 'Frontend Developer (React.js)',
    duration: '1 Year',
    period: '2023 – Present',
    type: 'Full-time',
    description:
      'Built enterprise-level dashboards, GIS mapping tools, and healthcare platforms using React.js. Focused on performance optimization, API integration, and delivering pixel-perfect UIs.',
    highlights: [
      'Developed Global Workforce Management System with real-time data visualization',
      'Built interactive GIS Mapping Tool with dynamic data layers',
      'Integrated APIs for healthcare patient support platforms (Sitecore)',
      'Improved app performance through code splitting and lazy loading',
    ],
    skills: ['React.js', 'JavaScript', 'API Integration', 'Performance Optimization', 'Git'],
    icon: '⚛️',
    color: '#6366f1',
  },
  {
    id: 2,
    role: 'Frontend Developer',
    duration: '4+ Years',
    period: '2019 – 2023',
    type: 'Full-time',
    description:
      'Developed responsive websites and web applications using HTML, CSS, JavaScript, and WordPress. Delivered multiple client projects with a focus on cross-browser compatibility and mobile responsiveness.',
    highlights: [
      'Built 20+ responsive websites for various clients',
      'Developed custom WordPress themes and plugins',
      'Implemented Bootstrap and CSS frameworks for rapid UI development',
      'Collaborated with design teams to translate mockups into code',
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'WordPress', 'Git'],
    icon: '💻',
    color: '#8b5cf6',
  },
];
