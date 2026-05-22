"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { FaBookOpen } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div>
      <div
        className="
          
          
          p-8
          text-center
          
          md:p-14"
      >
        <div
          className="
            mx-auto
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-violet-500
            to-fuchsia-500
            text-white
            shadow-xl"
        >
          <FaBookOpen className="text-4xl" />
        </div>

        <h1
          className="
            mt-8
            bg-gradient-to-r
            from-violet-600
            to-fuchsia-500
            bg-clip-text
            text-7xl
            font-black
            text-transparent
            md:text-9xl
          "
        >
          404
        </h1>
        <h2
          className="
            mt-5
            text-3xl
            font-bold
            tracking-tight
            text-[#1b1330]
            md:text-5xl
          "
        >
          Page Not Found
        </h2>
        <p
          className="
            mx-auto
            mt-4
            max-w-xl
            text-sm
            leading-relaxed
            text-[#7a7391]
            md:text-base
          "
        >
          The page you are looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back to your cozy reading space.
        </p>

        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-center
            gap-4
            sm:flex-row
          "
        >
          <Link href="/">
            <Button
              className="
              h-12
              bg-gradient-to-r
              from-violet-500
              to-fuchsia-500
              px-8
              font-semibold
              text-white
              shadow-lg
            "
            >
              Back To Home
            </Button>
          </Link>

          <Link href={"/rooms"}>
            <Button
              variant="bordered"
              className="
              h-12
              border-violet-200
              px-8
              font-semibold
              text-violet-600
              hover:bg-violet-50
            "
            >
              Explore Rooms
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
