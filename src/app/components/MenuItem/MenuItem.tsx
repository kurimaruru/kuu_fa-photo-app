import { Outfit } from "next/font/google";

type Props = {
  name: string;
  href: string;
};

const OutfitFont = Outfit({
  weight: "400",
  display: "swap",
  preload: false,
});

export function MenuItem(props: Props) {
  return (
    <div className="py-2 text-2xl text-black hover:text-gray-400">
      <a
        className={`${OutfitFont.className}`}
        href={`${props.href}`}
      >{`${props.name}`}</a>
    </div>
  );
}
