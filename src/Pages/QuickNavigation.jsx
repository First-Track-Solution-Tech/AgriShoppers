import React from "react";
import {
FaHome,
FaBoxOpen,
FaHandshake,
FaLeaf,
FaArrowRight,
FaUsers,
FaTruck,
FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const QuickNavigation = () => {
const links = [
{
icon: <FaHome />,
title: "Home",
description: "Return to the AgriShoppers homepage.",
path: "/",
},
{
icon: <FaLeaf />,
title: "Farmer Resources",
description: "Explore guides, farming tips, and expert resources.",
path: "/farmer-resources",
},
{
icon: <FaBoxOpen />,
title: "Products",
description: "Browse agricultural products and farming solutions.",
path: "/products",
},
{
icon: <FaHandshake />,
title: "Careers",
description: "Join our growing agri-tech team.",
path: "/careers",
},
];

const stats = [
{ number: "5000+", label: "Happy Farmers" },
{ number: "1000+", label: "Products Available" },
{ number: "500+", label: "Delivery Locations" },
{ number: "24/7", label: "Customer Support" },
];

return (
<>
  <div className="bg-gradient-to-b from-green-50 via-white to-green-100 min-h-screen">

    {/* Hero Section */}
    <section className="bg-gradient-to-r from-green-700 to-green-600 py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Quick Navigation
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Access important sections of AgriShoppers quickly and
          efficiently through our smart navigation hub.
        </p>

      </div>
    </section>

    {/* Intro */}
    <section className="max-w-6xl mx-auto px-4 py-16 text-center">

      <h2 className="text-4xl font-bold text-green-800 mb-6">
        Explore AgriShoppers
      </h2>

      <p className="text-gray-600 text-lg max-w-4xl mx-auto">
        Navigate easily to products, farmer resources, career opportunities,
        and other important sections designed to support farmers and
        agricultural businesses across India.
      </p>

    </section>

    {/* Navigation Cards */}
    <section className="max-w-6xl mx-auto px-4 pb-20">

      <div className="grid md:grid-cols-2 gap-8">

        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="flex items-start gap-5">

              <div className="w-16 h-16 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center text-2xl">
                {link.icon}
              </div>

              <div className="flex-1">

                <h3 className="text-2xl font-bold text-green-800 mb-3">
                  {link.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {link.description}
                </p>

                <div className="flex items-center text-green-700 font-semibold">
                  Visit Page
                  <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>

              </div>

            </div>
          </Link>
        ))}

      </div>

    </section>

    {/* Statistics */}
    <section className="max-w-6xl mx-auto px-4 pb-20">

      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
        Platform Highlights
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-lg text-center"
          >
            <h3 className="text-4xl font-bold text-green-700 mb-2">
              {item.number}
            </h3>

            <p className="text-gray-600">
              {item.label}
            </p>
          </div>
        ))}

      </div>

    </section>

    {/* Why Choose Us */}
    <section className="max-w-6xl mx-auto px-4 pb-20">

      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
        Why Choose AgriShoppers?
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
          <FaUsers className="text-green-700 text-5xl mx-auto mb-5" />
          <h3 className="font-bold text-xl text-green-800 mb-3">
            Trusted by Farmers
          </h3>
          <p className="text-gray-600">
            Thousands of farmers trust AgriShoppers for quality products.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
          <FaTruck className="text-green-700 text-5xl mx-auto mb-5" />
          <h3 className="font-bold text-xl text-green-800 mb-3">
            Fast Delivery
          </h3>
          <p className="text-gray-600">
            Reliable logistics network across urban and rural India.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
          <FaCheckCircle className="text-green-700 text-5xl mx-auto mb-5" />
          <h3 className="font-bold text-xl text-green-800 mb-3">
            Genuine Products
          </h3>
          <p className="text-gray-600">
            Certified agricultural products from trusted suppliers.
          </p>
        </div>

      </div>

    </section>

    {/* CTA */}
    <section className="max-w-6xl mx-auto px-4 pb-20">

      <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-[40px] p-12 text-center text-white shadow-2xl">

        <h2 className="text-4xl font-bold mb-5">
          Start Exploring Today
        </h2>

        <p className="text-lg mb-8">
          Discover products, resources, and opportunities built for modern agriculture.
        </p>

        <Link
          to="/products"
          className="inline-block bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:bg-green-100 transition"
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

export default QuickNavigation;
