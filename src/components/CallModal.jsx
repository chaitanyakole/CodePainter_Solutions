import React, { useState } from 'react';
import { Phone, X, PhoneCall, Check } from 'lucide-react';

export default function CallModal({ isOpen, onClose }) {
  const [callbackNumber, setCallbackNumber] = useState('');
  const [callbackRequested, setCallbackRequested] = useState(false);

  if (!isOpen) return null;

  const handleRequestCallback = (e) => {
    e.preventDefault();
    if (!callbackNumber) return;
    setCallbackRequested(true);
    // WhatsApp notification as a fallback callback request
    const text = `*Immediate Callback Request from Website:*%0A- Phone Number: ${callbackNumber}%0APlease call back ASAP regarding industrial automation.`;
    window.open(`https://wa.me/917387780352?text=${text}`, '_blank');
  };

  return (
    <div 
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg rounded-3xl border-2 border-brand-500/40 bg-white dark:bg-[#0f0f17] shadow-2xl p-6 sm:p-8 overflow-hidden">
        
        {/* Ambient Red Glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close Call Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-600 dark:text-brand-400">
            <PhoneCall className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Direct Engineering Desk</h3>
            <div className="text-xs text-brand-600 dark:text-brand-400 font-mono flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              <span>Lines Active • Walhekarwadi, Pune Hub</span>
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed font-normal">
          Connect directly with our lead automation engineer. For immediate line breakdowns, quote evaluations, or on-site commissioning queries.
        </p>

        {/* Dual Phone Numbers */}
        <div className="space-y-3.5 mb-6">
          {/* Line 1 */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#07070b] border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">Primary Project Line (Sumit Sutar)</div>
              <div className="text-lg font-bold text-slate-900 dark:text-white font-mono mt-0.5">+91 7387780352</div>
              <div className="text-[11px] text-brand-600 dark:text-brand-400">PLC/SCADA Architecture & Commercials</div>
            </div>
            <a
              href="tel:+917387780352"
              className="px-5 py-2.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-brand-500/25"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Line 1</span>
            </a>
          </div>

          {/* Line 2 */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#07070b] border border-slate-200 dark:border-slate-800 hover:border-amber-400/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">Emergency & On-Site Support</div>
              <div className="text-lg font-bold text-slate-900 dark:text-white font-mono mt-0.5">+91 8698109623</div>
              <div className="text-[11px] text-amber-600 dark:text-amber-400">Rapid PCMC & Chakan Line Dispatch</div>
            </div>
            <a
              href="tel:+918698109623"
              className="px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-amber-500/20"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Line 2</span>
            </a>
          </div>
        </div>

        {/* Callback Request Form */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="text-xs font-mono text-slate-700 dark:text-slate-300 font-bold mb-2">
            Request an Immediate Callback
          </div>
          {callbackRequested ? (
            <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-600 dark:text-brand-400 text-xs flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Callback request logged. An engineer will ring you shortly.</span>
            </div>
          ) : (
            <form onSubmit={handleRequestCallback} className="flex gap-2">
              <input
                type="tel"
                value={callbackNumber}
                onChange={(e) => setCallbackNumber(e.target.value)}
                placeholder="Enter 10-digit mobile number"
                className="flex-1 bg-slate-50 dark:bg-[#07070b] border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500"
              />
              <button
                type="submit"
                className="px-5 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-colors"
              >
                Request Call
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
