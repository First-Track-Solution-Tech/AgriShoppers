import React, { useState, useRef, useEffect } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  // Close when clicking anywhere outside, or pressing Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Autofocus the input when it opens
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative">
      {/* Icon Toggle */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-1.5 rounded-full text-cream-100 hover:text-wheat-300 hover:bg-white/10 transition"
        aria-label={open ? "Close Search" : "Open Search"}
      >
        {open ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <MagnifyingGlassIcon className="w-6 h-6" />
        )}
      </button>

      {/* Small popover anchored to the icon — fixed small size, never shifts other navbar items */}
      <div
        className={`absolute top-full right-0 mt-2 w-64 sm:w-72 origin-top-right bg-white rounded-xl shadow-xl border border-olive-200 transition-all duration-150 ease-out ${
          open
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative p-2">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products..."
            className="w-full py-2 pl-3 pr-9 rounded-lg bg-cream-100 border border-olive-100 text-sm focus:outline-none focus:ring-2 focus:ring-wheat-400 focus:border-wheat-400 text-ink-700 placeholder:text-ink-300 transition"
          />
          <MagnifyingGlassIcon className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-olive-600" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;