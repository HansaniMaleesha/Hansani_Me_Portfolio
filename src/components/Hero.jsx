import { content } from "../../Content.jsx";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { HiArrowDown } from "react-icons/hi";

const ParticleField = lazy(() => import("./Three/ParticleField"));

const Hero = () => {
  const { hero } = content;

  // Build typing sequence: ["Software Engineer", 2000, "System Engineer", 2000, ...]
  const typingSequence = hero.typingTexts.flatMap((text) => [text, 2000]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Particle Background */}
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg_dark/30 to-bg_dark pointer-events-none -z-[5]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* Left – Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-accent_cyan font-Inter text-sm tracking-[0.25em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Hello, I&apos;m
          </motion.p>

          <h1 className="!text-5xl md:!text-7xl mb-2">
            {hero.firstName}{" "}
            <span className="gradient-text">{hero.lastName}</span>
          </h1>

          <div className="h-10 md:h-12 flex items-center justify-center md:justify-start mb-6">
            <span className="text-text_secondary font-SpaceGrotesk text-xl md:text-2xl mr-2">I&apos;m a</span>
            <TypeAnimation
              sequence={typingSequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-SpaceGrotesk text-xl md:text-2xl text-accent_cyan font-semibold"
            />
          </div>

          <p className="max-w-lg mx-auto md:mx-0 mb-8 text-text_secondary leading-relaxed">
            {hero.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center md:justify-start mb-8">
            <a href="#contact">
              <button className="btn-primary">{hero.btnText}</button>
            </a>
            <a href="/mycv/HansaniMaleesha_SE.pdf" download>
              <button className="btn-ghost flex items-center gap-2">
                <HiArrowDown className="text-lg" />
                {hero.resumeBtn}
              </button>
            </a>
          </div>

          {/* Social links */}
          <motion.div
            className="flex gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {hero.logos.map((logo, i) => (
              <a
                key={i}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass-card flex items-center justify-center
                  hover:border-accent_cyan hover:shadow-glow_cyan transition-all duration-300 hover:-translate-y-1"
              >
                <img src={logo.logo} alt={logo.name} className="w-5 h-5 opacity-80 hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right – Hexagonal Profile Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
        >
          <div className="relative">
            {/* Glow ring */}
            <div
              className="absolute inset-0 hex-frame animate-pulse-glow"
              style={{
                background: "linear-gradient(135deg, #00d4ff, #7b2ff7)",
                transform: "scale(1.06)",
                filter: "blur(8px)",
                opacity: 0.5,
              }}
            />
            {/* Image */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 hex-frame overflow-hidden">
              <img
                src={hero.image}
                alt="Hansani Maleesha"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent_violet/20 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text_muted hover:text-accent_cyan transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <HiArrowDown className="text-lg" />
      </motion.a>
    </section>
  );
};

export default Hero;
