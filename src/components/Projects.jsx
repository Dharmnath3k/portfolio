import { useEffect, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'Amgen Patient Services (Belgium)',
    description:
      'Patient support platform for Amgen Belgium built on Sitecore CMS. Developed responsive UI components, integrated healthcare APIs, and ensured WCAG accessibility compliance for patient-facing features.',
    tags: ['Sitecore', 'JavaScript', 'HTML5', 'CSS3', 'API Integration', 'Responsive UI'],
    icon: '🏥',
    color: '#6366f1',
    liveLink: 'https://www.amgenpatientservices.be/',
    features: ['Responsive design', 'API integration', 'Accessibility (WCAG)', 'CMS integration'],
  },
  {
    id: 2,
    title: 'Doctor Amgen (Italy)',
    description:
      'Healthcare professional platform for Amgen Italy. Built interactive UI components and integrated medical content APIs using Sitecore CMS with multi-language support.',
    tags: ['Sitecore', 'JavaScript', 'CSS3', 'Multi-language', 'Healthcare'],
    icon: '👨‍⚕️',
    color: '#06b6d4',
    liveLink: 'https://www.doctoramgen.it/',
    features: ['Multi-language support', 'HCP portal', 'CMS integration', 'Responsive UI'],
  },
  {
    id: 3,
    title: 'Mitt Kolesterol (Norway)',
    description:
      'Patient cholesterol management platform for Norway. Developed frontend UI with dynamic content rendering, form integrations, and performance-optimized page loads.',
    tags: ['Sitecore', 'JavaScript', 'HTML5', 'CSS3', 'Performance Optimization'],
    icon: '❤️',
    color: '#ef4444',
    liveLink: 'https://www.mittkolesterol.no/',
    features: ['Dynamic content', 'Form integration', 'Performance optimized', 'Mobile responsive'],
  },
  {
    id: 4,
    title: 'Amgen Pro (Netherlands)',
    description:
      'Healthcare professional portal for Amgen Netherlands. Built reusable UI components, integrated REST APIs for medical data, and implemented responsive layouts across all devices.',
    tags: ['Sitecore', 'JavaScript', 'REST API', 'CSS3', 'Healthcare'],
    icon: '🩺',
    color: '#22c55e',
    liveLink: 'https://www.amgenpro.nl/',
    features: ['HCP portal', 'REST API integration', 'Reusable components', 'Cross-browser support'],
  },
  {
    id: 5,
    title: 'MyUplizna (Canada)',
    description:
      'Patient support program website for Uplizna (inebilizumab) in Canada. Developed accessible, responsive UI with Sitecore CMS integration and bilingual (EN/FR) content support.',
    tags: ['Sitecore', 'React.js', 'CSS3', 'Bilingual', 'Accessibility', 'Healthcare'],
    icon: '💊',
    color: '#f59e0b',
    liveLink: 'https://www.myuplizna.ca/en/',
    features: ['Bilingual (EN/FR)', 'Accessibility compliant', 'Patient support', 'CMS integration'],
  },
];

export default function Projects() {
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

  return (
    <section id="projects" className="section projects" ref={sectionRef} aria-label="Projects section">
      <div className="container">
        <h2 className="section-title fade-in">Featured <span>Projects</span></h2>
        <p className="section-subtitle fade-in fade-in-delay-1">
          Some of the work I'm proud of
        </p>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`projects__card fade-in fade-in-delay-${index + 1}`}
              aria-label={project.title}
            >
              {/* Card top accent */}
              <div
                className="projects__card-accent"
                style={{ background: `linear-gradient(135deg, ${project.color}33, ${project.color}11)` }}
                aria-hidden="true"
              ></div>

              <div className="projects__card-body">
                {/* Header */}
                <div className="projects__card-header">
                  <div
                    className="projects__icon"
                    style={{ '--proj-color': project.color }}
                    aria-hidden="true"
                  >
                    {project.icon}
                  </div>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__github-link"
                    aria-label={`View ${project.title} live`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Site
                  </a>
                </div>

                {/* Title & Description */}
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__description">{project.description}</p>

                {/* Features */}
                <ul className="projects__features" aria-label="Key features">
                  {project.features.map((feature) => (
                    <li key={feature} className="projects__feature">
                      <span style={{ color: project.color }} aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="projects__tags" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="projects__tag"
                      style={{ '--tag-color': project.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects__cta fade-in">
          <p>Want to see more of my work?</p>
          <a
            href="https://github.com/Dharmnath3k"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            aria-label="View all projects on GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
