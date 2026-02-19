// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function StickyTitleSection({ 
//   title, 
//   subtitle, 
//   children, 
//   isHero = false,
//   titleColor = "text-white",
//   gradientFrom = "from-blue-400",
//   gradientVia = "via-blue-600", 
//   gradientTo = "to-blue-800"
// }) {
//   const ref = useRef(null);

//   const isModalOpen =
//     typeof window !== "undefined" &&
//     document.body.classList.contains("modal-open");

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: isHero
//       ? ["start start", "center start"]
//       : ["start end", "center start"],
//   });

//   const scale = useTransform(
//     scrollYProgress,
//     isHero ? [0, 0.5, 1] : [0, 0.5, 1],
//     isHero ? [1, 0.6, 0.3] : [1, 1, 0.4]
//   );

//   const y = useTransform(
//     scrollYProgress,
//     isHero ? [0, 0.5, 1] : [0, 0.3, 1],
//     isHero ? [0, -400, -1000] : [300, -150, -450]
//   );

//   const opacity = useTransform(
//     scrollYProgress,
//     isHero ? [0, 0.6, 1] : [0, 0.2, 0.8, 1],
//     isHero ? [1, 1, 1] : [0, 1, 1, 1]
//   );

//   // ✨ subtle glow control
//   const glowClass = isHero
//     ? "drop-shadow-[0_0_18px_rgba(96,165,250,0.35)]"
//     : "drop-shadow-[0_0_10px_rgba(96,165,250,0.22)]";

//   return (
//     <section ref={ref} className="relative w-full">
//       {/* TITLES */}
//       {!isModalOpen && (
//         <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none z-10">
//           <motion.div
//             style={{ scale, y, opacity }}
//             className="text-center px-4 w-full max-w-7xl"
//           >
//             <h1
//               className={`
//                 font-extrabold leading-[0.9] pb-4
//                 text-7xl md:text-8xl lg:text-9xl
//                 bg-gradient-to-r ${gradientFrom} ${gradientVia} ${gradientTo}
//                 bg-clip-text text-transparent
//                 ${glowClass}
//               `}
//             >
//               {title}
//             </h1>

//             {subtitle && (
//               <motion.p
//                 style={{ opacity }}
//                 className="text-gray-400 mt-6 text-xl md:text-2xl lg:text-3xl"
//               >
//                 {subtitle}
//               </motion.p>
//             )}
//           </motion.div>
//         </div>
//       )}

//       {/* CONTENT */}
//       <div className="relative z-10">
//         {children}
//       </div>
//     </section>
//   );
// }

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StickyTitleSection({ 
  title, 
  subtitle, 
  children, 
  isHero = false,
  titleColor = "text-white",
  gradientFrom = "from-blue-400",
  gradientVia = "via-blue-600", 
  gradientTo = "to-blue-800"
}) {
  const ref = useRef(null);

  const isModalOpen =
    typeof window !== "undefined" &&
    document.body.classList.contains("modal-open");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isHero
      ? ["start start", "center start"]
      : ["start end", "center start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isHero ? [1, 0.65, 0.35] : [1, 1, 0.45]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isHero ? [0, -250, -700] : [200, -120, -400]
  );

  const opacity = useTransform(
    scrollYProgress,
    isHero ? [0, 1] : [0, 0.2, 1],
    isHero ? [1, 1] : [0, 1, 1]
  );

  const glowClass = isHero
    ? "drop-shadow-[0_0_18px_rgba(96,165,250,0.35)]"
    : "drop-shadow-[0_0_10px_rgba(96,165,250,0.22)]";

  return (
    <section ref={ref} className="relative w-full overflow-x-hidden">
      {/* TITLES */}
      {!isModalOpen && (
        <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none z-10">
          <motion.div
            style={{ scale, y, opacity }}
            className="w-full px-4 flex flex-col items-center text-center"
          >
            <h1
              className={`
                font-extrabold leading-none pb-2
                w-full max-w-full
                text-center mx-auto break-words
                text-4xl sm:text-5xl md:text-7xl lg:text-9xl
                bg-gradient-to-r ${gradientFrom} ${gradientVia} ${gradientTo}
                bg-clip-text text-transparent
                ${glowClass}
              `}
            >
              {title}
            </h1>

            {subtitle && (
              <motion.p
                style={{ opacity }}
                className="mt-5 text-gray-400 text-base sm:text-lg md:text-2xl"
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        </div>
      )}

      {/* CONTENT */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}

