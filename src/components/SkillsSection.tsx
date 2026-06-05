import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import IconRenderer from "./IconRenderer";

interface SkillItem {
  name: string;
  confidence: number;
  description: string;
  tools: string[];
  vibeText: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: SkillItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Visual Art & UI Design",
    icon: "Palette",
    skills: [
      {
        name: "Figma Typography & Tokens",
        confidence: 96,
        description: "Rigid typography hierarchy, automated custom styles mapping, line height ratios, and tokens-driven naming conventions for immediate engineering execution.",
        tools: ["Figma Variables", "Tokens Studio", "Style Dictionary"],
        vibeText: "Swiss editorial typography meets clean component code structure."
      },
      {
        name: "Vibrant Luxurious Color Styling",
        confidence: 94,
        description: "Formulating deep ambient dark canvases with precise purple, indigo, and cyber-cyan gradients that direct biological micro-focus without tiring user eyes.",
        tools: ["Radial Gradients Mapping", "HSL System Calibration", "WCAG Contrast Gauges"],
        vibeText: "Award-winning visuals that retain accessible readability states."
      },
      {
        name: "Modern Responsive Layout Kits",
        confidence: 98,
        description: "Implementing complex fluid auto-layouts that stretch dynamically from modular smartwatches to high-end double desktop analytical interfaces.",
        tools: ["Auto-Layout v5+", "Responsive Grid Ratios", "Wrapping Auto Groups"],
        vibeText: "Unified absolute constraints that work flawlessly for all devices."
      }
    ]
  },
  {
    title: "Interaction & Kinematics",
    icon: "Cpu",
    skills: [
      {
        name: "Sensory Micro-animations",
        confidence: 92,
        description: "Calibrating elastic spring curves, custom cursor hover effects, feedback ticks, and beautiful slide-out panels that feel natural and tactile.",
        tools: ["Figma Smart Animate", "Principle Studio", "Framer Motion Physics"],
        vibeText: "Delighting users through soft, organic, responsive interaction."
      },
      {
        name: "Component Level Variance Matrix",
        confidence: 95,
        description: "Building bulletproof nested master components with rigid properties: Boolean variables, slot properties, hover, active, focus, and error states.",
        tools: ["Figma Variants", "Component Slots", "Nested Interactive Objects"],
        vibeText: "Zero-clutter component instances made for scale."
      },
      {
        name: "Gesture UX & Mobile Transitions",
        confidence: 90,
        description: "Mapping realistic swipe, pan, pull-to-refresh, page transitions, and spatial visual movements that keep user mental maps oriented neatly.",
        tools: ["ProtoPie Pro", "Figma Advanced Prototyping"],
        vibeText: "Fluid native apps experiences that mirror actual muscle memory."
      }
    ]
  },
  {
    title: "Strategy & UX Research",
    icon: "Layers",
    skills: [
      {
        name: "A/B Conversion UX Audits",
        confidence: 93,
        description: "Deconstructing visual bottlenecks, testing high-friction checkout streams, and rearranging layout patterns to support immediate sales indicators.",
        tools: ["Hotjar Tracking", "Google Analytics Audits", "FigJam Customer Funnels"],
        vibeText: "Lowering cart abandonment rates and increasing user signups."
      },
      {
        name: "Journey Blueprint Synthesis",
        confidence: 96,
        description: "Conducting user qualitative interviews, mapping dense emotive paths, and listing technical opportunities across all relevant user touchpoints.",
        tools: ["User Persona Profiles", "Customer Empathy Maps", "Miro Journey Builders"],
        vibeText: "Aligning software layout features directly to real human motives."
      },
      {
        name: "Bento Layout Architecture",
        confidence: 95,
        description: "Grouping telemetry, complex data visualizations, and statistics panels into modular cards, producing clean overview flows.",
        tools: ["Bento Grids", "Information Density Filters", "Heuristic Chunking Rules"],
        vibeText: "Translating heavy data logs into beautifully simplified dashboards."
      }
    ]
  }
];

