import React from 'react'

function Header() {
  return (
    <div className = "py-4 z-2 sticky top-0 bg-[#0B0B0B]/70 border-b border-white/20 backdrop-blur-xs">
        <div className = "max-w-6xl flex items-center justify-between w-full mx-auto">
            <div>
                <h1 className = "text-xl tracking-wider font-extrabold brand-name">Ralph F<span className = "text-emerald-500">.</span></h1>
            </div>
            <div>
                <ul className = "flex items-center gap-8 normal-text">
                    <li className = "text-sm font-normal text-white/80 hover:text-white transition duration-300 cursor-pointer">Home</li>
                    <li className = "text-sm font-normal text-white/80 hover:text-white transition duration-300 cursor-pointer">About</li>
                    <li className = "text-sm font-normal text-white/80 hover:text-white transition duration-300 cursor-pointer">Experience</li>
                    <li className = "text-sm font-normal text-white/80 hover:text-white transition duration-300 cursor-pointer">Projects</li>
                    <li className = "text-sm font-normal text-white/80 hover:text-white transition duration-300 cursor-pointer">Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header