import React from "react";
import { BadgeCheck, Globe2, Users, Timer, Target, Sparkles } from "lucide-react";

import coachImg from "../src/assets/coachprofile2.jpeg";

export default function MeetCoachKush() {
  return (
    <section className="relative bg-white py-12 sm:py-16 overflow-hidden">
      {/* soft blue accents (white + blue theme) */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-0 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Meet Your Coach <span className="text-sky-700">Kush Rathor</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600">
            From Confusion to Clarity —{" "}
            <span className="font-semibold text-gray-800">
              I Didn’t Just Study Fitness, I Lived the Struggle.
            </span>
          </p>
        </div>

        {/* Main layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* LEFT: Photo card */}
          <div className="lg:col-span-5">
            <div className="relative h-full rounded-3xl border border-sky-200 bg-white p-3 sm:p-4 shadow-sm">
              <div className="relative overflow-hidden rounded-2xl border border-sky-200 bg-sky-50">
                <div className="aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]">
                  <img
                    src={coachImg}
                    alt="Coach Kush Rathor"
                    // ✅ FIX: avoid cutting head by using contain + top alignment
                    className="h-full w-full object-contain object-top"
                    loading="lazy"
                  />
                </div>

                {/* darker overlay ONLY on the photo */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                {/* Top tags */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full bg-black/55 backdrop-blur px-3 py-1.5 border border-white/20 shadow-sm">
                    <BadgeCheck className="h-4 w-4 text-sky-300" />
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      ISSA Certified Coach
                    </span>
                  </div>

                  <div className="hidden sm:inline-flex items-center gap-2 rounded-full bg-yellow-300 px-3 py-1.5 border border-yellow-200 shadow-sm">
                    <Sparkles className="h-4 w-4 text-black" />
                    <span className="text-xs sm:text-sm font-semibold text-black">
                      FitDad System
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-lg sm:text-xl font-extrabold text-gray-900">
                  Kush Rathor
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Fitness Coach &amp; Nutritionist
                </p>

                {/* stats */}
                <div className="mt-4">
                  <div className="grid grid-cols-2 gap-2 rounded-2xl bg-black/60 backdrop-blur border border-white/15 p-3 shadow-sm text-left">
                    <MiniStatOverlay
                      icon={<Users className="h-4 w-4" />}
                      label="1200+ Transformations"
                    />
                    <MiniStatOverlay
                      icon={<Timer className="h-4 w-4" />}
                      label="8+ Years Coaching"
                    />
                    <MiniStatOverlay
                      icon={<Target className="h-4 w-4" />}
                      label="Specialised in coaching Busy dads and parents"
                    />
                    <MiniStatOverlay
                      icon={<Globe2 className="h-4 w-4" />}
                      label="Clients across 8+ countries"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Story + Expertise */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-3xl border border-sky-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="rounded-2xl border border-sky-200 bg-sky-100/100 p-4 sm:p-5">
                <p className="text-sm font-semibold tracking-[0.18em] uppercase text-sky-800">
                  The story
                </p>

                {/* ✅ UPDATED STORY (short + relevant, Fit Dad angle) */}
                <div className="mt-3 space-y-3 text-gray-800 leading-relaxed">
                  <p>
                    In the corporate world, I kept seeing the same pattern — most people
                    over 30 (especially parents) were struggling with weight, even after
                    trying diets, workouts, and trainers.
                  </p>

                  <p>
                    The problem wasn’t knowledge. It was life: long hours, kids, travel,
                    stress — and{" "}
                    <span className="font-semibold text-black">
                      no structure or daily accountability.
                    </span>
                  </p>

                  <p>
                    That’s why I built the{" "}
                    <span className="font-semibold text-black">Fit Dad Program</span> —
                    simple nutrition, short realistic workouts, and daily check-ins that
                    keep busy dads consistent even on bad days.
                  </p>

                  <p>
                    Because when structure + accountability are in place,{" "}
                    <span className="font-semibold text-black">
                      results stop being accidental — they become inevitable.
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-7">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h4 className="text-sm font-semibold tracking-[0.22em] uppercase text-sky-700">
                    Expertise &amp; Experience
                  </h4>
                  <span className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-black">
                    Built for busy parents
                  </span>
                </div>

                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Bullet>ISSA Certified Fitness Coach &amp; Nutritionist</Bullet>
                  <Bullet>8+ years of online coaching experience</Bullet>
                  <Bullet>1200+ successful client transformations</Bullet>
                  <Bullet>Specialised in coaching Busy dads &amp; parents</Bullet>
                  <Bullet>Clients across 8+ countries</Bullet>
                </ul>
              </div>

              <div className="mt-7 rounded-2xl border border-sky-200 bg-sky-50 p-4">
                <p className="text-sm sm:text-base font-extrabold text-gray-900">
                  No extremes. No guesswork.
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  Just a simple system you can follow alongside work + family — and actually sustain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStatOverlay({ icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-2.5 py-2">
      <span className="text-sky-300">{icon}</span>
      <span className="text-xs font-semibold text-white/95 leading-snug">
        {label}
      </span>
    </div>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-2 rounded-2xl border border-sky-200 bg-white px-3 py-3">
      <span className="mt-1.5 h-2 w-2 rounded-full bg-sky-600 shrink-0" />
      <span className="text-sm sm:text-base text-gray-700 leading-snug">
        {children}
      </span>
    </li>
  );
}
