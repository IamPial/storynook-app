"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg bg-white">
      <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-3">
            <Image src={Logo} alt="StoryNook" width={50} height={50} />
            <p className="font-extrabold text-purple-500 text-2xl">
              Story<span className="text-[#112A46]">Nook</span>
            </p>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex text-[#112A46] font-semibold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link
              href="/rooms"
              className="font-medium text-accent"
              aria-current="page"
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link
              href="/add-room"
              className="font-medium text-accent"
              aria-current="page"
            >
              Add Room
            </Link>
          </li>
          <li>
            <Link
              href="/my-listings"
              className="font-medium text-accent"
              aria-current="page"
            >
              My Listings
            </Link>
          </li>
          <li>
            <Link
              href="/my-bookings"
              className="font-medium text-accent"
              aria-current="page"
            >
              My Bookings
            </Link>
          </li>
        </ul>
        <div className=" items-center gap-4 flex">
          <Link href="/login">
            <Button className=" bg-white text-[#112A46] font-semibold  hover:bg-[#8d46c7] hover:text-white rounded-lg">
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="border  bg-[#9d4edd]  font-semibold  hover:bg-[#8d46c7] text-white rounded-lg">
              Register
            </Button>
          </Link>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="/" className="block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/rooms"
                className="block py-2 font-medium text-accent"
              >
                Rooms
              </Link>
            </li>
            <li>
              <Link
                href="/add-room"
                className="block py-2 font-medium text-accent"
              >
                Add Room
              </Link>
            </li>
            <li>
              <Link
                href="/my-listings"
                className="block py-2 font-medium text-accent"
              >
                My Listings
              </Link>
            </li>
            <li>
              <Link
                href="/my-bookings"
                className="block py-2 font-medium text-accent"
              >
                My Bookings
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
