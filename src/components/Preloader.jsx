import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

// --- LANDSCAPING PRELOAD STEPS CONFIG ---
const LANDSCAPING_STEPS = [
  { percent: 20, text: "Analyzing soil & landscape terrain…", icon: "🌱" },
  { percent: 45, text: "Planting exotic flora & blooming flowers…", icon: "🌸" },
  { percent: 70, text: "Carving water fountains & stone pathways…", icon: "⛲" },
  { percent: 90, text: "Nurturing green canopy & ambient lighting…", icon: "🌳" },
  { percent: 100, text: "Your green sanctuary is ready!", icon: "✨" }
];

// --- CANVAS GARDEN PARTICLE SYSTEM ---
const GardenParticlesCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Generate Petals & Pollen particles
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1.5,
      color: ['rgba(236, 72, 153, 0.7)', 'rgba(251, 191, 36, 0.8)', 'rgba(52, 211, 153, 0.6)', 'rgba(255, 255, 255, 0.9)'][
        Math.floor(Math.random() * 4)
      ],
      vx: Math.random() * 1 - 0.5,
      vy: -(Math.random() * 0.8 + 0.3),
      rotation: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.03,
      type: Math.random() > 0.4 ? 'petal' : 'glow'
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx + Math.sin(p.y * 0.01) * 0.4;
        p.y += p.vy;
        p.rotation += p.vRot;

        if (p.y < -20) {
          p.y = canvas.height + 20;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.type === 'petal') {
          ctx.beginPath();
          ctx.ellipse(0, 0, p.radius * 2, p.radius * 3.5, Math.PI / 4, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();
        }
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />;
};

// --- ANIMATED FOUNTAIN SVG COMPONENT ---
const AnimatedFountain = ({ side = "left" }) => {
  return (
    <div className={`relative flex flex-col items-center select-none ${side === 'left' ? 'scale-x-100' : 'scale-x-[-1]'}`}>
      <div className="relative w-24 h-32 flex items-center justify-center">
        <svg viewBox="0 0 100 120" className="w-full h-full text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">
          <path
            d="M 50 110 Q 50 20 20 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="6 4"
            className="animate-[dash_1s_linear_infinite]"
          />
          <path
            d="M 50 110 Q 50 20 80 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="6 4"
            className="animate-[dash_1.2s_linear_infinite]"
          />
          <path
            d="M 50 110 L 50 10"
            fill="none"
            stroke="rgba(165, 243, 252, 0.9)"
            strokeWidth="4"
            strokeDasharray="8 4"
            className="animate-[dash_0.8s_linear_infinite]"
          />
        </svg>

        <div className="absolute top-4 w-4 h-4 bg-cyan-200/80 rounded-full blur-sm animate-ping" />
        <div className="absolute top-10 left-3 w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDuration: '0.9s' }} />
        <div className="absolute top-10 right-3 w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDuration: '0.7s' }} />
      </div>

      <div className="w-20 h-6 bg-gradient-to-r from-stone-400 via-stone-200 to-stone-500 rounded-t-full shadow-md border-b-2 border-stone-600 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-2 bg-cyan-400/40 animate-pulse" />
      </div>
      
      <div className="w-8 h-10 bg-gradient-to-r from-stone-600 via-stone-400 to-stone-700" />

      <div className="relative w-36 h-12 bg-gradient-to-r from-stone-600 via-stone-300 to-stone-700 rounded-b-2xl shadow-2xl border-t-4 border-stone-400 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/70 via-teal-400/80 to-cyan-600/70 animate-pulse">
          <div className="w-full h-full bg-[radial-gradient(circle,_transparent_30%,_rgba(255,255,255,0.4)_70%)] animate-[spin_8s_linear_infinite]" />
        </div>
      </div>
    </div>
  );
};

// --- ANIMATED FLORA & FLOWERS ---
const BloomingGardenFlora = () => {
  return (
    <div className="flex items-end gap-3 pointer-events-none">
      {/* Pink Rose */}
      <div className="flex flex-col items-center group">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-600 to-rose-300 shadow-lg shadow-pink-500/40 animate-pulse flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-rose-200/90" />
        </div>
        <div className="w-1.5 h-16 bg-emerald-800 rounded-full" />
      </div>

      {/* Golden Sunflower */}
      <div className="flex flex-col items-center">
        <div className="relative w-10 h-10 flex items-center justify-center animate-[spin_12s_linear_infinite]">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-8 bg-amber-400 rounded-full shadow-sm"
              style={{ transform: `rotate(${i * 45}deg)` }}
            />
          ))}
          <div className="w-5 h-5 bg-amber-900 rounded-full z-10 border border-amber-600" />
        </div>
        <div className="w-2 h-20 bg-emerald-700 rounded-full" />
      </div>

      {/* Lavender Tulips */}
      <div className="flex flex-col items-center -ml-2">
        <div className="w-6 h-9 bg-gradient-to-t from-purple-700 to-indigo-300 rounded-t-full shadow-md animate-bounce" style={{ animationDuration: '2.5s' }} />
        <div className="w-1 h-12 bg-emerald-900 rounded-full" />
      </div>
    </div>
  );
};

