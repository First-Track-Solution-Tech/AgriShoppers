import React, { useState } from "react";
import { ChevronDown, Search, HelpCircle, Phone, Mail } from "lucide-react";
import Footer from "../components/Footer";

const faqs = [
  {
    question: "What is AgriShoppers?",
    answer:
      "AgriShoppers is an online agriculture marketplace offering certified seeds, fertilizers, pesticides, and farming tools with fast delivery across India.",
  },
  {
    question: "Do you deliver to villages and rural areas?",
    answer:
      "Yes, we deliver to most rural and semi-urban areas. Availability depends on your pin code and courier partner coverage.",
  },
  {
    question: "Are AgriShoppers products genuine?",
    answer:
      "Absolutely. All products are sourced from authorized brands and verified sellers to ensure quality and authenticity.",
  },
  {
    question: "Which payment options are available?",
    answer:
      "We support UPI, debit cards, credit cards, net banking, and Cash on Delivery (COD) on selected products.",
  },
  {
    question: "How can I cancel or return my order?",
    answer:
      "Orders can be cancelled or returned according to our Refund & Cancellation Policy available on our website.",
  },
];

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState([]);
  const [search, setSearch] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="bg-gradient-to-b from-green-50 via-white to-green-100 min-h-screen">

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 to-green-600 py-20 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <HelpCircle className="mx-auto mb-5 w-16 h-16" />

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Help Center
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Find answers to the most commonly asked questions about
              AgriShoppers products, orders, delivery, and support.
            </p>
          </div>
        </section>

        {/* Search Bar */}
        <section className="max-w-4xl mx-auto px-4 -mt-10 relative z-10">
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <div className="flex items-center gap-3 border rounded-xl px-4 py-3">
              <Search size={20} className="text-green-600" />

              <input
                type="text"
                placeholder="Search your question..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full outline-none"
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <h3 className="text-3xl font-bold text-green-700">5000+</h3>
              <p className="text-gray-600 mt-2">Happy Farmers</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <h3 className="text-3xl font-bold text-green-700">1000+</h3>
              <p className="text-gray-600 mt-2">Products</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <h3 className="text-3xl font-bold text-green-700">24/7</h3>
              <p className="text-gray-600 mt-2">Support</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <h3 className="text-3xl font-bold text-green-700">100%</h3>
              <p className="text-gray-600 mt-2">Genuine Products</p>
            </div>

          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto px-4 pb-20">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-600 mt-3">
              Everything you need to know about AgriShoppers.
            </p>
          </div>

          <div className="space-y-5">

            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndexes.includes(index);

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-lg text-gray-800">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`text-green-700 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "max-h-40 opacity-100 pb-6 px-6"
                        : "max-h-0 opacity-0 px-6"
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              No FAQs found.
            </div>
          )}
        </section>

        {/* Support Section */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-4xl font-bold text-green-800 text-center mb-8">
              Need More Help?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-green-50 p-6 rounded-2xl text-center">
                <Phone className="mx-auto mb-4 text-green-700" size={40} />
                <h3 className="font-bold text-green-800 mb-2">
                  Call Support
                </h3>
                <p className="text-gray-600">+91 1234567890</p>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl text-center">
                <Mail className="mx-auto mb-4 text-green-700" size={40} />
                <h3 className="font-bold text-green-800 mb-2">
                  Email Support
                </h3>
                <p className="text-gray-600">info@agrishoppers.com</p>
              </div>

            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-[40px] p-12 text-center text-white shadow-2xl">

            <h2 className="text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>

            <p className="text-lg mb-8">
              Our support team is always ready to assist you.
            </p>

            <button className="bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:bg-green-100 transition">
              Contact Support
            </button>

          </div>
        </section>

      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default FAQ;