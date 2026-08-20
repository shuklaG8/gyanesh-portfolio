"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal, { Project } from "./ProjectModal";
import { FaCodeBranch, FaMicrochip, FaLayerGroup, FaArrowRight } from "react-icons/fa";

const projects: Project[] = [
    {
        title: "Multi-Agent AI Orchestration Platform",
        subtitle: "Personal Project (MERN Stack)",
        category: "Agentic AI & RAG",
        desc: "Architected a multi-agent system with an API Gateway routing to specialized LangGraph agents and a Qdrant-backed RAG pipeline.",
        highlights: [
            "Architected a multi-agent system with an API Gateway routing to specialized LangGraph agents; built a Qdrant-backed RAG pipeline with Redis caching.",
            "Delivered real-time streaming AI responses via WebSockets/SSE; containerized each microservice with Docker for AWS deployment.",
        ],
        tech: [
            "React.js",
            "Node.js",
            "LangGraph",
            "LangChain",
            "RAG",
            "MCP-Aligned Tool Interfaces",
            "Qdrant",
            "Redis",
            "Docker",
            "AWS",
        ],
        gradient: "from-emerald-600 via-teal-700 to-cyan-800",
    },
    {
        title: "PharmaLens AI",
        subtitle: "Healthcare Strategy Intelligence Platform",
        category: "GenAI & Automation",
        desc: "AI-driven intelligence pipeline generating structured strategic briefs and automated PowerPoint slide decks from web research.",
        highlights: [
            "Built an AI pipeline generating structured strategic briefs from real-time web research, with an 11-slide auto-generated PPT engine (python-pptx).",
            "Cut strategic brief creation from 8-12 hours to under 3 minutes end-to-end.",
        ],
        tech: [
            "Python",
            "FastAPI",
            "OpenAI GPT-4",
            "python-pptx",
            "Exa Web Search API",
            "Docker",
        ],
        gradient: "from-blue-600 via-indigo-700 to-purple-800",
    },
    {
        title: "IoT-Based Machine Monitoring Dashboard",
        subtitle: "Production & MTTR Analytics (MERN Stack)",
        category: "Full Stack & IoT",
        desc: "Real-time industrial IoT production dashboard automated with MongoDB aggregation pipelines and shift report tracking.",
        highlights: [
            "Built a real-time production dashboard with automated shift reports and MTTR tracking via MongoDB aggregation pipelines and JWT-secured APIs.",
        ],
        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
            "JWT",
            "Aggregation Pipeline",
        ],
        gradient: "from-amber-600 via-orange-700 to-red-800",
    },
    {
        title: "Praans Consultech",
        subtitle: "Labour Law Website (praansconsultech.com)",
        category: "Web Platform & SSR",
        desc: "Client-facing compliance website engineered for SEO performance, code splitting, lazy loading, and server-side rendering.",
        highlights: [
            "Launched a website using Next.js, TypeScript, and ShadCN UI with SSR, code splitting, and lazy loading for SEO performance.",
        ],
        tech: [
            "Next.js",
            "TypeScript",
            "ShadCN UI",
            "RESTful APIs",
            "SSR",
        ],
        gradient: "from-emerald-700 via-green-800 to-teal-900",
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<null | Project>(null);

    return (
        <section id="projects" className="py-24 bg-[#0b0f12] text-white relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-green-400 text-sm uppercase tracking-widest font-mono font-semibold px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 inline-block mb-4">
                        Technical Deliverables
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400 animate-gradient-shift">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg">
                        Engineering showcase of AI pipelines, multi-agent platforms, and full-stack systems built with modern technology stacks.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.12 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="bg-gray-900/60 rounded-3xl overflow-hidden border border-gray-800 hover:border-green-500/40 cursor-pointer shadow-xl backdrop-blur-xl flex flex-col group transition-all duration-300"
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Graphic Visual Header */}
                            <div className={`h-44 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
                                <div className="flex justify-between items-start relative z-10">
                                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-green-300 text-xs font-mono rounded-full border border-green-500/30">
                                        {project.category}
                                    </span>
                                    <span className="p-2.5 bg-black/50 rounded-full text-white/80 group-hover:text-white group-hover:scale-110 transition-all">
                                        <FaCodeBranch size={14} />
                                    </span>
                                </div>

                                <div className="relative z-10 mt-auto">
                                    <p className="text-xs text-emerald-200 font-mono font-medium tracking-wide uppercase">
                                        {project.subtitle}
                                    </p>
                                    <h3 className="text-xl md:text-2xl font-extrabold text-white group-hover:text-green-300 transition-colors leading-tight">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 md:p-8 flex flex-col flex-grow justify-between space-y-6">
                                {/* Highlights Bullet points */}
                                <ul className="space-y-2.5">
                                    {project.highlights.map((bullet, bIdx) => (
                                        <li key={bIdx} className="flex items-start gap-2.5 text-gray-300 text-sm leading-relaxed">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Technologies Badges Only (No Live Links) */}
                                <div>
                                    <div className="flex items-center gap-1 text-xs text-gray-400 mb-2 font-mono uppercase tracking-wider">
                                        <FaLayerGroup size={11} className="text-green-400" />
                                        <span>Technologies:</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-xs px-2.5 py-1 bg-gray-800/90 text-green-300 rounded-md font-mono border border-gray-700/80 group-hover:border-green-500/30 transition-colors"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Modal Trigger Prompt */}
                                <div className="pt-2 flex items-center justify-between text-xs text-gray-400 font-medium group-hover:text-green-400 transition-colors border-t border-gray-800/80">
                                    <span>Click card for architectural details</span>
                                    <span className="flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform">
                                        Explore Architecture <FaArrowRight size={10} />
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Dialog */}
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </section>
    );
}

