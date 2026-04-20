import { content } from "../../Content.jsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { createElement } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

const Experience = () => {
  const { experience } = content;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      <div ref={ref} className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">{experience.subtitle}</p>
          <h2 className="section-title">{experience.title}</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent_cyan via-accent_violet to-accent_pink" />

          {experience.items.map((item, i) => {
            const isLeft = i % 2 === 0;
            const icon = item.type === "education" ? FaGraduationCap : FaBriefcase;
            const iconColor = item.type === "education" ? "#7b2ff7" : "#00d4ff";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex items-start mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 border-2"
                  style={{
                    background: "var(--timeline-dot-bg)",
                    borderColor: iconColor,
                    boxShadow: `0 0 15px ${iconColor}40`,
                  }}
                >
                  {createElement(icon, {
                    className: "text-sm",
                    style: { color: iconColor },
                  })}
                </div>

                {/* Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                  }`}
                >
                  <div className="glass-card-hover p-6">
                    {/* Period badge */}
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent_cyan/10 text-accent_cyan border border-accent_cyan/20 mb-3">
                      {item.period}
                    </span>

                    <h5 className="mb-1">{item.title}</h5>
                    <p className="text-sm text-accent_cyan mb-3">{item.company}</p>
                    <p className="text-sm text-text_muted leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                      {item.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="px-2 py-0.5 rounded text-[0.65rem] font-medium bg-accent_violet/10 text-accent_violet"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
