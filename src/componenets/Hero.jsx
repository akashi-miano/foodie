import React, { useState } from "react";
import bgImg from "../assets/vector3.png";
import food1 from "../assets/biryani2.png";
import food2 from "../assets/biryani3.png";
import food3 from "../assets/biryani5.png";

const imageList = [
  {
    id: 1,
    img: food1,
  },
  {
    id: 2,
    img: food2,
  },
  { id: 3, img: food3 },
];

const Hero = () => {
  const [imgId, setImgId] = useState(food1);

  const bgImgStyles = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  };

  return (
    <section
      style={bgImgStyles}
      className="flex items-center justify-center min-h-screen duration-200 bg-gray-100 dark:bg-gray-950 dark:text-white"
    >
      <div className="container py-8 sm:pb-0 px-4 max-w[1200px]">
        <div className="grid p-8 md:grid-cols-2 flow-content--m">
          <header
            className="flex flex-col justify-center order-2 mt-8 text-center md:text-left flow-content--m md:order-0 md:mt-0"
            data-aos="zoom-out"
            data-aos-duration="400"
          >
            <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl">
              Welcome to the <span className="text-primary">Foodie</span> Zone
            </h1>
            <p className="max-w-[450px] mx-auto md:-mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              ipsam officia ducimus recusandae doloremque quos accusamus
              distinctio quaerat dignissimos unde?
            </p>
            <div className="">
              <button className="px-4 py-2 text-white duration-200 rounded-full cursor-pointer bg-gradient-to-r from-primary to-secondary hover:scale-105">
                Order Now
              </button>
            </div>
          </header>
          <div
            className="flex flex-col items-center gap-4 img-wrapper lg:flex-row md:order-2"
            data-aos="fade-left"
            data-aos-duration="600"
          >
            <div>
              <img
                src={imgId}
                alt=""
                className="w-[300px] sm:w-[450px] mx-auto spin"
              />
            </div>
            <div className="flex gap-4 px-2 rounded-full lg:flex-col bg-white/30 lg:py-2">
              {imageList.map((item) => (
                <img
                  key={item.id}
                  src={item.img}
                  className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200 cursor-pointer"
                  data-aos="zoom-in"
                  data-aos-duration="400"
                  onClick={() => {
                    setImgId(
                      item.id === 1 ? food1 : item.id === 2 ? food2 : food3
                    );
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
