import React from "react";

const BulkOrders = () => {
  return (
    <div className="bg-cream-50 min-h-screen pt-20">

      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[500px]">
        <img
          src="/images/bulk-orders-hero.jpg"
          alt="Bulk Orders"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-ink-900/55 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
              Bulk Orders
            </h1>

            <p className="mt-4 text-lg md:text-2xl text-cream-100">
              Save More with Large Quantity Purchases
            </p>

            <button className="mt-6 px-8 py-3 bg-wheat-500 hover:bg-wheat-600 text-ink-900 rounded-xl font-semibold transition">
              Request Quote
            </button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 py-14 text-center">
        <h2 className="text-3xl font-bold text-wheat-700">
          Special Pricing for Bulk Buyers
        </h2>

        <p className="mt-4 text-ink-600 max-w-3xl mx-auto">
          Get exclusive discounts, priority delivery, and dedicated
          support for large agricultural purchases.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center text-ink-900 mb-12">
          Why Choose Bulk Orders?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-wheat-100 flex items-center justify-center text-3xl">
              💰
            </div>
            <h3 className="font-bold text-xl text-ink-900">
              Better Pricing
            </h3>
            <p className="text-ink-600 mt-2">
              Enjoy exclusive wholesale discounts.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cream-200 flex items-center justify-center text-3xl">
              📦
            </div>
            <h3 className="font-bold text-xl text-ink-900">
              Large Inventory
            </h3>
            <p className="text-ink-600 mt-2">
              Access products in large quantities.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-olive-100 flex items-center justify-center text-3xl">
              🚚
            </div>
            <h3 className="font-bold text-xl text-ink-900">
              Priority Delivery
            </h3>
            <p className="text-ink-600 mt-2">
              Faster shipping for bulk purchases.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-wheat-200 flex items-center justify-center text-3xl">
              🤝
            </div>
            <h3 className="font-bold text-xl text-ink-900">
              Dedicated Support
            </h3>
            <p className="text-ink-600 mt-2">
              Personal assistance for every order.
            </p>
          </div>

        </div>
      </section>

      {/* Order Process — grid of numbered cards instead of a vertical timeline */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center text-wheat-700 mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="relative bg-wheat-50 rounded-2xl p-6 pt-10 text-center">
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-wheat-500 text-ink-900 flex items-center justify-center font-bold shadow">
                1
              </span>
              <h3 className="font-bold text-lg text-ink-900">
                Submit Requirement
              </h3>
              <p className="text-ink-600 mt-2 text-sm">
                Share your product requirements and quantity.
              </p>
            </div>

            <div className="relative bg-wheat-50 rounded-2xl p-6 pt-10 text-center">
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-wheat-500 text-ink-900 flex items-center justify-center font-bold shadow">
                2
              </span>
              <h3 className="font-bold text-lg text-ink-900">
                Receive Custom Quote
              </h3>
              <p className="text-ink-600 mt-2 text-sm">
                Our team prepares a personalized quotation.
              </p>
            </div>

            <div className="relative bg-wheat-50 rounded-2xl p-6 pt-10 text-center">
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-wheat-500 text-ink-900 flex items-center justify-center font-bold shadow">
                3
              </span>
              <h3 className="font-bold text-lg text-ink-900">
                Confirm Order
              </h3>
              <p className="text-ink-600 mt-2 text-sm">
                Approve pricing and place your order.
              </p>
            </div>

            <div className="relative bg-olive-700 rounded-2xl p-6 pt-10 text-center">
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-olive-700 flex items-center justify-center font-bold shadow">
                4
              </span>
              <h3 className="font-bold text-lg text-white">
                Fast Delivery
              </h3>
              <p className="text-cream-100 mt-2 text-sm">
                Get your products delivered quickly.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Who Can Order */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-ink-900 mb-12">
          Who Can Place Bulk Orders?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-wheat-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="text-5xl">🌾</div>
            <h3 className="font-bold mt-4 text-ink-900">
              Farmer Groups
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-wheat-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="text-5xl">🏪</div>
            <h3 className="font-bold mt-4 text-ink-900">
              Retailers
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-wheat-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="text-5xl">🏭</div>
            <h3 className="font-bold mt-4 text-ink-900">
              Distributors
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-wheat-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="text-5xl">🤝</div>
            <h3 className="font-bold mt-4 text-ink-900">
              Cooperatives
            </h3>
          </div>

        </div>
      </section>

      {/* Stats — outlined cards on cream, not a solid band */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-4 gap-6">

          <div className="rounded-2xl border-2 border-wheat-300 bg-white p-8 text-center">
            <h2 className="text-4xl font-bold text-wheat-600">5000+</h2>
            <p className="text-ink-600 mt-1">Bulk Orders</p>
          </div>

          <div className="rounded-2xl border-2 border-wheat-300 bg-white p-8 text-center">
            <h2 className="text-4xl font-bold text-wheat-600">100+</h2>
            <p className="text-ink-600 mt-1">Partner Brands</p>
          </div>

          <div className="rounded-2xl border-2 border-wheat-300 bg-white p-8 text-center">
            <h2 className="text-4xl font-bold text-wheat-600">50+</h2>
            <p className="text-ink-600 mt-1">Cities Served</p>
          </div>

          <div className="rounded-2xl border-2 border-wheat-300 bg-white p-8 text-center">
            <h2 className="text-4xl font-bold text-wheat-600">24/7</h2>
            <p className="text-ink-600 mt-1">Support</p>
          </div>

        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">

          <div className="bg-wheat-50 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold text-center text-wheat-700 mb-8">
              Request a Quote
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-ink-200 rounded-xl p-3 bg-white text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-wheat-500 focus:border-wheat-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-ink-200 rounded-xl p-3 bg-white text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-wheat-500 focus:border-wheat-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-ink-200 rounded-xl p-3 bg-white text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-wheat-500 focus:border-wheat-500"
              />

              <input
                type="text"
                placeholder="Product Required"
                className="w-full border border-ink-200 rounded-xl p-3 bg-white text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-wheat-500 focus:border-wheat-500"
              />

              <input
                type="number"
                placeholder="Quantity"
                className="w-full border border-ink-200 rounded-xl p-3 bg-white text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-wheat-500 focus:border-wheat-500"
              />

              <textarea
                rows="4"
                placeholder="Additional Requirements"
                className="w-full border border-ink-200 rounded-xl p-3 bg-white text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-wheat-500 focus:border-wheat-500"
              />

              <button
                type="submit"
                className="w-full bg-wheat-500 hover:bg-wheat-600 text-ink-900 py-3 rounded-xl font-semibold transition"
              >
                Request Quote
              </button>

            </form>

          </div>

        </div>
      </section>

    </div>
  );
};

export default BulkOrders;