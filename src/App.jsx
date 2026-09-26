import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const validSections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && !validSections.includes(hash)) {
      window.history.replaceState({}, '', window.location.pathname);
    }

    document.documentElement.classList.add('js-animations-ready');

    const revealItems = document.querySelectorAll(
      '.reveal, .reveal-item, .project-card, .skill-group, .education-card, .contact-row, .learning-panel, .text-mask, .project-number, .project-title, .project-description, .project-detail, .project-preview, .skill-list li',
    );

    const markVisibleIfNeeded = () => {
      revealItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
        if (isVisible) {
          item.classList.add('is-visible');
        }
      });
    };

    markVisibleIfNeeded();

    if (!('IntersectionObserver' in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;

    if (prefersReducedMotion || isTouch) {
      return undefined;
    }

    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');

    if (!cursorDot || !cursorRing) {
      return undefined;
    }

    const interactiveSelectors = 'a, button, .project-card, .skill-group, .contact-row a';

    const updateCursor = (event) => {
      cursorDot.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      cursorRing.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    };

    const handleHover = () => cursorRing.classList.add('is-hovering');
    const handleLeave = () => cursorRing.classList.remove('is-hovering');

    document.addEventListener('pointermove', updateCursor);
    document.querySelectorAll(interactiveSelectors).forEach((element) => {
      element.addEventListener('pointerenter', handleHover);
      element.addEventListener('pointerleave', handleLeave);
    });

    return () => {
      document.removeEventListener('pointermove', updateCursor);
      document.querySelectorAll(interactiveSelectors).forEach((element) => {
        element.removeEventListener('pointerenter', handleHover);
        element.removeEventListener('pointerleave', handleLeave);
      });
    };
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight * 0.45;
      let nextSection = 'home';
      let closestDistance = Number.POSITIVE_INFINITY;

      validSections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportCenter);

        if (rect.bottom > window.innerHeight * 0.18 && rect.top < window.innerHeight * 0.9 && distance < closestDistance) {
          nextSection = id;
          closestDistance = distance;
        }
      });

      if (window.scrollY < 40) {
        nextSection = 'home';
      }

      setActiveSection((current) => (current !== nextSection ? nextSection : current));
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setScrollProgress(progress);
    };

    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const handleNavigate = (id) => {
    setActiveSection(id);
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const nextHash = id === 'home' ? '' : `#${id}`;
    const target = `${window.location.pathname}${nextHash}`;
    window.history.replaceState({}, '', target);
  };

  return (
    <div className="app-shell">
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${scrollProgress})` }} />
      </div>
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />

      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
