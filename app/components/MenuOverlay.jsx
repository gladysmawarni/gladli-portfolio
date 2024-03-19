import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center bg-[#e89bb0] bg-opacity-30">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title}/>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
