import { content } from "../../Content.jsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { lazy, Suspense, useEffect, useState } from "react";
import { HiDownload } from "react-icons/hi";

const FloatingGeometry = lazy(() => import("./Three/FloatingGeometry"));

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(target);
    if (isNaN(num)) { setCount(target); return; }
    let start = 0;
    const step = Math.ceil(num / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {typeof count === "number" ? count : target}
      {suffix}
    </span>
  );
}

const About = () => {
  const { about } = content;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* 3D Floating Geometry Background */}
      <Suspense fallback={null}>
        <FloatingGeometry />
      </Suspense>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">{about.subtitle}</p>
          <h2 className="section-title">{about.title}</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Stats Column */}
          <motion.div
            className="flex lg:flex-col gap-6 lg:gap-8"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {about.stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card p-6 text-center min-w-[120px] hover:border-accent_cyan/30 hover:shadow-glow_cyan transition-all duration-500"
              >
                <h3 className="!text-3xl gradient-text font-bold mb-1">
                  <AnimatedCounter target={stat.value.replace("+", "")} suffix="+" />
                </h3>
                <p className="text-xs uppercase tracking-wider text-text_muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Bio Card */}
          <motion.div
            className="flex-1 glass-card p-8 md:p-10"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-text_secondary leading-[1.8] text-[0.95rem] mb-8">
              {about.text}
            </p>

            <a href="/mycv/HansaniMaleesha_SE.pdf" download>
              <button className="btn-primary flex items-center gap-2">
                <HiDownload className="text-lg" />
                {about.btnText}
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
