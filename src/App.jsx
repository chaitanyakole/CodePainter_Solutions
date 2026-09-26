import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsRibbon from './components/StatsRibbon';
import ServicesMatrix from './components/ServicesMatrix';
import CaseStudies from './components/CaseStudies';
import TechExplorer from './components/TechExplorer';
import ProjectEstimator from './components/ProjectEstimator';
import LocationAndCallHub from './components/LocationAndCallHub';
import FaqSection from './components/FaqSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import CallModal from './components/CallModal';
import CodePainterIntroLoader from './components/CodePainterIntroLoader';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [prefilledRfq, setPrefilledRfq] = useState(null);
  const [introKey, setIntroKey] = useState(1);
  const [isIntroDocked, setIsIntroDocked] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  const handleOpenQuote = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle) => {
    setPrefilledRfq({ domain: serviceTitle });
    handleOpenQuote();
  };

  const handleSelectCaseStudy = (caseStudyTitle) => {
    setPrefilledRfq({
      domain: `Turnkey Solution based on: ${caseStudyTitle}`
    });
    handleOpenQuote();
  };

  const handleDirectRfq = (rfqData) => {
    setPrefilledRfq(rfqData);
    handleOpenQuote();
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#07070b] text-slate-100' : 'bg-slate-50 text-slate-900'} tech-grid-pattern transition-colors duration-300`}>

      {/* CodePainter-Style Cinematic Intro Loader */}
      <CodePainterIntroLoader 
        key={introKey}
        onDockComplete={() => setIsIntroDocked(true)}
        onComplete={() => setIsIntroDocked(true)}
      />

      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenCallModal={() => setCallModalOpen(true)}
        onOpenQuote={handleOpenQuote}
        onReplayIntro={() => {
          setIsIntroDocked(false);
          setIntroKey(prev => prev + 1);
        }}
        isIntroDocked={isIntroDocked}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenQuote={handleOpenQuote}
          onOpenCallModal={() => setCallModalOpen(true)}
        />

        <StatsRibbon />

        <ServicesMatrix
          onSelectService={handleSelectService}
        />

        <CaseStudies
          onSelectCaseStudy={handleSelectCaseStudy}
        />

        <TechExplorer />

        <ProjectEstimator
          onDirectRfq={handleDirectRfq}
        />

        <LocationAndCallHub
          onOpenCallModal={() => setCallModalOpen(true)}
        />

        <FaqSection />

        <ContactForm
          prefilledData={prefilledRfq}
        />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Floating Interactive Features */}
      <WhatsAppWidget />

      <CallModal
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
      />
    </div>
  );
}
