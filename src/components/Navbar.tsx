import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CheckoutModal from "./CheckoutModal";
import useStore from "../State";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  return (
    <>
      <nav className="">
        <div
          className={`w-full flex justify-between items-center px-[82px] py-[28px] fixed font-montserrat z-10 ${
            !scrolled ? "bg-inherit" : "bg-white"
          }`}
        >
          <ul className="flex space-x-24 text-base font-normal">
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li>
              <Link to={"/categories"}>Categories</Link>
            </li>
          </ul>
          <Link to={"/"} className="text-4xl font-medium">
            Chapter40
          </Link>
          <div className="flex justify-between items-center space-x-24 text-base font-normal">
            <a href="#">Contact Us</a>
            <ul className="space-x-5 flex">
              <li>
                <Link to={"/account/details"}>
                  <PersonOutlineOutlinedIcon style={iconSize} />
                </Link>
              </li>
              <li>
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
        </div>
      </nav>
      {open && <CheckoutModal onClick={() => setOpen(false)} />}
    </>
  );
};

export default Navbar;
