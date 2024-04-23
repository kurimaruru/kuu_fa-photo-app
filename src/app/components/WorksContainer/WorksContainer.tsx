"use client";

import { useEffect, useState } from "react";
import { WorksImageType } from "../../types";
import { Navbar } from "../Navbar";
import WorksImages from "../WorksImages/WorksImage";
import { WorksCOntainerHooks } from "./WorksContainer.hooks";

type Props = {
  worksImages: WorksImageType[];
};

export function WorksContainer(props: Props) {
  const { ref, menuOpen, handleMenu, imageHeight, imageRefs, displayWidth } =
    WorksCOntainerHooks();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full" ref={ref}>
      {loading && (
        <div
          className={`fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-white z-50 ${
            !loading &&
            "transform transition duration-600 ease-in-out opacity-0"
          } `}
        >
          <h1 className="animate-arrowmove">Loading...</h1>
        </div>
      )}
      <Navbar open={menuOpen} handleMenu={handleMenu} />
      <div
        className={`main fixed top-20 ${
          menuOpen ? "z-[-1]" : ""
        } left-0 w-full overflow-y-scroll hidden-scrollbar p-0`}
        style={{
          height: `calc(100vh - 80px)`,
          WebkitOverflowScrolling: "touch",
        }}
      >
        <WorksImages
          displayWidth={displayWidth}
          imageHeight={imageHeight}
          imageRefs={imageRefs}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          worksImages={props.worksImages}
        />
      </div>
    </div>
  );
}
