import React from "react";

const nutritionProducts = [
  {
    id: 1,
    name: "Organic Fertilizer",
    price: "₹699",
    image: "/images/organic-fertilize.jpg",
  },
  {
    id: 2,
    name: "NPK Booster",
    price: "₹899",
    image: "/images/npk-booster.jpg",
  },
  {
    id: 3,
    name: "Micronutrient Mix",
    price: "₹599",
    image: "/images/micronutrient.jpg",
  },
  {
    id: 4,
    name: "Growth Promoter",
    price: "₹1099",
    image: "/images/growth-promoter.jpg",
  },
];

const CropNutrition = () => {
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
          src="/images/nutrition-banner.jpg"
          alt="Crop Nutrition"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              Crop Nutrition
            </h1>

            <p className="mt-4 text-lg md:text-xl">
              Improve soil fertility and crop productivity
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
            Complete Crop Nutrition Solutions
          </h2>

          <p className="mt-4 text-ink-600 max-w-3xl mx-auto">
            Enhance crop growth with premium fertilizers,
            micronutrients and plant growth promoters.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center text-ink-900 mb-10">
          Popular Nutrition Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {nutritionProducts.map((product) => (
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
            Why Choose Our Nutrition Products?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-wheat-50 p-8 rounded-xl text-center shadow">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="font-bold text-xl mb-2 text-ink-900">
                Healthy Growth
              </h3>
              <p className="text-ink-600">
                Essential nutrients for strong crop development.
              </p>
            </div>

            <div className="bg-wheat-50 p-8 rounded-xl text-center shadow">
              <div className="text-5xl mb-4">🌾</div>
              <h3 className="font-bold text-xl mb-2 text-ink-900">
                Better Yield
              </h3>
              <p className="text-ink-600">
                Improve productivity with balanced nutrition.
              </p>
            </div>

            <div className="bg-wheat-50 p-8 rounded-xl text-center shadow">
              <div className="text-5xl mb-4">🚜</div>
              <h3 className="font-bold text-xl mb-2 text-ink-900">
                Soil Health
              </h3>
              <p className="text-ink-600">
                Maintain long-term soil fertility and sustainability.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default CropNutrition;