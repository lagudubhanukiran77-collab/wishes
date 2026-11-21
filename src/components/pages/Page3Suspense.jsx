import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TeddyBear } from '../TeddyBear';
import { surpriseConfig } from '../../config/surpriseConfig';
import { Sparkles, Gift, Heart, ArrowRight } from 'lucide-react';

export const Page3Suspense = ({ onNext }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [boxOpened, setBoxOpened] = useState(false);

  // Progressive messages reveal
  const messages = surpriseConfig.suspense.messages;

  useEffect(() => {
    // Step through the 3 suspense messages
    const t1 = setTimeout(() => setActiveStep(1), 800);
    const t2 = setTimeout(() => setActiveStep(2), 2600);
    const t3 = setTimeout(() => setActiveStep(3), 4400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleOpenSurprise = () => {
    setBoxOpened(true);
    setTimeout(() => {
      onNext();
    }, 700);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.04, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-xl mx-auto px-4 py-8 flex flex-col items-center text-center z-10"
    >
      {/* Decorative Top Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#fbd0db] text-rose-500 text-xs sm:text-sm font-medium shadow-sm mb-6">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin [animation-duration:6s]" />
        <span>The Magic Is Unfolding...</span>
        <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin [animation-duration:6s]" />
      </div>

      {/* Main Glass Card */}
      <div className="w-full glass-panel-deep rounded-3xl p-6 sm:p-10 shadow-glass border border-white/90 relative overflow-hidden">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#442c22] mb-2"
        >
          {surpriseConfig.suspense.title}
        </motion.h2>

        <p className="text-xs sm:text-sm text-[#8c6758] italic mb-4 font-serif">
          Teddy is holding a very special parcel with both paws...
        </p>

        {/* Mysterious Teddy Bear Carrying Gift Box */}
        <div className="relative my-4 flex items-center justify-center">
          {/* Pulsing Aura Behind Gift */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.35, 0.7, 0.35],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-44 h-44 rounded-full bg-gradient-to-r from-pink-300/40 via-amber-200/50 to-rose-300/40 blur-xl pointer-events-none"
          />

          <motion.div
            animate={
              boxOpened
                ? { scale: [1, 1.2, 0.9], y: -15 }
                : {
                    rotate: [-1.5, 1.5, -1.5],
                    y: [0, -5, 0],
                  }
            }
            transition={{ duration: 3, repeat: boxOpened ? 0 : Infinity }}
            className="relative z-10"
          >
            <TeddyBear
              variant="gift"
              size={170}
              interactive
              caption="Teddy's Mystery Box 🎁"
            />
          </motion.div>
        </div>

        {/* Suspenseful Progressive Teddy Messages */}
        <div className="my-6 min-h-[140px] flex flex-col items-center justify-center space-y-3">
          <AnimatePresence>
            {messages.map((item, idx) => {
              const isVisible = activeStep >= idx + 1;
              if (!isVisible) return null;

              const isLatest = activeStep === idx + 1;
              const isGrand = idx === 2;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 14, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`w-full max-w-md px-4 py-2.5 rounded-2xl border transition-all duration-300 ${
                    isGrand
                      ? 'bg-gradient-to-r from-rose-100 via-pink-100 to-amber-50 border-rose-300 text-rose-900 font-bold text-base sm:text-lg shadow-sm'
                      : isLatest
                      ? 'bg-white/90 border-pink-200 text-[#4e342b] font-medium text-sm sm:text-base shadow-sm'
                      : 'bg-white/60 border-pink-100/60 text-[#856356] text-xs sm:text-sm'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    {isGrand ? (
                      <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400 animate-bounce" />
                    ) : (
                      <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-300" />
                    )}
                    <span>{item.text}</span>
                    {isGrand && (
                      <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400 animate-bounce" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Final Button (enabled once messages appear or immediately if skipped) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: activeStep >= 3 ? 1 : 0.7 }}
          className="mt-2"
        >
          <motion.button
            onClick={handleOpenSurprise}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full btn-primary text-base sm:text-lg font-semibold tracking-wide cursor-pointer shadow-lg shadow-pink-300/40"
          >
            <span>{surpriseConfig.suspense.buttonText}</span>
            <Gift className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};
