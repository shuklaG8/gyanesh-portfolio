"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiRedux, SiTailwindcss, SiMongodb, SiDjango } from "react-icons/si";

const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Django DRF", icon: <SiDjango className="text-[#092E20]" /> },
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-[#0b0f12] text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-green-400">Technical Arsenal</h2>

                    <div className="flex flex-wrap justify-center gap-12 md:gap-16 max-w-6xl mx-auto py-10">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                {/* Diamond Shape Container */}
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-800 rotate-45 border-2 border-gray-700 shadow-xl group-hover:bg-gray-700 group-hover:border-green-400 transition-all duration-300 ease-in-out transform group-hover:scale-110 z-10 relative flex items-center justify-center">
                                    {/* Inner Content (Counter-rotated) */}
                                    <div className="-rotate-45 flex items-center justify-center">
                                        <div className="text-3xl md:text-4xl filter drop-shadow-lg transform transition-transform group-hover:scale-110 duration-300">
                                            {skill.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Pulse Effect Background */}
                                <div className="absolute top-0 left-0 w-full h-full bg-green-500/20 rotate-45 z-0 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>

                                {/* Tooltip / Label */}
                                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-white font-semibold whitespace-nowrap bg-gray-900 px-3 py-1 rounded-md text-sm border border-green-500/30">
                                    {skill.name}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
