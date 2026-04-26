import { useEffect, useRef } from 'react';

const experiences = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Indegene Pvt Ltd',
    duration: '1 Year',
    period: 'Jan 2025 – Nov 2025',
    location: 'Bangalore',
    type: 'Full-time',
    description:
      'Developed high-performance web apps for Sitecore-based healthcare projects, ensuring 100% responsive design and cross-browser compatibility.',
    highlights: [
      'Developed high-performance web apps for Sitecore-based healthcare projects with 100% responsive design and cross-browser compatibility',
      'Engineered reusable React UI components, reducing development time and maintaining a scalable codebase following industry best practices',
      'Integrated RESTful APIs for dynamic data rendering, significantly enhancing application speed and user interactivity',
    ],
    skills: ['React.js', 'Sitecore', 'REST API', 'JavaScript', 'Responsive Design', 'Git'],
    icon: '⚛️',
    color: '#6366f1',
  },
  {
    id: 2,
    role: 'Associate Web Developer',
    company: 'AriesPro Technology Services',
    duration: '3 Years',
    period: 'May 2021 – May 2024',
    location: 'Chandigarh',
    type: 'Full-time',
    description:
      'Developed scalable React.js applications using Hooks, Redux, and Context API to manage complex state and enhance interactivity.',
    highlights: [
      'Developed scalable React.js applications using Hooks, Redux, and Context API for complex state management',
      'Integrated RESTful APIs with Axios for asynchronous data fetching and real-time data synchronization',
      'Optimized performance via Lazy Loading and Code Splitting, significantly improving initial load times and responsiveness',
    ],
    skills: ['React.js', 'Redux', 'Context API', 'Axios', 'JavaScript', 'Lazy Loading'],
    icon: '💻',
    color: '#8b5cf6',
  },
  {
    id: 3,
    role: 'WordPress Developer',
    company: 'Om Soft Solution',
    duration: '1 Year',
    period: 'Mar 2020 – Apr 2021',
    location: 'Faridabad',
    type: 'Full-time',
    description:
      'Built responsive websites using HTML, CSS, JS, and Bootstrap. WordPress expert with custom themes and professional page building via Elementor.',
    highlights: [
      'Built responsive, mobile-friendly websites using HTML, CSS, JavaScript, and Bootstrap',
      'Developed custom WordPress themes and professional page layouts using Elementor',
      'Enhanced UI/UX through design collaboration for high-quality web solutions',
    ],
    skills: ['WordPress', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Elementor'],
    icon: '🌐',
    color: '#06b6d4',
  },
];

export default function Experience() {
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
    <section id="experience" className="section experience" ref={sectionRef} aria-label="Experience section">
      <div className="container">
        <h2 className="section-title fade-in">Work <span>Experience</span></h2>
        <p className="section-subtitle fade-in fade-in-delay-1">
          My professional journey so far
        </p>

        <div className="experience__timeline" role="list">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`experience__item fade-in fade-in-delay-${index + 1}`}
              role="listitem"
            >
              {/* Timeline dot */}
              <div className="experience__dot" style={{ '--exp-color': exp.color }} aria-hidden="true">
                <span>{exp.icon}</span>
              </div>

              {/* Card */}
              <div className="experience__card">
                <div className="experience__card-header">
                  <div className="experience__title-group">
                    <h3 className="experience__role">{exp.role}</h3>
                    <p className="experience__company">{exp.company} — {exp.location}</p>
                    <div className="experience__meta">
                      <span className="experience__duration">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        {exp.duration}
                      </span>
                      <span className="experience__period">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        {exp.period}
                      </span>
                      <span className="experience__type">{exp.type}</span>
                    </div>
                  </div>
                </div>

                <p className="experience__description">{exp.description}</p>

                <ul className="experience__highlights" aria-label="Key achievements">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="experience__highlight">
                      <span className="experience__highlight-dot" style={{ background: exp.color }} aria-hidden="true"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="experience__skills" aria-label="Technologies used">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="experience__skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
