"use client";

import { Outfit } from "next/font/google";
import { Navbar } from "../components/Navbar";
import { WorksImages } from "../components/WorksImages";
import { WorksHooks } from "./works.hooks";

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
    scrollRef,
    displayWidth,
    currentImageIndex,
  } = WorksHooks();
  return (
    <div className="w-full h-screen " ref={ref}>
      <Navbar open={menuOpen} handleMenu={handleMenu} />
      <div
        className={`main fixed top-28 ${
          menuOpen ? "z-[-1]" : ""
        } left-0 h-screen w-full`}
      >
        <WorksImages
          displayWidth={displayWidth}
          currentImageIndex={currentImageIndex}
          imageHeight={imageHeight}
          imageRefs={imageRefs}
        />
        <p
          className={`${OutfitFont.className} text-3xl text-black underline decoration-1`}
        >
          Articles
        </p>
        <p className={`${OutfitFont.className} text-xl text-black ml-4 mt-3`}>
          20photos
        </p>
        <div
          className="article-title overflow-y-scroll hidden-scrollbar"
          style={{ height: `${imageHeight}px` }}
          ref={scrollRef}
        >
          <div
            className="dummy-scroll-area"
            style={{ height: `calc(${imageHeight}px * ${Images.length})` }}
          >
            <div className="fixed scrolldown4">
              <span className="absolute left-10 top-60 text-black text-2xl animate-arrowmove [writing-mode:vertical-rl]">
                Scroll
              </span>
              <div className="absolute left-16 top-56 flex animate-arrowmove">
                <div className="w-[3px] h-40 ml-6 bg-black"></div>
                <div className="w-[3px] h-10 mt-[120px] -ml-[21px]  bg-black transform skew-x-[45deg]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
