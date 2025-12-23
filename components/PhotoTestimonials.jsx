// PhotoTestimonials.jsx
import React from "react";
import { Quote } from "lucide-react";

import t1 from "../src/assets/Image Testimonials/1.png";
import t2 from "../src/assets/Image Testimonials/2.png";
import t3 from "../src/assets/Image Testimonials/3.jpeg";
import t4 from "../src/assets/Image Testimonials/4.jpeg";
import t5 from "../src/assets/Image Testimonials/5.jpeg";
import t6 from "../src/assets/Image Testimonials/6.jpeg";
import t7 from "../src/assets/Image Testimonials/7.png";
import t8 from "../src/assets/Image Testimonials/8.png";
import t9 from "../src/assets/Image Testimonials/9.png";
import t10 from "../src/assets/Image Testimonials/10.png";
import t11 from "../src/assets/Image Testimonials/11.png";
import t12 from "../src/assets/Image Testimonials/12.png";
import t13 from "../src/assets/Image Testimonials/13.png";
import t14 from "../src/assets/Image Testimonials/14.png";
import t15 from "../src/assets/Image Testimonials/15.png";
import t16 from "../src/assets/Image Testimonials/16.png";
import t17 from "../src/assets/Image Testimonials/17.png";
import t18 from "../src/assets/Image Testimonials/18.png";

export default function PhotoTestimonials() {
  const DATA = [
    { img: t1 },
    { img: t2 },
    { img: t3 },
    { img: t4 },
    { img: t5 },
    { img: t6 },
    { img: t7 },
    { img: t8 },
    { img: t9 },
    { img: t10 },
    { img: t11 },
    { img: t12 },
    { img: t13 },
    { img: t14 },
    { img: t15 },
    { img: t16 },
    { img: t17 },
    { img: t18 },
  ];

  return (
    <section className="relative bg-white py-10 sm:py-16 overflow-hidden">
      <style>{`
        @keyframes hn_marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .hn-marquee:hover .hn-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* background accents (keep or remove — your choice) */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-sky-600" />
            <p className="text-xs sm:text-sm font-extrabold tracking-[0.22em] uppercase text-sky-800">
              Social Proof
            </p>
            <span className="h-2 w-2 rounded-full bg-yellow-300" />
          </div>

          {/* Mobile */}
          <h2 className="mt-5 text-2xl font-extrabold leading-tight text-gray-900 sm:hidden">
            These Parents &amp; Busy Dads Were
            <br />
            <span className="text-sky-700">Tired, Stressed, and</span>
            <br />
            <span className="text-sky-700">Out of Shape.</span>
          </h2>

          <div className="mt-3 flex justify-center sm:hidden">
            <span className="inline-flex items-center gap-3 rounded-2xl border border-sky-200 bg-white px-4 py-2 shadow-md">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-sky-700 text-white shadow-sm">
                <Quote className="h-4 w-4" />
              </span>
              <span className="text-sm font-extrabold text-gray-900">
                <span className="text-sky-700">Just Like You.</span>
              </span>
            </span>
          </div>

          {/* Desktop */}
          <h2 className="hidden sm:block mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.08] text-gray-900">
            <span className="block">
              These Parents &amp; Busy Dads{" "}
              <span className="relative inline-block">
                <span className="absolute -inset-x-2 -bottom-1 -z-10 h-4 rounded-full bg-sky-200/70" />
                Were
              </span>
            </span>

            <span className="block mt-2">
              <span className="relative inline-block px-2">
                <span className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-full bg-yellow-200/90" />
                Tired
              </span>
              ,{" "}
              <span className="relative inline-block px-2">
                <span className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-full bg-sky-200/80" />
                Stressed
              </span>
              , and{" "}
              <span className="relative inline-block px-2">
                <span className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-full bg-yellow-200/70" />
                Out of Shape.
              </span>
            </span>

            <span className="block mt-4">
              <span className="inline-flex items-center gap-3 rounded-2xl border border-sky-200 bg-white px-4 py-2 shadow-md">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-sky-700 text-white shadow-sm">
                  <Quote className="h-4 w-4" />
                </span>
                <span className="text-sm sm:text-base font-extrabold text-gray-900">
                  <span className="text-sky-700">Just Like You.</span>
                </span>
              </span>
            </span>
          </h2>

          <p className="mt-4 text-base font-semibold sm:text-lg text-gray-700">
            Real people. Real routines. Real results — without extreme diets or
            long workouts.
          </p>
        </div>

        {/* ✅ ONE ROW marquee (no white edge fade) */}
        <div className="mt-8 sm:mt-12">
          <div className="hn-marquee overflow-hidden rounded-3xl border border-sky-200 bg-white shadow-sm">
            <MarqueeRow items={DATA} speed={90} />
          </div>

          <div className="mt-6 rounded-3xl border border-sky-200 bg-white p-4 sm:p-5 shadow-sm">
            <p className="text-sm sm:text-base font-semibold text-gray-900 text-center">
              You’re not “too late.”
              <span className="text-sky-700">
                {" "}
                You just need a system built for real life.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({ items, speed = 90 }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div
        className="hn-track flex w-max gap-5 sm:gap-6 py-4 will-change-transform"
        style={{
          animation: `hn_marquee ${speed}s linear infinite`,
        }}
      >
        {doubled.map((t, idx) => (
          <div
            key={idx}
            className="shrink-0 w-[min(85vw,360px)] sm:w-[min(65vw,360px)] md:w-[360px]"
          >
            <PhotoTestimonialCard img={t.img} />
          </div>
        ))}
      </div>
    </div>
  );
}

function PhotoTestimonialCard({ img }) {
  return (
    <div className="rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm">
      {/* ✅ same height as before */}
      <div className="relative h-64 sm:h-72 md:h-80 w-full bg-white p-3 sm:p-4">
        <img
          src={img}
          alt="Client transformation"
          loading="lazy"
          className="h-full w-full object-contain"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-transparent to-black/0" />
      </div>
    </div>
  );
}
