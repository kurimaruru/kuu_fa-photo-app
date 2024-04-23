import { useEffect, useRef, useState } from "react";

export const WorksCOntainerHooks = () => {
  const ref = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);

  const [menuOpen, setMenuOpen] = useState(false);
  const [imageHeight, setImageHeight] = useState<number | undefined>(
    ref.current ? ref.current?.clientWidth * 0.67 : undefined
  );
  const [displayWidth, setDisplayWidth] = useState<number | undefined>(
    ref.current?.clientWidth
  );

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

  return {
    ref,
    displayWidth,
    menuOpen,
    handleMenu,
    imageHeight,
    imageRefs,
  };
};
