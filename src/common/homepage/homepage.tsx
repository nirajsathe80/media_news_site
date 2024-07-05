"use client";

import LatestArticles from "@/src/components/latestArticles/latestArticles";
import RelatedArticles from "@/src/components/related-articles/relatedArticles";
import ShortTrending from "@/src/components/short-trending/shortTrending";
import Slide from "@/src/components/slide/slide";
import Timeline from "@/src/components/timeline/timeline";
import TopStories from "@/src/components/top-stories/topStories";

const HomePage = () => {
  return (
    <>
      <Slide />
      <LatestArticles />
      <ShortTrending />
      <TopStories />
      <Timeline />
      <RelatedArticles />
    </>
  );
};

export default HomePage;
