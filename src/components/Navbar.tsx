import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import cart from "/assets/cart.svg";
import userIcon from "/assets/user.svg";

import { motion as m, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckoutModal from "./CheckoutModal";
import useStore from "../State";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
              <li key={i}>
                <a onClick={() => navigate(`/${page.split(" ")[0]}`)} href="">
                  {page}
                </a>
              </li>
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
          <a
            className="hidden lg:block capitalize font-montserrat font-thin text-[15px] 3xl:text-[17px]"
            onClick={() => navigate("contact")}
            href=""
          >
            Contact Us
          </a>
          <div className="flex gap-[5px] lg:gap-[20px] xl:gap-[30px] items-center">
            <Link to={user ? "/account/details" : "/auth/login"}>
              <img className="w-6" src={userIcon} alt="" />
            </Link>
            <Link to={!user ? "/wishlist" : "/auth/login"}>
              <FavoriteBorderOutlinedIcon />
            </Link>
            <Link className="relative" to={""} onClick={() => setOpen(true)}>
              <img className="w-6" src={cart} alt="" />
              <span className="bg-black text-white text-[10px] rounded-full p-1 px-2 scale-75 absolute -bottom-[8px] -right-[6px]">
                {totalItemsInBasket()}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <m.div
          initial={{ opacity: 0, x: "-100vw" }}
          animate={
            isOpen
              ? {
                  opacity: 1,
                  transition: { duration: 0.4 },
                  height: "100vh",
                  width: "320px",
                  borderRadius: 0,
                  x: 0,
                }
              : {
                  opacity: 0,
                  transition: { delay: 0.45, duration: 0.6 },
                  height: 0,
                  width: 0,
                  paddingTop: 0,
                  borderRadius: "0 0 100vh 0",
                  x: "-100vw",
                }
          }
          className={`absolute top-[53.79px] left-0 bg-grey-100 font-montserrat font-semibold pt-[150px] text-[24px] xs:text-[30px] content-start sm:text-[40px] capitalize px-[24px] *:overflow-hidden *:cursor-pointer bg-white-300 grid gap-[24px]  place-items-start lg:hidden`}
        >
          <m.div
            onClick={() => {
              navigate(`/shop`);
            }}
            initial={{ y: 35, opacity: 0 }}
            animate={
              isOpen
                ? {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.3, delay: 0.4 },
                  }
                : { y: 35, transition: { duration: 0.45 } }
            }
          >
            Shop
          </m.div>
          <m.div
            onClick={() => {
              navigate(`/about`);
            }}
            initial={{ y: 35, opacity: 0 }}
            animate={
              isOpen
                ? {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.3, delay: 0.5 },
                  }
                : { y: 35, transition: { duration: 0.45 } }
            }
          >
            About Us
          </m.div>
          <m.div
            onClick={() => {
              navigate(`/contact`);
            }}
            initial={{ y: 35, opacity: 0 }}
            animate={
              isOpen
                ? {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.3, delay: 0.65 },
                  }
                : { y: 35, transition: { duration: 0.45 } }
            }
          >
            Contact us
          </m.div>
          <m.div
            onClick={() => {
              navigate(`/categories`);
            }}
            initial={{ y: 35, opacity: 0 }}
            animate={
              isOpen
                ? {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.3, delay: 0.86 },
                  }
                : { y: 35, transition: { duration: 0.45 } }
            }
          >
            Categories
          </m.div>
        </m.div>
      </div>
      <AnimatePresence>
        {open && <CheckoutModal onClick={() => setOpen(false)} />}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
