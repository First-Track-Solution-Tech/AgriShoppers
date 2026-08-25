import React from "react";
import {
  FaSitemap,
  FaFileAlt,
  FaHome,
  FaLeaf,
  FaCheckCircle,
  FaUserTie,
  FaTruck,
  FaArrowRight,
  FaUsers,
  FaBoxOpen,
  FaGlobe,
  FaHeadset,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Sitemap = () => {
  const pages = [
    {
      icon: <FaHome />,
      title: "Home",
      description: "Visit the AgriShoppers homepage.",
      path: "/",
    },
    {
      icon: <FaLeaf />,
      title: "Farmer Resources",
      description: "Agricultural guides, farming tips and expert resources.",
      path: "/farmer-resources",
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality Assurance",
      description: "Learn about our quality standards and certifications.",
      path: "/quality-assurance",
    },
    {
      icon: <FaFileAlt />,
      title: "Policies & Guidelines",
      description: "Review company policies and platform guidelines.",
      path: "/policies",
    },
    {
      icon: <FaUserTie />,
      title: "Careers",
      description: "Explore career opportunities with AgriShoppers.",
      path: "/careers",
    },
    {
      icon: <FaTruck />,
      title: "Order Tracking",
      description: "Track your orders and delivery updates.",
      path: "/tracking",
    },
  ];

  const stats = [
    {
      icon: <FaUsers />,
      number: "5000+",
      label: "Happy Farmers",
    },
    {
      icon: <FaBoxOpen />,
      number: "1000+",
      label: "Products",
    },
    {
      icon: <FaGlobe />,
      number: "500+",
      label: "Locations Served",
    },
    {
      icon: <FaHeadset />,
      number: "24/7",
      label: "Customer Support",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-cream-100 via-white to-olive-50 min-h-screen">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-olive-800 to-olive-700 py-20 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">

            <FaSitemap className="text-6xl mx-auto mb-6" />

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sitemap
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto text-cream-200">
              Quickly navigate through all important sections of
              AgriShoppers and find the information you need.
            </p>

          </div>
        </section>

        {/* Intro Section */}
        <section className="max-w-6xl mx-auto px-4 py-16 text-center">

          <h2 className="text-4xl font-bold text-olive-800 mb-6">
            Explore Our Platform
          </h2>

          <p className="text-ink-500 text-lg max-w-4xl mx-auto">
            Access products, farmer resources, careers, quality information,
            tracking services, and other important pages through our
            easy-to-use navigation hub.
          </p>

        </section>

        {/* Sitemap Cards */}
        <section className="max-w-6xl mx-auto px-4 pb-20">

          <div className="grid md:grid-cols-2 gap-8">

            {pages.map((page, index) => (
              <Link
                to={page.path}
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="flex gap-5">

                  <div className="w-16 h-16 bg-wheat-100 text-olive-700 rounded-2xl flex items-center justify-center text-2xl">
                    {page.icon}
                  </div>

                  <div className="flex-1">

                    <h3 className="text-2xl font-bold text-olive-800 mb-3">
                      {page.title}
                    </h3>

                    <p className="text-ink-500 mb-4">
                      {page.description}
                    </p>

                    <div className="flex items-center text-wheat-700 font-semibold">
                      Open Page
                      <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>

                  </div>

                </div>
              </Link>
            ))}

          </div>

        </section>

        {/* Platform Statistics */}
        <section className="max-w-6xl mx-auto px-4 pb-20">

          <h2 className="text-4xl font-bold text-center text-olive-800 mb-12">
            Platform Highlights
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg text-center"
              >
                <div className="text-wheat-600 text-4xl mb-4 flex justify-center">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-bold text-olive-700 mb-2">
                  {item.number}
                </h3>

                <p className="text-ink-500">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </section>

        {/* Quick Access Section */}
        <section className="max-w-6xl mx-auto px-4 pb-20">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-4xl font-bold text-olive-800 mb-6">
              Quick Access
            </h2>

            <p className="text-ink-500 text-lg mb-8">
              Use the sitemap to quickly locate pages related to products,
              policies, support services, farmer resources, logistics,
              and company information.
            </p>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-cream-100 p-6 rounded-2xl text-center">
                🌱 Farmer Resources
              </div>

              <div className="bg-cream-100 p-6 rounded-2xl text-center">
                📦 Product Information
              </div>

              <div className="bg-cream-100 p-6 rounded-2xl text-center">
                🚚 Order Tracking
              </div>

            </div>

          </div>

        </section>

        {/* Benefits Section */}
        <section className="max-w-6xl mx-auto px-4 pb-20">

          <h2 className="text-4xl font-bold text-center text-olive-800 mb-12">
            Why Use Our Sitemap?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-olive-800 mb-3">
                Faster Navigation
              </h3>
              <p className="text-ink-500">
                Reach any important page quickly without searching.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-olive-800 mb-3">
                Mobile Friendly
              </h3>
              <p className="text-ink-500">
                Easy navigation experience across all devices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-olive-800 mb-3">
                Better Accessibility
              </h3>
              <p className="text-ink-500">
                Find information, resources, and services easily.
              </p>
            </div>

          </div>

        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-4 pb-20">

          <div className="bg-gradient-to-r from-olive-800 to-olive-700 rounded-[40px] p-12 text-center text-white shadow-2xl">

            <h2 className="text-4xl font-bold mb-5">
              Ready to Explore AgriShoppers?
            </h2>

            <p className="text-lg mb-8 text-cream-200">
              Discover products, resources, support services,
              and opportunities built for modern agriculture.
            </p>

            <Link
              to="/products"
              className="inline-block bg-wheat-400 text-ink-900 px-8 py-4 rounded-full font-bold hover:bg-wheat-500 transition"
            >
              Browse Products
            </Link>

          </div>

        </section>

      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
};

export default Sitemap;