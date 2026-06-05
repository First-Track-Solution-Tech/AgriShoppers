import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import ChatBox from "./ChatBox";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo */}
          <div>
            <Link
              to="/"
              className="text-2xl font-extrabold text-green-700 mb-3 block"
            >
              <img
                src="/images/logo.png"
                alt="AgriShoppers"
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-gray-400 mt-3">
              Premium agricultural products with trusted brands,
              genuine quality, and fast delivery across India.
            </p>

            <div className="flex gap-4 mt-5 text-xl">
              <a href="#" className="hover:text-pink-500">
                <FaInstagram />
              </a>

              <a href="#" className="hover:text-blue-500">
                <FaFacebookF />
              </a>

              <a href="#" className="hover:text-red-500">
                <FaYoutube />
              </a>

              <a href="#" className="hover:text-sky-400">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/farmer-resources">Farmer Resources</Link></li>
              <li><Link to="/quality-assurance">Quality Assurance</Link></li>
              <li><Link to="/policies-guidelines">Policies & Guidelines</Link></li>
              <li><Link to="/career">Join Our Team</Link></li>
              <li><Link to="/contact">Help Center</Link></li>
              <li><Link to="/track">Track Order</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Useful Links
            </h3>

            <ul className="space-y-2 text-sm">
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/delivery-logistics">Delivery & Logistics</Link></li>
              <li><Link to="/navigation">Quick Navigation</Link></li>
              <li><Link to="/refund-cancel">Refund & Cancellation</Link></li>
              <li><Link to="/site-map">Site Map</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact Us
            </h3>

            <p className="text-sm text-gray-400">
              📧 info@agrishoppers.com
            </p>

            <p className="text-sm text-gray-400 mt-2">
              📞 +91 1234567890
            </p>

            <p className="text-sm text-gray-400 mt-2">
              📍 Bhubaneswar, Odisha, India
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 text-center py-4 text-sm text-slate-400">
          © 2025 AgriShoppers | Developed by First Track Solution Technologies.
          All Rights Reserved.
        </div>

        {/* Chatbox */}
        {/* Chatbox */}
        <div className="mt-0 mb-11 flex justify-center md:justify-end">
          <ChatBox />
        </div>

      </footer>
    </>
   
  );
};

export default Footer;