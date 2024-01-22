import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ category, heading, subHeading, banner }) => {
  // const [cat,setCat]=useState("dessert")
  return (
    <section className=" my-16">
      {heading && (
        <Cover
          heading={heading}
          subHeading={subHeading}
          banner={banner}
        ></Cover>
      )}
      <div className="px-5 max-w-6xl mx-auto grid sm:grid-cols-2 justify-between gap-10 my-10">
        {category.map((item) => {
          return  <MenuItem key={item._id} item={item}></MenuItem>;
        })}
      </div>
      <div className="flex justify-center items-center">
        <Link to={`/shop/${heading}`}>
          <button className="uppercase  btn bg-transparent border-b-4 border-black ">
            ORDER YOUR FAVORITE FOOD
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MenuCategory;
