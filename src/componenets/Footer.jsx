import logoIcon from "../assets/food-logo.png";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="py-12 bg-gray-200 footer dark:bg-gray-950 dark:text-white duration-250"
      data-aos="zoom-in"
      data-aos-delay="600"
    >
      <div className="container mx-auto max-w-[1200px] px-8 text-center md:text-left">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="text-wrapper flow-content--m">
            <a
              className="flex items-center justify-center gap-4 text-3xl font-bold text-zinc-900 dark:text-white md:justify-start"
              href=""
            >
              <img src={logoIcon} alt="" className="w-[50px]" /> Foodie
            </a>
            <p className="text-center md:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur quisquam quibusdam magni, exercitationem facere
              consequatur.
            </p>
            <p className="flex items-center justify-center gap-4 md:justify-start">
              <FaLocationArrow /> Noida, Uttar Pradesh
            </p>
            <p className="flex items-center justify-center gap-4 md:justify-start">
              <FaMobileScreen /> +91 123456789
            </p>
            <ul className="flex items-center justify-center gap-4 socials md:justify-start">
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
