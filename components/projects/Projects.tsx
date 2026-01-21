"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const projects = [
  {
    name: "BrainBox AI",
    status: "Live" as const,
    problem: "Authentic South African traditional clothing is hard to access due to geographic barriers, limited artisan market reach, and the lack of modern e-commerce convenience—putting cultural craftsmanship and artisan livelihoods at risk.",
    solution:
      "ClothingDrop is a digital marketplace that connects verified local artisans with customers through a modern e-commerce platform, offering fast delivery, secure payments, and direct support for cultural preservation and sustainable income.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Stripe", "Lucide React"],
    image: "/projects/project-1.png",
    liveDemo: "https://brainboxai.vercel.app/",
    github: "https://github.com/Sphesihle124/clothingdrop",
  },
  {
    name: "CareerDash Web App",
    status: "Live" as const,
    problem: "Businesses need actionable insights from complex data streams.",
    solution:
      "Real-time dashboard with AI-driven pattern recognition, predictive analytics, and automated reporting.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI",
      "DeepSeek APIs",
      "Paypal",
      "Firebase"
    ],
    image: "/projects/project-2.png",
    liveDemo: "https://youtu.be/KzF3E-tT5Us",
    github: "https://github.com/Sphesihle124/careerdash",
  },
  {
    name: "AI Developer Portfolio Website",
    status: "Live" as const,
    problem: "Content creators face writer's block and time-consuming research.",
    solution:
      "AI-powered platform that generates, optimizes, and personalizes content across multiple formats and channels.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Framer Motion", "OpenAI API"],
    image: "/projects/project-4.png",
    liveDemo: "https://initial-ai-full-stack-portfolio.vercel.app",
    github: "https://github.com/Sphesihle124/Initial-AI-Full-Stack-portfolio",
  },
  {
    name: "Uniconnect Crossplatform App",
    status: "In Development" as const,
    problem: "South African university applications are fragmented and repetitive, requiring students to navigate multiple portals, re-enter the same information, and manage complex, inconsistent requirements.",
    solution:
      "UniConnect simplifies the process by centralising student data and intelligently guiding and automating applications across multiple universities from a single platform.",
    tech: ["Flutter", "Dart", "TypeScript", "Node.js", "Playwright", "RESTful APIs", "GitHub", "Supabase", "Web Scraping", "Inngest", "PayFast", "PostgreSQL"],
    image: "/projects/crossplatform.png",
    liveDemo: "https://www.youtube.com/@sphesihle-w5v",
    github: "https://github.com/Sphesihle124/uniconnect",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a] overflow-hidden">
      {/* Subtle background enhancement */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Projects
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Showcasing AI-powered solutions built with modern full-stack technologies
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative p-4 sm:p-6 lg:p-8 rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/30 to-gray-950/30 hover:border-gray-700/70 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 h-full flex flex-col"
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Optional Project Image */}
              {project.image && (
                <div className="relative mb-4 sm:mb-6 w-full h-40 sm:h-48 lg:h-56 overflow-hidden rounded-xl sm:rounded-2xl border border-gray-800/60 bg-gray-900/60 shadow-md shadow-black/40 group-hover:border-gray-700/70 group-hover:shadow-xl group-hover:shadow-black/40 transition-all duration-500">
                  <Image
                    src={project.image}
                    alt={`${project.name} project screenshot`}
                    fill
                    className="object-cover w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    quality={90}
                  />
                </div>
              )}
              
              {/* Project Title with Status Badge */}
              <div className="relative mb-3 sm:mb-4 lg:mb-5">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight group-hover:text-gray-50 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${
                      project.status === "Live"
                        ? "bg-green-500/10 text-green-400 border-green-500/30"
                        : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        project.status === "Live" ? "bg-green-500" : "bg-amber-500"
                      } ${project.status === "Live" ? "animate-pulse" : ""}`}
                    />
                    {project.status}
                  </span>
                </div>
              </div>
              
              {/* Problem / Solution or Description */}
              {project.name === "AI Developer Portfolio Website" ? (
                <div className="relative mb-6 flex-grow">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Description
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                  A modern, high-performance portfolio designed to showcase real-world AI and full-stack development 
                  skills through live projects, interactive AI demos, and a clean, recruiter-focused user experience. 
                  Built with a strong emphasis on performance, accessibility, and modern UI/UX, the platform demonstrates end-to-end engineering — from frontend design and animations 
                  to backend logic and AI integration — all deployed as a production-ready web application. 
                  The portfolio also highlights an AI-assisted development workflow, demonstrating how modern tools can accelerate delivery without compromising code quality.
                  </p>
                </div>
              ) : (
                <div className="relative mb-6 space-y-3 flex-grow">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Problem
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Solution
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="relative mb-4 sm:mb-6">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-800/60 text-gray-300 border border-gray-700/50 group-hover:border-gray-600/50 group-hover:bg-gray-800/80 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="relative flex flex-wrap gap-2 sm:gap-3 mt-auto">
                {project.liveDemo && (
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-gray-700/50 rounded-xl transition-all duration-300 hover:border-gray-600/50 hover:shadow-md hover:shadow-white/10"
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                    {project.status === "In Development" ? "WIP Preview" : "Live Site"}
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gray-300 bg-gray-900/50 hover:bg-gray-800/60 border border-gray-700/50 rounded-xl transition-all duration-300 hover:border-gray-600/50 hover:shadow-md hover:shadow-gray-900/50"
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Github className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" />
                    GitHub
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
