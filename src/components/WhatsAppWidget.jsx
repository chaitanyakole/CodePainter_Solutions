import React, { useState } from 'react';
import { Send, X, CheckCheck } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const phoneNumber = '917387780352';

  const quickChips = [
    { label: "🚨 Breakdown Assistance", text: "Hello! We have an emergency machine breakdown / PLC stoppage and need on-site support in Pune/PCMC." },
    { label: "📋 Turnkey PLC Quote", text: "Hello! We would like to request a turnkey quote for Siemens / Mitsubishi PLC and HMI programming." },
    { label: "👁️ Vision Inspection PoC", text: "Hello! We are looking for an OpenCV computer vision inspection system for our assembly line." },
    { label: "🔧 Machine Retrofit", text: "Hello! We need to retrofit an older machine and upgrade relay logic to modern PLC controls." },
  ];

  const handleSend = (textToSend) => {
    const query = encodeURIComponent(textToSend || message || "Hello Codepainter Solutions, I have an industrial automation inquiry.");
    window.open(`https://wa.me/${phoneNumber}?text=${query}`, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Interactive Chat Card */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-white/40 flex items-center justify-center font-bold text-emerald-400">
                  SS
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-300 border-2 border-slate-900"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Sumit Sutar</h4>
                <div className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span>Industrial Automation Lead</span>
                  <span>•</span>
                  <span className="text-emerald-300 font-semibold">Online</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-emerald-100 hover:text-white hover:bg-emerald-800/40 transition-colors"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-950/80 space-y-3 text-xs max-h-80 overflow-y-auto">
            
            {/* Engineer intro bubble */}
            <div className="flex items-start gap-2.5">
              <div className="p-3 rounded-2xl rounded-tl-none bg-slate-800 border border-slate-700 text-slate-200 leading-relaxed shadow-sm">
                <p>Hello! Welcome to <strong>Codepainter Solutions</strong>.</p>
                <p className="mt-1">How can our engineering team assist your plant or factory line today?</p>
                <div className="mt-2 text-[10px] text-slate-400 flex items-center justify-end gap-1 font-mono">
                  <span>Typical reply &lt; 15 mins</span>
                  <CheckCheck className="w-3 h-3 text-emerald-400" />
                </div>
              </div>
            </div>

            {/* Quick Inquiry Chips */}
            <div className="pt-2">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                Quick One-Tap Topics
              </div>
              <div className="flex flex-col gap-1.5">
                {quickChips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(chip.text)}
                    className="text-left px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/50 text-slate-200 transition-all text-xs flex items-center justify-between group"
                  >
                    <span>{chip.label}</span>
                    <Send className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Input Bar */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(message); }}
            className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/30 transition-all flex items-center justify-center"
              aria-label="Send WhatsApp message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

      {/* Pulsing Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
        aria-label="Chat with engineer on WhatsApp"
      >
        {/* Pulsing wave ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping"></span>

        {/* WhatsApp Icon */}
        <svg className="w-6 h-6 fill-current relative z-10" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-5.514 0-10 4.486-10 10 0 1.761.459 3.418 1.258 4.863l-1.297 4.743 4.88-1.28c1.398.763 3.003 1.198 4.679 1.198 5.514 0 10-4.486 10-10s-4.486-10-10-10z"/>
        </svg>

        <span className="text-xs font-bold relative z-10 hidden sm:inline-block">
          WhatsApp Us
        </span>

        {/* Unread dot */}
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-[10px] font-bold text-white flex items-center justify-center border-2 border-slate-900">
          1
        </span>
      </button>

    </div>
  );
}
