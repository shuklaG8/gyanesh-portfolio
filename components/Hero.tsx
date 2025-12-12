"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0f12] pt-20">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-8 md:px-20 grid md:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    <span className="text-green-400 font-mono text-lg mb-4 block">Hi, I’m</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Gyanesh Shukla
                        <span className="block text-gray-400 text-2xl md:text-4xl mt-2">Software Engineer</span>
                    </h1>

                    <div className="text-xl md:text-2xl text-green-400 font-semibold mb-6 h-[40px]">
                        <TypeAnimation
                            sequence={[
                                "MERN Developer",
                                2000,
                                "Next.js Fullstack",
                                2000,
                                "React Native",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed text-justify">
                        I'm a skilled software developer with experience in JavaScript, React, Node.js, React Native, and MongoDB.
                        I am experienced in developing admin panels and websites. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-green-500/25 transform hover:-translate-y-1"
                        >
                            View Projects
                        </a>
                        <a
                            href="/gyanesh1.pdf"
                            download
                            className="px-8 py-3 bg-transparent border border-green-500 text-green-400 font-bold rounded-lg hover:bg-green-500/10 transition-all"
                        >
                            Download Resume
                        </a>
                    </div>

                    <div className="flex gap-6 mt-8">
                        <a href="https://github.com/shuklaG8" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-xl">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/gyanesh-shukla" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors text-xl">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/adventurer_boy1?igsh=MTNmeHoyYjU3bTlvbA==" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors text-xl">
                            <FaInstagram />
                        </a>
                    </div>
                </motion.div>

                {/* Right Content - Abstract Shape / Avatar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center items-center h-[400px] md:h-[500px]"
                >
                    {/* Central glowing orb/avatar placeholder */}
                    <div className="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-white/10 backdrop-blur-sm animate-float">
                        <div className="absolute inset-0 rounded-full border border-green-500/30 animate-spin-slow"></div>
                        {/* Core Avatar Image */}
                        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden bg-gray-800 border-4 border-gray-700/50 relative z-10 flex items-center justify-center">
                            <img src="/gyanesh.jpeg" alt="Gyanesh Shukla" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-gray-500 text-sm mb-2">Scroll</span>
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-green-500 rounded-full animate-scroll-down" />
                </div>
            </div>
        </section >
    );
}
