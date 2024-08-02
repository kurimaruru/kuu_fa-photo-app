"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import DynamicLoadingScreen from "./components/Loading/Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="w-full h-screen">
      {loading ? (
        <DynamicLoadingScreen />
      ) : (
        <>
          <Navbar />
          <div
            className={`main fixed top-0 left-0 w-full h-screen animate-fadeIn`}
          >
            <div className="grid grid-cols-3 gap-1 lg:grid-cols-6 fixed top-20 w-full h-[calc(100%-80px)] overflow-y-scroll hidden-scrollbar">
              <div className="col-span-1 lg:col-span-1 order-1">
                <Image
                  src="/Home/home_1.JPG"
                  alt={"home_1"}
                  width={600}
                  height={900}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="col-span-2 lg:col-span-2 order-2">
                <Image
                  src="/Home/home_2.JPG"
                  alt={"home_2"}
                  width={900}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="col-span-2 lg:col-span-2 order-3 lg:order-4">
                <Image
                  src="/Home/home_3.JPG"
                  alt={"home_3"}
                  width={600}
                  height={900}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="col-span-1 lg:col-span-1 order-4 lg:order-3">
                <Image
                  src="/Home/home_4.JPG"
                  alt={"home_4"}
                  width={900}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="col-span-1 lg:col-span-1 order-5 lg:order-6">
                <Image
                  src="/Home/home_5.JPG"
                  alt={"home_5"}
                  width={600}
                  height={900}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="col-span-2 lg:col-span-2 order-6 lg:order-5">
                <Image
                  src="/Home/home_6.JPG"
                  alt={"home_6"}
                  width={900}
                  height={600}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="col-span-2 lg:col-span-2 order-7">
                <Image
                  src="/Home/home_7.JPG"
                  alt={"home_7"}
                  width={600}
                  height={900}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="col-span-1 lg:col-span-1 order-8">
                <Image
                  src="/Home/home_8.JPG"
                  alt={"home_8"}
                  width={900}
                  height={600}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
