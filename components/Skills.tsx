"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiDjango } from "react-icons/si";
import SkillIcon from "./SkillIcon";

const skills = [
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-green-400">Technical Skills</h2>

                    {/* New Grid Layout for Faceted Icons */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-6xl mx-auto py-10">
                        {skills.map((skill, index) => (
                            <SkillIcon
                                key={index}
                                name={skill.name}
                                icon={skill.icon}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
