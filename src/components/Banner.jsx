import { Button } from "@heroui/react";
import Link from "next/link";
import BannerImg from "@/assets/bannerBook.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="container mx-auto px-2 md:px-0 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="space-y-2 w-full lg:w-1/2">
          <h2 className="text-7xl heading-font text-[#112A46]">
            Find Your Perfect{" "}
            <span className="text-purple-400">Study Room</span>
          </h2>
          <p className="text-lg">
            Browse and book quiet, private study rooms in your library. List
            your own room and earn.
          </p>
          <Link href="/rooms">
            <Button className="mt-10  bg-[#9d4edd] hover:bg-[#8d46c7] font-bold rounded-lg">
              Explore Rooms
            </Button>
          </Link>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src={BannerImg}
            alt="Banner"
            width={400}
            height={200}
            className="rounded-lg w-full h-[80vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
