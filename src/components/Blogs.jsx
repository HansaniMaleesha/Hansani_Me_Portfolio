import { content } from "../../Content.jsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { FaMedium } from "react-icons/fa";
import { HiClock, HiArrowRight } from "react-icons/hi";

const Blogs = () => {
  const { blogs } = content;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const scrollRef = useRef(null);

  return (
    <section id="blogs" className="relative py-24 md:py-32 overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">{blogs.subtitle}</p>
          <h2 className="section-title">{blogs.title}</h2>
        </motion.div>

        {/* Horizontal Scroll Carousel */}
        <motion.div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          drag="x"
          dragConstraints={scrollRef}
          style={{ cursor: "grab" }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {blogs.items.map((blog, i) => (
            <motion.a
              key={i}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[320px] sm:w-[360px] snap-center group"
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.12 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="glass-card overflow-hidden h-full flex flex-col hover:border-accent_cyan/30 hover:shadow-glow_cyan transition-all duration-500">
                {/* Blog Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg_dark via-bg_dark/30 to-transparent" />

                  {/* Medium badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg_dark/70 backdrop-blur-sm border border-border_glass">
                    <FaMedium className="text-accent_cyan text-sm" />
                    <span className="text-xs font-medium text-text_secondary">Medium</span>
                  </div>

                  {/* Read time */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-bg_dark/70 backdrop-blur-sm border border-border_glass">
                    <HiClock className="text-accent_violet text-xs" />
                    <span className="text-[0.65rem] text-text_muted">{blog.readTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h6 className="mb-4 line-clamp-3 leading-snug group-hover:text-accent_cyan transition-colors">
                    {blog.title}
                  </h6>

                  <div className="mt-auto flex items-center gap-2 text-sm text-accent_cyan font-medium">
                    <span>Read Article</span>
                    <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll hint (mobile) */}
        <p className="text-center text-text_muted text-xs mt-4 md:hidden">
          ← Swipe to explore →
        </p>
      </div>
    </section>
  );
};

export default Blogs;
