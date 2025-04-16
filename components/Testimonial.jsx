import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="w-full max-w-7xl mx-auto my-12 px-4">
      <div className="rounded-2xl overflow-hidden flex flex-col md:flex-row bg-blue-600 text-white">
        <div className="p-8 md:p-12 lg:p-16 md:w-2/3">
          <div className="text-6xl font-serif text-blue-300 leading-none mb-4">
            "
          </div>
          <blockquote className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
            As TotalEnergies, we are proud to be part of Uganda's energy journey
            by supporting the development of not only oil and gas resources but
            also renewables in line with our multi-energy ambition. Our
            commitment is anchored on our desire to achieve together with
            society net zero emissions by 2050 and to foster sustainable
            development in the countries where we operate.
          </blockquote>

          <div className="mt-8">
            <p className="font-medium">
              Philippe Groueix - Country Chair TotalEnergies Uganda & GM
              TotalEnergies EP Uganda
            </p>
          </div>
        </div>

        <div className="md:w-1/3 h-auto">
          <div className="h-full relative">
            <Image
              src="/images/tatal1.avif"
              alt="Philippe Groueix, Country Chair TotalEnergies Uganda"
              width={700}
              height={600}
              className="object-cover h-full w-full"
              style={{
                objectPosition: "center right",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