const PRODUCTION_TOOLS = [
  {
    name: "Adobe Illustrator",
    category: "Vector Design & Branding",
    bgColor: "hover:shadow-[0_0_20px_rgba(255,154,0,0.25)]",
    borderColor: "hover:border-[#FF9A00]/50",
    glowColor: "bg-[#FF9A00]/10 text-[#FF9A00]",
    svg: (
      <div className="w-12 h-12 rounded-xl bg-[#140700] border-2 border-[#FF9A00] flex items-center justify-center select-none shadow-[inset_0_0_8px_rgba(255,154,0,0.2)]">
        <span className="font-sans font-black text-lg text-[#FF9A00] leading-none tracking-tighter">Ai</span>
      </div>
    )
  },
  {
    name: "Adobe Photoshop",
    category: "Graphics & Retouching",
    bgColor: "hover:shadow-[0_0_20px_rgba(0,190,255,0.25)]",
    borderColor: "hover:border-[#00C8FF]/50",
    glowColor: "bg-[#00C8FF]/10 text-[#00C8FF]",
    svg: (
      <div className="w-12 h-12 rounded-xl bg-[#001424] border-2 border-[#00C8FF] flex items-center justify-center select-none shadow-[inset_0_0_8px_rgba(0,200,255,0.2)]">
        <span className="font-sans font-black text-lg text-[#00C8FF] leading-none tracking-tighter">Ps</span>
      </div>
    )
  },
  {
    name: "Adobe InDesign",
    category: "Editorial & Layouts",
    bgColor: "hover:shadow-[0_0_20px_rgba(255,51,102,0.25)]",
    borderColor: "hover:border-[#FF3366]/50",
    glowColor: "bg-[#FF3366]/10 text-[#FF3366]",
    svg: (
      <div className="w-12 h-12 rounded-xl bg-[#1a000e] border-2 border-[#FF3366] flex items-center justify-center select-none shadow-[inset_0_0_8px_rgba(255,51,102,0.2)]">
        <span className="font-sans font-black text-lg text-[#FF3366] leading-none tracking-tighter">Id</span>
      </div>
    )
  },
  {
    name: "Adobe Lightroom",
    category: "Pro Color Grading",
    bgColor: "hover:shadow-[0_0_20px_rgba(49,242,232,0.25)]",
    borderColor: "hover:border-[#31F2E8]/50",
    glowColor: "bg-[#31F2E8]/10 text-[#31F2E8]",
    svg: (
      <div className="w-12 h-12 rounded-xl bg-[#001014] border-2 border-[#31F2E8] flex items-center justify-center select-none shadow-[inset_0_0_8px_rgba(49,242,232,0.2)]">
        <span className="font-sans font-black text-lg text-[#31F2E8] leading-none tracking-tighter">Lr</span>
      </div>
    )
  },
  {
    name: "Premiere Pro",
    category: "Cinematic Video Edit",
    bgColor: "hover:shadow-[0_0_20px_rgba(181,124,255,0.25)]",
    borderColor: "hover:border-[#B57CFF]/50",
    glowColor: "bg-[#B57CFF]/10 text-[#B57CFF]",
    svg: (
      <div className="w-12 h-12 rounded-xl bg-[#0d001f] border-2 border-[#B57CFF] flex items-center justify-center select-none shadow-[inset_0_0_8px_rgba(181,124,255,0.2)]">
        <span className="font-sans font-black text-lg text-[#B57CFF] leading-none tracking-tighter">Pr</span>
      </div>
    )
  },
  {
    name: "Canva Pro",
    category: "Layouts & Gradient Art",
    bgColor: "hover:shadow-[0_0_20px_rgba(35,207,213,0.25)]",
    borderColor: "hover:border-[#23CFD5]/50",
    glowColor: "bg-[#23CFD5]/10 text-[#23CFD5]",
    svg: (
      <div className="w-12 h-12 rounded-xl flex items-center justify-center select-none shadow-[0_4px_12px_rgba(0,196,204,0.3)] bg-gradient-to-tr from-[#00C4CC] via-[#7D2AE8] to-[#FF4F81] p-[2px]">
        <div className="w-full h-full rounded-[10px] bg-[#0c0c0c]/80 flex items-center justify-center">
          <span className="font-sans font-black text-lg text-white leading-none">C</span>
        </div>
      </div>
    )
  },
  {
    name: "Notion",
    category: "Productivity Workspace",
    bgColor: "hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]",
    borderColor: "hover:border-white/50",
    glowColor: "bg-white/10 text-white",
    svg: (
      <div className="w-11 h-11 rounded-xl bg-white border-2 border-black flex items-center justify-center select-none shadow-[0_4px_12px_rgba(0,0,0,0.4)] overflow-hidden">
        <span className="font-serif font-black text-2xl text-black leading-none transform translate-y-[-1px] select-none">N</span>
      </div>
    )
  },
  {
    name: "Slack",
    category: "Corporate Team Sync",
    bgColor: "hover:shadow-[0_0_20px_rgba(224,30,90,0.25)]",
    borderColor: "hover:border-[#E01E5A]/50",
    glowColor: "bg-[#E01E5A]/10 text-[#E01E5A]",
    svg: (
      <svg viewBox="0 0 54 54" className="w-11 h-11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.04 34.68c0-2.78 2.26-5.04 5.04-5.04h5.04v5.04c0 2.78-2.26 5.04-5.04 5.04s-5.04-2.26-5.04-5.04z" fill="#36C5F0"/>
        <path d="M15.12 34.68v-10.08h-5.04c-2.78 0-5.04 2.26-5.04 5.04s2.26 5.04 5.04 5.04h5.04z" fill="#36C5F0"/>
        <path d="M15.12 10.08c0 2.78-2.26 5.04-5.04 5.04H5.04V10.08C5.04 7.3 7.3 5.04 10.08 5.04s5.04 2.26 5.04 5.04z" fill="#2EB67D"/>
        <path d="M15.12 20.16V10.08c0-2.78-2.26-5.04-5.04-5.04s-5.04 2.26-5.04 5.04v10.08h5.04z" fill="#2EB67D"/>
        <path d="M34.68 10.08c0-2.78 2.26-5.04 5.04-5.04s5.04 2.26 5.04 5.04v5.04h-5.04c-2.78 0-5.04-2.26-5.04-5.04z" fill="#ECB22E"/>
        <path d="M34.68 15.12V5.04c0-2.78 2.26-5.04 5.04-5.04s5.04 2.26 5.04 5.04v10.08h-5.04z" fill="#ECB22E"/>
        <path d="M48.96 24.84c0 2.78-2.26 5.04-5.04 5.04h-5.04v-5.04c0-2.78 2.26-5.04 5.04-5.04s5.04 2.26 5.04 5.04z" fill="#E01E5A"/>
        <path d="M38.88 24.84v10.08h5.04c2.78 0 5.04-2.26 5.04-5.04s-2.26-5.04-5.04-5.04h-5.04z" fill="#E01E5A"/>
      </svg>
    )
  },
  {
    name: "Microsoft Office",
    category: "Full 365 Core Suite",
    bgColor: "hover:shadow-[0_0_20px_rgba(235,60,0,0.25)]",
    borderColor: "hover:border-[#EB3C00]/50",
    glowColor: "bg-[#EB3C00]/10 text-[#EB3C00]",
    svg: (
      <svg viewBox="0 0 24 24" className="w-11 h-11">
        <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm7.9 6.2L12 12.6l-7.9-4.4L12 4.3l7.9 3.9zM4 9.4l7 3.9v6.9l-7-3.9V9.4zm9 10.8v-6.9l7-3.9v6.9l-7 3.9z" fill="#EB3C00" />
      </svg>
    )
  },
  {
    name: "Microsoft Word",
    category: "Formal Briefs & Docs",
    bgColor: "hover:shadow-[0_0_20px_rgba(24,90,189,0.25)]",
    borderColor: "hover:border-[#185ABD]/50",
    glowColor: "bg-[#185ABD]/10 text-[#185ABD]",
    svg: (
      <div className="w-12 h-12 rounded-xl bg-[#185ABD] flex flex-col items-center justify-center select-none relative shadow-[0_4px_12px_rgba(24,90,189,0.3)] border border-[#2B79D8]/30">
        <span className="font-sans font-black text-xl text-white leading-none">W</span>
        <div className="absolute bottom-2 w-5 h-[2px] bg-white/40 rounded-full" />
      </div>
    )
  },
  {
    name: "Microsoft Excel",
    category: "Smart Ledgers & Stats",
    bgColor: "hover:shadow-[0_0_20px_rgba(16,124,65,0.25)]",
    borderColor: "hover:border-[#107C41]/50",
    glowColor: "bg-[#107C41]/10 text-[#107C41]",
    svg: (
      <div className="w-12 h-12 rounded-xl bg-[#107C41] flex flex-col items-center justify-center select-none relative shadow-[0_4px_12px_rgba(16,124,65,0.3)] border border-[#1B9A55]/30">
        <span className="font-sans font-black text-xl text-white leading-none">X</span>
        <div className="absolute bottom-2 w-5 h-[2px] bg-white/40 rounded-full" />
      </div>
    )
  },
  {
    name: "PowerPoint",
    category: "Structured Presentation",
    bgColor: "hover:shadow-[0_0_20px_rgba(196,62,28,0.25)]",
    borderColor: "hover:border-[#C43E1C]/50",
    glowColor: "bg-[#C43E1C]/10 text-[#C43E1C]",
    svg: (
      <div className="w-12 h-12 rounded-xl bg-[#C43E1C] flex flex-col items-center justify-center select-none relative shadow-[0_4px_12px_rgba(196,62,28,0.3)] border border-[#E05B3A]/30">
        <span className="font-sans font-black text-xl text-white leading-none">P</span>
        <div className="absolute bottom-2 w-5 h-[2px] bg-white/40 rounded-full" />
      </div>
    )
  },
  {
    name: "Microsoft Teams",
    category: "Corporate Sync Hub",
    bgColor: "hover:shadow-[0_0_20px_rgba(70,78,184,0.25)]",
    borderColor: "hover:border-[#464EB8]/50",
    glowColor: "bg-[#464EB8]/10 text-[#464EB8]",
    svg: (
      <div className="w-12 h-12 rounded-xl bg-[#464EB8] flex flex-col items-center justify-center select-none relative shadow-[0_4px_12px_rgba(70,78,184,0.3)] border border-[#6264A7]/30">
        <span className="font-sans font-black text-xl text-white leading-none">T</span>
        <div className="absolute bottom-2 w-5 h-[2px] bg-white/40 rounded-full" />
      </div>
    )
  },
  {
    name: "OneDrive",
    category: "Cloud Warehousing",
    bgColor: "hover:shadow-[0_0_20px_rgba(0,120,212,0.25)]",
    borderColor: "hover:border-[#0078D4]/50",
    glowColor: "bg-[#0078D4]/10 text-[#0078D4]",
    svg: (
      <div className="w-12 h-12 rounded-xl bg-[#0078D4] flex items-center justify-center select-none shadow-[0_4px_12px_rgba(0,120,212,0.3)] border border-[#2488D8]/30">
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2-1.5-3.5-3.5-3.5-.5 0-1 0-1.5.2A6 6 0 0 0 5 11c0 3 2.5 5.5 5.5 5.5h7" />
        </svg>
      </div>
    )
  }
];

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(SKILL_CATEGORIES[0].skills[0]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <section
      id="skills"
      className="relative py-28 bg-[#050505] overflow-hidden border-t border-white/5"
    >
      {/* Decorative Cyber Grid Background & Glow Ring */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] glow-purple opacity-30 rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] glow-cyan opacity-40 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="mb-20 text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#06B6D4] font-semibold mb-3 block">
            02 • Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-6">
            Skillsets & Methodologies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full" />
        </div>

        {/* Dynamic Category Selector Menu */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {SKILL_CATEGORIES.map((cat, index) => {
            const isActive = selectedCategory === index;
            return (
              <button
                key={index}
                id={`skills_cat_btn_${index}`}
                onClick={() => {
                  setSelectedCategory(index);
                  setSelectedSkill(cat.skills[0]);
                }}
                className={`flex items-center gap-2 px-5 py-3.5 rounded-full border text-xs font-mono uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-white bg-cyan-400/10 border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                    : "text-white/60 bg-white/5 border-white/10 hover:text-white hover:border-cyan-400/20"
                }`}
              >
                <IconRenderer name={cat.icon} size={15} className={isActive ? "text-cyan-400" : "text-white/40"} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Multi-Pane Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Skill Selection Cards list (Left Column - Spans 5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {SKILL_CATEGORIES[selectedCategory].skills.map((skill) => {
              const isSelected = selectedSkill.name === skill.name;
              return (
                <button
                  key={skill.name}
                  id={`skill_btn_tile_${skill.name}`}
                  onClick={() => setSelectedSkill(skill)}
                  className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? "bg-white/5 border-cyan-400/30 shadow-lg"
                      : "bg-[#0c0c0c] border-white/5 hover:bg-white/5 hover:border-white/10"
                  }`}
                >
                  <div>
                    <h4 className={`font-display font-bold text-sm transition-colors ${
                      isSelected ? "text-white" : "text-white/70 group-hover:text-white"
                    }`}>
                      {skill.name}
                    </h4>
                    <span className="text-[10px] text-white/40 block mt-1 font-mono uppercase tracking-wider">
                      Confidence Level: {skill.confidence}%
                    </span>
                  </div>
                  
                  {/* Subtle Indicator Arrow */}
                  <div className={`w-7 h-7 rounded-full bg-white/5 group-hover:bg-cyan-400/15 flex items-center justify-center transition-all ${
                    isSelected ? "text-cyan-400 rotate-90 sm:rotate-0" : "text-white/30"
                  }`}>
                    <IconRenderer name="ChevronRight" size={14} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Inspection Detail Card (Right Column - Spans 7) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSkill.name}
                id="skill_details_panel"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="h-full p-8 rounded-3xl glass card-shadow flex flex-col justify-between text-left relative overflow-hidden"
              >
                {/* Floating Abstract Glow Line */}
                <div className="absolute top-0 right-0 w-44 h-44 glow-cyan opacity-20 rounded-full" />
                
                <div className="relative z-10">
                  {/* Category Details */}
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#06B6D4] font-bold block mb-2">
                    ACTIVE INSPECTION
                  </span>
                  
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-4">
                    {selectedSkill.name}
                  </h3>

                  <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6">
                    {selectedSkill.description}
                  </p>

                  {/* Vibe description */}
                  <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70 font-mono italic">
                    ⭐ &quot;{selectedSkill.vibeText}&quot;
                  </div>

                  {/* Tech stack badges */}
                  <div>
                    <h5 className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-3">
                      Core Frameworks & Tools:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.tools.map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 border border-white/10 text-cyan-400 rounded-lg text-xs font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Performance HUD-Gauges metrics */}
                <div className="relative z-10 border-t border-white/10 pt-6 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="font-mono text-xs text-white/40 uppercase tracking-wider">
                      Verified Client Approvals
                    </span>
                  </div>
                  
                  {/* Digital HUD Bar */}
                  <div className="flex items-center gap-3 w-full sm:w-1/2">
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedSkill.confidence}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400"
                      />
                    </div>
                    <span className="font-mono text-xs font-semibold text-white">
                      {selectedSkill.confidence}%
                    </span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Dynamic Production Tools & Core Software Ecosystem */}
        <div className="mt-24 pt-16 border-t border-white/10 text-left">
          <style>{`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#06B6D4] font-semibold mb-3 block">
                03 • Software Arsenal
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Production Suite & Software Alignment
              </h3>
              <p className="text-white/60 text-sm max-w-2xl mt-3 leading-relaxed">
                Highly proficient in bridging professional canvas layouts with robust enterprise documentation. Seamlessly syncing creative designs with high-converting pitch systems, structured ledgers, and formal briefs.
              </p>
            </div>

            {/* Premium Arrow Indicators */}
            <div className="flex gap-2.5 shrink-0">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#06B6D4] hover:bg-white/10 hover:border-cyan-400/30 active:scale-95 transition-all duration-300 cursor-pointer"
                title="Scroll Left"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={scrollRight}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#06B6D4] hover:bg-white/10 hover:border-cyan-400/30 active:scale-95 transition-all duration-300 cursor-pointer"
                title="Scroll Right"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth no-scrollbar"
          >
            {PRODUCTION_TOOLS.map((tool, index) => (
              <motion.div
                key={tool.name}
                id={`tool_suite_card_${index}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6, borderColor: "rgba(6, 182, 212, 0.25)" }}
                className={`p-5 rounded-2xl bg-[#0c0c0c] border border-white/5 flex flex-col items-center text-center justify-between h-48 w-[170px] shrink-0 snap-start transition-all duration-300 group cursor-pointer ${tool.bgColor} ${tool.borderColor}`}
                data-cursor="view"
              >
                {/* SVG Logo Container with Animated Glow */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center p-2 mb-2 transition-transform duration-300 group-hover:scale-110 relative ${tool.glowColor}`}>
                  {tool.svg}
                  {/* Subtle inner background pulsing glow */}
                  <div className="absolute inset-0 rounded-2xl bg-current opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300" />
                </div>

                <div className="w-full">
                  <h4 className="font-display font-bold text-xs sm:text-sm text-white group-hover:text-[#06B6D4] transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                    {tool.name}
                  </h4>
                  <span className="text-[10px] font-mono text-white/40 uppercase block mt-1 tracking-wider leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                    {tool.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
