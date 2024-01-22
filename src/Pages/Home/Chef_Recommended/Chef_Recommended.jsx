import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../../Shared/FoodCard/FoodCard";


const Chef_Recommended = () => {
    const [menu] = useMenu();

    const recommended = menu.filter((item) => item.category === "recommended");
  
    return (
        <div className="">
            <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"Should Try"}></SectionTitle>
             <div className="max-w-7xl mx-auto gap-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-5">
            {
                recommended.slice(0,3).map((item) => {
                    return (
                        <div key={item._id}>
                            <FoodCard item={item} />
                        </div>
                    )
                })
            }
        </div>
        </div>
       
    );
};

export default Chef_Recommended;