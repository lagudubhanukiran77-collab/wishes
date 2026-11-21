import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FloatingParticles } from './components/FloatingParticles';
import { MusicPlayer } from './components/MusicPlayer';
import { StoryProgressBar } from './components/StoryProgressBar';

import { Page1Welcome } from './components/pages/Page1Welcome';
import { Page2Password } from './components/pages/Page2Password';
import { Page3Suspense } from './components/pages/Page3Suspense';
import { Page4Memories } from './components/pages/Page4Memories';
import { Page5Letter } from './components/pages/Page5Letter';
import { Page6Special } from './components/pages/Page6Special';
import { Page7Celebration } from './components/pages/Page7Celebration';
import { ChevronLeft } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [hasUnlocked, setHasUnlocked] = useState(false);

  // Smooth scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage === 2) {
      setHasUnlocked(true);
    }
    setCurrentPage((prev) => Math.min(prev + 1, 7));
  };

  const handlePrevPage = () => {
    // Only allow going back if already unlocked, or from page 2 back to page 1
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleReplay = () => {
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen relative flex flex-col justify-between bg-romantic-gradient overflow-hidden text-[#442c22]">
      {/* Background Floating Magical Particles */}
      <FloatingParticles />

      {/* Floating Top Controls: Progress & Music */}
      <header className="relative z-50">
        <StoryProgressBar
          currentPage={currentPage}
          totalPages={7}
          onSelectPage={(page) => {
            // Only allow jumping forward if unlocked or backward
            if (page <= currentPage || hasUnlocked) {
              setCurrentPage(page);
            }
          }}
        />
        <MusicPlayer />
      </header>

      {/* Back Button (appears on page 3-6 so sister can revisit memories/letter easily) */}
      {currentPage > 2 && currentPage < 7 && (
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={handlePrevPage}
          className="fixed bottom-4 left-4 z-40 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 hover:bg-white text-xs font-medium text-[#7c5647] border border-[#f3ddd3] shadow-sm backdrop-blur-md transition-all cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Chapter</span>
        </motion.button>
      )}

      {/* Main Pages Transition Viewport */}
      <main className="flex-1 flex items-center justify-center py-16 sm:py-20 px-3 sm:px-6 relative z-10">
        <AnimatePresence mode="wait">
          {currentPage === 1 && (
            <motion.div key="page1" className="w-full">
              <Page1Welcome onNext={handleNextPage} />
            </motion.div>
          )}

          {currentPage === 2 && (
            <motion.div key="page2" className="w-full">
              <Page2Password onNext={handleNextPage} />
            </motion.div>
          )}

          {currentPage === 3 && (
            <motion.div key="page3" className="w-full">
              <Page3Suspense onNext={handleNextPage} />
            </motion.div>
          )}

          {currentPage === 4 && (
            <motion.div key="page4" className="w-full">
              <Page4Memories onNext={handleNextPage} />
            </motion.div>
          )}

          {currentPage === 5 && (
            <motion.div key="page5" className="w-full">
              <Page5Letter onNext={handleNextPage} />
            </motion.div>
          )}

          {currentPage === 6 && (
            <motion.div key="page6" className="w-full">
              <Page6Special onNext={handleNextPage} />
            </motion.div>
          )}

          {currentPage === 7 && (
            <motion.div key="page7" className="w-full">
              <Page7Celebration onReplay={handleReplay} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
