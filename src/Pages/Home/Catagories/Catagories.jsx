
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Catagories = () => {
    return (
        <section className='my-10 max-w-6xl mx-auto'>
          <SectionTitle heading={'Order Online'} subHeading={'From 11.00 am to 10.00 pm' }></SectionTitle>
             <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide ><img src={slide1} alt="" className="" />
        <p className="absolute bottom-4  right-36 text-white font-semibold text-xl">Salads</p></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" className="" /><p className="absolute bottom-4  right-36 text-white font-semibold text-xl">Soups</p></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" className="" /><p className="absolute bottom-4  right-36 text-white font-semibold text-xl">pizzas</p></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" className="" /><p className="absolute bottom-4  right-36 text-white font-semibold text-xl">desserts</p></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" className="" /><p className="absolute bottom-4  right-36 text-white font-semibold text-xl">Salads</p></SwiperSlide>
        
      </Swiper>
        </section>
    );
};

export default Catagories;