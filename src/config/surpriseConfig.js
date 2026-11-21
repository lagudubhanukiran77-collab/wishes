/**
 * SURPRISE CONFIGURATION
 * -------------------------------------------------------------
 * Custom configuration dedicated to my sister.
 * All photographs loaded from `public/photos/`.
 */

export const surpriseConfig = {
  // Recipient details
  recipient: {
    nickname: "My Cutie",
    title: "My Dear Sister",
    birthdayDate: "November 21",
  },

  // Page 2 Security Pin
  security: {
    // Secret password (DO NOT display on screen)
    correctPin: "2111",
    maxAttempts: 5,
    hintText: "Teddy's Hint: Think of a very special date (21/11) 🌸🧸",
    wrongMessages: [
      "Teddy shook his head: 'Oopsie, that's not quite right! Try again, cutie!' 🧸💭",
      "Teddy scratches his fluffy ear: 'Almost! Think of a special calendar date (21/11)!' 🐾",
      "Teddy gives you a warm hug: 'Take your time! The secret code is waiting for you!' 💕",
      "Teddy whispers: 'Check the date that brought the brightest star into the world!' ✨",
    ],
  },

  // Page 3 Suspense sequence
  suspense: {
    title: "Wait... Something Special Is Coming!",
    messages: [
      { id: 1, text: "Someone very special was born on this day...", delay: 0 },
      { id: 2, text: "Someone who makes every moment beautiful...", delay: 2.2 },
      { id: 3, text: "And today is all about HER!", delay: 4.4 },
    ],
    buttonText: "Open Your Surprise ❤️",
  },

  // Page 4 Memories Photo Gallery - Using her real photographs
  memories: [
    {
      id: 1,
      title: "Poised & Confident",
      caption: "Standing with grace, confidence, and that lovely serene smile that lights up any room.",
      quote: "Your smile makes even ordinary days special.",
      image: "/photos/photo1_poised.jpg",
      tag: "Graceful Queen 👑✨",
    },
    {
      id: 2,
      title: "Dreamy & Elegant",
      caption: "Leaning with effortless charm, carrying that sweet, thoughtful gaze that brings joy to everyone.",
      quote: "Some people make life beautiful just by being in it. You are one of them.",
      image: "/photos/photo2_dreamy.jpg",
      tag: "Pure Charm 🕊️💖",
    },
    {
      id: 3,
      title: "Royal Stature",
      caption: "Looking like an absolute star in that flowing white gown, radiant from head to toe.",
      quote: "Every picture holds a memory, and every memory holds a little piece of happiness.",
      image: "/photos/photo3_grace.jpg",
      tag: "Starlight Elegance ⭐🤍",
    },
    {
      id: 4,
      title: "Fairytale Princess",
      caption: "Twirling with pure happiness, bringing fairytale magic everywhere you step.",
      quote: "Never stop smiling, dreaming, and being the wonderful person you are.",
      image: "/photos/photo4_princess.jpg",
      tag: "Fairytale Dream 🌷✨",
    },
    {
      id: 5,
      title: "Sweet Perfection",
      caption: "Pure warmth, gentle elegance, and that unforgettable radiant aura you carry every single day.",
      quote: "Side by side or miles apart, sisters will always be connected by heart.",
      image: "/photos/photo5_radiant.jpg",
      tag: "Heart of Gold 🧸💖",
    },
  ],

  // Page 5 Heartfelt Letter
  letter: {
    greeting: "Dearest Sister,",
    paragraphs: [
      "You are not just my sister; you are one of the most beautiful blessings in my life. Having you by my side has made every chapter of my life warmer, sweeter, and infinitely brighter.",
      "Watching you grow, smile, and touch the hearts of everyone around you is such an immense joy. Your kindness, your gentle laughter, and your resilience inspire me every single day.",
      "May your life always be filled with happiness, endless smiles, and beautiful memories. May every dream you hold in your heart take flight into reality.",
      "Never stop smiling, dreaming, and being the wonderful person you are. You deserve the world and everything magical in it.",
    ],
    closing: "With all my love and infinite hugs,",
    signature: "Your Loving Sibling 🧸💌",
  },

  // Page 6 Special Spotlight
  special: {
    title: "Today, Tomorrow & Always...",
    subtitle: "A Little Reminder of How Truly Wonderfully You Shine",
    featuredImage: "/photos/photo4_princess.jpg",
    secondaryImage: "/photos/photo1_poised.jpg",
    message:
      "May all your dreams come true. May you always find reasons to smile, strength to overcome every challenge, and happiness in every little moment. Keep shining, beautiful!",
    compliments: [
      "Most Loving Sister 💖",
      "Purest Heart 🌸",
      "Unstoppable Spirit ✨",
      "Cutest Smile Ever 🧸",
    ],
  },

  // Final Celebration Page
  celebration: {
    mainHeading: "HAPPY BIRTHDAY, MY DEAR SISTER! ❤️",
    finalMessage:
      "Happy Birthday to the most wonderful sister! May your life be as beautiful as your heart. Keep smiling, keep shining, and never forget how special you are. Lots of love! ❤️🧸",
    wishes: [
      "Endless Laughter & Joy 🎈",
      "A Year Full of Blessings 🌟",
      "Countless Sweet Moments 🍰",
      "All Your Dreams Realized 💫",
    ],
  },
};
