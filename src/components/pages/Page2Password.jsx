import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TeddyBear } from '../TeddyBear';
import { surpriseConfig } from '../../config/surpriseConfig';
import { Lock, Unlock, KeyRound, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Page2Password = ({ onNext }) => {
  const [pin, setPin] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [wrongCount, setWrongCount] = useState(0);

  const handleDigitClick = (digit) => {
    if (isUnlocked || pin.length >= 4) return;
    setErrorMsg('');
    const newPin = pin + digit;
    setPin(newPin);

    // Auto check if 4 digits entered
    if (newPin.length === 4) {
      validatePin(newPin);
    }
  };

  const handleBackspace = () => {
    if (isUnlocked || pin.length === 0) return;
    setErrorMsg('');
    setPin(pin.slice(0, -1));
  };

  const validatePin = (inputPin) => {
    const target = inputPin !== undefined ? inputPin : pin;

    if (target === surpriseConfig.security.correctPin) {
      // Success!
      setIsUnlocked(true);
      setErrorMsg('');

      // Confetti burst for unlock
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffd166', '#ff758c', '#a1c4fd'],
      });

      // Proceed to Page 3 after celebratory animation
      setTimeout(() => {
        onNext();
      }, 1300);
    } else {
      // Wrong pin
      setIsShaking(true);
      const messages = surpriseConfig.security.wrongMessages;
      const nextMsg = messages[wrongCount % messages.length];
      setErrorMsg(nextMsg);
      setWrongCount((prev) => prev + 1);

      setTimeout(() => {
        setIsShaking(false);
        setPin('');
      }, 600);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.04, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-xl mx-auto px-4 py-8 flex flex-col items-center text-center z-10"
    >
      {/* Decorative Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#fbd0db] text-rose-500 text-xs sm:text-sm font-medium shadow-sm mb-6">
        <Lock className="w-3.5 h-3.5 text-rose-400" />
        <span>Protected By Teddy's Magic Lock</span>
      </div>

      {/* Main Glass Card */}
      <div className="w-full glass-panel-deep rounded-3xl p-6 sm:p-10 shadow-glass border border-white/90 relative overflow-hidden">
        {/* Headings */}
        <div className="space-y-1 mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#442c22]">
            Oops! A Little Secret...
          </h2>
          <p className="text-sm sm:text-base text-[#7c5b4d]">
            Only someone special knows the secret password.
          </p>
        </div>

        {/* Teddy Bear & Padlock Interactive Area */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 my-4">
          {/* Cute Teddy with Secret Key */}
          <div className="relative">
            <TeddyBear
              variant="secret"
              size={140}
              interactive
              caption={isUnlocked ? 'Yay! Unlocked! 🎉' : 'Shhh... Secret! 🤫'}
            />
          </div>

          {/* Animated Lock Badge */}
          <motion.div
            animate={
              isUnlocked
                ? { scale: [1, 1.25, 1], rotate: [0, -10, 10, 0] }
                : { y: [0, -4, 0] }
            }
            transition={{ duration: 2, repeat: isUnlocked ? 0 : Infinity }}
            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shadow-md transition-colors duration-500 ${
              isUnlocked
                ? 'bg-emerald-100 border-2 border-emerald-300 text-emerald-600'
                : 'bg-rose-50 border-2 border-rose-200 text-rose-500'
            }`}
          >
            {isUnlocked ? (
              <Unlock className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" />
            ) : (
              <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-rose-500" />
            )}
          </motion.div>
        </div>

        {/* Animated Password Dots Display */}
        <motion.div
          animate={isShaking ? { x: [-12, 12, -8, 8, -4, 4, 0] } : {}}
          transition={{ duration: 0.5 }}
          className="my-5 flex items-center justify-center gap-3 sm:gap-4"
        >
          {[0, 1, 2, 3].map((index) => {
            const hasDigit = pin.length > index;
            return (
              <motion.div
                key={index}
                animate={hasDigit ? { scale: [0.8, 1.15, 1] } : {}}
                className={`w-12 h-14 sm:w-14 sm:h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 text-2xl font-bold ${
                  hasDigit
                    ? 'border-rose-400 bg-rose-50/90 text-rose-600 shadow-sm'
                    : 'border-[#ebd5cf] bg-white/70 text-transparent'
                }`}
              >
                {hasDigit ? (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-rose-500"
                  >
                    💖
                  </motion.span>
                ) : (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#d7beb7]" />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Error / Encouragement Speech Bubble */}
        <AnimatePresence>
          {errorMsg && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6 }}
              className="mb-4 p-3 bg-amber-50 border border-amber-200/90 rounded-2xl text-xs sm:text-sm text-amber-900 flex items-center justify-center gap-2 shadow-sm"
            >
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{errorMsg}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cute On-Screen Keypad for Easy Mobile/Touch Entry */}
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5 max-w-[260px] mx-auto my-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <motion.button
              key={num}
              onClick={() => handleDigitClick(num.toString())}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.92 }}
              disabled={isUnlocked}
              className="h-11 sm:h-12 rounded-xl bg-white/80 hover:bg-rose-50 border border-[#f0dad5] text-[#553b30] font-semibold text-base sm:text-lg shadow-sm transition-colors cursor-pointer"
            >
              {num}
            </motion.button>
          ))}
          <motion.button
            onClick={() => setPin('')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            disabled={isUnlocked}
            className="h-11 sm:h-12 rounded-xl bg-gray-50/70 border border-[#f0dad5] text-[#93756a] text-xs font-medium cursor-pointer"
          >
            Clear
          </motion.button>
          <motion.button
            onClick={() => handleDigitClick('0')}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            disabled={isUnlocked}
            className="h-11 sm:h-12 rounded-xl bg-white/80 hover:bg-rose-50 border border-[#f0dad5] text-[#553b30] font-semibold text-base sm:text-lg shadow-sm cursor-pointer"
          >
            0
          </motion.button>
          <motion.button
            onClick={handleBackspace}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            disabled={isUnlocked}
            className="h-11 sm:h-12 rounded-xl bg-rose-50/80 border border-[#f0dad5] text-rose-700 text-sm font-medium cursor-pointer"
          >
            ⌫
          </motion.button>
        </div>

        {/* Unlock Action Button */}
        <div className="mt-4">
          <motion.button
            onClick={() => validatePin()}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={isUnlocked || pin.length < 4}
            className={`w-full max-w-[260px] py-3 rounded-full font-semibold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md ${
              pin.length === 4 && !isUnlocked
                ? 'btn-primary text-white shadow-pink-300/40'
                : isUnlocked
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isUnlocked ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>Opening Gate...</span>
              </>
            ) : (
              <>
                <KeyRound className="w-4 h-4" />
                <span>Unlock The Secret ✨</span>
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
