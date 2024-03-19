"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setTimeout(() => {
      setMenuOpen((prev) => !prev);
    }, 300);
  };
  const [loading, setLoading] = useState(true); // ローディング状態を管理する状態

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="w-full h-screen">
      {loading && ( // ローディング中はローディング画面を表示
        <div
          className={`fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-white z-50 ${
            !loading &&
            "transform transition duration-600 ease-in-out opacity-0"
          } `}
        >
          <h1 className="animate-arrowmove">Loading...</h1>
        </div>
      )}
      <Navbar open={menuOpen} handleMenu={handleMenu} />
      <div
        className={`main fixed top-0 left-0 w-full h-screen ${
          menuOpen ? "z-[-1]" : ""
        } ${!loading && "animate-fadeIn"}`}
      >
        <div className="flex flex-wrap fixed top-20 w-full h-[calc(100%-80px)] overflow-y-scroll hidden-scrollbar">
          <div className="w-1/3">
            <Image
              src="/home_6.jpg"
              alt={"home_6"}
              width={1080}
              height={1616}
              className="w-full h-[200px]"
            />
          </div>
          <div className="w-2/3 pl-1">
            <Image
              src="/home_10.jpg"
              alt={"home_10"}
              width={1080}
              height={1616}
              className="w-full h-[200px]"
            />
          </div>
          <div className="w-2/3 pr-1 pt-1">
            <Image
              src="/home_7.jpg"
              alt={"home_7"}
              width={1080}
              height={1616}
              className="w-full h-[200px]"
            />
          </div>
          <div className="w-1/3  pt-1">
            <Image
              src="/home_12.jpg"
              alt={"home_12"}
              width={1080}
              height={1616}
              className="w-full h-[200px]"
            />
          </div>
          <div className="w-1/3 pt-1">
            <Image
              src="/home_5.jpg"
              alt={"home_5"}
              width={1080}
              height={1616}
              className="w-full h-[200px]"
            />
          </div>
          <div className="w-2/3 pl-1 pt-1">
            <Image
              src="/home_13.jpg"
              alt={"home_13"}
              width={1080}
              height={1616}
              className="w-full h-[200px]"
            />
          </div>
          <div className="w-2/3 pr-1 pt-1">
            <Image
              src="/home_14.jpg"
              alt={"home_14"}
              width={1080}
              height={1616}
              className="w-full h-[200px]"
            />
          </div>
          <div className="w-1/3  pt-1">
            <Image
              src="/home_9.jpg"
              alt={"home_9"}
              width={1080}
              height={1616}
              className="w-full h-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
