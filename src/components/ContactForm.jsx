import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  MessageSquareShare,
  Sparkles,
  Clock,
  ShieldCheck
} from 'lucide-react';

export default function ContactForm({ prefilledData }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'PLC, HMI & SCADA Programming',
    location: 'Chakan MIDC',
    message: ''
  });

  const [prevPrefilledData, setPrevPrefilledData] = useState(prefilledData);
  const [submitted, setSubmitted] = useState(false);

  // Safely adjust state when prefilledData changes without triggering setState inside useEffect
  if (prefilledData !== prevPrefilledData) {
    setPrevPrefilledData(prefilledData);
    if (prefilledData) {
      setFormData(prev => ({
        ...prev,
        service: prefilledData.domain || prev.service,
        location: prefilledData.location || prev.location,
        message: prefilledData.hardware
          ? `Target Controller: ${prefilledData.hardware}. Urgency: ${prefilledData.urgency || 'Standard'}.`
          : (prefilledData.domain ? `Inquiry regarding ${prefilledData.domain}` : prev.message)
      }));
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSubmit = () => {
    const text = `*New RFQ from Website:*%0A` +
      `- *Name:* ${formData.name || 'Not provided'}%0A` +
      `- *Company:* ${formData.company || 'Not provided'}%0A` +
      `- *Phone:* ${formData.phone || 'Not provided'}%0A` +
      `- *Email:* ${formData.email || 'Not provided'}%0A` +
      `- *Service:* ${formData.service}%0A` +
      `- *Location:* ${formData.location}%0A` +
      `- *Message:* ${formData.message || 'Turnkey assessment required.'}`;

    window.open(`https://wa.me/917387780352?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            Engineering Inquiries & RFQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Request an On-Site Plant Assessment
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-base">
            Reach out for turnkey automation proposals, control panel design, machine retrofits, or immediate breakdown assistance in Pune & Western India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Direct Contact Side Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0f0f17]/80 backdrop-blur-md space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Codepainter Solutions
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Registration & Engineering Facility
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0 text-brand-500 dark:text-brand-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Physical Address</div>
                    <div className="text-slate-700 dark:text-slate-200 mt-0.5">
                      S No. 47/11, MIDC Road, Walhekarwadi, Chinchwad, Pune, Maharashtra - 411033
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-500 dark:text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Direct Email</div>
                    <a href="mailto:sumit.sutar@codepainter.in" className="text-slate-700 dark:text-slate-200 hover:text-brand-500 dark:hover:text-brand-400 transition-colors mt-0.5 block">
                      sumit.sutar@codepainter.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-500 dark:text-amber-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Telephone & Hotline</div>
                    <div className="text-slate-800 dark:text-slate-200 font-mono font-bold mt-0.5">
                      +91 7387780352 / +91 8698109623
                    </div>
                  </div>
                </div>
              </div>

              {/* Assurances */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-500 dark:text-brand-400" />
                  <span>Proposal Turnaround: Within 24-48 business hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                  <span>On-Site Factory Visits & Technical Feasibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  <span>Complete Hardware & Logic Source Code Handover</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0f0f17]/90 backdrop-blur-md shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-500 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Inquiry Received Successfully!</h3>
                  <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto text-sm">
                    Thank you, {formData.name || 'Valued Client'}. Our automation team has received your project details and will contact you at <span className="text-brand-600 dark:text-brand-400 font-mono">{formData.phone || formData.email}</span> shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-[#161622] hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-600 dark:text-slate-300 block mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-slate-50 dark:bg-[#07070b] border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-600 dark:text-slate-300 block mb-1">Company / Plant Name *</label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Precision Auto Components Ltd."
                        className="w-full bg-slate-50 dark:bg-[#07070b] border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-600 dark:text-slate-300 block mb-1">Phone / Mobile *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-50 dark:bg-[#07070b] border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-600 dark:text-slate-300 block mb-1">Official Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full bg-slate-50 dark:bg-[#07070b] border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-600 dark:text-slate-300 block mb-1">Required Service</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-slate-50 dark:bg-[#07070b] border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                      >
                        <option value="PLC, HMI & SCADA Programming">PLC, HMI & SCADA Programming</option>
                        <option value="Industrial Vision & Visual Poka-Yoke">Industrial Vision & Visual Poka-Yoke</option>
                        <option value="IIoT & Real-Time OEE Systems">IIoT & Real-Time OEE Systems</option>
                        <option value="Machine Retrofitting & Control Panels">Machine Retrofitting & Control Panels</option>
                        <option value="Traceability & Barcode Printing">Traceability & Barcode Printing</option>
                        <option value="Custom Testing Rig PC Software">Custom Testing Rig PC Software</option>
                        <option value="Emergency Breakdown Call">Emergency Breakdown Call</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-600 dark:text-slate-300 block mb-1">Plant Location</label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full bg-slate-50 dark:bg-[#07070b] border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                      >
                        <option value="Chakan MIDC">Chakan MIDC</option>
                        <option value="Bhosari MIDC">Bhosari MIDC</option>
                        <option value="Talegaon MIDC">Talegaon MIDC</option>
                        <option value="Ranjangaon MIDC">Ranjangaon MIDC</option>
                        <option value="Walhekarwadi / Chinchwad">Walhekarwadi / Chinchwad</option>
                        <option value="Other Maharashtra">Other Maharashtra</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-600 dark:text-slate-300 block mb-1">Project Details / Machinery Specs</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify PLC brand (Siemens, Mitsubishi, Delta), existing faults, I/O count, or inspection parameters..."
                      className="w-full bg-slate-50 dark:bg-[#07070b] border border-slate-300 dark:border-slate-800 rounded-xl p-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 px-6 rounded-full font-bold text-sm text-white bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit RFQ Proposal</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="py-3.5 px-5 rounded-full font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
                    >
                      <MessageSquareShare className="w-4 h-4" />
                      <span>Instant WhatsApp Dispatch</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
