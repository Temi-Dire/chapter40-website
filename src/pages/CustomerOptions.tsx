import Navbar from "../components/Navbar";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Outlet } from "react-router";
import { useState } from "react";

const CustomerOptions = () => {
  const [active, setActive] = useState("account");
  const currentUrl = window.location.href;
  return (
    <>
      <Navbar />
      <div className="sm:px-10 lg:px-16 bg-[#e8e8ea] h-[90vh] pt-4  flex justify-center gap-6">
        <ul className="bg-white md:w-60 md:rounded-md font-outfit h-fit fixed bottom-0 md:relative flex md:block w-full">
          <li
            className={`flex gap-2 px-4 py-4 cursor-pointer md:rounded-t-md w-full ${
              active === "account"
                ? "bg-slate-400"
                : "bg-white hover:bg-[#CCCCCC]"
            }`}
            onClick={() => setActive("account")}
          >
            <PersonOutlineOutlinedIcon /> <p className="">Account</p>
          </li>
          <li
            className={`flex gap-2 px-4 py-4 cursor-pointer w-full ${
              active === "order"
                ? "bg-slate-400"
                : "bg-white hover:bg-[#CCCCCC] "
            }`}
            onClick={() => setActive("order")}
          >
            <ShoppingBagOutlinedIcon />
            <p>Order <span className="hidden lg:block">Tracking</span></p>
          </li>
          <li
            className={`flex gap-2 px-4 py-4 cursor-pointer w-full ${
              active === "saved"
                ? "bg-slate-400"
                : "bg-white hover:bg-[#CCCCCC] "
            }`}
            onClick={() => setActive("saved")}
          >
            <FavoriteBorderOutlinedIcon />
            <p>Saved <span className="hidden lg:block">Items</span></p>
          </li>
          <li
            className={`flex gap-2 px-4 py-4 md:rounded-b-md cursor-pointer w-full ${
              active === "address"
                ? "bg-slate-400"
                : "bg-white hover:bg-[#CCCCCC] "
            }`}
            onClick={() => setActive("address")}
          >
            <HomeOutlinedIcon />
            <p>Address <span className="hidden lg:block">Book</span></p>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default CustomerOptions;
