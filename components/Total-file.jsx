"use client";
import { useState, useEffect } from "react";

export default function Total() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-col items-start space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-500">
          TotalEnergies Extra Mile
        </h1>

        <a
          href="https://www.youtube.com/watch?v=vMbz2rvHaw4"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border border-red-500 rounded-full text-red-500 hover:bg-red-50 transition-colors duration-200"
        >
          <span className="text-sm md:text-base">
            https://www.youtube.com/watch?v=vMbz2rvHaw4
          </span>
        </a>
      </div>

      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-4 right-4 bg-black text-white px-3 py-1 rounded-md text-sm opacity-50">
          Width: {windowWidth}px
        </div>
      )}
    </div>
  );
}
