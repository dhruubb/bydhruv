import { useState, useEffect, useRef, useCallback } from "react";
import Masonry from "react-masonry-css";

/* ===================== DATA ===================== */

const videos = [
  {
    src: "https://res.cloudinary.com/dm91yrvv2/video/upload/v1770657981/travvvv_web_zqk5ff.mp4",
    type: "v",
    title: "circus maximus",
    description:
      "Probably the best concert for me up until now. I've tried to capture what I could in that one hour. This edit doesn't even come close to the energy we had that day",
    year: "2025",
    tags: ["concert", "travis", "utopia"],
  },
  {
    src: "https://res.cloudinary.com/dm91yrvv2/video/upload/v1770657388/vinodkhosla_final_h4ovof.mov",
    type: "v",
    title: "Podcast Trailer",
    year: "2024",
    tags: ["podcast"],
  },
  {
    src: "https://res.cloudinary.com/dm91yrvv2/video/upload/v1770657331/timeless-final_fq88ko.mov",
    type: "v",
    title: "timeless",
    description:
      "I had this song on repeat for months. Mike Dean literally cooked with this beat. It fitted perfectly as the background to my life then, and this edit is just the representation of my mindspace back then.",
    year: "2023",
    tags: ["experimental", "carti"],
  },
  {
    src: "https://res.cloudinary.com/dm91yrvv2/video/upload/v1770657333/motion-graphics_g69kaz.mov",
    type: "v",
    title: "Motion Graphics",
    year: "2024",
    tags: ["motion graphics", "brand"],
  },
  {
    src: "https://res.cloudinary.com/dm91yrvv2/video/upload/v1770657391/lost-cause-reel_gf1li6.mov",
    type: "h",
    title: "lost cause",
    description: "lost cause is our best song yet. We legit shot and edited the video 2 days before the release of the song. The video features Aryan Joshi and Vaishnavi Rai. ",
    year: "2023",
    tags: ["song", "musicvideo"],
  },
  {
    src: "https://res.cloudinary.com/dm91yrvv2/video/upload/v1770657363/kdot-edit_syonoo.mov",
    type: "h",
    title: "kdot.mov",
    description:
      "kdot has always been my favourite ever since started listening to hip hop. no one does it like him. you can hear how he's changed over all these years with every album he drops. the way fame changed him, how he became the person he preached not to be. but he's accepted and worked through it. he taught me that no matter what happens, you should be able to forgive yourself and make mistakes. you gotta be able to live with yourself and stand by your decisions and lastly, being vulnerable and honest is not a weakness. with all of this ofc there's no way i'm not making a kdot edit.",
    year: "2023",
    tags: ["gnx", "man at the garden"],
  },
  {
    src: "https://res.cloudinary.com/dm91yrvv2/video/upload/v1770658427/corereveal_web_axxbwc.mp4",
    type: "h",
    title: "E-Cell Core Reveal",
    description:
      "as my first project as creative head, I had to deliver for a core reveal. during the same week, i started watching succession. there's just something royal about succession's theme. it was peak. couldn't miss on this one. ",
    year: "2024",
    tags: ["committee", "event", "college"],
  },
  {
    src: "https://res.cloudinary.com/dm91yrvv2/video/upload/v1770657356/interstellar_hzusug.mov",
    type: "h",
    title: "interstellar",
    description:
      "chris nolan has his way of making you feel small. you can feel the scale of the world he builds. greatest to ever do it. ",
    year: "2023",
    tags: ["film", "cinematic"],
  },
  {
    src: "https://res.cloudinary.com/dm91yrvv2/video/upload/v1770657358/speaker-reveal_v07upe.mov",
    type: "v",
    title: "Summit Speaker Reveal",
    description: "Speaker Reveal for E-Summit 2025",
    year: "2024",
    tags: ["event", "reveal", "college"],
  },
  {
    src: "https://res.cloudinary.com/dm91yrvv2/video/upload/v1770657312/1DTG_wriski.mov",
    type: "v",
    title: "1DTG",
    description: "planned, shot, edited and posted in the same afternoon",
    year: "2023",
    tags: ["promo", "reel", "college"],
  },
  {
    src: "https://res.cloudinary.com/dm91yrvv2/video/upload/v1770657366/Star_bmzy4o.mov",
    type: "v",
    title: "chase visualiser",
    description:
      "made this while exploring touchdesigner. this was supposed to be a visualiser for my song with chaitanya called chase. in that song, we explored the topic of substance use. the line where we start to abuse it, how thin it can be. the escapism that comes with it. ",
    year: "2023",
    tags: ["touchdesigner"],
  },
  {
    src: "https://res.cloudinary.com/dm91yrvv2/video/upload/v1770657381/EduminattiEcoleGlobale_daudbz.mov",
    type: "v",
    title: "Eduminatti Ecole Globale",
    year: "2024",
    tags: ["Institutional", "Brand"],
  },
  {
    src: "https://res.cloudinary.com/dm91yrvv2/video/upload/v1770658572/esummit-trailer_p7ud9e.mov",
    type: "v",
    title: "E-Summit Trailer",
    description:
      "the most planning I every had to do as a creative head. could've never done it if it was never for shivaji, neel, shreya, kriya, nandini.",
    year: "2024",
    tags: ["event", "trailer", "college"],
  },
  {
    src: "https://res.cloudinary.com/dm91yrvv2/video/upload/v1770657350/FOOD_CHALLENGE_FINALLL_cp84rl.mov",
    type: "v",
    title: "Food Challenge",
    year: "2023",
    tags: ["entertainment", "college"],
  },
  {
    src: "https://res.cloudinary.com/dm91yrvv2/video/upload/v1770657343/ead_1_eybbag.mov",
    type: "v",
    title: "EAD Promo",
    year: "2024",
    tags: ["promo", "college"],
  },
  {
    src: "https://res.cloudinary.com/dm91yrvv2/video/upload/v1770657342/parkyun_nfhixw.mov",
    type: "v",
    title: "Parkyun",
    year: "2023",
    tags: ["music"],
  },
  {
    src: "https://res.cloudinary.com/dm91yrvv2/video/upload/v1770657316/crt_eywuwd.mov",
    type: "h",
    title: "CRT",
    description: "found this hard CRT plugin",
    year: "2023",
    tags: ["experimental"],
  },
  {
    src: "https://res.cloudinary.com/dm91yrvv2/video/upload/v1770657348/agilityfinal_fjwcug.mov",
    type: "v",
    title: "Agility",
    year: "2024",
    tags: ["sports", "promo", "college"],
  },
];

