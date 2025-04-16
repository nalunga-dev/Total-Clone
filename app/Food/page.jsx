import FoodHeader from "@/components/Food-header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Nav";
import ShopCards from "@/components/Shop-cards";
import OneStopShopping from "@/components/Shoping";
import Slide from "@/components/Slide";
import React from "react";

export default function Food() {
  return (
    <div>
      <Navbar />
      <FoodHeader />
      <OneStopShopping />
      <ShopCards />
      <Slide />
      <Footer />
    </div>
  );
}
