"use client";

import React, { useState, useEffect, ReactNode } from "react";

interface ChildProps {
  windowWidth?: number;
  windowHeight?: number;
}

export function ClientSideWrapper({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-white z-50">
        <h1 className="animate-arrowmove">Loading...</h1>
      </div>
    );
  }

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement<ChildProps>(child)) {
      return React.cloneElement(child, {
        windowWidth: width,
        windowHeight: height,
      });
    }
    return child;
  });

  return <>{childrenWithProps}</>;
}
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined as number | undefined,
    height: undefined as number | undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
