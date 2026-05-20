import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ children, href, className }) => {
  const pathName = usePathname();

  const isActive = href == pathName;

  return (
    <Link
      href={href}
      className={`${isActive ? "text-[#9d4edd]" : "text-[#112A46]"}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
