// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   ShoppingCartIcon,
//   HeartIcon,
//   UserCircleIcon,
//   Bars3Icon,
// } from "@heroicons/react/24/outline";

// const Navbar = () => {
//   const [cartCount, setCartCount] = useState(0);
//   const [open, setOpen] = useState(false);
//   useEffect(() => {
//     const updateCartCount = () => {
//       const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
//       const total = cart.reduce(
//         (sum, item) => sum + (item.quantity || 1),
//         0
//       );
  
//       setCartCount(total);
//     };
  
//     updateCartCount();
  
//     window.addEventListener("cartUpdated", updateCartCount);
  
//     return () => {
//       window.removeEventListener("cartUpdated", updateCartCount);
//     };
//   }, []);
//   return (
//     <>
//     <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-slate-300 via-blue-800 to-slate-700 backdrop-blur-md">

//       <div className="w-full px-4 md:px-8 py-4 flex items-center justify-between">


          
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2 md:-ml-6 lg:ml-2">
//             <img
//               src="/images/logo.png"
//               alt="AgriShoppers Logo"
//               className="h-10 w-auto object-contain scale-190"
//             />
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {/* <Link to="/" className="text-white font-medium hover:text-gray-200">
//               Home
//             </Link>
//             <Link to="/products" className="text-white font-medium hover:text-gray-200">
//               Products
//             </Link>
//             <Link to="/about" className="text-white font-medium hover:text-gray-200">
//               About Us
//             </Link>
//             <Link to="/contact" className="text-white font-medium hover:text-gray-200">
//               Contact
//             </Link> */}
//           </div>

//           {/* Right Icons (Mobile + Desktop) */}
//           <div className="flex items-center space-x-4 md:mr-2">
            
//             {/* Wishlist (Desktop only) */}
//             <Link to="/wishlist" className="hidden md:flex relative text-white">
//               <HeartIcon className="w-6 h-6" />
//               <span className="absolute -top-2 -right-3 bg-red-600 text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                 0
//               </span>
//             </Link>

//             {/* User */}
//             <Link to="/login" className="text-white">
//               <UserCircleIcon className="w-6 h-6" />
//             </Link>

//             {/* Cart */}
//             <Link to="/cart" className="relative text-white">
//               <ShoppingCartIcon className="w-6 h-6" />

//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-3 bg-red-600 text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//             {/* ☰ Menu Button (Right Side – Mobile + Desktop) */}
//             <button
//               onClick={() => setOpen(true)}
//               className="text-white hover:text-gray-200"
//               aria-label="Open Menu"
//             >
//               <Bars3Icon className="w-8 h-8" />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Overlay */}
//       {open && (
//         <div
//           onClick={() => setOpen(false)}
//           className="fixed inset-0 bg-black/50 z-40"
//         />
//       )}

//       {/* Right Drawer (Mobile + Desktop) */}
//     <div
//         className={`fixed top-1 right-0 
//         h-[85vh]
//         sm:w-68 md:w-70 lg:w-75
//         bg-slate-900 z-50
//         rounded-xl shadow-2xl
//         transform transition-all duration-300
//         ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
//       >

//         <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700">
//           <span className="text-white text-lg font-semibold">Menu</span>
//           <button
//             onClick={() => setOpen(false)}
//             className="text-white text-2xl"
//           >
//             ✕
//           </button>
//         </div>

//         <div className="flex flex-col px-5 py-6 gap-4 text-white text-sm">
//           <Link to="/brands" onClick={() => setOpen(false)}>Our Partner Brands</Link>
//           <Link to="/seeds" onClick={() => setOpen(false)}>Quality Seeds</Link>
//           <Link to="/crop-protection" onClick={() => setOpen(false)}>Plant Protection</Link>
//           <Link to="/crop-nutrition" onClick={() => setOpen(false)}>Crop Nutrition</Link>
//           <Link to="/equipment" onClick={() => setOpen(false)}>Farm Tools</Link>
//           <Link to="/animal-husbandry" onClick={() => setOpen(false)}>Livestock Care</Link>
//           <Link to="/organic" onClick={() => setOpen(false)}>Organic Farming</Link>
//           <Link to="/services" onClick={() => setOpen(false)}>Farmer Services</Link>
//           <Link to="/sell-with-us" onClick={() => setOpen(false)}>Become a Seller</Link>
//           <Link to="/bulk-orders" onClick={() => setOpen(false)}>Bulk Orders</Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCartIcon,
  HeartIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updateCartCount = () => {
      try {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        const totalItems = cart.reduce(
          (sum, item) => sum + Number(item.quantity || 1),
          0
        );

        setCartCount(totalItems);
      } catch (error) {
        console.error("Cart Error:", error);
        setCartCount(0);
      }
    };

    // Initial Load
    updateCartCount();

    // Custom Event
    window.addEventListener("cartUpdated", updateCartCount);

    // Local Storage Change
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-slate-300 via-blue-800 to-slate-700 backdrop-blur-md shadow-lg">
        <div className="w-full px-4 md:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="AgriShoppers Logo"
              className="h-10 w-auto object-contain scale-190"
            />
          </Link>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Wishlist */}
            <Link to="/wishlist" className="hidden md:flex relative text-white">
              <HeartIcon className="w-6 h-6" />
            </Link>

            {/* Login */}
            <Link to="/login" className="text-white">
              <UserCircleIcon className="w-7 h-7" />
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative text-white">
              <ShoppingCartIcon className="w-7 h-7" />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="text-white"
              aria-label="Open Menu"
            >
              <Bars3Icon className="w-8 h-8" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-slate-900 z-50 shadow-2xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700">
          <h2 className="text-white text-lg font-semibold">
            Menu
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col gap-4 p-5 text-white">
          {/* Cart */}
          <Link
            to="/cart"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between border-b border-slate-700 pb-3"
          >
            <span>🛒 Cart</span>

            {cartCount > 0 && (
              <span className="bg-red-600 px-2 py-1 rounded text-xs">
                {cartCount}
              </span>
            )}
          </Link>

          <Link to="/brands" onClick={() => setOpen(false)}>
            Our Partner Brands
          </Link>

          <Link to="/seeds" onClick={() => setOpen(false)}>
            Quality Seeds
          </Link>

          <Link to="/crop-protection" onClick={() => setOpen(false)}>
            Plant Protection
          </Link>

          <Link to="/crop-nutrition" onClick={() => setOpen(false)}>
            Crop Nutrition
          </Link>

          <Link to="/equipment" onClick={() => setOpen(false)}>
            Farm Tools
          </Link>

          <Link to="/animal-husbandry" onClick={() => setOpen(false)}>
            Livestock Care
          </Link>

          <Link to="/organic" onClick={() => setOpen(false)}>
            Organic Farming
          </Link>

          <Link to="/services" onClick={() => setOpen(false)}>
            Farmer Services
          </Link>

          <Link to="/sell-with-us" onClick={() => setOpen(false)}>
            Become a Seller
          </Link>

          <Link to="/bulk-orders" onClick={() => setOpen(false)}>
            Bulk Orders
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;