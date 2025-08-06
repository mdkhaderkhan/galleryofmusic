'use client';

import { motion } from 'framer-motion';
import { Spotlight } from '../component/ui/Spotlight'; // Make sure this exists

export default function AdvanceCompositionPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
    
      <Spotlight className="top-[-30%] left-[-30%] w-[140%] h-[140%] opacity-30 blur-3xl" fill="#8a2be2" />

      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-purple-400 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: `${Math.random()}s`,
              opacity: 0.5 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6">
          Advanced Composition
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          Dive deep into the world of complex musical ideas and arrangements. This course is designed for experienced musicians and composers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-sm text-gray-400">
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 shadow-sm">
            <h2 className="text-lg font-semibold text-white mb-2">🎼 Orchestration & Arranging</h2>
            <p>Learn to write for full orchestra, ensembles, and bands. Understand voicing, dynamics, and blending techniques.</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 shadow-sm">
            <h2 className="text-lg font-semibold text-white mb-2">🎹 Advanced Harmony</h2>
            <p>Explore modal interchange, secondary dominants, extended chords, jazz harmony, and non-functional progressions.</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 shadow-sm">
            <h2 className="text-lg font-semibold text-white mb-2">🧠 Creative Composition</h2>
            <p>Develop a unique style, write across genres, use motivic development, and break conventional boundaries.</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 shadow-sm">
            <h2 className="text-lg font-semibold text-white mb-2">🎧 Score for Media</h2>
            <p>Write music for film, games, and ads. Learn thematic writing, timing to visuals, and mood control.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
