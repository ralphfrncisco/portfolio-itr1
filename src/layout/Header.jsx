import React, { useState, useEffect } from 'react';
import { Menu, ArrowUp } from 'lucide-react';

const navLinks = [
    { name: "Home", href: "#root" },
    { name: "Skills", href: "#Skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" }
];

function Header({ onOpenMenu }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('root');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setHasScrolled(scrollY > 20);

      const experienceSection = document.getElementById('experience');
      if (experienceSection) {
        const sectionTop = experienceSection.offsetTop;
        setShowBackToTop(scrollY >= sectionTop - 100);
      }

      if (scrollY < 100) {
        setActiveSection('root');
        return;
      }

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`py-2 px-4 tracking-tight text-[9.5pt] font-mono fixed md:hidden mx-auto left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-50 rounded-xl bg-[#0B0B0B]/80 border border-white/10 text-white/55 backdrop-blur-xl transition-all duration-300 ease-out active:scale-90 shadow-2xl ${
          showBackToTop 
            ? 'bottom-10 opacity-100 translate-y-0' 
            : 'bottom-20 opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-4.5 h-4 text-white/35" />Back to top
      </button>

      <header 
        className={`px-2 lg:px-0 py-2 fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-out bg-none
          ${
            hasScrolled 
              ? 'translate-y-0 opacity-100' 
              : 'max-md:translate-y-full md:-translate-y-full opacity-0 pointer-events-none'
          }`}
      >
        <div className="w-full max-w-3xl md:max-w-5xl py-2 px-4 rounded-full flex items-center justify-between mx-auto bg-[#0B0B0B]/70 border border-white/13 drop-shadow-lg backdrop-blur-xl">
          <div className="ml-4">
            <h1 className="text-xl tracking-wide font-bold text-white">
              Ralph F<span className="text-emerald-500">.</span>
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-normal transition-colors duration-300 rounded-full
                    ${isActive
                      ? 'text-emerald-400 font-medium'
                      : 'text-white/90 hover:text-emerald-500'
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <a className="hidden md:block text-sm font-normal text-white bg-emerald-600 px-4 py-2 rounded-full hover:bg-emerald-600/80 hover:scale-103 transition-all duration-300" href="#contact">Contact</a>
          
          <button 
            onClick={onOpenMenu}
            className="p-2 border border-white/15 rounded-xl mr-2 text-white/80 hover:text-white transition-colors duration-300 md:hidden active:scale-95"
          > 
            <Menu size={18} /> 
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;