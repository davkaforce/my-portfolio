import { useState } from "react";
import { Tailwind } from "./tailwindcss";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="container mx-auto">
      <div className="h-[5758px] justify-center align-self">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Contact />
        <Footer />
      </div>{" "}
    </div>
  );
}
