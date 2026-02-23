import { SiGithub, SiLinkedin } from "react-icons/si";
import { FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        
        {/* Contact & Social Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          
          <a href="mailto:subiyanr813@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300">
            <FiMail className="text-xl" />
            <span className="text-sm font-medium">subiyanr813@gmail.com</span>
          </a>

          <a href="tel:+916382574627" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300">
            <FiPhone className="text-xl" />
            <span className="text-sm font-medium">+91 63825 74627</span>
          </a>

          <div className="w-px h-6 bg-slate-700 hidden sm:block"></div> {/* Divider */}

          <a href="https://github.com/Subiyan-coder" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300">
            <SiGithub className="text-xl" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          
          <a href="https://www.linkedin.com/in/mohamed-muneerul-subiyan-r-73a928231" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors duration-300">
            <SiLinkedin className="text-xl" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>

        </div>

        {/* Copyright */}
        <p className="mb-2 text-sm font-medium text-slate-300">
          © {currentYear} Mohamed Muneerul Subiyan. All rights reserved.
        </p>
        
        {/* The Tech Brag */}
        <p className="text-xs text-slate-500">
          Built from scratch with React, Vite & Tailwind CSS.
        </p>

      </div>
    </footer>
  )
}