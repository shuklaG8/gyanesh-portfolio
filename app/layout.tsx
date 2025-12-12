import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Gyanesh Shukla | Software Engineer & Gen-AI Developer",
  description: "Portfolio of Gyanesh Shukla - BCA, MERN, Next.js, and Gen-AI Developer building scalable and beautiful apps.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-[#0b0f12] text-white overflow-x-hidden`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
