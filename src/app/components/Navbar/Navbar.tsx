"use client";

import { useState } from "react";
import AppTitle from "../AppTitle/AppTitle";
import { Menu } from "../Menu/Menu";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Menu open={menuOpen} setOpen={setMenuOpen} />
      <div className="header sticky top-0 w-full h-16 justify-between">
        {!menuOpen && <AppTitle textColor={"text-white"} pd={"pl-5 pt-3"} />}
      </div>
    </>
  );
}
