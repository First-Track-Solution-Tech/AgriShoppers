import React from "react";
import {
  FileText,
  ShieldCheck,
  ShoppingCart,
  CreditCard,
  UserCheck,
  Mail,
} from "lucide-react";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-green-50 via-white to-green-100 min-h-screen">

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 to-green-600 py-20 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">

            <FileText className="mx-auto mb-5 w-16 h-16" />

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Terms & Conditions
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Please read these terms carefully before using AgriShoppers.
              By accessing our platform, you agree to comply with these terms.
            </p>

          </div>
        </section>

        {/* Highlights */}
        <section className="max-w-6xl mx-auto px-4 py-16">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <ShieldCheck className="mx-auto text-green-700 mb-4" size={40} />
              <h3 className="font-bold text-green-800">
                Secure Platform
              </h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <ShoppingCart className="mx-auto text-green-700 mb-4" size={40} />
              <h3 className="font-bold text-green-800">
                Fair Shopping
              </h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <CreditCard className="mx-auto text-green-700 mb-4" size={40} />
              <h3 className="font-bold text-green-800">
                Secure Payments
              </h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <UserCheck className="mx-auto text-green-700 mb-4" size={40} />
              <h3 className="font-bold text-green-800">
                User Responsibility
              </h3>
            </div>

          </div>

        </section>

        {/* Terms Content */}
        <section className="max-w-5xl mx-auto px-4 pb-20">

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Welcome to AgriShoppers. By accessing or using our website,
              you agree to comply with and be bound by the following terms
              and conditions. Please review them carefully before using our services.
            </p>

            <div className="space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                  1. Use of Website
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  This website is intended to provide agricultural products,
                  farming information, and related services to farmers and
                  agri-professionals. Users must not engage in unlawful,
                  fraudulent, or harmful activities on the platform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                  2. Product Information
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  We strive to provide accurate product descriptions,
                  specifications, pricing, and images. However,
                  slight variations may occur, and AgriShoppers
                  cannot guarantee complete accuracy at all times.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                  3. Orders & Payments
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  All orders are subject to product availability and
                  confirmation. Payments must be completed using
                  approved payment methods available on the platform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                  4. Shipping & Delivery
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Delivery timelines may vary based on location,
                  product availability, and courier partner operations.
                  We are not responsible for delays caused by unforeseen circumstances.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                  5. Returns & Refunds
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Return and refund requests are handled according to
                  our Refund & Cancellation Policy. Certain products may
                  not be eligible for returns due to safety or regulatory reasons.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                  6. Limitation of Liability
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  AgriShoppers shall not be liable for any indirect,
                  incidental, or consequential damages arising from the
                  use of our products, website, or services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                  7. Intellectual Property
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  All content, logos, trademarks, images, and materials
                  on this website are the property of AgriShoppers and
                  may not be copied or reused without permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                  8. Changes to Terms
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to update these Terms &
                  Conditions at any time. Continued use of the website
                  after updates constitutes acceptance of the revised terms.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Contact Section */}
        <section className="max-w-5xl mx-auto px-4 pb-20">

          <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

            <Mail className="mx-auto text-green-700 mb-4" size={50} />

            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Need Clarification?
            </h2>

            <p className="text-gray-600 mb-6">
              If you have any questions regarding our Terms &
              Conditions, please contact our support team.
            </p>

            <p className="font-semibold text-green-700">
              info@agrishoppers.com
            </p>

          </div>

        </section>

        {/* Last Updated */}
        <section className="max-w-5xl mx-auto px-4 pb-20 text-center">
          <p className="text-gray-500">
            Last Updated: June 2026
          </p>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-4 pb-20">

          <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-[40px] p-12 text-center text-white shadow-2xl">

            <h2 className="text-4xl font-bold mb-4">
              Transparent & Trusted
            </h2>

            <p className="text-lg mb-8">
              We are committed to providing a safe and reliable experience for every farmer.
            </p>

            <button className="bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:bg-green-100 transition">
              Contact Us
            </button>

          </div>

        </section>

      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
};

export default Terms;