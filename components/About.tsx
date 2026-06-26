"use client";

import { motion } from "framer-motion";

const experience = [
    {
        period: "2024 – Present",
        role: "AI & Full-Stack Engineer",
        company: "Freelance / Client Projects",
        highlights: [
            "Built RAG pipelines with LangChain & vector stores for domain-specific Q&A",
            "Designed LangGraph agent workflows with tool-calling and MCP integrations",
            "Shipped production AI chatbots and admin dashboards on Next.js",
        ],
    },
    {
        period: "2022 – 2024",
        role: "Full-Stack Developer",
        company: "Web & Mobile Applications",
        highlights: [
            "Delivered scalable REST APIs with Django DRF and Node.js",
            "Deployed high-performance Next.js apps with Core Web Vitals optimization",
            "Integrated LLM features into client-facing products (Praans, Nutrexa)",
        ],
    },
];

const focusTags = [
    "LangChain",
    "LangGraph",
    "RAG Pipelines",
    "MCP Integrations",
    "Agentic AI",
    "Next.js",
];

const achievements = [
    "Architected RAG systems with retrieval, chunking, and embedding strategies",
    "Built multi-step AI agents using LangGraph state machines & tool orchestration",
    "Integrated MCP servers to connect LLMs with external APIs and databases",
    "Deployed production AI chatbots and full-stack apps for real clients",
];

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.12 },
    }),
};

export default function About() {
    return (
        <section id="about" className="py-20 bg-[#0b0f12] text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-12 items-start"
                >
                    {/* Main Bio */}
                    <div className="w-full md:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400 animate-gradient-shift"
                        >
                            About Me
                        </motion.h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
                            I am <strong className="text-white">Gyanesh Shukla</strong>, an{" "}
                            <strong className="text-green-400">AI & Full-Stack Engineer</strong> with{" "}
                            <strong className="text-white">3+ years</strong> of professional experience.
                            I specialize in building intelligent applications using{" "}
                            <strong className="text-white">LangChain, LangGraph, RAG pipelines, and MCP</strong>,
                            combined with modern full-stack development in{" "}
                            <strong className="text-white">Next.js, React, and Node.js</strong>.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            My core strength is turning AI concepts into production-ready systems — from retrieval-augmented
                            knowledge bases and multi-agent workflows to scalable web platforms that deliver real business value.
                        </p>

                        {/* Experience Timeline */}
                        <div className="space-y-4 mt-8">
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Experience
                                <span className="text-sm font-normal text-green-400 ml-1">3+ Years</span>
                            </h3>
                            {experience.map((exp, i) => (
                                <motion.div
                                    key={exp.role}
                                    custom={i}
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02, borderColor: "rgba(34,197,94,0.5)" }}
                                    className="p-5 bg-gray-900/50 border border-gray-800 rounded-xl transition-all animate-glow-pulse"
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                        <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                                        <span className="text-xs px-2 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400 mb-3">{exp.company}</p>
                                    <ul className="space-y-1.5">
                                        {exp.highlights.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Stats / Interactive Element */}
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4 }}
                            className="p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-all duration-700" />
                            <h3 className="text-2xl font-bold mb-4 relative z-10">Current Focus</h3>
                            <div className="flex flex-wrap gap-3 relative z-10">
                                {focusTags.map((tag, i) => (
                                    <motion.span
                                        key={tag}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 + i * 0.08 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.08, backgroundColor: "rgba(34,197,94,0.15)" }}
                                        className="px-3 py-1.5 bg-gray-800 text-green-300 text-sm rounded-full border border-gray-700 cursor-default transition-colors"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="p-8 bg-gray-900/30 rounded-2xl border border-gray-800"
                        >
                            <h4 className="text-xl font-bold mb-4 text-gray-200">AI Highlights</h4>
                            <ul className="space-y-3">
                                {achievements.map((item, i) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: -16 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-3 text-gray-400 group"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0 group-hover:scale-150 transition-transform" />
                                        <span className="group-hover:text-gray-200 transition-colors">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
