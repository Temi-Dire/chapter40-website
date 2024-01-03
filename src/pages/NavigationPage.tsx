import { Outlet } from "react-router-dom";
import MyCart from "../components/MyCart";
import NavigationMenu from "../components/navigationmenu/NavigationMenu";
import { navigationItems } from "../components/constants/navigationItems";

const NavigationPage = () => {
  return (
    <>
      <div className="lg:flex min-h-screen">
        <div className="px-[50px] lg:pl-[108px] py-[40px] lg:py-[32px] pr-[65px] lg:w-1/2 font-playfair">
          <NavigationMenu navigationItems={navigationItems} />
          <Outlet />
        </div>
        <div className="hidden lg:block lg:w-1/2 bg-[#F3E9FA] min-h-[screen]">
          <MyCart />
        </div>
      </div>
    </>
  );
};

export default NavigationPage;
