import Image from "next/image";

import { Allura } from "next/font/google";
import AppTitle from "./components/AppTitle/AppTitle";
import { Menu } from "./components/Menu/Menu";

const AlluraFont = Allura({
  weight: "400",
  display: "swap",
  preload: false,
});

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Menu />
      <div className="header flex w-full h-16 justify-between">
        <AppTitle textColor={"text-white"} pd={"pl-5 pt-3"} />
      </div>
      <div className={`main fixed top-0 left-0 w-full h-screen z-[-1]`}>
        <Image
          src="/home_1.jpg"
          layout="fill"
          objectFit="cover"
          alt={"home_1"}
        />
      </div>
    </div>
  );
}
