"use client";

import { Button } from "@heroui/react";
import { BsSearch } from "react-icons/bs";
import RoomCardPage from "@/components/Card";
import { useEffect, useState } from "react";

const AllRoomsPage = () => {
  const [roomData, setRoomData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  useEffect(() => {
    const fetchRoomData = async () => {
      const queryParams = new URLSearchParams();

      //for checking the search
      if (search) queryParams.append("search", search);

      //for checking the amenities
      if (selectedAmenities.length > 0) {
        queryParams.append("amenities", selectedAmenities.join(","));
      }
      const res = await fetch(
        `http://localhost:5000/roomroom?${queryParams.toString()}`,
      );
      const data = await res.json();
      setRoomData(data);
    };
    fetchRoomData();
  }, [search, selectedAmenities]);

  const checkBoxSelect = [
    "Whiteboard",
    "Projector",
    "Wi-Fi",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
  ];

  //handle amenity change with the checkbox
  const handleAmenityChange = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(
        selectedAmenities.filter((item) => item !== amenity),
      );
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const handleReset = () => {
    setSearch("");
    setSelectedAmenities([]);
  };

  return (
    <div className="container mx-auto py-10 px-2 md:px-0">
      <div className="mb-10">
        <h2 className="text-dark text-5xl font-semibold">All Study Rooms</h2>
        <p className="text-lg mt-4">
          Find your perfect quiet corner. Explore and book premium spaces
          designed for focus.
        </p>
      </div>
      <div className="flex flex-col  lg:flex-row gap-5">
        <div className="w-full lg:w-64 shrink-0 bg-[#faf7ff] border border-purple-100 rounded-2xl p-5  flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-500 text-sm">Search by name</label>
            <div className="flex items-center gap-2 bg-white  rounded-xl px-3 py-2  border border-purple-200">
              <BsSearch size={13} className="text-gray-400" />
              <input
                type="text"
                placeholder="Quite Place"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent  text-sm text-gray-600 placeholder:text-gray-300 outline-none w-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-500 text-sm">Amenities</label>
            {checkBoxSelect.map((item) => (
              <label
                key={item}
                className="flex items-center gap-2.5 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="accent-purple-600 w-4 h-4"
                  checked={selectedAmenities.includes(item)}
                  onChange={() => handleAmenityChange(item)}
                />
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
          <Button
            onClick={handleReset}
            className="bg-[#9d4edd] text-white text-sm rounded-xl "
          >
            Reset
          </Button>
        </div>

        <div className="flex-1 w-full">
          {roomData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch  lg:grid-cols-3 gap-5">
              {roomData.map((room) => (
                <RoomCardPage room={room} key={room._id} />
              ))}
            </div>
          ) : (
            <div className="border border-gray-200 rounded-2xl w-full text-purple-400 text-4xl sm:text-5xl md:text-6xl font-bold h-[300px] md:h-[400px] flex items-center justify-center text-center py-10 px-6">
              No rooms found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllRoomsPage;
