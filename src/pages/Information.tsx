import { Link, useLocation } from "react-router-dom";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Information = () => {
  const location = useLocation();
  return (
    <>
      <div className="lg:flex h-screen">
        <div className="lg:pl-[108px] pt-[32px] pr-[65px] lg:w-1/2 font-playfair">
          <header className="text-4xl mb-[29px] text-black">Chapter40</header>
          <div className="p-[16px] font-montserrat text-borderDark text-xl space-x-[20px]">
            <Link
              to="/cart"
              className={location.pathname === "/cart" ? "text-[#36254B]" : ""}
            >
              cart
            </Link>
            <span className="ml-[20px] text-[#606060]">/</span>
            <Link
              to="/information"
              className={
                location.pathname === "/information" ? "text-[#36254B]" : ""
              }
            >
              info
            </Link>
            <span className="ml-[20px] text-[#606060]">/</span>
            <Link
              to="/shipping"
              className={
                location.pathname === "/shipping" ? "text-[#36254B]" : ""
              }
            >
              shipping
            </Link>
            <span className="ml-[20px] text-[#606060]">/</span>
            <Link
              to="/payment"
              className={
                location.pathname === "/payment" ? "text-[#36254B]" : ""
              }
            >
              payment
            </Link>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-2xl">Contact</p>
            <div className="space-x-2 flex font-montserrat text-xl font-normal">
              <p className="text-[#0C0C0C]">have an account?</p>
              <p className="hover:text-[#634D93] text-[#0C0C0C]"> login</p>
            </div>
          </div>
          <div className="flex border border-[#606060] px-[16px] py-2 space-x-[4px]">
            <Person4OutlinedIcon className="w-[16px] h-[16px] text-[#606060]" />
            <div className="flex-1">
              <input
                type="email"
                placeholder="Email"
                className="font-montserrat outline-none w-full text-[#606060]"
              />
            </div>
          </div>
          <div className="flex space-x-1 mt-1 mb-[28px]">
            <input type="checkbox" />
            <p className="font-montserrat text-[#0C0C0C]">
              email me with news and offers
            </p>
          </div>
          <header className="text-playfair text-2xl font-normal mb-[20px]">
            Shipping Address
          </header>
          <div className="space-y-[8px]">
            <div className="flex justify-between border border-[#606060] px-[16px] py-2 space-x-[4px]">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Country/region"
                  className="font-montserrat outline-none w-full text-[#606060]"
                />
              </div>
              <button>
                <CloseOutlinedIcon className="w-[16px] h-[16px] text-[#606060]" />
              </button>
            </div>
            <div className="flex space-x-[24px] font-montserrat">
              <div className="w-1/2 flex justify-between border border-[#606060] px-[16px] py-2">
                <input type="text" placeholder="first name" />
              </div>
              <div className="w-1/2 flex justify-between border border-[#606060] px-[16px] py-2">
                <input type="text" placeholder="last name" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 bg-[#F3E9FA] h-full"></div>
      </div>
    </>
  );
};

export default Information;
