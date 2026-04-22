import { content } from "../../Content.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { HiX, HiExternalLink, HiArrowNarrowRight } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  const { projects } = content;
  const [selected, setSelected] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent_cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent_violet/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-subtitle">{projects.subtitle}</span>
          <h2 className="section-title !text-4xl md:!text-5xl lg:!text-6xl gradient-text pb-2">
            {projects.title}
          </h2>
        </motion.div>

        {/* Premium Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.items.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`group relative perspective-1000 ${
                i === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div
                className="relative h-full min-h-[400px] rounded-3xl overflow-hidden glass-card border-none cursor-pointer group/card"
                onClick={() => setSelected(project)}
              >
                {/* project Image with Zoom effect */}
                <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover/card:scale-110">
                  <img
                    src={project.logo}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle Grain Overlay */}
                  <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </div>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg_dark/95 via-bg_dark/40 to-transparent transition-opacity duration-500 opacity-60 group-hover/card:opacity-90" />
                
                {/* Card Content (Always visible items) */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-accent_cyan/20 text-accent_cyan border border-accent_cyan/30 backdrop-blur-md mb-4 transform group-hover/card:-translate-y-2 transition-transform duration-500">
                      {project.year}
                    </span>
                    <h3 className="!text-2xl md:!text-3xl font-bold mb-2 group-hover/card:text-accent_cyan transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Hidden on default, reveal on hover (Desktop) */}
                  <div className="max-h-0 overflow-hidden group-hover/card:max-h-40 transition-all duration-700 ease-in-out opacity-0 group-hover/card:opacity-100">
                    <p className="text-text_secondary text-sm mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 4).map((tag, j) => (
                        <span key={j} className="text-[10px] font-medium text-accent_violet bg-accent_violet/5 px-2 py-0.5 rounded border border-accent_violet/10">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button className="flex items-center gap-2 text-accent_cyan font-semibold text-sm group/btn">
                      Explore Case Study <HiArrowNarrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Interactive Border Glow */}
                <div className="absolute inset-0 border-[1.5px] border-white/5 rounded-3xl group-hover/card:border-accent_cyan/30 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modern Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop with Blur */}
            <motion.div
              className="absolute inset-0 bg-bg_dark/80 backdrop-blur-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setSelected(null)}
            />

            {/* Modal Content container */}
            <motion.div
              className="relative w-full max-w-5xl bg-bg_dark/60 rounded-[40px] border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
              initial={{ y: 100, scale: 0.9, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 100, scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* project Image Side */}
              <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                <img
                  src={selected.logo}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg_dark/80 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg_dark/80 to-transparent md:hidden" />
              </div>

              {/* project Details Side */}
              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-6 right-6 w-12 h-12 rounded-full glass-card flex items-center justify-center text-text_muted hover:text-accent_cyan transition-all duration-300 hover:rotate-90"
                >
                  <HiX size={24} />
                </button>

                <div className="mb-10">
                  <span className="text-accent_cyan font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                    Project Archive // {selected.year}
                  </span>
                  <h3 className="!text-4xl md:!text-5xl font-black mb-6 leading-tight">
                    {selected.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {selected.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-4 py-1.5 rounded-full text-[10px] font-bold bg-white/5 border border-white/10 text-text_secondary uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 flex-1">
                  <div>
                    <h5 className="text-accent_cyan text-xs font-bold uppercase tracking-widest mb-3">The Brief</h5>
                    <p className="text-text_secondary text-lg leading-relaxed">
                      {selected.description}
                    </p>
                  </div>
                </div>

                <div className="pt-10 mt-10 border-t border-white/5 flex flex-wrap gap-4">
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !px-8 !py-4 flex items-center gap-3 no-underline shadow-glow_cyan"
                    >
                      <BsGithub size={20} /> Repository
                    </a>
                  )}
                  <button onClick={() => setSelected(null)} className="btn-ghost !px-8 !py-4">
                    Close Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
