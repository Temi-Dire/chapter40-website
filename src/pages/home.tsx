import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../sections/hero";
import Newarrivals from "../sections/newarrivals";
// import HomeGrid from "../components/HomeGrid";
import FooterSection from "../sections/footer";
// import sectionImage from "/assets/images/elegance.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Hero />
      <Newarrivals />
      {/* <HomeGrid /> */}
      <section className="max-w-[1440px] mx-auto w-full px-[20px] xl:px-[40px] 2xl:px-[58px] bg-[url('/assets/images/elegance.png')] bg-center bg-cover min-h-[358px] h-full md:h-[420px] lg:h-[500px] 2lg:h-[540px] xl:h-[600px] 2xl:h-[649px] relative max-h-[649px] my-[50px] overflow-hidden ">
        <div className="overlay absolute top-0 left-0 bottom-0 right-0 bg-black opacity-50"></div>
        <div className="absolute z-10 text-white-300 font-montserrat top-1/2 -translate-y-1/2 right-0 2lg:left-1/2 px-[20px] grid gap-[8px] md:gap-[12px] xl:gap-[15px] md:text-[16px] 2xl:text-[18px]">
          <h1 className="font-playfair text-[28px] whitespace-nowrap font-bold md:text-[32px] xl:text-[36px] 3xl:text-[40px]">
            We are all about Elegance
          </h1>
          <p className="max-w-[420px] w-full">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <button
            className="bg-white text-black text-[15px] px-[16px] py-[10px] font-light w-fit mt-[10px]"
            onClick={() => navigate("/about")}
            type="button"
          >
            About Us
          </button>
        </div>
        <p className="absolute -top-[90px] -right-[20px] text-white text-opacity-10 text-[300px] font-playfair bg-black h-[800px] w-[200px] pl-[30px]">
          Z
        </p>
      </section>
      <Newarrivals />
      <FooterSection />
    </>
  );
};

export default Home;
