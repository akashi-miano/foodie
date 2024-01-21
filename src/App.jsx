import React, { useEffect } from "react";
import Navbar from "./componenets/Navbar";
import Hero from "./componenets/Hero";
import Services from "./componenets/Services";
import AppStore from "./componenets/AppStore";
import Footer from "./componenets/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from "./componenets/Testimonials";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <AppStore />
      <Footer />
    </div>
  );
}

export default App;
