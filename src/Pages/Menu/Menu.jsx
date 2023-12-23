import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import banner3 from "../../assets/menu/banner3.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
const Menu = () => {
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      {/* ------------------- */}
      <Cover
        banner={banner3}
        heading="Our Menu"
        subHeading={"Would you link to try a dish?"}
      ></Cover>
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Today's Offer"}
      ></SectionTitle>
      <MenuCategory category={offered}></MenuCategory>

      {/* ------------------------------ */}
      <MenuCategory
        category={dessert}
        heading={"dessert"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        banner={dessertImg}
      ></MenuCategory>
      {/* ------------------ */}

      <MenuCategory
        category={pizza}
        heading={"pizza"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        banner={pizzaImg}
      ></MenuCategory>
     
      {/* ------------------ */}

      <MenuCategory
        category={soup}
        heading={"soup"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        banner={soupImg}
      ></MenuCategory>
      {/* ------------------ */}

      <MenuCategory
        category={salad}
        heading={"salad"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        banner={saladImg}
      ></MenuCategory>
      {/* ------------------ */}
    </div>
  );
};

export default Menu;
