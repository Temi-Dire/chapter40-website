import Navbar from "../components/Navbar";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Outlet, useNavigate } from "react-router";
import { useState } from "react";
import Container from "../components/Container";
import ShoppingBagOutlined from "@mui/icons-material/ShoppingBagOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

const CustomerOptions = () => {
  const [active, setActive] = useState("account");
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Container className="bg-[#e8e8ea] pt-4 pb-20 lg:h-[90vh] flex justify-center gap-6">
        <ul className="bg-white lg:w-60 lg:rounded-md font-barlow h-fit fixed bottom-0 lg:relative flex lg:block w-full">
          <li
            className={`flex p-1 lg:gap-2 lg:px-4 lg:py-4 cursor-pointer flex-col items-center lg:flex-row lg:rounded-t-md w-full text-xs lg:text-base ${
              active === "account"
                ? "bg-slate-400"
                : "bg-white hover:bg-[#CCCCCC]"
            }`}
            onClick={() => {
              setActive("account");
              navigate("account");
            }}
          >
            <PersonOutlineOutlinedIcon />
            <p className="">Account</p>
          </li>
          <li
            className={`flex flex-col items-center p-1 lg:flex-row lg:gap-2 lg:px-4 lg:py-4 cursor-pointer w-full text-xs lg:text-base ${
              active === "orders"
                ? "bg-slate-400"
                : "bg-white hover:bg-[#CCCCCC]"
            }`}
            onClick={() => {
              setActive("orders");
              navigate("/customer/orders");
            }}
          >
            <ShoppingBagOutlined />
            <p className="">Orders</p>
          </li>
          <li
            className={`flex flex-col lg:flex-row items-center p-1 lg:gap-2 lg:px-4 lg:py-4 cursor-pointer w-full text-xs lg:text-base ${
              active === "order"
                ? "bg-slate-400"
                : "bg-white hover:bg-[#CCCCCC] "
            }`}
            onClick={() => {
              setActive("order");
              navigate("/customer/order");
            }}
          >
            <LocalShippingOutlinedIcon />
            <p>
              <span className="">Tracking</span>
            </p>
          </li>
          <li
            className={`flex flex-col lg:flex-row items-center p-1 lg:gap-2 lg:px-4 lg:py-4 cursor-pointer w-full text-xs lg:text-base ${
              active === "saved"
                ? "bg-slate-400"
                : "bg-white hover:bg-[#CCCCCC] "
            }`}
            onClick={() => {
              setActive("saved");
              navigate("/customer/saved");
            }}
          >
            <FavoriteBorderOutlinedIcon />
            <p>
              Saved <span className="hidden xl:inline">Items</span>
            </p>
          </li>
          <li
            className={`flex flex-col items-center lg:flex-row p-1 lg:gap-2 lg:px-4 lg:py-4 lg:rounded-b-md cursor-pointer w-full text-xs lg:text-base ${
              active === "address"
                ? "bg-slate-400"
                : "bg-white hover:bg-[#CCCCCC] "
            }`}
            onClick={() => {
              setActive("address");
              navigate("/customer/address");
            }}
          >
            <HomeOutlinedIcon />
            <p>
              Address <span className="hidden xl:inline">Book</span>
            </p>
          </li>
        </ul>
        <Outlet />
      </Container>
    </>
  );
};

export default CustomerOptions;
