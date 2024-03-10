"use client";

import { useState } from "react";
import AppTitle from "../AppTitle/AppTitle";
import { Menu } from "../Menu/Menu";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Menu open={menuOpen} setOpen={setMenuOpen} />
      <div className="header fixed top-0 left-0 z-50  h-16">
        <AppTitle textColor={"text-black"} pd={"pl-5 pt-3"} />
      </div>
    </>
  );
}