// --- PRELOADER COMPONENT ---
export default function Preloader({ onComplete }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let timer;
    const totalSteps = LANDSCAPING_STEPS.length;

    const runLoadingSequence = (index) => {
      if (index < totalSteps) {
        setCurrentStepIndex(index);
        setProgress(LANDSCAPING_STEPS[index].percent);

        const delay = index === 0 ? 800 : index === totalSteps - 1 ? 1200 : 900;
        timer = setTimeout(() => {
          runLoadingSequence(index + 1);
        }, delay);
      } else {
        timer = setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800);
        }, 500);
      }
    };

    runLoadingSequence(0);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const currentStep = LANDSCAPING_STEPS[currentStepIndex] || LANDSCAPING_STEPS[LANDSCAPING_STEPS.length - 1];

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAF7F2] overflow-hidden transition-all duration-1000 ease-in-out ${
        fadeOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      aria-label="Loading Van Vriksha Landscaping"
      role="status"
    >
      {/* 1. BACKGROUND SCENE: PARTICLES & SUNBEAMS */}
      <GardenParticlesCanvas />

      {/* Sunbeam Light Rays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-200/40 via-emerald-100/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-0 right-10 w-72 h-[1000px] bg-gradient-to-b from-amber-300/15 via-transparent to-transparent rotate-[25deg] blur-2xl pointer-events-none" />
        <div className="absolute top-0 left-10 w-72 h-[1000px] bg-gradient-to-b from-amber-200/15 via-transparent to-transparent -rotate-[25deg] blur-2xl pointer-events-none" />
      </div>

      {/* Ambient Organic Floating Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-300/25 blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-amber-200/40 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

      {/* 2. BACKGROUND SCENE: GARDEN SIDE DECORATIONS (FOUNTAINS & FLORA) */}
      <div className="absolute left-4 sm:left-12 bottom-0 hidden md:flex items-end gap-4 z-20 pointer-events-none select-none">
        <AnimatedFountain side="left" />
        <BloomingGardenFlora />
      </div>

      <div className="absolute right-4 sm:right-12 bottom-0 hidden md:flex items-end gap-4 z-20 pointer-events-none select-none">
        <BloomingGardenFlora />
        <AnimatedFountain side="right" />
      </div>

      {/* Swaying Grass Silhouette at Bottom */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#1D461A]/20 to-transparent pointer-events-none z-10 flex items-end justify-around opacity-70">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="w-1.5 bg-emerald-800/60 rounded-t-full origin-bottom animate-pulse"
            style={{
              height: `${20 + (i % 5) * 8}px`,
              animationDuration: `${1.5 + (i % 3) * 0.5}s`,
              transform: `rotate(${(i % 2 === 0 ? 1 : -1) * (5 + i)}deg)`
            }}
          />
        ))}
      </div>

      {/* 3. CENTRAL PRELOADER CARD */}
      <div className="relative z-30 flex flex-col items-center px-6 py-8 sm:px-10 sm:py-10 max-w-md w-full mx-4 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_20px_60px_-15px_rgba(29,70,26,0.18)] text-center transition-all duration-300">
        
        {/* Top Decorative Badge */}
        <div className="absolute -top-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#2E5B37] to-emerald-800 text-amber-300 text-xs font-semibold tracking-widest uppercase shadow-lg flex items-center gap-1.5 border border-emerald-600/30">
        
          Luxury Garden Artistry
        </div>

        {/* BIG OFFICIAL LOGO CONTAINER */}
        <div className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 my-2">
          {/* Outer Sun Glow Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-100/80 via-emerald-50 to-teal-100/50 border border-emerald-200/80 shadow-inner animate-pulse" />
          
          {/* Animated Water Ripple Rings */}
          <div className="absolute inset-1 rounded-full border border-emerald-500/30 animate-ping" style={{ animationDuration: '3s' }} />

          {/* Official Big Logo Image */}
          <img 
            src="/logo1.png" 
            alt="Van Vriksha Landscaping Official Logo" 
            className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-md animate-bounce"
            style={{ animationDuration: '2.5s' }}
          />
        </div>

        {/* Brand Name & Tagline */}
        <div className="mt-2">
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2E5B37] tracking-tight drop-shadow-sm">
            Van Vriksha Landscaping
          </h1>
          <p className="text-[11px] sm:text-xs font-semibold text-[#59a785] tracking-[0.2em] uppercase mt-1">
            Landscape Designer in Haryana • Karnal
          </p>
        </div>

        {/* Progress Bar & Dynamic Status */}
        <div className="w-full mt-6 flex flex-col items-center">
          <div className="w-full flex items-center justify-between text-xs font-semibold mb-2 px-1">
            <span className="text-emerald-900 flex items-center gap-1.5">
              <span className="text-sm">{currentStep.icon}</span>
              <span className="tabular-nums font-mono text-emerald-700">{progress}%</span>
            </span>
            <span className="text-[#8B5E3C] font-mono text-[11px] bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
              STEP {currentStepIndex + 1} / 5
            </span>
          </div>

          <div className="w-full h-2.5 rounded-full bg-emerald-900/10 p-0.5 shadow-inner overflow-hidden relative">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 via-[#2E5B37] to-teal-600 transition-all duration-700 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.5s_infinite]" />
            </div>
          </div>

          <div className="min-h-[28px] mt-3 flex items-center justify-center">
            <p className="text-xs sm:text-sm font-medium text-emerald-950 transition-all duration-300">
              {currentStep.text}
            </p>
          </div>
        </div>

        {/* Famous Tagline Quote */}
        <div className="mt-4 pt-3 border-t border-emerald-900/10 w-full">
          <p className="text-center text-[11px] font-serif italic text-[#2E5B37]/80">
            "Do it right the first time"
          </p>
        </div>
      </div>
    </div>
  );
}