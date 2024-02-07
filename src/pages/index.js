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
import { useTheme } from "@/content/ThemeContext";
import MobileMenu from "@/components/MobileMenu";

export default function App() {
  const { theme } = useTheme();
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu(!menu);
    console.log("handle check");
  }

  return (
    <div className={`${theme == "dark" ? "bg-gray-800" : " bg-white-100 "} `}>
      <div
        className={`${
          theme == "dark" ? "bg-gray-900" : " bg-white-100 "
        } sm:w-[1440px] w-[800px] mx-auto justify-center align-self `}
      >
        <div>
          <button
            onClick={() => {
              handleMenu();
            }}
          >
            MENU BUTTON
          </button>
          {menu && (
            <div className="fixed z-20">
              {" "}
              <MobileMenu />
            </div>
          )}
          <div>
            <Header />
          </div>

          <Hero />
          <About />
          <Skills />
          <Experience />
          <Work />
          <Contact />
          <Footer />
        </div>{" "}
      </div>
    </div>
  );
}
