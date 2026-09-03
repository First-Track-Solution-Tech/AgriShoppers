import React from "react";

const Organic = () => {
  const practices = [
    {
      icon: "♻️",
      title: "Composting",
      desc: "Convert organic waste into nutrient-rich natural fertilizer.",
      color: "bg-wheat-100",
    },
    {
      icon: "🌱",
      title: "Crop Rotation",
      desc: "Improve soil fertility and reduce pest infestations naturally.",
      color: "bg-olive-100",
    },
    {
      icon: "🐛",
      title: "Natural Pest Control",
      desc: "Use biological methods instead of harmful chemicals.",
      color: "bg-cream-200",
    },
    {
      icon: "💧",
      title: "Water Conservation",
      desc: "Save water through efficient irrigation techniques.",
      color: "bg-wheat-200",
    },
  ];

  return (
    <div className="bg-cream-50 min-h-screen pt-20">

      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[500px]">
        <img
          src="/images/organic-banner.jpg"
          alt="Organic Farming"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-ink-900/55 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
              Organic Farming
            </h1>

            <p className="mt-4 text-lg md:text-2xl text-wheat-100">
              Healthy Soil • Healthy Food • Healthy Future
            </p>

            <button className="mt-6 px-8 py-3 bg-wheat-500 hover:bg-wheat-600 text-ink-900 rounded-xl font-semibold transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 py-14 text-center">
        <h2 className="text-3xl font-bold text-ink-900">
          Sustainable Farming for a Better Tomorrow
        </h2>

        <p className="mt-4 text-ink-600 max-w-3xl mx-auto">
          Organic farming focuses on natural cultivation methods,
          environmental sustainability, and producing healthier food
          without harmful chemicals.
        </p>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center text-ink-900 mb-12">
          Benefits of Organic Farming
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white border border-wheat-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
            <div className="text-5xl mb-4">🌿</div>
            <h3 className="font-bold text-xl text-ink-900">
              Chemical Free
            </h3>
            <p className="text-ink-600 mt-2">
              Grow crops naturally without synthetic chemicals.
            </p>
          </div>

          <div className="bg-white border border-olive-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
            <div className="text-5xl mb-4">🌾</div>
            <h3 className="font-bold text-xl text-ink-900">
              Better Soil Health
            </h3>
            <p className="text-ink-600 mt-2">
              Improves fertility and long-term soil productivity.
            </p>
          </div>

          <div className="bg-white border border-wheat-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
            <div className="text-5xl mb-4">🍎</div>
            <h3 className="font-bold text-xl text-ink-900">
              Healthy Produce
            </h3>
            <p className="text-ink-600 mt-2">
              Produce nutritious and safer food for consumers.
            </p>
          </div>

          <div className="bg-white border border-olive-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
            <div className="text-5xl mb-4">🌎</div>
            <h3 className="font-bold text-xl text-ink-900">
              Eco Friendly
            </h3>
            <p className="text-ink-600 mt-2">
              Protects biodiversity and the environment.
            </p>
          </div>

        </div>
      </section>

      {/* Organic Practices */}
      <section className="bg-wheat-50 py-16">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center text-ink-900 mb-12">
            Sustainable Farming Practices
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practices.map((item, index) => (
              <div
                key={index}
                className={`${item.color} rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="text-5xl mb-4">
                  {item.icon}
                </div>

                <h3 className="font-bold text-xl mb-3 text-ink-900">
                  {item.title}
                </h3>

                <p className="text-ink-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Statistics — dark ink band, distinct from the olive gradient used elsewhere */}
      <section className="bg-ink-900 text-cream-50 py-16">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-4xl font-bold text-wheat-300">50K+</h2>
              <p className="text-ink-200 mt-1">Organic Farmers</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-wheat-300">100+</h2>
              <p className="text-ink-200 mt-1">Organic Products</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-wheat-300">25+</h2>
              <p className="text-ink-200 mt-1">States Covered</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-wheat-300">100%</h2>
              <p className="text-ink-200 mt-1">Sustainable Practices</p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Organic Farming */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center text-ink-900 mb-12">
            Why Choose Organic Farming?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-cream-100 p-8 rounded-2xl shadow-sm text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="font-bold text-xl text-ink-900">
                Healthy Soil
              </h3>
            </div>

            <div className="bg-wheat-100 p-8 rounded-2xl shadow-sm text-center">
              <div className="text-5xl mb-4">🍏</div>
              <h3 className="font-bold text-xl text-ink-900">
                Safe Food
              </h3>
            </div>

            <div className="bg-olive-50 p-8 rounded-2xl shadow-sm text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-bold text-xl text-ink-900">
                Higher Value
              </h3>
            </div>

            <div className="bg-cream-200 p-8 rounded-2xl shadow-sm text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="font-bold text-xl text-ink-900">
                Sustainable Future
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* CTA — wheat-to-olive diagonal, distinct from the flat olive bands elsewhere */}
      <section className="py-16 bg-gradient-to-br from-wheat-100 via-cream-50 to-olive-50">
        <div className="max-w-4xl mx-auto text-center px-4">

          <h2 className="text-4xl font-bold text-ink-900">
            Start Your Organic Farming Journey Today
          </h2>

          <p className="mt-4 text-ink-600">
            Learn sustainable techniques and contribute to a healthier future.
          </p>

          <button className="mt-8 px-8 py-3 bg-ink-900 hover:bg-ink-800 text-wheat-300 rounded-xl font-semibold transition">
            Explore Organic Resources
          </button>

        </div>
      </section>

    </div>
  );
};

export default Organic;