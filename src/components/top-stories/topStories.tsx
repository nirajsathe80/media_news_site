import React from "react";
import Link from "next/link";
import { TopStoriesBlogData } from "@/src/response/top-stories.response";
import TopStoriesJson from "./top-stories-news.json";
import categorySvg from "../../../public/category.svg";
import Image from "next/image";

const TopStories = () => {
  const { topStories } = TopStoriesJson;
  return (
    <React.Fragment>
      <div className="container my-24 mx-auto md:px-6 mt-[50px]">
        <section className="mb-32 text-center">
          <h2 className="mb-12 text-center text-[26px] font-bold">
            Top Stories
          </h2>

          <div className="grid gap-6 grid-cols-3 xl:gap-x-12">
            {topStories.map((data: TopStoriesBlogData, index: number) => {
              const { category, content, title, writer, src } = data;
              const truncatedContent =
                content.split(" ").slice(0, 20).join(" ") +
                (content.split(" ").length > 20 ? "..." : "");
              const dynamicId = title.replace(/\s+/g, "-");
              return (
                <div className="mb-6" key={index}>
                  <Link href="/blog/[id]" as={`/blog/${dynamicId}`}>
                    <div
                      className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 hover:scale-105 transition duration-500"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img src={src} className="w-full" alt="Louvre" />

                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                    </div>

                    <h5 className="mb-3 text-lg font-bold">{title}</h5>
                    <div className="mb-3 flex items-center gap-1 justify-center text-sm font-medium text-danger ">
                      <Image
                        src={categorySvg}
                        alt="category-svg"
                        height={20}
                        width={20}
                      />
                      {category}
                    </div>
                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                      <small>
                        Published on <u>13.01.2022</u> by{" "}
                        <Link href={"/#"}>{writer}</Link>
                      </small>
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-300">
                      {truncatedContent}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default TopStories;
