import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { motion as m, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckoutModal from "./CheckoutModal";
import useStore from "../State";

const Navbar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState("");

  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  const iconSize = {
    fontSize: 30,
  };

  const store = useStore();

  const basket = store.basket;

  const totalItemsInBasket = () => {
    let sum = 0;
    for (let i = 0; i < basket.length; i++) {
      sum += basket[i].quantity;
    }
    return sum;
  };

  const { user } = useStore();

  return (
    <>
      <div className="sticky w-full top-0 z-10">
        <nav
          className={`w-full flex justify-between justify-items-center items-center px-4 sm:px-10 lg:px-16 py-3 lg:py-6ont-montserrat `}
          style={{
            background: "linear-gradient(to right, white 50%, purple 50%)",
          }}
        >
          <ul className="text-lg font-normal hidden lg:flex ">
            <li className="mr-11 cursor-pointer">
              <a onClick={() => navigate("/about")}>About</a>
            </li>
            <li className="mr-11 cursor-pointer">
              <a onClick={() => navigate("/shop")}>Shop</a>
            </li>
            <li className="cursor-pointer">
              <a href="#footer">Contact Us</a>
            </li>
          </ul>
          <m.div
            className="cursor-pointer items-center flex flex-col justify-center lg:hidden"
            onClick={() =>
              setIsOpen((prevValue) => (prevValue === "" ? "1" : ""))
            }
            initial={{ rotate: 0, opacity: 1 }}
            animate={{ rotate: 0, opacity: 1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            <m.div
              className="h-[3.5px]  w-6 bg-black mb-1"
              initial={{ y: 0, rotate: 0 }}
              animate={isOpen ? { y: 8, rotate: 45 } : { y: 0, rotate: 0 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
            />
            <m.div
              className="h-[3.5px] w-6 bg-black mb-1"
              initial={{ opacity: 1 }}
              animate={isOpen === "1" ? { opacity: 0 } : { opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
            />
            <m.div
              className="h-[3.5px] w-6 bg-black"
              initial={{ y: 0, rotate: 0 }}
              animate={isOpen ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
            />
          </m.div>
          <Link to={"/"} className="text-2xl md:text-4xl  font-playfair">
            Chapter40
          </Link>
          <div className="flex justify-between items-center  text-base font-normal">
            <ul className=" justify-between flex">
              <li className="mr-11">
                <Link to={user ? "/account/details" : "/auth/login"}>
                  <PersonOutlineOutlinedIcon style={iconSize} />
                </Link>
              </li>
              <li className="mr-11 hidden lg:list-item">
                <FavoriteBorderOutlinedIcon />
              </li>
              <li className="relative" onClick={() => setOpen(true)}>
                <ShoppingCartOutlinedIcon
                  className="cursor-pointer"
                  style={iconSize}
                />
                <span className="bg-black text-white p-1 px-2 rounded-[50%] absolute bottom-[-8px] text-xs right-[-10px]">
                  {totalItemsInBasket()}
                </span>
              </li>
            </ul>
          </div>
        </nav>
        <AnimatePresence>
          {isOpen === "1" && (
            <m.div
              initial={{ y: 500 }}
              animate={{ y: 0 }}
              exit={{ y: 500 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              className={`pt-5 mx-3 mt-3 space-y-3 bg-[#fff] absolute text-[#333333] flex flex-col  items-center lg:hidden rounded`}
            >
              <ul className="text-xl">
                <m.li
                  className="cursor-pointer mb-1 py-2 px-5"
                  whileHover={{ backgroundColor: "#ccc", color: "white" }}
                >
                  Shop
                </m.li>
                <m.li
                  className="cursor-pointer mb-1 py-2 px-5"
                  whileHover={{ backgroundColor: "#ccc", color: "white" }}
                  onClick={() => navigate("/about")}
                >
                  About Us
                </m.li>
                <m.li
                  className="cursor-pointer mb-1 py-2 px-5"
                  whileHover={{ backgroundColor: "#ccc", color: "white" }}
                >
                  Contact us
                </m.li>
                <m.li
                  className="cursor-pointer mb-1 py-2 px-5"
                  whileHover={{ backgroundColor: "#ccc", color: "white" }}
                >
                  Categories
                </m.li>
              </ul>
            </m.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {open && <CheckoutModal onClick={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
