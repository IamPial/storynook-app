import BookingCardPage from "@/components/BookingCard";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi2";

const MyListingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user?.id;
  console.log(userId);

  const res = await fetch(`http://localhost:5000/room?userId=${userId}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div className="container mx-auto px-2 md:px-0 py-10">
      <h2 className="text-4xl text-dark font-bold mt-2 mb-5">My Listings</h2>

      {data.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-6 border border-dashed border-purple-400 rounded-2xl bg-[#faf7ff] text-center gap-4">
          <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center">
            <HiOutlineHome size={28} className="text-purple-600" />
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-800">
              No listings yet
            </p>
            <p className="text-sm text-gray-500 mt-1">
              You haven&apos;t added any rooms. Create your first listing and
              start earning.
            </p>
          </div>
          <Link href="/add-room">
            <Button className="bg-[#9d4edd] text-white rounded-xl hover:bg-[#8d46c7] flex items-center gap-2">
              <FaPlus size={14} /> Create your first listing
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch lg:grid-cols-3 gap-5">
          {data.map((newData) => {
            return <BookingCardPage newData={newData} key={newData._id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MyListingsPage;
