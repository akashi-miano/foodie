import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import person1 from "../assets/avatar-anisha.png";
import person2 from "../assets/avatar-ali.png";
import person3 from "../assets/avatar-richard.png";
import person4 from "../assets/avatar-shanai.png";

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={25}
      autoplay={true}
      pagination={{ clickable: true }}
      loopAdditionalSlides={1}
      className="grid items-center py-16"
      style={{ "--swiper-pagination-color": "#ff9c01" }}
    >
      <SwiperSlide>
        <div
          className="testimonial__content flex flex-col items-center bg-[#eceaea4f] px-8 py-4 text-center max-w-[550px] mx-auto relative shadow rounded-xl"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img
            src={person1}
            alt="Anisha's image"
            className="h-[100px] w-[100px] rounded-full transform -translate-y-1/2"
          />
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-primary">
            Anisha Li
          </h3>
          <p className="text-[#9095a7] text-md max-w-[450px] dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus
            esse vitae doloribus sit laborum expedita incidunt nam fugit
            consectetur tenetur aspernatur ad, neque fugiat!
          </p>
          <p className="absolute text-gray-300 -translate-y-[100%] text-9xl top-1/2 right-5 z-[-1]">
            ,,
          </p>
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="testimonial__content flex flex-col items-center bg-[#eceaea4f] px-8 py-4 text-center  min-h-[276px] max-w-[550px] mx-auto shadow relative rounded-xl"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <img
            src={person2}
            alt="Ali's image"
            className="h-[100px] w-[100px] rounded-full translate-y-[-50%]"
          />
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-primary">
            Ali
          </h3>
          <p className="text-[#9095a7] text-md max-w-[450px] dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus
            esse vitae doloribus sit laborum expedita incidunt nam fugit
            consectetur tenetur aspernatur ad, neque fugiat!
          </p>
          <p className="absolute text-gray-300 -translate-y-[125%] text-9xl top-1/2 right-5 z-[-1]">
            ,,
          </p>
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="testimonial__content flex flex-col items-center bg-[#eceaea4f] px-8 py-4 text-center  min-h-[276px] max-w-[550px] mx-auto shadow relative rounded-xl"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <img
            src={person3}
            alt="Richard's image"
            className="h-[100px] w-[100px] rounded-full translate-y-[-50%]"
          />
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-primary">
            Richard Watts
          </h3>
          <p className="text-[#9095a7] text-md max-w-[450px] dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus
            esse vitae doloribus sit laborum expedita incidunt nam fugit
            consectetur tenetur aspernatur ad, neque fugiat!
          </p>
          <p className="absolute text-gray-300 -translate-y-[125%] text-9xl top-1/2 right-5 z-[-1]">
            ,,
          </p>
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="testimonial__content flex flex-col items-center bg-[#eceaea4f] px-8 py-4 text-center max-w-[550px] mx-auto shadow relative rounded-xl">
          <img
            src={person4}
            alt="Shanai's image"
            className="h-[100px] w-[100px] rounded-full translate-y-[-50%]"
          />
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-primary">
            Shanai Gough
          </h3>
          <p className="text-[#9095a7] text-md max-w-[450px] dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus
            esse vitae doloribus sit laborum expedita incidunt nam fugit
            consectetur tenetur aspernatur ad, neque fugiat!
          </p>
          <p className="absolute text-gray-300 -translate-y-[100%] text-9xl top-1/2 right-5 z-[-1]">
            ,,
          </p>
        </div>{" "}
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
