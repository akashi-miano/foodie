import Slider from "./Slider";
const Testimonials = () => {
  return (
    <section className="py-16 dark:bg-gray-900 dark:text-white">
      <div className="container">
        <header
          className="mb-8 text-center flow-content--s"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <p className="text-primary">Our Services</p>
          <h2 className="text-4xl font-bold">Testimonials</h2>
          <p className="max-w-[450px] mx-auto text-zinc-500 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
            beatae, iure quam porro in possimus.
          </p>
        </header>
        <div className="testimonials__contents">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
