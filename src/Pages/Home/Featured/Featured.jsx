import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="bg-cover sm:h-screen my-16"
      style={{ backgroundImage: `url(${featuredImg})` }}
    >
      <div className=" h-screen bg-black bg-opacity-60 p-3 sm:p-10">
        <div className="mx-auto md:w-4/12 my-8 text-center">
          <p className="text-yellow-600 mb-2">---Check It Out---</p>
          <h3 className="text-2xl sm:text-4xl uppercase border-y-2 py-4 text-white">
            Featured Item{" "}
          </h3>
        </div>
        <div className="sm:flex lg:w-3/4 mx-auto gap-3 sm:gap-10 items-center text-white">
          <div className="">
            <img
              src={featuredImg}
              alt=""
              className="rounded-md w-44 sm:w-auto"
            />
          </div>
          <div className="space-y-1 sm:space-y-3">
            <p className="">Aug 20, 2024</p>
            <p className="uppercase font-semibold text-xl">
              WHERE CAN I get some ?
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              veritatis recusandae cupiditate quia pariatur eum officiis cum
              alias, debitis soluta ratione quis tempore repellendus doloremque
              dolore harum. Commodi, incidunt ea?
            </p>
            <button className="uppercase btn bg-transparent border-b-4 border-white text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
