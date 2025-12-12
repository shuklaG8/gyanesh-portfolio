"use client";

import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaServer, FaRobot, FaRocket } from "react-icons/fa";

const services = [
    {
        title: "Full-Stack Web Dev",
        desc: "Building blazing fast web apps with Next.js, React, and Tailwind CSS.",
        icon: <FaCode />,
    },
    {
        title: "Application Development",
        desc: "Cross-platform mobile apps using React Native for iOS and Android.",
        icon: <FaMobileAlt />,
    },
    {
        title: "Backend & APIs",
        desc: "Scalable REST APIs using Django Rest Framework (DRF) and Node.js.",
        icon: <FaServer />,
    },
    {
        title: "Generative AI",
        desc: "Integrating LLMs and AI models to create intelligent applications.",
        icon: <FaRobot />,
    },
    {
        title: "Performance & SEO",
        desc: "Optimizing apps for speed (Core Web Vitals) and search engine ranking.",
        icon: <FaRocket />,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-[#111827] text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                        What I Do
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        High-quality services tailored to modern web and mobile needs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 bg-[#1f2937] rounded-2xl hover:bg-[#374151] transition-all hover:-translate-y-2 hover:shadow-xl border border-gray-700 hover:border-green-500/50 group"
                        >
                            <div className="text-4xl text-green-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
