import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Which PLC, HMI, and SCADA brands do you specialize in?",
      a: "We provide comprehensive logic programming and hardware commissioning for Siemens (TIA Portal, S7-1200, S7-1500, ET 200SP, WinCC), Mitsubishi (GX Works3, MELSEC iQ-F FX5U), Delta (DVP series, DOPSoft), and Allen-Bradley systems, paired with WinCC SCADA or custom C#/Python interfaces."
    },
    {
      q: "Do you provide rapid on-site commissioning across Chakan, Bhosari, and Pune?",
      a: "Yes, our engineering team is based in Walhekarwadi, Chinchwad. We provide rapid on-site commissioning, electrical testing, and troubleshooting across Bhosari, Chakan MIDC (Phases I-IV), Talegaon, Ranjangaon, Hinjawadi, and Western Maharashtra."
    },
    {
      q: "Can you retrofit and modernize older machines without mechanical overhaul?",
      a: "Yes. Machine retrofitting is one of our primary specialties. We replace obsolete relay logic or discontinued PLCs on honing machines, hydraulic presses, and extrusion lines with modern PLCs, color touchscreen HMIs, and safety interlocks while keeping your existing mechanical tooling intact."
    },
    {
      q: "Can we request an on-site factory visit or Proof-of-Concept (PoC)?",
      a: "Certainly. We regularly visit manufacturing plants in PCMC and Chakan to evaluate panel layouts, examine component dimensions for computer vision poka-yoke, and conduct pilot trials for automated leak testing or IIoT machine logging."
    },
    {
      q: "How does your OpenCV computer vision inspection system integrate with the PLC?",
      a: "Our vision stations use industrial GigE/USB3 cameras with high-speed OpenCV routines running on dedicated edge IPCs. When an inspection is completed (< 200ms), pass/fail digital trigger signals are transmitted directly to the PLC to actuate pneumatic reject gates or lock the packing line."
    },
    {
      q: "Can legacy non-IoT machines be connected to our ERP or cloud dashboards?",
      a: "Yes. We install non-invasive edge IoT gateways and Modbus energy/cycle sensors that capture real-time machine uptime, cycle times, and scrap counts without modifying existing validated machine controller warranties."
    }
  ];

  return (
    <section className="py-20 relative bg-slate-100/50 dark:bg-slate-950/40 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Common Plant & Engineering Inquiries
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-base">
            Answers for plant heads, maintenance managers, and automation project engineers.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/60 backdrop-blur-md overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-bold text-base text-slate-900 dark:text-white">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180 text-brand-500 dark:text-brand-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-200 dark:border-slate-800/60 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
