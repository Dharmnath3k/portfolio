# Dharmnath Thakur — Portfolio

A modern, responsive portfolio website built with **React.js** and deployed on **GitHub Pages**.

🔗 **Live URL:** [https://dharmnath3k.github.io/portfolio](https://dharmnath3k.github.io/portfolio)

---

## Tech Stack

- **React 18** (Vite)
- **CSS3** with CSS custom properties
- **GitHub Pages** for hosting

## Sections

- **Home** — Hero with name, role, stats, and CTA buttons
- **About** — Bio, contact details, and quick info cards
- **Skills** — Animated progress bars for 10 skills
- **Experience** — Timeline of work history
- **Projects** — 3 featured projects with descriptions and tags
- **Services** — 6 freelance service offerings
- **Contact** — Contact form + email/WhatsApp links

## Folder Structure

```
src/
├── assets/
│   ├── css/        ← CSS reference files (active CSS lives in components/)
│   ├── js/
│   │   └── data.js ← All static content data
│   └── images/     ← Image assets
├── components/
│   ├── Navbar.jsx / Navbar.css
│   ├── Hero.jsx / Hero.css
│   ├── About.jsx / About.css
│   ├── Skills.jsx / Skills.css
│   ├── Experience.jsx / Experience.css
│   ├── Projects.jsx / Projects.css
│   ├── Services.jsx / Services.css
│   └── Contact.jsx / Contact.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deploy to GitHub Pages

```bash
# Install gh-pages (already in devDependencies)
npm install

# Deploy
npm run deploy
```

This runs `npm run build` first (predeploy), then pushes the `dist/` folder to the `gh-pages` branch.

## Contact

- **Email:** dharmnath3k@gmail.com
- **WhatsApp:** [+91 9625048880](https://wa.me/919625048880)
- **GitHub:** [github.com/Dharmnath3k](https://github.com/Dharmnath3k)
