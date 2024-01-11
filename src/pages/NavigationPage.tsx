import { Outlet } from "react-router-dom";
import MyCart from "../components/MyCart";
import NavigationMenu from "../components/navigationmenu/NavigationMenu";

const NavigationPage = () => {
  return (
    <>
      <div className="lg:flex min-h-screen">
        <div className="px-5 md:px-20 lg:px-10 py-[40px]   lg:w-1/2 font-playfair">
          <NavigationMenu />
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
