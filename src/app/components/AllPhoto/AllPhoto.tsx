"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import NextImage from "next/image";
import { SliderDialog } from "../SliderDialog/SliderDialog";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  height: number | undefined;
  imagesPath: string[];
};

export const AllPhoto = (props: Props) => {
  const [sliderIsOpen, setSliderIsOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = props.imagesPath.map((path) => {
        return new Promise<void>((resolve) => {
          const img = new window.Image(); // ブラウザのImage APIを使用
          img.onload = () => {
            setLoadedImages((prev) => new Set(prev).add(path));
            resolve();
          };
          img.onerror = () => {
            console.error(`Failed to load image: ${path}`);
            resolve();
          };
          img.src = path;
        });
      });

      await Promise.all(imagePromises);
    };

    if (props.isOpen) {
      preloadImages();
    }
  }, [props.isOpen, props.imagesPath]);

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
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-5xl pl-5 pt-3 pb-5 font-black font-medium leading-6 text-gray-900"
                  >
                    <h1>photos</h1>
                  </Dialog.Title>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-500"
                    onClick={() => props.setIsOpen(false)}
                  >
                    <XMarkIcon
                      className="h-10 w-10 cursor-pointer"
                      onClick={() => props.setIsOpen(false)}
                    />
                  </button>
                  <div className="mt-2">
                    <div className="grid grid-cols-2 gap-2">
                      {props.imagesPath.map((path, index) => (
                        <div key={index} className="relative aspect-square">
                          {loadedImages.has(path) ? (
                            <NextImage // NextImageを使用
                              src={path}
                              alt={`Image ${index + 1}`}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              style={{ objectFit: "cover" }}
                              onClick={() => setSliderIsOpen(true)}
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 animate-pulse" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
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
