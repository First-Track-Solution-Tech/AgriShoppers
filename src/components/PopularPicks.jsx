
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { popularPicks as popularItems } from "../data/popularPicks";

const PopularPicks = () => {
  const navigate = useNavigate();

  const shuffledItems = useMemo(() => {
    return [...popularItems].sort(() => Math.random() - 0.5);
  }, []);

  const visibleItems = shuffledItems.slice(0, 4);

  const addToCart = (product) => {
    try {
      const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

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

      // Update Navbar instantly
      window.dispatchEvent(
        new Event("cartUpdated")
      );

      alert(`${product.name} added to cart`);
    } catch (error) {
      console.error("Cart Error:", error);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-800">
              Popular Picks
            </h2>

            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Best-selling and farmer-recommended products
            </p>
          </div>

          <button
            onClick={() =>
              navigate("/popular-picks")
            }
            className="hidden sm:inline-block px-6 py-2 rounded-full border border-green-700 text-green-700 font-semibold hover:bg-green-700 hover:text-white transition"
          >
            Show More →
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl border shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Badge */}
              {item.badge && (
                <span className="absolute top-3 left-3 bg-green-700 text-white text-xs px-3 py-1 rounded-full z-10">
                  {item.badge}
                </span>
              )}

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-lg">
                  {item.name}
                </h3>

                <p className="text-green-700 font-bold text-xl mt-2">
                  {item.price}
                </p>

                <button
                  onClick={() =>
                    addToCart(item)
                  }
                  className="mt-4 w-full py-2 rounded-lg bg-green-700 text-white font-medium hover:bg-green-800 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Show More */}
        <div className="mt-8 text-center sm:hidden">
          <button
            onClick={() =>
              navigate("/popular-picks")
            }
            className="px-6 py-2 rounded-full border border-green-700 text-green-700 font-semibold hover:bg-green-700 hover:text-white transition"
          >
            Show More →
          </button>
        </div>

      </div>
    </section>
  );
};

export default PopularPicks;