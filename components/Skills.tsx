"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaPython } from "react-icons/fa";
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

                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="relative group"
                            >
                                {/* Hexagon Shape CSS */}
                                <div className="w-24 h-28 md:w-32 md:h-36 bg-gray-800 flex items-center justify-center relative shadow-lg group-hover:bg-gray-700 transition-colors"
                                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                                >
                                    <div className="text-4xl md:text-5xl z-10 filter drop-shadow-md">
                                        {skill.icon}
                                    </div>

                                    {/* Inner Border Effect (Optional visual polish) */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                                </div>

                                {/* Tooltip / Label */}
                                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-green-400 font-semibold whitespace-nowrap">
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
