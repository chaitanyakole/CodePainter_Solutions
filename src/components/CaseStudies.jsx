import React from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  ArrowUpRight,
  Gauge,
  Scan,
  Printer,
  Sliders
} from 'lucide-react';

export default function CaseStudies({ onSelectCaseStudy }) {
  const cases = [
    {
      id: 1,
      category: "Machine Retrofit",
      location: "Pune Industrial Region",
      title: "Honing Machine Automation & PLC Upgradation",
      clientType: "Precision Machining Tier-1 Vendor",
      challenge: "Legacy relay logic suffered frequent stoppage, lacked recipe storage for different bore diameters, and posed operator safety risks during tool changeovers.",
      solution: "Engineered a turnkey retrofit with a Mitsubishi FX5U PLC and 7\" Color Touchscreen HMI. Integrated dual-channel safety relays, digital stroke counter, and multi-recipe memory.",
      result: "22% Cycle Time Reduction",
      secondaryResult: "Zero electrical downtime in 18+ months",
      icon: Sliders,
      tagColor: "bg-brand-500/10 border-brand-500/30 text-brand-600 dark:text-brand-400",
      image: null
    },
    {
      id: 2,
      category: "Quality & Testing Rigs",
      location: "PCMC Industrial Belt",
      title: "Automated Leak Test Station with Live Pressure Decay Logging",
      clientType: "Automotive Castings & Valve Manufacturer",
      challenge: "Manual analog pressure testing allowed untested parts to bypass shipping inspections, risking catastrophic warranty field failures.",
      solution: "Developed custom C# PC software interfacing via RS485 Modbus with digital pressure transducers and a handheld 2D barcode scanner. Test must register PASS before label prints.",
      result: "100% Automated Traceability",
      secondaryResult: "Zero test-bypass occurrences recorded",
      icon: Gauge,
      tagColor: "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400",
      image: "/images/smart-factory.jpg"
    },
    {
      id: 3,
      category: "Vision Inspection Poka-Yoke",
      location: "Chakan MIDC",
      title: "OpenCV Edge Computer Vision Assembly Verification",
      clientType: "Automotive Sub-Assembly Line",
      challenge: "Operators occasionally missed placing critical O-rings and clips prior to final riveting, resulting in costly customer rejections.",
      solution: "Installed high-speed industrial GigE cameras with polarized LED ring illumination. Custom OpenCV algorithms verify part presence, orientation, and OCR batch codes in < 180ms.",
      result: "0% Missing Part Rejections",
      secondaryResult: "Instant pneumatic reject gate activation",
      icon: Scan,
      tagColor: "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400",
      image: "/images/vision-rig.jpg"
    },
    {
      id: 4,
      category: "Packaging Automation",
      location: "Bhosari MIDC",
      title: "Synchronized Honeywell & Zebra ZPL Barcode Automation",
      clientType: "High-Volume Assembly & Export Unit",
      challenge: "Manual label printing caused bottlenecks at end-of-line packaging and human errors in serial number sequencing.",
      solution: "Programmed PLC output triggers directly communicating with Honeywell PM45 and TSC TE210 printers over TCP/IP using native ZPL/TSPL protocols. Scanned once verified.",
      result: "100% Automated Packaging",
      secondaryResult: "Zero operator printing lag & duplicate elimination",
      icon: Printer,
      tagColor: "bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400",
      image: null
    }
  ];

  return (
    <section id="case-studies" className="py-20 relative bg-slate-100/50 dark:bg-[#07070b]/50 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              Proven Industrial Deployments
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Real-World Engineering in Action
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-base max-w-2xl">
              Examine how our custom PLC logic, computer vision poka-yoke, and IIoT architectures deliver measurable ROI on factory floors in Pune & Western India.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Verified Plant Performance Metrics
            </span>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((cs) => {
            const Icon = cs.icon;
            return (
              <div 
                key={cs.id}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0f0f17]/70 backdrop-blur-md overflow-hidden hover:border-brand-500/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
              >
                {/* Optional Project Visual */}
                {cs.image && (
                  <div className="relative h-56 w-full overflow-hidden border-b border-slate-200 dark:border-slate-800">
                    <img 
                      src={cs.image} 
                      alt={cs.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 dark:from-[#07070b] via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-4 flex items-center gap-2 text-xs font-mono bg-white/90 dark:bg-[#0f0f17]/90 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 shadow-md">
                      <MapPin className="w-3 h-3 text-amber-500 dark:text-amber-400" />
                      <span>{cs.location}</span>
                    </div>
                  </div>
                )}

                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top Row with Category Badge and Icon */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border flex items-center gap-1.5 ${cs.tagColor}`}>
                        <Icon className="w-3.5 h-3.5" />
                        <span>{cs.category}</span>
                      </span>
                      {!cs.image && (
                        <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                          <MapPin className="w-3 h-3 text-amber-500 dark:text-amber-400" />
                          {cs.location}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors mb-2">
                      {cs.title}
                    </h3>
                    <div className="text-xs text-brand-600 dark:text-brand-400 font-mono mb-4">
                      Sector: {cs.clientType}
                    </div>

                    {/* Challenge & Solution */}
                    <div className="space-y-3 mb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 font-semibold uppercase text-[10px] tracking-wider block font-mono">The Plant Challenge</span>
                        <p className="mt-0.5">{cs.challenge}</p>
                      </div>
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 font-semibold uppercase text-[10px] tracking-wider block font-mono">The Engineered Solution</span>
                        <p className="mt-0.5">{cs.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlighted Results Banner */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-[#07070b]/60 -mx-7 -mb-7 p-6 rounded-b-2xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                        <div>
                          <div className="text-[10px] uppercase font-mono text-slate-500 dark:text-slate-400">Primary Impact</div>
                          <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{cs.result}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 sm:border-l sm:border-slate-200 dark:sm:border-slate-800 sm:pl-4">
                        <ShieldCheck className="w-5 h-5 text-brand-500 dark:text-brand-400 flex-shrink-0" />
                        <div>
                          <div className="text-[10px] uppercase font-mono text-slate-500 dark:text-slate-400">Reliability</div>
                          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">{cs.secondaryResult}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                      <button 
                        onClick={() => onSelectCaseStudy(cs.title)}
                        className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-500 dark:hover:text-brand-300 flex items-center gap-1 group-hover:underline"
                      >
                        <span>Discuss similar solution for your plant</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
