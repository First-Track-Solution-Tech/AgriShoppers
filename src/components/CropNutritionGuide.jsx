import React from "react";
import { useNavigate } from "react-router-dom";

const nutritionData = [
  {
    nutrient: "Nitrogen Support",
    purpose: "Healthy leaf development",
    icon: "🌿",
    gradient: "from-olive-600 to-olive-800",
    slug: "nitrogen",
  },
  {
    nutrient: "Root Strength",
    purpose: "Improves flowering & roots",
    icon: "🌱",
    gradient: "from-wheat-600 to-wheat-800",
    slug: "root",
  },
  {
    nutrient: "Yield Booster",
    purpose: "Enhances crop resistance",
    icon: "🌾",
    gradient: "from-ink-700 to-olive-900",
    slug: "yield",
  },
  {
    nutrient: "Trace Elements",
    purpose: "Balances overall growth",
    icon: "✨",
    gradient: "from-wheat-700 to-olive-800",
    slug: "micro",
  },
];

const CropNutritionGuide = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-cream-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-olive-800">
        Crop Nutrition Guide
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {nutritionData.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl p-6 text-center bg-gradient-to-br ${item.gradient}
                      shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
          >
            {/* Icon watermark */}
            <span className="absolute -right-3 -top-3 text-7xl opacity-15 select-none">
              {item.icon}
            </span>

            <div className="relative z-10">
              <span className="text-3xl">{item.icon}</span>

              <h3 className="font-bold text-lg text-cream-50 mt-3 mb-1.5">
                {item.nutrient}
              </h3>

              <p className="text-sm text-cream-100/90">
                {item.purpose}
              </p>

              <button
                onClick={() => navigate(`/nutrition/${item.slug}`)}
                className="mt-4 inline-flex items-center gap-1 text-wheat-200 font-semibold text-sm transition-all duration-300 hover:gap-2"
              >
                Explore
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CropNutritionGuide;