import Navbar from "../components/Navbar";
import FooterSection from "../sections/footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className=" px-8 md:px-16 mt-4 ">
        <h1 className="font-playfair text-4xl pb-6">About Us</h1>
        <section className="md:grid grid-cols-2 gap-9 font-montserrat">
          <div className="mb-6 md:mb-0">
            <p className="mb-1">
              We believe less is more. Our thoughtfully design pieces embrace
              minimalism ensuring that garment becomes a versatile and timeless
              addition to your wardrobe. by choosing quality over quantity, we
              encourage conscious consumption.
            </p>
            <p className="mb-1">
              We believe less is more. Our thoughtfully design pieces embrace
              minimalism ensuring that garment becomes a versatile and timeless
              addition to your wardrobe. by choosing quality over quantity, we
              encourage conscious consumption.
            </p>
            <p className="mb-1">
              We believe less is more. Our thoughtfully design pieces embrace
              minimalism ensuring that garment becomes a versatile and timeless
              addition to your wardrobe. by choosing quality over quantity, we
              encourage conscious consumption.
            </p>
            <p>
              Design pieces embrace minimalism ensuring that garment becomes a
              versatile and timeless addition to your wardrobe. by choosi
            </p>
          </div>
          <img className="w-full" src="/assets/images/aboutus.png" alt="" />
        </section>
        <section className="md:grid grid-cols-2 gap-9 font-montserrat my-20">
          <div className="col-start-2 mb-6 md:mb-0">
            <p className="mb-2">
              we believe less is more. Our thoughtfully design pieces embrace
              minimalism ensuring that garment becomes a versatile and timeless
              addition to your wardrobe. by choosing quality over quantity, we
              encourage conscious consumption.
            </p>
            <p className="mb-2">
              we believe less is more. Our thoughtfully design pieces embrace
              minimalism ensuring that garment becomes a versatile and timeless
              addition to your wardrobe. by choosing quality over quantity, we
              encourage conscious consumption.
            </p>
            <p className="mb-2">
              we believe less is more. Our thoughtfully design pieces embrace
              minimalism ensuring that garment becomes a versatile and timeless
              addition to your wardrobe. by choosing quality over quantity, we
              encourage conscious consumption.
            </p>
            <p>
              Design pieces embrace minimalism ensuring that garment becomes a
              versatile and timeless addition to your wardrobe. by choosi
            </p>
          </div>
          <img
            className="col-start-1 row-start-1 w-full"
            src="/assets/images/aboutus.png"
            alt=""
          />
        </section>
      </div>
      {/* <FooterSection /> */}
    </>
  );
};

export default About;
