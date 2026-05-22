import React from "react";
import RoomCardPage from "./Card";
import Link from "next/link";
import { Button } from "@heroui/react";

const HomePageCard = async () => {
  const res = await fetch("http://localhost:5000/room?limit=6");
  const roomData = await res.json();

  return (
    <div className="container mx-auto py-10 px-2 md:px-0">
      <div className="flex justify-between items-center">
        <div className="my-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-dark  font-bold">
            Available Study Rooms
          </h2>
        </div>
        <Link href="/rooms">
          <Button className=" bg-white text-purple-500 border border-purple-500 transition-all duration-300 hover:bg-[#9d4edd] hover:text-white">
            View all rooms
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch  lg:grid-cols-3 gap-5">
        {roomData.map((room) => {
          return <RoomCardPage room={room} key={room._id} />;
        })}
      </div>
    </div>
  );
};

export default HomePageCard;
