import React from 'react';
import {
  Cpu,
  MapPin,
  Mail,
  Phone,
  ArrowUp
} from 'lucide-react';
import { LinkedInIcon, YouTubeIcon, FacebookIcon, InstagramIcon, IndustrialRobotIcon } from './SocialIcons';

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050508] text-slate-300 border-t border-slate-800 relative z-10">

      {/* Pre-footer Callout with CodePainter Red ambient */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-brand-950/50 via-[#0a0a10] to-rose-950/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-brand-400 font-bold">
              Looking for a Trusted Automation Integrator?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Let's Discuss Your Machine Requirements & Line Upgrades
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
              Available for immediate factory visits in Pune, PCMC, Chakan, and Bhosari.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={onOpenQuote}
              className="px-7 py-3 rounded-full font-bold text-sm text-white bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 shadow-lg shadow-brand-500/25 transition-all"
            >
              Request Plant Assessment
            </button>
            <a
              href="tel:+917387780352"
              className="px-6 py-3 rounded-full font-bold text-sm text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>+91 7387780352</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-rose-500 flex items-center justify-center shadow-lg shadow-brand-500/25">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  <span className="text-brand-500 font-mono">CODE</span>
                  <span>PAINTER</span>
                </span>
                <IndustrialRobotIcon className="w-5 h-5 drop-shadow-[0_0_8px_rgba(0,225,255,0.6)]" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Based in Walhekarwadi, Chinchwad, delivering turnkey industrial automation, Siemens and Mitsubishi PLC programming, OpenCV machine vision, and real-time shop-floor IIoT for automotive OEMs and manufacturers.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-2 pt-2">
              <a
                href="https://www.linkedin.com/in/sumit-sutar-584147248/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0f0f17] hover:bg-brand-600 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC3ut5IPkbIh3OJynn6QlYTQ"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0f0f17] hover:bg-red-600 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/sumit.sutar.7796/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0f0f17] hover:bg-blue-600 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/svisiontech2022/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0f0f17] hover:bg-pink-600 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Services</a></li>
              <li><a href="#case-studies" className="hover:text-brand-400 transition-colors">Case Studies</a></li>
              <li><a href="#tech-stack" className="hover:text-brand-400 transition-colors">Tech Matrix</a></li>
              <li><a href="#estimator" className="hover:text-brand-400 transition-colors">Cost Estimator</a></li>
              <li><a href="#location-hub" className="hover:text-brand-400 transition-colors">Plant Location</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contact Engineers</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Turnkey Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Siemens & Mitsubishi PLC Programming</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">OpenCV Computer Vision Inspection</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">IIoT & Real-Time OEE Telemetry</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Automated Leak Testing Stations</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Zebra / Honeywell ZPL Labeling</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Machine Retrofitting & Control Panels</a></li>
            </ul>
          </div>

          {/* Direct Address & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <span>S No. 47/11, MIDC Road, Walhekarwadi, Chinchwad, Pune - 411033</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a href="mailto:sumit.sutar@codepainter.in" className="hover:text-white transition-colors">
                  sumit.sutar@codepainter.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="font-mono text-slate-200">+91 7387780352 / +91 8698109623</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-400">
              <span className="text-brand-400 font-mono">Service Hubs:</span> Chakan MIDC, Bhosari, Talegaon, Ranjangaon, PCMC.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} <strong>Codepainter Solutions</strong>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Engineered with Precision & Passion</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#0f0f17] hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
