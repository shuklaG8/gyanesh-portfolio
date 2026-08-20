"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaLayerGroup, FaCheckCircle, FaCode } from "react-icons/fa";

export interface Project {
    title: string;
    subtitle: string;
    desc: string;
    highlights: string[];
    tech: string[];
    gradient: string;
    category: string;
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
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-6 overflow-y-auto"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="bg-[#12181f] w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative border border-gray-800 my-8"
                    onClick={(e: React.MouseEvent) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white z-20 p-2.5 bg-black/60 hover:bg-black/90 rounded-full transition-all border border-gray-700/50"
                        aria-label="Close modal"
                    >
                        <FaTimes size={18} />
                    </button>

                    {/* Gradient Header Banner */}
                    <div className={`h-40 md:h-52 bg-gradient-to-r ${project.gradient} p-8 flex flex-col justify-end relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
                        <div className="absolute -right-10 -bottom-10 opacity-10 text-white pointer-events-none">
                            <FaCode size={200} />
                        </div>
                        <div className="relative z-10">
                            <span className="px-3 py-1 bg-black/60 text-green-300 font-mono text-xs rounded-full border border-green-500/30 uppercase tracking-widest inline-block mb-2">
                                {project.category}
                            </span>
                            <h3 className="text-2xl md:text-4xl font-extrabold text-white leading-tight drop-shadow-md">
                                {project.title}
                            </h3>
                            <p className="text-emerald-200 text-sm font-medium mt-1 drop-shadow">
                                {project.subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Modal Content Body */}
                    <div className="p-6 md:p-8 space-y-6">
                        {/* Key Highlights */}
                        <div>
                            <h4 className="text-base font-bold text-gray-200 mb-3 flex items-center gap-2">
                                <FaCheckCircle className="text-green-400" /> Key Features & Architecture
                            </h4>
                            <ul className="space-y-2.5">
                                {project.highlights.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm md:text-base leading-relaxed bg-gray-900/50 p-3.5 rounded-xl border border-gray-800/80">
                                        <span className="w-2 h-2 rounded-full bg-green-400 mt-2 shrink-0" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Technologies Used Section ONLY */}
                        <div>
                            <h4 className="text-base font-bold text-gray-200 mb-3 flex items-center gap-2">
                                <FaLayerGroup className="text-cyan-400" /> Technologies & Tools
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-3.5 py-1.5 bg-gradient-to-r from-gray-900 to-gray-800 text-green-300 rounded-lg text-xs md:text-sm font-mono border border-green-500/20 shadow-sm"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Close Footer Action */}
                        <div className="pt-4 border-t border-gray-800/80 flex justify-end">
                            <button
                                onClick={onClose}
                                className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white rounded-xl text-sm font-semibold transition-all border border-gray-700"
                            >
                                Close Details
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

