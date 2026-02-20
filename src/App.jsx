import VideoGrid from "./components/VideoGrid";
import Music from "./components/Music";
import StickyTitleSection from "./components/StickyTitleSection";
import Snowfall from "react-snowfall";
import { Analytics } from "@vercel/analytics/react";

// Icons
import GmailIcon from "./assets/icons8-gmail.svg";
import InstagramIcon from "./assets/icons8-instagram.svg";
import LinkedInIcon from "./assets/icons8-linkedin.svg";
import YouTubeIcon from "./assets/icons8-youtube.svg";

export default function App() {
  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* Snowfall Effect */}
      <Snowfall
        color="white"
        snowflakeCount={150}
        radius={[0.5, 1.5]}
        speed={[0.5, 1.5]}
        wind={[-0.5, 1.0]}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* HERO */}
      <StickyTitleSection
        isHero
        title="bydhruv"
        subtitle="archives."
        gradientFrom="from-blue-400"
        gradientVia="via-blue-600"
        gradientTo="to-blue-800"
      >
        <VideoGrid />
      </StickyTitleSection>

      {/* MUSIC */}
      <StickyTitleSection
        title="soundscape"
        gradientFrom="from-blue-400"
        gradientVia="via-blue-600"
        gradientTo="to-blue-800"
      >
        <Music />
      </StickyTitleSection>

      {/* CONTACT */}
      <StickyTitleSection
        title="let's collaborate"
        gradientFrom="from-blue-400"
        gradientVia="via-blue-600"
        gradientTo="to-blue-800"
      >
        <section className="py-12 min-h-[60vh] flex items-center w-full">
          <div className="max-w-4xl mx-auto text-center px-4 w-full">
            <p className="text-gray-400 mb-8 text-base sm:text-lg md:text-xl">
              my socials.
            </p>

            <div className="flex justify-center flex-wrap md:flex-nowrap gap-5 sm:gap-7 md:gap-10 max-w-xs sm:max-w-md md:max-w-none mx-auto">
              {[
                {
                  href: "mailto:dhruvingale07@gmail.com",
                  icon: GmailIcon,
                  alt: "Gmail",
                },
                {
                  href: "https://instagram.com/dhruubb",
                  icon: InstagramIcon,
                  alt: "Instagram",
                },
                {
                  href: "https://www.linkedin.com/in/dhruv-ingale-42637b322/",
                  icon: LinkedInIcon,
                  alt: "LinkedIn",
                },
                {
                  href: "https://www.youtube.com/@dhruvingale2421",
                  icon: YouTubeIcon,
                  alt: "YouTube",
                },
              ].map(({ href, icon, alt }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-125 active:scale-110"
                >
                  <div
                    className="w-16 h-16 sm:w-18 sm:h-18 md:w-24 md:h-24
                    flex items-center justify-center
                    rounded-full
                    bg-white/5
                    backdrop-blur-md
                    group-hover:bg-blue-500/10
                    group-hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]
                    transition-all duration-300"
                  >
                    <img
                      src={icon}
                      alt={alt}
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12
                      invert opacity-80 group-hover:opacity-100
                      transition-opacity duration-300"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </StickyTitleSection>

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}