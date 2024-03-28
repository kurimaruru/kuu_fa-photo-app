"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { XMarkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import AppTitle from "../AppTitle/AppTitle";
import { SliderDialog } from "../SliderDialog/SliderDialog";
type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  height: number | undefined;
};

export const AllPhoto = (props: Props) => {
  const [sliderIsOpen, setSliderIsOpen] = useState(false);

  const Images = [
    {
      path: "/home_1.jpg",
      key: "home_1",
      title: "Hiroshima",
    },
    {
      path: "/home_2.jpg",
      key: "home_2",
      title: "Tokyo",
    },
    {
      path: "/home_3.jpg",
      key: "home_3",
      title: "Tachikawa",
    },
    {
      path: "/home_4.jpg",
      key: "home_4",
      title: "Hiroshima",
    },
    {
      path: "/home_5.jpg",
      key: "home_5",
      title: "Tachikawa",
    },
    {
      path: "/home_6.jpg",
      key: "home_6",
      title: "Hiroshima",
    },
    {
      path: "/home_7.jpg",
      key: "home_7",
      title: "Tokyo",
    },
    {
      path: "/home_8.jpg",
      key: "home_8",
      title: "Tachikawa",
    },
    {
      path: "/home_9.jpg",
      key: "home_9",
      title: "Hiroshima",
    },
    {
      path: "/home_10.jpg",
      key: "home_10",
      title: "Tokyo",
    },
    {
      path: "/home_3.jpg",
      key: "home_11",
      title: "Tachikawa",
    },
    {
      path: "/home_1.jpg",
      key: "home_12",
      title: "Hiroshima",
    },
    {
      path: "/home_2.jpg",
      key: "home_2",
      title: "Tokyo",
    },
    {
      path: "/home_3.jpg",
      key: "home_3",
      title: "Tachikawa",
    },
    {
      path: "/home_1.jpg",
      key: "home_1",
      title: "Hiroshima",
    },
    {
      path: "/home_2.jpg",
      key: "home_2",
      title: "Tokyo",
    },
    {
      path: "/home_3.jpg",
      key: "home_3",
      title: "Tachikawa",
    },
  ];

  return (
    <>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => {
            return;
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-white" />
          </Transition.Child>
          <div className="absolute top-3 right-2">
            {props.isOpen && (
              <XMarkIcon
                className="h-10 w-10 cursor-pointer"
                onClick={() => props.setIsOpen(false)}
              />
            )}
          </div>
          <div className="fixed top-0 left-0 z-50 h-16">
            <AppTitle textColor={"text-black"} pd={"pl-5 pt-3"} />
          </div>
          <div className="fixed top-20 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center  text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`flex flex-wrap w-full h-screen max-w-md transform rounded-sm bg-white text-left align-middle shadow-xl transition-all`}
                >
                  {Images.map((image, index) => (
                    <Image
                      src={`${image.path}`}
                      width={1616}
                      height={1080}
                      style={{
                        width: "50%",
                        height: `calc(${props.height}px / 2)`,
                        padding: "1%",
                      }}
                      alt={`${image.key}`}
                      key={index}
                      priority
                      onClick={() => setSliderIsOpen(true)}
                    />
                  ))}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <SliderDialog
        isOpen={sliderIsOpen}
        setIsOpen={setSliderIsOpen}
        height={props.height}
      />
    </>
  );
};
