import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="bg-cover h-screen my-16" style={{ backgroundImage: `url(${featuredImg})` }}>
         <div className=" h-screen bg-black bg-opacity-60  p-10">
      <SectionTitle
        heading={"Featured Item"}
        subHeading={"Check It Out"}
      ></SectionTitle>
      <div className="flex w-3/4 mx-auto gap-10 items-center text-white">
        <div className="">
          <img src={featuredImg} alt="" className="w-" />
        </div>
        <div className="space-y-3">
          <p className="">Aug 20, 2024</p>
          <p className="uppercase font-semibold text-xl">WHERE CAN I get some ?</p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            veritatis recusandae cupiditate quia pariatur eum officiis cum
            alias, debitis soluta ratione quis tempore repellendus doloremque
            dolore harum. Commodi, incidunt ea?
          </p>
          <button className="uppercase btn bg-transparent border-b-4 border-white text-white">Read More</button>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Featured;
