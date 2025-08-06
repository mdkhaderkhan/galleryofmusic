"use client";

import { motion } from "framer-motion";
import { Spotlight } from '../component/ui/Spotlight';

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
<Spotlight className="top-[-24%] left-[-10%] right-[-40%]" fill="#00ffff" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-4">All Courses</h1>
        <p className="text-gray-400 text-lg">
          Explore a variety of music-related courses to master your sound.
        </p>
      </motion.div>
    </div>
  );
}