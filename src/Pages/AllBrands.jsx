import React from "react";
import { brandsData } from "../data/brandsData";

const AllBrands = () => {
  return (
    <section className="bg-gray-50 pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Our Trusted Brand Partners
          </h1>

          <p className="text-gray-600 mt-3 text-base sm:text-lg">
            We collaborate with India's top agricultural brands
          </p>
        </div>

        {/* Brands Grid */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            gap-6
          "
        >
          {brandsData.map((brand) => (
            <div
              key={brand.id}
              className="
                bg-white
                rounded-2xl
                border
                shadow-sm
                p-6
                h-40
                flex
                items-center
                justify-center
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="
                  max-h-20
                  max-w-full
                  object-contain
                  transition-transform
                  duration-300
                  hover:scale-110
                "
                onError={(e) => {
                  e.target.src = "/images/logo.png";
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllBrands;