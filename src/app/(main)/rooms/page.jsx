import { Card, Button, Chip } from "@heroui/react";
import { BsPeopleFill, BsBookmarkCheckFill, BsSearch } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import Image from "next/image";

const AllRoomsPage = () => {
  return (
    <div className="container mx-auto py-10 px-2 md:px-0">
      <div className="mb-10">
        <h2 className="text-dark text-5xl font-semibold">All Study Rooms</h2>
        <p className="text-lg mt-4">
          Find your perfect quiet corner. Explore and book premium spaces
          designed for focus.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="bg-[#faf7ff] border border-purple-100 rounded-2xl p-5  flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-500 text-sm">Search by name</label>
            <div className="flex items-center gap-2 bg-white  rounded-xl px-3 py-2  border border-purple-200">
              <BsSearch size={13} className="text-gray-400" />
              <input
                type="text"
                placeholder="e.g. Quiet Pod"
                className="bg-transparent  text-sm text-gray-600 placeholder:text-gray-300 outline-none w-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-500 text-sm">Amenities</label>
            {[
              "Whiteboard",
              "Projector",
              "Wi-Fi",
              "Power Outlets",
              "Quiet Zone",
              "Air Conditioning",
            ].map((item) => (
              <label
                key={item}
                className="flex items-center gap-2.5 cursor-pointer"
              >
                <input type="checkbox" className="accent-purple-600 w-4 h-4" />
                <span className="text-gray-700 text-sm">{item}</span>
              </label>
            ))}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-gray-500 text-sm">Hourly rate ($)</label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full bg-white border border-purple-200 rounded-xl px-3 py-2 text-sm text-gray-700 outline-none focus:border-purple-300"
              />
              <input
                type="number"
                placeholder="Max"
                className="w-full bg-white border border-purple-200 rounded-xl px-3 py-2 text-sm text-gray-400 outline-none focus:border-purple-300"
              />
            </div>
          </div>
          <Button className="bg-[#9d4edd] text-white text-sm rounded-xl ">
            Reset
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
          <Card className=" bg-[#faf7ff]  rounded-2xl p-0">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=700&q=80"
                alt="Atrium Reading Nook"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="px-2 pt-4 pb-5 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-800 tracking-tight">
                  Atrium Reading Nook
                </h3>
                <span className="bg-purple-100 text-purple-700 text-[13px] font-medium px-3 py-1 rounded-full">
                  $5/hr
                </span>
              </div>

              <p className="text-[14px] text-gray-500 leading-relaxed">
                Window-side reading nook overlooking the library atrium. Calm,
                plant-filled, and well-lit.
              </p>

              <div className="flex gap-4">
                <span className="flex items-center gap-1.5 text-[12px] text-gray-400">
                  <HiHome size={14} /> 1st Floor
                </span>
                <span className="flex items-center gap-1.5 text-[12px] text-gray-400">
                  <BsPeopleFill size={14} /> 3 people
                </span>
                <span className="flex items-center gap-1.5 text-[12px] text-gray-400">
                  <BsBookmarkCheckFill size={14} /> 21 bookings
                </span>
              </div>

              {/* Amenity Chips */}
              <div className="flex gap-2 flex-wrap">
                <Chip
                  size="sm"
                  className="bg-purple-100 text-purple-600 border-0"
                >
                  Wi-Fi
                </Chip>
                <Chip
                  size="sm"
                  className="bg-purple-100 text-purple-600 border-0"
                >
                  Quiet Zone
                </Chip>
                <Chip
                  size="sm"
                  className="bg-purple-100 text-purple-600 border-0"
                >
                  Air Conditioning
                </Chip>
              </div>

              {/* Button */}
              <Button className="w-full bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700">
                View Details
              </Button>
            </div>
          </Card>
          <Card className=" bg-[#faf7ff]  rounded-2xl p-0">
            {/* Image */}
            <div>
              <Image
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=700&q=80"
                alt="Atrium Reading Nook"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="px-2 pt-4 pb-5 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-800 tracking-tight">
                  Atrium Reading Nook
                </h3>
                <span className="bg-purple-100 text-purple-700 text-[13px] font-medium px-3 py-1 rounded-full">
                  $5/hr
                </span>
              </div>

              <p className="text-[14px] text-gray-500 leading-relaxed">
                Window-side reading nook overlooking the library atrium. Calm,
                plant-filled, and well-lit.
              </p>

              <div className="flex gap-4">
                <span className="flex items-center gap-1.5 text-[12px] text-gray-400">
                  <HiHome size={14} /> 1st Floor
                </span>
                <span className="flex items-center gap-1.5 text-[12px] text-gray-400">
                  <BsPeopleFill size={14} /> 3 people
                </span>
                <span className="flex items-center gap-1.5 text-[12px] text-gray-400">
                  <BsBookmarkCheckFill size={14} /> 21 bookings
                </span>
              </div>

              {/* Amenity Chips */}
              <div className="flex gap-2 flex-wrap">
                <Chip
                  size="sm"
                  className="bg-purple-100 text-purple-600 border-0"
                >
                  Wi-Fi
                </Chip>
                <Chip
                  size="sm"
                  className="bg-purple-100 text-purple-600 border-0"
                >
                  Quiet Zone
                </Chip>
                <Chip
                  size="sm"
                  className="bg-purple-100 text-purple-600 border-0"
                >
                  Air Conditioning
                </Chip>
              </div>

              <Button className="w-full bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700">
                View Details
              </Button>
            </div>
          </Card>
          <Card className=" bg-[#faf7ff]  rounded-2xl p-0">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=700&q=80"
                alt="Atrium Reading Nook"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="px-2 pt-4 pb-5 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-800 tracking-tight">
                  Atrium Reading Nook
                </h3>
                <span className="bg-purple-100 text-purple-700 text-[13px] font-medium px-3 py-1 rounded-full">
                  $5/hr
                </span>
              </div>

              <p className="text-[14px] text-gray-500 leading-relaxed">
                Window-side reading nook overlooking the library atrium. Calm,
                plant-filled, and well-lit.
              </p>

              <div className="flex gap-4">
                <span className="flex items-center gap-1.5 text-[12px] text-gray-400">
                  <HiHome size={14} /> 1st Floor
                </span>
                <span className="flex items-center gap-1.5 text-[12px] text-gray-400">
                  <BsPeopleFill size={14} /> 3 people
                </span>
                <span className="flex items-center gap-1.5 text-[12px] text-gray-400">
                  <BsBookmarkCheckFill size={14} /> 21 bookings
                </span>
              </div>

              <div className="flex gap-2 flex-wrap">
                <Chip
                  size="sm"
                  className="bg-purple-100 text-purple-600 border-0"
                >
                  Wi-Fi
                </Chip>
                <Chip
                  size="sm"
                  className="bg-purple-100 text-purple-600 border-0"
                >
                  Quiet Zone
                </Chip>
                <Chip
                  size="sm"
                  className="bg-purple-100 text-purple-600 border-0"
                >
                  Air Conditioning
                </Chip>
              </div>

              {/* Button */}
              <Button className="w-full bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700">
                View Details
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AllRoomsPage;
