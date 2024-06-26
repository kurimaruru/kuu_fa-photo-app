"use client";

import { useState } from "react";
import AppTitle from "../AppTitle/AppTitle";
import { Menu } from "../Menu/Menu";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setTimeout(
      () => {
        setMenuOpen((prev) => !prev);
      },
      menuOpen ? 300 : 0
    );
  };
  return (
    <>
      <Menu open={menuOpen} handleMenu={handleMenu} />
      <div className="header fixed top-0 left-0 z-50  h-16">
        <AppTitle textColor={"text-black"} pd={"pl-5 pt-3"} />
      </div>
    </>
  );
}
