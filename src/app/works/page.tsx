import { Outfit } from "next/font/google";
import { Navbar } from "../components/Navbar";
const OutfitFont = Outfit({
  weight: "200",
  display: "swap",
  preload: false,
});
export default function Works() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className={`main fixed z-[-1] top-28 left-3 h-screen w-full`}>
        <div className=""></div>
        <div className="article-title ">
          <p
            className={`${OutfitFont.className} text-3xl text-black underline decoration-1`}
          >
            Articles
          </p>
        </div>
      </div>
    </div>
  );
}
