import Cover from "../Shared/Cover/Cover";
import Banner from "./Banner/Banner";
import Catagories from "./Catagories/Catagories";
import ContactNumber from "./ContactNumber/ContactNumber";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";
import chef_service from "../../assets/home/chef-service.jpg"
import Chef_Recommended from "./Chef_Recommended/Chef_Recommended";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagories/>
            <Cover heading={"Bistro Boss"} subHeading={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."} banner={chef_service}/>
            <PopularMenu></PopularMenu>
            <ContactNumber/>
            <Chef_Recommended/>
            <Featured/>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;