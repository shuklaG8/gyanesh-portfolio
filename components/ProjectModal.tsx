"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
    title: string;
    img: string; // Placeholder or actual image path
    desc: string;
    role: string;
    tech: string[];
    repo?: string;
    live?: string;
}

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="bg-[#1f2937] w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl relative border border-gray-700"
                    onClick={(e: React.MouseEvent) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 p-2 bg-black/50 rounded-full"
                    >
                        <FaTimes size={20} />
                    </button>

                    {/* Image Area */}
                    <div className="h-64 md:h-80 bg-gray-800 relative">
                        {/* Replace with Next/Image later */}
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                            {project.img ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-2xl">[Project Screenshot]</span>
                            )}
                        </div>
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#1f2937] to-transparent h-20" />
                    </div>

                    <div className="p-8">
                        <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-green-400 font-medium mb-4">{project.role}</p>

                        <p className="text-gray-300 leading-relaxed mb-6">
                            {project.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tech.map((t) => (
                                <span key={t} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs border border-gray-600">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            {project.live && (
                                <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-semibold">
                                    <FaExternalLinkAlt size={14} /> Live Demo
                                </a>
                            )}
                            {project.repo && (
                                <a href={project.repo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-semibold">
                                    <FaGithub size={16} /> Source Code
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
