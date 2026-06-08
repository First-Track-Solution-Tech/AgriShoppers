import React from "react";

const services = [
  {
    icon: "🌱",
    title: "Crop Advisory",
    desc: "Get expert recommendations for crop planning and management.",
    color: "bg-green-100",
  },
  {
    icon: "🧪",
    title: "Soil Testing",
    desc: "Analyze soil health and improve productivity with proper guidance.",
    color: "bg-blue-100",
  },
  {
    icon: "💧",
    title: "Irrigation Support",
    desc: "Efficient water management and irrigation planning solutions.",
    color: "bg-cyan-100",
  },
  {
    icon: "🐛",
    title: "Pest Management",
    desc: "Expert help to control pests and protect crops effectively.",
    color: "bg-yellow-100",
  },
  {
    icon: "📈",
    title: "Market Guidance",
    desc: "Stay updated with market trends and crop pricing insights.",
    color: "bg-purple-100",
  },
  {
    icon: "🚜",
    title: "Farm Equipment Support",
    desc: "Recommendations for tools and modern farming equipment.",
    color: "bg-orange-100",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">

      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[500px]">
        <img
          src="/images/farmer-services-banner.jpg"
          alt="Farmer Services"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
              Farmer Services
            </h1>

            <p className="mt-4 text-lg md:text-2xl">
              Expert Guidance for Better Farming
            </p>

            <button className="mt-6 px-8 py-3 bg-green-600 hover:bg-green-700 rounded-xl font-semibold transition">
              Get Support
            </button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 py-14 text-center">
        <h2 className="text-3xl font-bold text-green-700">
          Helping Farmers Grow Better
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          We provide expert agricultural services, technical guidance,
          and practical solutions to improve farm productivity and profitability.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.color} rounded-2xl p-8 shadow hover:shadow-xl transition`}
            >
              <div className="text-5xl mb-4">
                {service.icon}
              </div>

              <h3 className="font-bold text-xl mb-3">
                {service.title}
              </h3>

              <p className="text-gray-700">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Help */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
            How We Help Farmers
          </h2>

          <div className="space-y-8">

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                1
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Understand Your Needs
                </h3>

                <p className="text-gray-600">
                  We assess your farming challenges and requirements.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                2
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Expert Consultation
                </h3>

                <p className="text-gray-600">
                  Receive personalized agricultural guidance.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                3
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Implementation Support
                </h3>

                <p className="text-gray-600">
                  Apply recommended practices on your farm.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                4
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Continuous Monitoring
                </h3>

                <p className="text-gray-600">
                  Ongoing support for better farming outcomes.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-4xl font-bold">25K+</h2>
              <p>Farmers Supported</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">500+</h2>
              <p>Expert Advisors</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">100+</h2>
              <p>Service Programs</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">24/7</h2>
              <p>Support Available</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4">

          <h2 className="text-4xl font-bold text-green-700">
            Need Expert Farming Advice?
          </h2>

          <p className="mt-4 text-gray-600">
            Connect with our agricultural experts and improve your farming success.
          </p>

          <button className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition">
            Contact Our Experts
          </button>

        </div>
      </section>

    </div>
  );
};

export default Services;