import TopStories from "../top-stories/topStories";

const Review = () => {
  return (
    <div>
      <div className="flex flex-1">
        <div className="h-[250px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
        <p className="pl-6">
          <TopStories />
        </p>
      </div>
    </div>
  );
};

export default Review;
