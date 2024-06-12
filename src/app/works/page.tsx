import { WorksContainer } from "../components/WorksContainer/WorksContainer";
import { getImages } from "../utils/getImages";

export default async function Works() {
  const worksImages = getImages();
  return (
    <div>
      <WorksContainer worksImages={worksImages} />
    </div>
  );
}
