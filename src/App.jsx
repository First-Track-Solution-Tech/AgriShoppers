import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import DesktopAgriInfo from "./components/DesktopAgriInfo";
import BottomNav from "./components/BottomNav";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AllBrands from "./Pages/AllBrands";
import Categories from "./Pages/Categories";
import AllPopularPicks from "./Pages/AllPopularPicks";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import FAQ from "./Pages/FAQ";
import Terms from "./Pages/Terms";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import RefundCancellation from "./Pages/RefundCancellation";
import Career from "./Pages/Career";
import DeliveryAndLogistics from "./Pages/DeliveryAndLogistics";
import QuickNavigation from "./Pages/QuickNavigation";
import Tracking from "./Pages/Tracking";
import FarmerResources from "./Pages/FarmerResources";
import PoliciesAndGuidelines from "./Pages/PoliciesAndGuidelines";
import QualityAssurance from "./Pages/QualityAssurance";
import Sitemap from "./Pages/Sitemap";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import Seeds from "./Pages/Seeds";
import CropProtection from "./Pages/CropProtection";
import CropNutrition from "./Pages/CropNutrition";
import Equipment from "./Pages/Equipment";
import AnimalHusbandry from "./Pages/AnimalHusbandry";
import Organic from "./Pages/Organic";
import Services from "./Pages/Services";
import SellWithUs from "./Pages/SellWithUs";
import BulkOrders from "./Pages/BulkOrders";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Pages */}
      <main className="flex-grow pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/brands" element={<AllBrands />} />
          <Route path="/seeds" element={<Seeds />} />
          <Route path="/crop-protection" element={<CropProtection />} />
          <Route path="/crop-nutrition" element={<CropNutrition />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/animal-husbandry" element={<AnimalHusbandry />} />
          <Route path="/organic" element={<Organic />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sell-with-us" element={<SellWithUs />} />
          <Route path="/bulk-orders" element={<BulkOrders />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/popular-picks" element={<AllPopularPicks />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-cancel" element={<RefundCancellation />} />
          <Route path="/career" element={<Career />} />
          <Route path="/delivery-logistics" element={<DeliveryAndLogistics />} />
          <Route path="/navigation" element={<QuickNavigation />} />
          <Route path="/track" element={<Tracking />} />
          <Route path="/farmer-resources" element={<FarmerResources />} />
          <Route path="/policies-guidelines" element={<PoliciesAndGuidelines />} />
          <Route path="/quality-assurance" element={<QualityAssurance />} />
          <Route path="/site-map" element={<Sitemap />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </main>
 
          
        
      {/* Footer - All Pages */}
      <Footer />

      {/* Desktop Section */}
      <DesktopAgriInfo />

      {/* Mobile Bottom Nav */}
      <BottomNav />

    </div>
  );
}

export default App;
