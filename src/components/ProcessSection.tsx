import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROCESS_STEPS } from "../data";
import IconRenderer from "./IconRenderer";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section
      id="process"
      className="relative py-28 bg-[#050505] overflow-hidden border-t border-white/5"
    >
      {/* Decorative center halo */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] glow-purple rounded-full pointer-events-none opacity-40" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] glow-cyan rounded-full pointer-events-none opacity-40" />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#06B6D4] font-semibold mb-3 block">
            06 • Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-6">
            My Systematic Design Process
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full" />
        </div>

        {/* Process Steps Timeline Navigation (Horizontal layout on large screens, scrollable) */}
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6 mb-12 overflow-x-auto scroller-none">
          {PROCESS_STEPS.map((pStep, index) => {
            const isActive = activeStep === index;
            return (
              <button
                key={pStep.step}
                id={`process_tab_btn_${pStep.step}`}
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-3 pb-4 border-b-2 transition-all duration-300 flex-shrink-0 cursor-pointer ${
                  isActive
                    ? "border-cyan-400 text-white"
                    : "border-transparent text-white/50 hover:text-white"
                }`}
              >
                <span className={`w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center transition-colors ${
                  isActive ? "bg-cyan-400/10 text-cyan-300 border border-cyan-400/20" : "bg-white/5 text-white/40"
                }`}>
                  {pStep.step}
                </span>
                <span className="font-display font-bold text-sm tracking-wide uppercase">
                  {pStep.title.split(" & ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Panel Renderer with Framer Motion transitions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Active step overview block (Spans 6) */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 rounded-3xl glass card-shadow text-left relative overflow-hidden">
            {/* Absolute Ambient Background */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${PROCESS_STEPS[activeStep].color} opacity-10 rounded-full blur-[40px]`} />
            
            <div className="relative z-10">
              <span className="font-mono text-xs uppercase tracking-widest text-[#06B6D4] font-bold block mb-4">
                PHASE {PROCESS_STEPS[activeStep].step} SPECIFICATIONS
              </span>
              
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-6">
                {PROCESS_STEPS[activeStep].title}
              </h3>

              <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light mb-8">
                {PROCESS_STEPS[activeStep].description}
              </p>
            </div>

            {/* Icon Block */}
            <div className="relative z-10 border-t border-white/10 pt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center text-white shadow-md">
                <IconRenderer name={PROCESS_STEPS[activeStep].icon} size={22} />
              </div>
              <div>
                <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">
                  Methodology Status
                </span>
                <span className="text-xs text-white font-semibold">
                  Standardized Action Sequence
                </span>
              </div>
            </div>
          </div>

          {/* Active step key deliverables checklist (Spans 6) */}
          <div className="lg:col-span-6 p-8 rounded-3xl glass card-shadow text-left flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold block mb-6">
                KEY DELIVERABLES & OUTCOMES
              </span>

              <div className="flex flex-col gap-4">
                {PROCESS_STEPS[activeStep].details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#0c0c0c] border border-white/5 hover:border-cyan-400/20 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20 flex items-center justify-center transition-colors">
                      <IconRenderer name="Check" size={14} />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-white/40 uppercase block mb-0.5">METRIC {index+1}</span>
                      <p className="text-white font-semibold text-xs sm:text-sm">{detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Backed proof tagline info */}
            <div className="border-t border-white/10 pt-6 mt-8">
              <p className="text-xs text-white/40 font-mono italic">
                ⭐ Supported by industry-standard handoff assets with pixel-perfect accuracy.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
