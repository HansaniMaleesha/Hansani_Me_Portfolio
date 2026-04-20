import { content } from "../../Content.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { HiX, HiExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  const { projects } = content;
  const [selected, setSelected] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">{projects.subtitle}</p>
          <h2 className="section-title">{projects.title}</h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.items.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative cursor-pointer ${
                i === 0 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
              onClick={() => setSelected(project)}
            >
              {/* Card */}
              <div className="glass-card overflow-hidden h-full flex flex-col hover:border-accent_cyan/30 hover:shadow-glow_cyan transition-all duration-500 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.logo}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg_dark via-bg_dark/40 to-transparent" />

                  {/* Year Chip */}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-bg_dark/70 backdrop-blur-sm border border-border_glass text-accent_cyan">
                    {project.year}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h5 className="mb-3 group-hover:text-accent_cyan transition-colors">{project.title}</h5>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 rounded-md text-[0.7rem] font-medium bg-accent_cyan/10 text-accent_cyan border border-accent_cyan/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-text_muted line-clamp-2 flex-1">
                    {project.description}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-3 mt-4 pt-4 border-t border-border_glass">
                    <button className="text-xs text-text_secondary hover:text-accent_cyan transition-colors flex items-center gap-1">
                      <HiExternalLink /> View Details
                    </button>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-text_secondary hover:text-accent_cyan transition-colors flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <BsGithub /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-bg_dark/80 backdrop-blur-md"
              onClick={() => setSelected(null)}
            />

            {/* Modal Card */}
            <motion.div
              className="relative glass-card p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-bg_dark/50 flex items-center justify-center text-text_muted hover:text-accent_cyan transition-colors"
              >
                <HiX size={18} />
              </button>

              {/* Image */}
              <div className="relative h-56 rounded-xl overflow-hidden mb-6">
                <img
                  src={selected.logo}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg_dark/60 to-transparent" />
              </div>

              {/* Title + Year */}
              <div className="flex items-center gap-3 mb-4">
                <h3 className="!text-2xl">{selected.title}</h3>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent_cyan/10 text-accent_cyan border border-accent_cyan/20">
                  {selected.year}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selected.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 rounded-md text-xs font-medium bg-accent_violet/10 text-accent_violet border border-accent_violet/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-text_secondary leading-relaxed mb-6">
                {selected.description}
              </p>

              {/* GitHub Link */}
              {selected.github && (
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex items-center gap-2"
                >
                  <BsGithub /> View on GitHub
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
