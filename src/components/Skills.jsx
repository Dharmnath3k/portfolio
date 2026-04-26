import { useEffect, useRef } from 'react';

const skills = [
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

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in').forEach((el) => {
              el.classList.add('visible');
            });
            // Animate progress bars
            entry.target.querySelectorAll('.skills__bar-fill').forEach((bar) => {
              const width = bar.getAttribute('data-width');
              setTimeout(() => {
                bar.style.width = width + '%';
              }, 300);
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
    <section id="skills" className="section skills" ref={sectionRef} aria-label="Skills section">
      <div className="container">
        <h2 className="section-title fade-in">My <span>Skills</span></h2>
        <p className="section-subtitle fade-in fade-in-delay-1">
          Technologies and tools I work with
        </p>

        <div className="skills__grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`skills__card fade-in fade-in-delay-${Math.min(index % 4 + 1, 6)}`}
              role="article"
              aria-label={`${skill.name} skill`}
            >
              <div className="skills__card-header">
                <div className="skills__icon-wrap" style={{ '--skill-color': skill.color }}>
                  <span className="skills__icon" aria-hidden="true">{skill.icon}</span>
                </div>
                <div className="skills__info">
                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__category">{skill.category}</span>
                </div>
                <span className="skills__percent" style={{ color: skill.color }}>
                  {skill.level}%
                </span>
              </div>
              <div className="skills__bar" role="progressbar" aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100" aria-label={`${skill.name} proficiency: ${skill.level}%`}>
                <div
                  className="skills__bar-fill"
                  data-width={skill.level}
                  style={{ background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
