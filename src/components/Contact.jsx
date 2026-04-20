import { createElement, useRef, useState } from "react";
import { content } from "../../Content.jsx";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiPaperAirplane } from "react-icons/hi";

const Contact = () => {
  const { contact } = content;
  const form = useRef();
  const [sending, setSending] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_uf0kgsk",
        "template_pctct7d",
        form.current,
        "l5gbmN0vsmuax92O6"
      )
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully!");
          setSending(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send. Please try again.");
          setSending(false);
        }
      );
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "var(--toast-bg)",
            color: "var(--toast-color)",
            border: "1px solid var(--toast-border)",
          },
        }}
      />

      {/* Gradient accent behind section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent_violet/5 blur-[120px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">{contact.subtitle}</p>
          <h2 className="section-title">{contact.title}</h2>
          <p className="text-text_muted mt-4">{contact.formSubtitle}</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 flex flex-col gap-5"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-1 focus-within:border-accent_cyan/40 focus-within:shadow-glow_cyan transition-all duration-300">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full px-5 py-3.5 bg-transparent text-text_primary placeholder:text-text_muted text-sm rounded-xl"
              />
            </div>

            <div className="glass-card p-1 focus-within:border-accent_cyan/40 focus-within:shadow-glow_cyan transition-all duration-300">
              <input
                type="email"
                name="user_email"
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                placeholder="Your Email"
                required
                className="w-full px-5 py-3.5 bg-transparent text-text_primary placeholder:text-text_muted text-sm rounded-xl"
              />
            </div>

            <div className="glass-card p-1 focus-within:border-accent_cyan/40 focus-within:shadow-glow_cyan transition-all duration-300">
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={6}
                className="w-full px-5 py-3.5 bg-transparent text-text_primary placeholder:text-text_muted text-sm rounded-xl resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="btn-primary self-start flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <HiPaperAirplane className="text-lg rotate-90" />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            className="flex-1 flex flex-col gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {contact.social_media.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-5 flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-accent_cyan/10 flex items-center justify-center group-hover:bg-accent_cyan/20 transition-colors">
                  {createElement(item.icon, {
                    className: "text-lg text-accent_cyan",
                  })}
                </div>
                <span className="text-sm text-text_secondary group-hover:text-text_primary transition-colors">
                  {item.text}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
