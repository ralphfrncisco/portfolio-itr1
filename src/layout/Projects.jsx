import React, { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

import loanSystemImage from '../assets/images/projects/loan-system.jpg';
import slaMonitoringImage from '../assets/images/projects/SLA-index.jpg';
import philippinesImage from '../assets/images/projects/philippines.png';
import IRMSimage from '../assets/images/projects/IRMS.png';
import githubIcon from '../assets/github.svg';

const projects = [
    {
        name: "SmartLoan System",
        description: "A web-based loan management system that digitizes loan inquiries, applications, and approvals, streamlining the loan process for cooperative officials and members.",
        longDescription: "SmartLoan System was developed as a capstone project to address the inefficiencies of paper-based loan processing in cooperatives. The system provides a centralized platform where members can submit loan inquiries and applications online, while officials can review, approve, or reject them in real time — eliminating the need for physical visits and manual paperwork.",
        path: loanSystemImage,
        images: [loanSystemImage],
        type: "Capstone Project",
        langs: ["PHP", "SQL"],
        features: [
            "Online loan inquiry and application submission",
            "Admin dashboard for loan review and approval workflows",
            "Member account management and loan history tracking",
            "Automated status notifications for applicants"
        ],
        link: "https://github.com/ralphfrncisco/SmartLoan",
        github: "https://github.com/ralphfrncisco/SmartLoan",
        demo: null,
    },
    {
        name: "SysTrack SLA Monitoring",
        description: "A specialized performance monitoring dashboard designed for manual entry and analysis of Service Level Agreement (SLA) metrics, calculating system uptime and reliability to ensure service compliance.",
        longDescription: "Built during my internship, SysTrack is an internal SLA monitoring tool that allows IT teams to manually log and track system performance metrics over time. It calculates uptime percentages, visualizes trends, and flags SLA breaches — giving operations teams a clear picture of service compliance without relying on expensive third-party monitoring software.",
        path: slaMonitoringImage,
        images: [slaMonitoringImage],
        type: "Internship Project",
        langs: ["PHP", "SQL"],
        features: [
            "Manual SLA metric entry with validation",
            "Automated uptime and reliability calculations",
            "Visual trend charts for performance over time",
            "SLA breach detection and flagging",
            "Exportable compliance reports",
        ],
        link: "#",
        github: null,
        demo: null,
    },
    {
        name: "The Philippines",
        description: "A responsive web platform developed to master utility-first styling with Tailwind CSS and implement advanced CSS Grid and Flexbox layouts for seamless cross-device compatibility.",
        longDescription: "This personal project was a deep-dive into modern CSS layout techniques and utility-first design. The site showcases the Philippines through a fully responsive interface, built from scratch to practice advanced Tailwind CSS patterns, responsive grid systems, and Flexbox alignment — ensuring a polished experience across all screen sizes.",
        path: philippinesImage,
        images: [philippinesImage],
        type: "Personal Project",
        langs: ["HTML", "Tailwind CSS"],
        features: [
            "Fully responsive layout across mobile, tablet, and desktop",
            "Advanced CSS Grid and Flexbox composition",
            "Utility-first Tailwind CSS architecture",
            "Semantic HTML structure for accessibility",
            "Deployed live on Vercel",
        ],
        link: "https://the-philippines.vercel.app/",
        github: null,
        demo: "https://the-philippines.vercel.app/",
    },
    {
        name: "Talaan",
        description: "Inventory-Record Management System (IRMS) is a simple CRUD system using ReactJS and PostGreSQL to enhance the management of inventory and sales transactions for a small business.",
        longDescription: "IRMS is a freelance project for a small business client who needed a lightweight, custom-built solution to manage their inventory and record sales transactions. Built with ReactJS on the frontend and PostgreSQL on the backend, the system handles all core CRUD operations and is actively being developed with new features planned for reporting and analytics.",
        path: IRMSimage,
        images: [IRMSimage],
        type: "Freelance Project",
        langs: ["React", "PostgreSQL"],
        features: [
            "Full CRUD for inventory items and categories",
            "Sales transaction recording and history",
            "Stock level tracking with low-inventory alerts",
            "PostgreSQL relational data model"
        ],
        link: "https://github.com/ralphfrncisco/IRMS",
        github: "https://github.com/ralphfrncisco/IRMS",
        demo: null,
    }
];

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeImage, setActiveImage] = useState(0);

    const openModal = (project) => {
        setSelectedProject(project);
        setActiveImage(0);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = useCallback(() => {
        setSelectedProject(null);
        setActiveImage(0);
        document.body.style.overflow = '';
    }, []);

    const prevImage = (e) => {
        e.stopPropagation();
        setActiveImage(i => (i - 1 + selectedProject.images.length) % selectedProject.images.length);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setActiveImage(i => (i + 1) % selectedProject.images.length);
    };

    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') closeModal(); };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [closeModal]);

    return (
        <>
            <div className="py-20 flex items-center justify-center flex-col bg-[#0B0B0B]" id = "projects">
                <div className="text-center">
                    <h1 className="text-3xl font-medium">Featured Projects</h1>
                    <p className="text-sm mt-2 font-extralight text-white/80 text-center normal-text tracking-normal">An array of projects that demonstrate my expertise in full-stack development.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 max-w-6xl">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => openModal(project)}
                            className="p-4 rounded-lg border border-white/20 normal-text bg-[#0A0A0A] space-y-4 pb-5 hover:bg-[#0B0B0B]/50 transition duration-300 cursor-pointer"
                        >
                            <img src={project.path} alt="Project Image" className="w-full h-auto rounded-lg" />
                            <h1 className="text-lg font-bold">{project.name}</h1>

                            <div>
                                <p className="text-sm text-white/80">{project.description}</p>

                                <div className="flex flex-wrap items-center gap-2 mt-2">
                                    <span className="text-xs mt-1 text-white bg-white/10 px-3 py-1 rounded-lg text-center">{project.type}</span>
                                    {project.langs.map((lang, i) => (
                                        <span key={i} className="text-xs mt-1 text-white bg-white/10 px-3 py-1 rounded-lg text-center">{lang}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Modal (portalled to document.body to escape component layout) ── */}
            {selectedProject && createPortal(
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    style={{ animation: 'fadeIn 0.18s ease' }}
                    onClick={closeModal}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm dark:bg-black/75" />

                    {/* Panel + floating close button wrapper */}
                    <div
                        className="relative z-10 w-full max-w-2xl"
                        style={{ animation: 'slideUp 0.2s ease' }}
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close button — outside panel, desktop only */}
                        <button
                            onClick={closeModal}
                            className="hidden sm:flex absolute -top-[-1px] -right-10 p-1.5 rounded-full
                                bg-black/30 hover:bg-black/50 text-white
                                dark:bg-white/10 dark:hover:bg-white/20
                                transition-colors backdrop-blur-sm cursor-pointer"
                            aria-label="Close modal"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        {/* Panel */}
                        <div className="custom-scrollbar w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl
                            bg-white border border-gray-200 text-gray-900
                            dark:bg-[#111] dark:border-[#2a2a2a] dark:text-white">

                            {/* ── Image gallery ── */}
                            <div className="relative w-full overflow-hidden rounded-t-xl bg-black/10"
                                style={{ aspectRatio: '16/9' }}>
                                <img
                                    key={activeImage}
                                    src={selectedProject.images[activeImage]}
                                    alt={`${selectedProject.name} screenshot ${activeImage + 1}`}
                                    className="w-full h-full object-contain"
                                    style={{ animation: 'fadeIn 0.2s ease' }}
                                />

                                {/* Close button — inside image, mobile only */}
                                <button
                                    onClick={closeModal}
                                    className="sm:hidden absolute top-3 right-3 p-1.5 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors backdrop-blur-sm cursor-pointer"
                                    aria-label="Close modal"
                                >
                                    <X className="w-4 h-4" />
                                </button>

                                {/* Prev / Next */}
                                {selectedProject.images.length > 1 && (
                                    <>
                                        <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors">
                                            <ChevronLeft className="w-4 h-4" />
                                        </button>
                                        <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors">
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </>
                                )}

                                {/* Thumbnail dots */}
                                {selectedProject.images.length > 1 && (
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                                        {selectedProject.images.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={(e) => { e.stopPropagation(); setActiveImage(i); }}
                                                className={`w-1.5 h-1.5 rounded-full transition-all ${i === activeImage ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* ── Content ── */}
                            <div className="p-6 space-y-5">

                                {/* Header row */}
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                    <div>
                                        <h2 className="text-xl font-bold tracking-tight">{selectedProject.name}</h2>
                                        <div className="flex flex-wrap gap-1.5 mt-2">
                                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono
                                                text-gray-600 bg-gray-100 border border-gray-200
                                                dark:text-white/70 dark:bg-white/5 dark:border-white/10">
                                                {selectedProject.type}
                                            </span>
                                            {selectedProject.langs.map((lang, i) => (
                                                <span key={i} className="px-2.5 py-0.5 rounded-full text-[10px] font-mono
                                                    text-gray-600 bg-gray-100 border border-gray-200
                                                    dark:text-white/70 dark:bg-white/5 dark:border-white/10">
                                                    {lang}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action buttons */}
                                    <div className="flex gap-2 flex-shrink-0">
                                        {selectedProject.github && (
                                            <a
                                                href={selectedProject.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={e => e.stopPropagation()}
                                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border
                                                    border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50
                                                    dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/5"
                                            >
                                                <img src={githubIcon} alt="GitHub" className="w-3.5 h-3.5" />
                                                GitHub
                                            </a>
                                        )}
                                        {selectedProject.demo && (
                                            <a
                                                href={selectedProject.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={e => e.stopPropagation()}
                                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors
                                                    bg-gray-900 text-white hover:bg-gray-700
                                                    dark:bg-white dark:text-black dark:hover:bg-white/90"
                                            >
                                                <ExternalLink className="w-3.5 h-3.5" />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Divider */}
                                <hr className="border-gray-100 dark:border-white/8" />

                                {/* About */}
                                <div>
                                    <h3 className="text-xs font-semibold uppercase tracking-widest mb-2
                                        text-gray-400 dark:text-white/40">
                                        About
                                    </h3>
                                    <p className="text-sm leading-relaxed font-light
                                        text-gray-700 dark:text-white/75">
                                        {selectedProject.longDescription}
                                    </p>
                                </div>

                                {/* Features */}
                                <div>
                                    <h3 className="text-xs font-semibold uppercase tracking-widest mb-3
                                        text-gray-400 dark:text-white/40">
                                        Features
                                    </h3>
                                    <ul className="space-y-2">
                                        {selectedProject.features.map((feat, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gray-400 dark:bg-white/30" />
                                                <span className="text-sm font-light leading-snug text-gray-700 dark:text-white/75">
                                                    {feat}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div> {/* end panel */}
                    </div> {/* end panel + close button wrapper */}
                </div>
            , document.body)}

            {/* Keyframe animations */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(12px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </>
    );
}

export default Projects;