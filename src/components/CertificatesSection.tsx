import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CERTIFICATES } from "../data";
import IconRenderer from "./IconRenderer";

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATES[0] | null>(null);

  // Stop background scroll when modal is active
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCert]);

  return (
    <section
      id="credentials"
      className="relative py-28 bg-[#050505] overflow-hidden border-t border-white/5"
    >
      {/* Decorative Lights */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] glow-purple rounded-full pointer-events-none opacity-40" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] glow-cyan rounded-full pointer-events-none opacity-40" />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#06B6D4] font-semibold mb-3 block">
            05 • Verifications
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-6">
            Elite Design Credentials
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full" />
        </div>

        {/* Certificate Flex / Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {CERTIFICATES.map((cert) => (
            <motion.div
              key={cert.id}
              id={`certificate_item_box_${cert.id}`}
              whileHover={{ y: -6, borderColor: "rgba(6, 182, 212, 0.35)" }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedCert(cert)}
              className="group relative flex flex-col justify-between rounded-3xl overflow-hidden glass card-shadow text-left transition-all duration-400 shadow-md cursor-pointer"
            >
              {/* Premium Glow Highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Certificate Vector Artwork Preview */}
                <div className="relative aspect-[16/10] bg-neutral-900 border-b border-white/5 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 select-none"
                  />
                  
                  {/* Subtle Gradient Ring Shield Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-transparent to-transparent" />
                  
                  {/* Credential Seal Emblem */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-yellow-405 backdrop-blur-sm shadow shadow-black">
                    <IconRenderer name="Award" size={17} />
                  </div>
                </div>

                {/* Body Core details */}
                <div className="p-6">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-cyan-400 font-semibold block mb-2">
                    {cert.issuer}
                  </span>
                  
                  <h3 className="text-white text-base sm:text-lg font-display font-extrabold mb-3 group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  
                  {cert.idCredential && (
                    <div className="mt-4 flex items-center gap-1.5 font-mono text-[10px] text-white/40">
                      <span>Ref ID:</span>
                      <span className="text-white bg-white/5 px-2 py-0.5 rounded border border-white/10">
                        {cert.idCredential}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Verified Verification Badge Footer */}
              <div className="p-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-sans text-[11px] text-[#06B6D4] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span>Verified Safe State</span>
                </div>
                
                <span className="text-white/40 text-xs font-mono group-hover:text-white transition-colors flex items-center gap-1">
                  <span>Year {cert.year}</span>
                </span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Dynamic bottom counter details */}
        <div className="mt-16 flex flex-wrap gap-4 items-center justify-center text-xs text-white/40 select-none">
          <span className="flex items-center gap-1.5">
            <IconRenderer name="CheckCircle" size={12} className="text-cyan-400" />
            W3C Accessibility Verified
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1.5">
            <IconRenderer name="CheckCircle" size={12} className="text-cyan-400" />
            99% UI Score verified
          </span>
        </div>

      </div>

      {/* FULL-SCREEN CERTIFICATE VIEWER MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-neutral-950 border border-white/10 rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col"
            >
              
              {/* Modal Control Toolbar (Fixed Top) */}
              <div className="sticky top-0 z-20 px-6 py-4 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-mono text-white/60 uppercase tracking-widest font-semibold">
                    Certificate Viewer • {selectedCert.issuer}
                  </span>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                  title="Close viewer"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2">
                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Certificate Display Area */}
              <div className="p-4 md:p-6 overflow-y-auto max-h-[90vh] bg-neutral-900/60">
                
                {/* Two Column Layout: Certificate + Info */}
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  
                  {/* LEFT: Certificate Image - Full Display */}
                  <div className="flex-1 bg-white rounded-xl shadow-2xl overflow-hidden border border-neutral-200">
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="w-full h-auto"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* RIGHT: Certificate Info & Description */}
                  <div className="w-full lg:w-96 flex flex-col gap-4 text-left">
                    
                    {/* Title & Issuer */}
                    <div>
                      <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                        {selectedCert.title}
                      </h2>
                      <p className="text-sm text-white/60 mb-3">
                        Issued by <span className="text-cyan-400 font-semibold">{selectedCert.issuer}</span>
                      </p>
                      <p className="text-sm text-white/40">
                        Year: <span className="text-white font-semibold">{selectedCert.year}</span>
                      </p>
                    </div>
                    
                    {/* Credential ID */}
                    {selectedCert.idCredential && (
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-xs font-mono text-white/40 block mb-1">Credential ID</span>
                        <span className="text-sm font-mono text-cyan-400 font-bold">{selectedCert.idCredential}</span>
                      </div>
                    )}

                    {/* Description */}
                    {selectedCert.description && (
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <h3 className="text-sm font-bold text-white mb-2">About this Certificate</h3>
                        <p className="text-sm text-white/80 leading-relaxed">
                          {selectedCert.description}
                        </p>
                      </div>
                    )}

                    {/* Verification Badge */}
                    <div className="flex items-center gap-2 text-sm text-white/40 pt-2 border-t border-white/10">
                      <IconRenderer name="CheckCircle" size={14} className="text-green-500" />
                      <span>Verified Certificate</span>
                    </div>

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
