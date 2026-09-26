import React, { useState } from 'react';
import {
  Cpu,
  Eye,
  Network,
  Code,
  Barcode,
  Wrench,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';

export default function ServicesMatrix({ onSelectService }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const services = [
    {
      id: 'plc-scada',
      category: 'plc',
      icon: Cpu,
      title: "PLC, HMI & SCADA Programming",
      badge: "Siemens & Mitsubishi",
      desc: "Structured logic design in Siemens TIA Portal, Mitsubishi GX Works3, and Delta DOPSoft with comprehensive safety interlocks, alarms, and diagnostics.",
      platforms: ["Siemens S7-1200 / S7-1500", "Mitsubishi FX5U Series", "Delta DVP / DOPSoft", "WinCC SCADA Runtime"],
      deliverables: ["Complete Ladder / SCL Logic", "Intuitive Touchscreen HMI screens", "Fault Diagnostics & Alarm Logs", "Commissioning Sign-Off"],
      borderColor: "hover:border-brand-500"
    },
    {
      id: 'computer-vision',
      category: 'vision',
      icon: Eye,
      title: "Industrial Vision & Visual Poka-Yoke",
      badge: "OpenCV & AI Cameras",
      desc: "High-speed camera inspection for missing component detection, orientation checks, OCR part number verification, and 100% defect-free packaging dispatch.",
      platforms: ["OpenCV (Python/C++)", "Industrial GigE & USB3 Cameras", "Custom LED Ring Illuminators", "Pass/Fail Pneumatic Ejectors"],
      deliverables: ["Sub-millimeter Defect Detection", "OCR Character Recognition", "Live Pass/Fail Dashboard", "Automated Defect Image Archival"],
      borderColor: "hover:border-rose-400"
    },
    {
      id: 'iiot-oee',
      category: 'iiot',
      icon: Network,
      title: "IIoT & Real-Time OEE Dashboards",
      badge: "Industry 4.0 Telemetry",
      desc: "Bridge factory-floor PLC telemetry directly to edge servers and cloud dashboards via OPC-UA, Modbus RTU/TCP, and MQTT for continuous OEE monitoring.",
      platforms: ["OPC-UA Server / Client", "Modbus RS485 & TCP", "MQTT Edge Gateways", "Automated Excel & SQL Logging"],
      deliverables: ["Live Production & Downtime Tracking", "Automated Shift & Batch Reports", "Energy & Power Monitoring", "ERP / MES Data Handshakes"],
      borderColor: "hover:border-amber-400"
    },
    {
      id: 'desktop-software',
      category: 'software',
      icon: Code,
      title: "Custom Testing Rig & PC Software",
      badge: "C# WinForms & Python",
      desc: "Multi-threaded desktop applications engineered for hydro-testing, pneumatic leak testing stations, endurance test benches, and automated calibration rigs.",
      platforms: ["C# .NET / WinForms", "Python PyQt / Tkinter", "National Instruments / DAQ Cards", "SQL Server / SQLite Local"],
      deliverables: ["Real-time Pressure Decay Graphs", "Automated Test Pass/Fail Verdicts", "Barcode Scan Interlocking", "PDF Test Certificate Generation"],
      borderColor: "hover:border-purple-400"
    },
    {
      id: 'barcode-traceability',
      category: 'traceability',
      icon: Barcode,
      title: "Traceability & Barcode Printing",
      badge: "Zebra ZPL & Honeywell",
      desc: "Direct integration between PLCs, 2D barcode scanners, and industrial thermal printers to enforce zero-defect tracking and prevent duplicate part dispatches.",
      platforms: ["Zebra ZPL Programming", "Honeywell PM45 Printers", "TSC TE210 Series", "Cognex & Keyence Handhelds"],
      deliverables: ["Dynamic Serial & QR Generation", "Anti-Duplicate Database Check", "Automatic Label Trigger on Test Pass", "ERP Shipping Verification"],
      borderColor: "hover:border-pink-400"
    },
    {
      id: 'retrofits-panels',
      category: 'retrofit',
      icon: Wrench,
      title: "Machine Retrofitting & Control Panels",
      badge: "Turnkey Revamp",
      desc: "Upgrade obsolete relay-based machines or discontinued PLCs on honing machines, extrusion lines, and presses. Complete panel fabrication, rewiring, and safety logic.",
      platforms: ["Relay-to-PLC Conversion", "Control Panel Fabrication", "Servo & VFD Integration", "Safety Light Curtains & Relays"],
      deliverables: ["Clean Electrical Schematics", "Reduced Machine Cycle Times", "Modernized Touch HMI Interfaces", "On-Site Pune Trial Commissioning"],
      borderColor: "hover:border-brand-500"
    }
  ];

  const filteredServices = activeFilter === 'all'
    ? services
    : services.filter(s => s.category === activeFilter);

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineered for Reliability. Built for Modern Factories.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Turnkey industrial automation services tailored for automotive tier-1 suppliers, machine builders (OEMs), and manufacturing plants throughout Maharashtra.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'plc', label: 'PLC & SCADA' },
              { id: 'vision', label: 'Computer Vision' },
              { id: 'iiot', label: 'IIoT & OEE' },
              { id: 'software', label: 'Testing Rigs' },
              { id: 'traceability', label: 'Barcode/ZPL' },
              { id: 'retrofit', label: 'Machine Retrofits' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${activeFilter === tab.id
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30'
                    : 'bg-white dark:bg-[#0f0f17] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-sm'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl p-7 border border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-[#0f0f17]/80 backdrop-blur-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-sm hover:shadow-2xl ${service.borderColor}`}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-xl bg-slate-100 dark:bg-[#161622] border border-slate-200 dark:border-slate-700/80 p-3 group-hover:bg-brand-500/10 group-hover:border-brand-500/40 transition-colors">
                      <Icon className="w-7 h-7 text-brand-500 dark:text-brand-400 group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-[#161622] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                    {service.desc}
                  </p>

                  {/* Supported Hardware / Standards */}
                  <div className="mb-6 space-y-2">
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono font-semibold">
                      Platforms & Hardware
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.platforms.map((plat, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-[#161622] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-mono"
                        >
                          {plat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-6 border-t border-slate-200 dark:border-slate-800/80 pt-4">
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono font-semibold">
                      Key Deliverables
                    </div>
                    {service.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400 flex-shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2.5 px-4 rounded-full text-xs font-bold bg-slate-100 dark:bg-[#161622] hover:bg-brand-600 text-slate-800 dark:text-slate-200 hover:text-white transition-all flex items-center justify-center gap-2 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-brand-500/20"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
