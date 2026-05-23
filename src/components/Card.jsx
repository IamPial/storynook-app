import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BsBookmarkCheckFill, BsPeopleFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { HiHome } from "react-icons/hi";

const RoomCardPage = ({ room }) => {
  const {
    _id,
    amenities,
    capacity,
    description,
    floor,
    image,
    name,
    rate,
    bookingCount,
  } = room;

  //for slicing amenities
  const slicingAmenities = amenities.slice(0, 3);

  //generate rest of length
  const slicingCount = amenities.length - 3;

  return (
    <Card className="bg-[#faf7ff] rounded-2xl p-0 group hover:bg-purple-50 hover:shadow-lg hover:shadow-purple-100 flex flex-col h-full">
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="w-full h-60 object-cover transition-all duration-300 group-hover:scale-105"
        />
      </div>

      <div className="px-2 pt-4 pb-5 flex flex-col gap-3 flex-1">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800 tracking-tight line-clamp-2">
            {name}
          </h3>
          <span className="bg-purple-100 text-purple-700 text-[13px] font-medium px-3 py-1 rounded-full shrink-0 ml-2">
            ${rate}/hr
          </span>
        </div>

        <p className="line-clamp-3 text-[14px] text-gray-500 leading-relaxed h-[63px]">
          {description}
        </p>

        <div className="flex gap-4">
          <span className="flex items-center gap-1.5 text-[12px] text-gray-400">
            <HiHome size={14} /> {floor}
          </span>
          <span className="flex items-center gap-1.5 text-[12px] text-gray-400">
            <BsPeopleFill size={14} /> {capacity} people
          </span>
          <span className="flex items-center gap-1.5 text-[12px] text-gray-400">
            <BsBookmarkCheckFill size={14} />{" "}
            {bookingCount > 0 ? bookingCount : 0} bookings
          </span>
        </div>

        <div className="h-[60px]">
          <div className="flex gap-2 flex-wrap">
            {slicingAmenities.map((roomFacilities, index) => (
              <Chip
                key={index}
                size="sm"
                className="bg-purple-100 text-purple-600 border-0"
              >
                {roomFacilities}
              </Chip>
            ))}
            {slicingCount > 0 && (
              <Chip
                size="sm"
                className="bg-purple-100 text-purple-600 border-0"
              >
                <FaPlus className="w-2 h-2" /> {slicingCount} more
              </Chip>
            )}
          </div>
        </div>

        <div className="mt-auto">
          <Link href={`/rooms/${_id}`}>
            <Button className="w-full bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default RoomCardPage;
