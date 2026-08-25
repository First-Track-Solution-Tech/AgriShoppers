import React from "react";
import {
  FaCheckCircle,
  FaCertificate,
  FaIndustry,
  FaClipboardCheck,
  FaShieldAlt,
  FaAward,
  FaBoxOpen,
  FaArrowRight,
} from "react-icons/fa";
import Footer from "../components/Footer"; // path check kar lena

const QualityAssurance = () => {
  const points = [
    {
      icon: <FaCertificate />,
      title: "Certified Products",
      text: "All agricultural inputs undergo strict testing and certification.",
    },
    {
      icon: <FaIndustry />,
      title: "Verified Suppliers",
      text: "We partner only with trusted and approved manufacturers.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality Checks",
      text: "Multiple inspections before products reach customers.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Compliance",
      text: "Products meet government and industry quality standards.",
    },
  ];

  const process = [
    "Supplier Verification",
    "Product Testing",
    "Quality Inspection",
    "Packaging Check",
    "Safe Delivery",
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-cream-100 via-white to-olive-50 min-h-screen">

        {/* HERO SECTION */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">

            <span className="bg-wheat-100 text-wheat-700 px-5 py-2 rounded-full font-semibold">
              🛡️ Quality You Can Trust
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-olive-800">
              Quality Assurance
            </h1>

            <p className="mt-6 text-lg text-ink-500 max-w-3xl mx-auto">
              We maintain the highest standards of quality to ensure
              every product delivered to farmers is safe, reliable,
              certified, and effective.
            </p>
          </div>
        </section>

        {/* STATS */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
              <FaAward className="text-4xl text-wheat-600 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-olive-800">100%</h3>
              <p className="text-ink-500">Certified Products</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
              <FaShieldAlt className="text-4xl text-wheat-600 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-olive-800">500+</h3>
              <p className="text-ink-500">Quality Tests</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
              <FaIndustry className="text-4xl text-wheat-600 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-olive-800">50+</h3>
              <p className="text-ink-500">Verified Partners</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
              <FaBoxOpen className="text-4xl text-wheat-600 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-olive-800">10K+</h3>
              <p className="text-ink-500">Products Delivered</p>
            </div>

          </div>
        </section>


        {/* QUALITY PROCESS */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="bg-white rounded-[35px] shadow-xl p-10">

            <h2 className="text-4xl font-bold text-center text-olive-800 mb-12">
              Our Quality Process
            </h2>

            <div className="grid md:grid-cols-5 gap-6">

              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-olive-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>

                  <h3 className="font-semibold text-ink-700">
                    {step}
                  </h3>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
              alt="Quality Agriculture"
              className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
            />

            <div>
              <h2 className="text-4xl font-bold text-olive-800 mb-6">
                Building Trust Through Quality
              </h2>

              <p className="text-lg text-ink-500 leading-relaxed mb-6">
                Every product listed on Agri Shoppers goes through
                strict quality evaluation. Our commitment ensures
                farmers receive only trusted and reliable agricultural
                products.
              </p>

              <div className="space-y-4">

                <div className="flex gap-3">
                  <FaCheckCircle className="text-wheat-600 mt-1" />
                  <span>Rigorous quality inspections</span>
                </div>

                <div className="flex gap-3">
                  <FaCheckCircle className="text-wheat-600 mt-1" />
                  <span>Trusted supplier network</span>
                </div>

                <div className="flex gap-3">
                  <FaCheckCircle className="text-wheat-600 mt-1" />
                  <span>Government compliance standards</span>
                </div>

                <div className="flex gap-3">
                  <FaCheckCircle className="text-wheat-600 mt-1" />
                  <span>Farmer-first quality commitment</span>
                </div>

              </div>
            </div>
          </div>
        </section>
        
        {/* QUALITY CARDS */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {points.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-wheat-100 flex items-center justify-center text-olive-700 text-3xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-olive-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-ink-500 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto bg-gradient-to-r from-olive-800 to-olive-700 rounded-[40px] p-12 text-center text-white">

            <h2 className="text-4xl font-bold mb-5">
              Quality Products for Better Farming
            </h2>

            <p className="text-lg mb-8 max-w-3xl mx-auto text-cream-200">
              We are committed to delivering reliable agricultural
              products that farmers can trust every season.
            </p>

            <button className="bg-wheat-400 text-ink-900 px-8 py-4 rounded-full font-bold flex items-center gap-3 mx-auto hover:bg-wheat-500 transition">
              Learn More
              <FaArrowRight />
            </button>

          </div>
        </section>

      </div>

      {/* FOOTER */}
      {/* <Footer /> */}
    </>
  );
};

export default QualityAssurance;