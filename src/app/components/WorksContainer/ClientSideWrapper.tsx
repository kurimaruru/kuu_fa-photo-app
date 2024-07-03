"use client";

import React, { ReactNode, useEffect, useState } from "react";
import DynamicLoadingScreen from "../Loading/Loading";

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
    return <DynamicLoadingScreen />;
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
