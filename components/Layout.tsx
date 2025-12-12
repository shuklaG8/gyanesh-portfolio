"use client";

import { Inter, Poppins } from "next/font/google"; // Import fonts
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    // Theme persistence logic can go here or in a context provider
    // For now, we force dark mode as per requirements, but allow toggle logic

    return (
        <div className={clsx(inter.variable, poppins.variable, "antialiased min-h-screen flex flex-col")}>
            <main className="flex-grow">{children}</main>
        </div>
    );
}
