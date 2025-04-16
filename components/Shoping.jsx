import React from "react";

export default function OneStopShopping() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-blue-500 mb-8">
        Your One-Stop Shopping Experience: Refresh & Recharge
      </h1>

      <div className="space-y-4 mb-10 text-gray-700">
        <p className="text-base">
          Our stores offer a range of everyday essentials such as drinks,
          snacks, groceries or hygiene products so you can find whatever you
          need – whenever you need it. You'll also find an extensive range of
          lubricants and car care products.{" "}
          <span className="font-bold">
            Just think of your TotalEnergies service station as your one-stop
            shop.
          </span>
        </p>

        <p className="text-base">
          And if you've run out, just run in – some stores are open 24 hours to
          make your shopping experience even more convenient.
        </p>
      </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <a
          href="#car-care"
          className="bg-red-600 text-white rounded-full py-3 px-8 flex items-center justify-center md:flex-1"
        >
          <span className="mr-2">
            <img
              src="/images/gas2.avif"
              alt="Car care icon"
              className="w-10 h-10 rounded-full"
            />
          </span>
          <span>Car care products</span>
        </a>

        <a
          href="#lubricants"
          className="bg-red-600 text-white rounded-full py-3 px-8 flex items-center justify-center md:flex-1"
        >
          <span className="mr-2">
            <img
              src="/images/safe.avif"
              alt="Lubricants icon"
              className="w-10 h-10 rounded-full"
            />
          </span>
          <span>Lubricants</span>
        </a>

        <a
          href="#awango"
          className="bg-red-600 text-white rounded-full py-3 px-8 flex items-center justify-center md:flex-1"
        >
          <span className="mr-2">
            <img
              src="/images/tatal1.avif"
              alt="Awango icon"
              className="w-10 h-10 rounded-full"
            />
          </span>
          <span>Awango by TotalEnergies</span>
        </a>
      </div>
    </div>
  );
}
