import Button from "../components/Button";
import Footer from "../components/Footer/Footer";
import FooterItem from "../components/Footer/FooterItem";
import Navbar from "../components/Navbar";
import FooterSection from "../sections/footer";
import Hero from "../sections/hero";
import Newarrivals from "../sections/newarrivals";
import sectionImage from "/assets/images/elegance.png";
// import Minicard from "../components/Minicard"

const Home = () => {
  const menu = [
    "New Arrivals",
    "Best Sellers",
    "Recently Viewed",
    "Popular This Week",
    "All products",
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <Newarrivals />
      <section className="grid grid-cols-2 px-[74.5px] mb-10 gap-7 mt-[123px]">
        <div className="w-full h-full relative flex justify-center items-center">
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
        <div className="grid grid-cols-2 gap-7">
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
          <div className="relative flex justify-center">
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
          <div className="relative flex justify-center">
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
          <div className="relative flex justify-center">
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
      </section>
      <section
        className="bg-cover bg-center w-full px-[74.5px] grid grid-cols-2 h-[905px]"
        style={{ backgroundImage: `url(${sectionImage})` }}
      >
        <div></div>
        <div className="flex flex-col justify-center items-start space-y-5 text-white">
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
          />
        </div>
      </section>
      <Newarrivals />
      <div className="flex justify-center items-center mt-[50px] mb-[80px]">
        <Button text={"Load More"} />
      </div>
      {/* <Footer items={menu} /> */}
      <FooterSection />
    </>
  );
};

export default Home;
