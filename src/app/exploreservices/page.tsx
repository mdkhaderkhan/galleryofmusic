'use client';

import { motion } from 'framer-motion';
import { Spotlight } from '../component/ui/Spotlight';
export default function ExploreServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
         <Spotlight className="top-[-24%] left-[-10%] right-[-40%]" fill="#00ffff" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Explore Our Services
        </h1>
        <p className="text-lg text-gray-300 mb-12">
          We offer a wide range of services to help you master music in every form. From beginner to advanced, our programs are tailored to suit your journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">1. Music Theory</h2>
            <p className="text-gray-400">
              Understand the fundamentals of music, scales, rhythm, harmony, and structure with interactive lessons.
            </p>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">2. Music Production</h2>
            <p className="text-gray-400">
              Learn DAWs, recording, mixing, mastering, and sound design from industry professionals.
            </p>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">3. Composition Coaching</h2>
            <p className="text-gray-400">
              Create original compositions with personalized feedback and structured guidance from mentors.
            </p>
          </motion.div>

          {/* Service Card 4 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">4. Live Performance Training</h2>
            <p className="text-gray-400">
              Get stage-ready with expert coaching on confidence, presence, and live arrangements.
            </p>
          </motion.div>

          {/* Service Card 5 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">5. Studio Access</h2>
            <p className="text-gray-400">
              Get access to our studio environment to practice and record with high-quality equipment.
            </p>
          </motion.div>

          {/* Service Card 6 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">6. Community & Mentorship</h2>
            <p className="text-gray-400">
              Join a network of musicians and mentors, participate in jam sessions, and grow together.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
