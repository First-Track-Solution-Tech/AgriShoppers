import React, { useRef } from "react";
import {
  FileText,
  ShieldCheck,
  ShoppingCart,
  CreditCard,
  UserCheck,
  Mail,
} from "lucide-react";
import Footer from "../components/Footer";

const sections = [
  {
    id: "use-of-website",
    title: "1. Use of Website",
    text: "This website is intended to provide agricultural products, farming information, and related services to farmers and agri-professionals. Users must not engage in unlawful, fraudulent, or harmful activities on the platform.",
  },
  {
    id: "product-information",
    title: "2. Product Information",
    text: "We strive to provide accurate product descriptions, specifications, pricing, and images. However, slight variations may occur, and AgriShoppers cannot guarantee complete accuracy at all times.",
  },
  {
    id: "orders-payments",
    title: "3. Orders & Payments",
    text: "All orders are subject to product availability and confirmation. Payments must be completed using approved payment methods available on the platform.",
  },
  {
    id: "shipping-delivery",
    title: "4. Shipping & Delivery",
    text: "Delivery timelines may vary based on location, product availability, and courier partner operations. We are not responsible for delays caused by unforeseen circumstances.",
  },
  {
    id: "returns-refunds",
    title: "5. Returns & Refunds",
    text: "Return and refund requests are handled according to our Refund & Cancellation Policy. Certain products may not be eligible for returns due to safety or regulatory reasons.",
  },
  {
    id: "limitation-of-liability",
    title: "6. Limitation of Liability",
    text: "AgriShoppers shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products, website, or services.",
  },
  {
    id: "intellectual-property",
    title: "7. Intellectual Property",
    text: "All content, logos, trademarks, images, and materials on this website are the property of AgriShoppers and may not be copied or reused without permission.",
  },
  {
    id: "changes-to-terms",
    title: "8. Changes to Terms",
    text: "We reserve the right to update these Terms & Conditions at any time. Continued use of the website after updates constitutes acceptance of the revised terms.",
  },
];

const highlights = [
  { icon: ShieldCheck, label: "Secure Platform" },
  { icon: ShoppingCart, label: "Fair Shopping" },
  { icon: CreditCard, label: "Secure Payments" },
  { icon: UserCheck, label: "User Responsibility" },
];

const Terms = () => {
  const sectionRefs = useRef({});

  const scrollToSection = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="bg-cream-50 min-h-screen">

        {/* Hero — clean document header instead of full color band */}
        <section className="max-w-4xl mx-auto px-4 pt-20 pb-10 text-center">

          <div className="w-16 h-16 mx-auto rounded-2xl bg-wheat-100 border border-wheat-300 flex items-center justify-center mb-6">
            <FileText className="text-wheat-700" size={28} />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-olive-900">
            Terms & Conditions
          </h1>

          <p className="mt-5 text-ink-500 text-lg max-w-2xl mx-auto">
            Please read these terms carefully before using AgriShoppers.
            By accessing our platform, you agree to comply with these terms.
          </p>

          <span className="inline-block mt-5 text-xs font-semibold text-olive-700 bg-olive-100 border border-olive-200 px-3 py-1.5 rounded-full">
            Last Updated: June 2026
          </span>

          {/* Highlights — inline pill strip instead of 4 cards */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {highlights.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-2 bg-white border border-olive-100 text-ink-700 text-sm font-medium px-4 py-2 rounded-full shadow-sm"
              >
                <Icon size={16} className="text-wheat-600" />
                {label}
              </span>
            ))}
          </div>
        </section>

        {/* Sidebar + Document content */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid lg:grid-cols-[220px_1fr] gap-8">

            {/* Sticky sidebar — desktop */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-ink-400 mb-3 px-3">
                  On this page
                </p>
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className="w-full text-left text-sm text-ink-600 hover:text-olive-800 hover:bg-cream-100 rounded-lg px-3 py-2 transition"
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </aside>

            {/* Mobile quick-jump chips */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:hidden -mx-1 px-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className="shrink-0 text-xs font-medium text-ink-600 bg-white border border-olive-100 px-3 py-1.5 rounded-full whitespace-nowrap"
                >
                  {s.title}
                </button>
              ))}
            </div>

            {/* Document card */}
            <div className="bg-white rounded-3xl shadow-xl border border-olive-100 p-8 md:p-12">

              <p className="text-ink-500 text-lg leading-relaxed mb-10 pb-8 border-b border-olive-100">
                Welcome to AgriShoppers. By accessing or using our website,
                you agree to comply with and be bound by the following terms
                and conditions. Please review them carefully before using our services.
              </p>

              <div className="space-y-10">
                {sections.map((s) => (
                  <div
                    key={s.id}
                    id={s.id}
                    ref={(el) => (sectionRefs.current[s.id] = el)}
                    className="scroll-mt-24"
                  >
                    <h2 className="text-2xl font-bold text-olive-800 mb-4">
                      {s.title}
                    </h2>

                    <p className="text-ink-500 leading-relaxed">
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Contact — integrated into bottom of the document instead of a separate section */}
              <div className="mt-12 pt-10 border-t border-olive-100 text-center">
                <Mail className="mx-auto text-wheat-600 mb-4" size={40} />

                <h3 className="text-2xl font-bold text-olive-800 mb-3">
                  Need Clarification?
                </h3>

                <p className="text-ink-500 mb-4">
                  If you have any questions regarding our Terms &
                  Conditions, please contact our support team.
                </p>

                <p className="font-semibold text-wheat-700">
                  info@agrishoppers.com
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-4 pb-20">

          <div className="bg-gradient-to-r from-olive-800 to-olive-700 rounded-[40px] p-12 text-center text-white shadow-2xl">

            <h2 className="text-4xl font-bold mb-4">
              Transparent & Trusted
            </h2>

            <p className="text-lg mb-8 text-cream-200">
              We are committed to providing a safe and reliable experience for every farmer.
            </p>

            <button className="bg-wheat-400 text-ink-900 px-8 py-4 rounded-full font-bold hover:bg-wheat-500 transition">
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