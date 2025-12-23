import React, { useEffect, useMemo, useRef, useState } from "react";

import client1 from "../src/assets/Video Testimonials/01.mp4";
import client2 from "../src/assets/Video Testimonials/02.mp4";
import client3 from "../src/assets/Video Testimonials/03.mp4";
import client4 from "../src/assets/Video Testimonials/04.mp4";
import client5 from "../src/assets/Video Testimonials/05.mp4";
import client6 from "../src/assets/Video Testimonials/06.mp4";
import client7 from "../src/assets/Video Testimonials/07.mp4";
import client8 from "../src/assets/Video Testimonials/08.mp4";
import client9 from "../src/assets/Video Testimonials/09.mp4";

export default function VideoTestimonialSection({
  title = "Your Future Transformation Starts With Stories Like These.",
  videos = [client1, client2, client3, client4, client5, client6, client7, client8, client9],
}) {
  const items = useMemo(() => videos.map((src, i) => ({ src, id: `vid-${i}` })), [videos]);

  /* ===========================
     ✅ MOBILE AUTO-MUTE + ONE-SOUND
     =========================== */
  const videoMapRef = useRef(new Map()); // id -> HTMLVideoElement
  const activeSoundIdRef = useRef(null);
  const [activeSoundId, setActiveSoundId] = useState(null);
  const rafRef = useRef(null);

  const isMobileNow = () =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 639px)").matches;

  const setVideoRef = (id) => (node) => {
    if (node) videoMapRef.current.set(id, node);
    else videoMapRef.current.delete(id);
  };

  const muteAllExcept = (keepId) => {
    videoMapRef.current.forEach((v, id) => {
      if (!v) return;
      if (id !== keepId) v.muted = true;
    });
  };

  const muteActiveIfOffscreen = () => {
    if (!isMobileNow()) return;

    const id = activeSoundIdRef.current;
    if (!id) return;

    const v = videoMapRef.current.get(id);
    if (!v) {
      activeSoundIdRef.current = null;
      setActiveSoundId(null);
      return;
    }

    // don't auto-mute if fullscreen
    if (v.webkitDisplayingFullscreen) return;
    if (document.fullscreenElement && document.fullscreenElement === v) return;

    const rect = v.getBoundingClientRect();
    const vh = window.innerHeight || 0;
    const completelyOut = rect.bottom <= 0 || rect.top >= vh;

    if (completelyOut) {
      v.muted = true;
      activeSoundIdRef.current = null;
      setActiveSoundId(null);
    }
  };

  const handleVolumeChange = (id) => {
    const v = videoMapRef.current.get(id);
    if (!v) return;

    // user unmuted this -> only this can have sound
    if (!v.muted) {
      activeSoundIdRef.current = id;
      setActiveSoundId(id);
      muteAllExcept(id);
      return;
    }

    if (activeSoundIdRef.current === id) {
      activeSoundIdRef.current = null;
      setActiveSoundId(null);
    }
  };

  const handlePlay = (id) => {
    const v = videoMapRef.current.get(id);
    if (!v) return;

    if (!v.muted) {
      activeSoundIdRef.current = id;
      setActiveSoundId(id);
      muteAllExcept(id);
    }
  };

  // keep checking while a video is unmuted on mobile
  useEffect(() => {
    if (!isMobileNow()) return;
    if (!activeSoundId) return;

    let raf = 0;
    const loop = () => {
      muteActiveIfOffscreen();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSoundId]);

  // also check on scroll/resize (cheap)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const tick = () => {
      rafRef.current = null;
      muteActiveIfOffscreen();
    };

    const onScroll = () => {
      if (!isMobileNow()) return;
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("orientationchange", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("orientationchange", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ===========================
     ✅ MOBILE FULLSCREEN ON TAP
     =========================== */
  const openFullscreen = async (id) => {
    if (!isMobileNow()) return;

    const v = videoMapRef.current.get(id);
    if (!v) return;

    // user gesture: try play then fullscreen
    try {
      await v.play();
    } catch {}

    try {
      if (v.requestFullscreen) await v.requestFullscreen();
      else if (v.webkitRequestFullscreen) v.webkitRequestFullscreen();
      else if (v.webkitEnterFullscreen) v.webkitEnterFullscreen(); // iPhone Safari
    } catch {}

    try {
      await v.play();
    } catch {}
  };

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-200/45 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-orange-300/35 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
          {title}
        </h2>

        {/* ✅ Real horizontal scroll + scrollbar visible + auto rolling */}
        <div className="mt-10">
          <div className="rounded-[26px] border border-gray-200 bg-gradient-to-b from-orange-50/70 via-white to-white shadow-[0_18px_55px_rgba(0,0,0,0.10)]">
            <VideoScrollRow
              items={items}
              autoPxPerSec={22} // ✅ lower = slower auto rolling
              setVideoRef={setVideoRef}
              onVolumeChange={handleVolumeChange}
              onPlay={handlePlay}
              onFullscreen={openFullscreen}
            />
          </div>

          <p className="mt-3 text-xs sm:text-sm text-gray-500 text-center">
            Use the scrollbar below to move left/right. Auto-roll pauses while you interact.
            Mobile: tap video to open fullscreen.
          </p>
        </div>
      </div>
    </section>
  );
}

function VideoScrollRow({
  items,
  autoPxPerSec = 22,
  setVideoRef,
  onVolumeChange,
  onPlay,
  onFullscreen,
}) {
  const scrollerRef = useRef(null);

  const rafRef = useRef(0);
  const lastTsRef = useRef(0);
  const dirRef = useRef(1); // 1 => right, -1 => left

  const holdRef = useRef(false); // user interacting
  const pauseUntilRef = useRef(0);

  const pauseFor = (ms = 1200) => {
    const t = Date.now() + ms;
    if (t > pauseUntilRef.current) pauseUntilRef.current = t;
  };

  const isPaused = () => holdRef.current || Date.now() < pauseUntilRef.current;

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const step = (ts) => {
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      const max = el.scrollWidth - el.clientWidth;

      if (!isPaused() && max > 0) {
        let next = el.scrollLeft + dirRef.current * autoPxPerSec * dt;

        // bounce at ends (keeps normal scrollbar behavior)
        if (next >= max) {
          next = max;
          dirRef.current = -1;
        } else if (next <= 0) {
          next = 0;
          dirRef.current = 1;
        }

        el.scrollLeft = next;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTsRef.current = 0;
    };
  }, [autoPxPerSec]);

  return (
    <div className="px-4 sm:px-6 py-7">
      <div
        ref={scrollerRef}
        className="overflow-x-auto pb-3"
        style={{
          WebkitOverflowScrolling: "touch",
          touchAction: "pan-x pan-y",
        }}
        onMouseEnter={() => (holdRef.current = true)}
        onMouseLeave={() => {
          holdRef.current = false;
          pauseFor(900);
        }}
        onTouchStart={() => (holdRef.current = true)}
        onTouchEnd={() => {
          holdRef.current = false;
          pauseFor(1200);
        }}
        onPointerDown={() => (holdRef.current = true)}
        onPointerUp={() => {
          holdRef.current = false;
          pauseFor(1200);
        }}
        onScroll={() => pauseFor(1500)}
      >
        <div className="flex w-max gap-5">
          {items.map((it) => (
            <div key={it.id} className="shrink-0 w-[min(82vw,320px)] sm:w-[360px]">
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="relative aspect-[9/16] bg-gray-100">
                  <video
                    ref={setVideoRef(it.id)}
                    onVolumeChange={() => onVolumeChange(it.id)}
                    onPlay={() => onPlay(it.id)}
                    onClick={() => onFullscreen(it.id)} // ✅ mobile tap fullscreen
                    src={it.src}
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="metadata"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
