import React from "react";

const blogs = [
  {
    id: 1,
    title: "Best Crops to Grow in Summer Season",
    image: "https://source.unsplash.com/600x400/?farming,crops",
    description:
      "Learn which crops give the best yield during the summer season in India.",
    tag: "Seasonal Crops",
  },
  {
    id: 2,
    title: "Modern Farming Techniques for Higher Yield",
    image: "https://source.unsplash.com/600x400/?modern,farming",
    description:
      "Discover smart farming methods that increase productivity and income.",
    tag: "Smart Farming",
  },
  {
    id: 3,
    title: "How to Improve Soil Fertility Naturally",
    image: "https://source.unsplash.com/600x400/?soil,agriculture",
    description:
      "Simple and organic ways to maintain soil health for long-term farming.",
    tag: "Soil Health",
  },
  {
    id: 4,
    title: "Effective Pest Management Strategies",
    image: "https://source.unsplash.com/600x400/?pest,management",
    description:
      "Learn integrated pest management techniques to protect your crops.",
    tag: "Pest Control",
  },
];

const Blog = () => {
  return (
    <section className="bg-gradient-to-b from-cream-100 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-olive-900 relative inline-block">
            Agriculture Blog
            <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-1 bg-wheat-400 rounded-full"></span>
          </h1>
          <p className="mt-5 text-ink-500 text-lg max-w-2xl mx-auto">
            Latest farming tips, expert guidance, and modern agricultural insights
            to help farmers grow better.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Tag */}
                <span className="absolute top-4 left-4 bg-wheat-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {blog.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-olive-800 mb-3 leading-snug">
                  {blog.title}
                </h2>

                <p className="text-ink-500 text-sm mb-6">
                  {blog.description}
                </p>

                <button className="inline-flex items-center gap-2 text-wheat-700 font-semibold hover:text-wheat-800 transition">
                  Read More
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;