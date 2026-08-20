"use client";

import { motion } from "framer-motion";
import { FaCode, FaServer, FaRobot, FaRocket, FaDatabase, FaCogs } from "react-icons/fa";

const services = [
    {
        title: "Agentic AI & RAG Architecture",
        desc: "Designing domain-specific RAG pipelines (LangChain, Pinecone, Qdrant) and LangGraph multi-agent orchestration systems.",
        icon: <FaRobot className="text-green-400" />,
        gradient: "from-green-500/20 to-emerald-500/5",
    },
    {
        title: "Full-Stack Web Platforms",
        desc: "Building high-performance, production-ready web applications using Next.js, React, TypeScript, and Tailwind CSS.",
        icon: <FaCode className="text-cyan-400" />,
        gradient: "from-cyan-500/20 to-blue-500/5",
    },
    {
        title: "FastAPI & Node.js Backends",
        desc: "Architecting scalable RESTful microservices, API Gateways, BullMQ queues, and asynchronous Python backends.",
        icon: <FaServer className="text-purple-400" />,
        gradient: "from-purple-500/20 to-indigo-500/5",
    },
    {
        title: "Vector Search & MCP Integration",
        desc: "Integrating Model Context Protocol (MCP) servers and vector databases (FAISS, ChromaDB) for context-aware LLM tools.",
        icon: <FaDatabase className="text-amber-400" />,
        gradient: "from-amber-500/20 to-yellow-500/5",
    },
    {
        title: "AI Strategy & Automation Engine",
        desc: "Automating complex manual business workflows and slide/report generation down from 8-12 hours to under 3 minutes.",
        icon: <FaCogs className="text-emerald-400" />,
        gradient: "from-emerald-500/20 to-teal-500/5",
    },
    {
        title: "Performance & SEO Optimization",
        desc: "Boosting web vitals, code splitting, memoization, and lazy loading for up to 35% frontend speed improvements.",
        icon: <FaRocket className="text-rose-400" />,
        gradient: "from-rose-500/20 to-pink-500/5",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-[#0b0f12] text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-green-400 text-sm uppercase tracking-widest font-mono font-semibold px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 inline-block mb-4">
                        Core Competencies
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400 animate-gradient-shift">
                        What I Do
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg">
                        End-to-end engineering solutions combining cutting-edge GenAI capabilities with robust full-stack architecture.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, scale: 1.01 }}
                            className={`p-8 bg-gradient-to-br ${service.gradient} bg-gray-900/40 rounded-3xl backdrop-blur-xl border border-gray-800 hover:border-green-500/40 transition-all duration-300 shadow-xl group flex flex-col justify-between`}
                        >
                            <div>
                                <div className="text-3xl p-3.5 bg-black/50 rounded-2xl border border-gray-800 w-fit mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-300 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

