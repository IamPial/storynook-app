"use client";

import { useState } from "react";
import { Avatar, Button, Dropdown } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { IoIosLogOut } from "react-icons/io";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { data: session, error } = authClient.useSession();

  const user = session?.user;

  const handleSignOut = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("error", error);
    }
    await authClient.signOut();
    toast("You have been signed out", {
      style: {
        color: "#00c950",
      },
    });

    router.push("/");
    router.refresh();
  };

  return (
    <div className="sticky top-0 z-40  border-b border-separator bg-background/50 backdrop-blur-lg ">
      <nav className=" container mx-auto px-2 md:px-0 ">
        <header className=" flex h-16  items-center justify-between ">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden"
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
          <ul className="hidden items-center gap-4 lg:flex text-[#112A46] font-semibold">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink
                href="/rooms"
                className="font-medium "
                aria-current="page"
              >
                Rooms
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    href="/add-room"
                    className="font-medium "
                    aria-current="page"
                  >
                    Add Room
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/my-listings"
                    className="font-medium "
                    aria-current="page"
                  >
                    My Listings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/my-bookings"
                    className="font-medium "
                    aria-current="page"
                  >
                    My Bookings
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <div className=" items-center gap-4 flex">
            {user ? (
              <>
                <Dropdown>
                  <Button
                    aria-label="Menu"
                    className="py-6 bg-background/80 backdrop-blur-lg"
                    variant="secondary"
                  >
                    <Avatar>
                      <Avatar.Image
                        referrerPolicy="no-referrer"
                        alt={user?.name}
                        src={user?.image}
                      />
                      <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                    </Avatar>{" "}
                    <span className="text-dark">{user?.name}</span>
                  </Button>

                  <Dropdown.Popover>
                    <Dropdown.Menu
                      onAction={(key) => console.log(`Selected: ${key}`)}
                    >
                      <Dropdown.Item id="new-file" textValue="New file">
                        <div>
                          <h3>{user?.name}</h3>
                          <small>{user?.email}</small>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <NavLink
                          href="/my-listings"
                          className="font-medium "
                          aria-current="page"
                        >
                          My Listings
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <NavLink
                          href="/my-bookings"
                          className="font-medium "
                          aria-current="page"
                        >
                          My Bookings
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Button
                          onClick={handleSignOut}
                          className="w-full bg-purple-400 "
                        >
                          <IoIosLogOut /> Log Out
                        </Button>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown.Popover>
                </Dropdown>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button className=" bg-white text-[#112A46] font-semibold  hover:bg-[#8d46c7] hover:text-white rounded-lg">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="  bg-[#9d4edd]  font-semibold  hover:bg-[#8d46c7] text-white rounded-lg">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
        </header>
        {isMenuOpen && (
          <div className="border-t border-separator lg:hidden">
            <ul className="flex flex-col gap-2 p-4">
              <li>
                <NavLink
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  href="/"
                  className="block py-2"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/rooms"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="block py-2 font-medium "
                >
                  Rooms
                </NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <NavLink
                      href="/add-room"
                      className="block py-2 font-medium "
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      Add Room
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      href="/my-listings"
                      className="block py-2 font-medium"
                    >
                      My Listings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      href="/my-bookings"
                      className="block py-2 font-medium "
                    >
                      My Bookings
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
