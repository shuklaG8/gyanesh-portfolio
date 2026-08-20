"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import Image from "next/image";

const floatingOrbs = [
    { size: 10, top: "15%", left: "10%", delay: 0, duration: 5 },
    { size: 6, top: "70%", left: "15%", delay: 1, duration: 6 },
    { size: 12, top: "25%", left: "85%", delay: 0.5, duration: 7 },
    { size: 8, top: "80%", left: "80%", delay: 1.5, duration: 5.5 },
    { size: 7, top: "50%", left: "5%", delay: 2, duration: 6.5 },
];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0b0f12] pt-24 pb-16 md:py-28">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[550px] h-[550px] bg-green-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] animate-float" />
                <div className="absolute top-1/3 left-1/2 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[100px] animate-gradient-shift" />

                {floatingOrbs.map((orb, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-green-400/20 backdrop-blur-md"
                        style={{
                            width: orb.size,
                            height: orb.size,
                            top: orb.top,
                            left: orb.left,
                        }}
                        animate={{
                            y: [0, -24, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: orb.duration,
                            repeat: Infinity,
                            delay: orb.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-center relative z-10">
                {/* Left Content Column */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-7 text-left order-2 lg:order-1"
                >
                    {/* Availability Tag */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs md:text-sm font-mono mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                        <span>AI/GenAI Engineer & Full Stack Developer</span>
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
                        Gyanesh Shukla
                        <span className="block text-xl sm:text-2xl md:text-3xl font-bold text-gray-400 mt-2">
                            AI/GenAI Engineer | AI Engineer | Full Stack Developer
                        </span>
                    </h1>

                    {/* Animated Role Sequence */}
                    <div className="text-xl sm:text-2xl md:text-3xl text-green-400 font-semibold mb-6 h-[44px] flex items-center">
                        <TypeAnimation
                            sequence={[
                                "AI / GenAI Specialist",
                                2000,
                                "RAG Pipeline Architect",
                                2000,
                                "LangChain & LangGraph Developer",
                                2000,
                                "MCP Integration Engineer",
                                2000,
                                "FastAPI & MERN Full-Stack",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>

                    {/* Resume Professional Summary */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-2xl text-justify"
                    >
                        AI/GenAI Engineer and Full Stack Developer with <strong className="text-white">3+ years</strong> building RAG pipelines, LLM-powered applications, and agentic AI workflows with <strong className="text-green-400">LangChain, LangGraph, and MCP-aligned tool interfaces</strong>. Skilled in vector databases (Pinecone, Qdrant, FAISS, ChromaDB) and full-stack delivery across MERN and FastAPI.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="flex flex-wrap gap-4"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-7 py-3.5 text-sm md:text-base bg-green-500 hover:bg-green-600 text-black font-extrabold rounded-xl transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                        >
                            View Projects
                        </motion.a>
                        <motion.a
                            href="#about"
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-7 py-3.5 text-sm md:text-base bg-gray-900/90 border border-green-500/40 text-green-400 hover:bg-green-500/10 font-bold rounded-xl transition-all"
                        >
                            Experience & Bio
                        </motion.a>
                    </motion.div>

                    {/* Contact Pills */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="flex flex-wrap gap-6 items-center mt-10 text-gray-400 text-sm border-t border-gray-800/80 pt-6"
                    >
                        <a href="mailto:gshukla.ai.dev@gmail.com" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                            <FaEnvelope className="text-green-400" />
                            <span>gshukla.ai.dev@gmail.com</span>
                        </a>
                        <a href="tel:+918887731150" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                            <FaPhone className="text-green-400" />
                            <span>+91 8887731150</span>
                        </a>
                        <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-green-400" />
                            <span>Noida, India</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Column - Avatar Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:col-span-5 flex justify-center items-center relative order-1 lg:order-2"
                >
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-cyan-500/20 rounded-full flex items-center justify-center border border-white/10 backdrop-blur-md animate-float shadow-2xl">
                        <div className="absolute inset-0 rounded-full border border-green-500/30 animate-spin-slow" />
                        <div
                            className="absolute inset-4 rounded-full border border-dashed border-cyan-500/30 animate-spin-slow"
                            style={{ animationDirection: "reverse", animationDuration: "35s" }}
                        />
                        <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden bg-gray-900 border-4 border-gray-800 relative z-10 flex items-center justify-center shadow-inner">
                            <Image src="/gyanesh.jpeg" alt="Gyanesh Shukla" fill className="object-cover" priority />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

