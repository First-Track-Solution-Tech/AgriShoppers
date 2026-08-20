
import React from "react";
import { brandsData } from "../data/brandsData";

const Brands = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-olive-800">
            Trusted Brands
          </h2>

          <p className="text-gray-600 mt-2">
            We partner with India's leading agricultural brands to provide
            genuine and high-quality products.
          </p>
        </div>

        {/* Auto Scroll */}
        <div className="relative overflow-hidden">

          <div
            className="flex gap-5 animate-scroll"
            style={{ width: "max-content" }}
          >
            {[...brandsData, ...brandsData].map((brand, index) => (
              <div
                key={index}
                className="
                  min-w-[180px]
                  sm:min-w-[200px]
                  bg-white
                  rounded-2xl
                  p-4
                  border border-green-100
                  shadow-md
                  hover:shadow-xl
                  transition-all
                "
              >
                <div className="flex flex-col items-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-16 sm:h-20 object-contain"
                  />

                  <h3 className="mt-3 text-center font-semibold text-gray-800">
                    {brand.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* CSS */}
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 45s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default Brands;