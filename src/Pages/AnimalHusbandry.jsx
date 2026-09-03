import React from "react";

const AnimalHusbandry = () => {
  return (
    <div className="bg-cream-50 min-h-screen pt-20">

      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[500px]">
        <img
          src="/images/livestock-banner.jpg"
          alt="Livestock Care"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-ink-900/60 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
              Livestock Care
            </h1>

            <p className="mt-4 text-lg md:text-2xl text-wheat-200">
              Better Animal Health • Better Farm Income
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-olive-800">
            Comprehensive Livestock Management
          </h2>

          <p className="mt-4 text-ink-600 max-w-3xl mx-auto">
            Proper livestock care improves productivity, animal health,
            milk production and overall farm profitability.
          </p>
        </div>
      </section>

      {/* Animal Categories */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center text-ink-900 mb-10">
          Livestock Categories
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl p-8 text-center shadow hover:shadow-xl hover:-translate-y-1 transition-all border-t-4 border-olive-600">
            <div className="text-6xl">🐄</div>
            <h3 className="font-bold text-xl mt-4 text-ink-900">Cattle</h3>
            <p className="text-ink-600 mt-2">
              Dairy and beef cattle management.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow hover:shadow-xl hover:-translate-y-1 transition-all border-t-4 border-wheat-500">
            <div className="text-6xl">🐔</div>
            <h3 className="font-bold text-xl mt-4 text-ink-900">Poultry</h3>
            <p className="text-ink-600 mt-2">
              Broiler and layer farming solutions.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow hover:shadow-xl hover:-translate-y-1 transition-all border-t-4 border-ink-700">
            <div className="text-6xl">🐐</div>
            <h3 className="font-bold text-xl mt-4 text-ink-900">Goat Farming</h3>
            <p className="text-ink-600 mt-2">
              Nutrition and breeding support.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow hover:shadow-xl hover:-translate-y-1 transition-all border-t-4 border-olive-400">
            <div className="text-6xl">🐑</div>
            <h3 className="font-bold text-xl mt-4 text-ink-900">Sheep Farming</h3>
            <p className="text-ink-600 mt-2">
              Health and wool production care.
            </p>
          </div>

        </div>
      </section>

      {/* Care Timeline */}
      <section className="bg-wheat-50 py-16">
        <div className="max-w-5xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center text-olive-800 mb-12">
            Livestock Health Management
          </h2>

          <div className="space-y-8">

            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-wheat-400 text-ink-900 flex items-center justify-center font-bold">
                1
              </div>

              <div>
                <h3 className="font-bold text-xl text-ink-900">
                  Regular Vaccination
                </h3>

                <p className="text-ink-600">
                  Protect animals from common diseases and infections.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-wheat-400 text-ink-900 flex items-center justify-center font-bold">
                2
              </div>

              <div>
                <h3 className="font-bold text-xl text-ink-900">
                  Balanced Nutrition
                </h3>

                <p className="text-ink-600">
                  Provide quality feed and mineral supplements.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-wheat-400 text-ink-900 flex items-center justify-center font-bold">
                3
              </div>

              <div>
                <h3 className="font-bold text-xl text-ink-900">
                  Health Monitoring
                </h3>

                <p className="text-ink-600">
                  Early disease detection improves recovery rates.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-wheat-400 text-ink-900 flex items-center justify-center font-bold">
                4
              </div>

              <div>
                <h3 className="font-bold text-xl text-ink-900">
                  Proper Housing
                </h3>

                <p className="text-ink-600">
                  Ensure clean, safe and comfortable shelters.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Statistics — dark ink band instead of repeating the olive block every page */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto bg-ink-900 text-white rounded-3xl p-10">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-4xl font-bold text-wheat-300">20K+</h2>
              <p className="text-cream-100">Animals Supported</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-wheat-300">5K+</h2>
              <p className="text-cream-100">Farmers Helped</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-wheat-300">100+</h2>
              <p className="text-cream-100">Veterinary Experts</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-wheat-300">24/7</h2>
              <p className="text-cream-100">Support Available</p>
            </div>

          </div>

        </div>
      </section>

      {/* Benefits — three distinct tints instead of one flat repeated color */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center text-olive-800 mb-12">
            Benefits of Proper Livestock Care
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-olive-50 p-8 rounded-2xl text-center shadow">
              <div className="text-5xl mb-4">🥛</div>
              <h3 className="font-bold text-xl text-ink-900">
                Increased Milk Production
              </h3>
            </div>

            <div className="bg-wheat-100 p-8 rounded-2xl text-center shadow">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-bold text-xl text-ink-900">
                Higher Farm Income
              </h3>
            </div>

            <div className="bg-cream-100 p-8 rounded-2xl text-center shadow">
              <div className="text-5xl mb-4">🐄</div>
              <h3 className="font-bold text-xl text-ink-900">
                Better Animal Health
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* CTA — warm wheat gradient instead of repeating the olive block */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4">

          <h2 className="text-4xl font-bold text-olive-800">
            Caring for Livestock Starts Here
          </h2>

          <p className="mt-4 text-ink-600">
            Access expert guidance and livestock management solutions.
          </p>

          <button className="mt-8 bg-olive-700 text-white px-8 py-3 rounded-xl hover:bg-olive-800 transition">
            Explore Resources
          </button>

        </div>
      </section>

    </div>
  );
};

export default AnimalHusbandry;