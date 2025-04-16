import Link from "next/link";
import {
  FaGasPump,
  FaUserTie,
  FaPhone,
  FaGlobe,
  FaRocket,
  FaTools,
  FaLeaf,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-50 via-white to-pink-50 py-16 px-6 text-sm">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-blue-800 font-bold text-lg mb-4 flex items-center gap-2">
              <FaUserTie /> TotalEnergies Cards
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-700">
                  Individuals
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-700">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-700">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-pink-700 font-bold text-lg mb-4 flex items-center gap-2">
              <FaGasPump /> Excellium Fuels
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-pink-700">
                  Excellium Petrol
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-green-700 font-bold text-lg mb-4 flex items-center gap-2">
              <FaLeaf /> Lubricants
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-700">
                  Engine Oils
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-700">
                  Greases
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-600 font-bold text-lg mb-4 flex items-center gap-2">
              <FaGlobe /> TotalEnergies Gas
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-yellow-600">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-yellow-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-yellow-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-indigo-700 font-bold text-lg mb-4 flex items-center gap-2">
              <FaPhone /> Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-indigo-700">
                  Share Your Feedback
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-indigo-700">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-red-600 font-bold text-lg mb-4 flex items-center gap-2">
              <FaRocket /> Aviation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-red-600">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-red-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-purple-700 font-bold text-lg mb-4 flex items-center gap-2">
              <FaTools /> E-Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-700">
                  Apply for Dealership
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-700">
                  Apply for Distributorship
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-700">
                  Speak Up Platform
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-teal-700 font-bold text-lg mb-4 flex items-center gap-2">
              <FaUserTie /> Professionals
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-teal-700">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-teal-700">
                  Internships
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start text-sm text-gray-600">
            <Link href="#" className="hover:text-black">
              Legal
            </Link>
            <span className="hidden md:inline">|</span>
            <Link href="#" className="hover:text-black">
              Accessibility
            </Link>
            <span className="hidden md:inline">|</span>
            <Link href="#" className="hover:text-black">
              Cookies
            </Link>
            <span className="hidden md:inline">|</span>
            <span className="text-gray-500">© TotalEnergies 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
