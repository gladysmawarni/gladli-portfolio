import Link from "next/link";
import {leagueSpartan}  from "../font/font"


const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 text-[#e66d8de2] sm:text-xl roundedmd:p-0 hover:text-[#e89bb0]"
    >
       <p className={leagueSpartan.className}>{title}</p>

    </Link>
  );
};

export default NavLink;
