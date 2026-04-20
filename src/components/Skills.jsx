import { content } from "../../Content.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, createElement } from "react";

const Skills = () => {
  const { skills } = content;
  const [activeCategory, setActiveCategory] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const currentSkills = skills.categories[activeCategory].skills;

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">{skills.subtitle}</p>
          <h2 className="section-title">{skills.title}</h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {skills.categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                ${
                  activeCategory === i
                    ? "bg-gradient-to-r from-accent_cyan to-accent_violet text-white shadow-glow_cyan"
                    : "glass-card text-text_secondary hover:text-text_primary hover:border-accent_cyan/30"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {currentSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card-hover p-5 flex flex-col items-center gap-3 group cursor-default"
              >
                {/* Skill Icon */}
                <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {skill.logo ? (
                    <img src={skill.logo} alt={skill.name} className="w-10 h-10 object-contain" />
                  ) : skill.icon ? (
                    createElement(skill.icon, {
                      className: "text-3xl text-accent_cyan",
                    })
                  ) : null}
                </div>

                {/* Skill Name */}
                <h6 className="text-sm text-center">{skill.name}</h6>

                {/* Progress Bar */}
                <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: "var(--progress-bar-bg)" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #00d4ff, #7b2ff7)",
                    }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: i * 0.08, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
