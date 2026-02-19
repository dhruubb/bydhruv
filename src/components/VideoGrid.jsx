import { useState, useEffect, useRef } from "react";
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
    tags: ["song",  "musicvideo"],
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
    description:
      "Speaker Reveal for E-Summit 2025",
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
    tags: [ "touchdesigner"],
  },
  {
    src: "/videos/marathon.mp4",
    type: "v",
    title: "SPIT Marathon 2k24",
    year: "2024",
    tags: ["sports", "event", "college"],
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
    description:
      "found this hard CRT plugin",
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

/* ===================== COMPONENT ===================== */

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
            <div
              key={i}
              className="mb-6 rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition"
              onClick={() => setActiveVideo(video)}
            >
              <video
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full"
              />
            </div>
          ))}
        </Masonry>
      </section>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95"
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
            className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideo.src}
              controls
              autoPlay
              className="max-w-5xl max-h-[70vh] rounded-2xl"
            />

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
