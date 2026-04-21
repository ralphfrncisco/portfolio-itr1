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
          className={`absolute right-6 top-[72px] w-52 rounded-2xl py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out origin-top-right
            bg-[#0A0A0A]
            bg-gradient-to-br from-emerald-500/10 via-transparent to-emerald-900/5
            border border-emerald-500/20 border-t-emerald-400/40
            
            ${
              isMenuOpen 
                ? "opacity-100 scale-100 translate-y-0" 
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
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