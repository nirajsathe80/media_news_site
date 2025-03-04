const NewsSidebar = () => {
  return (
    <div className="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className="relative overflow-hidden bg-cover bg-no-repeat mt-5">
        <img
          className="rounded-t-lg"
          src="https://tecdn.b-cdn.net/img/new/standard/city/062.jpg"
          alt=""
        />
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
          Card title
        </h5>
        <p className="text-base text-neutral-600">
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </p>
      </div>
      <ul className="w-full">
        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3">
          Cras justo odio
        </li>
        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3">
          Dapibus ac facilisis in
        </li>
        <li className="w-full border-neutral-100 border-opacity-100 px-6 py-3">
          Vestibulum at eros
        </li>
      </ul>
      <div className="p-6">
        <a
          type="button"
          href="#"
          className="pointer-events-auto mr-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
        >
          Card Link
        </a>
        <a
          type="button"
          href="#"
          className="pointer-events-auto inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
        >
          Another Link
        </a>
      </div>
    </div>
  );
};

export default NewsSidebar;
