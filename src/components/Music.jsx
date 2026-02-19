import { useState } from "react";

const musicList = [
  {
    title: "lost cause",
    cover: "https://res.cloudinary.com/dm91yrvv2/image/upload/v1770659399/lost-cause_xvotye.jpg",
    apple: "https://music.apple.com/in/album/lost-cause-feat-aryan-single/1795321934",
    spotify: "https://open.spotify.com/track/16cXLnBmMWvXPQJCwspiJX",
    youtube: "https://youtu.be/7n3B414ZxOA",
  },
  {
    title: "diaries",
    cover: "https://res.cloudinary.com/dm91yrvv2/image/upload/v1770659398/diaries_ovcvme.jpg",
    apple: "https://music.apple.com/in/album/diaries/1766915009",
    spotify: "https://open.spotify.com/album/6xyMMV6WAMQQz8EP03DBGJ",
    youtube: "https://youtu.be/llz0C2Y5Qzg",
  },
  {
    title: "ch44r",
    cover: "https://res.cloudinary.com/dm91yrvv2/image/upload/v1770659398/chaar_dxtlx7.jpg",
    apple: "https://music.apple.com/in/album/ch44r-single/1710388615",
    spotify: "https://open.spotify.com/album/66wIxywNTC1Jnm51RVzVn2",
    youtube: "https://youtu.be/JEWQ0nndACA",
    
  },
  {
    title: "INTRO.",
    cover: "https://res.cloudinary.com/dm91yrvv2/image/upload/v1770659398/intro_ztm2cm.png",
    apple: "https://music.apple.com/in/album/intro-single/1762435769",
    spotify: "https://open.spotify.com/album/13lDTf7vIIFuLCE0OIVYRl",
    youtube: "https://youtu.be/vbI1HQFhxIE",
   
  },
  {
    title: "connected",
    cover: "https://res.cloudinary.com/dm91yrvv2/image/upload/v1770659398/connected_m5tbz7.png",
    apple: "https://music.apple.com/in/album/connected-ep/1612245877",
    spotify: "https://open.spotify.com/album/7thydAQAVWT5mz6rccXu2O",
    youtube: "https://youtu.be/zUztrd9-86s",
    description: "A soulful melody with deep emotional vibes.",
  },
  {
    title: "REALLY LATE",
    cover: "https://res.cloudinary.com/dm91yrvv2/image/upload/v1770659398/rl_lpwxc6.png",
    apple: "https://music.apple.com/in/album/really-late-ep/1697284668",
    spotify: "https://open.spotify.com/album/72agXMjfvlLSW2PudSlEYS",
    youtube: "https://youtu.be/63zYwRAAg1o",
   
  },
];

export default function Music() {
  const [activeSong, setActiveSong] = useState(null);

  return (
    <section className="py-20 w-full bg-transparent">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* MUSIC GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {musicList.map((song, i) => (
            <div
              key={i}
              className="rounded-2xl cursor-pointer hover:scale-105 transition"
              onClick={() => setActiveSong(song)}
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4">
                <img
                  src={song.cover}
                  alt={`${song.title} cover`}
                  className="w-full aspect-square object-contain rounded-xl"
                />
                <h3 className="text-white font-semibold mt-3 text-lg text-center">
                  {song.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL (OUTSIDE MAP) */}
        {activeSong && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveSong(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            <div
              className="relative w-full max-w-lg text-center z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-3xl text-white hover:opacity-70"
                onClick={() => setActiveSong(null)}
              >
                ×
              </button>

              <img
                src={activeSong.cover}
                alt={activeSong.title}
                className="w-full aspect-square object-contain rounded-xl shadow-lg mb-4 bg-black/40 p-4"
              />

              <h3 className="text-2xl font-bold text-white mb-2">
                {activeSong.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {activeSong.description}
              </p>

              <div className="flex justify-center gap-4 flex-wrap">
                <a href={activeSong.apple} target="_blank" className="bg-white text-black px-4 py-2 rounded-full font-semibold">
                  Apple Music
                </a>
                <a href={activeSong.spotify} target="_blank" className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold">
                  Spotify
                </a>
                <a href={activeSong.youtube} target="_blank" className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
