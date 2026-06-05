import React from "react";
import {
  FaUndoAlt,
  FaMoneyBillWave,
  FaClipboardCheck,
  FaHeadset,
  FaCheckCircle,
  FaTimesCircle,
  FaEnvelope,
} from "react-icons/fa";
import Footer from "../components/Footer";

const RefundCancellation = () => {
  const policyCards = [
    {
      icon: <FaUndoAlt />,
      title: "Easy Cancellation",
      description:
        "Orders can be cancelled before shipment confirmation for a hassle-free experience.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Fast Refunds",
      description:
        "Approved refunds are processed quickly through the original payment method.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Transparent Process",
      description:
        "Simple and transparent refund and cancellation procedures for all customers.",
    },
    {
      icon: <FaHeadset />,
      title: "Customer Support",
      description:
        "Dedicated support team available to help resolve refund-related queries.",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-green-50 via-white to-green-100 min-h-screen">

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 to-green-600 py-20 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">

            <FaUndoAlt className="text-6xl mx-auto mb-6" />

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Refund & Cancellation Policy
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              We are committed to ensuring customer satisfaction with
              transparent and fair refund and cancellation policies.
            </p>

          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-6xl mx-auto px-4 py-16 text-center">

          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Customer Satisfaction Comes First
          </h2>

          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            At AgriShoppers, we strive to provide the best products and
            services. If you encounter any issues with your order,
            our refund and cancellation process is designed to assist
            you quickly and efficiently.
          </p>

        </section>

        {/* Policy Highlights */}
        <section className="max-w-7xl mx-auto px-4 pb-20">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {policyCards.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center text-3xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-green-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </section>

        {/* Detailed Policy */}
        <section className="max-w-6xl mx-auto px-4 pb-20">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-4xl font-bold text-green-800 mb-8">
              Policy Details
            </h2>

            <div className="space-y-8">

              <div>
                <h3 className="text-2xl font-bold text-green-700 mb-3">
                  1. Order Cancellation
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Orders may be cancelled before shipment confirmation.
                  Once the order has been dispatched, cancellation requests
                  may not be accepted.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-700 mb-3">
                  2. Refund Eligibility
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Refunds are applicable for damaged, defective,
                  expired, or incorrect products received.
                  Requests should be raised within 48 hours of delivery.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-700 mb-3">
                  3. Refund Process
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  After approval, refunds will be processed within
                  5–7 business days and credited through the original
                  payment method used during purchase.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-700 mb-3">
                  4. Non-Refundable Products
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Certain perishable, custom, or specially ordered
                  agricultural products may not qualify for refunds.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Eligible & Not Eligible */}
        <section className="max-w-6xl mx-auto px-4 pb-20">

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <FaCheckCircle className="text-green-600 text-3xl" />
                <h3 className="text-2xl font-bold text-green-800">
                  Eligible for Refund
                </h3>
              </div>

              <ul className="space-y-3 text-gray-600">
                <li>✓ Damaged products</li>
                <li>✓ Defective products</li>
                <li>✓ Wrong item delivered</li>
                <li>✓ Expired products</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <FaTimesCircle className="text-red-500 text-3xl" />
                <h3 className="text-2xl font-bold text-green-800">
                  Not Eligible
                </h3>
              </div>

              <ul className="space-y-3 text-gray-600">
                <li>✗ Used products</li>
                <li>✗ Perishable items</li>
                <li>✗ Custom orders</li>
                <li>✗ Requests after policy period</li>
              </ul>
            </div>

          </div>

        </section>

        {/* Support Section */}
        <section className="max-w-6xl mx-auto px-4 pb-20">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <div className="flex items-center gap-4 mb-6">
              <FaEnvelope className="text-green-700 text-4xl" />

              <h2 className="text-4xl font-bold text-green-800">
                Need Assistance?
              </h2>
            </div>

            <p className="text-gray-600 text-lg mb-6">
              For refund, replacement, or cancellation requests,
              please contact our customer support team.
            </p>

            <div className="bg-green-50 p-6 rounded-2xl">
              <p className="font-semibold text-green-800">
                📧 support@agrishoppers.com
              </p>
            </div>

          </div>

        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-4 pb-20">

          <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-[40px] p-12 text-center text-white shadow-2xl">

            <h2 className="text-4xl font-bold mb-5">
              We're Here To Help
            </h2>

            <p className="text-lg mb-8">
              Our team is committed to providing a smooth shopping
              experience for every customer.
            </p>

            <button className="bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:bg-green-100 transition">
              Contact Support
            </button>

          </div>

        </section>

      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
};

export default RefundCancellation;