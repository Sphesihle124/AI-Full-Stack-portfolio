"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, ExternalLink } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const handleContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden pt-20 sm:pt-24 pb-20 sm:pb-24">
      {/* Optimized Background - CSS only, no JS animations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern - static */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        
        {/* Static gradient orbs with CSS animation */}
        <div 
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/15 blur-[80px] animate-pulse-slow"
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-purple-500/10 blur-[60px] animate-pulse-slow animation-delay-2000"
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />
        
        {/* Central glow - static */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-[60px]" />
      </div>

      {/* Decorative Lines - static */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
        <div className="absolute top-0 left-1/4 w-px h-24 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-purple-500/15 to-transparent" />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-gray-800 bg-gray-900/50"
          variants={itemVariants}
          transition={{ duration: 0.5 }}
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm text-gray-300">Available for new projects</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="flex flex-col items-center text-center mb-6 sm:mb-8"
          variants={itemVariants}
          transition={{ duration: 0.6 }}
        >
          <span 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-2 sm:mb-3"
            style={{
              background: "linear-gradient(to right, #ffffff, #dbeafe, #a5f3fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Sphesihle Mlanzi
          </span>
          <span 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-2 sm:mb-3"
            style={{
              background: "linear-gradient(to right, #67e8f9, #60a5fa, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI & Full Stack
          </span>
          <span 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
            style={{
              background: "linear-gradient(to right, #a78bfa, #c084fc, #f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Developer
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2"
          variants={itemVariants}
          transition={{ duration: 0.5 }}
        >
          Building intelligent, scalable web & mobile systems powered by{" "}
          <span className="text-cyan-400 font-medium">AI</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
          variants={itemVariants}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={handleViewProjects}
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 flex items-center gap-2 justify-center shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View Projects</span>
            <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>

          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-gray-700 text-gray-300 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 hover:border-gray-500 hover:text-white hover:bg-white/5 flex items-center gap-2 justify-center hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Download CV</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>

          <button
            onClick={handleContact}
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-gray-700 text-gray-300 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 hover:border-gray-500 hover:text-white hover:bg-white/5 flex items-center gap-2 justify-center hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Contact</span>
            <Mail className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={itemVariants}
          transition={{ duration: 0.5 }}
        >
          {["Next.js", "TypeScript", "React", "AI/ML", "Node.js", "Tailwind"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium text-gray-400 border border-gray-800 rounded-full bg-gray-900/30 hover:border-gray-600 hover:text-gray-300 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator - CSS animation */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animation-delay-1500">
        <span className="text-xs text-gray-600 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-scroll-dot" />
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: translateZ(0) scale(1); }
          50% { opacity: 1; transform: translateZ(0) scale(1.05); }
        }
        @keyframes scroll-dot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(12px); opacity: 0.5; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-scroll-dot {
          animation: scroll-dot 2s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
          opacity: 0;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
