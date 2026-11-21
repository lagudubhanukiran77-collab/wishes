import React from 'react';
import { motion } from 'framer-motion';
import { TeddyBear } from '../TeddyBear';
import { Sparkles, Heart } from 'lucide-react';

export const Page1Welcome = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.04, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-2xl mx-auto px-4 py-8 flex flex-col items-center text-center z-10"
    >
      {/* Decorative Top Pill */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#fbd0db] text-rose-500 text-xs sm:text-sm font-medium shadow-sm mb-6"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin [animation-duration:8s]" />
        <span>A Magical Birthday Gift For You</span>
        <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin [animation-duration:8s]" />
      </motion.div>

      {/* Main Glass Card */}
      <div className="w-full glass-panel-deep rounded-3xl p-6 sm:p-10 shadow-glass border border-white/90 relative overflow-hidden">
        {/* Subtle decorative background ribbons */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 via-rose-300 to-amber-200" />

        {/* Adorable Teddy Bears Ensemble */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative flex items-center justify-center gap-2 sm:gap-4 my-2 sm:my-4"
        >
          {/* Left Bear: Holding Flowers */}
          <div className="transform -rotate-6 translate-y-3 sm:translate-y-4">
            <TeddyBear variant="flowers" size={130} interactive caption="Teddy Blossom 🌸" />
          </div>

          {/* Center Main Bear: Holding Big Heart */}
          <div className="z-10 transform scale-110 -translate-y-1">
            <TeddyBear variant="heart" size={155} interactive caption="Teddy Hugs 💖" />
          </div>

          {/* Right Bear: Holding Gift */}
          <div className="transform rotate-6 translate-y-3 sm:translate-y-4">
            <TeddyBear variant="gift" size={130} interactive caption="Teddy Secret 🎁" />
          </div>
        </motion.div>

        {/* Cute Speech Bubble from Teddy Bears */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="my-4 inline-block px-4 py-2 bg-rose-50/90 border border-rose-200/80 rounded-2xl text-xs sm:text-sm font-handwriting text-rose-800 shadow-sm"
        >
          "We've been keeping a very sweet secret just for you today... 🧸✨"
        </motion.div>

        {/* Main Headings */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-2 mt-2"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#442c22] tracking-tight">
            Hey, My Cutie! 🧸
          </h1>
          <p className="text-base sm:text-lg text-[#7c5b4d] font-normal max-w-md mx-auto">
            I have something special for you...
          </p>
        </motion.div>

        {/* Main Question */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-6 mb-8"
        >
          <p className="text-lg sm:text-xl font-serif italic text-rose-600/90 font-medium flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 fill-rose-400 text-rose-400 inline animate-bounce" />
            Do you want to see what's inside?
            <Heart className="w-4 h-4 fill-rose-400 text-rose-400 inline animate-bounce" />
          </p>
        </motion.div>

        {/* Beautiful Animated Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
        >
          <motion.button
            onClick={onNext}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full btn-primary text-base sm:text-lg font-semibold tracking-wide cursor-pointer shadow-lg shadow-pink-300/40"
          >
            <span className="relative z-10">Yes! Show Me 💗</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-xl"
            >
              🎀
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      {/* Sweet Footnote */}
      <p className="mt-4 text-xs text-[#a38072] font-serif italic">
        Tip: Tap on any teddy bear to share a little heart hug! 🐾
      </p>
    </motion.div>
  );
};
