import Navbar from "../components/Navbar";
import FooterSection from "../sections/footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="px-[128px] ">
        <h1 className="font-playfair text-4xl pt-32 pb-20">About Us</h1>
        <section className="grid grid-cols-2 gap-9 font-montserrat">
          <div>
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
          <img src="/assets/images/aboutus.png" alt="" />
        </section>
        <section className="grid grid-cols-2 gap-9 font-montserrat my-20">
          <img src="/assets/images/aboutus.png" alt="" />
          <div>
            <p className="mb-1">
              we believe less is more. Our thoughtfully design pieces embrace
              minimalism ensuring that garment becomes a versatile and timeless
              addition to your wardrobe. by choosing quality over quantity, we
              encourage conscious consumption.
            </p>
            <p className="mb-1">
              we believe less is more. Our thoughtfully design pieces embrace
              minimalism ensuring that garment becomes a versatile and timeless
              addition to your wardrobe. by choosing quality over quantity, we
              encourage conscious consumption.
            </p>
            <p className="mb-1">
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
        </section>
      </div>
      <FooterSection />
    </>
  );
};

export default About;
