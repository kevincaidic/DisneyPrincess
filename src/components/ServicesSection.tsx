import { motion } from "motion/react";
import { SERVICES } from "../data";
import IconRenderer from "./IconRenderer";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-28 bg-[#050505] overflow-hidden border-t border-white/5"
    >
      {/* Absolute Radial Gradient Borders */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] glow-cyan rounded-full pointer-events-none opacity-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] glow-purple rounded-full pointer-events-none opacity-40" />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="mb-20 text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#06B6D4] font-semibold mb-3 block">
            03 • Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-6">
            Consulting Models & Solutions
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full" />
        </div>

        {/* Pricing/Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICES.map((serv, index) => {
            const isFeatured = index === 1; // Highlight SaaS block as "Best Value/Most Popular"
            return (
              <motion.div
                key={serv.id}
                id={`services_item_card_${serv.id}`}
                whileHover={{ y: -8, borderColor: isFeatured ? "rgba(6, 182, 212, 0.4)" : "rgba(255, 255, 255, 0.15)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-8 rounded-3xl border text-left flex flex-col justify-between transition-all duration-300 group ${
                  isFeatured
                    ? "bg-white/5 border-cyan-400/30 shadow-[0_15px_40px_rgba(6,182,212,0.15)]"
                    : "bg-[#0c0c0c]/80 border-white/5 hover:bg-white/5 hover:border-white/10"
                }`}
              >
                {/* Popularity Badge */}
                {isFeatured && (
                  <span className="absolute -top-3.5 right-6 px-3 py-1 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-mono text-[9px] uppercase tracking-widest rounded-full font-bold shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                    ★ Premium Standard
                  </span>
                )}

                <div>
                  {/* Top Header Row with Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-colors ${
                      isFeatured
                        ? "bg-cyan-400/10 border-cyan-400/30 text-cyan-400"
                        : "bg-white/5 border-white/10 text-white/70 group-hover:text-white"
                    }`}>
                      <IconRenderer name={serv.icon} size={22} />
                    </div>
                    
                    <span className="font-mono text-[8.5px] uppercase tracking-widest text-white/30">
                      SERVICE LEVEL {index + 1}
                    </span>
                  </div>

                  {/* Title and descriptions */}
                  <h3 className="text-xl font-display font-extrabold text-white mb-4">
                    {serv.title}
                  </h3>
                  
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {serv.description}
                  </p>

                  <div className="border-t border-white/10 pt-6 mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#06B6D4] font-bold block mb-1">
                      Deliverables Checklist:
                    </span>
                    
                    {/* Checklist */}
                    <ul className="flex flex-col gap-3 mt-4">
                      {serv.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-white/70">
                          <span className={`rounded-full p-0.5 mt-0.5 flex-shrink-0 ${
                            isFeatured ? "bg-cyan-400/20 text-cyan-300" : "bg-white/10 text-white/40"
                          }`}>
                            <IconRenderer name="Check" size={10} />
                          </span>
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card footer starting price */}
                <div className="border-t border-white/10 pt-6 mt-8 flex items-end justify-between">
                  <div>
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">
                      Starting Investment
                    </span>
                    <span className="text-2xl font-display font-bold text-gradient tracking-tight">
                      {serv.startingPrice}
                    </span>
                  </div>
                  
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                    isFeatured
                      ? "bg-cyan-400/10 border-cyan-400/30 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black"
                      : "bg-white/5 border-white/10 text-white/60 group-hover:bg-white group-hover:text-black group-hover:border-white"
                  }`}>
                    <IconRenderer name="ArrowRight" size={16} />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Dynamic bottom message / FAQ helper */}
        <div className="mt-16 text-center select-none">
          <p className="text-xs font-mono text-white/40 uppercase tracking-widest flex items-center justify-center gap-1.5">
            <IconRenderer name="Zap" size={12} className="text-cyan-400" />
            Have a custom requirement? Let&apos;s build a bespoke framework.
          </p>
        </div>

      </div>
    </section>
  );
}
