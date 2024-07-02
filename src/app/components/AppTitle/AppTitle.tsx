import { Allura } from "next/font/google";

const AlluraFont = Allura({
  weight: "400",
  display: "swap",
  preload: false,
});

type Props = {
  textColor: string;
  pd: string;
};

export default function AppTitle(props: Props) {
  return (
    <div className={`${props.textColor} text-5xl ${props.pd} font-black`}>
      <h1 className={`${AlluraFont.className}`}>
        <a href="/">Kuu_fa photo</a>
      </h1>
    </div>
  );
}
