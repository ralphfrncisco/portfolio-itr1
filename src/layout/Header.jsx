import React, { useState, useEffect } from 'react';

function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal navbar after 100px
      if (window.scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#root" },
    { name: "Skills", href: "#Skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full py-4 z-50 bg-[#0B0B0B]/70 border-b border-white/20 backdrop-blur-md transition-all duration-500 ease-in-out ${
        hasScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-6xl flex items-center justify-between w-full mx-auto px-4">

        <div className={`${hasScrolled ? 'animate-fade-down' : 'opacity-0'}`}>
          <h1 className="text-xl tracking-wide font-bold brand-name text-white">
            Ralph F<span className="text-emerald-500">.</span>
          </h1>
        </div>
        
        <nav className="flex items-center gap-8 normal-text">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              /* CRITICAL FIX: We force 'invisible' as the base state. 
                 The animation class only swaps in when hasScrolled is true.
              */
              className={`text-sm font-normal text-white/80 hover:text-white transition-colors duration-300 cursor-pointer invisible ${
                hasScrolled ? '!visible animate-fade-down' : ''
              }`}
              style={{ 
                // Delay starts AFTER the header finishes sliding down (500ms)
                animationDelay: `${500 + (index * 100)}ms`, 
                animationFillMode: 'forwards' 
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;