"use client";

import React, { useState } from "react";
import { IconMusic } from "@tabler/icons-react";
import { motion } from "framer-motion";

const courseData = [
  {
    title: "Lo-Fi Beats Mastery",
    description: "Produce chill lo-fi tracks with smooth melodies and mellow vibes.",
    genre: "Lo-Fi",
  },
  {
    title: "Electronic Music Production",
    description: "Create synth-heavy tracks with cutting-edge DAWs and plugins.",
    genre: "EDM",
  },
  {
    title: "Hip-Hop Beat Making",
    description: "Craft hard-hitting beats and catchy hooks from scratch.",
    genre: "Hip-Hop",
  },
  {
    title: "Mixing & Mastering",
    description: "Get your tracks radio-ready with pro-level mixing techniques.",
    genre: "General",
  },
  {
    title: "Sound Design Basics",
    description: "Learn to design your own synths and effects from zero.",
    genre: "EDM",
  },
  {
    title: "Live Performance Setup",
    description: "Build your ideal live rig using Ableton and MIDI controllers.",
    genre: "General",
  },
  {
    title: "Sampling Essentials",
    description: "Master the art of crate-digging and creative sampling.",
    genre: "Hip-Hop",
  },
  {
    title: "Vocal Processing",
    description: "Learn how to record and polish vocals for any genre.",
    genre: "General",
  },
  {
    title: "Music Business 101",
    description: "Understand contracts, royalties, and branding for artists.",
    genre: "General",
  },
  {
    title: "Ambient Soundscapes",
    description: "Create deep ambient textures for meditation and film.",
    genre: "Lo-Fi",
  },
  {
    title: "Trap Production Techniques",
    description: "Make aggressive trap beats with 808s and hi-hats.",
    genre: "Hip-Hop",
  },
  {
    title: "Future Bass Fundamentals",
    description: "Design lush chords and energetic drops.",
    genre: "EDM",
  },
  {
    title: "Field Recording & Foley",
    description: "Capture natural sounds and use them creatively.",
    genre: "General",
  },
  {
    title: "Drum Programming",
    description: "Master groove, rhythm, and drum patterns.",
    genre: "General",
  },
  {
    title: "Advanced EQ & Compression",
    description: "Shape your mix with precision.",
    genre: "General",
  },
  {
    title: "Chillhop Creation",
    description: "Merge jazzy samples and lo-fi grooves.",
    genre: "Lo-Fi",
  },
];

const genres = ["All", "Lo-Fi", "Hip-Hop", "EDM", "General"];

export default function Page() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredCourses =
    selectedGenre === "All"
      ? courseData
      : courseData.filter((course) => course.genre === selectedGenre);

  return (
    <div className="bg-black min-h-screen px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-4xl font-bold text-center mb-8">
          All Music Courses
        </h1>

        {/* Filter Dropdown */}
        <div className="flex justify-center mb-10">
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="bg-zinc-900 border border-zinc-700 text-white px-4 py-2 rounded-full focus:outline-none"
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        {/* Course Cards */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-purple-500/40 transition"
            >
              <div className="flex justify-center mb-4">
                <IconMusic size={48} className="text-purple-400" />
              </div>
              <h2 className="text-white text-lg font-semibold text-center mb-2">
                {course.title}
              </h2>
              <p className="text-gray-300 text-sm text-center">{course.description}</p>
              <p className="text-xs text-purple-400 text-center mt-2">{course.genre}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

