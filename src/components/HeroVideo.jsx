export default function HeroVideo() {
    return (
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/src/assets/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
  
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
  
        {/* Centered text */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-extrabold text-7xl md:text-8xl lg:text-9xl leading-none
            bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800
            bg-clip-text text-transparent">
            bydhruv
          </h1>
  
          <p className="mt-6 text-xl md:text-2xl text-gray-300">
            archives.
          </p>
        </div>
      </section>
    );
  }
  