"use client";

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import NextImage from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import { SliderDialog } from "../SliderDialog/SliderDialog";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  height: number | undefined;
  imagesPath: string[];
  title: string;
};

export const AllPhoto = (props: Props) => {
  const [sliderIsOpen, setSliderIsOpen] = useState(false);
  const [visibleImages, setVisibleImages] = useState<Set<string>>(new Set());
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!props.isOpen) return;

    let observer: IntersectionObserver;

    const initializeObserver = () => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const path = entry.target.getAttribute("data-path");
              if (path) {
                setVisibleImages((prev) => new Set(prev).add(path));
              }
            }
          });
        },
        { rootMargin: "100px", threshold: 0.1 }
      );

      imageRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    };

    // コンポーネントのマウント/更新後に少し遅延を入れてObserverを初期化
    const timeoutId = setTimeout(() => {
      initializeObserver();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [props.isOpen]);

  // 初回レンダリング時に画面内の画像を表示するための追加のuseEffect
  useEffect(() => {
    if (props.isOpen) {
      const checkInitialVisibility = () => {
        imageRefs.current.forEach((ref) => {
          if (ref && isElementInViewport(ref)) {
            const path = ref.getAttribute("data-path");
            if (path) {
              setVisibleImages((prev) => new Set(prev).add(path));
            }
          }
        });
      };

      // コンポーネントのマウント/更新後に少し遅延を入れて初期可視性をチェック
      const timeoutId = setTimeout(checkInitialVisibility, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [props.isOpen]);

  // viewport内にある要素かどうかを判定する関数
  const isElementInViewport = (el: Element) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

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
                <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <div className="h-full overflow-y-auto">
                    <Dialog.Title
                      as="h3"
                      className="text-5xl pl-5 pt-3 pb-5 font-black leading-6 text-gray-900"
                    >
                      <h1>{props.title}</h1>
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
                          <div
                            key={index}
                            className="relative aspect-square"
                            ref={(el) => (imageRefs.current[index] = el)}
                            data-path={path}
                          >
                            {visibleImages.has(path) ? (
                              <div className="fade-in-image">
                                <NextImage
                                  src={path}
                                  alt={`Image ${index + 1}`}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  style={{ objectFit: "cover" }}
                                  onClick={() => setSliderIsOpen(true)}
                                />
                              </div>
                            ) : (
                              <div className="w-full h-full bg-gray-200 animate-pulse" />
                            )}
                          </div>
                        ))}
                      </div>
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
        imagesPath={props.imagesPath}
      />
      <style jsx>{`
        .fade-in-image {
          animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};
