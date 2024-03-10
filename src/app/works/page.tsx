"use client";

import { Outfit } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { Navbar } from "../components/Navbar";

const OutfitFont = Outfit({
  weight: "200",
  display: "swap",
  preload: false,
});
export default function Works() {
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
    <div className="w-full h-screen">
      <Navbar open={menuOpen} handleMenu={handleMenu} />
      <div
        className={`main fixed top-28 ${
          menuOpen ? "z-[-1]" : ""
        } left-0 h-screen w-full`}
      >
        <div className="article-image w-full h-[260px]  overflow-y-scroll">
          <Image
            src="/home_1.jpg"
            width={1616}
            height={1080}
            style={{ width: "100%", height: "200px" }}
            alt={"home_1"}
          />
          <Image
            src="/home_2.jpg"
            width={1616}
            height={1080}
            style={{ width: "100%", height: "100%" }}
            alt={"home_2"}
          />
        </div>
        <div className="article-title">
          <p
            className={`${OutfitFont.className} text-3xl text-black underline decoration-1`}
          >
            Articles
          </p>
        </div>
      </div>
    </div>
  );
}
