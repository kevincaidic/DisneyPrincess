import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import CaseStudyModal from "./CaseStudyModal";
import IconRenderer from "./IconRenderer";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Updated categories based on actual projects
  const categories = [
    "All",
    "Web Application",
    "Brand Design",
    "Graphic Design",
    "Marketing Design",
    "Digital Art",
    "Photography"
  ];

  const filteredProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter(p => 
        p.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase())) || 
        p.category.toLowerCase().includes(activeFilter.toLowerCase())
      );

  return (
    <section
      id="projects"
      className="relative py-28 bg-[#050505] overflow-hidden border-t border-white/5"
    >
      {/* Decorative Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] glow-purple rounded-full pointer-events-none opacity-40" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] glow-cyan rounded-full pointer-events-none opacity-40" />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-14 text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#06B6D4] font-semibold mb-3 block">
            04 • Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-6">
            Featured Case Studies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full" />
        </div>

        {/* Dynamic Category Filtering Badges */}
        <div className="flex flex-wrap gap-3 mb-16 justify-center lg:justify-start">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            const projectCount = cat === "All" 
              ? PROJECTS.length 
              : PROJECTS.filter(p => 
                  p.tags.some(tag => tag.toLowerCase().includes(cat.toLowerCase())) || 
                  p.category.toLowerCase().includes(cat.toLowerCase())
                ).length;

            return (
              <motion.button
                key={cat}
                id={`filter_badge_${cat}`}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative px-5 py-3 rounded-full border text-xs font-mono uppercase tracking-widest transition-all duration-300 cursor-pointer overflow-hidden ${
                  isActive
                    ? "text-white bg-gradient-to-r from-cyan-400/20 to-purple-600/20 border-cyan-400/40 font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                    : "text-white/60 bg-white/5 border-white/10 hover:text-white hover:border-cyan-400/30 hover:bg-white/10"
                }`}
              >
                {/* Glow effect on hover */}
                {!isActive && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-600/10" />
                  </div>
                )}
                
                <span className="relative z-10 flex items-center gap-2">
                  {cat}
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                    isActive 
                      ? "bg-cyan-400/30 text-cyan-300" 
                      : "bg-white/10 text-white/40 group-hover:bg-cyan-400/20 group-hover:text-cyan-400"
                  }`}>
                    {projectCount}
                  </span>
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Projects Visual Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, index) => (
              <motion.div
                key={proj.id}
                id={`portfolio_work_card_${proj.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative flex flex-col justify-between rounded-3xl overflow-hidden glass card-shadow hover:border-cyan-400/30 transition-all duration-500"
                data-cursor="view"
              >
                {/* Image Section */}
                <div className="relative w-full aspect-[4/3] bg-neutral-900 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Frosted Details Cover on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Floating Metadata badges inside image */}
                  <div className="absolute top-4 left-4 flex gap-1.5 z-10">
                    <span className="px-3 py-1 bg-black/60 border border-white/10 text-white font-mono text-[9px] uppercase tracking-wider rounded-md">
                      {proj.year}
                    </span>
                  </div>
                </div>

                {/* Information Content area */}
                <div className="p-6 flex-grow flex flex-col justify-between text-left">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#06B6D4] font-semibold block mb-2.5">
                      {proj.category}
                    </span>
                    
                    <h3 className="text-lg font-display font-extrabold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {proj.title}
                    </h3>
                    
                    <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed mb-6 line-clamp-3">
                      {proj.description}
                    </p>
                  </div>

                  {/* Tags and CTA layout row */}
                  <div className="border-t border-white/10 pt-6 flex flex-col gap-5 justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-[10px] font-mono text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      id={`portfolio_read_btn_${proj.id}`}
                      onClick={() => setSelectedProject(proj)}
                      className="w-full group inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white hover:text-black border border-white/10 hover:border-white text-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all duration-300 cursor-pointer"
                    >
                      <span>Read Case Study</span>
                      <IconRenderer name="ArrowRight" size={12} className="text-cyan-400 group-hover:text-black transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Custom Single Case Study Modal render trigger */}
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
