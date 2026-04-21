import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const navLinks = [
    { name: "Home", href: "#root" },
    { name: "Skills", href: "#Skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" }
];

function Header({ onOpenMenu }) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`px-2 lg:px-0 py-2 fixed left-0 w-full z-50 transition-all duration-300 ease-out 
        ${/* Mobile: Bottom, Desktop: Top */ ''}
        bottom-0 md:bottom-auto md:top-0
        ${
          hasScrolled 
            ? 'translate-y-0 opacity-100' 
            : 'max-md:translate-y-full md:-translate-y-full opacity-0 pointer-events-none'
        }`}
    >
      <div className="w-full max-w-5xl py-2.5 px-4 rounded-full flex items-center justify-between mx-auto bg-[#0B0B0B]/70 border border-white/5 drop-shadow-lg backdrop-blur-xl">
        <div className = "ml-4">
          <h1 className="text-xl tracking-wide font-bold text-white">
            Ralph F<span className="text-emerald-500">.</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-sm font-normal text-white/90 hover:bg-white/10 hover:text-emerald-500 transition-colors duration-300 rounded-full"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <a className = "hidden md:block text-sm font-normal text-white/80 hover:text-emerald-500/80 bg-white/10 px-4 py-2 rounded-full hover:bg-white/15 transition-colors duration-300" href = "#contact">Contact</a>
        
        <button 
          onClick={onOpenMenu}
          className="p-2 border border-white/15 rounded-xl mr-2 text-white/80 hover:text-white transition-colors duration-300 md:hidden active:scale-95"
        > 
          <Menu size={18} /> 
        </button>
      </div>
    </header>
  );
}

export default Header;