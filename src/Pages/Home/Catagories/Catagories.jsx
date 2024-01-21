import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Catagories = () => {

  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };



  return (
    <section className="my-10 max-w-6xl mx-auto">
      <SectionTitle
        heading={"Order Online"}
        subHeading={"From 11.00 am to 10.00 pm"}
      ></SectionTitle>
      <Swiper
        // slidesPerView={5}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
        breakpoints={breakpoints}
      >
        <SwiperSlide>
          <img
            src={slide1}
            alt=""
            className="transform transition-transform duration-300 ease-in-out hover:scale-105 rounded-md"
          />
          <div className="absolute bottom-4  right-0 left-0">
            <p className=" text-white font-semibold text-xl text-center">
              Salads
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide2}
            alt=""
            className="transform transition-transform duration-300 ease-in-out hover:scale-105 rounded-md"
          />

          <div className="absolute bottom-4  right-0 left-0">
            <p className=" text-white font-semibold text-xl text-center">
              Soups
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide3}
            alt=""
            className="transform transition-transform duration-300 ease-in-out hover:scale-105 rounded-md"
          />
          <div className="absolute bottom-4  right-0 left-0">
            <p className=" text-white font-semibold text-xl text-center">
              pizzas
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide4}
            alt=""
            className="transform transition-transform duration-300 ease-in-out hover:scale-105 rounded-md"
          />
          <div className="absolute bottom-4  right-0 left-0">
            <p className=" text-white font-semibold text-xl text-center">
              desserts
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide5}
            alt=""
            className="transform transition-transform duration-300 ease-in-out hover:scale-105 rounded-md"
          />
          <div className="absolute bottom-4  right-0 left-0">
            <p className=" text-white font-semibold text-xl text-center">
              Salads
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide5}
            alt=""
            className=" transform transition-transform duration-300 ease-in-out hover:scale-105 rounded-md"
          />
          <div className="absolute bottom-4  right-0 left-0">
            <p className=" text-white font-semibold text-xl text-center">
              Drinks
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Catagories;
