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
import BookNowModalPage from "@/components/BookNowModal";
import EditModalPage from "@/components/EditModal";
import DeleteModalPage from "@/components/DeleteModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { format } from "date-fns";

const RoomDetailsPage = async ({ params }) => {
  const { id } = await params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  console.log(user);

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  console.log(token);
  //from room API
  const res = await fetch(`http://localhost:5000/room/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  const {
    name,
    description,
    image,
    floor,
    capacity,
    rate,
    amenities,
    bookingCount,
  } = data;

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
          <Link href="/add-room">
            <Button className="bg-purple-400 rounded-lg">
              {" "}
              <BiPlusCircle /> Add Rooms
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="w-full h-100 rounded-3xl overflow-hidden shadow-sm border border-purple-100 relative">
              <Image src={image} alt={name} fill className="object-cover" />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                  {name}
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  Listed {format(new Date(), "MMM dd, yyyy")}
                </p>
              </div>
              <Chip
                color="secondary"
                className="font-medium bg-purple-50 text-purple-600 border border-purple-100"
              >
                <FaRegCheckCircle className="mt-0.5" />
                {bookingCount > 0 ? bookingCount : 0} Bookings
              </Chip>
            </div>

            <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
              {description}
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
                  <span className="text-3xl font-bold text-purple-700">
                    ${rate}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    per hour
                  </span>
                </div>

                <div className="flex flex-col gap-4 text-gray-600 pt-2">
                  <div className="flex items-center gap-3">
                    <HiOutlineMapPin size={18} className="text-purple-500" />
                    <span className="text-sm font-medium">{floor}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiOutlineUsers size={18} className="text-purple-500" />
                    <span className="text-sm font-medium">
                      Up to {capacity} people
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiOutlineCalendar size={18} className="text-purple-500" />
                    <span className="text-sm font-medium">
                      {bookingCount > 0 ? bookingCount : 0} total bookings
                    </span>
                  </div>
                </div>

                {user ? (
                  <>
                    <BookNowModalPage room={data} />
                    <div className="flex gap-5 justify-between">
                      <EditModalPage data={data} />
                      <DeleteModalPage />
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <Link href="/login">
                      <Button className="w-full font-semibold shadow-md shadow-purple-200 bg-purple-600 hover:bg-purple-700 text-white mt-2 rounded-xl">
                        Login to Book
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </Card>

            <div>
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
                      <Avatar.Image alt="John Doe" src={user.image} />
                      <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <h4 className="text-sm font-bold text-gray-800">
                        {user.name}
                      </h4>
                      <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-0.5">
                        <FiMail size={12} /> {user.email}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPage;
