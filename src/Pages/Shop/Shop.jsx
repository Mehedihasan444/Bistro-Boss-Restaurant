import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import banner from "../../assets/shop/banner2.jpg";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../Shared/FoodCard/FoodCard";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
const Shop = () => {
  const categories = ["dessert", "soup", "salad", "pizza"];
  const { category } = useParams();
  console.log("--",category)
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");

  // console.log(category)

  return (
    <div className="">
      <Helmet>
        <title>Bistro | Shop</title>
      </Helmet>
      <Cover
        heading={"Our Shop"}
        subHeading={"Would you like to try a dish"}
        banner={banner}
      ></Cover>
      <div className="max-w-6xl mx-auto flex justify-center my-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex justify-center my-10">
            <Tab>Dessert</Tab>
            <Tab>Soup</Tab>
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
          </TabList>

          <TabPanel>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 px-5 ">
              {dessert.map((item) => {
                return <FoodCard key={item._id} item={item}></FoodCard>;
              })}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 px-5">
              {soup.map((item) => {
                return <FoodCard key={item._id} item={item}></FoodCard>;
              })}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 px-5">
              {salad.map((item) => {
                return <FoodCard key={item._id} item={item}></FoodCard>;
              })}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 px-5">
              {pizza.map((item) => {
                return <FoodCard key={item._id} item={item}></FoodCard>;
              })}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
