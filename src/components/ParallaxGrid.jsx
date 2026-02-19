export default function ParallaxGrid() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id="grid"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 32 0 L 0 0 0 32"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1"
          />
        </pattern>

        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012"
            numOctaves="2"
            seed="2"
          />
          <feDisplacementMap in="SourceGraphic" scale="25" />
        </filter>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill="url(#grid)"
        filter="url(#noise)"
        opacity="0.6"
      />
    </svg>
  );
}
