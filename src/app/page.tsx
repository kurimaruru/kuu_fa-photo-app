import Image from "next/image";

import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Navbar />
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
