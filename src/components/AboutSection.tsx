import { motion } from "motion/react";
import { ACHIEVEMENTS } from "../data";
import IconRenderer from "./IconRenderer";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-28 bg-[#050505] overflow-hidden border-t border-white/5"
    >
      {/* Decorative Light Elements */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] glow-purple rounded-full pointer-events-none opacity-50" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] glow-cyan rounded-full pointer-events-none opacity-40" />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3 block">
            01 • Overview
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-6">
            Sculpting Elite User Interfaces
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Biography Text (Left Grid Column) */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-slate-100 leading-relaxed">
              &quot;Design is not merely what it looks or feels like. Design is how beautiful systems yield outstanding commercial performance.&quot;
            </h3>
            
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              I am Princess Anne Dadul, a seasoned freelance UI/UX designer who collaborates with forward-thinking brands, enterprise agencies, and fast-growing founders to model high-converting digital products. My aesthetic matches luxury, minimalism, and strict alignment, ensuring every project balances gorgeous visuals with analytical precision.
            </p>

            <p className="text-white/40 text-sm sm:text-base leading-relaxed">
              Based on rich visual hierarchy patterns from Behance and Dribbble, and backed by a disciplined structure, I transform complex requirements into modular, beautiful design systems that empower developers to work quickly and flawlessly.
            </p>

            {/* Quick Core Pillars Tags */}
            <div className="flex flex-wrap gap-2.5 mt-4">
              {["User-Centric Architecture", "Figma Design Mastery", "Sensory Micro-animations", "Awwwards-Level Typography", "Commercial Cohesion"].map((pillar, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 transition-colors hover:border-cyan-400/30"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Statistics Bento Columns (Right Grid Column) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ACHIEVEMENTS.map((ach, index) => (
              <motion.div
                key={ach.id}
                id={`about_ach_card_${ach.id}`}
                whileHover={{ y: -5, borderColor: "rgba(6, 182, 212, 0.3)", background: "rgba(255, 255, 255, 0.05)" }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass card-shadow flex flex-col justify-between h-44 text-left group transition-colors duration-300"
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/5 group-hover:bg-cyan-400/10 border border-white/5 group-hover:border-cyan-500/20 flex items-center justify-center text-cyan-400 transition-colors">
                    <IconRenderer name={ach.icon} size={18} />
                  </div>
                  <span className="font-mono text-[10px] text-white/30">EST. STAT</span>
                </div>
                
                <div className="mt-4">
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                    {ach.value}
                  </div>
                  <div className="text-xs text-white/50 mt-1 font-sans">
                    {ach.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
