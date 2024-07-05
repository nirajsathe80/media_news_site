"use client";
import Footer from "@/src/common/footer";
import Header from "@/src/common/header";
import PageStructure from "@/src/common/page-structure";
import IndiaNews from "../../src/components/India/indiaNewsJson/india-news.json";
import Pagination from "@/src/components/pagination/pagination";
import NewsLetter from "@/src/common/news-letter/newsLetter";

const IndiaPage = () => {
  const { news } = IndiaNews;
  return (
    <div>
      <Header />
      <PageStructure pageTitle="India" newsArray={news} />
      <Pagination />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default IndiaPage;
