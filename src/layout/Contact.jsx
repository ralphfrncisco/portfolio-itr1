import React, { useState, useEffect, useRef } from 'react';
// import {LinkedIn} from 'lucide-react';
import profileImage from '../assets/images/profile-image.jpg';

function Contact() {
  const fullText = "I am currently working on small projects that helps small businesses by transitioning from manual tasks into efficient, scalable solutions.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTypingStarted, setIsTypingStarted] = useState(false);
  const sectionRef = useRef(null);

  // 1. Observer to detect when the section is actually in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // threshold 0.5 means start when half the component is visible
        if (entry.isIntersecting) {
          setIsTypingStarted(true);
        }
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. Typing effect logic - now dependent on isTypingStarted
  useEffect(() => {
    if (isTypingStarted && index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 35); 
      return () => clearTimeout(timeout);
    }
  }, [index, fullText, isTypingStarted]);

  return (
    <>
        <div 
          ref={sectionRef} 
          className="py-20 px-2 flex items-center justify-center flex-row bg-[#0A0A0A] gap-5" 
          id="experience"
        >
            <div className="pl-7 px-6 py-6 flex flex-row gap-5 border border-white/10 rounded-lg">
              <div><img src={profileImage} className="flex-1 w-30 h-30 rounded-xl shadow-md shadow-[#1e1e1e]/50" alt="profile"/></div>
              <div className="flex flex-col items-start">

                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-white">
                      Ralph Francisco
                    </h3>
                    <span className="flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                  </div>

                  <div className="flex items-center flex-wrap space-x-[0.2rem]">
                    <a href="#" target="_blank" className="hover:bg-white/5 p-1.5 rounded-full text-white/70">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    </a>
                    <a href="#" target="_blank" className="text-xl text-blue-500/80 hover:text-blue-500 transition-colors"> 
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>

                <span className="text-xs text-white/90 font-light font-mono">Full-Stack Developer</span>
                
                <p className="text-sm leading-snug w-[430px] text-white/90 normal-text mt-4 py-4 px-5 bg-white/6 rounded-b-3xl rounded-tr-3xl rounded-tl-xs min-h-[100px]">
                  {displayedText}
                  {/* The cursor only shows once typing has started */}
                  {isTypingStarted && (
                    <span className="inline-block w-[1px] h-[15px] mt-[-5px] bg-emerald-500 ml-1 animate-pulse align-middle"></span>
                  )}
                </p>
              </div>
            </div>
            
            <div className="flex-1 py-10 px-6 rounded-lg border border-white/10">
              <div className = "flex items-center justify-center">
                <h1 className='text-xl font-semibold'>Let's work together!</h1>
              </div>
              <form className="p-4">
                <div className="flex flex-col normal-text text-white/80">
                  <label className="mb-1 text-sm">Name</label>
                  <input 
                    type="text" 
                    className="w-full text-sm text-slate-200 px-3 py-1.5 h-8 rounded-lg border border-white/5 bg-[#1E1E1E] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                  />
                </div>
              </form>
            </div>
        </div>
    </>
  )
}

export default Contact;