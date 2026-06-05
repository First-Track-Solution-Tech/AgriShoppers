import React from "react";
import Footer from "../components/Footer";
import {
  FaLeaf,
  FaUsers,
  FaTruck,
  FaSeedling,
} from "react-icons/fa";

const About = () => {
  return (
    <>
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen">

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            🌱 Empowering Farmers Across India
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold text-green-800">
            About Agri Shoppers
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Agri Shoppers, a trusted brand of{" "}
            <strong>Agrigenesis Terrabloom Tech Private Limited</strong>,
            is dedicated to providing farmers with premium agricultural
            products, modern farming solutions, and expert guidance for
            sustainable growth and prosperity.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
              alt="Agriculture"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-green-700 mb-6">
              Growing Agriculture with Innovation
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At Agri Shoppers, we bridge the gap between modern technology
              and traditional farming. Our goal is to help farmers access
              quality agricultural products while improving productivity,
              profitability, and sustainability.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <FaSeedling className="text-green-600 text-2xl mt-1" />
                <p className="text-gray-700">
                  High-quality seeds, fertilizers, and farming essentials.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaTruck className="text-green-600 text-2xl mt-1" />
                <p className="text-gray-700">
                  Fast and reliable delivery across rural and urban India.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaUsers className="text-green-600 text-2xl mt-1" />
                <p className="text-gray-700">
                  Trusted by farmers and agricultural professionals.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaLeaf className="text-green-600 text-2xl mt-1" />
                <p className="text-gray-700">
                  Promoting sustainable and eco-friendly farming practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-green-700 py-16 text-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-4xl font-bold">10K+</h3>
            <p className="mt-2">Farmers Served</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="mt-2">Products Available</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">100+</h3>
            <p className="mt-2">District Coverage</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">24/7</h3>
            <p className="mt-2">Customer Support</p>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              🎯 Our Mission
            </h2>

            <p className="text-gray-700 leading-relaxed">
              To empower farmers with affordable, reliable, and innovative
              agricultural products while enhancing productivity and
              promoting sustainable farming practices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              🚀 Our Vision
            </h2>

            <p className="text-gray-700 leading-relaxed">
              To become India's most trusted agricultural marketplace,
              connecting farmers with modern technology, expert knowledge,
              and premium-quality farming solutions.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto bg-green-700 rounded-3xl p-10 text-center text-white">

          <h2 className="text-4xl font-bold mb-4">
            Join the Future of Farming
          </h2>

          <p className="text-lg mb-6">
            Together, let's build a smarter, greener, and more prosperous
            agricultural ecosystem for India.
          </p>

          <button className="bg-white text-green-700 font-semibold px-8 py-3 rounded-full hover:bg-green-100 transition">
            Explore Products
          </button>

        </div>
      </section>

    </div>
    {/* <Footer /> */}
    </>
  );
};

export default About;