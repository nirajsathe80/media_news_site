import Footer from "@/src/common/footer";
import Header from "@/src/common/header";
import NewsLetter from "@/src/common/news-letter/newsLetter";
import Pagination from "@/src/components/pagination/pagination";
import Review from "@/src/components/review/review";

const ReviewPage = () => {
  return (
    <div>
      <Header />
      <Review />
      <Pagination />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ReviewPage;
