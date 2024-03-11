import Image from "next/image";

type Props = {
  displayWidth: number | undefined;
  currentImageIndex: number;
  imageHeight: number | undefined;
  imageRefs: React.MutableRefObject<HTMLElement[]>;
};

export const WorksImages = (props: Props) => {
  const Images = [
    <Image
      src="/home_1.jpg"
      width={1616}
      height={1080}
      style={{ width: "100%", height: `${props.imageHeight}px` }}
      alt={"home_1"}
      key={"home_1"}
      priority
    />,
    <Image
      src="/home_2.jpg"
      width={1616}
      height={1080}
      style={{ width: "100%", height: `${props.imageHeight}px` }}
      alt={"home_2"}
      key={"home_2"}
      priority
    />,
    <Image
      src="/home_3.jpg"
      width={1616}
      height={1080}
      style={{ width: "100%", height: `${props.imageHeight}px` }}
      alt={"home_3"}
      key={"home_3"}
      priority
    />,
  ];
  return (
    <div
      className={`article-image w-full overflow-y-scroll snap-y snap-mandatory hidden-scrollbar`}
      style={{ height: `${props.imageHeight}px`, overflow: "hidden" }}
    >
      {props.displayWidth &&
        Images.map((image, index) => (
          <div
            key={index}
            ref={(el) => (props.imageRefs.current[index] = el!)}
            className="snap-start"
          >
            <span
              className={
                props.currentImageIndex === index ? `animate-fadeIn` : ""
              }
            >
              {image}
            </span>
          </div>
        ))}
    </div>
  );
};
