import { NextResponse } from "next/server";

export function POST() {
  const getGenre = (): string[] => {
    const glob = require("glob");

    const genre = glob.sync("./public/Works/genre/*");
    return genre;
  };
  const glob = require("glob");
  const genre = getGenre();

  const worksImages = genre.map((g) => {
    const images: string[] = glob.sync(`${g}/images/*.{jpg,png}`);
    const thumbnailImage: string = glob.sync(`${g}/thumbnail/*.{jpg,png}`);

    return {
      title: g.split("/")[3],
      thumbnail: thumbnailImage[0].slice(6),
      worksImages: images.map((image) => {
        return image.slice(6);
      }),
    };
  });

  return NextResponse.json(worksImages);
}
