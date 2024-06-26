"use client";

import { useState, useMemo } from "react";
import { WorksImageType } from "@/app/types";
import { Outfit } from "next/font/google";
import Image from "next/image";
import { AllPhoto } from "../AllPhoto/AllPhoto";

const OutfitFont = Outfit({
  weight: "200",
  display: "swap",
  preload: false,
});

type Props = {
  windowWidth?: number;
  windowHeight?: number;
  worksImages: WorksImageType[];
};

const WorksImages = ({ windowWidth, windowHeight, worksImages }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const imageHeight = useMemo(
    () => (windowHeight ? windowHeight * 0.8 : undefined),
    [windowHeight]
  );

  return (
    <>
      <div
        className={`article-image w-full`}
        style={{
          height: imageHeight ? `${imageHeight}px` : "auto",
        }}
      >
        {worksImages.map((image, index) => (
          <div key={index}>
            <div className="relative mx-1 mb-1 hover:opacity-70">
              <Image
                src={`${image.thumbnail}`}
                width={1616}
                height={1080}
                style={{
                  width: "100%",
                  height: imageHeight ? `${imageHeight}px` : "auto",
                }}
                alt={`${image.title}`}
                priority
                onClick={() => setIsOpen(true)}
              />
              <p
                className={`${OutfitFont.className} absolute text-3xl w-full text-center top-[85%] left-[50%] transform -translate-x-1/2 opacity-30 text-white bg-gray-800`}
              >
                {image.title}
              </p>
            </div>
            {isOpen && (
              <AllPhoto
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                height={imageHeight}
                imagesPath={image.worksImages}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default WorksImages;
