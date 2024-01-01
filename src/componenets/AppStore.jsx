import playStoreImg from "../assets/play_store.png";
import appStoreImg from "../assets/app_store.png";
import mobileBikeImg from "../assets/mobile_bike.gif";
const AppStore = () => {
  return (
    <section className="py-16 bg-gray-200 dark:bg-gray-950 duration-200">
      <div className="contents-wrapper container mx-auto max-w-[1200px] px-8 grid md:grid-cols-2 items-center">
        <header className="flow-content--m order-2 md:order-1 mt-8 mx-auto md:mx-0 md:mt-0">
          <h2 className="text-3xl text-zinc-700 font-bold max-w-[270px] dark:text-white duration-200">
            Foodly is Available for Android and IOS
          </h2>
          <div className="flex justify-center flex-col items-center md:items-start">
            <img src={playStoreImg} alt="" className="w-[150px] inline-block" />
            <img src={appStoreImg} alt="" className="w-[150px] inline-block" />
          </div>
        </header>
        <div className="img-wrapper order-1 md:order-2">
          <img src={mobileBikeImg} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default AppStore;
