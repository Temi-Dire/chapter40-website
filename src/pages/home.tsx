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
      <section>
        <div>
          <h1>We are all about Elegance</h1>
          <p>
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <button onClick={() => navigate("/about")} type="button">
            About Us
          </button>
        </div>
      </section>
      <Newarrivals />
      <FooterSection />
    </>
  );
};

export default Home;
