import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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

  const navLinks = [
    {
      id: "about",
      title: "About Us",
    },
    {
      id: "shop",
      title: "Shop",
    },
    {
      id: "categories",
      title: "Categories",
    },
  ];
  const iconSize = {
    fontSize: 30,
  };
  return (
    <>
      <nav className="">
        <div
          className={`w-full flex justify-between items-center px-[82px] py-[28px] fixed z-10 font-montserrat ${
            !scrolled ? "bg-inherit" : "bg-white"
          }`}
        >
          <ul className="flex space-x-24 text-base font-normal">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href="">{link.title}</a>
              </li>
            ))}
          </ul>
          <span className="text-4xl font-medium">Chapter40</span>
          <div className="flex justify-between items-center space-x-24 text-base font-normal">
            <a href="#">Contact Us</a>
            <ul className="space-x-5 flex">
              <li>
                <PersonOutlineOutlinedIcon style={iconSize} />
              </li>
              <li>
                <FavoriteBorderOutlinedIcon />
              </li>
              <li>
                <ShoppingCartOutlinedIcon style={iconSize} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
