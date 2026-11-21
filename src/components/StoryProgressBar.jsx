import React from 'react';
import { motion } from 'framer-motion';

export const StoryProgressBar = ({ currentPage, totalPages = 7, onSelectPage }) => {
  const steps = [
    { num: 1, label: 'Welcome', icon: '🎀' },
    { num: 2, label: 'Secret', icon: '🔐' },
    { num: 3, label: 'Suspense', icon: '🎁' },
    { num: 4, label: 'Memories', icon: '📸' },
    { num: 5, label: 'Letter', icon: '💌' },
    { num: 6, label: 'Special', icon: '🌷' },
    { num: 7, label: 'Party', icon: '🎂' },
  ];

  return (
    <div className="fixed top-4 left-4 z-40 flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-[#f3ded6] shadow-sm">
      <span className="text-xs font-serif text-[#a16b58] font-medium hidden sm:inline mr-1">
        Chapter {currentPage} of {totalPages}
      </span>

      <div className="flex items-center gap-1">
        {steps.map((step) => {
          const isCompleted = step.num < currentPage;
          const isCurrent = step.num === currentPage;

          return (
            <div
              key={step.num}
              className="relative group cursor-default"
              title={`${step.num}. ${step.label}`}
            >
              <div
                className={`transition-all duration-300 rounded-full flex items-center justify-center ${
                  isCurrent
                    ? 'w-6 h-6 bg-rose-400 text-white text-[11px] shadow-sm font-semibold scale-110'
                    : isCompleted
                    ? 'w-5 h-5 bg-rose-200/80 text-rose-700 text-[10px]'
                    : 'w-4 h-4 bg-gray-200/60 text-gray-400 text-[9px]'
                }`}
              >
                {step.icon}
              </div>

              {/* Tooltip on hover */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-[#4a3429] text-white text-[10px] px-2 py-0.5 rounded shadow-md whitespace-nowrap pointer-events-none z-50">
                {step.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
