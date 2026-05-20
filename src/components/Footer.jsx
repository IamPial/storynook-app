import { Button } from "@heroui/react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import Image from "next/image";
import footerLogo from "@/assets/footerLogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#371B4D] text-white  py-16">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          <div className="">
            <div className="flex gap-2 items-center">
              <Image
                src={footerLogo}
                alt="StoryNook"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                StoryNook
              </h1>
            </div>
            <p className="mt-4 max-w-xl">
              Quiet study rooms, booked by the hour. Built for students,
              scholars, and lifelong learners.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-white mb-3 tracking-wide">QUICK LINKS</h2>

            <ul className=" space-y-2 text-white font-semibold">
              <li>
                <Link href="/" className="hover:underline cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  className="font-medium hover:underline   cursor-pointer"
                  aria-current="page"
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-medium hover:underline   cursor-pointer"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-white mb-3 tracking-wide">CONTACT US</h2>
            <ul className="space-y-2 font-normal">
              <li>+880 1786 901 1622</li>
              <li>info@wandarland.com</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className=" text-white mb-3 tracking-wide uppercase">
              Social Links
            </h2>
            <div className="flex gap-5 mt-4 md:mt-0 text-white text-lg">
              <Link href="#" className="cursor-pointer">
                <Button className="bg-[#9d4edd] hover:bg-[#873bc5] rounded-lg">
                  <LuFacebook />
                </Button>
              </Link>
              <Link href="#" className="cursor-pointer">
                <Button className="bg-[#9d4edd] hover:bg-[#873bc5] rounded-lg">
                  <FaXTwitter />
                </Button>
              </Link>
              <Link href="#" className="cursor-pointer">
                <Button className="bg-[#9d4edd] hover:bg-[#873bc5] rounded-lg">
                  <SlSocialLinkedin />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-12 pt-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm">© 2026 StoryNook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
