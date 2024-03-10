import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import FooterSection from "../sections/footer";
import Hero from "../sections/hero";
import Newarrivals from "../sections/newarrivals";
import sectionImage from "/assets/images/elegance.png";
// import Minicard from "../components/Minicard"

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Hero />
      <Newarrivals />
      {/* <section className="grid grid-cols-2 px-[74.5px] mb-10 gap-7 mt-[123px]">
        <div className="w-full h-full relative flex justify-center items-center -z-10">
          <img src="/assets/images/dress3.png" alt="" />
          <div className="absolute bottom-4 ">
            <Button
              text={"DRESSES"}
              paddingX={"px-20"}
              bgColor={"bg-[#ECE7FA5C]"}
              textColor={"text-white"}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-7 -z-10">
          <div className="relative flex justify-center">
            <img src="/assets/images/bag1.png" alt="" />
            <div className="absolute bottom-4 ">
              <Button
                text={"BAGS"}
                paddingX={"px-20"}
                bgColor={"bg-[#ECE7FA5C]"}
                textColor={"text-white"}
              />
            </div>
          </div>
          <div className="relative flex justify-center -z-10">
            <img src="/assets/images/bag2.png" alt="" />
            <div className="absolute bottom-4 ">
              <Button
                text={"BAGS"}
                paddingX={"px-20"}
                bgColor={"bg-[#ECE7FA5C]"}
                textColor={"text-white"}
              />
            </div>
          </div>
          <div className="relative flex justify-center -z-10">
            <img src="/assets/images/bag3.png" alt="" />
            <div className="absolute bottom-4 ">
              <Button
                text={"BAGS"}
                paddingX={"px-20"}
                bgColor={"bg-[#ECE7FA5C]"}
                textColor={"text-white"}
              />
            </div>
          </div>
          <div className="relative flex justify-center -z-10">
            <img src="/assets/images/bag4.png" alt="" />
            <div className="absolute bottom-4 ">
              <Button
                text={"BAGS"}
                paddingX={"px-20"}
                bgColor={"bg-[#ECE7FA5C]"}
                textColor={"text-white"}
              />
            </div>
          </div>
        </div>
      </section> */}
      <section
        className="bg-cover bg-center w-full px-10 lg:px-[74.5px] mt-20 flex justify-center items-center lg:grid grid-cols-2 py-20 lg:h-[905px] relative"
        style={{ backgroundImage: `url(${sectionImage})` }}
      >
        <div></div>
        <div className="overlay absolute top-0 inset-0 bg-black opacity-40" />
        <div className="flex flex-col justify-center items-start space-y-5 text-white relative z-20 ">
          <p className="font-playfair text-4xl">
            We are all about <br /> Elegance
          </p>
          <p className="font-montserrat">
            Lustrous yet understated. The new evening wear
            <br /> collection exclusively offered at the reopened Giorgio <br />{" "}
            Armani boutique in Los Angeles.
          </p>
          <Button
            text={"About Us"}
            bgColor={"bg-white"}
            textColor={"text-black"}
            paddingX={"px-8"}
            onClick={() => {
              navigate("/shop");
            }}
          />
        </div>
      </section>
      <Newarrivals />
      <FooterSection />
    </>
  );
};

export default Home;
