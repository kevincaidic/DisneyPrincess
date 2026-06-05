import IconRenderer from "./IconRenderer";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="app_footer"
      className="bg-[#050505] border-t border-white/10 py-12 relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Brand identity signature */}
        <button
          id="footer_logo_btn"
          onClick={() => onNavigate("hero")}
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight text-white cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center">
            <span className="text-white font-semibold text-xs">P</span>
          </div>
          <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-cyan-200 transition-all duration-300">
            princess.
          </span>
        </button>

        {/* Legal copyright credits */}
        <p className="text-[11px] font-mono text-white/40 uppercase tracking-widest text-center">
          © {currentYear} Princess Anne Dadul • Elite Freelance Design Studio. All Rights Reserved.
        </p>

        {/* Quick Back-to-top */}
        <button
          id="back_to_top_btn"
          onClick={() => onNavigate("hero")}
          aria-label="Back to top"
          className="group flex items-center gap-1.5 text-[10px] font-mono text-white/60 hover:text-white uppercase tracking-wider cursor-pointer"
        >
          <span>Back to Top</span>
          <IconRenderer name="ArrowLeft" size={12} className="rotate-90 group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
