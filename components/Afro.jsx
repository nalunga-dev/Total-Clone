"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Afcon() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto bg-white mb-10 rounded-lg shadow-lg overflow-hidden">
      <div
        className={`flex ${isMobile ? "flex-col" : "flex-row"} items-center`}
      >
        <div className={`${isMobile ? "w-full" : "w-1/2"} relative`}>
          <div className="relative h-78 w-full">
            <Image
              src="/images/man.avif"
              alt="Football Fever - Feel It!"
              layout="fill"
              objectFit="cover"
              className="object-center rounded-2xl"
              priority
            />
            <div className="absolute top-50 left-29 flex items-center justify-center">
              <div className="bg-orange-500 bg-opacity-100 px-4 py-2 rounded-md">
                <h2 className="text-white text-2xl md:text-3xl font-bold text-center">
                  FOOTBALL FEVER
                  <br />
                  FEEL IT!
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className={`${isMobile ? "w-full" : "w-1/2"} p-6 md:p-8 lg:p-10`}>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            AFCON Sponsorship
          </h1>

          <p className="text-gray-700 mb-4">
            Football is a universal language, synonymous with conviviality,
            enthusiasm, solidarity and, of course, energy.
          </p>

          <p className="mb-6 font-bold text-orange-400">
            <span className="font-bold text-green-800">Football Together</span>{" "}
            is the desire to reveal this art of celebration and share it with
            all football lovers in Africa and beyond.
          </p>

          <div className="mt-6">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
