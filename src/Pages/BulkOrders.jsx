import React from "react";

const BulkOrders = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">

      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[500px]">
        <img
          src="/images/bulk-orders-hero.jpg"
          alt="Bulk Orders"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
              Bulk Orders
            </h1>

            <p className="mt-4 text-lg md:text-2xl">
              Save More with Large Quantity Purchases
            </p>

            <button className="mt-6 px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-semibold transition">
              Request Quote
            </button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 py-14 text-center">
        <h2 className="text-3xl font-bold text-orange-600">
          Special Pricing for Bulk Buyers
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Get exclusive discounts, priority delivery, and dedicated
          support for large agricultural purchases.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Bulk Orders?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-orange-100 rounded-2xl p-8 text-center shadow">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="font-bold text-xl">
              Better Pricing
            </h3>
            <p className="text-gray-600 mt-2">
              Enjoy exclusive wholesale discounts.
            </p>
          </div>

          <div className="bg-yellow-100 rounded-2xl p-8 text-center shadow">
            <div className="text-5xl mb-4">📦</div>
            <h3 className="font-bold text-xl">
              Large Inventory
            </h3>
            <p className="text-gray-600 mt-2">
              Access products in large quantities.
            </p>
          </div>

          <div className="bg-red-100 rounded-2xl p-8 text-center shadow">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="font-bold text-xl">
              Priority Delivery
            </h3>
            <p className="text-gray-600 mt-2">
              Faster shipping for bulk purchases.
            </p>
          </div>

          <div className="bg-amber-100 rounded-2xl p-8 text-center shadow">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="font-bold text-xl">
              Dedicated Support
            </h3>
            <p className="text-gray-600 mt-2">
              Personal assistance for every order.
            </p>
          </div>

        </div>
      </section>

      {/* Order Process */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center text-orange-600 mb-12">
            How It Works
          </h2>

          <div className="space-y-8">

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                1
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Submit Requirement
                </h3>

                <p className="text-gray-600">
                  Share your product requirements and quantity.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                2
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Receive Custom Quote
                </h3>

                <p className="text-gray-600">
                  Our team prepares a personalized quotation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                3
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Confirm Order
                </h3>

                <p className="text-gray-600">
                  Approve pricing and place your order.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                4
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Fast Delivery
                </h3>

                <p className="text-gray-600">
                  Get your products delivered quickly.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Who Can Order */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Who Can Place Bulk Orders?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-white rounded-2xl p-8 text-center shadow">
            <div className="text-5xl">🌾</div>
            <h3 className="font-bold mt-4">
              Farmer Groups
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow">
            <div className="text-5xl">🏪</div>
            <h3 className="font-bold mt-4">
              Retailers
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow">
            <div className="text-5xl">🏭</div>
            <h3 className="font-bold mt-4">
              Distributors
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow">
            <div className="text-5xl">🤝</div>
            <h3 className="font-bold mt-4">
              Cooperatives
            </h3>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-4xl font-bold">5000+</h2>
              <p>Bulk Orders</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">100+</h2>
              <p>Partner Brands</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">50+</h2>
              <p>Cities Served</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">24/7</h2>
              <p>Support</p>
            </div>

          </div>

        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center text-orange-600 mb-10">
            Request a Quote
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-xl p-3"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-xl p-3"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl p-3"
            />

            <input
              type="text"
              placeholder="Product Required"
              className="w-full border rounded-xl p-3"
            />

            <input
              type="number"
              placeholder="Quantity"
              className="w-full border rounded-xl p-3"
            />

            <textarea
              rows="4"
              placeholder="Additional Requirements"
              className="w-full border rounded-xl p-3"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold"
            >
              Request Quote
            </button>

          </form>

        </div>
      </section>

    </div>
  );
};

export default BulkOrders;