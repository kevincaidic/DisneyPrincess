import { motion } from "motion/react";
import IconRenderer from "./IconRenderer";

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-24 lg:pt-0"
    >
      {/* Background Glows & Particle Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] glow-purple rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] glow-cyan rounded-full" />
        
        {/* Subtle grid mesh overlay */}
        <div className="absolute inset-0 dot-grid z-0" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 lg:py-24">
        
        {/* Left Hand: Typography and Introductions */}
        <div className="lg:col-span-7 select-none text-left">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-5"
          >
            <IconRenderer name="Sparkles" size={12} className="animate-spin text-cyan-400" />
            <span>Available for Remote Projects & Consultation</span>
          </motion.div>
 
          {/* Interactive Hero Intro */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            Crafting{" "}
            <span className="text-gradient">
              Digital
            </span>{" "}
            Masterpieces.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/60 text-base sm:text-lg md:text-xl font-sans font-light leading-relaxed max-w-xl mb-10"
          >
            Princess Ann Dadul is a strategic designer specializing in high-end interfaces that bridge the gap between human emotion and digital functionality.
          </motion.p>
 
          {/* Action Call CTR Section */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            <button
              id="hero_portfolio_cta"
              onClick={() => onNavigate("projects")}
              className="group relative inline-flex items-center justify-center gap-2.5 bg-white text-black font-bold tracking-wide py-4 px-8 rounded-full shadow-[0_4px_25px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_30px_rgba(147,51,234,0.3)] transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <span>View Portfolio</span>
              <IconRenderer name="ArrowRight" size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>

            <button
              id="hero_contact_cta"
              onClick={() => onNavigate("contact")}
              className="group inline-flex items-center justify-center gap-2 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-white font-medium tracking-wide py-4 px-8 rounded-full transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <span>Hire Me</span>
              <IconRenderer name="Mail" size={15} className="text-white/60 transition-transform duration-300 group-hover:rotate-6" />
            </button>

            <button
              id="hero_resume_cta"
              onClick={() => onNavigate("resume")}
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-400/20 hover:border-amber-400/40 text-amber-300 font-medium tracking-wide py-4 px-8 rounded-full transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <span>Download Resume</span>
              <IconRenderer name="Sparkles" size={15} className="text-amber-400/80 transition-transform duration-300 group-hover:rotate-12 animate-pulse" />
            </button>
          </motion.div>

          {/* Social Profiles Track */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center gap-6 text-slate-400 border-t border-white/[0.05] pt-8 max-w-md"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500">Connect:</span>
            
            <a
              id="hero_social_figma"
              href="https://figma.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 text-xs uppercase tracking-wider"
            >
              <IconRenderer name="Figma" size={15} />
              <span className="hidden sm:inline">Figma</span>
            </a>

            <a
              id="hero_social_dribbble"
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 text-xs uppercase tracking-wider"
            >
              <IconRenderer name="Dribbble" size={15} />
              <span className="hidden sm:inline">Dribbble</span>
            </a>

            <a
              id="hero_social_linkedin"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 text-xs uppercase tracking-wider"
            >
              <IconRenderer name="Linkedin" size={15} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </motion.div>
        </div>

        {/* Right Hand: Portrait & Interactive Floating UI Widgets */}
        <div className="lg:col-span-5 relative flex items-center justify-center h-[500px] sm:h-[600px] lg:h-auto select-none mt-12 lg:mt-0">
          
          {/* Main Portrait Frame with Outer Gradient Halos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative w-72 sm:w-80 lg:w-[340px] aspect-[3/4] rounded-3xl overflow-hidden border border-white/[0.1] bg-[#1a1a1a] shadow-[0_20px_50px_rgba(0,0,0,0.5)] group z-10"
          >
            <img
              src="/profile/PA dadul.png"
              alt="Princess Ann Dadul UI/UX Portrait"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale-[15%] transition-transform duration-700 hover:scale-105 group-hover:grayscale-0"
            />
            
            {/* Absolute Ambient Mask Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
            
            {/* Soft inner glow card border */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-black/60 backdrop-blur-sm border-t border-white/[0.08] flex items-center justify-between pointer-events-none">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400">Design Director</span>
                <p className="text-white text-xs font-semibold">Princess Ann Dadul</p>
              </div>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest">Active Studio</span>
              </div>
            </div>
          </motion.div>

          {/* Floating UI Widget 1: Figma Token Card (Floating Top-Left) */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 sm:-left-12 p-4 rounded-2xl glass card-shadow z-20 w-38 sm:w-46 text-left pointer-events-auto hover:border-purple-400/50 transition-colors cursor-grab active:cursor-grabbing"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest font-semibold flex items-center gap-1">
                <IconRenderer name="Figma" size={9} className="text-cyan-400" />
                Tokens System
              </span>
              <span className="w-2 h-2 rounded-full bg-purple-500" />
            </div>
            <div className="flex flex-col gap-1 text-[10px] text-white/60 font-mono">
              <div className="flex justify-between border-b border-white/[0.05] pb-1">
                <span>brand-purp:</span>
                <span className="text-purple-400 font-bold">#9333EA</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.05] pb-1">
                <span>neon-glow:</span>
                <span className="text-cyan-400 font-bold">#06B6D4</span>
              </div>
              <div className="flex justify-between">
                <span>radius-lg:</span>
                <span className="text-white font-bold">24px</span>
              </div>
            </div>
          </motion.div>

          {/* Floating UI Widget 2: Wireframe Mockup Screen (Floating Mid-Right) */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
            className="absolute top-1/3 -right-6 sm:-right-12 p-4 rounded-2xl glass card-shadow z-20 w-38 sm:w-46 text-left cursor-grab active:cursor-grabbing"
          >
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-[9px] font-mono text-white/40 ml-auto">Wireframe</span>
            </div>
            {/* Visual Lo-Fi Grid Representation */}
            <div className="border border-white/[0.1] rounded-lg p-2 flex flex-col gap-1 bg-white/[0.02]">
              <div className="w-8 h-2 bg-white/20 rounded" />
              <div className="w-full h-8 bg-white/10 rounded flex items-center justify-center border border-dashed border-white/[0.05]">
                <IconRenderer name="Layout" size={11} className="text-cyan-400/60" />
              </div>
              <div className="w-full h-1 bg-white/20 rounded" />
              <div className="w-2/3 h-1 bg-white/10 rounded" />
            </div>
          </motion.div>

          {/* Floating UI Widget 3: Mobile Custom App Overlay Preview (Floating Bottom-Left) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
            className="absolute bottom-6 -left-4 sm:-left-8 p-4 rounded-2xl glass card-shadow border border-cyan-500/30 z-20 w-46 sm:w-54 text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <IconRenderer name="Smartphone" size={18} />
              </div>
              <div>
                <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest font-semibold block">Aura Wellness Mobile</span>
                <p className="text-white text-xs font-semibold">Micro-Flow v1.02</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                  <span className="text-[8px] font-mono text-white/40">FPS: 60•Responsive</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating UI Widget 4: Bento Conversion Grid Stat Overlay (Floating Bottom-Right) */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
            className="absolute -bottom-8 -right-4 sm:-right-8 p-4 rounded-2xl glass card-shadow z-20 w-38 text-left"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                <IconRenderer name="Sparkles" size={14} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-white/40">Conversion</p>
                <span className="text-white text-sm font-bold block leading-none">+34.8%</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Decorative Slide Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 cursor-pointer pointer-events-auto" onClick={() => onNavigate("about")}>
        <span className="text-[9px] font-mono uppercase tracking-widest">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1.5 h-4 bg-purple-500/50 rounded-full flex justify-center p-0.5"
        >
          <div className="w-1 h-1 bg-white rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
