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
  const baseItems = useMemo(
    () => videos.map((src, i) => ({ src, id: `vid-${i}` })),
    [videos]
  );

  // ✅ duplicate for seamless desktop marquee + seamless mobile auto-scroll wrap
  const renderItems = useMemo(() => {
    const doubled = [...baseItems, ...baseItems];
    return doubled.map((it, idx) => ({ ...it, rid: `${it.id}-${idx}` })); // unique id per rendered card
  }, [baseItems]);

  /* ===========================
     ✅ MOBILE AUTO-MUTE + ONE-SOUND
     =========================== */
  const videoMapRef = useRef(new Map()); // rid -> HTMLVideoElement
  const activeSoundIdRef = useRef(null);
  const [activeSoundId, setActiveSoundId] = useState(null);
  const rafRef = useRef(null);

  const isMobileNow = () =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 639px)").matches;

  const setVideoRef = (rid) => (node) => {
    if (node) videoMapRef.current.set(rid, node);
    else videoMapRef.current.delete(rid);
  };

  const muteAllExcept = (keepRid) => {
    videoMapRef.current.forEach((v, rid) => {
      if (!v) return;
      if (rid !== keepRid) v.muted = true;
    });
  };

  const muteActiveIfOffscreen = () => {
    if (!isMobileNow()) return;

    const rid = activeSoundIdRef.current;
    if (!rid) return;

    const v = videoMapRef.current.get(rid);
    if (!v) {
      activeSoundIdRef.current = null;
      setActiveSoundId(null);
      return;
    }

    // fullscreen exceptions
    if (v.webkitDisplayingFullscreen) return;
    if (document.fullscreenElement && document.fullscreenElement === v) return;

    const rect = v.getBoundingClientRect();
    const vh = window.innerHeight || 0;
    const vw = window.innerWidth || 0;

    // consider both vertical + horizontal offscreen (important for horizontal scroll)
    const outV = rect.bottom <= 0 || rect.top >= vh;
    const outH = rect.right <= 0 || rect.left >= vw;

    if (outV || outH) {
      v.muted = true;
      activeSoundIdRef.current = null;
      setActiveSoundId(null);
    }
  };

  const handleVolumeChange = (rid) => {
    const v = videoMapRef.current.get(rid);
    if (!v) return;

    if (!v.muted) {
      activeSoundIdRef.current = rid;
      setActiveSoundId(rid);
      muteAllExcept(rid);
      return;
    }

    if (activeSoundIdRef.current === rid) {
      activeSoundIdRef.current = null;
      setActiveSoundId(null);
    }
  };

  const handlePlay = (rid) => {
    const v = videoMapRef.current.get(rid);
    if (!v) return;

    if (!v.muted) {
      activeSoundIdRef.current = rid;
      setActiveSoundId(rid);
      muteAllExcept(rid);
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
  const openFullscreen = async (rid) => {
    if (!isMobileNow()) return;

    const v = videoMapRef.current.get(rid);
    if (!v) return;

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
      <style>{`
        @keyframes hn_marquee_left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .hn-marquee:hover .hn-track { animation-play-state: paused; }
      `}</style>

      {/* blue accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-200/45 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-sky-300/35 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
          {title}
        </h2>

        <div className="mt-10">
          <div className="rounded-[26px] border border-gray-200 bg-gradient-to-b from-sky-50/80 via-white to-white shadow-[0_18px_55px_rgba(0,0,0,0.10)]">
            {/* ✅ MOBILE: manual horizontal scroll + auto-roll LEFT */}
            <div className="sm:hidden">
              <VideoScrollRowMobile
                items={renderItems}
                autoPxPerSec={22} // lower = slower
                setVideoRef={setVideoRef}
                onVolumeChange={handleVolumeChange}
                onPlay={handlePlay}
                onFullscreen={openFullscreen}
              />
            </div>

            {/* ✅ DESKTOP: continuous rolling marquee */}
            <div className="hidden sm:block hn-marquee overflow-hidden">
              <VideoMarqueeRowDesktop
                items={renderItems}
                speedSec={55} // bigger = slower
                setVideoRef={setVideoRef}
                onVolumeChange={handleVolumeChange}
                onPlay={handlePlay}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ✅ MOBILE: Manual scrollbar + Auto rolling LEFT (seamless)
   Fix: ignores scroll events caused by auto-roll
   ========================================================= */
function VideoScrollRowMobile({
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
  const halfRef = useRef(0);

  const holdRef = useRef(false); // user interacting
  const pauseUntilRef = useRef(0);

  // ✅ ignore programmatic scroll events
  const ignoreScrollUntilRef = useRef(0);

  const pauseFor = (ms = 1200) => {
    const t = Date.now() + ms;
    if (t > pauseUntilRef.current) pauseUntilRef.current = t;
  };

  const isPaused = () => holdRef.current || Date.now() < pauseUntilRef.current;

  const recalcHalf = () => {
    const el = scrollerRef.current;
    if (!el) return;

    // width of one full set (because items are doubled)
    halfRef.current = el.scrollWidth / 2;

    // start in the middle so rolling LEFT has content
    if (halfRef.current > 0 && el.scrollLeft < 2) {
      el.scrollLeft = halfRef.current;
      ignoreScrollUntilRef.current = Date.now() + 120;
    }
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // Recalc multiple times to catch layout/video loading
    requestAnimationFrame(recalcHalf);
    const t1 = setTimeout(recalcHalf, 150);
    const t2 = setTimeout(recalcHalf, 600);

    const onResize = () => recalcHalf();
    window.addEventListener("resize", onResize);

    const step = (ts) => {
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      const half = halfRef.current;
      if (!isPaused() && half > 0) {
        // ✅ roll LEFT by default
        const next = el.scrollLeft - autoPxPerSec * dt;

        // mark upcoming scroll events as "auto"
        ignoreScrollUntilRef.current = Date.now() + 80;

        el.scrollLeft = next;

        // seamless wrap
        if (el.scrollLeft <= 1) el.scrollLeft += half;
        if (el.scrollLeft >= half + 1) el.scrollLeft -= half;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafRef.current);
      lastTsRef.current = 0;
    };
  }, [autoPxPerSec]);

  return (
    <div className="px-4 py-7">
      <div
        ref={scrollerRef}
        className="overflow-x-auto pb-3"
        style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-x pan-y" }}
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
        onScroll={() => {
          // ✅ ignore auto-scroll scroll events
          if (Date.now() < ignoreScrollUntilRef.current) return;
          pauseFor(1500);
        }}
      >
        <div className="flex w-max gap-5">
          {items.map((it) => (
            <div key={it.rid} className="shrink-0 w-[min(82vw,320px)]">
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="relative aspect-[9/16] bg-gray-100">
                  <video
                    ref={setVideoRef(it.rid)}
                    onVolumeChange={() => onVolumeChange(it.rid)}
                    onPlay={() => onPlay(it.rid)}
                    onClick={() => onFullscreen(it.rid)}
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

/* =========================================
   ✅ DESKTOP: Continuous rolling marquee
   ========================================= */
function VideoMarqueeRowDesktop({
  items,
  speedSec = 55,
  setVideoRef,
  onVolumeChange,
  onPlay,
}) {
  return (
    <div className="px-6 py-8">
      <div
        className="hn-track flex w-max gap-5 will-change-transform"
        style={{ animation: `hn_marquee_left ${speedSec}s linear infinite` }}
      >
        {items.map((it) => (
          <div key={it.rid} className="shrink-0 sm:w-[360px]">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="relative aspect-[9/16] bg-gray-100">
                <video
                  ref={setVideoRef(it.rid)}
                  onVolumeChange={() => onVolumeChange(it.rid)}
                  onPlay={() => onPlay(it.rid)}
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
  );
}
