import React from "react";
import { FaRocket, FaLaptopCode, FaUsers, FaChalkboardTeacher } from "react-icons/fa";

const Career = () => {
  const opportunities = [
    { icon: <FaRocket />, title: "Fast-Growing Agri-Tech", description: "Work in a dynamic, innovative environment shaping the future of agriculture." },
    { icon: <FaLaptopCode />, title: "Tech & Operations Roles", description: "Opportunities across technology, operations, and support functions." },
    { icon: <FaUsers />, title: "Inclusive Culture", description: "Collaborative, inclusive, and supportive work environment." },
    { icon: <FaChalkboardTeacher />, title: "Learning & Growth", description: "Continuous learning opportunities and career development." },
  ];

  return (
    <section className="bg-gradient-to-br from-ink-950 via-olive-950 to-olive-900 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Intro */}
        <div>
          <span className="inline-block bg-wheat-400/10 border border-wheat-400/30 text-wheat-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            🌾 We're Hiring
          </span>

          <h2 className="text-4xl font-extrabold text-cream-50 mb-6">
            Careers at AgriShapers
          </h2>
          <p className="text-ink-200 text-lg mb-6">
            We are always looking for passionate individuals who want to make a real impact in the agricultural ecosystem. Join us in building solutions that empower farmers nationwide.
          </p>
          <p className="text-wheat-300 font-semibold">
            Explore opportunities that match your skills and grow with us!
          </p>
        </div>

        {/* Right Column: Opportunities */}
        <div className="grid gap-6">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-wheat-400/15 p-6 rounded-xl hover:bg-white/10 hover:border-wheat-400/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-wheat-400/15 text-wheat-300 rounded-full w-14 h-14 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-cream-50">{item.title}</h3>
              </div>
              <p className="text-ink-200">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;