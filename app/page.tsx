import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0b0f12] overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <BlogPreview />
      <Contact />
    </main>
  );
}
