import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { categoriesData } from "../data/categories";

const FEATURED_COUNT = 3;

const Categories = () => {
  const featuredSet = useMemo(
    () => categoriesData.slice(0, FEATURED_COUNT),
    []
  );
  const gridBase = useMemo(
    () => categoriesData.slice(FEATURED_COUNT),
    []
  );

  const [bannerIndex, setBannerIndex] = useState(0);
  const [sortOrder, setSortOrder] = useState("featured"); // featured | az | za
  const [viewMode, setViewMode] = useState("grid"); // grid | list

  const bannerRef = useRef(null);
  const cardRefs = useRef({});

  // Auto-rotate featured banner
  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % featuredSet.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredSet.length]);

  const featured = featuredSet[bannerIndex];

  // Sorted grid items
  const gridItems = useMemo(() => {
    const items = [...gridBase];
    if (sortOrder === "az") items.sort((a, b) => a.name.localeCompare(b.name));
    if (sortOrder === "za") items.sort((a, b) => b.name.localeCompare(a.name));
    return items;
  }, [gridBase, sortOrder]);

  const handleChipClick = (cat) => {
    const featuredIdx = featuredSet.findIndex((c) => c.id === cat.id);
    if (featuredIdx !== -1) {
      setBannerIndex(featuredIdx);
      bannerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      cardRefs.current[cat.id]?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 bg-cream-50">

      {/* Breadcrumb */}
      <p className="text-sm text-ink-400 mb-4">
        <Link to="/" className="hover:text-wheat-600 transition">Home</Link>
        <span className="mx-1.5">/</span>
        <span className="text-ink-600">Products</span>
      </p>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-olive-800">
            All Farming Categories
          </h1>
          <p className="text-ink-500 mt-2 text-sm sm:text-base">
            Everything you need, organized by farming need
          </p>
        </div>

        <span className="text-sm font-semibold text-wheat-700 bg-wheat-100 border border-wheat-300 px-3 py-1.5 rounded-full self-start sm:self-auto">
          {categoriesData.length} categories to explore
        </span>
      </div>

      {/* Quick-jump chip row */}
      <div className="flex gap-2.5 overflow-x-auto pb-3 mb-6 -mx-1 px-1 scrollbar-hide">
        {categoriesData.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleChipClick(cat)}
            className="shrink-0 flex items-center gap-1.5 bg-white border border-olive-200 hover:border-wheat-400 hover:bg-wheat-50 text-ink-700 text-sm font-medium px-3.5 py-2 rounded-full transition whitespace-nowrap"
          >
            <span>{cat.icon}</span>
            {cat.name}
          </button>
        ))}
      </div>

      {/* Featured Category Banner — rotating */}
      <div
        ref={bannerRef}
        className="relative w-full h-72 sm:h-96 rounded-3xl overflow-hidden mb-6 group"
      >
        <img
          key={featured.id}
          src={featured.image}
          alt={featured.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 animate-hero-in"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-900/50 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="px-6 sm:px-10 max-w-xl">
            <span className="inline-block bg-wheat-400/20 border border-wheat-400/40 text-wheat-300 text-xs sm:text-sm font-semibold tracking-wide px-3 py-1 rounded-full">
              ⭐ Featured Category
            </span>

            <h2 className="mt-4 text-2xl sm:text-4xl font-bold text-cream-50 leading-tight">
              {featured.name}
            </h2>

            <p className="mt-3 text-sm sm:text-base text-cream-200">
              {featured.description}
            </p>

            <button className="mt-6 bg-wheat-400 hover:bg-wheat-500 text-ink-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition">
              View Products
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-5 right-6 flex gap-2">
          {featuredSet.map((_, i) => (
            <button
              key={i}
              onClick={() => setBannerIndex(i)}
              aria-label={`Show featured category ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                bannerIndex === i ? "w-6 bg-wheat-400" : "w-2 bg-cream-100/50 hover:bg-cream-100/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Sort + View toggle */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          <label className="text-sm text-ink-500">Sort:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="text-sm border border-olive-200 rounded-lg px-3 py-1.5 text-ink-700 bg-white focus:outline-none focus:ring-2 focus:ring-wheat-400"
          >
            <option value="featured">Featured</option>
            <option value="az">Name: A – Z</option>
            <option value="za">Name: Z – A</option>
          </select>
        </div>

        <div className="flex items-center gap-1 bg-white border border-olive-200 rounded-lg p-1">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
              viewMode === "grid" ? "bg-olive-700 text-white" : "text-ink-500 hover:text-olive-700"
            }`}
          >
            ⊞ Grid
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
              viewMode === "list" ? "bg-olive-700 text-white" : "text-ink-500 hover:text-olive-700"
            }`}
          >
            ☰ List
          </button>
        </div>
      </div>

      {/* Grid / List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gridItems.map((cat) => (
            <div
              key={cat.id}
              ref={(el) => (cardRefs.current[cat.id] = el)}
              className="group relative w-full h-64 rounded-2xl overflow-hidden border border-olive-100 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-wheat-300"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-900/40 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-base sm:text-lg font-bold text-cream-50">
                  {cat.name}
                </h3>

                <p className="text-xs sm:text-sm text-cream-200 mt-1 line-clamp-2">
                  {cat.description}
                </p>

                <button className="mt-3 w-full bg-white/10 backdrop-blur-sm border border-wheat-300/40 text-wheat-200 text-sm font-semibold py-2 rounded-lg hover:bg-wheat-400 hover:text-ink-900 hover:border-wheat-400 transition">
                  View Products
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {gridItems.map((cat) => (
            <div
              key={cat.id}
              ref={(el) => (cardRefs.current[cat.id] = el)}
              className="flex items-center gap-4 bg-white border border-olive-100 rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-lg hover:border-wheat-300 transition-all duration-300"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shrink-0"
              />

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-ink-800 text-base sm:text-lg flex items-center gap-2">
                  <span>{cat.icon}</span> {cat.name}
                </h3>
                <p className="text-sm text-ink-500 mt-1 line-clamp-1 sm:line-clamp-2">
                  {cat.description}
                </p>
              </div>

              <button className="shrink-0 bg-olive-700 hover:bg-olive-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition">
                View Products
              </button>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Categories;