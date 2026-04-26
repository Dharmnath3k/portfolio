import { useEffect, useRef } from 'react';

const services = [
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

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section services" ref={sectionRef} aria-label="Services section">
      <div className="container">
        <h2 className="section-title fade-in">My <span>Services</span></h2>
        <p className="section-subtitle fade-in fade-in-delay-1">
          What I can do for you — freelance & contract work
        </p>

        <div className="services__grid">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`services__card fade-in fade-in-delay-${Math.min(index % 3 + 1, 6)}`}
              aria-label={service.title}
            >
              <div
                className="services__icon-wrap"
                style={{ '--svc-color': service.color }}
                aria-hidden="true"
              >
                <span className="services__icon">{service.icon}</span>
              </div>

              <h3 className="services__title">{service.title}</h3>
              <p className="services__description">{service.description}</p>

              <ul className="services__benefits" aria-label="Benefits">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="services__benefit">
                    <span
                      className="services__benefit-check"
                      style={{ color: service.color }}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <button
                className="services__cta-btn"
                style={{ '--svc-color': service.color }}
                onClick={scrollToContact}
                aria-label={`Get started with ${service.title}`}
              >
                Get Started
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </article>
          ))}
        </div>

        <div className="services__bottom fade-in">
          <div className="services__bottom-text">
            <h3>Ready to start a project?</h3>
            <p>Let's discuss your requirements and build something great together.</p>
          </div>
          <button className="btn btn-primary" onClick={scrollToContact} aria-label="Contact me to start a project">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
}
