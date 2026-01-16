"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-gray-800/50 bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-14">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
              Sphesihle Mlanzi
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              AI Full-Stack Developer crafting intelligent, scalable solutions for modern businesses.
            </p>
            <a
              href="mailto:sphesihlemlanzi59@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>sphesihlemlanzi59@gmail.com</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-left w-fit"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-left w-fit"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-left w-fit"
              >
                Contact
              </button>
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 w-fit"
              >
                Resume
              </a>
            </nav>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Location
            </h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <address className="text-sm text-gray-400 leading-relaxed not-italic">
                <p>Johannesburg CBD,</p>
                <p>South Africa</p>
              </address>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/Sphesihle124"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-lg bg-gray-900/50 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-800 hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sphesihle-mlanzi-2844a4287"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-lg bg-gray-900/50 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-800 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:sphesihlemlanzi59@gmail.com"
                className="flex items-center justify-center w-11 h-11 rounded-lg bg-gray-900/50 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-800 hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed pt-2">
              Available for freelance opportunities and collaborations
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-10 border-t border-gray-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Sphesihle Mlanzi. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
