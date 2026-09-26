import React, { useState, useEffect } from 'react';
import {
  Cpu,
  ArrowRight,
  PhoneCall,
  Activity,
  MapPin,
  Eye,
  Network,
  Wrench
} from 'lucide-react';

const cycleWords = [
  "Smart Factories.",
  "Zero Downtime.",
  "Computer Vision.",
  "Autonomous Lines.",
  "Shop-Floor IIoT."
];

export default function Hero({ onOpenQuote, onOpenCallModal }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % cycleWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28">

      {/* ── CodePainter-style Concentric Orbital Rings Background ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="relative w-[750px] h-[750px] sm:w-[900px] sm:h-[900px] opacity-25">
          {/* Ring 1 */}
          <div className="absolute inset-0 rounded-full border border-dashed border-brand-500/40 animate-[spin_60s_linear_infinite]"></div>
          {/* Ring 2 */}
          <div className="absolute inset-16 rounded-full border border-rose-400/20 animate-[spin_40s_linear_infinite_reverse]"></div>
          {/* Ring 3 */}
          <div className="absolute inset-32 rounded-full border border-dashed border-brand-500/30 animate-[spin_25s_linear_infinite]"></div>
          {/* Traveling Crimson Orb */}
          <div className="absolute top-1/2 left-0 w-3 h-3 rounded-full bg-brand-500 shadow-[0_0_16px_#F5302A] animate-ping"></div>
          <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_12px_#fbbf24]"></div>
        </div>
      </div>

      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-500/15 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-amber-500/10 blur-[110px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Centered Status Pill */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-500 dark:text-brand-400 text-xs sm:text-sm font-semibold shadow-inner">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span>Turnkey Industrial Automation & IIoT Integrators</span>
            <span className="text-slate-400 dark:text-slate-500 hidden sm:inline">|</span>
            <span className="text-slate-600 dark:text-slate-300 font-mono hidden sm:flex items-center gap-1">
              <MapPin className="w-3 h-3 text-amber-500 dark:text-amber-400" /> Walhekarwadi, Pune
            </span>
          </div>
        </div>

        {/* ── Main Hero Title with Live Word Cycling ── */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
            <span>We Engineer Precision</span>
            <br />
            <span>Systems That Drive</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-rose-500 to-amber-500 dark:to-amber-300 inline-block min-h-[1.2em] transition-all duration-300">
              {cycleWords[currentWordIndex]}
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Specializing in <strong className="text-slate-900 dark:text-white font-semibold">Siemens & Mitsubishi PLC programming</strong>, AI-powered <strong className="text-slate-900 dark:text-white font-semibold">Computer Vision Poka-Yoke</strong>, automated testing rigs, and shop-floor IIoT across Pune, PCMC, Chakan & Bhosari.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-9 py-4 rounded-full font-bold text-base text-white bg-gradient-to-r from-brand-600 via-brand-500 to-rose-600 hover:from-brand-500 hover:to-rose-500 shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenCallModal}
              className="w-full sm:w-auto px-7 py-4 rounded-full font-bold text-base text-slate-700 dark:text-slate-200 bg-white dark:bg-[#0f0f17] hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-brand-500/50 transition-all flex items-center justify-center gap-2.5 shadow-lg"
            >
              <PhoneCall className="w-4 h-4 text-amber-500 dark:text-amber-400 animate-pulse" />
              <span>Direct Hotline: +91 7387780352</span>
            </button>
          </div>
        </div>

        {/* ── Floating Corner Tech Badges & Interactive Machine Showcase ── */}
        <div className="mt-14 relative max-w-5xl mx-auto">

          {/* Corner Floating Badges (Desktop & Tablet) */}
          <div className="hidden md:flex absolute -top-8 -left-6 z-20 items-center gap-3 p-3.5 rounded-2xl bg-white/95 dark:bg-[#0f0f17]/95 backdrop-blur-md border border-brand-500/40 shadow-xl animate-float">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-500 dark:text-brand-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Siemens & Mitsubishi</div>
              <div className="text-[10px] font-mono text-brand-600 dark:text-brand-300">TIA Portal & GX Works3</div>
            </div>
          </div>

          <div className="hidden md:flex absolute -top-8 -right-6 z-20 items-center gap-3 p-3.5 rounded-2xl bg-white/95 dark:bg-[#0f0f17]/95 backdrop-blur-md border border-rose-500/40 shadow-xl animate-float" style={{ animationDelay: '1.2s' }}>
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 dark:text-rose-400">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">OpenCV Computer Vision</div>
              <div className="text-[10px] font-mono text-rose-600 dark:text-rose-300">Poka-Yoke & OCR Verif.</div>
            </div>
          </div>

          <div className="hidden md:flex absolute -bottom-6 -left-6 z-20 items-center gap-3 p-3.5 rounded-2xl bg-white/95 dark:bg-[#0f0f17]/95 backdrop-blur-md border border-amber-500/40 shadow-xl animate-float" style={{ animationDelay: '2.0s' }}>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 dark:text-amber-400">
              <Network className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Shop-Floor IIoT & OEE</div>
              <div className="text-[10px] font-mono text-amber-600 dark:text-amber-300">OPC-UA / Modbus / MQTT</div>
            </div>
          </div>

          <div className="hidden md:flex absolute -bottom-6 -right-6 z-20 items-center gap-3 p-3.5 rounded-2xl bg-white/95 dark:bg-[#0f0f17]/95 backdrop-blur-md border border-emerald-500/40 shadow-xl animate-float" style={{ animationDelay: '0.6s' }}>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 dark:text-emerald-400">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Machine Retrofits</div>
              <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-300">Relay-to-PLC Upgrades</div>
            </div>
          </div>

          {/* Central Media Frame */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-[#0f0f17] shadow-2xl group">
            <img
              src="/images/hero-panel.jpg"
              alt="Siemens S7-1500 and Mitsubishi Industrial PLC Automation Panel by Codepainter Solutions"
              className="w-full h-80 sm:h-[420px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 dark:from-[#07070b] via-transparent to-transparent"></div>

            {/* Bottom Real-Time Telemetry Bar */}
            <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-white/90 dark:bg-[#0a0a10]/95 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-4 shadow-xl">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <div className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-mono tracking-wider">System OEE</div>
                  <div className="text-lg font-black text-slate-900 dark:text-white font-mono flex items-center gap-1.5 mt-0.5">
                    <Activity className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                    <span>98.7%</span>
                  </div>
                </div>
                <div className="border-l border-slate-200 dark:border-slate-800 pl-4">
                  <div className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-mono tracking-wider">Controller</div>
                  <div className="text-sm font-bold text-brand-600 dark:text-brand-400 font-mono mt-0.5">S7-1500 / FX5U</div>
                </div>
                <div className="border-l border-slate-200 dark:border-slate-800 pl-4">
                  <div className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-mono tracking-wider">Scan Cycle</div>
                  <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">1.2ms (OK)</div>
                </div>
                <div className="border-l border-slate-200 dark:border-slate-800 pl-4">
                  <div className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-mono tracking-wider">On-Site Dispatch</div>
                  <div className="text-sm font-bold text-amber-600 dark:text-amber-400 font-mono mt-0.5">&lt; 30m Chakan</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
