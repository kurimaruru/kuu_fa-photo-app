import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export const WorksHooks = () => {
  const ref = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageHeight, setImageHeight] = useState<number | undefined>(
    ref.current ? ref.current?.clientWidth * 0.67 : undefined
  );
  const [displayWidth, setDisplayWidth] = useState<number | undefined>(
    ref.current?.clientWidth
  );

  const Images = [
    <Image
      src="/home_1.jpg"
      width={1616}
      height={1080}
      style={{ width: "100%", height: `${imageHeight}px` }}
      alt={"home_1"}
      key={"home_1"}
    />,
    <Image
      src="/home_2.jpg"
      width={1616}
      height={1080}
      style={{ width: "100%", height: `${imageHeight}px` }}
      alt={"home_2"}
      key={"home_2"}
    />,
    <Image
      src="/home_3.jpg"
      width={1616}
      height={1080}
      style={{ width: "100%", height: `${imageHeight}px` }}
      alt={"home_3"}
      key={"home_3"}
    />,
  ];

  const handleMenu = () => {
    setTimeout(
      () => {
        setMenuOpen((prev) => !prev);
      },
      menuOpen ? 300 : 0
    );
  };

  useEffect(() => {
    if (!displayWidth) setDisplayWidth(window.innerWidth);
    const handleResize = () => {
      setDisplayWidth(ref.current?.clientWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    if (ref.current) {
      displayWidth && setImageHeight(displayWidth * 0.67);
    }
  }, [displayWidth]);

  const switchImagesBySetTimeOut = useCallback(() => {
    setCurrentImageIndex((prev) => {
      console.log("prev", prev);
      return prev < Images.length - 1 ? prev + 1 : 0;
    });
  }, []);

  return {
    ref,
    displayWidth,
    Images,
    menuOpen,
    handleMenu,
    imageHeight,
    imageRefs,
    currentImageIndex,
    switchImagesBySetTimeOut,
  };
};
