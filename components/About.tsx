"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaRocket, FaChartLine } from "react-icons/fa";

const experiences = [
    {
        period: "Nov 2024 – Present",
        role: "AI Developer",
        company: "Genisys Enterprises Pvt Ltd",
        location: "Noida, India (Hybrid)",
        isCurrent: true,
        highlights: [
            "Built RAG pipelines (LangChain, Pinecone) and an LLM-powered chatbot integrated into product workflows.",
            "Delivered full-stack apps with FastAPI/PostgreSQL backends and React.js/Next.js frontends.",
            "Documented and published RESTful APIs for business workflows and third-party integrations.",
            "Developed client-facing websites with Next.js, TypeScript, and Tailwind CSS, optimized for SEO and performance.",
        ],
        tags: ["LangChain", "Pinecone", "RAG", "FastAPI", "PostgreSQL", "React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
        period: "Oct 2022 – Oct 2024",
        role: "AI & Full Stack Developer",
        company: "Prism Infoways Pvt. Ltd",
        location: "Gurugram, India",
        isCurrent: false,
        highlights: [
            "Built an AI-powered chatbot using LLM APIs to automate customer support across four product lines.",
            "Led end-to-end MERN development of scalable, production-grade web applications.",
            "Improved frontend performance by 35% through lazy loading, code splitting, and memoization.",
            "Containerized applications with Docker and deployed on AWS (EC2, S3, Lambda, IAM).",
        ],
        tags: ["LLM APIs", "MERN Stack", "Docker", "AWS", "EC2", "S3", "Lambda", "Performance Optimization"],
    },
];

const impactStats = [
    {
        value: "4+ Years",
        label: "Building RAG, GenAI & Full-Stack Systems",
        icon: <FaBriefcase className="text-green-400" />,
        gradient: "from-green-500/20 to-emerald-500/10",
        border: "border-green-500/30",
    },
    {
        value: "+35%",
        label: "Frontend Performance Boost via Lazy Loading & Splitting",
        icon: <FaChartLine className="text-purple-400" />,
        gradient: "from-purple-500/20 to-pink-500/10",
        border: "border-purple-500/30",
    },
    {
        value: "4 Product Lines",
        label: "Automated Customer Support via Integrated LLM APIs",
        icon: <FaRocket className="text-amber-400" />,
        gradient: "from-amber-500/20 to-orange-500/10",
        border: "border-amber-500/30",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15 },
    }),
};

export default function About() {
    return (
        <section id="about" className="py-24 bg-[#0b0f12] text-white relative overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-green-400 text-sm uppercase tracking-widest font-mono font-semibold px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 inline-block mb-4">
                        Professional Overview
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400 animate-gradient-shift">
                        About & Work Experience
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed text-justify">
                        AI/GenAI Engineer and Full Stack Developer with <strong className="text-white">4+ years</strong> of experience building RAG pipelines, LLM-powered applications, and agentic AI workflows with <strong className="text-green-400">LangChain, LangGraph, and MCP-aligned tool interfaces</strong>. Skilled in vector databases (Pinecone, Qdrant, FAISS, ChromaDB) and full-stack delivery across MERN and FastAPI.
                    </p>
                </motion.div>

                {/* Impact Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
                    {impactStats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className={`p-6 rounded-2xl bg-gradient-to-br ${stat.gradient} border ${stat.border} backdrop-blur-md relative overflow-hidden group shadow-lg`}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-2xl p-3 bg-black/40 rounded-xl border border-white/10">
                                    {stat.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-1 group-hover:text-green-300 transition-colors">
                                {stat.value}
                            </h3>
                            <p className="text-xs md:text-sm text-gray-300 font-medium leading-snug">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Experience Timeline */}
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="p-3 rounded-xl bg-green-500/10 text-green-400 border border-green-500/20">
                            <FaBriefcase size={22} />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">Work Experience</h3>
                            <p className="text-gray-400 text-sm">Professional career trajectory and key contributions</p>
                        </div>
                    </div>

                    <div className="relative border-l-2 border-gray-800 ml-4 md:ml-6 space-y-12 pl-6 md:pl-10">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.role + exp.company}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                {/* Timeline Node Pin */}
                                <div className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full border-4 ${exp.isCurrent ? "bg-green-500 border-black shadow-[0_0_15px_rgba(34,197,94,0.8)]" : "bg-gray-700 border-black"} group-hover:scale-125 transition-transform duration-300`} />

                                <motion.div
                                    whileHover={{ y: -4, borderColor: "rgba(34,197,94,0.4)" }}
                                    className="p-6 md:p-8 bg-gray-900/60 border border-gray-800 rounded-2xl backdrop-blur-xl shadow-xl transition-all duration-300"
                                >
                                    {/* Card Header */}
                                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                        <div>
                                            <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-green-400 transition-colors flex items-center gap-2">
                                                {exp.role}
                                                {exp.isCurrent && (
                                                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 font-semibold">
                                                        Current
                                                    </span>
                                                )}
                                            </h4>
                                            <p className="text-lg font-semibold text-emerald-400 mt-0.5">{exp.company}</p>
                                        </div>
                                        <div className="flex flex-col items-start md:items-end text-xs text-gray-400 gap-1">
                                            <span className="px-3 py-1 bg-gray-800 rounded-full border border-gray-700 font-mono text-gray-300">
                                                {exp.period}
                                            </span>
                                            <span className="flex items-center gap-1 text-gray-400">
                                                <FaMapMarkerAlt size={11} className="text-green-400" />
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Highlights List */}
                                    <ul className="space-y-3 my-5">
                                        {exp.highlights.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
                                                <span className="w-2 h-2 rounded-full bg-green-400 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-800/80">
                                        {exp.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 text-xs font-mono rounded-md bg-gray-800/80 text-gray-300 border border-gray-700/60"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

