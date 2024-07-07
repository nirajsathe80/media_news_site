import { newsLetter } from "@/src/components/types";
import Link from "next/link";

interface PageStructureProps {
  pageTitle: string;
  newsArray: Array<newsLetter>;
}

const PageStructure = ({ pageTitle, newsArray }: PageStructureProps) => {
  return (
    <div className="container mb-24 mt-5 mx-auto md:px-6">
      <section className="mb-32 text-center md:text-left">
        <h2 className="mb-12 text-center text-[20px] font-bold">{pageTitle}</h2>

        {newsArray.map((data: newsLetter, index: number) => {
          const { src, category, content, title, writer } = data;
          const truncatedContent =
            content.split(" ").slice(0, 20).join(" ") +
            (content.split(" ").length > 20 ? "..." : "");
          const dynamicId = title.replace(/\s+/g, "-");
          return (
            <div className="mb-6 flex flex-wrap" key={index}>
              <div className="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                <div
                  className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg hover:scale-105 transition duration-500 ease-in-out"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img src={src} className="w-full max-h-60" alt="Louvre" />
                  <Link
                    href={`/${category}/[id]`}
                    as={`/${category}/${dynamicId}`}
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"
                  />
                </div>
              </div>

              <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                <h5 className="mb-3 text-lg font-bold">{title}</h5>
                <div className="mb-3 flex items-center justify-center text-sm font-medium text-danger md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                    />
                  </svg>
                  {category}
                </div>
                <p className="mb-6 text-neutral-500">
                  <small>
                    Published on <div>13.01.2022</div> by
                    <Link href={"#"} className="ml-2">
                      {writer}
                    </Link>
                  </small>
                </p>
                <p className="text-neutral-500">{truncatedContent}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default PageStructure;
