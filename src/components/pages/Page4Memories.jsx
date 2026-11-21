import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TeddyBear } from '../TeddyBear';
import { surpriseConfig } from '../../config/surpriseConfig';
import { Heart, Sparkles, X, ChevronRight, Quote, ZoomIn } from 'lucide-react';

export const Page4Memories = ({ onNext }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [imgErrors, setImgErrors] = useState({});

  const handleImageError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const memories = surpriseConfig.memories;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.04, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-5xl mx-auto px-4 py-8 flex flex-col items-center z-10"
    >
      {/* Top Header Section */}
      <div className="text-center mb-8 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#fbd0db] text-rose-500 text-xs sm:text-sm font-medium shadow-sm mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Cherished Moments Through Time</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#442c22] tracking-tight">
          Some Memories Are Forever...
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#7c5b4d] font-serif italic">
          Every picture holds a memory, and every memory holds a little piece of happiness.
        </p>

        {/* Floating Teddy Bears Decor */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <TeddyBear variant="heart" size={110} caption="Teddy Keepsakes 💖" />
          <TeddyBear variant="flowers" size={110} caption="Pure Memories 🌸" />
        </div>
      </div>

      {/* Featured Quote Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl mb-8 p-4 bg-gradient-to-r from-rose-50/90 via-pink-50/80 to-amber-50/90 border border-rose-200/70 rounded-2xl text-center shadow-sm"
      >
        <Quote className="w-5 h-5 text-rose-400 mx-auto mb-1 opacity-70" />
        <p className="text-sm sm:text-base font-serif italic text-rose-900 font-medium">
          "Some people make life beautiful just by being in it. You are one of them."
        </p>
      </motion.div>

      {/* Photo Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {memories.map((photo, index) => {
          const hasError = imgErrors[photo.id];

          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedPhoto(photo)}
              className="group glass-panel rounded-3xl p-4 shadow-glass hover:shadow-glass-hover transition-all duration-300 cursor-pointer flex flex-col justify-between border border-white/80"
            >
              {/* Photo Frame Container (optimized for portrait photos) */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-rose-50/60 mb-3 shadow-inner">
                {/* Washi Tape / Ribbon Accent */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-4 bg-amber-100/80 border border-amber-200/60 rotate-1 shadow-xs rounded-sm z-10 pointer-events-none" />

                {/* Tag Badge */}
                <div className="absolute bottom-2.5 right-2.5 z-10 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-md text-[11px] font-medium text-rose-700 shadow-sm border border-rose-100">
                  {photo.tag}
                </div>

                {/* Zoom icon on hover */}
                <div className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-white/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-rose-600 shadow-sm">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>

                {!hasError ? (
                  <img
                    src={photo.image}
                    alt={photo.title}
                    onError={() => handleImageError(photo.id)}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-rose-100 to-amber-50 text-center">
                    <TeddyBear variant="heart" size={90} interactive={false} />
                    <span className="text-xs font-serif text-[#8a5b4c] mt-1 font-semibold">
                      {photo.title}
                    </span>
                  </div>
                )}
              </div>

              {/* Caption and Title */}
              <div className="space-y-1.5 px-1 pb-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#3d271f]">
                    {photo.title}
                  </h3>
                  <Heart className="w-4 h-4 text-rose-400 group-hover:fill-rose-400 transition-colors" />
                </div>
                <p className="text-xs sm:text-sm text-[#745549] line-clamp-2">
                  {photo.caption}
                </p>
                <p className="text-[11px] font-serif italic text-rose-600/90 pt-1 border-t border-rose-100/60">
                  "{photo.quote}"
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Sweet Quote at Bottom */}
      <div className="mt-8 text-center text-xs sm:text-sm font-serif italic text-[#8d6757] max-w-lg">
        "Your smile makes even ordinary days special."
      </div>

      {/* Next Step Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8"
      >
        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full btn-primary text-base sm:text-lg font-semibold tracking-wide cursor-pointer shadow-lg shadow-pink-300/40"
        >
          <span>Read My Letter 💌</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>

      {/* Lightbox Modal for Full View */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-5 sm:p-7 max-w-md w-full shadow-2xl relative border border-rose-100 cursor-default max-h-[92vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-rose-50 text-rose-700 hover:bg-rose-100 flex items-center justify-center transition-colors cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-2xl overflow-hidden max-h-[55vh] flex items-center justify-center bg-rose-50/50 mb-4 shadow-sm">
                {!imgErrors[selectedPhoto.id] ? (
                  <img
                    src={selectedPhoto.image}
                    alt={selectedPhoto.title}
                    className="max-h-[55vh] w-auto object-contain rounded-xl"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-rose-50 p-4">
                    <TeddyBear variant="heart" size={130} interactive={false} />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-100 text-rose-800">
                  {selectedPhoto.tag}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#3d271f] pt-1">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-[#674b40]">
                  {selectedPhoto.caption}
                </p>
                <blockquote className="mt-3 p-3 bg-rose-50/70 border-l-3 border-rose-400 rounded-r-xl text-xs sm:text-sm font-serif italic text-rose-900">
                  "{selectedPhoto.quote}"
                </blockquote>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
