import React, { useState, useEffect, useRef } from 'react';

export default function CodePainterIntroLoader({ onDockComplete, onComplete }) {
  const [stageVisible, setStageVisible] = useState(true);
  const [auxiliaryFading, setAuxiliaryFading] = useState(false);
  const [backdropFading, setBackdropFading] = useState(false);

  const brandRef = useRef(null);
  const animRef = useRef(null);
  const onDockCompleteRef = useRef(onDockComplete);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onDockCompleteRef.current = onDockComplete;
    onCompleteRef.current = onComplete;
  });

  useEffect(() => {
    // Prevent page scrolling during the intro showcase
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    // Stage Choreography:
    // 0.05s - 0.70s: Industrial Ghost-Paint letter wave reveal for "CODE" & "PAINTER"
    // 0.80s: Laser scan sweep line sweeps across typography
    // 0.82s: 6-Axis Industrial Robot Arm docks into position with laser welding sparks
    // 1.05s: Siemens PLC RUN & factory floor telemetry active
    // 2.10s: AUXILIARY DISSOLVE:
    //        - Top words (PLC badge), intro description tagline, and telemetry fade out with soft optical blur
    // 2.45s: FLIGHT TO NAVBAR:
    //        - Backdrop fades away with 1000ms cinematic ease, revealing live site underneath
    //        - Hardware-accelerated GPU Animation glides "CODE PAINTER" + Robot Logo into Navbar along cubic-bezier(0.25, 1, 0.35, 1)
    // 3.37s: Flawless touchdown & docking latch pulse at Navbar target with zero-gap handoff
    // 3.45s: Intro unmounts cleanly

    // 2.10s: Gracefully dissolve auxiliary top badge, sub-tagline, and telemetry
    const auxTimer = setTimeout(() => {
      setAuxiliaryFading(true);
    }, 2100);

    const flightTimer = setTimeout(() => {
      const target = document.getElementById('nav-brand-content');
      const brand = brandRef.current;

      setBackdropFading(true);

      if (brand) {
        let deltaX = -window.innerWidth * 0.35;
        let deltaY = -window.innerHeight * 0.42;
        let scaleX = 0.32;
        let scaleY = 0.32;

        if (target) {
          const targetRect = target.getBoundingClientRect();
          const originRect = brand.getBoundingClientRect();

          if (targetRect.width > 0 && originRect.width > 0) {
            deltaX = targetRect.left - originRect.left;
            deltaY = targetRect.top - originRect.top;
            scaleX = targetRect.width / originRect.width;
            scaleY = targetRect.height / originRect.height;
          }
        }

        // Hardware-accelerated GPU animation on the browser compositor
        try {
          const anim = brand.animate([
            {
              transform: 'translate3d(0, 0, 0) scale(1, 1)',
              opacity: 1
            },
            {
              transform: `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${scaleX}, ${scaleY})`,
              opacity: 1
            }
          ], {
            duration: 920,
            easing: 'cubic-bezier(0.25, 1, 0.35, 1)',
            fill: 'forwards'
          });

          animRef.current = anim;

          anim.onfinish = () => {
            // Flawlessly hand off to the Navbar target
            if (onDockCompleteRef.current) onDockCompleteRef.current();

            // Seamless handoff: brief 60ms overlap prevents any single-frame flicker
            setTimeout(() => {
              brand.style.opacity = '0';
              document.body.style.overflow = '';
              setStageVisible(false);
              if (onCompleteRef.current) onCompleteRef.current();
            }, 60);
          };
        } catch {
          // Fallback if animate API is unavailable
          if (onDockCompleteRef.current) onDockCompleteRef.current();
          document.body.style.overflow = '';
          setStageVisible(false);
          if (onCompleteRef.current) onCompleteRef.current();
        }
      }
    }, 2450);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        document.body.style.overflow = '';
        if (animRef.current) animRef.current.cancel();
        if (onDockCompleteRef.current) onDockCompleteRef.current();
        setStageVisible(false);
        if (onCompleteRef.current) onCompleteRef.current();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      clearTimeout(auxTimer);
      clearTimeout(flightTimer);
      if (animRef.current) animRef.current.cancel();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!stageVisible) return null;

  const codeChars = ["C", "O", "D", "E"];
  const painterChars = ["P", "A", "I", "N", "T", "E", "R"];

  const handleSkip = () => {
    document.body.style.overflow = '';
    if (animRef.current) animRef.current.cancel();
    if (onDockCompleteRef.current) onDockCompleteRef.current();
    setStageVisible(false);
    if (onCompleteRef.current) onCompleteRef.current();
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] w-full h-screen pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <style>{`
        /* Industrial Circuit Grid Pattern */
        .industrial-grid {
          background-size: 32px 32px;
          background-image: 
            linear-gradient(to right, rgba(0, 210, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 210, 255, 0.04) 1px, transparent 1px);
        }

        /* Ghost-Paint Zero Reflow Node */
        .char-node {
          position: relative;
          display: inline-block;
          vertical-align: baseline;
          line-height: 1;
        }

        .ghost-char {
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
          user-select: none;
        }

        .paint-char {
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0;
          will-change: transform, opacity, filter;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
          animation: industrialWave 0.75s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
        }

        @keyframes industrialWave {
          0% {
            opacity: 0;
            transform: translate3d(0, 24px, 0) scale(0.96);
            filter: blur(8px);
          }
          65% {
            opacity: 0.95;
            transform: translate3d(0, -2px, 0) scale(1.01);
            filter: blur(0.5px);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes laserSweep {
          0% {
            transform: translate3d(-30px, 0, 0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translate3d(calc(100% + 30px), 0, 0);
            opacity: 0;
          }
        }

        /* Articulated 6-Axis Industrial Robot Docking Animation */
        @keyframes robotDock {
          0% {
            opacity: 0;
            transform: translate3d(20px, -14px, 0) rotate(12deg) scale(0.85);
          }
          70% {
            opacity: 1;
            transform: translate3d(-2px, 1px, 0) rotate(-2deg) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
          }
        }

        @keyframes tagSlideUp {
          0% {
            opacity: 0;
            transform: translate3d(0, 14px, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        /* Smooth auxiliary dissolve exit before brand flight to navbar */
        @keyframes auxFadeOut {
          0% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }
          100% {
            opacity: 0;
            transform: translate3d(0, -8px, 0) scale(0.98);
            filter: blur(3px);
            visibility: hidden;
          }
        }

        .aux-exit {
          animation: auxFadeOut 0.38s cubic-bezier(0.25, 1, 0.5, 1) forwards !important;
          pointer-events: none !important;
        }

        /* Siemens Automation Electric Teal/Cyan */
        .industrial-code {
          color: #00e1ff;
          text-shadow: 
            0 0 25px rgba(0, 225, 255, 0.65),
            0 0 50px rgba(0, 150, 255, 0.35);
        }

        /* Machined Steel/Aluminum White */
        .industrial-painter {
          color: #ffffff;
          text-shadow: 
            0 2px 15px rgba(255, 255, 255, 0.3),
            0 8px 30px rgba(0, 0, 0, 0.9);
        }

        .laser-beam {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 8px;
          background: linear-gradient(180deg, transparent, #00e1ff, #ffffff, #00e1ff, transparent);
          box-shadow: 0 0 20px #00e1ff, 0 0 35px #0099ff;
          animation: laserSweep 1.0s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards;
          opacity: 0;
          pointer-events: none;
          will-change: transform, opacity;
        }

        .robot-node {
          opacity: 0;
          will-change: transform, opacity;
          animation: robotDock 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .industrial-node {
          opacity: 0;
          will-change: transform, opacity;
          animation: tagSlideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      {/* ── Layer 1: Backdrop & Industrial Atmosphere (Fades away to reveal site) ── */}
      <div 
        className={`absolute inset-0 bg-[#050912] transition-opacity duration-1000 ease-in-out pointer-events-auto ${
          backdropFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Circuit Grid Canvas */}
        <div className="absolute inset-0 industrial-grid pointer-events-none opacity-60"></div>

        {/* Animated PCB Circuit Trace Lines in Background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100 H300 L350 150 H700 L750 200 H1200" stroke="#00e1ff" strokeWidth="1.5" fill="none" strokeDasharray="6 6" />
          <path d="M200 600 H500 L550 550 H900 L950 500 H1600" stroke="#00e1ff" strokeWidth="1.5" fill="none" strokeDasharray="8 6" />
          <circle cx="350" cy="150" r="4" fill="#00e1ff" />
          <circle cx="750" cy="200" r="4" fill="#f59e0b" />
          <circle cx="550" cy="550" r="4" fill="#10b981" />
        </svg>

        {/* Industrial Glowing Ambient Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-emerald-500/10 blur-[140px] pointer-events-none"></div>
      </div>

      {/* ── Layer 2: Main Intro Stage Content ── */}
      <div className="relative w-full h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center select-none z-10 w-full">
          
          {/* Top PLC Controller Status Header */}
          <div 
            className={`mb-5 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0a1220] border border-cyan-500/30 text-xs font-mono shadow-lg shadow-cyan-500/10 ${
              auxiliaryFading ? 'aux-exit' : 'industrial-node'
            }`}
            style={{ 
              animationDelay: '0.05s',
              ...(auxiliaryFading ? { opacity: 0, visibility: 'hidden', pointerEvents: 'none' } : {})
            }}
          >
            {/* Siemens PLC Green RUN LED */}
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold tracking-wider">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
              </span>
              PLC [RUN]
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-300 font-semibold tracking-wide">SIEMENS & MITSUBISHI</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-amber-400 font-bold hidden sm:inline">PUNE & PCMC HUB</span>
          </div>

          {/* ── Brand Row: "CODE PAINTER" + Articulated Robot Arm (Flies into Navbar) ── */}
          <div 
            ref={brandRef}
            style={{
              transformOrigin: '0 0',
              willChange: 'transform, filter, opacity',
            }}
            className="relative flex items-center justify-center flex-nowrap font-black text-3xl xs:text-4xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none select-none z-[10001]"
          >
            
            {/* Laser Scan Sweep Line */}
            {!auxiliaryFading && !backdropFading && <div className="laser-beam"></div>}

            {/* Word 1: CODE (Industrial Signal Cyan / Laser Glow) */}
            <div className="inline-flex">
              {codeChars.map((char, idx) => (
                <span key={idx} className="char-node">
                  <span className="ghost-char">{char}</span>
                  <span 
                    className="paint-char industrial-code font-mono"
                    style={{ animationDelay: `${0.05 + idx * 0.07}s` }}
                  >
                    {char}
                  </span>
                </span>
              ))}
            </div>

            {/* Gap */}
            <span className="w-1.5 sm:w-3 md:w-4 inline-block"></span>

            {/* Word 2: PAINTER (Machined Steel White) */}
            <div className="inline-flex">
              {painterChars.map((char, idx) => (
                <span key={idx} className="char-node">
                  <span className="ghost-char">{char}</span>
                  <span 
                    className="paint-char industrial-painter font-sans"
                    style={{ animationDelay: `${0.36 + idx * 0.065}s` }}
                  >
                    {char}
                  </span>
                </span>
              ))}
            </div>

            {/* ── 6-Axis Articulated Industrial Robot Arm ── */}
            <div 
              className="inline-flex items-center ml-2 sm:ml-5 robot-node"
              style={{ animationDelay: '0.82s' }}
            >
              <svg 
                className="w-9 h-9 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 drop-shadow-[0_0_22px_rgba(0,225,255,0.7)]" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Base Plate with Anchor Mounts */}
                <rect x="12" y="82" width="46" height="8" rx="2" fill="#0f172a" stroke="#00e1ff" strokeWidth="2" />
                <circle cx="20" cy="86" r="1.5" fill="#f59e0b" />
                <circle cx="50" cy="86" r="1.5" fill="#f59e0b" />
                <rect x="22" y="75" width="26" height="8" rx="2" fill="#1e293b" stroke="#00e1ff" strokeWidth="1.5" />

                {/* J1 Turntable Joint */}
                <circle cx="35" cy="72" r="9" fill="#0b1329" stroke="#00e1ff" strokeWidth="2.5" />
                <circle cx="35" cy="72" r="3.5" fill="#00e1ff" />

                {/* J2 Lower Articulated Robotic Boom Arm */}
                <path d="M35 72 L54 38" stroke="#00e1ff" strokeWidth="6" strokeLinecap="round" />
                <path d="M33 72 L50 40" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

                {/* Counterweight / Motor Housing */}
                <rect x="22" y="58" width="10" height="12" rx="2" fill="#f59e0b" stroke="#fbbf24" strokeWidth="1" />

                {/* J2/J3 Elbow Servo Joint */}
                <circle cx="54" cy="38" r="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="2.5" />
                <circle cx="54" cy="38" r="3.5" fill="#ffffff" />

                {/* J3 Forearm */}
                <path d="M54 38 L82 26" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
                <path d="M56 36 L80 26" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />

                {/* J4/J5 Articulated Wrist Joint */}
                <circle cx="82" cy="26" r="6" fill="#0f172a" stroke="#00e1ff" strokeWidth="2" />
                <circle cx="82" cy="26" r="2.5" fill="#00e1ff" />

                {/* J6 Tool Head / Laser Welding End-Effector */}
                <path d="M82 26 L94 36 L88 48" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                
                {/* Twin Pneumatic Gripper Fingers / Tool Nozzle */}
                <line x1="86" y1="46" x2="82" y2="54" stroke="#00e1ff" strokeWidth="2" strokeLinecap="round" />
                <line x1="90" y1="47" x2="94" y2="54" stroke="#00e1ff" strokeWidth="2" strokeLinecap="round" />

                {/* Active Laser Welding Beam from Tool Tip */}
                <line x1="88" y1="48" x2="92" y2="60" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="2 2" />
                <circle cx="92" cy="60" r="3" fill="#00e1ff" className="animate-ping" />
                <circle cx="92" cy="60" r="2" fill="#ffffff" />
              </svg>
            </div>

          </div>

          {/* Technical Sub-Tagline with Industrial Delimiters */}
          <div 
            className={`mt-6 sm:mt-7 font-mono text-xs sm:text-sm md:text-base tracking-[0.24em] uppercase text-slate-200 max-w-2xl mx-auto font-semibold ${
              auxiliaryFading ? 'aux-exit' : 'industrial-node'
            }`}
            style={{ 
              animationDelay: '1.05s',
              ...(auxiliaryFading ? { opacity: 0, visibility: 'hidden', pointerEvents: 'none' } : {})
            }}
          >
            <span className="text-cyan-400 font-bold">// </span>
            Industrial Automation
            <span className="text-amber-400 font-bold"> • </span>
            PLC & SCADA
            <span className="text-amber-400 font-bold"> • </span>
            Robotics & Vision IIoT
          </div>

          {/* Factory Floor Telemetry Status Bar */}
          <div 
            className={`mt-4 inline-flex items-center gap-3 px-4 py-1.5 rounded-xl bg-[#09101d] border border-slate-700/80 text-[11px] font-mono text-slate-300 shadow-lg ${
              auxiliaryFading ? 'aux-exit' : 'industrial-node'
            }`}
            style={{ 
              animationDelay: '1.25s',
              ...(auxiliaryFading ? { opacity: 0, visibility: 'hidden', pointerEvents: 'none' } : {})
            }}
          >
            <span className="flex items-center gap-1.5 text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              6-AXIS ROBOTICS & PLC
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              OPC-UA / MODBUS
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-amber-400 hidden sm:inline">
              WALHEKARWADI, CHINCHWAD, PUNE
            </span>
          </div>

        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className={`absolute bottom-6 right-6 text-xs font-mono text-cyan-400 hover:text-white px-3.5 py-1.5 rounded-lg border border-cyan-500/40 bg-[#09101d]/90 shadow-lg shadow-cyan-500/10 transition-all pointer-events-auto ${
          auxiliaryFading || backdropFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={auxiliaryFading || backdropFading ? { opacity: 0, visibility: 'hidden', pointerEvents: 'none' } : {}}
      >
        Skip [ESC]
      </button>

    </div>
  );
}
