import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
{
id: 1,
image: "/images/slide1.jpg",
title: "Smart Farming Starts Here",
subtitle: "Modern solutions for better yield and profit",
cta: true,
},
{
id: 2,
image: "/images/slide2.jpg",
title: "Balanced Nutrition for Healthy Crops",
subtitle: "Right nutrients at every growth stage",
cta: false,
},
{
id: 3,
image: "/images/slide3.jpg",
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

return ( <section className="relative w-full overflow-hidden mt-4">
{/* Slides */}
<div
className="flex transition-transform duration-1000 ease-in-out"
style={{
transform: `translateX(-${current * 100}%)`,
}}
>
{slides.map((slide) => ( <div
         key={slide.id}
         className="relative min-w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px]"
       >
{/* Banner Image */} <img
           src={slide.image}
           alt={slide.title}
           className="w-full h-full object-cover"
         />

```
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
            <div className="max-w-2xl text-center sm:text-left text-white">

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {slide.title}
              </h2>

              <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200">
                {slide.subtitle}
              </p>

              {slide.cta && (
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">

                  <Link
                    to="/products"
                    className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-semibold transition w-full sm:w-auto text-center"
                  >
                    Shop Now
                  </Link>

                  <Link
                    to="/categories"
                    className="border-2 border-white px-6 py-3 rounded-lg text-white hover:bg-white hover:text-green-700 font-semibold transition w-full sm:w-auto text-center"
                  >
                    Explore Crops
                  </Link>

                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Dots */}
  {/* <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-10">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrent(index)}
        className={`h-3 w-3 rounded-full transition-all duration-300 ${
          current === index
            ? "bg-green-500 scale-125"
            : "bg-white/70"
        }`}
      />
    ))}
  </div> */}
</section>


);
};

export default SlideBanner;