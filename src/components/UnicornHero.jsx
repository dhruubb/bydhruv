import { useEffect } from "react";

export default function UnicornHero() {
  useEffect(() => {
    // Avoid loading script multiple times
    if (window.UnicornStudio) {
      window.UnicornStudio.init();
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.3/dist/unicornStudio.umd.js";
    script.async = true;

    script.onload = () => {
      if (window.UnicornStudio) {
        window.UnicornStudio.init();
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div
        data-us-project="3CG4qgWFUs1yNY34krKV"
        className="w-full h-full"
      />

      {/* Optional overlay text (remove if you want pure visual) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-white text-5xl md:text-7xl font-bold mix-blend-difference">
          bydhruv
        </h1>
      </div>
    </section>
  );
}
