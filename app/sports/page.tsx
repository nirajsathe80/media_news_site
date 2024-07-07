import PageStructure from "@/src/common/page-structure";
import Pagination from "@/src/components/pagination/pagination";
import SportsData from "@/src/components/sports/sportsJson/sports-news.json";
import NewsLetter from "@/src/common/news-letter/newsLetter";

const SportsPage = () => {
  const { sportsNews } = SportsData;
  return (
    <>
      <PageStructure pageTitle="Sports" newsArray={sportsNews} />
      <Pagination />
      <NewsLetter />
    </>
  );
};

export default SportsPage;
