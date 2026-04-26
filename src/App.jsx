import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} <span>Dharmnath Thakur</span>. All rights reserved.
          </p>
          <p className="footer__sub">Built with React.js &amp; ❤️</p>
        </div>
      </footer>
    </>
  );
}

export default App;
