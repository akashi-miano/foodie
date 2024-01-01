import React from "react";
import Navbar from "./componenets/Navbar";
import Hero from "./componenets/Hero";
import Services from "./componenets/Services";
import AppStore from "./componenets/AppStore";
import Footer from "./componenets/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <AppStore />
      <Footer />
    </div>
  );
}

export default App;
