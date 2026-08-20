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
    <section className="py-16 sm:py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-olive-800">
              Popular Picks
            </h2>

            <p className="text-ink-500 mt-2 text-sm sm:text-base">
              Best-selling and farmer-recommended products
            </p>
          </div>

          <button
            onClick={() =>
              navigate("/popular-picks")
            }
            className="hidden sm:inline-block px-6 py-2 rounded-full border border-wheat-500 text-wheat-700 font-semibold hover:bg-wheat-500 hover:text-white transition"
          >
            Show More →
          </button>
        </div>

        {/* Products Grid — horizontal quick-pick rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 bg-white rounded-2xl border border-olive-100 shadow-sm p-3 sm:p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-wheat-300"
            >
              {/* Image */}
              <div className="relative shrink-0 w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />

                {/* Badge */}
                {item.badge && (
                  <span className="absolute top-1.5 left-1.5 bg-wheat-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between min-w-0">
                <div>
                  <h3 className="font-semibold text-ink-800 text-base sm:text-lg truncate">
                    {item.name}
                  </h3>

                  <p className="text-wheat-600 font-bold text-lg mt-1">
                    {item.price}
                  </p>
                </div>

                <button
                  onClick={() =>
                    addToCart(item)
                  }
                  className="mt-3 self-start px-4 py-2 rounded-lg bg-olive-700 text-white text-sm font-medium hover:bg-olive-800 transition"
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
            className="px-6 py-2 rounded-full border border-wheat-500 text-wheat-700 font-semibold hover:bg-wheat-500 hover:text-white transition"
          >
            Show More →
          </button>
        </div>

      </div>
    </section>
  );
};

export default PopularPicks;