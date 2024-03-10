import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import cart from "/assets/cart.svg";
import userIcon from "/assets/user.svg";

import { motion as m, AnimatePresence, easeInOut } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckoutModal from "./CheckoutModal";
import useStore from "../State";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState(-1);

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Close the menu if screen size is above 768px
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
  const pages = ["about us", "shop", "categories"];

  return (
    <nav className="max-w-[1440px] mx-auto w-full sticky top-0 z-50">
      <div className="flex justify-between items-center px-[20px] 2lg:px-[40px] xl:px-[65px] py-[14px] 2lg:pb-[30px] overflow-x-hidden">
        <m.div
          className="cursor-pointer items-center flex flex-col justify-center lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          initial={{ rotate: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
        >
          <m.div
            className="h-[2.5px]  w-5 bg-black mb-1"
            initial={{ y: 0, rotate: 0 }}
            animate={isOpen ? { y: 6.5, rotate: 45 } : { y: 0, rotate: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          />
          <m.div
            className="h-[2.5px] w-5 bg-black mb-1"
            initial={{ opacity: 1 }}
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          />
          <m.div
            className="h-[2.5px] w-5 bg-black"
            initial={{ y: 0, rotate: 0 }}
            animate={isOpen ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          />
        </m.div>
        <div className="hidden lg:block">
          <ul className="capitalize font-montserrat font-thin text-[15px] flex gap-[30px] 2lg:gap-[50px] 2xl:gap-[70px] 3xl:text-[17px]">
            {pages.map((page, i) => (
              <m.li
                key={i}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(-1)}
                className="overflow-hidden"
              >
                <a onClick={() => navigate(`/${page.split(" ")[0]}`)} href="">
                  {page}
                </a>
                <m.div
                  initial={{ x: "-100%" }}
                  animate={{
                    x: hover === i ? "0%" : "-100%",
                    transition: { duration: 0.35, ease: easeInOut },
                  }}
                  className="h-[2px] bg-black w-full"
                ></m.div>
              </m.li>
            ))}
          </ul>
        </div>
        <Link
          to={"/"}
          className="absolute left-[47.5%] lg:left-2/4 -translate-x-2/4 2lg:left-[52%] font-playfair text-[24px] 2lg:text-[30px] 3xl:text-[36px] "
        >
          Chapter40
        </Link>
        <div className="lg:flex gap-[50px] 2lg:gap-[80px] 2xl:gap-[120px]">
          <m.a
            onMouseEnter={() => setHover(5)}
            onMouseLeave={() => setHover(-1)}
            className="hidden lg:block capitalize font-montserrat font-thin text-[15px] 3xl:text-[17px] overflow-hidden"
            onClick={() => navigate("contact")}
            href=""
          >
            Contact Us
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
              <li className="relative mr-11 hidden lg:list-item">
                <Link to={!user ? "/wishlist" : "/auth/login"}>
                  <FavoriteBorderOutlinedIcon className="cursor-pointer" />
                </Link>
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
              className={`pt-5 mx-3 mt-3 space-y-3 bg-[#f2f1f1] absolute text-[#333333] flex flex-col  items-center lg:hidden rounded-lg`}
            >
              <ul className="text-xl">
                <m.li
                  className="cursor-pointer mb-1 py-2 px-5"
                  whileHover={{ backgroundColor: "#ccc", color: "white" }}
                  onClick={() => navigate("/shop")}
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
                  onClick={() => navigate("/wishlist")}
                >
                  Saved items
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
    </nav>
  );
};

export default Navbar;
