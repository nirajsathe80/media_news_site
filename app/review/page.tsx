import NewsLetter from "@/src/common/news-letter/newsLetter";
import Pagination from "@/src/components/pagination/pagination";
import Review from "@/src/components/review/review";

const ReviewPage = () => {
  return (
    <>
      <Review />
      <Pagination />
      <NewsLetter />
    </>
  );
};

export default ReviewPage;
