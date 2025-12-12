"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

const projects = [
    {
        title: "Praans Consultech",
        desc: "Professional website featuring an AI chatbot for client interaction and support. Built for a consultancy firm.",
        role: "Full Stack Developer",
        tech: ["Next.js", "TypeScript", "Shadcn UI", "AI Chatbot"],
        img: "/praans.png", // Placeholder
        live: "https://www.praansconsultech.com/",
    },
    {
        title: "Nutrexa",
        desc: "Health and wellness platform built with a robust backend for managing products and content.",
        role: "Full Stack Developer",
        tech: ["Next.js", "Tailwind CSS", "Django Rest Framework"],
        img: "/nutrexa.png",
        live: "https://nutrexa.co.in/",
    },
    {
        title: "Braymil",
        desc: "Customized Shopify theme implementation for an e-commerce brand, enhancing user experience and conversion.",
        role: "Frontend Developer",
        tech: ["Shopify", "Theme Customization", "Liquid", "CSS"],
        img: "/braymil.png",
        live: "https://braymil.com/",
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

    return (
        <section id="projects" className="py-20 bg-[#0b0f12] text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-400">A selection of my recent work.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-green-500/50 cursor-pointer shadow-lg group"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="h-48 bg-gray-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">View Details</span>
                                </div>
                                {/* Placeholder Image */}
                                <div className="w-full h-full flex items-center justify-center text-gray-600">
                                    {project.img ? <img src={project.img} className="w-full h-full object-cover" /> : "[Preview Image]"}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm line-clamp-2 mb-4">{project.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.slice(0, 3).map((t) => (
                                        <span key={t} className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-300">{t}</span>
                                    ))}
                                    {project.tech.length > 3 && <span className="text-xs px-2 py-1 text-gray-500">+{project.tech.length - 3}</span>}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </section>
    );
}
