import { useState, useEffect } from "react";
import { content } from "../../Content.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../ThemeContext";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(0);
  const { theme, toggleTheme, isDark } = useTheme();

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer to track active section
  useEffect(() => {
    const sections = nav.map((n) => document.querySelector(n.link));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, [nav]);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
          scrolled
            ? "py-3 bg-bg_dark/70 backdrop-blur-xl border-b border-border_glass shadow-glass"
            : "py-5 bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#home"
            className="font-SpaceGrotesk font-bold text-xl tracking-tight text-text_primary hover:text-accent_cyan transition-colors"
          >
            H<span className="text-accent_cyan">M</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item, i) => (
              <a
                key={i}
                href={item.link}
                onClick={() => setActive(i)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300
                  ${
                    active === i
                      ? "text-accent_cyan"
                      : "text-text_secondary hover:text-text_primary"
                  }`}
              >
                {item.label}
                {active === i && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-lg bg-accent_cyan/10 border border-accent_cyan/20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right side: Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="relative w-10 h-10 rounded-xl glass-card flex items-center justify-center
                hover:border-accent_cyan/30 hover:shadow-glow_cyan transition-all duration-300 group"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiMoon className="text-lg text-accent_cyan" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiSun className="text-lg text-amber-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden relative z-[1001] text-text_primary"
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="fixed inset-0 z-[998] bg-bg_dark/95 backdrop-blur-xl flex items-center justify-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-6">
              {nav.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  onClick={() => {
                    setActive(i);
                    setShowMenu(false);
                  }}
                  className={`text-2xl font-SpaceGrotesk font-medium transition-colors
                    ${active === i ? "text-accent_cyan" : "text-text_secondary hover:text-text_primary"}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item.label}
                </motion.a>
              ))}

              {/* Theme toggle in mobile menu too */}
              <motion.button
                onClick={toggleTheme}
                className="mt-4 flex items-center gap-3 px-5 py-3 rounded-xl glass-card text-text_secondary hover:text-accent_cyan transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {isDark ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
                <span className="text-sm font-medium">
                  {isDark ? "Light Mode" : "Dark Mode"}
                </span>
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
