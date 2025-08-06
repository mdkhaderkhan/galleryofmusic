'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-gray-300 mb-8">
          At Harmony Academy, we believe music is for everyone. Whether you're a beginner or a pro, our mission is to guide you through every step of your musical journey.
        </p>
        <p className="text-gray-400">
          Founded by passionate musicians and educators, we focus on practical, real-world skills — from mastering instruments and composition to production and live performance. 
          With world-class instructors, cutting-edge tools, and a supportive community, we’re here to help you unleash your full potential.
        </p>
      </motion.div>
    </div>
  );
}
