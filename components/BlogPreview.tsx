"use client";

import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";

const blogs = [
    {
        title: "Architecting Agentic RAG Workflows with LangChain & Qdrant",
        date: "Jan 18, 2025",
        excerpt: "How to build high-precision vector retrieval pipelines with Redis caching and tool orchestration.",
        tag: "Agentic AI",
    },
    {
        title: "Optimizing Next.js 15 Applications for Maximum Web Vitals",
        date: "Dec 04, 2024",
        excerpt: "Strategies for code splitting, lazy loading, and server component memoization that cut render times.",
        tag: "Next.js & Frontend",
    },
    {
        title: "Building Microservices with FastAPI, Docker & BullMQ",
        date: "Nov 12, 2024",
        excerpt: "A guide to containerizing asynchronous Python APIs for scalable cloud deployment on AWS.",
        tag: "FastAPI & DevOps",
    },
];

export default function BlogPreview() {
    return (
        <section id="blog" className="py-24 bg-[#0b0f12] text-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-green-400 text-sm uppercase tracking-widest font-mono font-semibold px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 inline-block mb-4">
                        Technical Publications
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400 animate-gradient-shift">
                        Latest Insights
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg">
                        Deep dives into AI agent design, vector search, performance engineering, and full-stack architecture.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {blogs.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="bg-gray-900/40 p-7 rounded-3xl border border-gray-800 hover:border-green-500/40 transition-all backdrop-blur-xl shadow-xl flex flex-col justify-between group"
                        >
                            <div>
                                <span className="text-xs font-mono font-semibold text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20 mb-4 inline-block">
                                    {post.tag}
                                </span>
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-300 transition-colors leading-snug">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </div>
                            <div className="flex justify-between items-center pt-4 border-t border-gray-800/80 mt-auto">
                                <span className="text-gray-500 text-xs font-mono">{post.date}</span>
                                <span className="text-green-400 group-hover:text-white text-xs font-bold transition-colors flex items-center gap-1">
                                    <FaBookOpen size={12} /> Article
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

