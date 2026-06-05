import React from "react";
import {
  Shield,
  Lock,
  Database,
  UserCheck,
  Mail,
} from "lucide-react";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-green-50 via-white to-green-100 min-h-screen">

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 to-green-600 py-20 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">

            <Shield className="mx-auto mb-5 w-16 h-16" />

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Privacy Policy
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Your privacy and data security are important to us.
              Learn how AgriShoppers collects, uses, and protects your information.
            </p>

          </div>
        </section>

        {/* Highlights */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Lock className="mx-auto text-green-700 mb-4" size={40} />
              <h3 className="font-bold text-green-800">Secure Data</h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Database className="mx-auto text-green-700 mb-4" size={40} />
              <h3 className="font-bold text-green-800">Protected Storage</h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <UserCheck className="mx-auto text-green-700 mb-4" size={40} />
              <h3 className="font-bold text-green-800">User Privacy</h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Shield className="mx-auto text-green-700 mb-4" size={40} />
              <h3 className="font-bold text-green-800">Trusted Platform</h3>
            </div>

          </div>
        </section>

        {/* Policy Content */}
        <section className="max-w-5xl mx-auto px-4 pb-20">

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At AgriShoppers, we respect your privacy and are committed
              to protecting your personal information. This Privacy Policy
              explains how we collect, use, and safeguard your data.
            </p>

            <div className="space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                  1. Information We Collect
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  We may collect personal details such as your name,
                  phone number, email address, delivery address,
                  and payment information when you use our services,
                  create an account, or place an order.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                  2. Use of Information
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Your information is used to process orders, provide
                  customer support, improve our services, personalize
                  your experience, and communicate important updates.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                  3. Data Security
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  We implement industry-standard security measures
                  to protect your data from unauthorized access,
                  misuse, or disclosure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                  4. Third-Party Services
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  We may share necessary information with trusted
                  payment gateways, logistics partners, and service
                  providers solely for order fulfillment and service delivery.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                  5. Cookies & Tracking
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Our website may use cookies and analytics tools
                  to improve user experience and website performance.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                  6. User Rights
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Users may request access, correction, or deletion
                  of their personal information by contacting our support team.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                  7. Consent
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  By accessing and using our website, you consent
                  to the collection and use of information as outlined
                  in this Privacy Policy.
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
              Privacy Questions?
            </h2>

            <p className="text-gray-600 mb-6">
              If you have any questions regarding our privacy practices,
              please contact our support team.
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
              Your Privacy Matters
            </h2>

            <p className="text-lg mb-8">
              We are committed to keeping your information safe and secure.
            </p>

            <button className="bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:bg-green-100 transition">
              Contact Us
            </button>

          </div>

        </section>

      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default PrivacyPolicy;