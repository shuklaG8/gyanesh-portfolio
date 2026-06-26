"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaBrain, FaProjectDiagram, FaPlug, FaLink, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiDjango, SiPython, SiOpenai } from "react-icons/si";
import SkillIcon from "./SkillIcon";

const aiSkills = [
    { name: "LangChain", icon: <FaLink className="text-[#1C3C3C]" /> },
    { name: "LangGraph", icon: <FaProjectDiagram className="text-[#FF6B6B]" /> },
    { name: "RAG", icon: <FaBrain className="text-[#A855F7]" /> },
    { name: "MCP", icon: <FaPlug className="text-[#F59E0B]" /> },
    { name: "Vector DB", icon: <FaDatabase className="text-[#06B6D4]" /> },
    { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
    { name: "OpenAI", icon: <SiOpenai className="text-white" /> },
];

const fullStackSkills = [
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Django DRF", icon: <SiDjango className="text-[#092E20]" /> },
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
    { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
];

function SkillGroup({ title, skills, startDelay = 0 }: { title: string; skills: typeof aiSkills; startDelay?: number }) {
    return (
        <div className="mb-16 last:mb-0">
            <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-bold mb-8 text-center text-gray-300"
            >
                <span className="inline-block px-4 py-1.5 rounded-full border border-gray-700 bg-gray-900/50">
                    {title}
                </span>
            </motion.h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-6xl mx-auto py-4">
                {skills.map((skill, index) => (
                    <SkillIcon
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                        delay={startDelay + index * 0.08}
                    />
                ))}
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-[#0b0f12] text-white overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400 animate-gradient-shift"
                    >
                        Technical Skills
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-center mb-12 max-w-xl mx-auto"
                    >
                        AI engineering stack alongside full-stack web development expertise.
                    </motion.p>

                    <SkillGroup title="AI & Agentic Systems" skills={aiSkills} startDelay={0} />
                    <SkillGroup title="Full-Stack Development" skills={fullStackSkills} startDelay={0.5} />
                </motion.div>
            </div>
        </section>
    );
}
