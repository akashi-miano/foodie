import playStoreImg from "../assets/play_store.png";
import appStoreImg from "../assets/app_store.png";
import mobileBikeImg from "../assets/mobile_bike.gif";
const AppStore = () => {
  return (
    <section className="py-16 duration-200 bg-gray-200 dark:bg-gray-950">
      <div className="contents-wrapper container mx-auto max-w-[1200px] px-8 grid md:grid-cols-2 items-center">
        <header
          className="order-2 mx-auto mt-8 flow-content--m md:order-1 md:mx-0 md:mt-0"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h2 className="text-3xl text-zinc-700 font-bold max-w-[270px] dark:text-white duration-200">
            Foodly is Available for Android and IOS
          </h2>
          <div className="flex flex-col items-center justify-center md:items-start">
            <img src={playStoreImg} alt="" className="w-[150px] inline-block" />
            <img src={appStoreImg} alt="" className="w-[150px] inline-block" />
          </div>
        </header>
        <div
          className="order-1 img-wrapper md:order-2"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <img src={mobileBikeImg} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default AppStore;
