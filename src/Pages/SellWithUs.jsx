import React from "react";

const SellWithUs = () => {
  return (
    <div className="bg-cream-50 min-h-screen pt-20">

      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[500px]">
        <img
          src="/images/seller-banner.jpg"
          alt="Become a Seller"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-ink-900/55 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
              Become a Seller
            </h1>

            <p className="mt-4 text-lg md:text-2xl text-cream-100">
              Grow Your Agricultural Business with AgriShop
            </p>

            <button className="mt-6 px-8 py-3 bg-olive-600 hover:bg-olive-700 rounded-xl font-semibold transition">
              Start Selling
            </button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 py-14 text-center">
        <h2 className="text-3xl font-bold text-olive-800">
          Reach More Farmers Across India
        </h2>

        <p className="mt-4 text-ink-600 max-w-3xl mx-auto">
          Join our growing network of agricultural brands, manufacturers,
          wholesalers, and distributors. Showcase your products to thousands
          of farmers and agri-businesses.
        </p>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center text-ink-900 mb-12">
          Why Sell With Us?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border-t-4 border-olive-600 hover:shadow-lg transition">
            <div className="text-5xl mb-4">🌾</div>
            <h3 className="font-bold text-xl text-ink-900">
              Reach Farmers
            </h3>
            <p className="mt-2 text-ink-600">
              Connect directly with farmers across the country.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border-t-4 border-wheat-500 hover:shadow-lg transition">
            <div className="text-5xl mb-4">📈</div>
            <h3 className="font-bold text-xl text-ink-900">
              Increase Sales
            </h3>
            <p className="mt-2 text-ink-600">
              Expand your market and boost revenue.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border-t-4 border-olive-400 hover:shadow-lg transition">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="font-bold text-xl text-ink-900">
              Easy Logistics
            </h3>
            <p className="mt-2 text-ink-600">
              Streamlined order and delivery process.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border-t-4 border-ink-700 hover:shadow-lg transition">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="font-bold text-xl text-ink-900">
              Trusted Platform
            </h3>
            <p className="mt-2 text-ink-600">
              Build trust with verified customers.
            </p>
          </div>

        </div>
      </section>

      {/* How It Works — connected timeline instead of a plain list */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center text-olive-800 mb-12">
            How to Start Selling
          </h2>

          <div className="relative space-y-10 before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-wheat-300">

            <div className="relative flex gap-5">
              <div className="relative z-10 w-12 h-12 shrink-0 rounded-full bg-olive-700 text-white flex items-center justify-center font-bold">
                1
              </div>

              <div className="pt-1.5">
                <h3 className="font-bold text-xl text-ink-900">
                  Register
                </h3>
                <p className="text-ink-600">
                  Fill out the seller registration form.
                </p>
              </div>
            </div>

            <div className="relative flex gap-5">
              <div className="relative z-10 w-12 h-12 shrink-0 rounded-full bg-olive-700 text-white flex items-center justify-center font-bold">
                2
              </div>

              <div className="pt-1.5">
                <h3 className="font-bold text-xl text-ink-900">
                  Verification
                </h3>
                <p className="text-ink-600">
                  Our team verifies your business details.
                </p>
              </div>
            </div>

            <div className="relative flex gap-5">
              <div className="relative z-10 w-12 h-12 shrink-0 rounded-full bg-olive-700 text-white flex items-center justify-center font-bold">
                3
              </div>

              <div className="pt-1.5">
                <h3 className="font-bold text-xl text-ink-900">
                  Add Products
                </h3>
                <p className="text-ink-600">
                  Upload your products and inventory.
                </p>
              </div>
            </div>

            <div className="relative flex gap-5">
              <div className="relative z-10 w-12 h-12 shrink-0 rounded-full bg-wheat-500 text-ink-900 flex items-center justify-center font-bold">
                4
              </div>

              <div className="pt-1.5">
                <h3 className="font-bold text-xl text-ink-900">
                  Start Selling
                </h3>
                <p className="text-ink-600">
                  Receive orders and grow your business.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-olive-800 to-olive-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-4xl font-bold text-wheat-300">10K+</h2>
              <p className="text-cream-100 mt-1">Farmers</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-wheat-300">500+</h2>
              <p className="text-cream-100 mt-1">Products</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-wheat-300">100+</h2>
              <p className="text-cream-100 mt-1">Sellers</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-wheat-300">24/7</h2>
              <p className="text-cream-100 mt-1">Support</p>
            </div>

          </div>

        </div>
      </section>

      {/* Seller Form */}
      <section className="bg-wheat-50 py-16">
        <div className="max-w-3xl mx-auto px-4">

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

            <h2 className="text-3xl font-bold text-center text-olive-800 mb-2">
              Seller Registration
            </h2>

            <p className="text-center text-ink-600 mb-8">
              Tell us a bit about your business and our team will get in touch.
            </p>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Business Name"
                className="w-full border border-ink-200 rounded-xl p-3 text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
              />

              <input
                type="text"
                placeholder="Owner Name"
                className="w-full border border-ink-200 rounded-xl p-3 text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-ink-200 rounded-xl p-3 text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-ink-200 rounded-xl p-3 text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
              />

              <input
                type="text"
                placeholder="Product Category"
                className="w-full border border-ink-200 rounded-xl p-3 text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
              />

              <textarea
                rows="4"
                placeholder="Tell us about your business"
                className="w-full border border-ink-200 rounded-xl p-3 text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
              />

              <button
                type="submit"
                className="w-full bg-olive-700 hover:bg-olive-800 text-white py-3 rounded-xl font-semibold transition"
              >
                Submit Application
              </button>

            </form>

          </div>

        </div>
      </section>

    </div>
  );
};

export default SellWithUs;