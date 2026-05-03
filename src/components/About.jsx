import React from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary-bg">
      <div className="container mx-auto px-6 lg:px-20">
        <SectionTitle id="about-title">About Me</SectionTitle>

        <motion.div
          className="max-w-8xl mx-auto text-left mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-center md:text-xl text-text-secondary leading-relaxed font-light">
            <span className="text-accent-1 font-mono text-2xl mr-2">
              Hello!
            </span>
            I’m Asad Raiyan, a Frontend Developer with 4+ years of experience building scalable and user-focused web applications. I specialize in React.js, Next.js and modern JavaScript ecosystems, with a strong focus on creating responsive, high-performance interfaces. I enjoy collaborating with cross-functional teams, translating complex ideas into intuitive user experiences, and continuously improving code quality and performance.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
