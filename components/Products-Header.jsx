import Image from "next/image";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export default function ProductsHeader() {
  return (
    <div className="p-4 w-full">
      <div className="flex items-center text-gray-600 text-sm mb-4 space-x-2">
        <Link href="/">
          <Home className="text-red-600" size={19} />
        </Link>

        <ChevronRight className="text-gray-400" size={19} />

        <span className="font-bold text-2xl text-gray-900">
          Products & Services
        </span>
      </div>

      <div className="rounded-xl overflow-hidden shadow-md">
        <img
          src="/images/gas2.avif"
          alt="totalEnergies"
          className="w-full  object-cover rounded-xl"
        />
      </div>
    </div>
  );
}
