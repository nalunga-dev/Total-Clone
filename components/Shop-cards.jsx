import React from "react";

export default function ShopCards() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[65%] bg-gray-50 rounded-lg overflow-hidden shadow-sm">
          <div className="h-64 md:h-72 overflow-hidden">
            <img
              src="/images/meals.avif"
              alt="Food display with pastries and snacks"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              MEAL DEAL
            </h2>
            <p className="text-gray-600 mb-2">
              Refresh and Recharge by taking a break a TotalEnergies service
              station near you.
            </p>
            <p className="text-gray-600 mb-6">
              Lookout for <span className="font-semibold">bonjour</span> or{" "}
              <span className="font-semibold">Cafe bonjour</span> to enjoy your
              tasty meal.
            </p>
            <a
              href="#offer"
              className="inline-block text-red-600 font-medium hover:text-red-700 transition-colors"
            >
              Our offer
            </a>
          </div>
        </div>

        <div className="w-full md:w-[35%] bg-gray-50 rounded-lg overflow-hidden shadow-sm">
          <div className="h-64 md:h-72 overflow-hidden">
            <img
              src="/images/total2.avif"
              alt="TotalEnergies service station"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Find a TotalEnergies Station
            </h2>
            <p className="text-gray-600 mb-2">Find your favorite station.</p>
            <p className="text-gray-600 mb-6">
              Learn about products, services, prices and more.
            </p>
            <a
              href="#discover"
              className="inline-block text-red-600 font-medium hover:text-red-700 transition-colors"
            >
              Discover More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
