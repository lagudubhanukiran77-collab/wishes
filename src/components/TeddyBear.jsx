import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * High-fidelity, handcrafted SVG Teddy Bear illustration system.
 * Highly scalable, responsive, and beautifully styled with pastel themes.
 */

export const TeddyBear = ({
  variant = 'heart', // 'heart' | 'flowers' | 'gift' | 'letter' | 'secret' | 'balloons' | 'party' | 'baker' | 'pair'
  size = 200,
  className = '',
  animate = true,
  interactive = true,
  caption = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  const handleTap = () => {
    if (!interactive) return;
    setIsTapped(true);
    setTimeout(() => setIsTapped(false), 900);
  };

  return (
    <motion.div
      className={`relative inline-flex flex-col items-center justify-center select-none ${className}`}
      style={{ width: size, height: 'auto' }}
      whileHover={interactive ? { scale: 1.05 } : {}}
      animate={
        animate
          ? {
              y: [0, -6, 0],
              rotate: [0, 1.2, -1.2, 0],
            }
          : {}
      }
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      onClick={handleTap}
    >
      {/* Tapped Heart Reaction Burst */}
      {isTapped && (
        <motion.div
          initial={{ opacity: 1, scale: 0.5, y: 0 }}
          animate={{ opacity: 0, scale: 1.8, y: -45 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute -top-6 text-2xl pointer-events-none z-30"
        >
          💖🧸✨
        </motion.div>
      )}

      <svg
        viewBox="0 0 200 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-md filter transition-transform duration-300"
      >
        <defs>
          {/* Fur Gradient */}
          <linearGradient id="furGradient" x1="50" y1="20" x2="150" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e5b287" />
            <stop offset="0.5" stopColor="#cca076" />
            <stop offset="1" stopColor="#b47f52" />
          </linearGradient>

          {/* Fur Shadow Gradient */}
          <linearGradient id="furShadow" x1="100" y1="50" x2="100" y2="180" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a36e43" />
            <stop offset="1" stopColor="#8c5830" />
          </linearGradient>

          {/* Snout & Belly Gradient */}
          <linearGradient id="bellyGradient" x1="100" y1="110" x2="100" y2="180" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff3e3" />
            <stop offset="1" stopColor="#f5dfc6" />
          </linearGradient>

          {/* Inner Ear / Blush Pink */}
          <linearGradient id="softPink" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#ffb8cc" />
            <stop offset="1" stopColor="#f78fb3" />
          </linearGradient>

          {/* Golden Ribbon */}
          <linearGradient id="goldRibbon" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#ffeaa7" />
            <stop offset="1" stopColor="#fdcb6e" />
          </linearGradient>

          {/* Rose Pink Heart */}
          <linearGradient id="heartPink" x1="40" y1="40" x2="120" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ff9a9e" />
            <stop offset="1" stopColor="#fecfef" />
          </linearGradient>

          {/* Filter for glow */}
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- TEDDY BODY LAYER --- */}
        {/* Soft Ground Shadow */}
        <ellipse cx="100" cy="208" rx="65" ry="10" fill="rgba(196, 145, 120, 0.18)" />

        {/* Back Feet / Paws */}
        <g id="feet">
          {/* Left Foot */}
          <ellipse cx="64" cy="192" rx="22" ry="16" fill="url(#furGradient)" transform="rotate(-10 64 192)" />
          <ellipse cx="63" cy="192" rx="14" ry="10" fill="#fff1e0" transform="rotate(-10 63 192)" />
          <circle cx="58" cy="186" r="3" fill="#f8a5c2" />
          <circle cx="65" cy="184" r="3.2" fill="#f8a5c2" />
          <circle cx="72" cy="186" r="3" fill="#f8a5c2" />
          <circle cx="64" cy="194" r="5" fill="#f8a5c2" />

          {/* Right Foot */}
          <ellipse cx="136" cy="192" rx="22" ry="16" fill="url(#furGradient)" transform="rotate(10 136 192)" />
          <ellipse cx="137" cy="192" rx="14" ry="10" fill="#fff1e0" transform="rotate(10 137 192)" />
          <circle cx="128" cy="186" r="3" fill="#f8a5c2" />
          <circle cx="135" cy="184" r="3.2" fill="#f8a5c2" />
          <circle cx="142" cy="186" r="3" fill="#f8a5c2" />
          <circle cx="136" cy="194" r="5" fill="#f8a5c2" />
        </g>

        {/* Teddy Torso */}
        <ellipse cx="100" cy="148" rx="46" ry="48" fill="url(#furGradient)" />

        {/* Belly Patch with soft stitch line */}
        <ellipse cx="100" cy="154" rx="30" ry="32" fill="url(#bellyGradient)" />
        {/* Stitch mark on tummy */}
        <path d="M 97 148 L 103 154 M 103 148 L 97 154" stroke="#cfa67f" strokeWidth="1.5" strokeLinecap="round" />

        {/* --- EARS --- */}
        {/* Left Ear */}
        <circle cx="56" cy="48" r="22" fill="url(#furGradient)" />
        <circle cx="56" cy="48" r="13" fill="url(#softPink)" opacity="0.85" />
        {/* Right Ear */}
        <circle cx="144" cy="48" r="22" fill="url(#furGradient)" />
        <circle cx="144" cy="48" r="13" fill="url(#softPink)" opacity="0.85" />

        {/* --- HEAD --- */}
        <circle cx="100" cy="82" r="48" fill="url(#furGradient)" />

        {/* Cute Head Silhouette Soft Highlight */}
        <ellipse cx="100" cy="50" rx="25" ry="12" fill="#fff" opacity="0.12" />

        {/* Snout */}
        <ellipse cx="100" cy="94" rx="22" ry="17" fill="url(#bellyGradient)" />

        {/* Heart-Shaped Stitched Nose */}
        <path
          d="M 100 86 C 96 82, 91 85, 93 90 C 95 94, 100 98, 100 98 C 100 98, 105 94, 107 90 C 109 85, 104 82, 100 86 Z"
          fill="#543729"
        />
        {/* Nose Highlight */}
        <circle cx="98" cy="87" r="1.5" fill="#fff" opacity="0.8" />

        {/* Stitched Mouth */}
        <path d="M 100 98 L 100 102" stroke="#543729" strokeWidth="1.8" strokeLinecap="round" />
        <path
          d="M 94 102 C 97 105, 100 104, 100 102 C 100 104, 103 105, 106 102"
          stroke="#543729"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Sparkling Eyes */}
        <g id="eyes">
          {/* Left Eye */}
          <ellipse cx="78" cy="76" rx="6.5" ry="7.5" fill="#2d1c13" />
          <circle cx="76" cy="73" r="2.6" fill="#ffffff" />
          <circle cx="80" cy="78" r="1.2" fill="#ffffff" />

          {/* Right Eye */}
          <ellipse cx="122" cy="76" rx="6.5" ry="7.5" fill="#2d1c13" />
          <circle cx="120" cy="73" r="2.6" fill="#ffffff" />
          <circle cx="124" cy="78" r="1.2" fill="#ffffff" />

          {/* Eyebrows */}
          <path d="M 73 66 C 76 64, 82 65, 84 67" stroke="#684735" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M 116 67 C 118 65, 124 64, 127 66" stroke="#684735" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </g>

        {/* Rosy Blushing Cheeks */}
        <ellipse cx="66" cy="91" rx="9" ry="6" fill="#ff708f" opacity="0.5" filter="url(#softGlow)" />
        <ellipse cx="134" cy="91" rx="9" ry="6" fill="#ff708f" opacity="0.5" filter="url(#softGlow)" />
        {/* Cute blush sparkles */}
        <circle cx="64" cy="89" r="1.2" fill="#fff" opacity="0.8" />
        <circle cx="136" cy="89" r="1.2" fill="#fff" opacity="0.8" />

        {/* Satin Bowtie */}
        <g id="bowtie" transform="translate(100, 122)">
          {/* Left Bow */}
          <path d="M 0 0 C -14 -10, -18 8, 0 4 Z" fill="url(#softPink)" stroke="#ff7597" strokeWidth="0.8" />
          {/* Right Bow */}
          <path d="M 0 0 C 14 -10, 18 8, 0 4 Z" fill="url(#softPink)" stroke="#ff7597" strokeWidth="0.8" />
          {/* Bow knot */}
          <ellipse cx="0" cy="2" rx="4.5" ry="4" fill="#ff4d79" />
          <circle cx="0" cy="2" r="1.5" fill="#fff" opacity="0.7" />
          {/* Ribbon tails */}
          <path d="M -2 4 C -6 12, -10 16, -11 18 L -6 16 L -2 6" fill="#f78fb3" />
          <path d="M 2 4 C 6 12, 10 16, 11 18 L 6 16 L 2 6" fill="#f78fb3" />
        </g>

        {/* --- VARIANT ACCESSORIES & ARMS --- */}

        {/* Variant: HEART */}
        {variant === 'heart' && (
          <g id="accessory-heart">
            {/* Glowing 3D Heart */}
            <path
              d="M 100 135 C 80 110, 60 128, 75 150 C 85 165, 100 178, 100 178 C 100 178, 115 165, 125 150 C 140 128, 120 110, 100 135 Z"
              fill="url(#heartPink)"
              stroke="#ff7597"
              strokeWidth="2"
              filter="url(#softGlow)"
            />
            {/* Heart highlight shine */}
            <path
              d="M 76 132 C 70 140, 72 148, 76 153"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.8"
              fill="none"
            />
            {/* Cute Sparkle on Heart */}
            <circle cx="88" cy="138" r="1.5" fill="#fff" />
            <circle cx="112" cy="144" r="1.2" fill="#fff" />

            {/* Paws holding the heart */}
            <ellipse cx="66" cy="146" rx="14" ry="11" fill="url(#furGradient)" transform="rotate(25 66 146)" />
            <circle cx="68" cy="146" r="4.5" fill="#f8a5c2" />

            <ellipse cx="134" cy="146" rx="14" ry="11" fill="url(#furGradient)" transform="rotate(-25 134 146)" />
            <circle cx="132" cy="146" r="4.5" fill="#f8a5c2" />
          </g>
        )}

        {/* Variant: FLOWERS */}
        {variant === 'flowers' && (
          <g id="accessory-flowers">
            {/* Flower Stems & Leaves */}
            <path d="M 95 140 Q 92 165 94 175" stroke="#78a876" strokeWidth="3" strokeLinecap="round" />
            <path d="M 105 140 Q 108 165 106 175" stroke="#78a876" strokeWidth="3" strokeLinecap="round" />
            <path d="M 100 138 L 100 175" stroke="#689866" strokeWidth="3" strokeLinecap="round" />

            {/* Bouquet Wrap */}
            <polygon points="85,152 115,152 108,180 92,180" fill="#fff6e8" stroke="#eed4be" strokeWidth="1.5" />
            <path d="M 88 162 L 112 162" stroke="#f78fb3" strokeWidth="2.5" />

            {/* Roses & Daisies */}
            {/* Center Rose */}
            <circle cx="100" cy="140" r="12" fill="#ff708f" />
            <path d="M 96 137 C 98 134, 102 134, 104 137 C 105 141, 100 144, 96 141" fill="#ff4d79" />

            {/* Left Daisy */}
            <circle cx="86" cy="145" r="9" fill="#ffccdb" />
            <circle cx="86" cy="145" r="4" fill="#ffd166" />

            {/* Right Daisy */}
            <circle cx="114" cy="145" r="9" fill="#ffccdb" />
            <circle cx="114" cy="145" r="4" fill="#ffd166" />

            {/* Paws Holding Bouquet */}
            <ellipse cx="78" cy="158" rx="12" ry="9" fill="url(#furGradient)" transform="rotate(20 78 158)" />
            <ellipse cx="122" cy="158" rx="12" ry="9" fill="url(#furGradient)" transform="rotate(-20 122 158)" />
          </g>
        )}

        {/* Variant: GIFT BOX */}
        {variant === 'gift' && (
          <g id="accessory-gift">
            {/* Gift Box Body */}
            <rect x="74" y="132" width="52" height="46" rx="6" fill="#ffe4ea" stroke="#f78fb3" strokeWidth="2" />
            {/* Gift Box Lid */}
            <rect x="70" y="127" width="60" height="11" rx="4" fill="#ffb8cc" stroke="#f78fb3" strokeWidth="2" />

            {/* Gold Ribbon Vertical */}
            <rect x="96" y="127" width="8" height="51" fill="url(#goldRibbon)" />
            {/* Gold Ribbon Horizontal */}
            <rect x="74" y="150" width="52" height="8" fill="url(#goldRibbon)" />

            {/* Big Shiny Bow on Lid */}
            <ellipse cx="94" cy="123" rx="8" ry="5" fill="#feca57" transform="rotate(-25 94 123)" />
            <ellipse cx="106" cy="123" rx="8" ry="5" fill="#feca57" transform="rotate(25 106 123)" />
            <circle cx="100" cy="124" r="3.5" fill="#e67e22" />

            {/* Paws Peeking over / holding Gift */}
            <ellipse cx="70" cy="148" rx="12" ry="10" fill="url(#furGradient)" transform="rotate(15 70 148)" />
            <circle cx="71" cy="148" r="4" fill="#f8a5c2" />

            <ellipse cx="130" cy="148" rx="12" ry="10" fill="url(#furGradient)" transform="rotate(-15 130 148)" />
            <circle cx="129" cy="148" r="4" fill="#f8a5c2" />
          </g>
        )}

        {/* Variant: SECRET / DETECTIVE */}
        {variant === 'secret' && (
          <g id="accessory-secret">
            {/* Cute Golden Key */}
            <circle cx="128" cy="144" r="8" fill="#ffd166" stroke="#f39c12" strokeWidth="2" />
            <circle cx="128" cy="144" r="4" fill="#fff" />
            <rect x="126" y="151" width="4" height="22" rx="2" fill="#ffd166" stroke="#f39c12" strokeWidth="1.5" />
            <rect x="122" y="166" width="6" height="3" fill="#f39c12" />
            <rect x="122" y="160" width="5" height="3" fill="#f39c12" />

            {/* Paw holding golden key */}
            <ellipse cx="128" cy="148" rx="12" ry="10" fill="url(#furGradient)" />
            <circle cx="128" cy="148" r="4" fill="#f8a5c2" />

            {/* Left Paw touching mouth in 'shhh / secret' gesture */}
            <ellipse cx="94" cy="106" rx="11" ry="9" fill="url(#furGradient)" transform="rotate(25 94 106)" />
            <circle cx="94" cy="106" r="3.5" fill="#f8a5c2" />

            {/* Cute wink / sparkle near ear */}
            <path d="M 148 30 L 150 24 L 152 30 L 158 32 L 152 34 L 150 40 L 148 34 L 142 32 Z" fill="#ffd166" />
          </g>
        )}

        {/* Variant: LETTER / ENVELOPE */}
        {variant === 'letter' && (
          <g id="accessory-letter">
            {/* Envelope */}
            <rect x="70" y="134" width="60" height="40" rx="5" fill="#fffdf9" stroke="#e8d5c4" strokeWidth="1.8" />
            {/* Envelope Flap Lines */}
            <path d="M 70 134 L 100 156 L 130 134" stroke="#e8d5c4" strokeWidth="1.8" fill="none" />
            <path d="M 70 174 L 92 150" stroke="#f0e2d3" strokeWidth="1.5" />
            <path d="M 130 174 L 108 150" stroke="#f0e2d3" strokeWidth="1.5" />

            {/* Wax Seal Heart */}
            <circle cx="100" cy="155" r="7" fill="#e74c3c" />
            <path
              d="M 100 152 C 98 150, 96 151, 97 153 C 98 155, 100 157, 100 157 C 100 157, 102 155, 103 153 C 104 151, 102 150, 100 152 Z"
              fill="#fff"
            />

            {/* Paws holding letter */}
            <ellipse cx="68" cy="150" rx="11" ry="9" fill="url(#furGradient)" />
            <circle cx="68" cy="150" r="3.5" fill="#f8a5c2" />

            <ellipse cx="132" cy="150" rx="11" ry="9" fill="url(#furGradient)" />
            <circle cx="132" cy="150" r="3.5" fill="#f8a5c2" />
          </g>
        )}

        {/* Variant: BALLOONS */}
        {variant === 'balloons' && (
          <g id="accessory-balloons">
            {/* Strings */}
            <path d="M 68 135 Q 55 90 40 45" stroke="#d5b59a" strokeWidth="1.5" fill="none" />
            <path d="M 70 135 Q 65 80 62 35" stroke="#d5b59a" strokeWidth="1.5" fill="none" />
            <path d="M 72 135 Q 85 85 92 38" stroke="#d5b59a" strokeWidth="1.5" fill="none" />

            {/* Left Pink Balloon */}
            <ellipse cx="38" cy="35" rx="16" ry="20" fill="#ffccd5" stroke="#ff99aa" strokeWidth="1" />
            <polygon points="36,55 40,55 38,58" fill="#ff99aa" />
            <ellipse cx="34" cy="27" rx="3" ry="6" fill="#fff" opacity="0.6" />

            {/* Center Golden Balloon */}
            <ellipse cx="62" cy="24" rx="17" ry="21" fill="#ffe5b4" stroke="#ffcc80" strokeWidth="1" />
            <polygon points="60,45 64,45 62,48" fill="#ffcc80" />
            <ellipse cx="58" cy="17" rx="3.5" ry="7" fill="#fff" opacity="0.6" />

            {/* Right Lavender Balloon */}
            <ellipse cx="94" cy="28" rx="15" ry="19" fill="#e8d7ff" stroke="#cbb2fe" strokeWidth="1" />
            <polygon points="92,47 96,47 94,50" fill="#cbb2fe" />
            <ellipse cx="90" cy="21" rx="3" ry="6" fill="#fff" opacity="0.6" />

            {/* Arm holding balloon strings */}
            <ellipse cx="70" cy="138" rx="13" ry="10" fill="url(#furGradient)" transform="rotate(-20 70 138)" />
            <circle cx="70" cy="138" r="4" fill="#f8a5c2" />

            {/* Other Paw waving happily */}
            <ellipse cx="140" cy="120" rx="13" ry="10" fill="url(#furGradient)" transform="rotate(-40 140 120)" />
            <circle cx="140" cy="120" r="4.2" fill="#f8a5c2" />
          </g>
        )}

        {/* Variant: PARTY / CELEBRATION */}
        {variant === 'party' && (
          <g id="accessory-party">
            {/* Birthday Cone Hat */}
            <polygon points="100,10 82,52 118,52" fill="#ff85a1" stroke="#ff5c8a" strokeWidth="1.5" />
            {/* Hat Stripes */}
            <path d="M 86 42 Q 100 44 114 42" stroke="#ffeaa7" strokeWidth="3" fill="none" />
            <path d="M 91 30 Q 100 32 109 30" stroke="#74b9ff" strokeWidth="3" fill="none" />
            {/* Fluffy Pom-Pom on Top */}
            <circle cx="100" cy="9" r="6" fill="#ffd166" />

            {/* Both Paws Up in Celebration! */}
            <ellipse cx="56" cy="115" rx="14" ry="10" fill="url(#furGradient)" transform="rotate(-45 56 115)" />
            <circle cx="56" cy="115" r="4" fill="#f8a5c2" />

            <ellipse cx="144" cy="115" rx="14" ry="10" fill="url(#furGradient)" transform="rotate(45 144 115)" />
            <circle cx="144" cy="115" r="4" fill="#f8a5c2" />

            {/* Party Poppers Confetti Sprinkles */}
            <circle cx="45" cy="95" r="3" fill="#ff7675" />
            <rect x="145" y="90" width="5" height="5" rx="1" fill="#fdcb6e" transform="rotate(25 145 90)" />
            <circle cx="155" cy="105" r="2.5" fill="#a29bfe" />
            <circle cx="38" cy="112" r="2.5" fill="#00cec9" />
          </g>
        )}

        {/* Variant: BAKER / CHEF */}
        {variant === 'baker' && (
          <g id="accessory-baker">
            {/* Chef Hat */}
            <path
              d="M 82 48 C 70 40, 75 20, 88 22 C 92 12, 108 12, 112 22 C 125 20, 130 40, 118 48 Z"
              fill="#ffffff"
              stroke="#e2d6c9"
              strokeWidth="2"
            />
            <rect x="83" y="44" width="34" height="10" rx="3" fill="#ffffff" stroke="#e2d6c9" strokeWidth="1.8" />
            <circle cx="100" cy="49" r="2" fill="#ff85a1" />

            {/* Paws Ready to Clap */}
            <ellipse cx="78" cy="146" rx="13" ry="10" fill="url(#furGradient)" transform="rotate(20 78 146)" />
            <circle cx="78" cy="146" r="4" fill="#f8a5c2" />

            <ellipse cx="122" cy="146" rx="13" ry="10" fill="url(#furGradient)" transform="rotate(-20 122 146)" />
            <circle cx="122" cy="146" r="4" fill="#f8a5c2" />
          </g>
        )}
      </svg>

      {/* Caption badge */}
      {caption && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-3 py-1 bg-white/80 backdrop-blur-md border border-[#f8d7da]/60 rounded-full text-xs font-medium text-[#7a4b3a] shadow-sm tracking-wide"
        >
          {caption}
        </motion.div>
      )}
    </motion.div>
  );
};
