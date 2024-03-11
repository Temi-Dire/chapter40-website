// import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../sections/hero";
import Newarrivals from "../sections/newarrivals";
import HomeGrid from "../components/HomeGrid";
import FooterSection from "../sections/footer";
// import sectionImage from "/assets/images/elegance.png";


const Home = () => {
  // const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Hero />
      <Newarrivals />
      <HomeGrid />

      <section></section>
      <Newarrivals />
      <FooterSection />
    </>
  );
};

export default Home;
