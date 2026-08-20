"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub } from "react-icons/fa";

const CONTACT_EMAIL = "gshukla.ai.dev@gmail.com";
const CONTACT_PHONE = "+91 8887731150";

export default function Contact() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
        const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

        const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="py-24 bg-[#0b0f12] text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <span className="text-green-400 text-sm uppercase tracking-widest font-mono font-semibold px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 inline-block mb-4">
                            Connect & Collaborate
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400 animate-gradient-shift">
                            Get In Touch
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
                            Available for AI engineering, RAG pipeline architecture, full-stack development, and consultancy opportunities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 bg-gray-900/40 border border-gray-800 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-2xl">
                        {/* Contact Info */}
                        <div className="space-y-8 flex flex-col justify-between">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 group">
                                    <div className="p-4 bg-gray-800/80 rounded-2xl text-green-400 border border-gray-700/60 group-hover:bg-green-500 group-hover:text-black transition-all">
                                        <FaEnvelope size={22} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-1">Email Address</h3>
                                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-lg font-bold text-white hover:text-green-400 transition-colors">
                                            {CONTACT_EMAIL}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="p-4 bg-gray-800/80 rounded-2xl text-green-400 border border-gray-700/60 group-hover:bg-green-500 group-hover:text-black transition-all">
                                        <FaPhone size={22} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-1">Phone / WhatsApp</h3>
                                        <a href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`} className="text-lg font-bold text-white hover:text-green-400 transition-colors">
                                            {CONTACT_PHONE}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="p-4 bg-gray-800/80 rounded-2xl text-green-400 border border-gray-700/60 group-hover:bg-green-500 group-hover:text-black transition-all">
                                        <FaMapMarkerAlt size={22} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-1">Location & Work Mode</h3>
                                        <p className="text-base font-bold text-white">Noida, India</p>
                                        <p className="text-xs text-gray-400 mt-1">Open to: Delhi NCR, Gurugram, Lucknow, Remote</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Profiles */}
                            <div className="pt-6 border-t border-gray-800/80 flex items-center gap-4">
                                <a
                                    href="https://github.com/shuklaG8"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-3 bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 rounded-xl transition-all border border-gray-700"
                                    aria-label="GitHub Profile"
                                >
                                    <FaGithub size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/gyanesh-shukla"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-3 bg-gray-800 text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded-xl transition-all border border-gray-700"
                                    aria-label="LinkedIn Profile"
                                >
                                    <FaLinkedin size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-mono text-gray-400 mb-1">YOUR NAME</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    required
                                    minLength={2}
                                    className="w-full p-4 bg-gray-950/80 border border-gray-800 rounded-xl focus:outline-none focus:border-green-500 text-white transition-all text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-gray-400 mb-1">YOUR EMAIL</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    required
                                    className="w-full p-4 bg-gray-950/80 border border-gray-800 rounded-xl focus:outline-none focus:border-green-500 text-white transition-all text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-gray-400 mb-1">YOUR MESSAGE</label>
                                <textarea
                                    name="message"
                                    placeholder="Describe your project requirement or inquiry..."
                                    rows={4}
                                    required
                                    minLength={10}
                                    className="w-full p-4 bg-gray-950/80 border border-gray-800 rounded-xl focus:outline-none focus:border-green-500 text-white transition-all resize-none text-sm"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-green-500 hover:bg-green-600 text-black font-extrabold rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)] text-base cursor-pointer"
                            >
                                Send Message <FaPaperPlane size={15} />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

