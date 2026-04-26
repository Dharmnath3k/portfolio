import { useState, useEffect } from "react";
import logoImg from "../assets/images/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navbar${scrolled ? " navbar--scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation">
      <div className="navbar__container">
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => handleNavClick(e, "#home")}
          aria-label="Dharmnath Thakur - Home">
          <img className="logo-img" src={logoImg} alt="Logo" />
        </a>

        <ul
          className={`navbar__links${menuOpen ? " navbar__links--open" : ""}`}
          role="list">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`navbar__link${activeSection === href.replace("#", "") ? " navbar__link--active" : ""}`}
                onClick={(e) => handleNavClick(e, href)}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__hamburger${menuOpen ? " navbar__hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-links">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Overlay for mobile */}
      {menuOpen && (
        <div
          className="navbar__overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
