import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MediaNews from "@/components/Media";
import Navbar from "@/components/Nav";
import KeyFigures from "@/components/Numbres";
import ProductsSection from "@/components/Products";
import Slide from "@/components/Slide";
import Testimonial from "@/components/Testimonial";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Slide />
      <ProductsSection />
      <Testimonial />
      <KeyFigures />
      <Slide />
      <MediaNews />
      <Slide />
      <Footer />
    </div>
  );
}
