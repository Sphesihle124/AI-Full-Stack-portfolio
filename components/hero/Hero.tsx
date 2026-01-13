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
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/[0.02] rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline with subtle glow */}
        <div className="relative">
          {/* Subtle radial glow behind headline */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none -z-10">
            <div className="absolute inset-0 rounded-full bg-blue-500/[0.06] blur-[100px]" />
            <div className="absolute inset-0 rounded-full bg-purple-500/[0.04] blur-[120px] scale-110" />
          </div>
          
          <motion.h1
            className="relative flex flex-col items-center text-center mb-12"
            variants={headlineVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-br from-white via-indigo-200 to-cyan-300 bg-clip-text text-transparent leading-[1.15] tracking-tight mb-2">
              Sphesihle Mlanzi
            </span>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-br from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent leading-[1.15] tracking-tight mb-2">
              AI & Full Stack
            </span>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-br from-violet-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent leading-[1.15] tracking-tight">
              Developer
            </span>
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-500 mb-20 max-w-2xl mx-auto leading-[1.7] font-normal text-center"
          variants={subtextVariants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          Building intelligent, scalable web & mobile systems powered by AI
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 mb-24 sm:mb-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            onClick={handleViewProjects}
            className="group px-8 py-3.5 bg-white text-[#0a0a0a] rounded-lg font-medium text-base transition-all duration-200 hover:bg-gray-100 flex items-center gap-2 min-w-[160px] justify-center"
            variants={buttonVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover="hover"
            whileTap="tap"
          >
            <span>View Projects</span>
            <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </motion.button>

          <motion.a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3.5 border border-gray-700 text-gray-300 rounded-lg font-medium text-base transition-all duration-200 hover:border-gray-600 hover:text-white hover:bg-gray-900/40 flex items-center gap-2 min-w-[160px] justify-center"
            variants={buttonVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover="hover"
            whileTap="tap"
          >
            <span>Download CV</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
          </motion.a>

          <motion.button
            onClick={handleContact}
            className="group px-8 py-3.5 border border-gray-700 text-gray-300 rounded-lg font-medium text-base transition-all duration-200 hover:border-gray-600 hover:text-white hover:bg-gray-900/40 flex items-center gap-2 min-w-[160px] justify-center"
            variants={buttonVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover="hover"
            whileTap="tap"
          >
            <span>Contact</span>
            <Mail className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="w-5 h-9 border border-gray-700 rounded-full flex items-start justify-center p-1.5"
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-1 h-1 bg-gray-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
