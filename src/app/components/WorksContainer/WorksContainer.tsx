import { Suspense } from "react";
import { WorksImageType } from "../../types";
import { Navbar } from "../Navbar/Navbar";
import { ClientSideWrapper } from "./ClientSideWrapper";
import WorksImages from "../WorksImages/WorksImage";

type Props = {
  worksImages: WorksImageType[];
};

export function WorksContainer({ worksImages }: Props) {
  return (
    <ClientSideWrapper>
      <div className="w-full">
        <Navbar />
        <div
          className="main fixed top-20 left-0 w-full overflow-y-scroll hidden-scrollbar p-0"
          style={{
            height: `calc(100vh - 80px)`,
            WebkitOverflowScrolling: "touch",
          }}
        >
          <Suspense fallback={<div>Loading images...</div>}>
            <WorksImages worksImages={worksImages} />
          </Suspense>
        </div>
      </div>
    </ClientSideWrapper>
  );
}