const breakpointColumns = {
  default: 5,
  1280: 4,
  1024: 3,
  640: 2,
};

/* ===================== HELPERS ===================== */

/**
 * Returns an optimised video src by injecting q_auto,f_auto for Cloudinary URLs.
 */
const getOptimisedSrc = (src) => {
  if (!src.includes("res.cloudinary.com")) return src;
  return src.replace("/video/upload/", "/video/upload/q_auto,f_auto/");
};

/* ===================== ICONS ===================== */

const MagneticTitleIcon = () => {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px) rotate(${x * 0.1}deg)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px) rotate(0deg)";
  };

  return (
    <svg
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      viewBox="0 0 256 256"
      className="w-6 h-6 opacity-70 transition-transform duration-300 ease-out"
    >
      <path
        fill="rgb(84,84,84)"
        d="M112 32L54.6 32L128 105.3L201.3 32L144 32L144 0L256 0L256 112L224 112L224 54.6L150.6 128L224 201.3L224 144L256 144L256 256L144 256L144 224L201.3 224L128 150.6L54.6 224L112 224L112 256L0 256L0 144L32 144L32 201.3L105.3 128L32 54.6L32 112L0 112L0 0L112 0Z"
      />
    </svg>
  );
};

const CloseIcon = () => (
  <svg viewBox="0 0 256 256" className="w-8 h-8">
    <path
      fill="rgb(84,84,84)"
      d="M120 136L120 176L40 256L0 256L0 216L80 136ZM256 216L256 256L216 256L136 176L136 136L176 136ZM120 80L120 120L80 120L0 40L0 0L40 0ZM256 40L176 120L136 120L136 80L216 0L256 0Z"
    />
  </svg>
);

/* ===================== CUSTOM PLAYER ===================== */

const CustomPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const containerRef = useRef(null);
  const hideTimer = useRef(null);

  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hoverTime, setHoverTime] = useState(null);
  const [hoverX, setHoverX] = useState(0);
  // aspectRatio: width/height of the video, null until known
  const [aspectRatio, setAspectRatio] = useState(null);

  const resetHideTimer = () => {
    setShowControls(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowControls(false), 3000);
  };

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.play().catch(() => {});
    resetHideTimer();
    return () => clearTimeout(hideTimer.current);
  }, [src]);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const togglePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) el.play();
    else el.pause();
  };

  const toggleMute = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  };

  const changeVolume = (e) => {
    const el = videoRef.current;
    if (!el) return;
    const v = parseFloat(e.target.value);
    el.volume = v;
    el.muted = v === 0;
    setVolume(v);
    setMuted(v === 0);
  };

  const onTimeUpdate = () => {
    const el = videoRef.current;
    if (!el) return;
    setCurrentTime(el.currentTime);
    setProgress((el.currentTime / el.duration) * 100);
  };

  const onLoadedMetadata = () => {
    const el = videoRef.current;
    if (!el) return;
    setDuration(el.duration);
    // Capture exact aspect ratio from the video itself
    setAspectRatio(el.videoWidth / el.videoHeight);
  };

  const getBarPct = (e) => {
    const bar = progressRef.current;
    if (!bar) return 0;
    const rect = bar.getBoundingClientRect();
    return Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
  };

  const seek = (e) => {
    const el = videoRef.current;
    if (!el) return;
    const pct = getBarPct(e);
    el.currentTime = pct * el.duration;
    setProgress(pct * 100);
    setCurrentTime(pct * el.duration);
  };

  const onProgressMouseMove = (e) => {
    const pct = getBarPct(e);
    const bar = progressRef.current;
    if (!bar) return;
    const rect = bar.getBoundingClientRect();
    setHoverTime(pct * duration);
    setHoverX(e.clientX - rect.left);
  };

  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) el.requestFullscreen();
    else document.exitFullscreen();
  };

  const fmt = (s) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  // Derive container style from aspect ratio:
  // - Landscape (>1): full width, height = width / ratio (capped at 80vh)
  // - Portrait (<=1): height = 80vh, width = height * ratio (centered)
  const containerStyle = (() => {
    if (!aspectRatio) return { width: "100%", maxWidth: "56rem" };
    if (aspectRatio >= 1) {
      // Landscape — fill width, height follows
      return { width: "100%", maxWidth: "56rem", aspectRatio: `${aspectRatio}` };
    } else {
      // Portrait — cap height, shrink width to match
      return { height: "80vh", aspectRatio: `${aspectRatio}`, maxWidth: "56rem" };
    }
  })();

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl overflow-hidden"
      style={{ ...containerStyle, cursor: showControls ? "default" : "none" }}
      onMouseMove={resetHideTimer}
      onMouseLeave={() => { clearTimeout(hideTimer.current); setShowControls(false); setHoverTime(null); }}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        playsInline
        muted={muted}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onClick={togglePlay}
        className="w-full h-full object-cover block"
      />

      {/* Big centre pause icon */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-20 h-20 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm">
            <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* Controls overlay */}
      <div
        className={`absolute bottom-0 left-0 right-0 transition-opacity duration-300 select-none ${
          showControls ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)" }}
      >
        {/* Progress bar */}
        <div className="px-4 pt-8 pb-2">
          <div
            ref={progressRef}
            className="relative w-full h-1 rounded-full cursor-pointer group/bar"
            style={{ background: "rgba(255,255,255,0.25)" }}
            onClick={seek}
            onMouseMove={onProgressMouseMove}
            onMouseLeave={() => setHoverTime(null)}
          >
            <div className="absolute top-0 left-0 h-full rounded-full bg-white" style={{ width: `${progress}%` }} />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-lg opacity-0 group-hover/bar:opacity-100 transition-opacity"
              style={{ left: `calc(${progress}% - 7px)` }}
            />
            {hoverTime !== null && (
              <div
                className="absolute -top-8 text-xs text-white bg-black/80 px-2 py-0.5 rounded pointer-events-none"
                style={{ left: hoverX, transform: "translateX(-50%)" }}
              >
                {fmt(hoverTime)}
              </div>
            )}
          </div>
        </div>

        {/* Buttons row */}
        <div className="flex items-center justify-between px-4 pb-4">
          <div className="flex items-center gap-4">
            <button onClick={togglePlay} className="text-white hover:text-white/70 transition-colors">
              {playing ? (
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
              ) : (
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current"><path d="M8 5v14l11-7z" /></svg>
              )}
            </button>

            <div className="flex items-center gap-2 group/vol">
              <button onClick={toggleMute} className="text-white hover:text-white/70 transition-colors">
                {muted || volume === 0 ? (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" /></svg>
                ) : volume < 0.5 ? (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" /></svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /></svg>
                )}
              </button>
              <input
                type="range" min="0" max="1" step="0.02"
                value={muted ? 0 : volume}
                onChange={changeVolume}
                className="w-0 group-hover/vol:w-20 transition-all duration-300 overflow-hidden accent-white cursor-pointer h-1"
              />
            </div>

            <span className="text-white/70 text-sm font-mono tabular-nums">
              {fmt(currentTime)} <span className="text-white/40">/</span> {fmt(duration)}
            </span>
          </div>

          <button onClick={toggleFullscreen} className="text-white hover:text-white/70 transition-colors">
            {isFullscreen ? (
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" /></svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

/* ===================== GRID CARD ===================== */

const VideoCard = ({ video, onClick }) => {
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  // Only set the src and start playing once the card scrolls into view.
  // rootMargin: "200px" means we start loading 200px before it's visible.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Only need to trigger once
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Once src is set and video is ready, play it
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !inView) return;
    el.play().catch(() => {});
  }, [inView, loaded]);

  return (
    <div
      ref={containerRef}
      className="relative mb-6 rounded-3xl overflow-hidden cursor-pointer hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 hover:z-10 bg-neutral-900"
      onClick={onClick}
    >
      {/* Placeholder shown before video loads — keeps layout stable */}
      {!loaded && (
        <div className="w-full aspect-video animate-pulse bg-neutral-800 rounded-3xl" />
      )}

      {inView && (
        <video
          ref={videoRef}
          src={getOptimisedSrc(video.src)}
          muted
          loop
          playsInline
          preload="none"
          onCanPlay={() => setLoaded(true)}
          className={`w-full block transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0 absolute inset-0"}`}
        />
      )}
    </div>
  );
};

