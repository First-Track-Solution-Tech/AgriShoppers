
import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadCart();

    // ✅ FIX: Listen for cart updates from other components
    const handleCartUpdate = () => {
      loadCart();
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  const loadCart = () => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartItems(cart);
    } catch (error) {
      console.error("Error loading cart:", error);
      setCartItems([]);
    }
  };

  const updateNavbarCount = () => {
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const increaseQty = (name) => {
    const updatedCart = cartItems.map((item) =>
      item.name === name
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateNavbarCount();
  };

  const decreaseQty = (name) => {
    const updatedCart = cartItems.map((item) =>
      item.name === name
        ? {
            ...item,
            quantity:
              (item.quantity || 1) > 1 ? item.quantity - 1 : 1,
          }
        : item
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateNavbarCount();
  };

  const removeItem = (name) => {
    const updatedCart = cartItems.filter((item) => item.name !== name);

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateNavbarCount();
  };

  const getPrice = (price) => {
    if (!price) return 0;

    return Number(price.toString().replace(/[₹,]/g, ""));
  };

  const total = cartItems.reduce(
    (sum, item) =>
      sum + getPrice(item.price) * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-10 px-4">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-green-800 mb-8">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-10 text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              Your Cart is Empty
            </h2>
            <p className="text-gray-500 mt-2">
              Add some products to continue shopping.
            </p>
          </div>
        ) : (
          <>
            {/* CART ITEMS */}
            <div className="space-y-5">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row items-center gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg border"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">
                      {item.name}
                    </h3>

                    <p className="text-green-700 font-bold">
                      {item.price}
                    </p>

                    {item.badge && (
                      <span className="inline-block mt-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* QUANTITY CONTROLS */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQty(item.name)}
                      className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300"
                    >
                      -
                    </button>

                    <span className="font-semibold text-lg">
                      {item.quantity || 1}
                    </span>

                    <button
                      onClick={() => increaseQty(item.name)}
                      className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  {/* DELETE */}
                  <button
                    onClick={() => removeItem(item.name)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={22} />
                  </button>
                </div>
              ))}
            </div>

            {/* TOTAL */}
            <div className="bg-white rounded-xl shadow mt-8 p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                  Total
                </h2>

                <span className="text-2xl font-bold text-green-700">
                  ₹{total.toLocaleString()}
                </span>
              </div>

              <button className="mt-6 w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;