import React from "react";

const SellWithUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">

      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[500px]">
        <img
          src="/images/seller-banner.jpg"
          alt="Become a Seller"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
              Become a Seller
            </h1>

            <p className="mt-4 text-lg md:text-2xl">
              Grow Your Agricultural Business with AgriShop
            </p>

            <button className="mt-6 px-8 py-3 bg-green-600 hover:bg-green-700 rounded-xl font-semibold transition">
              Start Selling
            </button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 py-14 text-center">
        <h2 className="text-3xl font-bold text-green-700">
          Reach More Farmers Across India
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Join our growing network of agricultural brands, manufacturers,
          wholesalers, and distributors. Showcase your products to thousands
          of farmers and agri-businesses.
        </p>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Sell With Us?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-green-100 rounded-2xl p-8 text-center shadow">
            <div className="text-5xl mb-4">🌾</div>
            <h3 className="font-bold text-xl">
              Reach Farmers
            </h3>
            <p className="mt-2 text-gray-600">
              Connect directly with farmers across the country.
            </p>
          </div>

          <div className="bg-blue-100 rounded-2xl p-8 text-center shadow">
            <div className="text-5xl mb-4">📈</div>
            <h3 className="font-bold text-xl">
              Increase Sales
            </h3>
            <p className="mt-2 text-gray-600">
              Expand your market and boost revenue.
            </p>
          </div>

          <div className="bg-yellow-100 rounded-2xl p-8 text-center shadow">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="font-bold text-xl">
              Easy Logistics
            </h3>
            <p className="mt-2 text-gray-600">
              Streamlined order and delivery process.
            </p>
          </div>

          <div className="bg-purple-100 rounded-2xl p-8 text-center shadow">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="font-bold text-xl">
              Trusted Platform
            </h3>
            <p className="mt-2 text-gray-600">
              Build trust with verified customers.
            </p>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
            How to Start Selling
          </h2>

          <div className="space-y-8">

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                1
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Register
                </h3>
                <p className="text-gray-600">
                  Fill out the seller registration form.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                2
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Verification
                </h3>
                <p className="text-gray-600">
                  Our team verifies your business details.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                3
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Add Products
                </h3>
                <p className="text-gray-600">
                  Upload your products and inventory.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                4
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Start Selling
                </h3>
                <p className="text-gray-600">
                  Receive orders and grow your business.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-4xl font-bold">10K+</h2>
              <p>Farmers</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">500+</h2>
              <p>Products</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">100+</h2>
              <p>Sellers</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">24/7</h2>
              <p>Support</p>
            </div>

          </div>

        </div>
      </section>

      {/* Seller Form */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
            Seller Registration
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Business Name"
              className="w-full border rounded-xl p-3"
            />

            <input
              type="text"
              placeholder="Owner Name"
              className="w-full border rounded-xl p-3"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl p-3"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-xl p-3"
            />

            <input
              type="text"
              placeholder="Product Category"
              className="w-full border rounded-xl p-3"
            />

            <textarea
              rows="4"
              placeholder="Tell us about your business"
              className="w-full border rounded-xl p-3"
            />

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
            >
              Submit Application
            </button>

          </form>

        </div>
      </section>

    </div>
  );
};

export default SellWithUs;