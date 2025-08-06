'use client';

import { motion } from 'framer-motion';
import { Spotlight } from '../component/ui/Spotlight';

export default function BasicTheoryPage() {
  return (
    <div className="relative min-h-screen bg-black text-white px-6 py-16 overflow-hidden">
<Spotlight className="top-[-24%] left-[-10%] right-[-40%]" fill="#00ffff" />
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ y: 0 }}
        animate={{ y: -100 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Music_notes.svg/800px-Music_notes.svg.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: 'contain',
          opacity: 0.04,
        }}
      />

      {/* 🎓 Page Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h1 className=" mt-29 text-4xl font-bold mb-4 text-purple-400">
          Basic Music Theory
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          Dive into the essential building blocks of music: scales, intervals, chords,
          rhythm, and notation. This course is perfect for beginners ready to understand
          the language of music.
        </p>

        <motion.div
          className="space-y-6 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
        >
          {[
            {
              title: "🎼 Scales & Intervals",
              desc: "Understand how musical scales are formed, including major, minor, and modal scales. Learn to identify and use intervals in melodies.",
            },
            {
              title: "🎹 Chords & Harmony",
              desc: "Learn how chords are constructed and how to build chord progressions that sound great together.",
            },
            {
              title: "🕐 Rhythm & Meter",
              desc: "Master timing, beat division, and time signatures to play in rhythm and read rhythmic notation.",
            },
            {
              title: "📖 Notation & Reading",
              desc: "Develop your ability to read music notes, symbols, and dynamics used in sheet music.",
            },
          ].map((section, idx) => (
            <motion.div
              key={idx}
              className="bg-zinc-900/70 p-6 rounded-xl shadow-xl"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-semibold text-purple-300 mb-2">
                {section.title}
              </h2>
              <p className="text-gray-300">{section.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

