export const WorksImageHooks = () => {
  const glob = require("glob");

  // public/Works/配下の画像をすべて取得する
  const getWorksImages = async () => {
    const worksImages = glob.sync("./public/*.{jpg,png}");
    console.log(worksImages);
  };

  return {
    getWorksImages,
  };
};