/* ===================== MAIN COMPONENT ===================== */

export default function VideoGrid() {
  const [activeVideo, setActiveVideo] = useState(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && setActiveVideo(null);
    if (activeVideo) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onEsc);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEsc);
    };
  }, [activeVideo]);

  const handleCloseMove = (e) => {
    const el = closeRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) rotate(90deg)`;
  };

  const handleCloseLeave = () => {
    const el = closeRef.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px) rotate(0deg)";
  };

  return (
    <>
      <section className="w-full px-2 py-16">
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -mx-2"
          columnClassName="px-2"
        >
          {videos.map((video, i) => (
            <VideoCard
              key={i}
              video={video}
              onClick={() => setActiveVideo(video)}
            />
          ))}
        </Masonry>
      </section>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 overflow-y-auto"
          onClick={() => setActiveVideo(null)}
        >
          <button
            ref={closeRef}
            className="fixed top-6 right-6 z-[10000] transition-transform duration-300 ease-out"
            onMouseMove={handleCloseMove}
            onMouseLeave={handleCloseLeave}
            onClick={(e) => {
              e.stopPropagation();
              setActiveVideo(null);
            }}
          >
            <CloseIcon />
          </button>

          <div
            className="flex flex-col items-center px-6 pt-16 pb-24"
            onClick={(e) => e.stopPropagation()}
          >
            <CustomPlayer src={getOptimisedSrc(activeVideo.src)} />

            <div className="mt-10 text-center max-w-3xl">
              <h2 className="flex items-center justify-center gap-4 text-4xl font-bold">
                <MagneticTitleIcon />
                {activeVideo.title}
                <MagneticTitleIcon />
              </h2>

              <p className="text-gray-500 mt-2">{activeVideo.year}</p>

              <div className="flex justify-center gap-3 mt-6 flex-wrap">
                {activeVideo.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-full bg-white/10 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 text-lg mt-6 leading-relaxed">
                {activeVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}