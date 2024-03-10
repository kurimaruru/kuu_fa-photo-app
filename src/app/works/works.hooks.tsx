import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

  let scrollingTimer: number | null = null;

  function onScrollStopped(callback: () => void, delay: number = 100): void {
    if (scrollingTimer !== null) {
      clearTimeout(scrollingTimer);
    }
    scrollingTimer = window.setTimeout(() => {
      scrollingTimer = null;
      callback();
    }, delay);
  }

  useEffect(() => {
    const handleScroll = () => {
      // スクロールを検知したら次の画像までスクロールしてあげる
      if (scrollRef.current) {
        const scrollTop = scrollRef.current.scrollTop;
        const scrollHeight = scrollRef.current.scrollHeight;
        const clientHeight = scrollRef.current.clientHeight;
        setCurrentImageIndex((prev) => {
          imageRefs.current[
            prev < Images.length - 1 ? prev + 1 : 0
          ].scrollIntoView();
          return prev < Images.length - 1 ? prev + 1 : 0;
        });
        // スクロールが一番下まで到達したら疑似スクロール領域トップに戻す
        if (Math.abs(scrollHeight - clientHeight) - Math.abs(scrollTop) <= 3) {
          scrollRef.current.scrollTop = 0;
        }
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", () => {
        onScrollStopped(() => {
          handleScroll();
        });
      });
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
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
    scrollRef,
  };
};
