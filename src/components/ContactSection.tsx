import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import emailjs from '@emailjs/browser';
import IconRenderer from "./IconRenderer";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("$5,000 - $10,000");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const budgets = ["$2,500 - $5,000", "$5,000 - $10,000", "$10,000+", "Consultancy Retainer"];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setErrorMessage("");
    
    // EmailJS configuration from environment variables
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS is configured
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setIsSubmitting(false);
      setErrorMessage("EmailJS is not configured. Please set up your environment variables.");
      return;
    }

    // Template parameters that will be sent to EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      company: company || "Not specified",
      budget: budget,
      message: message,
      to_name: "Princess Ann Dadul", // Your name
    };

    try {
      // Send email using EmailJS
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      
      // Success - show success message
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Clear form fields
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
      setBudget("$5,000 - $10,000");
    } catch (error) {
      // Error handling
      console.error("EmailJS Error:", error);
      setIsSubmitting(false);
      setErrorMessage("Failed to send message. Please try again or contact directly via email.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-[#050505] overflow-hidden border-t border-white/5"
    >
      {/* Glow Rings background */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] glow-purple rounded-full pointer-events-none opacity-40" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] glow-cyan rounded-full pointer-events-none opacity-40" />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#06B6D4] font-semibold mb-3 block">
            08 • Consultation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-6">
            Let&apos;s Build Something Unforgettable
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full" />
        </div>

        {/* Contact Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Details Column Left (Spans 5) */}
          <div className="lg:col-span-5 text-left flex flex-col gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-4">
                Let&apos;s Initiate a Briefing Project
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
                Do you have a prestigious application or standard enterprise platform that requires world-class visual hierarchy, interactive kinetic micro-animations, or modular figma variables? Drop me a line, and we will arrange a face-to-face qualitative consultation session.
              </p>
            </div>

            {/* Quick Stats list inside panel */}
            <div className="flex flex-col gap-4 border-y border-white/10 py-8">
              <div className="flex items-center gap-3.5 group">
                <div className="w-11 h-11 rounded-xl bg-cyan-400/10 text-cyan-405 border border-cyan-400/20 flex items-center justify-center transition-colors">
                  <IconRenderer name="Mail" size={18} />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">DIRECT EMAIL</span>
                  <a id="contact_email_link" href="mailto:princessannedadul@gmail.com" className="text-white text-xs sm:text-sm font-semibold hover:text-cyan-400 transition-colors">
                    princessannedadul@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 flex items-center justify-center">
                  <IconRenderer name="Sparkles" size={18} />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">COMMUNICATION RADAR</span>
                  <p className="text-white text-xs sm:text-sm font-semibold">
                    Mon - Fri • 9:00 AM - 6:00 PM UTC+8
                  </p>
                </div>
              </div>
            </div>

            {/* Follow Section */}
            <div className="flex flex-col gap-3">
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">CONNECT ELSEWHERE:</span>
              <div className="flex gap-4">
                <a
                  id="contact_social_instagram"
                  href="https://www.instagram.com/_itsannieyah"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-cyan-400/30 flex items-center justify-center transition-colors"
                  title="Instagram"
                >
                  <IconRenderer name="Instagram" size={18} />
                </a>

                <a
                  id="contact_social_facebook"
                  href="https://www.facebook.com/annie.dadul"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-cyan-400/30 flex items-center justify-center transition-colors"
                  title="Facebook"
                >
                  <IconRenderer name="Facebook" size={18} />
                </a>

                <a
                  id="contact_social_github"
                  href="https://github.com/princessanndadul"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-cyan-400/30 flex items-center justify-center transition-colors"
                  title="GitHub"
                >
                  <IconRenderer name="Github" size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Input Form Right (Spans 7) */}
          <div className="lg:col-span-7 p-8 rounded-3xl glass card-shadow relative h-full">
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="form_active"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  {/* Two columns fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col items-start gap-1.5 text-left">
                      <label htmlFor="user_name" className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                        YOUR NAME *
                      </label>
                      <input
                        id="user_name"
                        type="text"
                        required
                        placeholder="Sarah Jenkins"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 focus:bg-[#0c0c0c] border border-white/10 focus:border-cyan-400/50 rounded-xl text-white outline-none text-xs sm:text-sm font-light transition-all"
                      />
                    </div>

                    <div className="flex flex-col items-start gap-1.5 text-left">
                      <label htmlFor="user_email" className="text-[10px] font-mono uppercase tracking-widest text-[#FFF]/40">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        id="user_email"
                        type="email"
                        required
                        placeholder="sarah@corp.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 focus:bg-[#0c0c0c] border border-white/10 focus:border-cyan-400/50 rounded-xl text-white outline-none text-xs sm:text-sm font-light transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-1.5 text-left">
                    <label htmlFor="user_company" className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                      COMPANY NAME
                    </label>
                    <input
                      id="user_company"
                      type="text"
                      placeholder="Finera Global Inc."
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 focus:bg-[#0c0c0c] border border-white/10 focus:border-cyan-400/50 rounded-xl text-white outline-none text-xs sm:text-sm font-light transition-all"
                    />
                  </div>

                  {/* Estimated Project Budget selection */}
                  <div className="flex flex-col items-start gap-3 text-left">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFF]/40">
                      ESTIMATED PROJECT BUDGET RANGE
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {budgets.map((b) => {
                        const isBudgetSelected = budget === b;
                        return (
                          <button
                            key={b}
                            id={`budget_btn_${b}`}
                            type="button"
                            onClick={() => setBudget(b)}
                            className={`px-4 py-2.5 rounded-lg border text-[11px] font-mono transition-all duration-300 cursor-pointer ${
                              isBudgetSelected
                                ? "text-cyan-300 bg-cyan-400/15 border-cyan-400/30"
                                : "text-white/60 bg-white/5 border-white/10 hover:text-white hover:border-cyan-400/20"
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Brief Description */}
                  <div className="flex flex-col items-start gap-1.5 text-left">
                    <label htmlFor="project_message" className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                      PROJECT BRIEF / SUMMARY *
                    </label>
                    <textarea
                      id="project_message"
                      required
                      rows={4}
                      placeholder="Please summarize your target audience and core design requirements..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 focus:bg-[#0c0c0c] border border-white/10 focus:border-cyan-400/50 rounded-xl text-white outline-none text-xs sm:text-sm font-light transition-all resize-none"
                    />
                  </div>

                  {/* Submit Call-to-action button */}
                  <button
                    id="contact_submit_btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 text-black font-extrabold py-4 rounded-xl overflow-hidden transition-all duration-300 shadow-md cursor-pointer hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "Dispatching Message..." : "Dispatch Briefing Request"}</span>
                    <IconRenderer name="Send" size={13} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </button>

                  {/* Error Message Display */}
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center"
                    >
                      {errorMessage}
                    </motion.div>
                  )}

                </motion.form>
              ) : (
                <motion.div
                  key="form_success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-20 text-center select-none"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-400 border border-green-400/30 flex items-center justify-center mb-6 animate-bounce">
                    <IconRenderer name="CheckCircle" size={28} />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-3">
                    Project Brief Transmitted!
                  </h3>
                  
                  <p className="text-white/60 text-sm font-light max-w-md mb-8 leading-relaxed">
                    Thank you. Princess Ann Dadul has received your briefing logs. A formal diagnostic response and calendar link will be dispatched to your email within 12 hours.
                  </p>

                  <button
                    id="contact_reset_btn"
                    onClick={() => setSubmitSuccess(false)}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white border border-white/10 hover:border-white bg-white/5 rounded-lg transition-colors cursor-pointer"
                  >
                    Transmit Another Document
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
