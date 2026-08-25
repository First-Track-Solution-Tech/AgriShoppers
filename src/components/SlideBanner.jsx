import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: "/images/slide1.jpg",
    eyebrow: "🌾 Smart Farming Technology",
    title: "Smart Farming Starts Here",
    subtitle: "Modern solutions for better yield and profit",
    cta: true,
  },
  {
    id: 2,
    image: "/images/slide2.jpg",
    eyebrow: "🌱 Balanced Crop Nutrition",
    title: "Balanced Nutrition for Healthy Crops",
    subtitle: "Right nutrients at every growth stage",
    cta: false,
  },
  {
    id: 3,
    image: "/images/slide3.jpg",
    eyebrow: "🛡️ Trusted Crop Protection",
    title: "Protect Crops, Increase Productivity",
    subtitle: "Trusted crop protection solutions",
    cta: true,
  },
];

const SlideBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="relative min-w-full flex flex-col justify-end
                       aspect-[3/4] sm:aspect-[16/10] md:aspect-[16/8] lg:aspect-[21/8]
                       min-h-[420px] sm:min-h-0"
          >
            {/* Background image fills the aspect-ratio box completely */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink-950/85 via-ink-900/30 to-transparent" />

            {/* Content sits in normal flow at the bottom, so it can never be clipped */}
            <div className="relative z-10 p-4 sm:p-8 md:p-12">
              <div
                key={current === index ? `active-${slide.id}` : slide.id}
                className={`bg-ink-900/60 backdrop-blur-md border border-wheat-400/30 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-7 max-w-xl ${
                  current === index ? "animate-hero-in" : ""
                }`}
              >
                <span className="inline-block bg-wheat-400/20 border border-wheat-400/40 text-wheat-300 text-xs sm:text-sm font-semibold tracking-wide px-3 py-1 rounded-full">
                  {slide.eyebrow}
                </span>

                <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-cream-50">
                  {slide.title}
                </h2>

                <p className="mt-2 text-xs sm:text-sm md:text-base text-cream-200">
                  {slide.subtitle}
                </p>

                {slide.cta && (
                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/products"
                      className="bg-wheat-400 hover:bg-wheat-500 px-5 py-2.5 rounded-lg text-ink-900 font-semibold shadow-lg transition text-center"
                    >
                      Shop Now
                    </Link>
                    <Link
                      to="/categories"
                      className="border-2 border-cream-100 px-5 py-2.5 rounded-lg text-cream-100 hover:bg-cream-100 hover:text-olive-800 font-semibold transition text-center"
                    >
                      Explore Crops
                    </Link>
                  </div>
                )}

                <div className="flex gap-2 mt-5">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        current === i
                          ? "w-6 bg-wheat-400"
                          : "w-2 bg-cream-100/40 hover:bg-cream-100/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SlideBanner;