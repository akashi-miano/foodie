import food1 from "../assets/biryani2.png";
import food3 from "../assets/biryani5.png";
import { GrSecure } from "react-icons/gr";
import { GiFoodTruck } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";

const Services = () => {
  return (
    <section
      className="py-24 dark:bg-gray-950 dark:text-white duration-200"
      id="services"
    >
      <header className="flow-content--s text-center mb-8">
        <p className="text-primary">Our Services</p>
        <h2 className="text-4xl font-bold">Services</h2>
        <p className="max-w-[450px] mx-auto text-zinc-500 text-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam beatae,
          iure quam porro in possimus.
        </p>
      </header>
      <div className="container mx-auto  max-w-[1200px]">
        <div className="cards-wrapper grid md:grid-cols-3 px-4 gap-4 duration-200">
          <div className="card bg-white flow-content--s shadow-xl text-center p-4 cursor-pointer hover:scale-105 duration-200 hover:bg-primary hover:text-white rounded-2xl dark:bg-gray-900 dark:text-white group">
            <img src={food1} alt="" className="w-[250px] mx-auto px-4" />
            <h3 className="font-bold text-2xl">Biryani</h3>
            <p className="text-zinc-500 dark:text-white group-hover:text-white max-w-[450px] mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              nihil voluptate laboriosam numquam labore eos!
            </p>
          </div>
          <div className="card bg-white flow-content--s shadow-xl text-center p-4 cursor-pointer hover:scale-105 duration-200 hover:bg-primary hover:text-white rounded-2xl dark:bg-gray-900 dark:text-white group">
            <img src={food1} alt="" className="w-[250px] mx-auto px-4" />
            <h3 className="font-bold text-2xl">Biryani</h3>
            <p className="text-zinc-500 dark:text-white group-hover:text-white max-w-[450px] mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              nihil voluptate laboriosam numquam labore eos!
            </p>
          </div>
          <div className="card bg-white flow-content--s shadow-xl text-center p-4 cursor-pointer hover:scale-105 duration-200 hover:bg-primary hover:text-white rounded-2xl dark:bg-gray-900 dark:text-white group">
            <img src={food1} alt="" className="w-[250px] mx-auto px-4" />
            <h3 className="font-bold text-2xl">Biryani</h3>
            <p className="text-zinc-500 dark:text-white group-hover:text-white max-w-[450px] mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              nihil voluptate laboriosam numquam labore eos!
            </p>
          </div>
        </div>
      </div>
      <div className="wrapper mt-16">
        <div className="grid md:grid-cols-2 items-center container mx-auto max-w[1200px]">
          <div className="img-wrapper w-full">
            <img src={food3} alt="" />
          </div>
          <div className="text-content flow-content--m px-4 text-center md:text-left">
            <h4 className="font-bold text-3xl">Lorem, ipsum dolor.</h4>
            <p className="text-zinc-600 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              quasi tenetur accusantium id iste nostrum reiciendis rem
              voluptatibus voluptate necessitatibus! Unde voluptas adipisci
              laborum nulla.
            </p>
            <div className="icons-wrapper flex gap-4 items-center dark:text-black">
              <GrSecure size={60} className="bg-gray-200 p-2 rounded-full" />
              <IoFastFoodSharp
                size={60}
                className="bg-gray-200 p-2 rounded-full"
              />
              <GiFoodTruck
                size={60}
                className="bg-gray-200 p-2 rounded-full dark:text-black"
              />
            </div>
            <a className="bg-gradient-to-r mt-2 from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200 cursor-pointer inline-block w-fit mx-auto md:mx-0 md:mt-0">
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
