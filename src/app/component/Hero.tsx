'use client';

import React from 'react';
import Link from 'next/link';
import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/moving-border';

function Hero() {
  return (
    <div className="h-screen">
      <section className="relative h-full bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-white flex items-center justify-center">
        <Spotlight className="top-[-24%] left-[-10%] right-[-40%]" fill="#00ffff" />

        <div className="text-center max-w-2xl px-4 pt-12 flex flex-col items-center gap-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold">
            Unleash Your Inner Musician
          </h1>

          <p className="text-lg text-zinc-300">
            Learn music theory, production, composition, and more from world-class instructors.
          </p>

          <Link href="/exploreservices">
            <Button
              borderRadius="1.75rem"
              className="bg-black text-white dark:text-white border-neutral-400 dark:border-slate-800"
            >
              Explore Services
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Hero;
