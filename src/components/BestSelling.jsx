import React from "react";

const bestselling = [
  {
    id: "b1",
    name: "Premium Fertilizer",
    price: "$35",
    image: "/images/fertilizer.jpg",
  },
  {
    id: "b2",
    name: "Irrigation Kit",
    price: "$120",
    image: "/images/irrigation.jpg",
  },
  {
    id: "b3",
    name: "Tractor Tools Set",
    price: "$220",
    image: "/images/tractor-tools.jpg",
  },
  {
    id: "b4",
    name: "Pest Control Spray",
    price: "$45",
    image: "/images/pest-control.jpg",
  },
];

const Bestselling = () => {

  // ✅ ADD TO CART FUNCTION (same logic as PopularPicks)
  const addToCart = (product) => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");

      const existingItem = cart.find(
        (item) => item.name === product.name
      );

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        cart.push({
          ...product,
          quantity: 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      // 🔥 update navbar/cart count instantly
      window.dispatchEvent(new Event("cartUpdated"));

      alert(`${product.name} added to cart`);
    } catch (error) {
      console.error("Cart Error:", error);
    }
  };

  return (
    <section className="bg-cream-100 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-olive-800">
            Bestselling Products
          </h2>
          <p className="mt-2 text-ink-500 text-sm sm:text-base">
            Trusted by farmers across the country
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {bestselling.map((item) => (
            <div
              key={item.id}
              className="group relative transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-52 sm:h-56 rounded-2xl overflow-hidden shadow-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Bestseller badge */}
                <span className="absolute top-3 left-3 bg-wheat-400 text-ink-900 text-xs font-bold px-2.5 py-1 rounded-full shadow">
                  🔥 Bestseller
                </span>
              </div>

              {/* Overlapping content panel */}
              <div className="relative -mt-8 mx-4 bg-white rounded-2xl border border-olive-100 shadow-lg p-4 sm:p-5 transition-all duration-300 group-hover:shadow-2xl group-hover:border-wheat-300">
                <h3 className="text-base sm:text-lg font-semibold text-ink-800 truncate">
                  {item.name}
                </h3>

                <div className="flex items-center justify-between mt-3">
                  <p className="text-wheat-600 text-lg font-bold">
                    {item.price}
                  </p>

                  <button
                    onClick={() => addToCart(item)}
                    className="px-3.5 py-2 text-sm font-semibold bg-olive-700 text-white rounded-lg hover:bg-olive-800 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Bestselling;