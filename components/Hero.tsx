"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const floatingOrbs = [
    { size: 8, top: "15%", left: "10%", delay: 0, duration: 5 },
    { size: 6, top: "70%", left: "20%", delay: 1, duration: 6 },
    { size: 10, top: "30%", left: "85%", delay: 0.5, duration: 7 },
    { size: 5, top: "80%", left: "75%", delay: 1.5, duration: 5.5 },
    { size: 7, top: "50%", left: "5%", delay: 2, duration: 6.5 },
];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0b0f12] pt-20 pb-10 md:pb-0">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-float" />
                <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px] animate-gradient-shift" />

                {floatingOrbs.map((orb, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-green-400/20"
                        style={{
                            width: orb.size,
                            height: orb.size,
                            top: orb.top,
                            left: orb.left,
                        }}
                        animate={{
                            y: [0, -20, 0],
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

            <div className="container mx-auto px-8 md:px-20 grid md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left order-2 md:order-none"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-green-400 font-mono text-lg mb-4 block"
                    >
                        Hi, I&apos;m
                    </motion.span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Gyanesh Shukla
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="block text-gray-400 text-2xl md:text-4xl mt-2"
                        >
                            AI & Full-Stack Engineer
                        </motion.span>
                    </h1>

                    <div className="text-xl md:text-2xl text-green-400 font-semibold mb-6 h-[40px]">
                        <TypeAnimation
                            sequence={[
                                "LangChain Developer",
                                2000,
                                "RAG Pipeline Architect",
                                2000,
                                "LangGraph Agent Builder",
                                2000,
                                "MCP Integration Specialist",
                                2000,
                                "Next.js Full-Stack",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed text-justify"
                    >
                        3+ years building intelligent applications — from RAG-powered knowledge systems and
                        LangGraph multi-agent workflows to production-ready full-stack platforms with Next.js and Node.js.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="flex gap-4"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-6 py-2 md:px-8 md:py-3 text-sm md:text-base bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-green-500/25"
                        >
                            View Projects
                        </motion.a>
                        <motion.a
                            href="/gyanesh.pdf"
                            download
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-6 py-2 md:px-8 md:py-3 text-sm md:text-base bg-transparent border border-green-500 text-green-400 font-bold rounded-lg hover:bg-green-500/10 transition-all"
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="flex gap-6 mt-8"
                    >
                        {[
                            { href: "https://github.com/shuklaG8", icon: FaGithub, hover: "hover:text-white" },
                            { href: "https://www.linkedin.com/in/gyanesh-shukla", icon: FaLinkedin, hover: "hover:text-blue-400" },
                            { href: "https://www.instagram.com/adventurer_boy1?igsh=MTNmeHoyYjU3bTlvbA==", icon: FaInstagram, hover: "hover:text-pink-500" },
                        ].map(({ href, icon: Icon, hover }) => (
                            <motion.a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.2, y: -3 }}
                                className={`text-gray-400 ${hover} transition-colors text-lg md:text-xl`}
                            >
                                <Icon />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Content - Avatar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center items-center h-[400px] md:h-[500px] order-1 md:order-none"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-white/10 backdrop-blur-sm animate-float animate-glow-pulse">
                        <div className="absolute inset-0 rounded-full border border-green-500/30 animate-spin-slow" />
                        <div className="absolute inset-4 rounded-full border border-dashed border-green-500/20 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
                        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden bg-gray-800 border-4 border-gray-700/50 relative z-10 flex items-center justify-center">
                            <Image src="/gyanesh.jpeg" alt="Gyanesh Shukla" fill className="object-cover" />
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="relative mt-8 md:mt-0 md:absolute md:bottom-10 md:left-1/2 md:transform md:-translate-x-1/2 flex flex-col items-center animate-bounce"
            >
                <span className="text-gray-500 text-sm mb-2">Scroll</span>
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-green-500 rounded-full animate-scroll-down" />
                </div>
            </motion.div>
        </section>
    );
}
