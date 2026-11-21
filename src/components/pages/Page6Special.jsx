import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TeddyBear } from '../TeddyBear';
import { surpriseConfig } from '../../config/surpriseConfig';
import { Sparkles, Heart, Gift, RefreshCw } from 'lucide-react';

export const Page6Special = ({ onNext }) => {
  const special = surpriseConfig.special;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  const images = [
    { src: special.featuredImage, caption: 'Fairytale Princess 🌷✨' },
    { src: special.secondaryImage, caption: 'Royal White Gown 👑🤍' },
  ];

  const currentImg = images[currentImageIndex];

  const toggleImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.04, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-4xl mx-auto px-4 py-8 flex flex-col items-center text-center z-10"
    >
      {/* Decorative Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#fbd0db] text-rose-500 text-xs sm:text-sm font-medium shadow-sm mb-4">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>Celebration of Your Uniqueness</span>
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
      </div>

      {/* Main Glass Card */}
      <div className="w-full glass-panel-deep rounded-3xl p-6 sm:p-10 shadow-glass border border-white/90 relative overflow-hidden">
        {/* Headings */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#442c22] tracking-tight mb-2">
          {special.title}
        </h2>
        <p className="text-sm sm:text-base text-[#7c5b4d] font-serif italic max-w-md mx-auto mb-6">
          {special.subtitle}
        </p>

        {/* Central Spotlight Display: Photograph & Flanking Teddy Bears */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 my-6">
          {/* Left Bear: Holding Floating Balloons */}
          <div className="order-2 md:order-1">
            <TeddyBear variant="balloons" size={145} caption="Sky High Joy 🎈" />
          </div>

          {/* Center Featured Photo in Illuminated Floral Frame */}
          <div className="order-1 md:order-2 flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={toggleImage}
              className="relative group cursor-pointer"
              title="Tap to switch between her gorgeous portraits!"
            >
              {/* Glowing Aura Behind Frame */}
              <div className="absolute -inset-3 bg-gradient-to-r from-pink-300 via-rose-300 to-amber-200 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="relative w-60 h-80 sm:w-68 sm:h-92 rounded-2xl overflow-hidden bg-rose-50 border-4 border-white shadow-xl flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImg.src}
                    src={currentImg.src}
                    alt="My Dear Sister"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top"
                  />
                </AnimatePresence>

                {/* Photo Corner Ribbon */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-md text-[11px] rounded-full font-semibold text-rose-700 shadow-sm border border-rose-100">
                  {currentImg.caption}
                </div>

                {/* Switch indicator badge */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/50 backdrop-blur-md text-[10px] rounded-full font-medium text-white shadow-sm flex items-center gap-1 group-hover:bg-rose-600 transition-colors">
                  <RefreshCw className="w-2.5 h-2.5 animate-spin [animation-duration:10s]" />
                  <span>Tap to Switch Look ✨</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Bear: Holding Flowers */}
          <div className="order-3">
            <TeddyBear variant="flowers" size={145} caption="Blooms For You 🌸" />
          </div>
        </div>

        {/* Compliment Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-5">
          {special.compliments.map((badge, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="px-3.5 py-1.5 rounded-full bg-rose-50/90 border border-rose-200 text-xs sm:text-sm font-medium text-rose-800 shadow-sm"
            >
              {badge}
            </motion.span>
          ))}
        </div>

        {/* Main Emotional Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="my-6 p-5 sm:p-6 bg-gradient-to-r from-rose-50/90 via-pink-50/70 to-amber-50/90 rounded-2xl border border-rose-200/80 max-w-2xl mx-auto shadow-sm"
        >
          <p className="text-base sm:text-lg md:text-xl font-serif text-[#3e2820] leading-relaxed">
            "{special.message}"
          </p>
        </motion.div>

        {/* Final Surprise Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4"
        >
          <motion.button
            onClick={onNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-8 sm:px-12 py-3.5 sm:py-4 rounded-full btn-primary text-base sm:text-lg font-semibold tracking-wide cursor-pointer shadow-lg shadow-pink-300/40"
          >
            <span>One Last Surprise 🎁</span>
            <Gift className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};
