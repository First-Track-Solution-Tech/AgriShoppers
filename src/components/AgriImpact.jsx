import React from "react";

const AgriImpact = () => {
  const stats = [
    { value: "500+", label: "Trusted Brands" },
    { value: "40M+", label: "Farmers Reached" },
    { value: "10K+", label: "Agri Products" },
    { value: "90%+", label: "India Coverage" },
  ];

  return (
    <section className="bg-gradient-to-r from-wheat-100 via-ink-50 to-wheat-100 py-14">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="max-w-2xl mx-auto mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">
            Empowering Farmers Across India
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Building a stronger agricultural ecosystem with technology,
            trust, and nationwide reach.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition text-center"
            >
              <p className="text-4xl font-extrabold text-olive-600">
                {item.value}
              </p>
              <p className="mt-2 text-gray-700 font-medium">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AgriImpact;
