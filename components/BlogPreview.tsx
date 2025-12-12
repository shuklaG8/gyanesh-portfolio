"use client";

import { motion } from "framer-motion";

const blogs = [
    {
        title: "The Future of Generative AI in Web Development",
        date: "Dec 10, 2024",
        excerpt: "How LLMs are reshaping the way we build and interact with web applications.",
        tag: "Gen-AI",
    },
    {
        title: "Scaling Next.js Applications",
        date: "Nov 24, 2024",
        excerpt: "Best practices for performance optimization and server-side rendering strategies.",
        tag: "Next.js",
    },
    {
        title: "Building Restful APIs with Django Rest Framework",
        date: "Oct 15, 2024",
        excerpt: "A comprehensive guide to serialization, viewsets, and authentication in DRF.",
        tag: "Backend",
    },
];

export default function BlogPreview() {
    return (
        <section id="blog" className="py-20 bg-[#111827] text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Latest Thoughts</h2>
                    <p className="text-gray-400">Insights on tech, AI, and development.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#1f2937] p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all hover:-translate-y-2"
                        >
                            <span className="text-xs font-bold text-green-400 uppercase tracking-wider mb-2 block">{post.tag}</span>
                            <h3 className="text-xl font-bold mb-3 hover:text-green-300 transition-colors cursor-pointer">{post.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                            <div className="flex justify-between items-center mt-auto">
                                <span className="text-gray-500 text-xs">{post.date}</span>
                                <a href="#" className="text-green-400 hover:text-white text-sm font-medium transition-colors">Read More →</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
