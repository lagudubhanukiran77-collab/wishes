import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion } from 'framer-motion';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);

  // Gentle music-box Happy Birthday notes & frequencies
  const melody = [
    // Note, duration in seconds
    { freq: 261.63, dur: 0.35 }, // C4
    { freq: 261.63, dur: 0.35 }, // C4
    { freq: 293.66, dur: 0.7 },  // D4
    { freq: 261.63, dur: 0.7 },  // C4
    { freq: 349.23, dur: 0.7 },  // F4
    { freq: 329.63, dur: 1.2 },  // E4

    { freq: 261.63, dur: 0.35 }, // C4
    { freq: 261.63, dur: 0.35 }, // C4
    { freq: 293.66, dur: 0.7 },  // D4
    { freq: 261.63, dur: 0.7 },  // C4
    { freq: 392.00, dur: 0.7 },  // G4
    { freq: 349.23, dur: 1.2 },  // F4

    { freq: 261.63, dur: 0.35 }, // C4
    { freq: 261.63, dur: 0.35 }, // C4
    { freq: 523.25, dur: 0.7 },  // C5
    { freq: 440.00, dur: 0.7 },  // A4
    { freq: 349.23, dur: 0.7 },  // F4
    { freq: 329.63, dur: 0.7 },  // E4
    { freq: 293.66, dur: 1.2 },  // D4

    { freq: 466.16, dur: 0.35 }, // Bb4
    { freq: 466.16, dur: 0.35 }, // Bb4
    { freq: 440.00, dur: 0.7 },  // A4
    { freq: 349.23, dur: 0.7 },  // F4
    { freq: 392.00, dur: 0.7 },  // G4
    { freq: 349.23, dur: 1.5 },  // F4
  ];

  const playNote = (ctx, freq, duration) => {
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Music box bell harmonic (triangle + lowpass filter)
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, ctx.currentTime);

      // Soft envelope for music-box bell effect
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration * 0.95);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Fallback
    }
  };

  const startMusicLoop = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      let noteIdx = 0;
      const playStep = () => {
        if (!audioCtxRef.current) return;
        const currentNote = melody[noteIdx];
        playNote(audioCtxRef.current, currentNote.freq, currentNote.dur);

        noteIdx = (noteIdx + 1) % melody.length;
        // Schedule next note with a small peaceful pause
        const nextDelay = currentNote.dur * 1000 + (noteIdx === 0 ? 1200 : 80);
        timerRef.current = setTimeout(playStep, nextDelay);
      };

      playStep();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const stopMusic = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusicLoop();
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <motion.button
      onClick={toggleMusic}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-3.5 py-2 rounded-full backdrop-blur-md border shadow-md transition-all duration-300 text-xs sm:text-sm font-medium ${
        isPlaying
          ? 'bg-rose-50/90 border-rose-300/80 text-rose-700 shadow-rose-200/50'
          : 'bg-white/80 border-[#ecd3cf] text-[#805545] hover:bg-white'
      }`}
      title={isPlaying ? 'Pause music' : 'Play peaceful birthday melody'}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-4 h-4 text-rose-500 animate-pulse" />
          <span className="hidden sm:inline">Melody Playing</span>
          <span className="flex gap-0.5 items-end h-3">
            <span className="w-0.5 h-full bg-rose-400 rounded animate-bounce" />
            <span className="w-0.5 h-2/3 bg-rose-400 rounded animate-bounce [animation-delay:0.15s]" />
            <span className="w-0.5 h-4/5 bg-rose-400 rounded animate-bounce [animation-delay:0.3s]" />
          </span>
        </>
      ) : (
        <>
          <Music className="w-4 h-4 text-[#a87460]" />
          <span>Play Melody</span>
        </>
      )}
    </motion.button>
  );
};
