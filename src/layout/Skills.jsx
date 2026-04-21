import React from 'react'
import { Code, AppWindowMac, Settings, BrainCircuit, Database, Globe } from 'lucide-react';

function Skills() {
  
  const stack = [
    { name: 'Programming Languages', icon: AppWindowMac, skills: ['Python', 'Java', 'C#', 'C++', 'JavaScript'] },
    { name: 'Web Development', icon: Code, skills: ['PHP', 'Bootstrap', 'Tailwind', 'React', 'Vite', 'Node.js'] },
    { name: 'Dev Tools', icon: Settings, skills: ['VSCode', 'XAMPP', 'Git', 'GitHub', 'Browser Dev Tools', 'Vercel'] },
    { name: 'AI Tools', icon: BrainCircuit, skills: ['Open AI', 'Gemini AI', 'Copilot', 'Claude AI'] },
    { name: 'Network', icon: Globe, skills: ['Cisco Packet Tracer', 'MikroTik WinBox'] },
    { name: 'Database', icon: Database, skills: ['MySQL', 'Supabase', 'PostGreSQL'] }
  ];

  return (
    <>
      <div className="py-28 flex items-center justify-center flex-col bg-gradient-to-tr from-[#101010] to-[#0A0A0A] cursor-default" id="Skills">
        <div className="text-center">
          <h1 className="text-3xl font-medium">Technical Skills</h1>
          <p className="text-sm mt-2 font-extralight text-white/80 text-center normal-text tracking-normal">
            Expertise across modern development stack with focus on building scalable and on-point web applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 mt-8 px-7 lg:px-4 max-w-6xl">
          {stack.map((category, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl border border-white/10 normal-text bg-[#0A0A0A]/70 backdrop-blur-xl space-y-4 pb-6
                      hover:border-white/20 hover:bg-white/1
                      transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <span><category.icon size={18} className="text-emerald-500" /></span>
                <h2 className="text-md">{category.name}</h2>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="text-xs text-white/80 bg-white/10 border border-white/5 px-3 py-1 rounded-full text-center
                               hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/20 transition-colors duration-200"
                  >
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