import logoIcon from "../assets/food-logo.png";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-gray-200 dark:bg-gray-950 dark:text-white duration-250 py-12">
      <div className="container mx-auto max-w-[1200px] px-8 text-center md:text-left">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-wrapper flow-content--m">
            <a
              className="flex items-center text-zinc-900 text-3xl font-bold gap-4 dark:text-white justify-center md:justify-start"
              href=""
            >
              <img src={logoIcon} alt="" className="w-[50px]" /> Foodie
            </a>
            <p className="text-center md:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur quisquam quibusdam magni, exercitationem facere
              consequatur.
            </p>
            <p className="flex items-center gap-4 justify-center md:justify-start">
              <FaLocationArrow /> Noida, Uttar Pradesh
            </p>
            <p className="flex items-center gap-4 justify-center md:justify-start">
              <FaMobileScreen /> +91 123456789
            </p>
            <ul className="socials flex items-center gap-4 justify-center md:justify-start">
              <li>
                <a href="">
                  <FaInstagram fontSize={25} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebook fontSize={25} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedin fontSize={25} />
                </a>
              </li>
            </ul>
          </div>
          <ul>
            <header>
              <h2 className="text-2xl font-bold">Important Links</h2>
            </header>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
          <ul>
            <header>
              <h2 className="text-2xl font-bold">Important Links</h2>
            </header>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
          <ul>
            <header>
              <h2 className="text-2xl font-bold">Important Links</h2>
            </header>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
