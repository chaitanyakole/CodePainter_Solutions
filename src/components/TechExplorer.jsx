import React, { useState } from 'react';
import { Cpu, Network, Eye, Printer, CheckCircle2, Terminal } from 'lucide-react';

export default function TechExplorer() {
  const [activeCategory, setActiveCategory] = useState('plcs');

  const categories = [
    { id: 'plcs', label: 'PLCs & Controllers', icon: Cpu },
    { id: 'protocols', label: 'Industrial Protocols & IIoT', icon: Network },
    { id: 'vision', label: 'Computer Vision & Sensors', icon: Eye },
    { id: 'scada', label: 'SCADA & Traceability Printers', icon: Printer },
  ];

  const techData = {
    plcs: [
      {
        name: "Siemens S7-1200 / S7-1500",
        type: "PLC & Safety Controller",
        details: "TIA Portal v16-v19, Ladder (LAD), Structured Control Language (SCL), Function Block Diagram (FBD), ET 200SP Remote I/O.",
        badge: "Primary Expertise",
        status: "Tier-1 Validated"
      },
      {
        name: "Mitsubishi MELSEC iQ-F FX5U",
        type: "High-Performance Compact PLC",
        details: "GX Works3 environment, built-in analog, Ethernet communication, high-speed pulse outputs for multi-axis servo positioning.",
        badge: "Specialized",
        status: "Fast Commissioning"
      },
      {
        name: "Delta DVP & AS Series",
        type: "Cost-Effective Automation",
        details: "DVP-SS2/SV2, AS200/300 controllers with DOP-100 series color touchscreen HMIs via DOPSoft.",
        badge: "OEM Favorite",
        status: "Rapid Delivery"
      },
      {
        name: "Allen-Bradley / Rockwell",
        type: "CompactLogix & Micro800",
        details: "Connected Components Workbench (CCW) and Studio 5000 for multinational plant standards.",
        badge: "Enterprise",
        status: "Certified"
      }
    ],
    protocols: [
      {
        name: "Modbus RTU / Modbus TCP",
        type: "RS485 & Ethernet Telemetry",
        details: "Multi-drop communication connecting digital energy meters, temperature scanners, leak transducers, and load cells.",
        badge: "Ubiquitous",
        status: "Zero-Latency"
      },
      {
        name: "OPC-UA (Open Platform Communications)",
        type: "Secure Industry 4.0 Standard",
        details: "Client/Server architecture bridging Siemens S7-1500 and Mitsubishi directly into MES and cloud analytics.",
        badge: "Industry 4.0",
        status: "Encrypted"
      },
      {
        name: "MQTT & Edge Telemetry",
        type: "Lightweight IoT Broker",
        details: "Publish/Subscribe protocol for streaming machine state, cycle metrics, and alarms to remote plant dashboards.",
        badge: "Cloud Ready",
        status: "Real-time"
      },
      {
        name: "PROFINET & EtherNet/IP",
        type: "Deterministic Fieldbus",
        details: "Decentralized peripheral interfacing, remote valve terminals, variable frequency drives (VFDs), and servo amplifiers.",
        badge: "High Speed",
        status: "Industrial Grade"
      }
    ],
    vision: [
      {
        name: "OpenCV Computer Vision (C++ / Python)",
        type: "Custom AI Algorithms",
        details: "Sub-pixel edge detection, template matching, thresholding, contour extraction, and OCR text verification.",
        badge: "Custom Logic",
        status: "99.9% Accuracy"
      },
      {
        name: "Industrial GigE & USB3 Vision Cameras",
        type: "High-Speed Image Capture",
        details: "Global shutter CMOS sensors, C-mount precision lenses, synchronized hardware strobing up to 60 FPS.",
        badge: "High Speed",
        status: "Factory Hardened"
      },
      {
        name: "Custom LED Ring & Darkfield Illuminators",
        type: "Optical Illumination",
        details: "Diffused polarized light rings, backlights, and coaxial illuminators to eliminate reflections on machined steel & plastic.",
        badge: "Optics Design",
        status: "High Contrast"
      },
      {
        name: "Laser Displacement & Pressure Transducers",
        type: "Precision Gauging",
        details: "Analog 4-20mA and 0-10V sensor integration for micron-level height checks and millibar leak decay tracking.",
        badge: "Calibrated",
        status: "High Precision"
      }
    ],
    scada: [
      {
        name: "Siemens WinCC Runtime & Advanced",
        type: "Plant Supervisory SCADA",
        details: "Full graphical animated mimics, trending graphs, alarm logs, multi-user permissions, and FDA 21 CFR Part 11 readiness.",
        badge: "Enterprise SCADA",
        status: "Reliable"
      },
      {
        name: "Custom C# .NET WinForms & WPF",
        type: "Custom Testing Software",
        details: "Direct serial and TCP/IP hardware interfacing, local SQLite/SQL Server databases, automated PDF report generation.",
        badge: "Custom Benches",
        status: "Zero License Fee"
      },
      {
        name: "Zebra ZPL II Thermal Printing",
        type: "Automated Industrial Labeling",
        details: "Native printer control language over TCP/IP socket directly from PLC or PC for zero-lag barcode and QR printing.",
        badge: "Zebra Standard",
        status: "Instant Dispatch"
      },
      {
        name: "Honeywell PM45 & TSC Industrial Printers",
        type: "Heavy-Duty Factory Labelers",
        details: "Direct Fingerprint/TSPL scripting, automatic rewinders, and 300/600 DPI high-density 2D DataMatrix printing.",
        badge: "Rugged",
        status: "Continuous 24/7"
      }
    ]
  };

  return (
    <section id="tech-stack" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            Engineering Stack & Protocols
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certified Hardware & Protocol Matrix
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-base">
            We write clean, modular, and vendor-compliant code tailored to standard factory automation platforms and communication standards.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-gradient-to-r from-brand-600 to-rose-600 text-white shadow-lg shadow-brand-500/30'
                      : 'bg-white dark:bg-[#0f0f17] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techData[activeCategory].map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-[#0f0f17]/60 backdrop-blur-md hover:border-brand-500/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400">
                    {item.badge}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {item.status}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                  {item.name}
                </h4>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mb-3">
                  {item.type}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {item.details}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400" />
                  Production Tested in PCMC
                </span>
                <span className="text-brand-600 dark:text-brand-400 font-semibold">Turnkey Support</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
