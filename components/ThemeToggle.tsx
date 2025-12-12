"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        // Check local storage or system preference on mount
        const savedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setDarkMode(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-800 text-yellow-400 hover:bg-gray-700 transition-colors"
            aria-label="Toggle Theme"
        >
            {darkMode ? <FaMoon className="text-blue-300" /> : <FaSun />}
        </button>
    );
}
