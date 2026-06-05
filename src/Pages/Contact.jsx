import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-green-50 via-white to-green-100 min-h-screen">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-r from-green-700 to-green-600 py-20 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              We're here to help farmers, partners, and customers with
              any questions regarding our agricultural products and services.
            </p>

          </div>
        </section>

        {/* CONTACT CARDS */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-2xl transition">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-green-800 mb-3">
                Office Address
              </h3>
              <p className="text-gray-600">
                Laxmanpur Pilakh, Jhinjhak,
                <br />
                Kanpur Dehat,
                <br />
                Uttar Pradesh - 209302,
                <br />
                India
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-2xl transition">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-green-800 mb-3">
                Call Us
              </h3>
              <p className="text-gray-600">
                +91 1234567890
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-2xl transition">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-xl font-bold text-green-800 mb-3">
                Email Us
              </h3>
              <p className="text-gray-600">
                info@agrishoppers.com
              </p>
            </div>

          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Left */}
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">
                Get In Touch
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Have a question about our products, orders, or farming
                solutions? Fill out the form and our team will get back
                to you as soon as possible.
              </p>

              <div className="space-y-4">

                <div className="bg-white p-4 rounded-xl shadow">
                  ⏰ Support Hours: Mon - Sat (9 AM - 6 PM)
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                  🌱 Agricultural Expert Support Available
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                  🚚 Order & Delivery Assistance
                </div>

              </div>
            </div>

            {/* Right Form */}
            <form className="bg-white p-8 rounded-3xl shadow-xl">

              <div className="grid md:grid-cols-2 gap-4 mb-4">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                />

              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-xl p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full border rounded-xl p-4 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>
        </section>

        {/* QUICK SUPPORT */}
        <section className="max-w-7xl mx-auto px-4 pb-20">

          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
            How Can We Help?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <h3 className="font-bold text-green-700 text-xl mb-3">
                Product Inquiry
              </h3>
              <p className="text-gray-600">
                Questions about seeds, fertilizers, pesticides,
                and farming products.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <h3 className="font-bold text-green-700 text-xl mb-3">
                Order Support
              </h3>
              <p className="text-gray-600">
                Track orders, delivery updates, returns,
                and refund assistance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <h3 className="font-bold text-green-700 text-xl mb-3">
                Farmer Assistance
              </h3>
              <p className="text-gray-600">
                Get farming guidance and product recommendations
                from experts.
              </p>
            </div>

          </div>

        </section>

        {/* FAQ */}
        <section className="max-w-5xl mx-auto px-4 pb-20">

          <h2 className="text-4xl font-bold text-center text-green-800 mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-green-700 mb-2">
                How long does delivery take?
              </h3>

              <p className="text-gray-600">
                Most orders are delivered within 3-7 business days
                depending on location.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-green-700 mb-2">
                Do you provide farming consultation?
              </h3>

              <p className="text-gray-600">
                Yes, our agricultural experts can help guide you with
                product selection and farming practices.
              </p>
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-[40px] p-12 text-center text-white shadow-2xl">

            <h2 className="text-4xl font-bold mb-5">
              Need Immediate Assistance?
            </h2>

            <p className="text-lg mb-8">
              Our support team is ready to assist you with any query.
            </p>

            <button className="bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:bg-green-100 transition">
              Contact Support
            </button>

          </div>
        </section>

      </div>

      
    </>
  );
};

export default Contact;