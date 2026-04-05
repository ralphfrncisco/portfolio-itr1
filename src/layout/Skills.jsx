import React from 'react'
import { Code, AppWindowMac, Settings, BrainCircuit, Database, Globe } from 'lucide-react';

function Skills() {
  
  const stack =
  [
    { name: 'Programming Languages', icon: AppWindowMac, skills: ['Python', 'Java', 'C#', 'C++', 'JavaScript'] },
    { name: 'Web Development', icon: Code, skills: ['PHP', 'Bootstrap', 'Tailwind', 'React', 'Vite', 'Node.js'] },
    { name: 'Dev Tools', icon: Settings, skills: ['VSCode', 'XAMPP', 'Git', 'GitHub', 'Browser Dev Tools', 'Vercel'] },
    { name: 'AI Tools', icon: BrainCircuit, skills: ['Open AI', 'Gemini AI', 'Copilot', 'Claude AI'] },
    { name: 'Network', icon: Globe, skills: ['Cisco Packet Tracer', 'MikroTik WinBox'] },
    { name: 'Database', icon: Database, skills: ['MySQL', 'Supabase', 'PostGreSQL'] }
  ];

  return (
    <>
      <div className = "py-28 flex items-center justify-center flex-col" id = "Skills">
        <div className = "text-center">
          <h1 className = "text-3xl font-medium">Technical Skills</h1>
          <p className = "text-sm mt-2 font-extralight text-white/80 text-center normal-text tracking-normal">Expertise across modern development stack with focus on building scalable and on-point web applications.</p>
        </div>
        <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 max-w-6xl">
          {stack.map((category, index) => (
            <div key={index} className = "p-4 rounded-xl border border-white/20 normal-text bg-[#0A0A0A] space-y-4 pb-5 hover:bg-[#0B0B0B]/50 transition duration-300">
              <div className = "flex items-center gap-2">
                <span><category.icon size = {18} className = "text-emerald-500"/></span>
                <h2 className = "text-md">{category.name}</h2>
              </div>
              <div className = "flex flex-wrap items-center gap-2 mt-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className = "text-xs mt-1 text-white bg-white/10 px-3 py-1 rounded-lg text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills;