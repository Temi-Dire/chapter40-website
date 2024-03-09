// import { useNavigate } from "react-router-dom";
import texture from "/assets/images/texture.png";
import heroDress from "/assets/images/heroDress.png";

// import Minicard from "../../components/Minicard";

const Hero = () => {
  // const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-2 max-w-[1440px] mx-auto h-[536.5px] overflow-x-hidden 2sm:h-[600px] 2lg:h-[calc(100vh-68px)] max-h-[1024px]">
        <div className="bg-white absolute top-0 left-0  w-full h-[590px] 2sm:h-[650px] overflow-hidden 2lg:h-[100vh] max-h-[1024px]">
          <div className="h-full w-full relative">
            <img
              className="absolute z-40 bottom-0 w-[243.75px] 2sm:w-[280px] h-auto left-2/4 -translate-x-2/4 2lg:w-[340px] 2xl:w-[360px]"
              src={heroDress}
              alt=""
            />
            <h1 className="font-playfair text-[64px] 2sm:text-[80px] 2xl:text-[100px] uppercase absolute top-1/2 -translate-y-[70%] 2xl:-translate-y-[85%] z-30 left-1/2 -translate-x-1/2 flex gap-20 2sm:gap-[100px] lg:gap-[20px]">
              <span className="lg:hidden">Fas</span>
              <span className="text-white lg:hidden">hion</span>
              <span className="hidden lg:block xl:hidden">fashio</span>
              <span className="text-white hidden lg:block xl:hidden">
                llection
              </span>
              <span className="hidden xl:block">fashion</span>
              <span className="text-white hidden xl:block">collection</span>
            </h1>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#A1419C] to-[#812ABE]  absolute top-0 right-0 max-w-[50%] w-full h-[590px] 2sm:h-[650px] 2lg:h-[100vh] max-h-[1024px] overflow-hidden">
          <img className="opacity-40 w-full h-screen" src={texture} alt="" />
        </div>
      </div>
    </>
  );
};
export default Hero;
