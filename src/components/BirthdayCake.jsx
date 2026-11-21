import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export const BirthdayCake = ({ onBlowOut, isBlown = false }) => {
  const [candlesLit, setCandlesLit] = useState(!isBlown);
  const [isBlowing, setIsBlowing] = useState(false);

  // Trigger grand celebration confetti with multiple bursts
  const triggerConfetti = () => {
    // Left burst
    confetti({
      particleCount: 70,
      angle: 60,
      spread: 65,
      origin: { x: 0.15, y: 0.7 },
      colors: ['#ff9a9e', '#fecfef', '#a1c4fd', '#fbc2eb', '#ffeaa7', '#ff6b81'],
    });

    // Right burst
    confetti({
      particleCount: 70,
      angle: 120,
      spread: 65,
      origin: { x: 0.85, y: 0.7 },
      colors: ['#ff9a9e', '#fecfef', '#a1c4fd', '#fbc2eb', '#ffeaa7', '#ff6b81'],
    });

    // Center stars and hearts
    setTimeout(() => {
      confetti({
        particleCount: 90,
        spread: 100,
        origin: { y: 0.6 },
        shapes: ['circle', 'square'],
        colors: ['#ffd166', '#ff758c', '#ff7eb3', '#fbc2eb', '#fad0c4'],
      });
    }, 250);
  };

  const handleBlowCandles = () => {
    if (!candlesLit || isBlowing) return;
    setIsBlowing(true);

    // Play gentle chime sound via Web Audio API
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(783.99, audioCtx.currentTime + 0.3); // G5
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.6);
    } catch {
      // AudioContext fallback
    }

    // Extinguish candles with delay
    setTimeout(() => {
      setCandlesLit(false);
      setIsBlowing(false);
      triggerConfetti();
      if (onBlowOut) onBlowOut();
    }, 400);
  };

  return (
    <div className="relative flex flex-col items-center justify-center my-4 select-none">
      {/* Interactive Tap Prompt Badge */}
      <motion.button
        onClick={handleBlowCandles}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`mb-4 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer z-20 ${
          candlesLit
            ? 'bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 text-white animate-pulse-soft shadow-rose-200'
            : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
        }`}
      >
        {candlesLit ? (
          <>
            <span className="text-base">🎂💨</span>
            <span>Make a Wish & Tap to Blow Candles!</span>
            <span className="text-base">✨</span>
          </>
        ) : (
          <>
            <span className="text-base">🎉</span>
            <span>Your Wish Has Been Sent to the Stars!</span>
            <span className="text-base">💖</span>
          </>
        )}
      </motion.button>

      {/* The 3D-styled SVG Birthday Cake */}
      <div
        className="relative cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
        onClick={handleBlowCandles}
        title={candlesLit ? "Tap to blow out the candles!" : "Happy Birthday!"}
      >
        <svg
          viewBox="0 0 320 280"
          className="w-72 sm:w-80 md:w-96 h-auto drop-shadow-xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Cake Base Gradient */}
            <linearGradient id="cakeBase" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff2e3" />
              <stop offset="100%" stopColor="#f5dfc6" />
            </linearGradient>

            {/* Frosting Pink Gradient */}
            <linearGradient id="frostingPink" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffb8cc" />
              <stop offset="100%" stopColor="#ff85a1" />
            </linearGradient>

            {/* Strawberry Glaze */}
            <linearGradient id="glazeDrip" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff758c" />
              <stop offset="100%" stopColor="#ff4b6b" />
            </linearGradient>

            {/* Stand Metallic Gradient */}
            <linearGradient id="cakeStand" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f0e5dd" />
              <stop offset="100%" stopColor="#dfd0c3" />
            </linearGradient>

            {/* Candle Body Striping */}
            <linearGradient id="candlePink" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffd8e4" />
              <stop offset="50%" stopColor="#ff9bb2" />
              <stop offset="100%" stopColor="#ff708f" />
            </linearGradient>

            <linearGradient id="candleGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff3c4" />
              <stop offset="50%" stopColor="#fcd770" />
              <stop offset="100%" stopColor="#e5a93b" />
            </linearGradient>

            {/* Flame Glow */}
            <radialGradient id="flameInner" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#fff385" />
              <stop offset="75%" stopColor="#ff9f43" />
              <stop offset="100%" stopColor="#ee5253" />
            </radialGradient>

            <filter id="flameGlowFilter" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* --- CERAMIC CAKE STAND --- */}
          <ellipse cx="160" cy="265" rx="135" ry="14" fill="#eddcd0" />
          <path d="M 145 250 L 140 264 L 180 264 L 175 250 Z" fill="url(#cakeStand)" stroke="#cfbeb0" strokeWidth="1" />
          <ellipse cx="160" cy="250" rx="125" ry="15" fill="url(#cakeStand)" stroke="#d9c9bc" strokeWidth="1.5" />
          <ellipse cx="160" cy="248" rx="118" ry="12" fill="#fff9f5" />

          {/* --- TIER 1 (BOTTOM LARGE TIER) --- */}
          {/* Bottom Tier Body */}
          <path
            d="M 55 190 Q 55 242 160 242 Q 265 242 265 190 L 265 170 Q 265 210 160 210 Q 55 210 55 170 Z"
            fill="url(#cakeBase)"
            stroke="#debca0"
            strokeWidth="1.2"
          />
          {/* Top Surface of Bottom Tier */}
          <ellipse cx="160" cy="170" rx="105" ry="22" fill="#ffeff3" stroke="#ffd0dc" strokeWidth="1" />

          {/* Strawberry Dripping Ganache on Tier 1 */}
          <path
            d="M 55 170
               C 65 186, 75 188, 85 177
               C 95 195, 105 196, 115 178
               C 125 200, 138 202, 148 180
               C 158 196, 170 197, 180 179
               C 192 201, 205 200, 215 180
               C 225 194, 235 194, 245 178
               C 255 186, 260 180, 265 170
               L 265 168
               Q 265 195 160 195
               Q 55 195 55 168 Z"
            fill="url(#glazeDrip)"
            opacity="0.9"
          />

          {/* Pearls / Sprinkles on Tier 1 */}
          <circle cx="85" cy="215" r="3" fill="#fff" opacity="0.9" />
          <circle cx="110" cy="225" r="3.2" fill="#ffd166" />
          <circle cx="140" cy="228" r="3" fill="#ff85a1" />
          <circle cx="170" cy="229" r="3" fill="#fff" opacity="0.9" />
          <circle cx="205" cy="225" r="3.2" fill="#ffd166" />
          <circle cx="235" cy="216" r="3" fill="#ff85a1" />

          {/* Frosting Swirls on Tier 1 Rim */}
          {[68, 92, 118, 145, 175, 202, 228, 252].map((x, i) => (
            <ellipse
              key={i}
              cx={x}
              cy={165 + Math.sin(i * 0.9) * 4}
              rx="6.5"
              ry="5"
              fill="#ffffff"
              stroke="#ffd1dc"
              strokeWidth="0.8"
            />
          ))}

          {/* --- TIER 2 (TOP TIER) --- */}
          {/* Top Tier Body */}
          <path
            d="M 95 125 Q 95 165 160 165 Q 225 165 225 125 L 225 110 Q 225 142 160 142 Q 95 142 95 110 Z"
            fill="url(#frostingPink)"
            stroke="#ff708f"
            strokeWidth="1.2"
          />
          {/* Top Tier Surface */}
          <ellipse cx="160" cy="110" rx="65" ry="18" fill="#fff4f7" stroke="#ffb8cc" strokeWidth="1.2" />

          {/* White Chocolate Dripping Glaze on Top Tier */}
          <path
            d="M 95 110
               C 102 122, 112 125, 120 114
               C 130 128, 140 128, 150 116
               C 160 132, 172 130, 182 115
               C 192 126, 202 125, 210 115
               C 218 122, 222 118, 225 110
               L 225 109
               Q 225 128 160 128
               Q 95 128 95 109 Z"
            fill="#ffffff"
            opacity="0.95"
          />

          {/* Fresh Strawberries on Top Tier */}
          {/* Left Strawberry */}
          <path
            d="M 125 106 C 122 96, 134 94, 137 104 C 139 110, 130 115, 125 106 Z"
            fill="#ee5253"
            stroke="#c23616"
            strokeWidth="0.8"
          />
          <polygon points="128,95 130,98 132,95 134,98 136,95 132,100" fill="#2ed573" />

          {/* Right Strawberry */}
          <path
            d="M 195 106 C 192 96, 204 94, 207 104 C 209 110, 200 115, 195 106 Z"
            fill="#ee5253"
            stroke="#c23616"
            strokeWidth="0.8"
          />
          <polygon points="198,95 200,98 202,95 204,98 206,95 202,100" fill="#2ed573" />

          {/* Whipped Cream Dollops on Top */}
          <circle cx="112" cy="112" r="5" fill="#fff" stroke="#ffccd5" strokeWidth="0.6" />
          <circle cx="140" cy="116" r="5.5" fill="#fff" stroke="#ffccd5" strokeWidth="0.6" />
          <circle cx="160" cy="118" r="6" fill="#fff" stroke="#ffccd5" strokeWidth="0.6" />
          <circle cx="180" cy="116" r="5.5" fill="#fff" stroke="#ffccd5" strokeWidth="0.6" />
          <circle cx="208" cy="112" r="5" fill="#fff" stroke="#ffccd5" strokeWidth="0.6" />

          {/* --- CANDLES (3 CANDLES) --- */}
          {/* Left Candle */}
          <rect x="133" y="65" width="7" height="38" rx="2.5" fill="url(#candlePink)" stroke="#ff758c" strokeWidth="0.8" />
          <line x1="136.5" y1="65" x2="136.5" y2="58" stroke="#333" strokeWidth="1.2" strokeLinecap="round" />

          {/* Center Main Candle (Taller) */}
          <rect x="156" y="55" width="8" height="48" rx="2.5" fill="url(#candleGold)" stroke="#e5a93b" strokeWidth="0.8" />
          <line x1="160" y1="55" x2="160" y2="47" stroke="#333" strokeWidth="1.2" strokeLinecap="round" />

          {/* Right Candle */}
          <rect x="180" y="65" width="7" height="38" rx="2.5" fill="url(#candlePink)" stroke="#ff758c" strokeWidth="0.8" />
          <line x1="183.5" y1="65" x2="183.5" y2="58" stroke="#333" strokeWidth="1.2" strokeLinecap="round" />
        </svg>

        {/* Animated Flames Layer (when lit) */}
        <AnimatePresence>
          {candlesLit && (
            <>
              {/* Left Flame */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{
                  scale: [1, 1.15, 0.95, 1.08, 1],
                  y: [0, -2, 1, -1, 0],
                  rotate: [0, 3, -3, 2, 0],
                }}
                exit={{ scale: 0, opacity: 0, y: -10 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[18%] left-[42.5%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              >
                <div className="w-4 h-7 bg-gradient-to-t from-orange-500 via-amber-300 to-yellow-100 rounded-full blur-[0.8px] shadow-[0_0_14px_rgba(255,165,2,0.8)]" />
              </motion.div>

              {/* Center Main Flame */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{
                  scale: [1, 1.2, 0.9, 1.12, 1],
                  y: [0, -3, 1, -2, 0],
                  rotate: [0, -3, 3, -1, 0],
                }}
                exit={{ scale: 0, opacity: 0, y: -12 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[14%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              >
                <div className="w-5 h-8 bg-gradient-to-t from-orange-500 via-amber-300 to-yellow-100 rounded-full blur-[0.8px] shadow-[0_0_20px_rgba(255,165,2,0.95)]" />
              </motion.div>

              {/* Right Flame */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{
                  scale: [1, 1.12, 0.96, 1.16, 1],
                  y: [0, -2, 1, -1, 0],
                  rotate: [0, 4, -2, 1, 0],
                }}
                exit={{ scale: 0, opacity: 0, y: -10 }}
                transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[18%] left-[57.5%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              >
                <div className="w-4 h-7 bg-gradient-to-t from-orange-500 via-amber-300 to-yellow-100 rounded-full blur-[0.8px] shadow-[0_0_14px_rgba(255,165,2,0.8)]" />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Drifting Smoke Whisps after blown */}
        <AnimatePresence>
          {!candlesLit && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 0.8, 0], y: -30, x: [0, 6, -6] }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
              className="absolute top-[14%] left-1/2 -translate-x-1/2 pointer-events-none text-xs text-gray-400 font-serif"
            >
              ☁️ ~ ~
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
