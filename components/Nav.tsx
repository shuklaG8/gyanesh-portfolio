"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import clsx from "clsx";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
];

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md",
                scrolled ? "bg-black/80 py-3 shadow-lg" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    Gyanesh.
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-green-400 transition-colors font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="/gyanesh1.pdf"
                        download
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all shadow-lg hover:shadow-green-500/20"
                    >
                        <FaDownload size={14} /> Resume
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-300 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-xl border-b border-gray-800 p-6 flex flex-col space-y-4 shadow-2xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg text-gray-300 hover:text-green-400"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg"
                    >
                        <FaDownload size={14} /> Download Resume
                    </a>
                </div>
            )}
        </nav>
    );
}
