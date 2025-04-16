"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full border-b shadow-sm bg-white">
      <div className="max-w-7xl mx-auto  flex items-center justify-between">
        <div className="flex items-center w-25 gap-4 ">
          <img
            src="https://totalenergies.ug/themes/custom/butterfly_theme/logo.svg"
            alt="TotalEnergies Logo"
            className=" w-full h-full object-cover"
          />
          <div className="text-sm font-semibold text-red-600 leading-tight">
            <p>TotalEnergies</p>
            <p>Uganda</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-900 font-bold">
          <Link
            href="/Products"
            className="hover:border-b-red-500 hover:border-b-2 hover:pb-4"
          >
            Products & Services
          </Link>
          <a
            className="hover:border-b-red-500 hover:border-b-2 hover:pb-4"
            href="#"
          >
            TotalEnergies in Uganda MS & EP
          </a>
          <a
            className="hover:border-b-red-500 hover:border-b-2 hover:pb-4"
            href="#"
          >
            Projects
          </a>
          <a
            className="hover:border-b-red-500 hover:border-b-2 hover:pb-4"
            href="#"
          >
            Sustainability
          </a>
          <a
            className="hover:border-b-red-500 hover:border-b-2 hover:pb-4"
            href="#"
          >
            Renewables
          </a>
          <a
            className="hover:border-b-red-500 hover:border-b-2 hover:pb-4"
            href="#"
          >
            Aviation
          </a>
          <a
            className="hover:border-b-red-500 hover:border-b-2 hover:pb-4"
            href="#"
          >
            Careers
          </a>

          <button>
            <svg
              className="w-5 h-5 ml-2 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </nav>

        <div className="md:hidden text-yellow-900">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={34} /> : <Menu size={34} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 text-2xl space-y-2 text-yellow-800">
          <Link href="Products" className="block">
            Products & Services
          </Link>
          <Link href="#" className="block">
            TotalEnergies in Uganda MS & EP
          </Link>
          <Link href="#" className="block">
            Projects
          </Link>
          <Link href="#" className="block">
            Sustainability
          </Link>
          <Link href="#" className="block">
            Renewables
          </Link>
          <Link href="#" className="block">
            Aviation
          </Link>
          <Link href="#" className="block">
            Careers
          </Link>
        </div>
      )}
    </header>
  );
}
