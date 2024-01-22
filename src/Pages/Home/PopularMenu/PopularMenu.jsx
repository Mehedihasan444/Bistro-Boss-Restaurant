import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu] = useMenu();

  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="max-w-6xl mx-auto">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Menu"}
      ></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-10 my-10 px-10 lg:px-0">
        {popular.map((item) => {
          return <MenuItem key={item._id} item={item}></MenuItem>;
        })}
      </div>
      <div className="flex justify-center items-center">
        <Link to="/menu">
          <button className="uppercase  btn bg-transparent border-b-4 border-black ">
          view full menu
        </button>
        </Link>
        
      </div>
    </section>
  );
};

export default PopularMenu;
