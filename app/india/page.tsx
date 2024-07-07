"use client";

import PageStructure from "@/src/common/page-structure";
import IndiaNews from "../../src/components/India/indiaNewsJson/india-news.json";
import Pagination from "@/src/components/pagination/pagination";
import NewsLetter from "@/src/common/news-letter/newsLetter";

const IndiaPage = () => {
  const { news } = IndiaNews;
  return (
    <>
      <PageStructure pageTitle="India" newsArray={news} />
      <Pagination />
      <NewsLetter />
    </>
  );
};

export default IndiaPage;
