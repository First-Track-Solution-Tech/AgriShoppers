import React from "react";

const Organic = () => {
  const practices = [
    {
      icon: "♻️",
      title: "Composting",
      desc: "Convert organic waste into nutrient-rich natural fertilizer.",
      color: "bg-green-100",
    },
    {
      icon: "🌱",
      title: "Crop Rotation",
      desc: "Improve soil fertility and reduce pest infestations naturally.",
      color: "bg-lime-100",
    },
    {
      icon: "🐛",
      title: "Natural Pest Control",
      desc: "Use biological methods instead of harmful chemicals.",
      color: "bg-emerald-100",
    },
    {
      icon: "💧",
      title: "Water Conservation",
      desc: "Save water through efficient irrigation techniques.",
      color: "bg-teal-100",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">

      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[500px]">
        <img
          src="/images/organic-banner.jpg"
          alt="Organic Farming"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
              Organic Farming
            </h1>

            <p className="mt-4 text-lg md:text-2xl">
              Healthy Soil • Healthy Food • Healthy Future
            </p>

            <button className="mt-6 px-8 py-3 bg-green-600 hover:bg-green-700 rounded-xl font-semibold transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 py-14 text-center">
        <h2 className="text-3xl font-bold text-green-700">
          Sustainable Farming for a Better Tomorrow
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Organic farming focuses on natural cultivation methods,
          environmental sustainability, and producing healthier food
          without harmful chemicals.
        </p>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Benefits of Organic Farming
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-green-100 rounded-2xl p-8 text-center shadow">
            <div className="text-5xl mb-4">🌿</div>
            <h3 className="font-bold text-xl">
              Chemical Free
            </h3>
            <p className="text-gray-600 mt-2">
              Grow crops naturally without synthetic chemicals.
            </p>
          </div>

          <div className="bg-lime-100 rounded-2xl p-8 text-center shadow">
            <div className="text-5xl mb-4">🌾</div>
            <h3 className="font-bold text-xl">
              Better Soil Health
            </h3>
            <p className="text-gray-600 mt-2">
              Improves fertility and long-term soil productivity.
            </p>
          </div>

          <div className="bg-emerald-100 rounded-2xl p-8 text-center shadow">
            <div className="text-5xl mb-4">🍎</div>
            <h3 className="font-bold text-xl">
              Healthy Produce
            </h3>
            <p className="text-gray-600 mt-2">
              Produce nutritious and safer food for consumers.
            </p>
          </div>

          <div className="bg-teal-100 rounded-2xl p-8 text-center shadow">
            <div className="text-5xl mb-4">🌎</div>
            <h3 className="font-bold text-xl">
              Eco Friendly
            </h3>
            <p className="text-gray-600 mt-2">
              Protects biodiversity and the environment.
            </p>
          </div>

        </div>
      </section>

      {/* Organic Practices */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
            Sustainable Farming Practices
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practices.map((item, index) => (
              <div
                key={index}
                className={`${item.color} rounded-2xl p-8 shadow hover:shadow-xl transition`}
              >
                <div className="text-5xl mb-4">
                  {item.icon}
                </div>

                <h3 className="font-bold text-xl mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-4xl font-bold">50K+</h2>
              <p>Organic Farmers</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">100+</h2>
              <p>Organic Products</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">25+</h2>
              <p>States Covered</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">100%</h2>
              <p>Sustainable Practices</p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Organic Farming */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
            Why Choose Organic Farming?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-green-50 p-8 rounded-2xl shadow text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="font-bold text-xl">
                Healthy Soil
              </h3>
            </div>

            <div className="bg-lime-50 p-8 rounded-2xl shadow text-center">
              <div className="text-5xl mb-4">🍏</div>
              <h3 className="font-bold text-xl">
                Safe Food
              </h3>
            </div>

            <div className="bg-emerald-50 p-8 rounded-2xl shadow text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-bold text-xl">
                Higher Value
              </h3>
            </div>

            <div className="bg-teal-50 p-8 rounded-2xl shadow text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="font-bold text-xl">
                Sustainable Future
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4">

          <h2 className="text-4xl font-bold text-green-700">
            Start Your Organic Farming Journey Today
          </h2>

          <p className="mt-4 text-gray-600">
            Learn sustainable techniques and contribute to a healthier future.
          </p>

          <button className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition">
            Explore Organic Resources
          </button>

        </div>
      </section>

    </div>
  );
};

export default Organic;