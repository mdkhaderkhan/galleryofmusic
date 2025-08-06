"use client";

import { motion } from "framer-motion";
import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 mt-12">
      <div className="max-w-4xl mx-auto">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Get in Touch
        </motion.h1>

        {/* Floating Animation Text */}
        <motion.p
          className="text-center text-purple-400 mb-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          We're here to help you make music magic.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid gap-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-zinc-900 border border-zinc-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-zinc-900 border border-zinc-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="bg-zinc-900 border border-zinc-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <textarea
            rows={6}
            placeholder="Your Message"
            className="bg-zinc-900 border border-zinc-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-purple-600 hover:bg-purple-700 transition text-white font-semibold py-3 px-6 rounded-lg shadow-md"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Optional: Floating animated emoji or icon */}
        <motion.div
          className="text-3xl text-center mt-16"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          ✉️
        </motion.div>
      </div>
    </div>
  );
}
