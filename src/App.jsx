import React, { lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Layouts/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Roles from "./components/Roles";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import { content } from "../Content.jsx";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaMedium } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const App = () => {
  const { footer, hero } = content;

  return (
    <AnimatePresence>
      <div className="relative">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Roles />
          <Skills />
          <Education />
          <Projects />
          <Experience />
          <Blogs />
          <Contact />
        </main>

        {/* ─── Footer ─────────────────────────────────────────── */}
        <footer className="relative py-12 border-t border-border_glass">
          {/* Gradient divider line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-accent_cyan to-transparent" />

          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
            {/* Name + tagline */}
            <div className="text-center">
              <h4 className="font-SpaceGrotesk font-bold mb-1">
                Hansani <span className="gradient-text">Maleesha</span>
              </h4>
              <p className="text-sm text-text_muted">Code. Innovate. Deliver.</p>
            </div>

            {/* Social icons */}
            <div className="flex gap-4">
              {[
                { icon: BsGithub, url: "https://github.com/HansaniMaleesha" },
                { icon: BsLinkedin, url: "https://www.linkedin.com/in/hansani-maleesha/" },
                { icon: FaMedium, url: "https://medium.com/@maleesha0003" },
                { icon: GrMail, url: "mailto:hansanimaleeshamaduwanthi@gmail.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center
                    text-text_muted hover:text-accent_cyan hover:border-accent_cyan/30 hover:shadow-glow_cyan
                    transition-all duration-300 hover:-translate-y-1"
                >
                  {React.createElement(social.icon, { className: "text-lg" })}
                </a>
              ))}
            </div>

            {/* Credit line */}
            <p className="text-xs text-text_muted">{footer.text}</p>

            {/* Copyright */}
            <p className="text-xs text-text_muted/60">{footer.copyright}</p>
          </div>
        </footer>
      </div>
    </AnimatePresence>
  );
};

export default App;
