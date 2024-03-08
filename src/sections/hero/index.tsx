import { useNavigate } from "react-router-dom";
import Minicard from "../../components/Minicard";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="sm:px-10 pt-10 bg-white hidden sm:block relative"
      style={{
        background: "linear-gradient(to right, white 50%, purple 50%)",
      }}
    >
      <Minicard
        desc="Red ankara gown sumami crimison black"
        price={30000}
        id={10}
      />
      <div className="hidden sm:flex justify-center text-lg sm:text-3xl md:text-3xl lg:pt-0 lg:text-7xl font-playfair pt-10 text-black">
        FASHION C
        <span className="bg-gradient-to-r from-black to-white bg-clip-text text-transparent">
          O
        </span>
        <span className="text-white">LLECTION</span>
      </div>
      <div className="grid grid-cols-2 sm:flex justify-between">
        <div className="w-full hidden sm:block col-start-2 text-white px-5 sm:pl-0 sm:w-1/2 sm:pr-10 lg:block my-8 sm:text-[#24242499]">
          We only sell quality items, so click the shop now and get started
        </div>
        <div className="w-full col-start-1 row-start-1 text-xl text-black sm:w-1/2 my-8 flex justify-center items-center sm:pl-10 sm:text-white font-playfair sm:hidden">
          CHAPTER 40 FASHION
        </div>
      </div>
      <div className="flex justify-between items-center pl-5 sm:px-0">
        <button
          className="font-roboto text-lg border h-14 border-[#4E4D93]  mb-10 bg-[#984288] flex items-center justify-center px-2 sm:px-8 text-white "
          onClick={() => navigate("/shop")}
        >
          Shop Now
        </button>
        <Minicard
          desc="Red ankara gown sumami crimison black"
          price={30000}
          id={10}
        />
      </div>
    </section>
  );
};
export default Hero;
