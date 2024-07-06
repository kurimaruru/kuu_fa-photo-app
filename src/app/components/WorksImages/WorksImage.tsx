"use client";

import { WorksImageType } from "@/app/types";
import { Outfit } from "next/font/google";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { AllPhoto } from "../AllPhoto/AllPhoto";
import ImageCard from "../ImageCard/ImageCard";

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
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
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

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="article-image w-full">
      {worksImages.map((image, index) => (
        <div key={index} ref={(el) => (imageRefs.current[index] = el)}>
          <div className="relative mx-1 mb-1">
            {visibleImages.includes(index) && (
              <ImageCard
                image={image}
                imageHeight={imageHeight}
                handleImageClick={handleImageClick}
                index={index}
              />
            )}
          </div>
        </div>
      ))}
      {isOpen && selectedImageIndex !== null && (
        <AllPhoto
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          height={imageHeight}
          imagesPath={worksImages[selectedImageIndex].worksImages}
          title={worksImages[selectedImageIndex].title}
        />
      )}
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
