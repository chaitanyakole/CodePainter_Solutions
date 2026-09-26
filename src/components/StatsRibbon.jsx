import React from 'react';
import { Factory, CheckCircle, MapPin, Clock } from 'lucide-react';

export default function StatsRibbon() {
  const stats = [
    {
      icon: Factory,
      val: "15+",
      label: "Industrial Clients",
      desc: "Automotive, Pharma & Heavy Engineering",
      color: "text-brand-500",
      bg: "bg-brand-500/10",
      border: "border-brand-500/30"
    },
    {
      icon: CheckCircle,
      val: "25+",
      label: "Turnkey Deployments",
      desc: "Zero-defect PLC & Vision Installations",
      color: "text-emerald-500 dark:text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30"
    },
    {
      icon: MapPin,
      val: "100%",
      label: "On-Site PCMC & Pune",
      desc: "Chakan, Bhosari, Talegaon & Ranjangaon",
      color: "text-amber-500 dark:text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/30"
    },
    {
      icon: Clock,
      val: "< 60m",
      label: "Rapid Emergency Response",
      desc: "Direct breakdown assistance & diagnosis",
      color: "text-rose-500 dark:text-rose-400",
      bg: "bg-rose-500/10",
      border: "border-rose-500/30"
    }
  ];

  return (
    <section className="relative z-10 py-6 border-y border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-[#050508]/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl p-5 border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-[#0f0f17]/60 hover:bg-white dark:hover:bg-[#0f0f17] hover:border-brand-500/40 transition-all duration-300 flex items-center space-x-4 shadow-sm hover:shadow-brand-500/10"
              >
                <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.border} border flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                    {stat.val}
                  </div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {stat.desc}
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
