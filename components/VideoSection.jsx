// VideoSection.jsx
import React, { useEffect, useState } from "react";

const MEDIA_ID = "sj1htfp9fg";
const SWATCH =
  "https://fast.wistia.com/embed/medias/sj1htfp9fg/swatch";

function loadScriptOnce(src, { type } = {}) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) return resolve();

    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    if (type) s.type = type;
    s.onload = () => resolve();
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

export default function VideoSection() {
  const [playerDefined, setPlayerDefined] = useState(false);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        await loadScriptOnce("https://fast.wistia.com/player.js");
        await loadScriptOnce(`https://fast.wistia.com/embed/${MEDIA_ID}.js`, {
          type: "module",
        });

        // ✅ Ensures the custom element exists (so it can render)
        if (window.customElements?.whenDefined) {
          await window.customElements.whenDefined("wistia-player");
        }

        if (mounted) setPlayerDefined(true);
      } catch {
        // If scripts fail, keep poster overlay visible (better than blank)
        if (mounted) setPlayerDefined(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="bg-white flex flex-col items-center mt-0 md:-mt-48 lg:-mt-64 relative z-10">
      {/* ✅ Wistia Video with instant poster + smooth transition */}
      <div className="w-full max-w-3xl px-2 sm:px-0">
        <div className="rounded-lg shadow-lg overflow-hidden">
          {/* Aspect ratio container */}
          <div
            className="relative w-full"
            style={{
              paddingTop: "56.25%", // 16:9
              backgroundImage: `url("${SWATCH}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#0b1220",
            }}
          >
            {/* Poster/Skeleton overlay (visible immediately) */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${playerDefined ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
            >
              {/* subtle dark overlay */}
              <div className="absolute inset-0 bg-black/35" />
              {/* shimmer */}
              <div className="absolute inset-0 animate-pulse bg-white/5" />
              {/* loading pill */}
              <div className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-xs text-white">
                Loading…
              </div>
            </div>

            {/* Player fills container (no layout shift) */}
            <wistia-player
              class="absolute inset-0 w-full h-full"
              media-id={MEDIA_ID}
              aspect="1.7777777777777777"
            ></wistia-player>
          </div>
        </div>
      </div>

      {/* Text line */}
      <div className="mt-5 px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-400 bg-sky-100 px-4 py-2 shadow-sm">
          <p className="text-center text-sm sm:text-base font-semibold text-slate-800">
            Watch how{" "}
            <span className="text-sky-600">busy Dads &amp; Parents</span>{" "}
            transformed their bodies <span className="text-sky-600">for life</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
