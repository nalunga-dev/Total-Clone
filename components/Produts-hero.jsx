"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronRight } from "lucide-react";

const menuItems = [
  { label: "Shop & Food Services", path: "/Food" },
  { label: "Excellium Fuels", path: "/products/excellium-fuels" },
  { label: "TotalEnergies Card", path: "/services/totalenergies-card" },
  { label: "TotalEnergies Gas", path: "/products/totalenergies-gas" },
  { label: "Lubricants", path: "/products/lubricants" },
  { label: "Solar Products", path: "/products/solar" },
  { label: "Promotions and Campaigns", path: "/promotions" },
];

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className="fixed top-10 left-0 w-72 h-full bg-white shadow-lg z-50 p-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-red-600">
              Products & Services
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-red-600 hover:text-red-800"
            >
              <X />
            </button>
          </div>
          <ul className="space-y-4">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.path}
                  className="flex justify-between items-center text-gray-700 hover:text-red-600 transition-colors duration-200"
                >
                  {item.label}
                  <ChevronRight size={18} className="text-red-600" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {!isOpen && (
        <button
          className="absolute top-32 left-3 z-50 bg-white border border-gray-300 rounded-lg p-2 shadow-md hover:bg-gray-100"
          onClick={() => setIsOpen(true)}
        >
          <span className="text-sm font-semibold text-red-600">Menu</span>
        </button>
      )}
    </>
  );
}
