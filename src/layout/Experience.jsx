import React from 'react'
import { Briefcase, Calendar } from 'lucide-react';

const Experiences = [
  {
    title: 'Full-Stack Developer',
    company: 'Freelance',
    duration: 'Dec 2025 - Present',
    responsibilities: [
      'Designed, developed, and deployed full-stack web applications for clients, handling both front-end and back-end architecture.',
      'Collaborated directly with clients to gather requirements, deliver iterative updates, and ensure the final product met business needs.'
    ]
  },
  {
    title: 'NOC Intern',
    company: 'Tech2Go Network Innovations',
    duration: 'Jan 2025 - April 2025',
    responsibilities: [
      'Assisted in troubleshooting and maintaining various devices, including access points, printers, PCs, routers, and switches.',
      'Provided on-site technical support by installing and configuring internet modems for company clients.',
      'Contributed to the development of a web application designed to automate SLA computation, enhancing efficiency.'
    ]
  }
];

function Experience() {
  return (
    <>
      <div className="py-20 flex items-center justify-center flex-col bg-[#0A0A0A] cursor-default" id="experience">
        <div className="text-center">
          <h1 className="text-3xl font-medium">Professional Experience</h1>
          <p className="text-sm mt-2 font-extralight text-white/80 text-center normal-text tracking-normal">
            Overview of my professional journey and key accomplishments.
          </p>
        </div>

        <div className="mt-10 flex items-start justify-start flex-col gap-5 px-4">
          {Experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 border border-white/10 rounded-2xl max-w-4xl w-full normal-text bg-[#0A0A0A]
                        hover:border-white/20 hover:bg-white/[0.01]
                        transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500"><Briefcase size={16} /></span>
                    <h2 className="text-md font-medium">{exp.title}</h2>
                  </div>
                  <p className="text-sm text-white/60">{exp.company}</p>
                </div>

                <div className="flex flex-col items-start mt-5 md:mt-0 md:items-end gap-2">
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    <Calendar size={13} className="text-white/40" />
                    <h2 className="text-xs text-white/60">{exp.duration}</h2>
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-2.5 normal-text text-sm text-white/70">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-white/70" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Experience;