import {
  FaLeaf,
  FaHandshake,
  FaUsers,
  FaGraduationCap,
  FaShieldAlt,
} from "react-icons/fa";

export default function Slide() {
  return (
    <div className="flex w-full bg-[#3D72FC] items-center p-3 overflow-x-auto whitespace-nowrap ls:hidden scrollbar-hide gap-6">
      <div className="flex items-center gap-2 text-green-100">
        <FaLeaf className="text-3xl text-green-300" />
        <span className="text-2xl font-bold">Clean Energy</span>
      </div>
      <div className="flex items-center gap-2 text-yellow-100">
        <FaHandshake className="text-3xl text-yellow-300" />
        <span className="text-2xl font-bold">Local Procurement</span>
      </div>
      <div className="flex items-center gap-2 text-pink-100">
        <FaUsers className="text-3xl text-pink-300" />
        <span className="text-2xl font-bold">Community Development</span>
      </div>
      <div className="flex items-center gap-2 text-indigo-100">
        <FaGraduationCap className="text-3xl text-indigo-200" />
        <span className="text-2xl font-bold">STEM Education</span>
      </div>
      <div className="flex items-center gap-2 text-cyan-100">
        <FaShieldAlt className="text-3xl text-cyan-300" />
        <span className="text-2xl font-bold">Environmental Safety</span>
      </div>
    </div>
  );
}
