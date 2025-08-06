"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { IconMusic } from "@tabler/icons-react";
import { BackgroundGradient } from "./ui/background-gradient"; // Update path if needed

const courseData = [
  {
    title: "Lo-Fi Beats Mastery",
    description: "Produce chill lo-fi tracks with smooth melodies and mellow vibes.",
  },
  {
    title: "Electronic Music Production",
    description: "Create synth-heavy tracks with cutting-edge DAWs and plugins.",
  },
  {
    title: "Hip-Hop Beat Making",
    description: "Craft hard-hitting beats and catchy hooks from scratch.",
  },
  {
    title: "Mixing & Mastering",
    description: "Get your tracks radio-ready with pro-level mixing techniques.",
  },
  {
    title: "Sound Design Basics",
    description: "Learn to design your own synths and effects from zero.",
  },
  {
    title: "Live Performance Setup",
    description: "Build your ideal live rig using Ableton and MIDI controllers.",
  },
];

export default function MusicCoursesPage() {
  const router = useRouter();

  return (
    <div className="bg-zinc-900 min-h-screen py-16 px-6">
      <h2 className="text-white text-3xl font-bold mb-12 text-center">
        Featured Music Courses
      </h2>

      <div className="flex justify-center mb-8">
        <BackgroundGradient className="rounded-[22px] max-w-sm w-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <h1 className="text-2xl font-bold text-white">Accernity Music</h1>
          <p className="text-sm text-gray-400 mt-2">
            Discover sound. Learn music production, mixing, beat making, and elevate your audio journey.
          </p>
        </BackgroundGradient>
      </div>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {courseData.map((course, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 hover:shadow-blue-500/40 transition duration-300"
          >
            <div className="flex justify-center mb-4">
              <IconMusic size={48} className="text-blue-400" />
            </div>
            <h3 className="text-white text-lg font-semibold mb-2 text-center">
              {course.title}
            </h3>
            <p className="text-gray-300 text-sm text-center">
              {course.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button
          onClick={() => router.push("/component/viewall")} // ✅ Must match the folder name
          className="bg-white text-black py-3 px-8 rounded-full text-sm font-semibold hover:bg-blue-200 transition"
        >
          View All
        </button>
      </div>
    </div>
  );
}
