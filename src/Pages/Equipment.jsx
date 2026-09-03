import React from "react";

const Equipment = () => {
    const toolColors = [
        "bg-gradient-to-br from-olive-100 to-olive-200",
        "bg-gradient-to-br from-wheat-100 to-wheat-200",
        "bg-gradient-to-br from-cream-200 to-wheat-200",
        "bg-gradient-to-br from-olive-50 to-olive-100",
        "bg-gradient-to-br from-wheat-50 to-wheat-100",
        "bg-gradient-to-br from-olive-200 to-olive-300",
        "bg-gradient-to-br from-wheat-200 to-wheat-300",
        "bg-gradient-to-br from-cream-100 to-olive-100",
      ];
      
      const farmTools = [
        {
          icon: "🚜",
          title: "Seed Drill",
          desc: "Used for sowing seeds uniformly at the correct depth and spacing.",
        },
        {
          icon: "💦",
          title: "Sprayer",
          desc: "Helps apply pesticides, herbicides and fertilizers efficiently.",
        },
        {
          icon: "🌱",
          title: "Cultivator",
          desc: "Used for soil preparation and removing unwanted weeds.",
        },
        {
          icon: "✂️",
          title: "Pruning Shears",
          desc: "Ideal for trimming plants, branches and maintaining crops.",
        },
        {
          icon: "⛏️",
          title: "Hoe",
          desc: "Traditional tool used for digging and weed removal.",
        },
        {
          icon: "🌾",
          title: "Harvester",
          desc: "Helps farmers harvest crops quickly and efficiently.",
        },
        {
          icon: "🚿",
          title: "Drip Irrigation",
          desc: "Saves water and provides controlled irrigation to crops.",
        },
        {
          icon: "🔧",
          title: "Tool Kit",
          desc: "Collection of essential tools for daily farming activities.",
        },
      ];
  return (
    
    <div className="bg-cream-50 min-h-screen pt-20">

      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[450px]">
        <img
          src="/images/farm-tools-banner.jpg"
          alt="Farm Tools"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              Farm Tools & Equipment
            </h1>

            <p className="mt-4 text-lg md:text-xl">
              Modern tools for smart and efficient farming
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-olive-800">
            Essential Tools for Every Farmer
          </h2>

          <p className="mt-4 text-ink-600 max-w-3xl mx-auto">
            Discover the most commonly used farm tools that help improve
            productivity, reduce manual effort, and support modern
            agricultural practices.
          </p>
        </div>
      </section>

      {/* Farm Tools Section */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
  <h2 className="text-3xl font-bold text-center text-olive-800 mb-12">
    Essential Farm Tools
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    {farmTools.map((tool, index) => (
      <div
        key={index}
        className={`${toolColors[index]}
          rounded-2xl
          p-8
          shadow-md
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all
          duration-300`}
      >
        <div className="text-5xl mb-4">
          {tool.icon}
        </div>

        <h3 className="text-xl font-bold mb-3 text-ink-800">
          {tool.title}
        </h3>

        <p className="text-ink-700 leading-relaxed">
          {tool.desc}
        </p>
      </div>
    ))}
  </div>
</section>

      {/* Statistics Section */}
      <section className="bg-olive-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-4xl font-bold">10K+</h3>
              <p className="mt-2">Farmers Served</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="mt-2">Equipment Options</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="mt-2">Trusted Brands</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="mt-2">Customer Support</p>
            </div>

          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center text-olive-800 mb-12">
            Why Choose Our Farm Equipment?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-wheat-50 p-8 rounded-xl shadow text-center">
              <div className="text-5xl mb-4">🚜</div>

              <h3 className="font-bold text-xl mb-2 text-ink-800">
                Quality Equipment
              </h3>

              <p className="text-ink-600">
                Reliable and durable tools designed for modern farming needs.
              </p>
            </div>

            <div className="bg-wheat-50 p-8 rounded-xl shadow text-center">
              <div className="text-5xl mb-4">💰</div>

              <h3 className="font-bold text-xl mb-2 text-ink-800">
                Affordable Solutions
              </h3>

              <p className="text-ink-600">
                Cost-effective tools that help maximize farm productivity.
              </p>
            </div>

            <div className="bg-wheat-50 p-8 rounded-xl shadow text-center">
              <div className="text-5xl mb-4">⚡</div>

              <h3 className="font-bold text-xl mb-2 text-ink-800">
                Better Efficiency
              </h3>

              <p className="text-ink-600">
                Reduce manual effort and save valuable farming time.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Equipment;