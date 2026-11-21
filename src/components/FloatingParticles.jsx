import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const FloatingParticles = () => {
  // Generate 22 calm, soft floating items (hearts, sparkles, stars, petals)
  const particles = useMemo(() => {
    const items = ['🌸', '✨', '💖', '🧸', '🌷', '⭐', '🎀', '🤍', '🍰'];
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      char: items[i % items.length],
      left: `${(i * 4.2 + (i % 5) * 3) % 96}%`,
      initialY: 105 + (i % 6) * 10,
      size: 14 + (i % 4) * 5,
      duration: 14 + (i % 7) * 3,
      delay: (i * 0.7) % 8,
      sway: 20 + (i % 5) * 10,
      opacity: 0.25 + (i % 3) * 0.15,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft ambient gradient overlay circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-pink-200/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-[32rem] h-[32rem] rounded-full bg-rose-100/35 blur-3xl pointer-events-none" />

      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute select-none will-change-transform"
          style={{
            left: p.left,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
          }}
          initial={{ y: '105vh', x: 0, rotate: 0 }}
          animate={{
            y: '-10vh',
            x: [0, p.sway, -p.sway, 0],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {p.char}
        </motion.div>
      ))}
    </div>
  );
};
