import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

function Header({ onOpenMenu, navLinks }) {
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
      className={`fixed top-0 left-0 w-full py-4 z-50 bg-[#0B0B0B]/70 border-b border-white/20 backdrop-blur-md transition-all duration-300 ease-out ${
        hasScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-6xl flex items-center justify-between w-full mx-auto px-7 lg:px-4">
        <div>
          <h1 className="text-xl tracking-wide font-bold text-white">
            Ralph F<span className="text-emerald-500">.</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-normal text-white/80 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <button 
          onClick={onOpenMenu}
          className="p-2 border border-white/15 rounded-lg text-white/80 hover:text-white transition-colors duration-300 md:hidden active:scale-95"
        > 
          <Menu size={18} /> 
        </button>
      </div>
    </header>
  );
}

export default Header;