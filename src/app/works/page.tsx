import fs from "fs/promises";
import path from "path";
import { WorksContainer } from "../components/WorksContainer/WorksContainer";

export default async function WorksPage() {
  const worksImages = await getWorksImages();

  return <WorksContainer worksImages={worksImages} />;
}

export const dynamic = "force-static";

async function getWorksImages() {
  const genrePath = path.join(process.cwd(), "public", "Works", "genre");
  const genre = await fs.readdir(genrePath);

  return Promise.all(
    genre.map(async (g) => {
      const imagesPath = path.join(genrePath, g, "images");
      const thumbnailPath = path.join(genrePath, g, "thumbnail");

      const images = (await fs.readdir(imagesPath)).filter((file) =>
        /\.(jpg|png)$/i.test(file)
      );
      const thumbnailImages = (await fs.readdir(thumbnailPath)).filter((file) =>
        /\.(jpg|png)$/i.test(file)
      );

      return {
        title: g,
        thumbnail: `/Works/genre/${g}/thumbnail/${thumbnailImages[0]}`,
        worksImages: images.map((image) => `/Works/genre/${g}/images/${image}`),
      };
    })
  );
}
