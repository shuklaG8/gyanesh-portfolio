"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SkillIconProps {
    icon: ReactNode;
    name: string;
    delay?: number;
}

export default function SkillIcon({ icon, name, delay = 0 }: SkillIconProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: delay,
            }}
            viewport={{ once: true }}
            className="relative group w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center p-2"
        >
            <motion.div
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: Math.random() * 2,
                }}
                className="relative w-full h-full flex items-center justify-center"
            >
                {/* Faceted Background */}
                <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110">
                    <svg
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full drop-shadow-2xl"
                    >
                        {/* Base shape */}
                        <path
                            d="M50 2 L85 20 L98 50 L85 80 L50 98 L15 80 L2 50 L15 20 Z"
                            fill="#e5e7eb" /* gray-200 */
                        />

                        {/* Facets for 3D effect */}
                        <path
                            d="M50 2 L85 20 L50 50 Z"
                            fill="#f3f4f6" /* gray-100 */
                            className="opacity-90"
                        />
                        <path
                            d="M85 20 L98 50 L50 50 Z"
                            fill="#d1d5db" /* gray-300 */
                            className="opacity-90"
                        />
                        <path
                            d="M98 50 L85 80 L50 50 Z"
                            fill="#9ca3af" /* gray-400 */
                            className="opacity-80"
                        />
                        <path
                            d="M85 80 L50 98 L50 50 Z"
                            fill="#6b7280" /* gray-500 */
                            className="opacity-70"
                        />
                        <path
                            d="M50 98 L15 80 L50 50 Z"
                            fill="#9ca3af" /* gray-400 */
                            className="opacity-80"
                        />
                        <path
                            d="M15 80 L2 50 L50 50 Z"
                            fill="#d1d5db" /* gray-300 */
                            className="opacity-90"
                        />
                        <path
                            d="M2 50 L15 20 L50 50 Z"
                            fill="#f3f4f6" /* gray-100 */
                            className="opacity-90"
                        />
                        <path
                            d="M15 20 L50 2 L50 50 Z"
                            fill="#ffffff" /* white */
                            className="opacity-95"
                        />
                    </svg>
                </div>

                {/* Icon */}
                <div className="relative z-10 text-4xl sm:text-5xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {icon}
                </div>

                {/* Tooltip */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-20">
                    <div className="relative bg-gray-900 text-white text-xs sm:text-sm py-1 px-3 rounded-md font-medium whitespace-nowrap border border-gray-700 shadow-xl">
                        {name}
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 border-t border-l border-gray-700"></div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
