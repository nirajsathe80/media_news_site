import NewsLetter from "@/src/common/news-letter/newsLetter";
import PageStructure from "@/src/common/page-structure";
import Pagination from "@/src/components/pagination/pagination";
import LifeStyleNews from "@/src/components/lifestyle/life-style-json/index.json";

const LifeStylePage = () => {
  const { lifestyleNews } = LifeStyleNews;
  return (
    <>
      <PageStructure pageTitle="LifeStyle" newsArray={lifestyleNews} />
      <Pagination />
      <NewsLetter />
    </>
  );
};

export default LifeStylePage;
