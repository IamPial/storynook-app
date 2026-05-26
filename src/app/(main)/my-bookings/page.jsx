import Image from "next/image";
import { Button, Chip } from "@heroui/react";

import { FaRegCalendarAlt, FaRegClock, FaDollarSign } from "react-icons/fa";
import { format } from "date-fns";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import DeleteButton from "@/components/DeleteButton";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  const userId = session?.user?.id;
  const res = await fetch(`http://localhost:5000/booking?userId=${userId}`, {
    cache: "no-store",
  });
  const bookingData = await res.json();

  return (
    <div className="min-h-screen bg-[#f6f2fb] px-4 py-10 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#1b1330] md:text-5xl">
              My Bookings
            </h1>

            <p className="mt-2 text-sm text-[#7a7391] md:text-base">
              Manage your upcoming and past room reservations.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {bookingData.map((booking) => (
            <div
              key={booking._id}
              className="group flex flex-col gap-5 rounded-2xl border border-violet-100 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 lg:flex-row lg:items-center lg:justify-between"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="relative h-24 w-full overflow-hidden rounded-2xl sm:h-24 sm:w-36">
                  <Image
                    src={booking.roomImg}
                    alt={booking.roomName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1b1330]">
                    {booking.roomName}
                  </h2>

                  <div className="mt-4 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm text-[#4f4764]">
                      <FaRegCalendarAlt className="text-violet-500" />
                      {format(new Date(booking.date), "MMM dd, yyyy")}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-[#4f4764]">
                      <FaRegClock className="text-violet-500" />
                      {booking.timeStart} - {booking.timeEnd}
                    </div>

                    <div className="flex items-center gap-2 text-sm font-semibold text-violet-600">
                      <FaDollarSign />
                      {booking.totalCost}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 lg:justify-end">
                <div>
                  <Chip
                    color={
                      booking.status === "confirmed" ? "success" : "danger"
                    }
                    variant="flat"
                    className="border capitalize"
                  >
                    {booking.status}
                  </Chip>
                </div>

                {booking.status === "confirmed" ? (
                  <DeleteButton bookingId={booking._id} />
                ) : (
                  <Button
                    disabled
                    className="rounded-lg bg-white text-purple-700 cursor-not-allowed"
                  >
                    ------
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // <div>
    //   <h2>hello me</h2>
    // </div>
  );
};

export default MyBookingsPage;
