// import React, { useState } from "react";
// import {
//   FunnelIcon,
//   Squares2X2Icon,
//   SparklesIcon,
//   TagIcon,
//   CurrencyRupeeIcon,
//   CheckCircleIcon,
// } from "@heroicons/react/24/outline";

// const Filter = () => {
//   const [filters, setFilters] = useState({
//     category: "",
//     crop: "",
//     brand: "",
//     price: "",
//     stock: "",
//   });

//   const handleChange = (e) => {
//     setFilters({ ...filters, [e.target.name]: e.target.value });
//   };

//   const clearFilter = () => {
//     setFilters({
//       category: "",
//       crop: "",
//       brand: "",
//       price: "",
//       stock: "",
//     });
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 mt-6 sm:mt-8 lg:mt-10">
//       <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-4 sm:p-6">

//         {/* HEADER */}
//         <div className="flex items-center gap-2 mb-4 sm:mb-6">
//           <FunnelIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
//           <h2 className="text-base sm:text-lg font-semibold text-gray-800">
//             Filter Products
//           </h2>
//         </div>

//         {/* FILTER GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">

//           {/* Category */}
//           <div className="relative">
//             <Squares2X2Icon className="w-4 h-4 sm:w-5 sm:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-gray-400" />
//             <select
//               name="category"
//               value={filters.category}
//               onChange={handleChange}
//               className="w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-2.5 text-sm border rounded-full focus:ring-2 focus:ring-green-500 outline-none"
//             >
//               <option value="">Category</option>
//               <option>Seeds</option>
//               <option>Fertilizers</option>
//               <option>Tools</option>
//               <option>Organic</option>
//             </select>
//           </div>

//           {/* Crop */}
//           <div className="relative">
//             <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-gray-400" />
//             <select
//               name="crop"
//               value={filters.crop}
//               onChange={handleChange}
//               className="w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-2.5 text-sm border rounded-full focus:ring-2 focus:ring-green-500 outline-none"
//             >
//               <option value="">Crop</option>
//               <option>Rice</option>
//               <option>Wheat</option>
//               <option>Vegetables</option>
//             </select>
//           </div>

//           {/* Brand */}
//           <div className="relative">
//             <TagIcon className="w-4 h-4 sm:w-5 sm:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-gray-400" />
//             <select
//               name="brand"
//               value={filters.brand}
//               onChange={handleChange}
//               className="w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-2.5 text-sm border rounded-full focus:ring-2 focus:ring-green-500 outline-none"
//             >
//               <option value="">Brand</option>
//               <option>UPL</option>
//               <option>Bayer</option>
//               <option>Tata</option>
//             </select>
//           </div>

//           {/* Price */}
//           <div className="relative">
//             <CurrencyRupeeIcon className="w-4 h-4 sm:w-5 sm:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-gray-400" />
//             <select
//               name="price"
//               value={filters.price}
//               onChange={handleChange}
//               className="w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-2.5 text-sm border rounded-full focus:ring-2 focus:ring-green-500 outline-none"
//             >
//               <option value="">Price</option>
//               <option>Under ₹500</option>
//               <option>₹500 – ₹1000</option>
//               <option>₹1000+</option>
//             </select>
//           </div>

//           {/* Availability */}
//           <div className="relative">
//             <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-gray-400" />
//             <select
//               name="stock"
//               value={filters.stock}
//               onChange={handleChange}
//               className="w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-2.5 text-sm border rounded-full focus:ring-2 focus:ring-green-500 outline-none"
//             >
//               <option value="">Availability</option>
//               <option>In Stock</option>
//               <option>Out of Stock</option>
//             </select>
//           </div>
//         </div>

//         {/* BUTTONS */}
//         <div className="flex flex-col sm:flex-row justify-end gap-3 mt-5 sm:mt-6">
//           <button
//             onClick={clearFilter}
//             className="w-full sm:w-auto px-6 py-2 rounded-full border text-sm hover:bg-gray-100 transition"
//           >
//             Clear
//           </button>
//           <button
//             className="w-full sm:w-auto px-6 py-2 rounded-full bg-green-600 text-white text-sm hover:bg-green-700 transition"
//           >
//             Apply Filters
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Filter;





import React, { useState } from "react";
import {
  FunnelIcon,
  Squares2X2Icon,
  SparklesIcon,
  TagIcon,
  CurrencyRupeeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const Filter = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({
    category: "",
    crop: "",
    brand: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const clearFilter = () => {
    const emptyFilters = {
      category: "",
      crop: "",
      brand: "",
      price: "",
      stock: "",
    };

    setFilters(emptyFilters);

    if (onApplyFilters) {
      onApplyFilters(emptyFilters);
    }
  };

  const applyFilters = () => {
    if (onApplyFilters) {
      onApplyFilters(filters);
    }

    console.log("Applied Filters:", filters);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-6 sm:mt-8 lg:mt-10">
      <div className="bg-white shadow-xl rounded-2xl p-4 sm:p-6">

        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <FunnelIcon className="w-6 h-6 text-green-600" />

          <h2 className="text-lg font-semibold text-gray-800">
            Filter Products
          </h2>
        </div>

        {/* Filter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

          {/* Category */}
          <div className="relative">
            <Squares2X2Icon className="w-5 h-5 absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />

            <select
              name="category"
              value={filters.category}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 border rounded-full focus:ring-2 focus:ring-green-500 outline-none"
            >
              <option value="">Category</option>
              <option value="Seeds">Seeds</option>
              <option value="Fertilizers">Fertilizers</option>
              <option value="Tools">Tools</option>
              <option value="Organic">Organic</option>
            </select>
          </div>

          {/* Crop */}
          <div className="relative">
            <SparklesIcon className="w-5 h-5 absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />

            <select
              name="crop"
              value={filters.crop}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 border rounded-full focus:ring-2 focus:ring-green-500 outline-none"
            >
              <option value="">Crop</option>
              <option value="Rice">Rice</option>
              <option value="Wheat">Wheat</option>
              <option value="Vegetables">Vegetables</option>
            </select>
          </div>

          {/* Brand */}
          <div className="relative">
            <TagIcon className="w-5 h-5 absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />

            <select
              name="brand"
              value={filters.brand}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 border rounded-full focus:ring-2 focus:ring-green-500 outline-none"
            >
              <option value="">Brand</option>
              <option value="UPL">UPL</option>
              <option value="Bayer">Bayer</option>
              <option value="Tata">Tata</option>
            </select>
          </div>

          {/* Price */}
          <div className="relative">
            <CurrencyRupeeIcon className="w-5 h-5 absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />

            <select
              name="price"
              value={filters.price}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 border rounded-full focus:ring-2 focus:ring-green-500 outline-none"
            >
              <option value="">Price</option>
              <option value="Under ₹500">Under ₹500</option>
              <option value="₹500 – ₹1000">₹500 – ₹1000</option>
              <option value="₹1000+">₹1000+</option>
            </select>
          </div>

          {/* Availability */}
          <div className="relative">
            <CheckCircleIcon className="w-5 h-5 absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />

            <select
              name="stock"
              value={filters.stock}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 border rounded-full focus:ring-2 focus:ring-green-500 outline-none"
            >
              <option value="">Availability</option>
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">

          <button
            onClick={clearFilter}
            className="px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            Clear
          </button>

          <button
            onClick={applyFilters}
            className="px-6 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
          >
            Apply Filters
          </button>

        </div>
      </div>
    </div>
  );
};

export default Filter;