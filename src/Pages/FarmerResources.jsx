import React from "react";
import {
  FaLeaf,
  FaSeedling,
  FaCloudSun,
  FaHandsHelping,
  FaArrowRight,
} from "react-icons/fa";
import Footer from "../components/Footer"; // footer path check kar lena

const FarmerResources = () => {
  const resources = [
    {
      icon: <FaSeedling />,
      title: "Crop Advisory",
      text: "Seasonal crop planning and farming guides for better productivity.",
    },
    {
      icon: <FaLeaf />,
      title: "Seed & Soil Health",
      text: "Best practices for seed selection and maintaining healthy soil.",
    },
    {
      icon: <FaCloudSun />,
      title: "Weather Insights",
      text: "Smart weather-based farming tips and crop protection guidance.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Expert Support",
      text: "Fertilizer usage and modern farming recommendations by experts.",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-cream-100 via-white to-olive-50 min-h-screen">

        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">

            <span className="bg-wheat-100 text-wheat-700 px-5 py-2 rounded-full text-sm font-semibold shadow">
              🌱 Smart Farming Solutions
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-olive-800 leading-tight">
              Farmer Resources
            </h1>

            <p className="mt-6 text-lg md:text-xl text-ink-500 max-w-3xl mx-auto leading-relaxed">
              Helping farmers with modern agricultural knowledge,
              expert guidance, and innovative farming resources
              for sustainable growth and higher productivity.
            </p>

            <button className="mt-8 bg-olive-700 hover:bg-olive-800 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 mx-auto transition duration-300 shadow-lg">
              Explore Resources
              <FaArrowRight />
            </button>
          </div>
        </section>

        {/* MAIN RESOURCE CARDS */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {resources.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-olive-100"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-wheat-100 to-wheat-200 text-olive-700 flex items-center justify-center text-3xl mb-6 shadow">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-olive-800 mb-4">
                  {item.title}
                </h3>

                <p className="text-ink-500 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURE SECTION */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* IMAGE */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
                alt="Farmer"
                className="rounded-3xl shadow-2xl w-full h-[450px] object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div>
              <span className="text-wheat-600 font-semibold uppercase tracking-widest">
                Why Choose Us
              </span>

              <h2 className="text-4xl font-extrabold text-olive-800 mt-4 mb-6">
                Supporting Farmers with Modern Agriculture
              </h2>

              <p className="text-ink-500 text-lg leading-relaxed mb-6">
                Agri Shoppers provides reliable farming resources,
                quality agricultural products, and expert farming
                support to empower farmers and improve crop yields.
              </p>

              <div className="space-y-5">

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-wheat-100 rounded-full flex items-center justify-center text-olive-700 text-xl">
                    ✓
                  </div>

                  <div>
                    <h4 className="font-bold text-olive-800 text-lg">
                      Trusted Agricultural Guidance
                    </h4>

                    <p className="text-ink-500">
                      Practical advice curated by agricultural experts.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-wheat-100 rounded-full flex items-center justify-center text-olive-700 text-xl">
                    ✓
                  </div>

                  <div>
                    <h4 className="font-bold text-olive-800 text-lg">
                      Sustainable Farming Solutions
                    </h4>

                    <p className="text-ink-500">
                      Eco-friendly and productivity-focused farming methods.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-wheat-100 rounded-full flex items-center justify-center text-olive-700 text-xl">
                    ✓
                  </div>

                  <div>
                    <h4 className="font-bold text-olive-800 text-lg">
                      Smart Technology Integration
                    </h4>

                    <p className="text-ink-500">
                      Combining modern technology with traditional farming.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto bg-gradient-to-r from-olive-800 to-olive-700 rounded-[40px] p-10 md:p-16 text-center text-white shadow-2xl">

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Grow Smarter with Agri Shoppers
            </h2>

            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 text-cream-200">
              Join thousands of farmers using trusted agricultural
              resources, expert guidance, and modern farming solutions.
            </p>

            <button className="bg-wheat-400 text-ink-900 hover:bg-wheat-500 px-10 py-4 rounded-full font-bold text-lg transition duration-300 shadow-lg">
              Start Exploring
            </button>

          </div>
        </section>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default FarmerResources;