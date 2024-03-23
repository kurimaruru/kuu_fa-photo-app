"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import Image from "next/image";

// オプションをインポートする
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./index.module.css";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  height: number | undefined;
};

export const SliderDialog = (props: Props) => {
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
  ];
  const slideSettings = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  };
  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.setIsOpen}>
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

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-2  text-center">
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
                className={`w-full max-w-md transform overflow-hidden rounded-sm bg-white text-left align-middle shadow-xl transition-all`}
                style={{ height: `${props.height}px` }}
              >
                <Swiper
                  modules={[Navigation, Pagination]}
                  breakpoints={slideSettings} // slidesPerViewを指定
                  slidesPerView={"auto"} // ハイドレーションエラー対策
                  centeredSlides={true} // スライドを中央に配置
                  loop={true} // スライドをループさせる
                  speed={1000} // スライドが切り替わる時の速度
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }} // スライド表示時間
                  pagination={{
                    renderBullet: (index, className) => {
                      return `<span class="${className} swiper-bullet-active:!bg-red"></span>`;
                    },
                    clickable: true,
                  }}
                  className={styles.slideWrapper}
                >
                  {Images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={`${image.path}`}
                        width={1616}
                        height={1080}
                        style={{
                          width: "100%",
                          height: `${props.height}px`,
                        }}
                        alt={`${image.key}`}
                        key={`${image.key}`}
                        priority
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
