"use client"; // Next.js App Router-এর জন্য এটা সবার উপরে দিতে হবে

import { Button, Card, Avatar, Chip } from "@heroui/react";

import {
  HiOutlineMapPin,
  HiOutlineUsers,
  HiOutlineCalendar,
} from "react-icons/hi2";
import { FiMail } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import { BiPlusCircle } from "react-icons/bi";
import { FaRegCheckCircle } from "react-icons/fa";

const RoomDetailsPage = () => {
  const amenities = [
    "Wi-Fi",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
  ];

  return (
    <div className="min-h-screen bg-[#F6F3FA] text-gray-800 pb-12 font-sans">
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <div className="flex justify-between items-center">
          <Link href="/rooms">
            <Button
              variant="light"
              className="mb-6 font-medium text-gray-600 hover:text-purple-600"
            >
              <BsArrowLeft /> Back
            </Button>
          </Link>
          <Link href="/add-rooms">
            <Button className="bg-purple-400 rounded-lg">
              {" "}
              <BiPlusCircle /> Add Rooms
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="w-full h-100 rounded-3xl overflow-hidden shadow-sm border border-purple-100 relative">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Atrium Reading Nook"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                  Atrium Reading Nook
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  Listed May 20, 2026
                </p>
              </div>
              <Chip
                color="secondary"
                className="font-medium bg-purple-50 text-purple-600 border border-purple-100"
              >
                <FaRegCheckCircle className="mt-0.5" />
                21 Bookings
              </Chip>
            </div>

            <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
              Window-side reading nook overlooking the library atrium. Calm,
              plant-filled, and well-lit. Escape the bustle in this private,
              window-side nook. A beautifully curated space with ample natural
              light, surrounded by a variety of air-purifying plants.
            </p>

            <div className="flex flex-col gap-3 pt-4 border-t border-purple-100">
              <h3 className="text-lg font-semibold text-gray-800">Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {amenities.map((item) => (
                  <Chip
                    key={item}
                    className="border-gray-200 text-gray-600 px-2 py-1 bg-white"
                  >
                    {item}
                  </Chip>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Card
              shadow="sm"
              className="border border-purple-100 bg-white rounded-3xl "
            >
              <div className="flex flex-col gap-6 p-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-bold text-purple-700">$5</span>
                  <span className="text-sm text-gray-500 font-medium">
                    per hour
                  </span>
                </div>

                <div className="flex flex-col gap-4 text-gray-600 pt-2">
                  <div className="flex items-center gap-3">
                    <HiOutlineMapPin size={18} className="text-purple-500" />
                    <span className="text-sm font-medium">1st Floor</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiOutlineUsers size={18} className="text-purple-500" />
                    <span className="text-sm font-medium">Up to 3 people</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiOutlineCalendar size={18} className="text-purple-500" />
                    <span className="text-sm font-medium">
                      21 total bookings
                    </span>
                  </div>
                </div>

                <Link href="/login" className="w-full">
                  <Button
                    color="secondary"
                    className="w-full font-semibold shadow-md shadow-purple-200 bg-purple-600 hover:bg-purple-700 text-white mt-2 rounded-xl"
                  >
                    Login to Book
                  </Button>
                </Link>
              </div>
            </Card>

            <Card
              shadow="sm"
              className="border border-purple-500/10 bg-white rounded-2xl "
            >
              <div className="p-5">
                <span className="text-xs font-bold tracking-wider text-gray-400 uppercase block mb-3">
                  LISTED BY
                </span>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <Avatar.Image
                      alt="John Doe"
                      src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
                    />
                    <Avatar.Fallback>JD</Avatar.Fallback>
                  </Avatar>

                  <div className="flex flex-col">
                    <h4 className="text-sm font-bold text-gray-800">
                      Maya Chen
                    </h4>
                    <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-0.5">
                      <FiMail size={12} /> maya@studynook.demo
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPage;
