import { WorksContainer } from "../components/WorksContainer/WorksContainer";
import { apiClient } from "../utils/baseApi";

export default async function Works() {
  const worksImages = await apiClient("/api/getImages", "POST");
  return (
    <div>
      <WorksContainer worksImages={worksImages} />
    </div>
  );
}
