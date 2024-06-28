"use client";

import { useState, useMemo, useRef, useEffect } from "react";
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
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const imageHeight = useMemo(
    () => (windowHeight ? windowHeight * 0.8 : undefined),
    [windowHeight]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1 && !visibleImages.includes(index)) {
              setVisibleImages((prev) => [...prev, index]);
            }
          }
        });
      },
      { rootMargin: "100px" }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleImages]);

  return (
    <div
      className="article-image w-full"
      style={{
        height: imageHeight ? `${imageHeight}px` : "auto",
      }}
    >
      {worksImages.map((image, index) => (
        <div key={index} ref={(el) => (imageRefs.current[index] = el)}>
          <div className="relative mx-1 mb-1 hover:opacity-70">
            {visibleImages.includes(index) && (
              <div className="fade-in-image">
                <Image
                  src={`${image.thumbnail}`}
                  width={1616}
                  height={1080}
                  style={{
                    width: "100%",
                    height: imageHeight ? `${imageHeight}px` : "auto",
                  }}
                  alt={`${image.title}`}
                  loading="lazy"
                  onClick={() => setIsOpen(true)}
                />
              </div>
            )}
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
              title={image.title}
            />
          )}
        </div>
      ))}
      <style jsx>{`
        .fade-in-image {
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default WorksImages;
