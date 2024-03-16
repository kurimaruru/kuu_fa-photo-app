"use client";

import { Outfit } from "next/font/google";
import { Suspense, lazy } from "react";
import { Navbar } from "../components/Navbar";
import { WorksHooks } from "./works.hooks";
const WorksImages = lazy(() => import("../components/WorksImages/WorksImage"));

const OutfitFont = Outfit({
  weight: "200",
  display: "swap",
  preload: false,
});

export default function Works() {
  const {
    ref,
    Images,
    menuOpen,
    handleMenu,
    imageHeight,
    imageRefs,
    displayWidth,
  } = WorksHooks();

  return (
    <div className="w-full" ref={ref}>
      <Navbar open={menuOpen} handleMenu={handleMenu} />
      <div
        className={`main fixed top-20 ${
          menuOpen ? "z-[-1]" : ""
        } left-0 w-full overflow-y-scroll hidden-scrollbar p-0`}
        style={{
          height: `calc(100vh - 80px)`,
          WebkitOverflowScrolling: "touch",
        }}
      >
        <Suspense
          fallback={<div className="text-3xl text-black">Loading...</div>}
        >
          <WorksImages
            displayWidth={displayWidth}
            imageHeight={imageHeight}
            imageRefs={imageRefs}
          />
        </Suspense>
      </div>
    </div>
  );
}
