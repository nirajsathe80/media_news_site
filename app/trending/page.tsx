import NewsLetter from "@/src/common/news-letter/newsLetter";
import Pagination from "@/src/components/pagination/pagination";
import Trending from "@/src/components/trending/trending";

const TrendingPage = () => {
  return (
    <>
      <Trending />
      <Pagination />
      <NewsLetter />
    </>
  );
};

export default TrendingPage;
