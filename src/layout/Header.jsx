import React, { useState, useEffect } from 'react';

function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
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
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full py-4 z-50 bg-[#0B0B0B]/70 border-b border-white/20 backdrop-blur-md transition-all duration-300 ease-out ${
        hasScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
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
              /* FIX: Removed 'invisible' and '!visible'.
                 Used 'opacity-0' and 'pointer-events-none' instead.
              */
              className={`text-sm font-normal text-white/80 hover:text-white transition-colors duration-300 cursor-pointer ${
                hasScrolled 
                  ? 'pointer-events-auto' 
                  : 'opacity-0 pointer-events-none'
              }`}
              style={{ 
                animationDelay: `${300 + (index * 200)}ms`, 
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