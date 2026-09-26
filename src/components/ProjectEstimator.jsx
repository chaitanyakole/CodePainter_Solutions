import React, { useState } from 'react';
import { 
  Calculator, 
  ArrowRight, 
  Sparkles, 
  MessageSquareShare 
} from 'lucide-react';

export default function ProjectEstimator({ onDirectRfq }) {
  const [domain, setDomain] = useState('plc-scada');
  const [hardware, setHardware] = useState('siemens');
  const [location, setLocation] = useState('chakan');
  const [urgency, setUrgency] = useState('rapid');

  const domainOptions = [
    { id: 'plc-scada', label: 'PLC & SCADA Development', desc: 'Siemens/Mitsubishi logic, HMI mimics, alarms' },
    { id: 'vision', label: 'Computer Vision Poka-Yoke', desc: 'Missing parts, orientation, OCR verification' },
    { id: 'iiot', label: 'Shop-Floor IIoT & OEE', desc: 'OPC-UA/Modbus machine logging & live dashboard' },
    { id: 'retrofit', label: 'Machine Retrofit & Panel', desc: 'Relay-to-PLC conversion, rewiring & safety' },
    { id: 'traceability', label: 'Automated Barcode / ZPL', desc: 'Honeywell/Zebra synchronized label printing' },
  ];

  const hardwareOptions = [
    { id: 'siemens', label: 'Siemens (S7-1200 / S7-1500 / TIA Portal)' },
    { id: 'mitsubishi', label: 'Mitsubishi (MELSEC iQ-F FX5U / GX Works3)' },
    { id: 'delta', label: 'Delta (DVP / DOPSoft)' },
    { id: 'rockwell', label: 'Allen-Bradley / Rockwell' },
    { id: 'custom', label: 'Open Platform / C# / Python Rigs' },
  ];

  const locationOptions = [
    { id: 'chakan', label: 'Chakan MIDC (Phase I & II)' },
    { id: 'bhosari', label: 'Bhosari MIDC / Pimpri' },
    { id: 'talegaon', label: 'Talegaon MIDC' },
    { id: 'ranjangaon', label: 'Ranjangaon MIDC' },
    { id: 'pcmc', label: 'PCMC / Walhekarwadi Local' },
    { id: 'other', label: 'Other Industrial Belt (Maharashtra / India)' },
  ];

  const urgencyOptions = [
    { id: 'emergency', label: '🚨 Emergency Breakdown (< 24 Hours)' },
    { id: 'rapid', label: '⚡ Rapid Deployment (1 - 2 Weeks)' },
    { id: 'standard', label: '📅 Standard Plant Turnkey (3 - 6 Weeks)' },
  ];

  const selectedDomainObj = domainOptions.find(d => d.id === domain);
  const selectedHwObj = hardwareOptions.find(h => h.id === hardware);
  const selectedLocObj = locationOptions.find(l => l.id === location);
  const selectedUrgObj = urgencyOptions.find(u => u.id === urgency);

  // Generate pre-filled WhatsApp message
  const generateWhatsAppMessage = () => {
    const text = `Hello Codepainter Solutions!%0A%0AI have an engineering project requirement:%0A- *Domain:* ${selectedDomainObj?.label}%0A- *Hardware/Platform:* ${selectedHwObj?.label}%0A- *Plant Location:* ${selectedLocObj?.label}%0A- *Timeline Urgency:* ${selectedUrgObj?.label}%0A%0APlease contact me with feasibility and turnaround estimate.`;
    window.open(`https://wa.me/917387780352?text=${text}`, '_blank');
  };

  const handleApplyToForm = () => {
    onDirectRfq({
      domain: selectedDomainObj?.label,
      hardware: selectedHwObj?.label,
      location: selectedLocObj?.label,
      urgency: selectedUrgObj?.label
    });
  };

  return (
    <section id="estimator" className="py-20 relative bg-slate-100/50 dark:bg-[#07070b]/60 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Project Builder
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Scope & Turnaround Estimator
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-base">
            Select your automation parameters below to generate an immediate scope summary and connect directly with our engineering team in Chinchwad.
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Domain */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0f0f17]/80 backdrop-blur-md shadow-sm">
              <label className="text-xs font-mono uppercase tracking-wider text-brand-600 dark:text-brand-400 font-bold block mb-3">
                1. Select Engineering Domain
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {domainOptions.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setDomain(opt.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      domain === opt.id
                        ? 'border-brand-500 bg-brand-500/10 text-slate-900 dark:text-white shadow-sm'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#14141e] text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <div className="font-bold text-sm">{opt.label}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Hardware */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0f0f17]/80 backdrop-blur-md shadow-sm">
              <label className="text-xs font-mono uppercase tracking-wider text-brand-600 dark:text-brand-400 font-bold block mb-3">
                2. Target Controller / Hardware Platform
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {hardwareOptions.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setHardware(opt.id)}
                    className={`p-3 rounded-xl text-left border text-xs font-medium transition-all ${
                      hardware === opt.id
                        ? 'border-brand-500 bg-brand-500/10 text-brand-600 dark:text-brand-300 font-bold shadow-sm'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#14141e] text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Location & Urgency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Plant Location */}
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0f0f17]/80 backdrop-blur-md shadow-sm">
                <label className="text-xs font-mono uppercase tracking-wider text-brand-600 dark:text-brand-400 font-bold block mb-3">
                  3. Plant Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-[#14141e] border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-200 focus:outline-none focus:border-brand-500"
                >
                  {locationOptions.map(opt => (
                    <option key={opt.id} value={opt.id} className="bg-white dark:bg-[#14141e] text-slate-900 dark:text-white">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Urgency */}
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0f0f17]/80 backdrop-blur-md shadow-sm">
                <label className="text-xs font-mono uppercase tracking-wider text-brand-600 dark:text-brand-400 font-bold block mb-3">
                  4. Timeline Requirement
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-[#14141e] border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-200 focus:outline-none focus:border-brand-500"
                >
                  {urgencyOptions.map(opt => (
                    <option key={opt.id} value={opt.id} className="bg-white dark:bg-[#14141e] text-slate-900 dark:text-white">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

          </div>

          {/* Generated Estimate & Action Summary Column */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-2xl border-2 border-brand-500/40 bg-white dark:bg-[#0f0f17] p-7 shadow-xl shadow-brand-500/10 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></div>
                  <span className="font-bold text-slate-900 dark:text-white text-base">Project Scope Summary</span>
                </div>
                <span className="text-xs font-mono text-brand-600 dark:text-brand-400 font-bold">RFQ-GEN-READY</span>
              </div>

              {/* Specs Box */}
              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex justify-between items-start">
                  <span className="text-slate-500 dark:text-slate-400">Domain:</span>
                  <span className="text-slate-900 dark:text-white font-bold text-right max-w-[240px]">{selectedDomainObj?.label}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-slate-500 dark:text-slate-400">Target Controller:</span>
                  <span className="text-brand-600 dark:text-brand-300 font-mono text-right max-w-[240px]">{selectedHwObj?.label}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-slate-500 dark:text-slate-400">Factory Hub:</span>
                  <span className="text-amber-600 dark:text-amber-400 font-semibold text-right">{selectedLocObj?.label}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-slate-500 dark:text-slate-400">Priority:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-right">{selectedUrgObj?.label}</span>
                </div>
                <div className="flex justify-between items-start pt-2 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">On-Site Commissioning:</span>
                  <span className="text-brand-600 dark:text-brand-400 font-mono font-bold">Included (Pune & PCMC)</span>
                </div>
              </div>

              {/* Expected Next Steps */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#08080d] border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-2">
                <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-brand-500 dark:text-brand-400" />
                  What Happens Next:
                </div>
                <p>1. Our engineering lead reviews your I/O requirements and line constraints.</p>
                <p>2. We arrange a plant inspection or PoC trial at Chinchwad/Chakan.</p>
                <p>3. Turnkey commercial proposal submitted within 24-48 business hours.</p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={generateWhatsAppMessage}
                  className="w-full py-3.5 px-4 rounded-full font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquareShare className="w-4 h-4" />
                  <span>Send Scope to WhatsApp (+91 7387780352)</span>
                </button>

                <button
                  onClick={handleApplyToForm}
                  className="w-full py-3 px-4 rounded-full font-bold text-xs text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-[#161622] hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  <span>Attach to RFQ Contact Form</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500 font-mono">
                Direct Engineering Desk • Sumit Sutar
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
