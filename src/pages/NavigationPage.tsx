import { useLocation, useParams } from "react-router-dom";
import MyCart from "../components/MyCart";
import NavigationMenu from "../components/NavigationMenu";
import { navigationItems } from "../components/constants/navigationItems";
import Shipping from "./Shipping";
import Information from "./Information";

const NavigationPage = () => {
    const location = useLocation();
    const { page } = useParams();
  return (
    <>
      <div className="lg:flex h-screen">
        <div className="lg:pl-[108px] pt-[32px] pr-[65px] lg:w-1/2 font-playfair">
          <NavigationMenu navigationItems={navigationItems} />
                  <Information />
        </div>
        <div className="lg:w-1/2 bg-[#F3E9FA] h-full">
          <MyCart />
        </div>
      </div>
    </>
  );
};

export default NavigationPage;
