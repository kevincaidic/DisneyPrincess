import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import IconRenderer from "./IconRenderer";

const RESUME_DATA = {
  name: "PRINCESS ANNE DADUL",
  title: "Virtual Assistant & Creative Director",
  photo: "/profile/PA dadul.png",
  contact: {
    address: "DNSC COMPOUND, PANABO CITY, DAVAO DEL NORTE",
    phone: "09510477648",
    email: "princessannedadul@gmail.com",
    facebook: "Princess Anne Dadul"
  },
  summary: "Motivated and detail-oriented Virtual Assistant with over 5 years of experience in administrative and creative support. Skilled in data entry, email management, scheduling, and customer communication, with additional expertise in graphic design and digital content creation. I'm passionate about providing efficient, accurate, and well-organized work that supports business operations and client satisfaction.",
  experience: [
    {
      role: "Virtual Assistant",
      company: "Virtumax Company",
      period: "July 2016 - September 2021",
      bullets: [
        "Encode doctors' notes and patient records accurately into the system.",
        "Manage and organize digital files, emails, and reports.",
        "Schedule patient checkups and confirm appointments via email.",
        "Communicate professionally with patients and staff to ensure smooth coordination.",
        "Maintain confidentiality and data privacy in handling patient and client information."
      ]
    },
    {
      role: "Freelance Graphic Designer",
      company: "OhMyValentine",
      period: "February 2021 - Present",
      bullets: [
        "Designed marketing materials, product labels, and social media content for client campaigns.",
        "Developed creative visuals aligned with brand identity and audience preferences.",
        "Collaborated with clients to ensure satisfaction and timely delivery of projects.",
        "Utilized design tools such as Canva, Adobe Photoshop, and Illustrator to create high-quality visuals."
      ]
    },
    {
      role: "ESL Teacher (English as a Second Language)",
      company: "Glats.INC",
      period: "January 2025 - September 2025",
      bullets: [
        "Conducted one-on-one and group English classes for international students.",
        "Developed lesson plans focused on grammar, pronunciation, and conversational skills.",
        "Helped students improve confidence in speaking and writing English.",
        "Provided progress feedback and maintained consistent communication with students.",
        "Utilized online platforms and digital tools to create English learning environments."
      ]
    },
    {
      role: "DATA ENTRY & CUSTOMER SERVICE MANAGER",
      company: "UAE Amirah Shehata",
      period: "February 2022 - June 2025",
      bullets: [
        "Oversee team and operations: Lead data entry and customer service teams, ensure accurate records, maintain quality control, monitor workflows, and deliver timely customer support.",
        "Improve systems and performance: Develop SOPs, train staff, prepare performance reports, use CRM/tools for tracking, and implement process improvements for better efficiency and customer experience."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Information Technology (BSIT)",
      school: "Davao del Norte State College"
    }
  ],
  skills: {
    col1: [
      {
        title: "Virtual Assistant & Administrative Skills",
        bullets: [
          "Data Entry & Record Management",
          "Email & Calendar Management",
          "Appointment Scheduling",
          "File Organization",
          "Online Research"
        ]
      },
      {
        title: "Creative & Technical Skills",
        bullets: [
          "Canva, Adobe Photoshop, Illustrator",
          "Microsoft Office & Google Workspace",
          "Social Media Design & Management",
          "Basic Video Editing"
        ]
      }
    ],
    col2: [
      {
        title: "ESL & Communication Skills",
        bullets: [
          "English Grammar & Pronunciation Coaching",
          "Lesson Planning & Online Teaching Tools",
          "Cross-Cultural Communication"
        ]
      },
      {
        title: "Soft Skills",
        bullets: [
          "Attention to Detail",
          "Time Management",
          "Adaptability & Flexibility",
          "Problem-Solving",
          "Professional Communication"
        ]
      }
    ]
  },
  additional: [
    "Age: 22 years old",
    "Languages: English, Filipino",
    "Open to full-time, freelance, or remote work opportunities",
    "Interested in professional growth within Virtual Assistance, ESL, and Creative Services"
  ]
};

export default function ResumeSection() {
  const [downloading, setDownloading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  // Stop background scroll when modal is active
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return;
    setDownloading(true);

    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2.2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
        windowWidth: 800
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.98);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const ratio = canvasWidth / canvasHeight;

      const imgWidth = pdfWidth;
      const imgHeight = pdfWidth / ratio;

      pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight > pdfHeight ? pdfHeight : imgHeight);
      pdf.save("PRINCESS_ANNE_DADUL_RESUME.pdf");
    } catch (error) {
      console.error("PDF download construct failed:", error);
    } finally {
      setDownloading(false);
    }
  };

  const triggerPrint = () => {
    window.print();
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section
      id="resume"
      className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5 text-left"
    >
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #print-area, #print-area * {
            visibility: visible;
          }
          #print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: auto;
            background: white !important;
            color: black !important;
            box-shadow: none !important;
          }
          header, footer, nav, button, #nav_bar, #footer_section {
            display: none !important;
          }
        }
      `}</style>

      {/* Background Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-[-10%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Compact & Clean Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#06B6D4] font-semibold mb-3 block">
            06 • Qualifications & Career
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white mb-4">
            Curriculum Vitae
          </h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Review a structured index of my professional journey. Open the high-fidelity interactive document viewer to print, copy metadata, or download the formal PDF.
          </p>
        </div>

        {/* Feature Entry Dashboard Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Quick Metrics (Left) */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <div className="p-6 rounded-2xl border border-white/10 bg-[#0c0c0c] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <IconRenderer name="Sparkles" size={20} />
              </div>
              <div>
                <h4 className="text-white text-lg font-bold font-display">5+ Years Professional</h4>
                <p className="text-white/50 text-xs">Proven execution in virtual workspaces</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-[#0c0c0c] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-950 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                <IconRenderer name="Mail" size={20} />
              </div>
              <div>
                <h4 className="text-white text-lg font-bold font-display">High-Conversion Communication</h4>
                <p className="text-white/50 text-xs">Bilingual excellence (ESL & Admin operations)</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-[#0c0c0c] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <IconRenderer name="Check" size={20} />
              </div>
              <div>
                <h4 className="text-white text-lg font-bold font-display">Adobe & Canva Pro Stack</h4>
                <p className="text-white/50 text-xs">Professional marketing layout creation</p>
              </div>
            </div>
          </div>

          {/* Large Trigger Banner (Right) */}
          <div className="md:col-span-7 p-8 rounded-3xl border border-cyan-500/10 hover:border-cyan-500/25 bg-gradient-to-br from-[#0c0c0c] via-[#090909] to-[#040404] flex flex-col justify-between relative overflow-hidden group transition-all duration-300">
            <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
            
            <div>
              <div className="inline-flex py-1 px-3 rounded-full bg-cyan-950/40 border border-cyan-800/30 text-cyan-400 text-[10px] font-mono uppercase tracking-wider mb-6">
                Interactive Document Portal
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white leading-tight mb-4">
                Princess Anne Dadul's Executive Resume
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-md">
                Strictly structured to formal resume guidelines. Seamlessly view, print, or download a crisp, paper-ready copy for your offline record.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 to-[#06B6D4] py-4 px-8 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_4px_20px_rgba(6,182,212,0.25)] cursor-pointer"
              >
                <IconRenderer name="Sparkles" size={13} className="text-black" />
                <span>Open Resume Viewer</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* FULL-SCREEN GLASS PREVIEW MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-start justify-center p-4 md:p-8"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-5xl bg-neutral-950 border border-white/10 rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col my-auto"
            >
              
              {/* Modal Control Toolbar (Fixed Top) */}
              <div className="sticky top-0 z-20 px-6 py-4 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-mono text-white/60 uppercase tracking-widest font-semibold">
                    Document Center • Printable
                  </span>
                </div>

                {/* Main Action Suite */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDownloadPDF}
                    disabled={downloading}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 py-2.5 px-5 rounded-full hover:scale-[1.03] transition-all cursor-pointer disabled:opacity-50"
                  >
                    <IconRenderer name="Sparkles" size={12} className={downloading ? "animate-spin text-black" : "text-black"} />
                    <span>{downloading ? "Formatting..." : "Download PDF"}</span>
                  </button>

                  <button
                    onClick={triggerPrint}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-white/5 border border-white/10 hover:bg-white/10 py-2.5 px-5 rounded-full transition-all cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2">
                      <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 14h12v8H6z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Print</span>
                  </button>

                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="ml-2 w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                    title="Close preview"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2">
                      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Scrollable Document Sandbox containing the styled CV sheet */}
              <div className="p-6 md:p-12 overflow-y-auto max-h-[80vh] flex flex-col items-center bg-neutral-900/60 no-scrollbar select-text">
                
                {/* Clean, high contrast sheet styled beautifully */}
                <div
                  id="print-area"
                  ref={resumeRef}
                  className="w-[800px] h-[1130px] shrink-0 bg-white text-[#111827] px-10 py-10 flex flex-col justify-between shadow-2xl border border-neutral-300 relative font-sans leading-normal antialiased"
                >
                  <div>
                    {/* Primary Header Segment */}
                    <div className="flex items-start justify-between pb-4 border-b-2 border-[#1e3a8a] mb-4">
                      <div className="w-2/3 text-left">
                        <h1 className="text-2xl font-sans font-black tracking-tight text-[#1e3a8a] uppercase leading-none mb-3">
                          {RESUME_DATA.name}
                        </h1>
                        
                        <div className="space-y-1 text-[11px] text-[#374151] font-medium leading-tight">
                          <div className="flex items-baseline gap-2">
                            <span className="font-bold text-[#1e3a8a] uppercase w-16 shrink-0">Address:</span>
                            <span>{RESUME_DATA.contact.address}</span>
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span className="font-bold text-[#1e3a8a] uppercase w-16 shrink-0">Phone:</span>
                            <span>{RESUME_DATA.contact.phone}</span>
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span className="font-bold text-[#1e3a8a] uppercase w-16 shrink-0">Email:</span>
                            <span className="text-[#106bba]">{RESUME_DATA.contact.email}</span>
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span className="font-bold text-[#1e3a8a] uppercase w-16 shrink-0">Facebook:</span>
                            <span>{RESUME_DATA.contact.facebook}</span>
                          </div>
                        </div>
                      </div>

                      {/* Photo Circular frame */}
                      <div className="w-24 h-24 rounded-lg overflow-hidden border border-slate-250 bg-slate-50 shrink-0 shadow-sm">
                        <img
                          src={RESUME_DATA.photo}
                          alt="Princess Ann Dadul"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Summary component */}
                    <div className="mb-4 text-left">
                      <h2 className="text-xs font-sans font-extrabold text-[#1a365d] uppercase tracking-wide border-b border-gray-200 pb-0.5 mb-1.5">
                        Summary
                      </h2>
                      <p className="text-[10px] text-[#2d3748] leading-relaxed font-normal">
                        {RESUME_DATA.summary}
                      </p>
                    </div>

                    {/* Work Biography list */}
                    <div className="mb-4 text-left">
                      <h2 className="text-xs font-sans font-extrabold text-[#1a365d] uppercase tracking-wide border-b border-gray-200 pb-0.5 mb-2.5">
                        Work Experience
                      </h2>
                      
                      <div className="space-y-2.5">
                        {RESUME_DATA.experience.map((exp, i) => (
                          <div key={i} className="text-[11px]">
                            <div className="flex justify-between items-baseline mb-0.5">
                              <span className="font-sans font-bold text-[#1e3a8a] text-[10.5px]">
                                {exp.role} <span className="font-normal text-[#4a5568]">| {exp.company}</span>
                              </span>
                              <span className="font-sans font-bold text-[#2d3748] text-[9.5px]">
                                {exp.period}
                              </span>
                            </div>
                            
                            <ul className="list-disc pl-4 space-y-0.5 mt-0.5">
                              {exp.bullets.map((bullet, j) => (
                                <li key={j} className="text-[9.5px] text-[#2d3748] leading-normal">
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Education & Additional Information Side-by-Side */}
                    <div className="grid grid-cols-2 gap-x-8 mb-4 text-left">
                      <div>
                        <h2 className="text-xs font-sans font-extrabold text-[#1a365d] uppercase tracking-wide border-b border-gray-200 pb-0.5 mb-1.5">
                          Education
                        </h2>
                        {RESUME_DATA.education.map((edu, i) => (
                          <div key={i} className="text-xs">
                            <span className="font-sans font-bold text-[#1e3a8a] text-[10px] block">
                              {edu.degree}
                            </span>
                            <span className="text-[9.5px] text-[#4a5568] font-bold">
                              {edu.school}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div>
                        <h2 className="text-xs font-sans font-extrabold text-[#1a365d] uppercase tracking-wide border-b border-gray-200 pb-0.5 mb-1.5">
                          Additional Information
                        </h2>
                        <ul className="list-disc pl-4 space-y-0.5">
                          {RESUME_DATA.additional.map((info, i) => (
                            <li key={i} className="text-[9.5px] text-[#2d3748] leading-tight">
                              {info}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Skills lists */}
                    <div className="mb-4 text-left">
                      <h2 className="text-xs font-sans font-extrabold text-[#1a365d] uppercase tracking-wide border-b border-gray-200 pb-0.5 mb-2">
                        Skills
                      </h2>
                      
                      <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                        {/* Matrix Column 1 */}
                        <div>
                          {RESUME_DATA.skills.col1.map((skillGroup, i) => (
                            <div key={i} className="mb-2">
                              <span className="font-sans font-bold text-[#2b6cb0] text-[10px] block mb-0.5">
                                {skillGroup.title}
                              </span>
                              <ul className="list-disc pl-4 space-y-0.5">
                                {skillGroup.bullets.map((bullet, j) => (
                                  <li key={j} className="text-[9px] text-[#2d3748] leading-tight">
                                    {bullet}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Matrix Column 2 */}
                        <div>
                          {RESUME_DATA.skills.col2.map((skillGroup, i) => (
                            <div key={i} className="mb-2">
                              <span className="font-sans font-bold text-[#2b6cb0] text-[10px] block mb-0.5">
                                {skillGroup.title}
                              </span>
                              <ul className="list-disc pl-4 space-y-0.5">
                                {skillGroup.bullets.map((bullet, j) => (
                                  <li key={j} className="text-[9px] text-[#2d3748] leading-tight">
                                    {bullet}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Instant dynamic copy banner feedback */}
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center text-xs text-white/50 border-t border-white/5 pt-6 w-full">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => copyToClipboard(RESUME_DATA.contact.email, "Email")}
                      className="text-[#06B6D4] hover:text-white transition-colors cursor-pointer select-none font-semibold"
                    >
                      {copiedText === "Email" ? "Copied Email!" : "Copy Email"}
                    </button>
                    <span>•</span>
                    <button
                      onClick={() => copyToClipboard(RESUME_DATA.contact.phone, "Phone")}
                      className="text-[#06B6D4] hover:text-white transition-colors cursor-pointer select-none font-semibold"
                    >
                      {copiedText === "Phone" ? "Copied Phone!" : "Copy Phone"}
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
