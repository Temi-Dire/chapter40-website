import { motion as m } from "framer-motion";
import Navbar from "../components/Navbar";
import FooterSection from "../sections/footer";
import { useNavigate } from "react-router";
import Container from "../components/Container";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const About = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the section is visible
    triggerOnce: true, // Trigger animation only once
  });

  if (inView && !isVisible) {
    setIsVisible(true);
  }
  return (
    <>
      <Navbar />
      <Container>
        <section className="grid xl:flex gap-x-10 xl:h-[90vh] justify-center items-center">
          <m.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            className=""
          >
            <m.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                type: "spring",
                bounce: 0.5,
              }}
              className="mb-2 text-[#848586]"
            >
              About Us
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.7,
                duration: 0.8,
                type: "spring",
                bounce: 0.5,
              }}
              className="text-4xl font-medium font- mb-6 font-poppins"
            >
              We believe that fashion is more than just what you wear – it's a
              reflection of who you are and what you love.
            </m.p>
            <m.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
                duration: 0.9,
                type: "spring",
                bounce: 0.5,
              }}
              className="mb-6 font-outfit"
            >
              What sets us apart is our dedication to offering a diverse range
              of styles, from classic and elegant to bold and edgy. We carefully
              handpick each item in our collection, ensuring that every piece
              meets our stringent standards for quality, craftsmanship, and
              style.
            </m.p>
            {/* <m.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.5,
                duration: 0.8,
                type: "spring",
                bounce: 0.5,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-darkPrimary hover:bg-opacity-100 text-white border-none border py-3 px-8 cursor-pointer text-[15px] mb-4 lg:mb-0"
              onClick={() => navigate("/shop")}
            >
              Shop Now!
            </m.button> */}
          </m.div>
          <m.img
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3,
              duration: 1,
              type: "spring",
              bounce: 0.5,
            }}
            className="w-[400px] h-96 rounded-full row-start-1 my-4 lg:my-0"
            src="/assets/images/aboutus.png"
            alt=""
          />
        </section>
        <section
          ref={ref}
          className="grid xl:flex gap-x-10 xl:mt-5 justify-center items-center"
        >
          <m.img
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{
              delay: 0.3,
              duration: 1,
              type: "spring",
              bounce: 0.5,
            }}
            className="w-[400px] h-96 rounded-full row-start-1 my-4 lg:my-0"
            src="/assets/images/aboutus.png"
            alt=""
          />
          <m.div
            initial={{ opacity: 0, y: -50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            className=""
          >
            <m.h1
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.5,
                duration: 0.8,
                type: "spring",
                bounce: 0.5,
              }}
              className="mb-2 text-[#848586]"
            >
              Our Mission
            </m.h1>
            {/* <m.p
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.7,
                duration: 0.8,
                type: "spring",
                bounce: 0.5,
              }}
              className="text-4xl font-medium font- mb-6 font-poppins"
            >
              Our mission at Chapter40 Fashion is simple: to bring joy and
              beauty into the lives of our customers through exceptional jewelry
              and unparalleled service. We are committed to creating pieces that
              stand the test of time, both in style and quality, and to
              providing a shopping experience that exceeds expectations.
            </m.p> */}
            <m.p
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 1,
                duration: 0.9,
                type: "spring",
                bounce: 0.5,
              }}
              className="mb-6 font-outfit md:text-lg "
            >
              Our Mission Our mission at Chapter40 fashion is simple: to bring
              joy and beauty into the lives of our customers through exceptional
              jewelry and unparalleled service. We are committed to creating
              pieces that stand the test of time, both in style and quality, and
              to providing a shopping experience that exceeds expectations.
            </m.p>
            <m.button
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 1.5,
                duration: 0.8,
                type: "spring",
                bounce: 0.5,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-darkPrimary hover:bg-opacity-100 text-white border-none border py-3 px-8 cursor-pointer text-[15px] mb-4 lg:mb-0"
              onClick={() => navigate("/shop")}
            >
              Shop Now!
            </m.button>
          </m.div>
        </section>
      </Container>
      <FooterSection />
    </>
  );
};

export default About;
