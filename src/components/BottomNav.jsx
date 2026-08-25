import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ShoppingBagIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { to: "/", label: "Home", icon: HomeIcon },
  { to: "/orders", label: "Orders", icon: ShoppingBagIcon },
  { to: "/assist", label: "Agri Assist", icon: ChatBubbleLeftRightIcon },
  { to: "/blog", label: "Articles", icon: DocumentTextIcon },
  { to: "/login", label: "Login", icon: UserCircleIcon },
];

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-3 pb-3">
      <div className="flex justify-around items-center bg-white rounded-2xl shadow-lg border border-olive-100 py-2 px-1">

        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className="flex flex-col items-center gap-0.5 flex-1 py-1"
          >
            {({ isActive }) => (
              <>
                <span
                  className={`flex items-center justify-center w-10 h-8 rounded-full transition-all duration-300 ${
                    isActive ? "bg-olive-100" : "bg-transparent"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isActive ? "text-olive-700" : "text-ink-400"
                    }`}
                  />
                </span>

                <span
                  className={`text-[11px] transition-colors duration-300 ${
                    isActive ? "text-olive-700 font-semibold" : "text-ink-400"
                  }`}
                >
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}

      </div>
    </div>
  );
};

export default BottomNav;