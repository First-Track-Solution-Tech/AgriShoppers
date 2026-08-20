import React from "react";

const points = [
  {
    title: "100% Genuine Products",
    desc: "Certified and quality-checked agricultural inputs",
    icon: "✅",
  },
  {
    title: "Trusted by Farmers",
    desc: "Used and recommended by thousands of farmers",
    icon: "🌾",
  },
  {
    title: "Fast & Safe Delivery",
    desc: "Quick doorstep delivery across regions",
    icon: "🚚",
  },
  {
    title: "Affordable Pricing",
    desc: "Best prices without compromising quality",
    icon: "💰",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-olive-600">
            Why Choose Us
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            We are committed to delivering reliable agricultural solutions
            that help farmers grow better crops.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6 lg:gap-8
          "
        >
          {points.map((item, i) => (
            <div
              key={i}
              className="
                bg-gradient-to-b from-olive-100 to-white
                rounded-2xl p-6 sm:p-7
                text-center border
                transition-all duration-300
                md:hover:shadow-xl md:hover:-translate-y-2
              "
            >
              {/* Icon */}
              <div className="text-3xl mb-4">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
