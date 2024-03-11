"use client";

import Image from "next/image";

import { useState } from "react";
import { Navbar } from "./components/Navbar";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setTimeout(() => {
      setMenuOpen((prev) => !prev);
    }, 500);
  };
  return (
    <div className="w-full h-screen">
      <Navbar open={menuOpen} handleMenu={handleMenu} />
      <div className={`main fixed top-0 left-0 w-full h-screen z-[-1]`}>
        <Image src="/home_1.jpg" alt={"home_1"} className="object-cover" fill />
      </div>
    </div>
  );
}
