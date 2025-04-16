"use client";

const media = [
  {
    category: "Sustainability",
    date: "April 01, 2025",
    title: "TotalEnergies Launches Major Solar Project in Uganda",
    description:
      "The initiative will power thousands of homes, contributing to Uganda’s clean energy goals and reducing carbon emissions.",
    image: "/images/solar.avif",
  },
  {
    category: "Community Impact",
    date: "March 25, 2025",
    title: "Supporting Local Businesses Through Procurement",
    description:
      "Over $700 million USD has been awarded to Ugandan companies, empowering local entrepreneurship and job creation.",
    image: "/images/impact.avif",
  },
  {
    category: "Innovation",
    date: "March 15, 2025",
    title: "Driving Innovation with Clean Energy Technology",
    description:
      "TotalEnergies continues to invest in cutting-edge energy solutions to power the future responsibly.",
    image: "/images/innov.avif",
  },
  {
    category: "Education",
    date: "March 05, 2025",
    title: "STEM Scholarships for Ugandan Students",
    description:
      "Hundreds of scholarships have been awarded to support the next generation of engineers and innovators.",
    image: "/images/Educ.jpg",
  },
  {
    category: "Safety & Environment",
    date: "February 28, 2025",
    title: "Zero Harm: A Culture of Safety at TotalEnergies",
    description:
      "Committed to maintaining the highest safety standards across all operations in Uganda and beyond.",
    image: "/images/safe.avif",
  },
  {
    category: "Energy Access",
    date: "February 20, 2025",
    title: "Expanding Fuel Access with 200+ Stations Nationwide",
    description:
      "TotalEnergies continues expanding its network to ensure all communities have access to reliable energy.",
    image: "/images/acessa.avif",
  },
];

export default function MediaNews() {
  return (
    <section className="py-12 px-4 md:px-16 text-center">
      <h2 className="text-2xl md:text-3xl text-blue-900  font-bold">MEDIA</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {media.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <span className="bg-blue-500 text-white px-4 py-2 text-sm rounded-full">
                {post.category}
              </span>
              <p className="text-gray-500 text-sm mt-2">{post.date}</p>
              <h3 className=" font-bold text-blue-900 mt-3">{post.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{post.description}</p>
              <a href="#" className="text-blue-500 font-semibold mt-4 block">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
