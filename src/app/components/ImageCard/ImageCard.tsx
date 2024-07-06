import React from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { WorksImageType } from "@/app/types";

type Props = {
  image: WorksImageType;
  imageHeight: number | undefined;
  handleImageClick: (index: number) => void;
  index: number;
};

const ImageCard = (props: Props) => {
  return (
    <Transition
      show={true}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="my-3"
    >
      <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 lg:m-auto lg:w-3/4 lg:h-2/3">
        <div className="p-4">
          <h2 className="text-3xl font-bold text-left text-gray-800 ">
            {props.image.title}
          </h2>
        </div>
        <div className="relative lg:flex lg:justify-center">
          <Image
            src={`${props.image.thumbnail}`}
            width={1616}
            height={1080}
            alt={`${props.image.title}`}
            loading="lazy"
            onClick={() => props.handleImageClick(props.index)}
            className="w-full p-3 h-full cursor-pointer transition-transform duration-300"
          />
        </div>
      </div>
    </Transition>
  );
};

export default ImageCard;
