import {
  Car,
  CreditCard,
  Flame,
  Fuel,
  Sun,
  GlobeLock,
  Plane,
  Leaf,
} from "lucide-react";

const products = [
  { id: 1, icon: <Fuel size={42} />, title: "Lubricants" },
  { id: 2, icon: <Leaf size={42} />, title: "Excellium Energy" },
  { id: 3, icon: <Flame size={42} />, title: "TotalEnergies Gas" },
  { id: 4, icon: <Sun size={42} />, title: "Sunshine Solar" },
  { id: 5, icon: <Car size={42} />, title: "Car Care Products" },
  { id: 6, icon: <CreditCard size={42} />, title: "TotalEnergies Card" },
  { id: 7, icon: <GlobeLock size={42} />, title: "Professional" },
  { id: 8, icon: <Plane size={42} />, title: "Aviation" },
];

export default function ProductsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          Our Products And Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 p-6 rounded-2xl flex gap-3 items-center justify-center text-center hover:shadow-md transition"
            >
              <div className="text-red-600 mb-4">{product.icon}</div>
              <h3 className="text-red-600 font-semibold">{product.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
