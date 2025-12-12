"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 bg-[#0b0f12] text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-12 items-center"
                >
                    {/* Main Bio */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-green-400">About Me</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            I am <strong className="text-white">Gyanesh Shukla</strong>.
                            With over 1 year of professional experience, I specialize in the <strong className="text-white">MERN Stack, Next.js, and Generative AI</strong>.
                            My passion lies in building scalable, high-performance web applications and exploring the frontiers of AI to solve real-world problems.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Currently, I am focused on integrating advanced AI features into modern web platforms and mastering React Native for cross-platform solutions.
                        </p>

                        {/* Experience & Education Cards */}
                        <div className="grid grid-cols-1 gap-4 mt-8">
                            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-green-500/50 transition-all">
                                <h3 className="text-xl font-bold text-white mb-2">Experience</h3>
                                <p className="text-green-400 font-bold">1+ Year</p>
                                <p className="text-sm text-gray-400">Full-Stack Development</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats / Interactive Element */}
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <div className="p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h3 className="text-2xl font-bold mb-4">Current Focus</h3>
                            <div className="flex flex-wrap gap-3">
                                {["Generative AI", "React Native", "Performance Optimization", "System Design"].map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-gray-800 text-green-300 text-sm rounded-full border border-gray-700">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Placeholder for Timeline or Achievements */}
                        <div className="p-8 bg-gray-900/30 rounded-2xl border border-gray-800">
                            <h4 className="text-xl font-bold mb-4 text-gray-200">Achievements</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500" />
                                    Built scalable APIs with DRF
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500" />
                                    Deployed robust Next.js apps
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500" />
                                    Exploring Gen-AI integrations
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
