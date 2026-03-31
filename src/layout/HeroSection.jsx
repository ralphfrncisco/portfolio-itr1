import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const WORDS = ['Software', 'Front-End', 'Back-End', 'Full-Stack']

const styles = `
  .hero-section {
    position: relative;
    overflow: hidden;
  }

  .orb-1 {
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%,
      rgba(16, 185, 129, 0.35) 0%,
      rgba(5, 150, 105, 0.18) 45%,
      transparent 50%
    );
    filter: blur(40px);
    animation: swim1 14s ease-in-out infinite;
    will-change: transform;
    pointer-events: none;
    z-index: 0;
  }

  .orb-2 {
    position: absolute;
    width: 520px;
    height: 520px;
    border-radius: 50%;
    background: radial-gradient(circle at 60% 55%,
      rgba(52, 211, 153, 0.30) 0%,
      rgba(16, 185, 129, 0.14) 45%,
      transparent 30%
    );
    filter: blur(50px);
    animation: swim2 18s ease-in-out infinite;
    will-change: transform;
    pointer-events: none;
    z-index: 0;
  }

  @keyframes swim1 {
    0%   { transform: translate(-30vw, -15vh) scale(1);    }
    20%  { transform: translate(-10vw,  20vh) scale(1.08); }
    40%  { transform: translate( 20vw,  10vh) scale(0.95); }
    60%  { transform: translate( 28vw, -20vh) scale(1.05); }
    80%  { transform: translate(  5vw, -25vh) scale(1.02); }
    100% { transform: translate(-30vw, -15vh) scale(1);    }
  }

  @keyframes swim2 {
    0%   { transform: translate( 25vw,  18vh) scale(1);    }
    25%  { transform: translate(  8vw, -22vh) scale(1.06); }
    50%  { transform: translate(-28vw, -12vh) scale(0.93); }
    75%  { transform: translate(-20vw,  25vh) scale(1.04); }
    100% { transform: translate( 25vw,  18vh) scale(1);    }
  }

  .hero-backdrop {
    position: absolute;
    inset: 0;
    backdrop-filter: blur(80px);
    -webkit-backdrop-filter: blur(80px);
    z-index: 0;
    pointer-events: none;
  }

  .hero-content {
    position: relative;
    z-index: 1;
  }

  .rotating-word-container {
    display: inline-block;
    overflow: hidden;
    height: 1.2em;
    vertical-align: bottom;
  }

  .rotating-word {
    display: block;
    animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .rotating-word.exit {
    animation: slideOut 0.3s cubic-bezier(0.7, 0, 0.84, 0) forwards;
  }

  @keyframes slideUp {
    from { transform: translateY(100%); opacity: 0; }
    to   { transform: translateY(0);    opacity: 1; }
  }

  @keyframes slideOut {
    from { transform: translateY(0);     opacity: 1; }
    to   { transform: translateY(-100%); opacity: 0; }
  }
`

function HeroSection() {
  const [index, setIndex] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % WORDS.length)
      setAnimKey(k => k + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <style>{styles}</style>
      <div className="hero-section flex items-center justify-center z-1">
        {/* Swimming orbs */}
        <div className="orb-1" />
        <div className="orb-2" />

        {/* Backdrop blur layer */}
        <div className="hero-backdrop" />

        <div className="hero-content justify-center items-center flex flex-col gap-4">
          <p className="text-xl text-white/70">Hello there! I'm</p>
          <p className="text-7xl font-bold">
            <span className="text-emerald-600">Ralph</span> Francisco
            <span className="text-emerald-600">.</span>
          </p>
          <p className="text-3xl flex gap-2">
            <span className="rotating-word-container">
              <span key={animKey} className="rotating-word">
                {WORDS[index]}
              </span>
            </span>
            <span className = "text-emerald-600"> Developer</span>
          </p>

          <div className = "flex items-center gap-6 mt-4 text-sm">
            <a href="#" className = "flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition duration-300"><Download className = "w-5 h-5"/> Download Resume</a>
            <a href="#" className = "flex items-center gap-2 px-6 py-3 bg-[#121212] border border-white/20 text-white/70 rounded-lg hover:bg-white/10 transition duration-300">View my Work</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection