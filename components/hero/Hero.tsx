"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, ExternalLink } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.15,
    },
  },
};

const headlineVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const subtextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  hover: {
    scale: 1.03,
    y: -2,
  },
  tap: {
    scale: 0.97,
  },
};

export default function Hero() {
  const handleContact = () => {
    // Replace with actual contact logic (e.g., scroll to contact section or open modal)
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewProjects = () => {
    // Replace with actual projects logic (e.g., scroll to projects section)
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
          variants={headlineVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Sphesihle Mlanzi AI Full-Stack Developer
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
          variants={subtextVariants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          Building intelligent, scalable web & mobile systems powered by AI
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            onClick={handleViewProjects}
            className="group relative px-8 py-4 bg-white text-[#0a0a0a] rounded-xl font-semibold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-white/25 flex items-center gap-2.5 min-w-[160px] justify-center"
            variants={buttonVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="relative z-10">View Projects</span>
            <ExternalLink className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 border-2 border-gray-700 text-white rounded-xl font-semibold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:border-gray-500 hover:bg-gray-900/60 hover:shadow-lg hover:shadow-gray-900/50 flex items-center gap-2.5 min-w-[160px] justify-center"
            variants={buttonVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="relative z-10">Download CV</span>
            <ArrowDown className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-y-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>

          <motion.button
            onClick={handleContact}
            className="group relative px-8 py-4 border-2 border-gray-700 text-white rounded-xl font-semibold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:border-gray-500 hover:bg-gray-900/60 hover:shadow-lg hover:shadow-gray-900/50 flex items-center gap-2.5 min-w-[160px] justify-center"
            variants={buttonVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="relative z-10">Contact</span>
            <Mail className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
