
import userIcon from "/assets/user.svg";

import { AnimatePresence, easeInOut, motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../State";
import CheckoutModal from "./CheckoutModal";

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
  const favorites = store.favorites;

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
          <ul className="text-lg font-normal hidden lg:flex ">
            <li className="mr-11 cursor-pointer">
              <a onClick={() => navigate("/about")}>About</a>
            </li>
            <li className="mr-11 cursor-pointer">
              <a onClick={() => navigate("/shop")}>Shop</a>
            </li>
            <li className="cursor-pointer">
              <a onClick={() => navigate("/contact-us")} href="#footer">Contact Us</a>
            </li>
          </ul>
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

              initial={{ x: "-100%" }}
              animate={{
                x: hover === 5 ? "0%" : "-100%",
                transition: { duration: 0.35, ease: easeInOut },
              }}
              className="h-[2px] bg-black w-full"
            ></m.div>
          </m.a>
          <div className="flex gap-[5px] lg:gap-[20px] xl:gap-[30px] items-center">
            <Link to={user ? "/account/details" : "/auth/login"}>
              <img className="w-6" src={userIcon} alt="" />
            </Link>
            <Link
              className="lg:block hidden relative"
              to={!user ? "/wishlist" : "/auth/login"}
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
                  onClick={() => navigate("/contact-us")}
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
    </nav>
  );
};

export default Navbar;
