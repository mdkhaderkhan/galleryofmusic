'use client';

import { motion } from 'framer-motion';

import Link from 'next/link';

export default function About() {
  return (
    <div className="relative min-h-screen bg-zinc-900 text-white overflow-hidden">
    

      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-cyan-400 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 4}s`,
              animationDelay: `${Math.random()}s`,
              opacity: 0.5 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-white"
        >
          About Harmony Academy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-300 mt-8"
        >
          We’re not just another music school. We’re a movement to democratize music education and creativity.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-base text-gray-400 mt-6 leading-relaxed"
        >
          Whether you dream of composing cinematic scores, producing chart-topping tracks, or mastering your instrument, we’ve created a space where your creativity can thrive.
          Our instructors are active musicians, composers, and producers with a passion for teaching and innovation.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-base text-gray-400 mt-6 leading-relaxed"
        >
          Join a vibrant community. Collaborate, perform, and grow with peers around the world — all while guided by expert mentors and immersive content designed for the future of music learning.
        </motion.p>
      </motion.div>
       <div className="min-h-screen bg-zinc-900 text-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Join Our Community</h1>
        <p className="text-lg text-gray-300 mb-8">
          Become part of a creative, passionate group of musicians, producers, and educators.
        </p>
        <p className="text-gray-400 mb-6">
          Sign up to access exclusive workshops, live jam sessions, industry mentorship, and a personalized music learning path.
        </p>
        <Link href="/contact">
        <button className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300">
          Get Started
        </button>
        </Link>
      </motion.div>
    </div>
    </div>
    
  );
}
