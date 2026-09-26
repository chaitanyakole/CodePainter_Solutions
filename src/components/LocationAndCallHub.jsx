import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Navigation, 
  Copy, 
  Check, 
  Car, 
  Building2, 
  ExternalLink,
  PhoneCall,
  CalendarCheck
} from 'lucide-react';

export default function LocationAndCallHub({ onOpenCallModal }) {
  const [copied, setCopied] = useState(false);

  const fullAddress = "S No. 47/11, MIDC Road, Walhekarwadi, Chinchwad, Pune, Maharashtra - 411033";
  const mapSearchQuery = "Walhekarwadi, Chinchwad, Pune, Maharashtra 411033";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapSearchQuery)}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapSearchQuery)}`;
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapSearchQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const industrialZones = [
    {
      name: "Bhosari MIDC",
      distance: "7 km",
      time: "~15 mins",
      type: "Precision Engineering & Auto Vendors",
      badge: "Express Response"
    },
    {
      name: "Chakan MIDC (Phases I - IV)",
      distance: "18 km",
      time: "~30 mins",
      type: "Automotive OEMs & Tier-1 Hub",
      badge: "Daily Coverage"
    },
    {
      name: "Talegaon MIDC",
      distance: "20 km",
      time: "~35 mins",
      type: "Heavy Fabrication & Electronics",
      badge: "Priority Route"
    },
    {
      name: "Ranjangaon MIDC",
      distance: "65 km",
      time: "~75 mins",
      type: "White Goods & Commercial Vehicles",
      badge: "Scheduled Support"
    }
  ];

  return (
    <section id="location-hub" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Strategic Pune Location & Rapid Dispatch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Direct Plant Support & Location Center
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-base">
            Centrally situated at Walhekarwadi, Chinchwad, providing immediate on-site PLC troubleshooting, machine breakdown support, and turnkey commissioning across Western Maharashtra.
          </p>
        </div>

        {/* Map and Call Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Google Map */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-[#0f0f17]/80 backdrop-blur-md p-6 shadow-xl">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-brand-500 dark:text-brand-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">Chinchwad Engineering Facility</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Pune, Maharashtra - 411033</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyAddress}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-[#161622] text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Address Copied!" : "Copy Address"}</span>
                  </button>

                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-600 hover:bg-brand-500 text-xs font-bold text-white shadow-md shadow-brand-500/25 transition-all"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Embedded Google Map iframe */}
              <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-inner">
                <iframe
                  title="Codepainter Solutions Location Map"
                  src={mapEmbedUrl}
                  className="w-full h-full border-0 filter contrast-105"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                
                {/* Floating Map Overlay Badge */}
                <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-[#0a0a10]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 flex items-center gap-2 pointer-events-none shadow-md">
                  <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                  <span className="font-mono">Walhekarwadi, Chinchwad • 411033</span>
                </div>
              </div>
            </div>

            {/* Address bar */}
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-500 dark:text-brand-400 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">{fullAddress}</span>
              </span>
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1 font-mono text-xs whitespace-nowrap"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Click-to-Call Center & Regional Zones */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Direct Calling Card */}
            <div className="rounded-2xl border-2 border-brand-500/40 bg-white/90 dark:bg-[#0f0f17]/90 backdrop-blur-md p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <PhoneCall className="w-4 h-4 animate-bounce" />
                  <span>Direct Engineering Call Center</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Online 8am - 8pm
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">
                Speak Directly with an Automation Engineer
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-5 leading-relaxed font-normal">
                No IVR queues or sales middlemen. Call our principal automation engineer for instant technical feasibility, emergency machine breakdowns, or quote discussions.
              </p>

              {/* Dual Numbers */}
              <div className="space-y-3">
                {/* Primary Number */}
                <a
                  href="tel:+917387780352"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-100 dark:bg-[#07070b] hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Primary Engineering Desk</div>
                      <div className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-brand-500 font-mono">
                        +91 7387780352
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-white bg-brand-600 px-3 py-1 rounded-full shadow-sm">
                    Call Now
                  </span>
                </a>

                {/* Secondary Number */}
                <a
                  href="tel:+918698109623"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-100 dark:bg-[#07070b] hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Rapid Commissioning Line</div>
                      <div className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-amber-500 font-mono">
                        +91 8698109623
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-900 bg-amber-400 px-3 py-1 rounded-full shadow-sm">
                    Call Now
                  </span>
                </a>
              </div>

              {/* Schedule Call / Modal Button */}
              {onOpenCallModal && (
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                  <button
                    onClick={onOpenCallModal}
                    className="w-full py-2.5 px-4 rounded-xl border border-dashed border-brand-500/40 hover:border-brand-500 bg-brand-500/5 hover:bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Can't call right now? Request an immediate callback</span>
                  </button>
                </div>
              )}
            </div>

            {/* Regional Industrial Coverage Times */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-[#0f0f17]/60 p-5 shadow-md">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-3 flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400" />
                <span>Estimated On-Site Dispatch Times</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {industrialZones.map((zone, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#07070b] border border-slate-200 dark:border-slate-800/80">
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-xs text-slate-900 dark:text-white">{zone.name}</span>
                      <span className="text-[10px] font-mono text-brand-600 dark:text-brand-400 font-bold">{zone.time}</span>
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 truncate">{zone.type}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
