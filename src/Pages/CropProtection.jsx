import React from "react";

const protectionProducts = [
  {
    id: 1,
    name: "Insect Killer",
    price: "₹699",
    image: "/images/insect-killer.jpg",
  },
  {
    id: 2,
    name: "Fungicide Plus",
    price: "₹899",
    image: "/images/fungicide.jpg",
  },
  {
    id: 3,
    name: "Weed Control",
    price: "₹599",
    image: "/images/weed-control.jpg",
  },
  {
    id: 4,
    name: "Crop Shield",
    price: "₹1099",
    image: "/images/crop-shield.jpg",
  },
];

const CropProtection = () => {
  const addToCart = (product) => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");

      const existingItem = cart.find(
        (item) => item.name === product.name
      );

      if (existingItem) {
        existingItem.quantity =
          (existingItem.quantity || 1) + 1;
      } else {
        cart.push({
          ...product,
          quantity: 1,
        });
      }

      localStorage.setItem(
        "cart",
        JSON.stringify(cart)
      );

      window.dispatchEvent(
        new Event("cartUpdated")
      );

      alert(`${product.name} added to cart`);
    } catch (error) {
      console.error("Cart Error:", error);
    }
  };

  return (
    <div className="bg-cream-50 min-h-screen pt-20">

      {/* Hero Banner */}
      <section className="relative h-[350px] md:h-[450px]">
        <img
          src="/images/protection-banner.jpg"
          alt="Plant Protection"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              Plant Protection
            </h1>

            <p className="mt-4 text-lg md:text-xl">
              Protect your crops from insects, weeds and diseases
            </p>

            <button className="mt-6 bg-olive-600 hover:bg-olive-700 px-6 py-3 rounded-lg font-semibold transition">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-olive-800">
            Trusted Crop Protection Solutions
          </h2>

          <p className="mt-4 text-ink-600 max-w-3xl mx-auto">
            Discover premium pesticides, fungicides and herbicides
            designed to keep your crops healthy and productive.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center text-olive-800 mb-10">
          Popular Protection Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {protectionProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-ink-900">
                  {product.name}
                </h3>

                <p className="text-olive-700 font-bold text-lg mt-2">
                  {product.price}
                </p>

                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 w-full bg-olive-600 hover:bg-olive-700 text-white py-2 rounded-lg font-semibold transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center text-olive-800 mb-12">
            Why Choose Our Protection Products?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-wheat-50 p-8 rounded-xl text-center shadow">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="font-bold text-xl mb-2 text-ink-900">
                Strong Protection
              </h3>
              <p className="text-ink-600">
                Effective control against pests and diseases.
              </p>
            </div>

            <div className="bg-wheat-50 p-8 rounded-xl text-center shadow">
              <div className="text-5xl mb-4">🌾</div>
              <h3 className="font-bold text-xl mb-2 text-ink-900">
                Healthy Crops
              </h3>
              <p className="text-ink-600">
                Keeps crops healthy throughout the season.
              </p>
            </div>

            <div className="bg-wheat-50 p-8 rounded-xl text-center shadow">
              <div className="text-5xl mb-4">🚜</div>
              <h3 className="font-bold text-xl mb-2 text-ink-900">
                Higher Yield
              </h3>
              <p className="text-ink-600">
                Better protection leads to better harvests.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default CropProtection;