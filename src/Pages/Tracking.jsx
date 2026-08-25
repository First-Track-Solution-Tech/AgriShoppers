import React, { useState } from "react";
import {
  FaTruck,
  FaClock,
  FaShippingFast,
  FaHeadset,
  FaSearch,
  FaCheckCircle,
  FaBox,
} from "react-icons/fa";
import Footer from "../components/Footer";

const Tracking = () => {
  const [orderId, setOrderId] = useState("");

  const handleTrack = () => {
    if (!orderId.trim()) {
      alert("Please enter your Order ID");
      return;
    }

    alert(`Tracking Order: ${orderId}`);
  };

  const features = [
    {
      icon: <FaTruck />,
      title: "Live Tracking",
      text: "Track your shipment in real time from dispatch to delivery.",
    },
    {
      icon: <FaClock />,
      title: "Delivery Updates",
      text: "Get estimated delivery dates and status updates.",
    },
    {
      icon: <FaShippingFast />,
      title: "Courier Details",
      text: "View courier partner information and shipment route.",
    },
    {
      icon: <FaHeadset />,
      title: "Customer Support",
      text: "Dedicated support for delayed or missing orders.",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-cream-100 via-white to-olive-50 min-h-screen">

        {/* HERO */}
        <section className="bg-gradient-to-r from-olive-800 to-olive-700 py-20 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Track Your Order
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto text-cream-200">
              Stay updated with your order status from dispatch
              to doorstep delivery.
            </p>

          </div>
        </section>

        {/* SEARCH SECTION */}
        <section className="max-w-5xl mx-auto px-4 -mt-10 relative z-10">

          <div className="bg-white rounded-3xl shadow-2xl p-8">

            <h2 className="text-3xl font-bold text-olive-800 text-center mb-6">
              Enter Order ID
            </h2>

            <div className="flex flex-col md:flex-row gap-4">

              <input
                type="text"
                placeholder="Enter your Order ID"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="flex-1 border border-olive-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-wheat-400"
              />

              <button
                onClick={handleTrack}
                className="bg-olive-700 hover:bg-olive-800 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                <FaSearch />
                Track Order
              </button>

            </div>

          </div>

        </section>

        {/* SAMPLE TRACKING STATUS */}
        <section className="max-w-6xl mx-auto px-4 py-20">

          <h2 className="text-4xl font-bold text-center text-olive-800 mb-12">
            Order Journey
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
              <FaCheckCircle className="text-wheat-600 text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-olive-800">
                Order Confirmed
              </h3>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
              <FaBox className="text-wheat-600 text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-olive-800">
                Packed
              </h3>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
              <FaShippingFast className="text-wheat-600 text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-olive-800">
                Shipped
              </h3>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
              <FaTruck className="text-wheat-600 text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-olive-800">
                Delivered
              </h3>
            </div>

          </div>

        </section>

        {/* FEATURES */}
        <section className="max-w-7xl mx-auto px-4 pb-20">

          <h2 className="text-4xl font-bold text-center text-olive-800 mb-12">
            Tracking Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
              >
                <div className="w-16 h-16 bg-wheat-100 rounded-2xl flex items-center justify-center text-olive-700 text-3xl mb-5">
                  {item.icon}
                </div>

                <h3 className="font-bold text-xl text-olive-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-ink-500">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </section>

        {/* SUPPORT SECTION */}
        <section className="max-w-6xl mx-auto px-4 pb-20">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-4xl font-bold text-olive-800 mb-6">
              Need Help With Your Order?
            </h2>

            <p className="text-ink-500 text-lg mb-6">
              If your order is delayed or you need assistance,
              our customer support team is available to help.
            </p>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-cream-100 p-6 rounded-2xl">
                📞 Call Support
              </div>

              <div className="bg-cream-100 p-6 rounded-2xl">
                ✉️ Email Support
              </div>

              <div className="bg-cream-100 p-6 rounded-2xl">
                💬 Live Assistance
              </div>

            </div>

          </div>

        </section>

        {/* FAQ */}
        <section className="max-w-5xl mx-auto px-4 pb-20">

          <h2 className="text-4xl font-bold text-center text-olive-800 mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-olive-700 mb-2">
                How can I track my order?
              </h3>

              <p className="text-ink-500">
                Enter your Order ID in the tracking box above.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-olive-700 mb-2">
                What if my order is delayed?
              </h3>

              <p className="text-ink-500">
                Contact our support team for assistance and updates.
              </p>
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-4 pb-20">

          <div className="bg-gradient-to-r from-olive-800 to-olive-700 rounded-[40px] p-12 text-center text-white shadow-2xl">

            <h2 className="text-4xl font-bold mb-5">
              Need Immediate Assistance?
            </h2>

            <p className="text-lg mb-8 text-cream-200">
              Our support team is available to help with your orders.
            </p>

            <button className="bg-wheat-400 text-ink-900 px-8 py-4 rounded-full font-bold hover:bg-wheat-500 transition">
              Contact Support
            </button>

          </div>

        </section>

      </div>

      {/* FOOTER */}
      {/* <Footer /> */}
    </>
  );
};

export default Tracking;