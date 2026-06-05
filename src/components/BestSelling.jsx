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
    <section className="bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            Bestselling Products
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Trusted by farmers across the country
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestselling.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image */}
              <div className="h-56 sm:h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {item.name}
                </h3>

                <div className="flex items-center justify-between mt-4">
                  <p className="text-green-700 text-lg font-bold">
                    {item.price}
                  </p>

                  <button
                    onClick={() => addToCart(item)}
                    className="px-4 py-2 text-sm font-semibold bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
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