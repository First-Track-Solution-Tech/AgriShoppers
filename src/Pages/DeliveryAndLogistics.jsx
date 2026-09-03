import React from "react";
import {
  FaTruck,
  FaWarehouse,
  FaMapMarkedAlt,
  FaClock,
  FaShippingFast,
  FaHeadset,
  FaCheckCircle,
  FaBox,
} from "react-icons/fa";
import Footer from "../components/Footer";

const DeliveryAndLogistics = () => {
  const features = [
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      description:
        "Timely dispatch and quick delivery of agricultural products across India.",
    },
    {
      icon: <FaWarehouse />,
      title: "Warehouse Management",
      description:
        "Efficient storage and inventory control for smooth logistics operations.",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Real-Time Tracking",
      description:
        "Track your shipment status anytime with complete transparency.",
    },
    {
      icon: <FaClock />,
      title: "Reliable Timelines",
      description:
        "Estimated delivery schedules to keep you informed at every stage.",
    },
  ];

  const stats = [
    { number: "10K+", label: "Orders Delivered" },
    { number: "500+", label: "Service Locations" },
    { number: "24/7", label: "Tracking Support" },
    { number: "99%", label: "On-Time Delivery" },
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-cream-100 via-white to-olive-50 min-h-screen">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-olive-800 to-olive-700 py-20 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">

            <FaTruck className="mx-auto text-6xl mb-6" />

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Delivery & Logistics
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto text-cream-200">
              Reliable, transparent, and efficient logistics solutions
              designed to deliver quality agricultural products directly
              to farmers across India.
            </p>

          </div>
        </section>

        {/* Intro */}
        <section className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold text-olive-800 mb-6">
            Smart Logistics Network
          </h2>

          <p className="text-ink-500 text-lg max-w-4xl mx-auto">
            Our delivery infrastructure is built to ensure products reach
            farmers quickly and safely. From warehouse management to
            last-mile delivery, we focus on speed, accuracy, and reliability.
          </p>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-wheat-100 rounded-2xl flex items-center justify-center text-olive-700 text-3xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-olive-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-ink-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* Delivery Process */}
        <section className="max-w-6xl mx-auto px-4 pb-20">

          <h2 className="text-4xl font-bold text-center text-olive-800 mb-12">
            Our Delivery Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <FaCheckCircle className="text-wheat-600 text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-olive-800 text-lg">
                Order Confirmed
              </h3>
              <p className="text-ink-500 mt-2 text-sm">
                Your order is received and verified.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <FaBox className="text-wheat-600 text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-olive-800 text-lg">
                Product Packed
              </h3>
              <p className="text-ink-500 mt-2 text-sm">
                Products are securely packed for shipment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <FaShippingFast className="text-wheat-600 text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-olive-800 text-lg">
                Shipped
              </h3>
              <p className="text-ink-500 mt-2 text-sm">
                Shipment leaves our warehouse.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <FaTruck className="text-wheat-600 text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-olive-800 text-lg">
                Delivered
              </h3>
              <p className="text-ink-500 mt-2 text-sm">
                Delivered safely to your location.
              </p>
            </div>

          </div>

        </section>

        {/* Statistics */}
        <section className="max-w-6xl mx-auto px-4 pb-20">

          <h2 className="text-4xl font-bold text-center text-olive-800 mb-12">
            Logistics Performance
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg text-center"
              >
                <h3 className="text-4xl font-bold text-olive-700 mb-2">
                  {item.number}
                </h3>

                <p className="text-ink-500">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </section>

        {/* Coverage Section */}
        <section className="max-w-6xl mx-auto px-4 pb-20">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-4xl font-bold text-olive-800 mb-6">
              Nationwide Coverage
            </h2>

            <p className="text-ink-500 text-lg leading-relaxed">
              Our logistics network covers urban, semi-urban, and rural
              locations across India. We continuously expand our delivery
              network to ensure farmers receive products quickly and efficiently,
              regardless of their location.
            </p>

          </div>

        </section>

        {/* Customer Support */}
        <section className="max-w-6xl mx-auto px-4 pb-20">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <div className="flex items-center gap-4 mb-6">
              <FaHeadset className="text-olive-700 text-4xl" />

              <h2 className="text-4xl font-bold text-olive-800">
                Need Delivery Assistance?
              </h2>
            </div>

            <p className="text-ink-500 text-lg mb-8">
              Our customer support team is available to help with
              shipment updates, tracking queries, and delivery concerns.
            </p>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-cream-100 p-6 rounded-2xl text-center">
                📞 Call Support
              </div>

              <div className="bg-cream-100 p-6 rounded-2xl text-center">
                ✉️ Email Support
              </div>

              <div className="bg-cream-100 p-6 rounded-2xl text-center">
                💬 Live Chat Support
              </div>

            </div>

          </div>

        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-4 pb-20">

          <div className="bg-gradient-to-r from-olive-800 to-olive-700 rounded-[40px] p-12 text-center text-white shadow-2xl">

            <h2 className="text-4xl font-bold mb-5">
              Reliable Delivery Across India
            </h2>

            <p className="text-lg mb-8 text-cream-200">
              Fast, secure, and transparent logistics for every farmer.
            </p>

            <button className="bg-wheat-400 text-ink-900 px-8 py-4 rounded-full font-bold hover:bg-wheat-500 transition">
              Track Your Order
            </button>

          </div>

        </section>

      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default DeliveryAndLogistics;