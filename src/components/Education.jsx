import { content } from "../../Content.jsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const { education } = content;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="relative py-24 md:py-32 overflow-hidden bg-bg_dark/50">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">{education.subtitle}</p>
          <h2 className="section-title">{education.title}</h2>
        </motion.div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="group relative"
            >
              <div className="glass-card-hover p-8 h-full flex flex-col">
                {/* Header: Icon + Period */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent_violet/10 flex items-center justify-center text-accent_violet border border-accent_violet/20 group-hover:scale-110 transition-transform duration-300">
                    <FaGraduationCap className="text-2xl" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent_cyan/10 text-accent_cyan border border-accent_cyan/20">
                    {item.period}
                  </span>
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold mb-2 group-hover:text-accent_cyan transition-colors">
                  {item.title}
                </h4>
                <p className="text-accent_violet font-medium mb-4 text-sm uppercase tracking-wider">
                  {item.institution}
                </p>
                <p className="text-text_muted text-sm leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
