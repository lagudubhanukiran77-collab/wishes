import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TeddyBear } from '../TeddyBear';
import { surpriseConfig } from '../../config/surpriseConfig';
import { Mail, Sparkles, ChevronRight, Heart, Feather } from 'lucide-react';

export const Page5Letter = ({ onNext }) => {
  const letter = surpriseConfig.letter;

  // Combine letter paragraphs into one text for typing
  const fullText = letter.paragraphs.join('\n\n');
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const speed = 20; // 20ms per character for smooth typing
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [fullText]);

  const handleSkipTyping = () => {
    setDisplayedText(fullText);
    setIsTypingComplete(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.04, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-3xl mx-auto px-4 py-8 flex flex-col items-center z-10"
    >
      {/* Top Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#fbd0db] text-rose-500 text-xs sm:text-sm font-medium shadow-sm mb-3">
          <Feather className="w-3.5 h-3.5 text-rose-400" />
          <span>Written With Pure Love</span>
          <Feather className="w-3.5 h-3.5 text-rose-400" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#442c22] tracking-tight">
          Words From My Heart...
        </h2>
        <p className="mt-1 text-sm sm:text-base text-[#7c5b4d] font-serif italic">
          Every word here is wrapped in warm hugs and warmest prayers for you.
        </p>
      </div>

      {/* Main Letter Card */}
      <div className="relative w-full">
        {/* Corner Teddy Bears */}
        <div className="absolute -top-7 -left-5 z-20 hidden sm:block">
          <TeddyBear variant="flowers" size={90} caption="Love 🌸" />
        </div>
        <div className="absolute -bottom-6 -right-4 z-20 hidden sm:block">
          <TeddyBear variant="heart" size={90} caption="Hugs 💖" />
        </div>

        {/* Parchment Styled Glass Container */}
        <div className="w-full bg-[#fffcf7]/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-[#fae5dc] relative overflow-hidden">
          {/* Top Vintage Border Accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-200 via-pink-300 to-amber-200" />

          {/* Letter Header with Teddy with Letter */}
          <div className="flex flex-col sm:flex-row items-center justify-between pb-5 mb-5 border-b border-[#f3ddd3] gap-4">
            <div className="flex items-center gap-3">
              <TeddyBear variant="letter" size={105} caption="Delivered with Love 💌" />
              <div>
                <span className="text-xs uppercase tracking-widest text-rose-500 font-semibold">
                  Personal Birthday Note
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#442c22]">
                  {letter.greeting}
                </h3>
              </div>
            </div>

            {/* Skip Typing Button */}
            {!isTypingComplete && (
              <button
                onClick={handleSkipTyping}
                className="text-xs text-rose-500 hover:text-rose-700 bg-rose-50 px-3 py-1.5 rounded-full border border-rose-200/60 font-medium transition-colors cursor-pointer"
              >
                Skip Typing ⚡
              </button>
            )}
          </div>

          {/* Typewriter Body Content */}
          <div className="font-serif text-[#422c22] text-base sm:text-lg leading-relaxed sm:leading-loose whitespace-pre-line min-h-[260px]">
            {displayedText}
            {!isTypingComplete && (
              <span className="inline-block w-2 h-5 ml-1 bg-rose-500 animate-pulse align-middle" />
            )}
          </div>

          {/* Highlighted Quote Box */}
          <div className="my-6 p-4 bg-gradient-to-r from-rose-50 via-pink-50 to-amber-50 rounded-2xl border border-rose-200/80">
            <p className="text-sm sm:text-base font-serif italic text-rose-900 font-medium text-center">
              "Never stop smiling, dreaming, and being the wonderful person you are."
            </p>
          </div>

          {/* Signoff */}
          <div className="pt-4 border-t border-[#f3ddd3] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-right">
            <div className="flex items-center gap-1.5 text-xs text-[#8d6757] italic">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-300" />
              <span>Stamped with infinite affection</span>
            </div>
            <div>
              <p className="text-xs text-[#7e5c4e] font-serif italic">
                {letter.closing}
              </p>
              <p className="text-base font-handwriting font-bold text-rose-600">
                {letter.signature}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Chapter Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full btn-primary text-base sm:text-lg font-semibold tracking-wide cursor-pointer shadow-lg shadow-pink-300/40"
        >
          <span>See What's Next 🌷</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
