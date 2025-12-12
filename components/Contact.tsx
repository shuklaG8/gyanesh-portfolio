"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");
        // Simulate generic submission
        setTimeout(() => {
            setFormStatus("success");
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 bg-[#0b0f12] text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-green-400">Get In Touch</h2>
                        <p className="text-gray-400">Have a project in mind or just want to say hi?</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-800 rounded-lg text-green-400">
                                    <FaEnvelope size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                                    <a href="mailto:gyaneshkumar9648@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                                        gyaneshkumar9648@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-800 rounded-lg text-green-400">
                                    <FaPhone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">Phone</h3>
                                    <a href="tel:+918887731150" className="text-gray-300 hover:text-white transition-colors">
                                        +91 8887731150
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-800 rounded-lg text-green-400">
                                    <FaMapMarkerAlt size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">Location</h3>
                                    <p className="text-gray-300">
                                        Gurugram, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    className="w-full p-4 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green-500 text-white transition-all"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    required
                                    className="w-full p-4 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green-500 text-white transition-all"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Message"
                                    rows={4}
                                    required
                                    className="w-full p-4 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green-500 text-white transition-all resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={formStatus !== "idle"}
                                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {formStatus === "idle" && (
                                    <>Send Message <FaPaperPlane /></>
                                )}
                                {formStatus === "submitting" && "Sending..."}
                                {formStatus === "success" && "Message Sent!"}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
