import { useEffect, useRef, useState, useCallback } from "react";
import Banner1 from "../assets/images/Banner1.png";
import Banner2 from "../assets/images/Banner2.png";
import Banner3 from "../assets/images/Banner3.png";
import Banner4 from "../assets/images/Banner4.png";
import Banner5 from "../assets/images/Banner5.png";

const slides = [
  { id: 1, src: Banner1, title: "Expert Frontend Development", description: "Building pixel-perfect, high-performance user interfaces using modern tech like React, JS, and PHP.", color: "#6366f1" },
  { id: 2, src: Banner2, title: "Fully Responsive Solutions", description: "Crafting seamless web experiences that look and work perfectly on every device—mobile, tablet, and desktop.", color: "#22c55e" },
  { id: 3, src: Banner3, title: "Creative Visual Design", description: "Transforming complex ideas into clean, engaging, and professional visual identities that stand out.", color: "#06b6d4" },
  { id: 4, src: Banner4, title: "Integrated ERP Systems", description: "Streamlining your business with custom ERP command centers, unified databases, and automated workflows.", color: "#f59e0b" },
  { id: 5, src: Banner5, title: "Unified Web Solutions", description: "Specialized in WordPress and custom-coded e-commerce platforms designed to scale your online business.", color: "#8b5cf6" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const currentRef = useRef(0);
  const animRef = useRef(null);

  // Fade in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Auto-slide
  useEffect(() => {
    const t = setInterval(() => {
      setCurrent(p => {
        const next = (p + 1) % slides.length;
        currentRef.current = next;
        return next;
      });
    }, 4000);
    return () => clearInterval(t);
  }, []);

  // Keep ref in sync
  useEffect(() => { currentRef.current = current; }, [current]);

  // Canvas — floating particles animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Particles
    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 2 + Math.random() * 4,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      opacity: 0.25 + Math.random() * 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const color = slides[currentRef.current].color;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            ctx.save();
            ctx.globalAlpha = (1 - dist / 160) * 0.25;
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Draw particles + cursor interaction
      particles.forEach(p => {
        // Move
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Cursor repel
        const cdx = p.x - mx;
        const cdy = p.y - my;
        const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
        if (cdist < 100) {
          const force = (100 - cdist) / 100;
          p.x += (cdx / cdist) * force * 2;
          p.y += (cdy / cdist) * force * 2;
        }

        // Draw dot
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Cursor glow
      if (mx > 0 && my > 0) {
        const grad = ctx.createRadialGradient(mx, my, 0, mx, my, 80);
        grad.addColorStop(0, color + "22");
        grad.addColorStop(1, "transparent");
        ctx.save();
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mx, my, 80, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  const handleMouseMove = useCallback((e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999 };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const slide = slides[current];

  return (
    <section
      id="home"
      className="hero"
      aria-label="Hero section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__blob hero__blob--1"></div>
        <div className="hero__blob hero__blob--2"></div>
        <div className="hero__blob hero__blob--3"></div>
      </div>
      <div className="hero__grid-overlay" aria-hidden="true"></div>

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />

      <div className="hero__inner container">

        {/* LEFT */}
        <div className={`hero__content${visible ? " hero__content--visible" : ""}`}>

          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Available for Freelance
          </div>

          <h1 className="hero__name">
            Dharmnath<br /><span>Thakur</span>
          </h1>

          <p className="hero__role">
            Frontend Developer
            <span className="hero__role-separator"> | </span>
            React.js
          </p>

          {/* Slide title + description */}
          <div className="hero__slide-text">
            <h2 className="hero__slide-title" style={{ color: slide.color }}>
              {slide.title}
            </h2>
            <p className="hero__slide-desc">{slide.description}</p>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">5+</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">50+</span>
              <span className="hero__stat-label">Projects Delivered</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">10+</span>
              <span className="hero__stat-label">Skills Mastered</span>
            </div>
          </div>

          <div className="hero__actions">
            <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              View Projects
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo("contact")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              Hire Me
            </button>
          </div>

          <div className="hero__social">
            <a href="https://github.com/Dharmnath3k" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="mailto:dharmnath3k@gmail.com" className="hero__social-link" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <a href="https://wa.me/919625048880" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>

        {/* RIGHT — circular slider */}
        <div className="hero__slider">
          <div className="hero__slider-frame">
            {slides.map((s, i) => (
              <div
                key={s.id}
                className={`hero__slide${i === current ? " hero__slide--active" : ""}`}
                style={{ "--slide-color": s.color }}
              >
                <img src={s.src} alt={s.title} className="hero__slide-img" />
              </div>
            ))}
            <div className="hero__slider-ring" style={{ "--slide-color": slide.color }} />
          </div>

          <div className="hero__slider-dots">
            {slides.map((s, i) => (
              <button
                key={i}
                className={`hero__slider-dot${i === current ? " hero__slider-dot--active" : ""}`}
                style={i === current ? { background: s.color, boxShadow: `0 0 8px ${s.color}` } : {}}
                onClick={() => { setCurrent(i); currentRef.current = i; }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-mouse"><div className="hero__scroll-wheel"></div></div>
        <span>Scroll down</span>
      </div>
    </section>
  );
}
