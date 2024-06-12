import { WorksImageType } from "@/app/types";
import { Outfit } from "next/font/google";
import Image from "next/image";
import { AllPhoto } from "../AllPhoto/AllPhoto";

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
  worksImages: WorksImageType[];
};
const WorksImages = (props: Props) => {
  return (
    <>
      <div
        className={`article-image w-full`}
        style={{
          height: `${props.imageHeight}px `,
        }}
      >
        {props.displayWidth &&
          props.worksImages.map((image, index) => (
            <div key={index}>
              <div className="relative mx-1 mb-1 hover:opacity-70">
                <Image
                  src={`${image.thumbnail}`}
                  width={1616}
                  height={1080}
                  style={{ width: "100%", height: `${props.imageHeight}px` }}
                  alt={`${image.title}`}
                  key={`${image.title}`}
                  priority
                  onClick={() => props.setIsOpen(true)}
                />
                <p
                  className={`${OutfitFont.className} absolute text-3xl w-full text-center top-[85%] left-[50%] transform -translate-x-1/2 opacity-30 text-white bg-gray-800`}
                >
                  {image.title}
                </p>
              </div>
              <AllPhoto
                isOpen={props.isOpen}
                setIsOpen={props.setIsOpen}
                height={props.imageHeight}
                imagesPath={image.worksImages}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default WorksImages;
