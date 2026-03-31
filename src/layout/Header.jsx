import React from 'react'

function Header() {
  return (
    <div className = "py-4 z-2 sticky top-0 bg-[#0B0B0B]/70 border-b border-white/20 backdrop-blur-xs">
        <div className = "max-w-6xl flex items-center justify-between w-full mx-auto">
            <div>
                <h1 className = "text-xl tracking-wider font-extrabold brand-name">Ralph F<span className = "text-emerald-500">.</span></h1>
            </div>
            <div className = "flex items-center gap-8 normal-text">
                <a href="#root" className = "text-sm font-normal text-white/80 hover:text-white transition duration-300 cursor-pointer">Home</a>
                <a href="#Skills" className = "text-sm font-normal text-white/80 hover:text-white transition duration-300 cursor-pointer">Skills</a>
                <a href="#experience" className = "text-sm font-normal text-white/80 hover:text-white transition duration-300 cursor-pointer">Experience</a>
                <a href="#projects" className = "text-sm font-normal text-white/80 hover:text-white transition duration-300 cursor-pointer">Projects</a>
            </div>
        </div>
    </div>
  )
}

export default Header