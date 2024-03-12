import { Outlet, Link } from "react-router-dom";
import MyCart from "../components/MyCart";


const CheckoutPage = () => {
  return (
    <>
      <div className="lg:flex min-h-screen">
        <div className="px-5 md:px-20 lg:px-10 py-[40px]   lg:w-1/2 font-playfair">
          <header className="text-[24px] lg:text-4xl mb-[12px] lg:mb-[29px] text-black">
            <Link to={"/"}>Chapter40</Link>
          </header>
          <Outlet />
        </div>
        <div className="hidden lg:block lg:w-1/2 bg-[#F3E9FA] min-h-[screen]">
          <MyCart />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
