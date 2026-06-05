import React, { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Organic Fertilizer",
      price: 850,
      image: "/images/fertilizer.jpg",
    },
    {
      id: 2,
      name: "Vegetable Seeds Pack",
      price: 450,
      image: "/images/vegetable-seeds.jpg",
    },
  ]);

  const removeWishlist = (id) => {
    setWishlistItems(
      wishlistItems.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          My Wishlist
        </h1>

        {wishlistItems.length === 0 ? (
          <div className="bg-white p-8 rounded-lg text-center">
            <h2 className="text-xl font-semibold">
              Wishlist is Empty
            </h2>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-52 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-semibold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-green-600 font-bold mt-2">
                    ₹{item.price}
                  </p>

                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 bg-green-600 text-white py-2 rounded-lg flex items-center justify-center gap-2">
                      <ShoppingCart size={18} />
                      Add to Cart
                    </button>

                    <button
                      onClick={() => removeWishlist(item.id)}
                      className="bg-red-500 text-white px-3 rounded-lg"
                    >
                      <Heart size={18} fill="white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;