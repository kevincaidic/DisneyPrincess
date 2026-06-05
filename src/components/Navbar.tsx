import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import IconRenderer from "./IconRenderer";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [scrollActive, setScrollActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);

      // Track sections
      const sections = [
        "hero",
        "about",
        "skills",
        "services",
        "projects",
        "credentials",
        "resume",
        "process",
        "contact",
      ];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Hero", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Credentials", id: "credentials" },
    { label: "Resume", id: "resume" },
    { label: "Process", id: "process" },
    { label: "Contact", id: "contact" },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="nav_bar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrollActive
          ? "bg-[#050505]/80 border-b border-white/10 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          id="nav_logo"
          onClick={() => handleLinkClick("hero")}
          className="group flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-white cursor-pointer"
        >
          <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 via-violet-500 to-cyan-400 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:rotate-180">
            <span className="font-semibold text-sm select-none">P</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent group-hover:from-white group-hover:via-purple-200 group-hover:to-cyan-200 transition-all duration-300">
            princess.
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav id="nav_links_desktop" className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.05] p-1.5 rounded-full backdrop-blur-sm">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav_btn_${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-purple-950/50 to-indigo-950/50 border border-purple-500/20 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Contact CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            id="nav_hire_cta"
            onClick={() => handleLinkClick("contact")}
            className="group relative inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 py-3 px-6 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] cursor-pointer"
          >
            <span className="relative z-10">Hire Me</span>
            <IconRenderer name="Send" size={13} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            <div className="absolute inset-0 -translate-y-full hover:translate-y-0 bg-gradient-to-r from-cyan-500 to-purple-600 transition-transform duration-500 ease-out -z-10" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          id="nav_mobile_toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-white/80 hover:text-white hover:bg-white/[0.05] rounded-full transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <IconRenderer name="X" /> : <IconRenderer name="Menu" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="nav_mobile_overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#050505]/95 border-b border-white/10 backdrop-blur-xl py-6 lg:hidden"
          >
            <div className="flex flex-col gap-3 px-6">
              {menuItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav_mobile_btn_${item.id}`}
                    onClick={() => handleLinkClick(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "text-purple-300 bg-purple-500/10 border-purple-500/20"
                        : "text-white/60 bg-transparent border-transparent hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    <IconRenderer name="ArrowRight" size={14} className={isActive ? "text-purple-300" : "text-white/30"} />
                  </button>
                );
              })}
              <button
                id="nav_mobile_hire_cta"
                onClick={() => handleLinkClick("contact")}
                className="mt-4 w-full flex items-center justify-center gap-2 text-center text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-505 text-white py-4 rounded-xl cursor-pointer"
              >
                <span>Hire Princess Ann</span>
                <IconRenderer name="Send" size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
