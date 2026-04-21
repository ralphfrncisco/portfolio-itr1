import React, { useState } from 'react';
import './App.css'
import Header from './layout/Header.jsx'
import HeroSection from './layout/HeroSection.jsx'
import Skills from './layout/Skills.jsx'
import Experience from './layout/Experience.jsx'
import Projects from './layout/Projects.jsx'
import Contact from './layout/Contact.jsx'
import Footer from './layout/Footer.jsx'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "#root" },
    { name: "Skills", href: "#Skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <div className="relative bg-[#050505]">
      <Header onOpenMenu={() => setIsMenuOpen(!isMenuOpen)} navLinks={navLinks} />
      
      {/* Dark Emerald Liquid Glass Dropdown */}
      <div className={`fixed inset-0 z-[100] md:hidden ${isMenuOpen ? "visible" : "invisible"}`}>
        <div className="absolute inset-0" onClick={() => setIsMenuOpen(false)} />
        <div 
          className={`absolute right-6 w-38 rounded-2xl py-3 transition-all duration-300 ease-out border border-white/10
            bg-[#0A0A0A]
            ${/* Position dropdown above the bottom header on mobile */ ''}
            bottom-[72px] md:top-[72px] md:bottom-auto
            ${
              isMenuOpen 
                ? "opacity-100 scale-100 translate-y-0" 
                : "opacity-0 scale-95 max-md:translate-y-2 md:-translate-y-2 pointer-events-none"
            }`}
        >
          <nav className="flex flex-col gap-1 px-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-white/80 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all rounded-xl"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <HeroSection />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;