import NewsLetter from "@/src/common/news-letter/newsLetter";
import PageStructure from "@/src/common/page-structure";
import Pagination from "@/src/components/pagination/pagination";
import PoliticalNews from "../../src/components/politics/politicsJson/politics-news.json";

const PoliticsPage = () => {
  const { politicsNews } = PoliticalNews;
  return (
    <>
      <PageStructure pageTitle="Politics" newsArray={politicsNews} />
      <Pagination />
      <NewsLetter />
    </>
  );
};

export default PoliticsPage;
