import Image from "next/image";

type Props = {
  displayWidth: number | undefined;
  imageHeight: number | undefined;
  imageRefs: React.MutableRefObject<HTMLElement[]>;
};

const WorksImages = (props: Props) => {
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
      className={`article-image w-full`}
      style={{
        height: `${props.imageHeight}px `,
      }}
    >
      {props.displayWidth &&
        Images.map((image, index) => (
          <div className="mx-3 mb-2 hover:opacity-70" key={index}>
            <a href="/">{image}</a>
          </div>
        ))}
    </div>
  );
};

export default WorksImages;
