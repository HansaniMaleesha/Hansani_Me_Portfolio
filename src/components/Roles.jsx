import { content } from "../../Content.jsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { createElement } from "react";

const Roles = () => {
  const { roles } = content;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="roles" className="relative py-24 md:py-32 overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">{roles.subtitle}</p>
          <h2 className="section-title">{roles.title}</h2>
        </motion.div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.items.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative"
            >
              {/* Gradient border glow on hover */}
              <div
                className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]"
                style={{
                  background: `linear-gradient(135deg, ${role.color}, transparent, ${role.color})`,
                }}
              />

              <div className="relative glass-card p-7 h-full flex flex-col items-center text-center group-hover:-translate-y-2 transition-all duration-500">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: `${role.color}15`,
                    boxShadow: `0 0 0px ${role.color}00`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 25px ${role.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 0px ${role.color}00`;
                  }}
                >
                  {createElement(role.icon, {
                    className: "text-2xl",
                    style: { color: role.color },
                  })}
                </div>

                <h5 className="mb-3 font-SpaceGrotesk">{role.title}</h5>
                <p className="text-sm text-text_muted leading-relaxed">{role.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roles;
