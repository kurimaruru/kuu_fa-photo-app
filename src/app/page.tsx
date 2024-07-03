"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import DynamicLoadingScreen from "./components/Loading/Loading";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="w-full h-screen">
      {loading && ( // ローディング中はローディング画面を表示
        <DynamicLoadingScreen />
      )}
      <Navbar />
      <div
        className={`main fixed top-0 left-0 w-full h-screen ${
          menuOpen ? "z-[-1]" : ""
        } ${!loading && "animate-fadeIn"}`}
      >
        <div className="flex flex-wrap fixed top-20 w-full h-[calc(100%-80px)] overflow-y-scroll hidden-scrollbar">
          <div className="w-1/3">
            <Image
              src="/Home/home_1.jpg"
              alt={"home_1"}
              width={1080}
              height={1616}
              className="w-full h-[200px]"
            />
          </div>
          <div className="w-2/3 pl-1">
            <Image
              src="/Home/home_2.jpg"
              alt={"home_2"}
              width={1080}
              height={1616}
              className="w-full h-[200px]"
            />
          </div>
          <div className="w-2/3 pr-1 pt-1">
            <Image
              src="/Home/home_3.jpg"
              alt={"home_3"}
              width={1080}
              height={1616}
              className="w-full h-[200px]"
            />
          </div>
          <div className="w-1/3  pt-1">
            <Image
              src="/Home/home_4.jpg"
              alt={"home_4"}
              width={1080}
              height={1616}
              className="w-full h-[200px]"
            />
          </div>
          <div className="w-1/3 pt-1">
            <Image
              src="/Home/home_5.jpg"
              alt={"home_5"}
              width={1080}
              height={1616}
              className="w-full h-[200px]"
            />
          </div>
          <div className="w-2/3 pl-1 pt-1">
            <Image
              src="/Home/home_6.jpg"
              alt={"home_6"}
              width={1080}
              height={1616}
              className="w-full h-[200px]"
            />
          </div>
          <div className="w-2/3 pr-1 pt-1">
            <Image
              src="/Home/home_7.jpg"
              alt={"home_7"}
              width={1080}
              height={1616}
              className="w-full h-[200px]"
            />
          </div>
          <div className="w-1/3  pt-1">
            <Image
              src="/Home/home_8.jpg"
              alt={"home_8"}
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
