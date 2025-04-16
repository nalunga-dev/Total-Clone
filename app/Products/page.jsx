import Afcon from "@/components/Afro";
import Footer from "@/components/Footer";
import Navbar from "@/components/Nav";
import ProductsHeader from "@/components/Products-Header";
import SidebarMenu from "@/components/Produts-hero";
import ServiceCards from "@/components/Service-cards";
import Slide from "@/components/Slide";
import Total from "@/components/Total-file";
import React from "react";

export default function Products() {
  return (
    <div>
      <Navbar />
      <SidebarMenu />
      <ProductsHeader />
      <Total />
      <Slide />
      <ServiceCards />
      <Afcon />
      <Slide />
      <Footer />
    </div>
  );
}
