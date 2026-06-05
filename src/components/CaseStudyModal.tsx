import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import IconRenderer from "./IconRenderer";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center p-4">
        
        {/* Backdrop glass blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Main Board */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-[#050505] border border-white/[0.08] w-full max-w-6xl rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative z-10 max-h-[90vh]"
        >
          {/* Header Close Panel */}
          <div className="sticky top-0 bg-[#050505]/80 border-b border-white/[0.05] backdrop-blur-md p-6 flex justify-between items-center z-20">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-cyan-400 font-bold block mb-1">
                CASE STUDY REVIEW
              </span>
              <h3 className="text-white text-lg sm:text-xl font-display font-extrabold">
                {project.title}
              </h3>
            </div>
            
            <button
              id="case_study_close_btn"
              onClick={onClose}
              className="p-2 text-white/60 hover:text-white hover:bg-white/[0.05] rounded-full transition-colors cursor-pointer"
            >
              <IconRenderer name="X" size={20} />
            </button>
          </div>

          {/* Modal Content Scroll Container */}
          <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6 sm:p-10 flex flex-col gap-12 text-left">
            
            {/* High Impact Visual Banner */}
            <div className="relative w-full aspect-[16/6] bg-neutral-950 rounded-2xl overflow-hidden border border-white/[0.05] shadow-inner">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 sm:p-8">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400">
                    {project.category}
                  </span>
                  <h1 className="text-xl sm:text-3xl font-display font-extrabold text-white mt-1">
                    {project.title}
                  </h1>
                </div>
              </div>
            </div>

            {/* Core Project Meta Hub (Bento Layout row) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div>
                <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest block mb-1">
                  CLIENT
                </span>
                <span className="text-sm font-semibold text-white/90">
                  {project.client}
                </span>
              </div>
              <div>
                <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest block mb-1">
                  ROLE ASSIGNED
                </span>
                <span className="text-sm font-semibold text-white/90">
                  {project.role}
                </span>
              </div>
              <div>
                <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest block mb-1">
                  YEAR
                </span>
                <span className="text-sm font-semibold text-white/90">
                  {project.year}
                </span>
              </div>
              <div>
                <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest block mb-1">
                  TIMELINE
                </span>
                <span className="text-sm font-semibold text-white/90">
                  6 Sprints
                </span>
              </div>
            </div>

            {/* The Challenge & Solution Layout Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-white/10 pb-10">
              <div className="md:col-span-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <h4 className="font-display font-extrabold text-lg text-white">The Challenge</h4>
                </div>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
                  {project.challenge}
                </p>
              </div>

              <div className="md:col-span-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-cyan-405" />
                  <h4 className="font-display font-extrabold text-lg text-white">The Solution</h4>
                </div>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Verified Performance KPI Indicators */}
            <div>
              <h4 className="font-display font-extrabold text-lg text-white mb-6">Case Performance Indicators (KPIs)</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="p-6 rounded-xl glass card-shadow text-left">
                    <span className="font-mono text-[9px] text-cyan-400 uppercase tracking-widest block mb-2">
                      MEASUREMENT
                    </span>
                    <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#F5F5F5] tracking-tight block">
                      {metric.value}
                    </span>
                    <span className="text-xs text-white/40 mt-1 block">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Step-by-Step UX Methodology Timeline */}
            <div className="border-t border-white/10 pt-10">
              <h4 className="font-display font-extrabold text-lg text-white mb-8">Creative Execution Process</h4>
              
              <div className="flex flex-col gap-6">
                {project.process.map((p, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-[#0c0c0c] border border-white/5 hover:border-cyan-400/30 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <h5 className="font-display font-bold text-white sm:text-base text-sm flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 font-mono text-xs select-none">
                          {i + 1}
                        </span>
                        {p.phase}
                      </h5>
                    </div>
                    
                    <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed mb-4">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {p.deliverables.map((del, dIndex) => (
                        <span
                          key={dIndex}
                          className="px-2.5 py-1 bg-[#050505] border border-white/10 text-[10px] font-mono text-cyan-400"
                        >
                          ✔ {del}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wireframe vs. Finished Comparative Screens Mockups */}
            {(project.wireframeImage || project.finalDesignImage) && (
              <div className="border-t border-white/[0.05] pt-10 pb-6">
                <h4 className="font-display font-extrabold text-lg text-white mb-8">Design Progression Sandbox</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.wireframeImage && (
                    <div className="text-left">
                      <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block mb-3">
                        STAGE A: STRATEGIC WIREFRAME BLUEPRINT
                      </span>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.05] grayscale bg-zinc-950">
                        <img
                          src={project.wireframeImage}
                          alt="Wireframe progression study"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {project.finalDesignImage && (
                    <div className="text-left">
                      <span className="font-mono text-[9px] text-[#06B6D4] uppercase tracking-widest block mb-3">
                        STAGE B: HIGH-FIDELITY COMPOSITE DESIGN
                      </span>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-purple-500/30 bg-purple-950">
                        <img
                          src={project.finalDesignImage}
                          alt="High fidelity product screen showcase"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
