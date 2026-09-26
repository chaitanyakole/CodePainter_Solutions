import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Sun,
  Moon,
  Menu,
  X,
  Cpu,
  ChevronRight,
  Play
} from 'lucide-react';
import { LinkedInIcon, YouTubeIcon, FacebookIcon, InstagramIcon, IndustrialRobotIcon } from './SocialIcons';

export default function Navbar({
  darkMode,
  setDarkMode,
  onOpenCallModal,
  onOpenQuote,
  onReplayIntro,
  isIntroDocked = true
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { num: '01', name: 'Home', href: '#' },
    { num: '02', name: 'Services', href: '#services' },
    { num: '03', name: 'Case Studies', href: '#case-studies' },
    { num: '04', name: 'Tech Stack', href: '#tech-stack' },
    { num: '05', name: 'Estimator', href: '#estimator' },
    { num: '06', name: 'Plant Location', href: '#location-hub' },
    { num: '07', name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-colors duration-200">
      {/* Top Notification Bar */}
      <div className="bg-[#050508] text-slate-300 text-xs border-b border-slate-800/80 px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-brand-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Engineers On-Site in Pune, PCMC & Chakan
            </span>
            <a
              href="#location-hub"
              className="hidden md:flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-400" />
              <span>Walhekarwadi, Chinchwad, Pune</span>
            </a>
            <a
              href="mailto:sumit.sutar@codepainter.in"
              className="hidden lg:flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-400" />
              <span>sumit.sutar@codepainter.in</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenCallModal}
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 animate-bounce" />
              <span>Hotline: +91 7387780352</span>
            </button>
            <div className="hidden sm:flex items-center space-x-2 pl-3 border-l border-slate-800">
              <a
                href="https://www.linkedin.com/in/sumit-sutar-584147248/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-brand-400 transition-colors p-1"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC3ut5IPkbIh3OJynn6QlYTQ"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-brand-400 transition-colors p-1"
                aria-label="YouTube"
              >
                <YouTubeIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.facebook.com/sumit.sutar.7796/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-brand-400 transition-colors p-1"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/svisiontech2022/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-brand-400 transition-colors p-1"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main CodePainter-Style Floating Nav Bar */}
      <nav className={`backdrop-blur-md border-b transition-colors duration-300 ${darkMode
        ? 'bg-[#0a0a10]/90 border-slate-800/80 text-white'
        : 'bg-white/95 border-slate-200 text-slate-900 shadow-sm'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo with CodePainter-Style Typography & Vector Arrows */}
            <a 
              href="#" 
              id="nav-brand-target"
              className="flex items-center gap-2.5 group select-none relative"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-rose-500 flex items-center justify-center shadow-lg shadow-brand-500/25 group-hover:scale-105 transition-transform duration-200">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div 
                id="nav-brand-content" 
                className={`flex items-center gap-1.5 ${
                  isIntroDocked 
                    ? 'opacity-100' 
                    : 'opacity-0 pointer-events-none'
                }`}
              >
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight">
                  <span className="text-cyan-400 font-mono drop-shadow-[0_0_10px_rgba(0,225,255,0.5)]">CODE</span>
                  <span className={darkMode ? 'text-white' : 'text-slate-900'}>PAINTER</span>
                </span>
                {/* Industrial Robot Arm Icon */}
                <IndustrialRobotIcon className="w-6 h-6 drop-shadow-[0_0_8px_rgba(0,225,255,0.6)]" />
              </div>

              {/* Docking Confirmation Pulse Ripple */}
              {isIntroDocked && (
                <span className="absolute -inset-1.5 rounded-2xl border border-cyan-400/50 pointer-events-none animate-ping opacity-35 duration-700"></span>
              )}
            </a>

            {/* CodePainter-Style Pill Navigation in Center */}
            <div className={`hidden lg:flex items-center space-x-1 p-1.5 rounded-full border shadow-inner ${darkMode ? 'bg-[#0e0e16]/80 border-slate-800' : 'bg-slate-100 border-slate-200'
              }`}>
              {navLinks.slice(0, 6).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-200 ${darkMode
                      ? 'text-slate-300 hover:text-white hover:bg-brand-500/20'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-white hover:shadow-xs'
                    }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              {/* Replay Intro Button */}
              {onReplayIntro && (
                <button
                  onClick={onReplayIntro}
                  className="p-2.5 rounded-xl border border-slate-700 bg-slate-800/80 text-slate-300 hover:text-brand-400 hover:border-brand-500/40 transition-all"
                  title="Replay Cinematic Intro"
                  aria-label="Replay Intro"
                >
                  <Play className="w-4 h-4" />
                </button>
              )}

              {/* Dark/Light Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 rounded-xl border transition-all duration-200 ${darkMode
                  ? 'border-slate-700 bg-slate-800 text-yellow-400 hover:bg-slate-700'
                  : 'border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Request a Quote CTA (CodePainter Red Pill) */}
              <button
                onClick={onOpenQuote}
                className="px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-brand-600 to-rose-600 hover:from-brand-500 hover:to-rose-500 shadow-md shadow-brand-500/30 hover:shadow-brand-500/50 transform hover:-translate-y-0.5 transition-all flex items-center gap-1.5"
              >
                <span>Get a Quote</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg border ${darkMode ? 'border-slate-700 bg-slate-800 text-yellow-400' : 'border-slate-300 bg-slate-100 text-slate-700'
                  }`}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={`p-2 rounded-lg border ${darkMode ? 'border-slate-700 bg-slate-800 text-white' : 'border-slate-300 bg-slate-100 text-slate-800'
                  }`}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── CodePainter-Style Fullscreen Mobile Navigation Drawer ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#07070b]/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 animate-in fade-in duration-300">

          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-5">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-brand-500 text-xl">CODE</span>
              <span className="font-bold text-white text-xl">PAINTER</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="Close navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Numbered Nav Links (CodePainter Style) */}
          <nav className="flex flex-col space-y-3 py-6">
            {navLinks.map((link) => (
              <a
                key={link.num}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-xl font-bold text-slate-200 hover:text-brand-400 transition-colors border-b border-slate-800/60 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-slate-500 group-hover:text-brand-500 transition-colors">
                    {link.num}
                  </span>
                  <span>{link.name}</span>
                </div>
                <span className="text-slate-600 group-hover:text-brand-400 transition-colors font-mono">
                  ↗
                </span>
              </a>
            ))}
          </nav>

          {/* Bottom Meta & CTAs */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <div className="text-xs text-slate-400 font-mono space-y-1">
              <p>sumit.sutar@codepainter.in</p>
              <p>+91 7387780352 / +91 8698109623</p>
              <p>Walhekarwadi, Chinchwad, Pune</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCallModal();
                }}
                className="flex-1 py-3 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Hotline</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="flex-1 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-rose-600 text-center shadow-lg shadow-brand-500/30"
              >
                Get a Quote
              </button>
            </div>
          </div>

        </div>
      )}
    </header>
  );
}
