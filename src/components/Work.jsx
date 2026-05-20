import React from "react";
import { Chip } from "@heroui/react";
import { FcReading } from "react-icons/fc";
import { FaCalendarAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";

const WorkPage = () => {
  return (
    <div className="py-24 bg-[#f6ecff]">
      <div className="container mx-auto px-2 md:px-0 ">
        <div className="text-center mb-16">
          <Chip className="rounded-full border border-purple-400 text-purple-600 text-sm font-medium mb-4 bg-transparent">
            How It Works
          </Chip>

          <h2 className="text-5xl font-bold text-[#102542] mb-4">
            Book Your Perfect{" "}
            <span className="text-purple-500">Study Space</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            StoryNook makes it simple to discover, reserve, and enjoy peaceful
            reading rooms anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-purple-100">
            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl mb-6">
              <FcReading className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-[#102542] mb-4">
              Explore Rooms
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Browse quiet and comfortable study rooms based on your
              preferences, location, and availability.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-purple-100">
            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl mb-6">
              <FaCalendarAlt className="text-purple-500" />
            </div>

            <h3 className="text-2xl font-bold text-[#102542] mb-4">
              Reserve Instantly
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Select your preferred date and time to instantly reserve your
              reading space online.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-purple-100">
            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl mb-6">
              <FaBook className="text-purple-500" />
            </div>

            <h3 className="text-2xl font-bold text-[#102542] mb-4">
              Enjoy Reading
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Relax in a peaceful environment designed for focused reading,
              studying, and productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
