"use client";

import { Outfit } from "next/font/google";
import { Navbar } from "../components/Navbar";
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
        <div
          className={`article-image w-full overflow-y-scroll snap-y snap-mandatory`}
          style={{ height: `${imageHeight}px` }}
        >
          {displayWidth &&
            Images.map((image, index) => (
              <div
                key={index}
                ref={(el) => (imageRefs.current[index] = el!)}
                className="snap-start"
              >
                <span
                  className={
                    currentImageIndex === index ? `animate-fadeIn` : ""
                  }
                >
                  {image}
                </span>
              </div>
            ))}
        </div>
        <p
          className={`${OutfitFont.className} text-3xl text-black underline decoration-1`}
        >
          Articles
        </p>
        <div
          className="article-title overflow-y-scroll"
          style={{ height: `${imageHeight}px` }}
          ref={scrollRef}
        >
          <div
            style={{ height: `calc(${imageHeight}px * ${Images.length})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
