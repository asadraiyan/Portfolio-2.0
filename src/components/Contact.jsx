import React from "react";
import SectionTitle from "./SectionTitle";
import { personalInfo, socialLinks } from "../data/portfolioData";
import { motion } from "framer-motion";

const Contact = () => {
  const socialEntries = Object.entries(socialLinks);

  return (
    <section
      id="contact"
      className="py-32 bg-secondary-bg flex items-center justify-center text-center relative overflow-hidden"
    >
      {/* Glowing circle behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-1/5 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 max-w-2xl relative z-10"
      >
        <p className="text-accent-1 font-mono mb-4 text-lg">What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
          Get In Touch
        </h2>
        <p className="text-text-secondary text-lg mb-10 leading-relaxed">
          I am actively seeking new opportunities and am open to connecting with like-minded professionals. Whether you have a question or would like to discuss potential collaborations, feel free to reach out—I’d be happy to connect.
        </p>

        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email || "asadraiyan001@gmail.com"}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 border-2 border-accent-1 text-accent-1 font-bold rounded-md hover:bg-accent-1/10 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-accent-1/20"
        >
          Say Hello
        </a>

        {/* Social Links Section */}
        <div className="mt-14">
          <p className="text-text-secondary text-sm font-mono mb-6 tracking-widest uppercase">
            Find me on
          </p>
          <div className="flex items-center justify-center gap-5">
            {socialEntries.map(([key, { url, icon }], index) => (
              <motion.a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-12 h-12 flex items-center justify-center rounded-lg bg-primary-bg/60 border border-white/5 text-text-secondary hover:text-accent-1 hover:border-accent-1/40 hover:bg-accent-1/10 hover:shadow-lg hover:shadow-accent-1/10 transition-all duration-300"
              >
                {icon}
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-accent-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap capitalize pointer-events-none">
                  {key}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
