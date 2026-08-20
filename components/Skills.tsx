"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaBrain,
    FaDatabase,
    FaCode,
    FaServer,
    FaDesktop,
    FaCloud,
    FaPlug,
    FaProjectDiagram,
    FaLink,
    FaDocker,
    FaAws,
    FaGitAlt,
    FaNodeJs,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaLayerGroup,
} from "react-icons/fa";
import {
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiMongodb,
    SiPostgresql,
    SiFastapi,
    SiDjango,
    SiPython,
    SiOpenai,
    SiRedis,
    SiRedux,
    SiSocketdotio,
} from "react-icons/si";

interface SkillCategory {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    skills: { name: string; icon?: React.ReactNode }[];
}

const skillCategories: SkillCategory[] = [
    {
        id: "ai",
        title: "AI & GenAI Engineering",
        description: "Agentic AI, RAG pipelines, and multi-agent workflows",
        icon: <FaBrain className="text-green-400" />,
        color: "from-green-500/20 via-emerald-500/10 to-transparent",
        skills: [
            { name: "LangChain", icon: <FaLink className="text-emerald-400" /> },
            { name: "LangGraph", icon: <FaProjectDiagram className="text-cyan-400" /> },
            { name: "RAG Pipelines", icon: <FaBrain className="text-purple-400" /> },
            { name: "Agentic AI", icon: <FaBrain className="text-pink-400" /> },
            { name: "Multi-Agent Systems", icon: <FaProjectDiagram className="text-green-400" /> },
            { name: "MCP-Aligned Tool Interfaces", icon: <FaPlug className="text-amber-400" /> },
            { name: "Tool Calling", icon: <FaPlug className="text-blue-400" /> },
            { name: "Prompt Engineering", icon: <FaBrain className="text-yellow-400" /> },
            { name: "LLM Integration (GPT-4, Groq)", icon: <SiOpenai className="text-white" /> },
        ],
    },
    {
        id: "vectordb",
        title: "Vector Databases",
        description: "High-performance vector search and index management",
        icon: <FaDatabase className="text-cyan-400" />,
        color: "from-cyan-500/20 via-blue-500/10 to-transparent",
        skills: [
            { name: "Pinecone", icon: <FaDatabase className="text-green-400" /> },
            { name: "Qdrant", icon: <FaDatabase className="text-red-400" /> },
            { name: "FAISS", icon: <FaDatabase className="text-blue-400" /> },
            { name: "ChromaDB", icon: <FaDatabase className="text-orange-400" /> },
        ],
    },
    {
        id: "languages",
        title: "Languages",
        description: "Core programming languages for web, AI, and systems",
        icon: <FaCode className="text-yellow-400" />,
        color: "from-yellow-500/20 via-amber-500/10 to-transparent",
        skills: [
            { name: "Python", icon: <SiPython className="text-blue-400" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
            { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
            { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
            { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
        ],
    },
    {
        id: "backend",
        title: "Backend Development",
        description: "Scalable APIs, microservices, and asynchronous queues",
        icon: <FaServer className="text-emerald-400" />,
        color: "from-emerald-500/20 via-teal-500/10 to-transparent",
        skills: [
            { name: "FastAPI", icon: <SiFastapi className="text-teal-400" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
            { name: "Express.js", icon: <FaServer className="text-gray-300" /> },
            { name: "Django DRF", icon: <SiDjango className="text-green-600" /> },
            { name: "REST API Design", icon: <FaServer className="text-cyan-400" /> },
            { name: "Microservices", icon: <FaLayerGroup className="text-indigo-400" /> },
            { name: "API Gateway", icon: <FaServer className="text-purple-400" /> },
            { name: "BullMQ", icon: <FaServer className="text-red-400" /> },
        ],
    },
    {
        id: "frontend",
        title: "Frontend Engineering",
        description: "Modern, responsive, and performance-optimized UIs",
        icon: <FaDesktop className="text-blue-400" />,
        color: "from-blue-500/20 via-sky-500/10 to-transparent",
        skills: [
            { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
            { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
            { name: "ShadCN UI", icon: <FaDesktop className="text-white" /> },
            { name: "Socket.io", icon: <SiSocketdotio className="text-gray-300" /> },
        ],
    },
    {
        id: "databases",
        title: "Databases & Caching",
        description: "Document, relational, and in-memory datastores",
        icon: <FaDatabase className="text-purple-400" />,
        color: "from-purple-500/20 via-violet-500/10 to-transparent",
        skills: [
            { name: "MongoDB (Mongoose)", icon: <SiMongodb className="text-green-500" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
            { name: "MySQL", icon: <FaDatabase className="text-blue-600" /> },
            { name: "Redis", icon: <SiRedis className="text-red-500" /> },
        ],
    },
    {
        id: "cloud",
        title: "Cloud & DevOps",
        description: "Containerization, AWS cloud architecture, and CI/CD",
        icon: <FaCloud className="text-orange-400" />,
        color: "from-orange-500/20 via-amber-500/10 to-transparent",
        skills: [
            { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
            { name: "AWS (EC2, S3, Lambda, IAM)", icon: <FaAws className="text-amber-500" /> },
            { name: "CI/CD", icon: <FaCloud className="text-emerald-400" /> },
            { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
        ],
    },
];

export default function Skills() {
    const [activeTab, setActiveTab] = useState<string>("all");

    const filteredCategories =
        activeTab === "all"
            ? skillCategories
            : skillCategories.filter((c) => c.id === activeTab);

    return (
        <section id="skills" className="py-24 bg-[#0b0f12] text-white relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-500/5 rounded-full blur-[160px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <span className="text-green-400 text-sm uppercase tracking-widest font-mono font-semibold px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 inline-block mb-4">
                        Capabilities & Stack
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400 animate-gradient-shift">
                        Technical Skills
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg">
                        Comprehensive skill matrix spanning AI/GenAI agent workflows, vector search engines, and enterprise full-stack engineering.
                    </p>
                </motion.div>

                {/* Category Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-14 max-w-4xl mx-auto">
                    <button
                        onClick={() => setActiveTab("all")}
                        className={`px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-all border ${
                            activeTab === "all"
                                ? "bg-green-500 text-black border-green-400 font-bold shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                                : "bg-gray-900/80 text-gray-400 border-gray-800 hover:text-white hover:border-gray-700"
                        }`}
                    >
                        All Categories
                    </button>
                    {skillCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-all flex items-center gap-2 border ${
                                activeTab === cat.id
                                    ? "bg-green-500 text-black border-green-400 font-bold shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                                    : "bg-gray-900/80 text-gray-400 border-gray-800 hover:text-white hover:border-gray-700"
                            }`}
                        >
                            <span className="text-sm">{cat.icon}</span>
                            <span>{cat.title}</span>
                        </button>
                    ))}
                </div>

                {/* Skill Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {filteredCategories.map((category, idx) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                            className={`p-6 bg-gradient-to-b ${category.color} bg-gray-900/40 border border-gray-800 rounded-3xl backdrop-blur-xl shadow-xl hover:border-green-500/40 transition-all duration-300 flex flex-col justify-between group`}
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-3 bg-black/50 rounded-2xl border border-gray-800 text-xl group-hover:scale-110 transition-transform">
                                        {category.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-green-300 transition-colors">
                                            {category.title}
                                        </h3>
                                        <p className="text-xs text-gray-400">{category.description}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-5">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill.name}
                                            className="px-3 py-1.5 bg-gray-800/80 hover:bg-gray-700 text-gray-200 text-xs md:text-sm rounded-xl border border-gray-700/60 flex items-center gap-2 transition-colors cursor-default"
                                        >
                                            {skill.icon && <span className="text-sm">{skill.icon}</span>}
                                            <span>{skill.name}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

