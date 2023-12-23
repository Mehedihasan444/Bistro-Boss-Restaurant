import Banner from "./Banner/Banner";
import Catagories from "./Catagories/Catagories";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagories/>
            <PopularMenu></PopularMenu>
            <Featured/>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;