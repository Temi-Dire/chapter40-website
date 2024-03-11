import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import FooterSection from "../sections/footer";
import { useNavigate } from "react-router";
import Container from "../components/Container";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Container>
        <section className="grid xl:flex gap-x-10 xl:h-[90vh] justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            className=""
          >
            <motion.h1
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
            </motion.h1>
            <motion.p
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
            </motion.p>
            <motion.p
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
            </motion.p>
            <motion.button
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
            </motion.button>
          </motion.div>
          <motion.img
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
      </Container>
      <FooterSection />
    </>
  );
};

export default About;
