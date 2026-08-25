import React from "react";
import {
  FaUserShield,
  FaUndoAlt,
  FaShippingFast,
  FaBook,
  FaCheckCircle,
  FaQuestionCircle,
  FaArrowRight,
} from "react-icons/fa";
import Footer from "../components/Footer";

const PoliciesAndGuidelines = () => {
  const policies = [
    {
      icon: <FaUserShield />,
      title: "Privacy Policy",
      text: "Protection of customer information and secure data handling.",
    },
    {
      icon: <FaUndoAlt />,
      title: "Returns & Refunds",
      text: "Transparent return, refund, and cancellation procedures.",
    },
    {
      icon: <FaShippingFast />,
      title: "Shipping Policy",
      text: "Reliable delivery process and shipping guidelines.",
    },
    {
      icon: <FaBook />,
      title: "Terms of Use",
      text: "Platform rules and customer responsibilities.",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-cream-100 via-white to-olive-50 min-h-screen">

        {/* HERO SECTION */}
        <section className="py-20 px-4 text-center">
          <span className="bg-wheat-100 text-wheat-700 px-5 py-2 rounded-full font-semibold">
            📜 Transparency & Trust
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-olive-800 mt-6">
            Policies & Guidelines
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-ink-500">
            Our policies are designed to ensure transparency, fairness,
            security, and a trusted shopping experience for every farmer.
          </p>
        </section>

        {/* RIGHTS & RESPONSIBILITIES — moved up, right after hero */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <h2 className="text-4xl font-bold text-olive-800 mb-10 text-center">
              User Rights & Responsibilities
            </h2>

            <div className="grid md:grid-cols-2 gap-10">

              <div>
                <h3 className="text-2xl font-bold text-wheat-700 mb-5">
                  Your Rights
                </h3>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-wheat-600 mt-1" />
                    <span>Access your account information securely.</span>
                  </div>

                  <div className="flex gap-3">
                    <FaCheckCircle className="text-wheat-600 mt-1" />
                    <span>Request returns and refunds as per policy.</span>
                  </div>

                  <div className="flex gap-3">
                    <FaCheckCircle className="text-wheat-600 mt-1" />
                    <span>Secure payment and privacy protection.</span>
                  </div>

                  <div className="flex gap-3">
                    <FaCheckCircle className="text-wheat-600 mt-1" />
                    <span>Fair and transparent service experience.</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-wheat-700 mb-5">
                  Your Responsibilities
                </h3>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-wheat-600 mt-1" />
                    <span>Provide accurate personal information.</span>
                  </div>

                  <div className="flex gap-3">
                    <FaCheckCircle className="text-wheat-600 mt-1" />
                    <span>Follow platform terms and conditions.</span>
                  </div>

                  <div className="flex gap-3">
                    <FaCheckCircle className="text-wheat-600 mt-1" />
                    <span>Respect community standards.</span>
                  </div>

                  <div className="flex gap-3">
                    <FaCheckCircle className="text-wheat-600 mt-1" />
                    <span>Use services responsibly and ethically.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* POLICY CARDS — moved after Rights & Responsibilities */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {policies.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-wheat-100 flex items-center justify-center text-olive-700 text-3xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-olive-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-ink-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-5xl mx-auto px-4 pb-20">
          <h2 className="text-4xl font-bold text-center text-olive-800 mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div className="bg-white p-6 rounded-2xl shadow">
              <div className="flex items-center gap-3 mb-2">
                <FaQuestionCircle className="text-wheat-600" />
                <h3 className="font-bold text-olive-700">
                  How do I request a refund?
                </h3>
              </div>
              <p className="text-ink-500">
                Refund requests can be submitted through your account dashboard
                according to our refund policy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <div className="flex items-center gap-3 mb-2">
                <FaQuestionCircle className="text-wheat-600" />
                <h3 className="font-bold text-olive-700">
                  Is my personal information secure?
                </h3>
              </div>
              <p className="text-ink-500">
                Yes, we follow industry-standard security measures to protect
                user information.
              </p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="bg-gradient-to-r from-olive-800 to-olive-700 rounded-[40px] p-12 text-center text-white shadow-2xl">

            <h2 className="text-4xl font-bold mb-4">
              Need More Information?
            </h2>

            <p className="text-lg mb-8 text-cream-200">
              Our support team is available to help you understand any policy
              or guideline.
            </p>

            <button className="bg-wheat-400 text-ink-900 px-8 py-4 rounded-full font-bold flex items-center gap-3 mx-auto hover:bg-wheat-500 transition">
              Contact Support
              <FaArrowRight />
            </button>

          </div>
        </section>

      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default PoliciesAndGuidelines;