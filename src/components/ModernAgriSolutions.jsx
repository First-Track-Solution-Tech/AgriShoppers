import React from "react";

const solutions = [
  {
    title: "Soil Health Check",
    info: "Understand soil quality before cultivation",
    icon: "🧫",
  },
  {
    title: "Water Management",
    info: "Efficient irrigation for higher yield",
    icon: "🚿",
  },
  {
    title: "Climate Insights",
    info: "Weather-based crop planning",
    icon: "⛅",
  },
  {
    title: "Expert Guidance",
    info: "Improve productivity with advisory",
    icon: "👨‍🌾",
  },
];

const ModernAgriSolutions = () => {
  return (
    <section className="bg-olive-100 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-olive-800">
            Modern Agriculture Solutions
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Smart farming services designed to improve crop productivity
            and sustainability.
          </p>
        </div>

        {/* Solutions Grid */}
        <div
          className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6 lg:gap-8
          "
        >
          {solutions.map((item, index) => (
            <div
              key={index}
              className="
                bg-white rounded-2xl p-6 sm:p-8
                text-center border
                transition-all duration-300
                md:hover:shadow-2xl md:hover:-translate-y-2
              "
            >
              {/* Icon */}
              <div className="text-4xl mb-4">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.info}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ModernAgriSolutions;
