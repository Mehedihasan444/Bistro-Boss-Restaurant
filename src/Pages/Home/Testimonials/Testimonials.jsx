import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://bistro-boss-server-side-puce.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-16">
      <SectionTitle
        heading={"testimonials"}
        subHeading={"What Our Client Say"}
      ></SectionTitle>
      <div className="max-w-6xl  mx-auto">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((item) => {
            {
              return (
                <SwiperSlide key={item._id}>
                  <div className="text-center space-y-3" >
                    <div className="flex justify-center items-center">

                  <Rating style={{ maxWidth: 150 }} value={item.rating} readOnly className=""/>
                    </div>
                    <div className="flex justify-center items-center">

                    <FaQuoteLeft className="text-7xl"/>
                    </div>
                    <p className="w-3/4 mx-auto">{item.details}</p>
                    <h3 className=" text-lg text-yellow-600">{item.name}</h3>
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
