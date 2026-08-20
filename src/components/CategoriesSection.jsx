import React, { useState } from "react";
import { categoriesData } from "../data/categories";

const CategoriesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = showAll
    ? categoriesData
    : categoriesData.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-olive-800">
            Shop by Farming Needs
          </h2>
          <p className="mt-2 text-ink-500 text-sm sm:text-base max-w-xl">
            Everything required for modern and traditional agriculture
          </p>
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="text-wheat-600 font-semibold hover:text-wheat-700 hover:underline"
        >
          {showAll ? "Show Less ←" : "View All Categories →"}
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {visibleCategories.map((cat) => (
          <div
            key={cat.id}
            className="
              group relative w-full h-72 sm:h-80 lg:h-96
              rounded-2xl overflow-hidden border border-olive-100
              shadow-sm transition-all duration-300
              hover:shadow-2xl hover:-translate-y-2 hover:border-wheat-300
            "
          >
            {/* Image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-900/40 to-transparent" />

            {/* Text-on-image content */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-cream-50">
                {cat.name}
              </h3>

              <p className="text-sm text-cream-200 mt-1.5 line-clamp-2">
                {cat.description}
              </p>

              <span className="inline-flex items-center gap-1 mt-3 text-wheat-300 font-semibold text-sm transition-all duration-300 group-hover:gap-2">
                Explore
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;