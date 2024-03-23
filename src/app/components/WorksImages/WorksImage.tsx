import { Outfit } from "next/font/google";
import Image from "next/image";
import { SliderDialog } from "../SliderDialog/SliderDialog";

const OutfitFont = Outfit({
  weight: "200",
  display: "swap",
  preload: false,
});

type Props = {
  displayWidth: number | undefined;
  imageHeight: number | undefined;
  imageRefs: React.MutableRefObject<HTMLElement[]>;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};
const WorksImages = (props: Props) => {
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
  return (
    <>
      <div
        className={`article-image w-full`}
        style={{
          height: `${props.imageHeight}px `,
        }}
      >
        {props.displayWidth &&
          Images.map((image, index) => (
            <div className="relative mx-1 mb-1 hover:opacity-70" key={index}>
              <Image
                src={`${image.path}`}
                width={1616}
                height={1080}
                style={{ width: "100%", height: `${props.imageHeight}px` }}
                alt={`${image.key}`}
                key={`${image.key}`}
                priority
                onClick={() => props.setIsOpen(true)}
              />
              <p
                className={`${OutfitFont.className} absolute text-3xl w-full text-center top-[85%] left-[50%] transform -translate-x-1/2 opacity-30 text-white bg-gray-800`}
              >
                {image.title}
              </p>
            </div>
          ))}
      </div>
      <SliderDialog
        isOpen={props.isOpen}
        setIsOpen={props.setIsOpen}
        height={props.imageHeight}
      />
    </>
  );
};

export default WorksImages;
