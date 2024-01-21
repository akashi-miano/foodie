import food1 from "../assets/biryani2.png";
import food3 from "../assets/biryani5.png";
import { GrSecure } from "react-icons/gr";
import { GiFoodTruck } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";

const Services = () => {
  return (
    <section
      className="py-24 duration-200 dark:bg-gray-950 dark:text-white"
      id="services"
    >
      <header
        className="mb-8 text-center flow-content--s"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <p className="text-primary">Our Services</p>
        <h2 className="text-4xl font-bold">Services</h2>
        <p className="max-w-[450px] mx-auto text-zinc-500 text-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam beatae,
          iure quam porro in possimus.
        </p>
      </header>
      <div className="container mx-auto  max-w-[1200px]">
        <div className="grid gap-4 px-4 duration-200 cards-wrapper md:grid-cols-3">
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="p-4 text-center duration-200 bg-white shadow-xl cursor-pointer card flow-content--s hover:scale-105 hover:bg-primary hover:text-white rounded-2xl dark:bg-gray-900 dark:text-white group"
          >
            <img src={food1} alt="" className="w-[250px] mx-auto px-4" />
            <h3 className="text-2xl font-bold">Biryani</h3>
            <p className="text-zinc-500 dark:text-white group-hover:text-white max-w-[450px] mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              nihil voluptate laboriosam numquam labore eos!
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="p-4 text-center duration-200 bg-white shadow-xl cursor-pointer card flow-content--s hover:scale-105 hover:bg-primary hover:text-white rounded-2xl dark:bg-gray-900 dark:text-white group"
          >
            <img src={food1} alt="" className="w-[250px] mx-auto px-4" />
            <h3 className="text-2xl font-bold">Biryani</h3>
            <p className="text-zinc-500 dark:text-white group-hover:text-white max-w-[450px] mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              nihil voluptate laboriosam numquam labore eos!
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="800"
            className="p-4 text-center duration-200 bg-white shadow-xl cursor-pointer card flow-content--s hover:scale-105 hover:bg-primary hover:text-white rounded-2xl dark:bg-gray-900 dark:text-white group"
          >
            <img src={food1} alt="" className="w-[250px] mx-auto px-4" />
            <h3 className="text-2xl font-bold">Biryani</h3>
            <p className="text-zinc-500 dark:text-white group-hover:text-white max-w-[450px] mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              nihil voluptate laboriosam numquam labore eos!
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 wrapper">
        <div
          className="grid md:grid-cols-2 items-center container mx-auto max-w[1200px]"
          data-aos="slide-up"
          data-aos-duration="400"
        >
          <div
            className="w-full img-wrapper"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <img src={food3} alt="" />
          </div>
          <div
            className="px-4 text-center text-content flow-content--m md:text-left"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            <h4 className="text-3xl font-bold">Lorem, ipsum dolor.</h4>
            <p className="text-zinc-600 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              quasi tenetur accusantium id iste nostrum reiciendis rem
              voluptatibus voluptate necessitatibus! Unde voluptas adipisci
              laborum nulla.
            </p>
            <div className="flex items-center justify-center gap-4 icons-wrapper dark:text-white md:justify-start">
              <GrSecure
                size={60}
                className="p-2 bg-gray-200 rounded-full dark:bg-purple-400"
              />
              <IoFastFoodSharp
                size={60}
                className="p-2 bg-gray-200 rounded-full dark:bg-orange-400"
              />
              <GiFoodTruck
                size={60}
                className="p-2 bg-gray-200 rounded-full dark:bg-green-400"
              />
            </div>
            <a className="inline-block px-4 py-2 mx-auto mt-2 text-white duration-200 rounded-full cursor-pointer bg-gradient-to-r from-primary to-secondary hover:scale-105 w-fit md:mx-0 md:mt-0">
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
