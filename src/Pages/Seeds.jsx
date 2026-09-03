import React from "react";

const seedCategories = [
  {
    id: 1,
    name: "Paddy Seeds",
    price: "₹499",
    image: "/images/Paddy Seeds.jpg",
  },
  {
    id: 2,
    name: "Wheat Seeds",
    price: "₹599",
    image: "/images/wheat-seed.jpg",
  },
  {
    id: 3,
    name: "Vegetable Seeds",
    price: "₹699",
    image: "/images/vegetable-seed.jpg",
  },
  {
    id: 4,
    name: "Hybrid Seeds",
    price: "₹899",
    image: "/images/hybrid-seed.jpg",
  },
];

const Seeds = () => {
  const addToCart = (product) => {
    try {
      const cart = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );

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

      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[450px]">
        <img
          src="/images/seeds-banner.jpg"
          alt="Seeds Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              Quality Seeds
            </h1>

            <p className="mt-4 text-lg md:text-xl">
              Premium seeds for higher productivity and better harvests
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
            Trusted Seeds for Every Farmer
          </h2>

          <p className="mt-4 text-ink-600 max-w-3xl mx-auto">
            Discover high-quality seeds carefully selected to improve crop
            performance, increase yield, and support sustainable farming
            practices.
          </p>
        </div>
      </section>

      {/* Seed Products */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center text-ink-900 mb-10">
          Popular Seed Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {seedCategories.map((seed) => (
            <div
              key={seed.id}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={seed.image}
                alt={seed.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-ink-900">
                  {seed.name}
                </h3>

                <p className="text-olive-700 font-bold text-lg mt-2">
                  {seed.price}
                </p>

                <button
                  onClick={() => addToCart(seed)}
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
            Why Choose Our Seeds?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-wheat-50 p-8 rounded-xl text-center shadow">
              <div className="text-5xl mb-4">🌱</div>

              <h3 className="font-bold text-xl mb-2 text-ink-900">
                High Germination
              </h3>

              <p className="text-ink-600">
                Carefully tested seeds with excellent germination rates.
              </p>
            </div>

            <div className="bg-wheat-50 p-8 rounded-xl text-center shadow">
              <div className="text-5xl mb-4">🚜</div>

              <h3 className="font-bold text-xl mb-2 text-ink-900">
                Better Yield
              </h3>

              <p className="text-ink-600">
                Improved varieties designed for higher productivity.
              </p>
            </div>

            <div className="bg-wheat-50 p-8 rounded-xl text-center shadow">
              <div className="text-5xl mb-4">🌾</div>

              <h3 className="font-bold text-xl mb-2 text-ink-900">
                Trusted Quality
              </h3>

              <p className="text-ink-600">
                Sourced from leading agricultural seed manufacturers.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Seeds;