import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Shop and food services",
    description: "All your daily products, two dribbles away from home",
    image: "/images/food2.jpg",
    linkText: "Learn more",
  },
  {
    title: "CAR WASH",
    description: "All your daily products, two dribbles away from home",
    image: "/images/wash.avif",
    linkText: "DISCOVER MORE",
  },
  {
    title: "CAR MAINTENANCE",
    description: "For your oil change, you need a teammate that you can trust.",
    image: "/images/car.avif",
    linkText: "Discover more",
  },
  {
    title: "RESTAURANT & COFFEESHOP",
    description: "Enjoy a delicious meal or coffee while on the move.",
    image: "/images/coffee.avif",
    linkText: "Learn more",
  },
  {
    title: "DIGITAL SERVICES",
    description: "Mobile top-ups, utility payments, and more with ease.",
    image: "/images/comp.jpg",
    linkText: "Discover more",
  },
  {
    title: "FUELS",
    description: "High-performance fuels to keep your engine running smoothly.",
    image: "/images/refuel-car-gas3.jpg",
    linkText: "Discover more",
  },
];

export default function ServiceCards() {
  return (
    <div className="px-4 py-8 max-w-7xl mt-7 mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        OUR SERVICES, PROOF OF OUR COMMITMENT
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
          >
            <div className="relative h-56 w-full">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4 flex flex-col gap-2 flex-1">
              <h3 className="font-semibold text-gray-800">{service.title}</h3>
              <p className="text-sm text-gray-600 flex-1">
                {service.description}
              </p>
              <Link
                href="#"
                className="text-red-600 font-medium text-sm mt-2 hover:underline"
              >
                {service.linkText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
