import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ShoppingCartIcon,
  HeartIcon,
  UserCircleIcon,
  Bars3Icon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import SearchBar from "./SearchBar";

const mainLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/categories" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const categoryLinks = [
  { name: "Our Partner Brands", path: "/brands" },
  { name: "Quality Seeds", path: "/seeds" },
  { name: "Plant Protection", path: "/crop-protection" },
  { name: "Crop Nutrition", path: "/crop-nutrition" },
  { name: "Farm Tools", path: "/equipment" },
  { name: "Livestock Care", path: "/animal-husbandry" },
  { name: "Organic Farming", path: "/organic" },
  { name: "Farmer Services", path: "/services" },
  { name: "Become a Seller", path: "/sell-with-us" },
  { name: "Bulk Orders", path: "/bulk-orders" },
];

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

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

    updateCartCount();

    window.addEventListener("cartUpdated", updateCartCount);
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  const desktopLinkClass = ({ isActive }) =>
    `text-sm font-semibold tracking-wide transition ${
      isActive ? "text-wheat-300" : "text-cream-100 hover:text-wheat-300"
    }`;

  const drawerLinkClass = ({ isActive }) =>
    `transition ${
      isActive ? "text-wheat-300 font-semibold" : "hover:text-wheat-300"
    }`;

  return (
    <>
      {/* Navbar — Ink to Olive ombre */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-ink-900 via-ink-800 to-olive-700 shadow-md border-b border-wheat-400/30">
        <div className="w-full px-4 md:px-8 py-2.5 flex items-center gap-6 justify-between">
          {/* Logo — cream badge so it stays legible against any part of the ombre */}
          <Link to="/" className="shrink-0 bg-cream-100 rounded-xl px-2.5 py-1 flex items-center">
            <img
              src="/images/logo.png"
              alt="AgriShoppers Logo"
              className="h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {mainLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={desktopLinkClass}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4 sm:gap-5 shrink-0 ml-auto md:ml-0">
            {/* Search — self-contained icon + dropdown, untouched */}
            <SearchBar />

            {/* Wishlist — desktop only */}
            <Link to="/wishlist" className="hidden md:flex relative text-cream-100 hover:text-wheat-300 transition">
              <HeartIcon className="w-6 h-6" />
            </Link>

            {/* Login — desktop only, mobile users find it in the drawer */}
            <Link to="/login" className="hidden md:flex text-cream-100 hover:text-wheat-300 transition">
              <UserCircleIcon className="w-7 h-7" />
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative text-cream-100 hover:text-wheat-300 transition">
              <ShoppingCartIcon className="w-7 h-7" />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-wheat-400 text-ink-900 text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Menu Button — mobile only */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-cream-100 hover:text-wheat-300 transition"
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

      {/* Drawer — mobile only */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-ink-900 z-50 shadow-2xl transform transition-transform duration-300 overflow-y-auto md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-ink-700 sticky top-0 bg-ink-900">
          <h2 className="text-wheat-300 text-lg font-semibold">
            Menu
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="text-cream-100 hover:text-wheat-300 text-2xl transition"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col p-5 text-cream-100 text-sm">

          {/* Cart */}
          <Link
            to="/cart"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between border-b border-ink-700 pb-3 mb-4 hover:text-wheat-300 transition"
          >
            <span>🛒 Cart</span>

            {cartCount > 0 && (
              <span className="bg-wheat-400 text-ink-900 px-2 py-1 rounded text-xs font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Main Menu */}
          <div className="mb-2">
            <p className="text-wheat-400 text-xs font-bold uppercase tracking-wider mb-3">
              Main Menu
            </p>

            <div className="flex flex-col gap-3">
              {mainLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={drawerLinkClass}
                >
                  {link.name}
                </NavLink>
              ))}

              <Link to="/wishlist" onClick={() => setOpen(false)} className="hover:text-wheat-300 transition">
                Wishlist
              </Link>

              <Link to="/login" onClick={() => setOpen(false)} className="hover:text-wheat-300 transition">
                Login
              </Link>
            </div>
          </div>

          {/* Shop by Category — collapsible accordion */}
          <div className="border-t border-ink-700 pt-4 mt-2">
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="w-full flex items-center justify-between text-wheat-400 text-xs font-bold uppercase tracking-wider"
            >
              Shop by Category
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform duration-300 ${
                  categoryOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                categoryOpen ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col gap-3 pl-1 border-l-2 border-olive-700">
                {categoryLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `pl-3 transition ${
                        isActive ? "text-wheat-300 font-semibold" : "text-ink-200 hover:text-wheat-300"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;