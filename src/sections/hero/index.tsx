// import { useNavigate } from "react-router-dom";
import texture from "/assets/images/texture.png";
import heroDress from "/assets/images/heroDress.png";
import Minicard from "../../components/Minicard";

const Hero = () => {
  // const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-2 max-w-[1440px] mx-auto h-[536.5px] overflow-x-hidden 2sm:h-[600px] 2lg:h-[calc(100vh-68px)] max-h-[1024px]">
        <div className="bg-white absolute top-0 left-0  w-full h-[590px] 2sm:h-[650px] overflow-y-hidden 2lg:h-[100vh] max-h-[1024px]">
          <div className="h-full w-full relative max-w-[1440px] mx-auto">
            <div className="absolute z-50 left-[20px] lg:left-[50px] 2lg:left-[90px] top-[13%] 2lg:top-[15%] bg-[#DD3FC0] bg-opacity-10">
              <Minicard
                desc="Red ankara gown sumami crimison black"
                price={30000}
                id={1}
              />
            </div>
            <img
              className="absolute z-40 bottom-0 2xl:-bottom-6 w-[243.75px] 2sm:w-[280px] left-2/4 -translate-x-2/4 2lg:w-[310px] 2xl:w-[350px]"
              src={heroDress}
              alt=""
            />
            <h1 className="font-playfair text-[64px] 2sm:text-[80px] 2xl:text-[90px] uppercase absolute top-1/2 -translate-y-[57%] z-30 left-1/2 -translate-x-1/2 flex gap-20 2sm:gap-[100px] lg:gap-[17px]">
              <span className="lg:hidden relative">
                Fas
                <div className="absolute top-[90px] text-[12px] font-montserrat normal-case text-black-500 2sm:top-[110px]">
                  <pre>
                    is simply dummy{"\n"}text of the printing and{"\n"}
                    typesetting{"\n"}industry. Lorem Ipsum
                  </pre>
                  <button className="text-white bg-[#984288] shadow-xl px-[10px] py-[7px] mt-[10px]">
                    Shop Now
                  </button>
                </div>
              </span>
              <span className="text-white lg:hidden">hion</span>
              <span className="hidden lg:block xl:hidden relative">
                fashio
                <div className="absolute top-[110px] text-[12px] font-montserrat normal-case text-black-500 w-[240px]">
                  <p>
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book.
                  </p>
                  <button className="text-white bg-[#984288] shadow-xl px-[10px] py-[7px] mt-[10px]">
                    Shop Now
                  </button>
                </div>
              </span>
              <span className="text-white hidden lg:block xl:hidden">
                llection
              </span>
              <span className="hidden xl:block relative">
                fashion
                <div className="absolute top-[110px] 2xl:top-[130px] text-[16px] font-montserrat normal-case text-black-500 3xl:top-[150px]">
                  <p>
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book.
                  </p>
                  <button className="text-white bg-[#984288] shadow-xl 2xl:mt-[20px] 2xl:text-[18px] shadow-sm px-[10px] py-[7px] mt-[10px] cursor-pointer hover:bg-opacity-80">
                    Shop Now
                  </button>
                </div>
              </span>
              <span className="text-white hidden xl:block">collection</span>
            </h1>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#A1419C] to-[#812ABE] absolute top-0 right-0 max-w-[50%] w-full h-[590px] 2sm:h-[650px] 2lg:h-[100vh] max-h-[1024px] overflow-y-hidden">
          <img className="opacity-40 w-full h-screen" src={texture} alt="" />
          <div className="absolute z-[60] bottom-[15%] xl:bottom-[20%] 2xl:bottom-[23%] lg:left-[65px] 2lg:left-[80px] xl:left-[140px] 2xl:left-[220px] text-white bg-white bg-opacity-20 whitespace-pre-line">
            <Minicard
              desc="Red ankara gown sumami crimison black"
              price={30000}
              id={1}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
