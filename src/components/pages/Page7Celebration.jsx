import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TeddyBear } from '../TeddyBear';
import { BirthdayCake } from '../BirthdayCake';
import { surpriseConfig } from '../../config/surpriseConfig';
import { Sparkles, Heart, RotateCcw, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Page7Celebration = ({ onReplay }) => {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const celebration = surpriseConfig.celebration;

  useEffect(() => {
    // Initial welcome confetti burst when page opens
    const timer = setTimeout(() => {
      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#ff9a9e', '#fecfef', '#a1c4fd', '#ffd166', '#ff758c'],
      });
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const handleCandlesBlown = () => {
    setCandlesBlown(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full max-w-4xl mx-auto px-4 py-8 flex flex-col items-center text-center z-10"
    >
      {/* Festive Bunting / Garland Decor */}
      <div className="flex items-center justify-center gap-2 mb-3 text-lg sm:text-2xl select-none">
        <span>🎀</span>
        <span>✨</span>
        <span>🎈</span>
        <span>🎉</span>
        <span>👑</span>
        <span>🎉</span>
        <span>🎈</span>
        <span>✨</span>
        <span>🎀</span>
      </div>

      {/* Main Glass Card */}
      <div className="w-full glass-panel-deep rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-white relative overflow-hidden">
        {/* Shimmering Top Ribbon */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300" />

        {/* Grand Birthday Heading */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="my-3 space-y-2"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/80 text-rose-800 text-xs sm:text-sm font-semibold mb-1">
            <PartyPopper className="w-4 h-4 text-rose-500" />
            <span>It's Your Big Day!</span>
            <PartyPopper className="w-4 h-4 text-rose-500" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-[#3b2319] tracking-tight drop-shadow-xs">
            {celebration.mainHeading}
          </h1>
        </motion.div>

        {/* Central Stage: Teddy Bears Surrounding The Interactive Cake */}
        <div className="relative my-4 flex flex-col items-center justify-center">
          {/* Teddy Bears Array */}
          <div className="flex items-center justify-center gap-2 sm:gap-6 w-full">
            {/* Left Teddy: Party Bear with Cone Hat */}
            <div className="hidden sm:block transform -rotate-6">
              <TeddyBear variant="party" size={135} caption="Party Time! 🥳" />
            </div>

            {/* Center: The Realistic Interactive Birthday Cake */}
            <div className="z-10">
              <BirthdayCake onBlowOut={handleCandlesBlown} isBlown={candlesBlown} />
            </div>

            {/* Right Teddy: Balloons Bear */}
            <div className="hidden sm:block transform rotate-6">
              <TeddyBear variant="balloons" size={135} caption="Many Wishes! 🎈" />
            </div>
          </div>

          {/* Mobile view teddy bears row */}
          <div className="flex sm:hidden items-center justify-center gap-4 mt-2">
            <TeddyBear variant="party" size={110} caption="Celebrate! 🎉" />
            <TeddyBear variant="balloons" size={110} caption="Wishes! 🎈" />
          </div>

          {/* Celebration Banner after blowing candles */}
          <AnimatePresence>
            {candlesBlown && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="mt-3 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-amber-100 via-rose-100 to-pink-100 border border-amber-300 text-amber-900 font-serif font-bold text-sm sm:text-base shadow-sm"
              >
                ✨ "May every wish you whispered come true today and always!" ✨
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Wishes Tokens */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-6 max-w-2xl mx-auto">
          {celebration.wishes.map((wish, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="p-2.5 rounded-2xl bg-white/75 border border-rose-100 text-xs sm:text-sm font-medium text-[#5c3e32] shadow-xs flex items-center justify-center text-center"
            >
              {wish}
            </motion.div>
          ))}
        </div>

        {/* Final Meaningful Message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="my-6 p-6 sm:p-8 bg-gradient-to-br from-white/95 via-rose-50/80 to-amber-50/80 rounded-3xl border border-rose-200/90 shadow-sm max-w-2xl mx-auto"
        >
          <Heart className="w-6 h-6 text-rose-500 fill-rose-400 mx-auto mb-2 animate-bounce" />
          <p className="text-base sm:text-lg md:text-xl font-serif text-[#3e271e] leading-relaxed">
            "{celebration.finalMessage}"
          </p>
        </motion.div>

        {/* Final Action Button: Replay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={onReplay}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full btn-primary text-base sm:text-lg font-semibold tracking-wide cursor-pointer shadow-lg shadow-pink-300/40"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Replay My Surprise 💗</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Sweet Footer Signature */}
      <footer className="mt-8 text-xs text-[#9d7768] font-serif flex items-center gap-1.5">
        <span>Made with infinite love for my sister</span>
        <span>•</span>
        <span>Teddy Bear Guild 🧸</span>
      </footer>
    </motion.div>
  );
};
