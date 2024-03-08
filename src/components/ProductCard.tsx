import { useEffect, useState } from "react";
import useStore from "../State";
import { motion } from "framer-motion";

import dress1 from "/assets/images/dress1.png";
// import dress1 from "/assets/images/dress4.png";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface ProductCardProps {
  id: number;
  image?: string;
  desc: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  desc,
  price,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [screenSize, setScreenSize] = useState(false);
  const { favorites, addToBasket, addToFavorites, removeFromFavorites } =
    useStore();
  const [isHovered, setIsHovered] = useState(false);

  function formatNumber(price: number) {
    const numberString = price.toString();
    const chars = numberString.split("");
    let formattedNumber = "";
    for (let i = 0; i < chars.length; i++) {
      formattedNumber += chars[i];
      if ((chars.length - i - 1) % 3 === 0 && i !== chars.length - 1) {
        formattedNumber += ",";
      }
    }
    return formattedNumber;
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="font-outfit text-[12px] sm:text-[15px] 2sm:text-[12px] capitalize md:text-[15px] lg:max-w-[280px] w-full cursor-pointer"
    >
      <div className="relative">
        <FavoriteIcon
          strokeWidth={0.5}
          stroke="black"
          style={{
            color: isClicked ? "#36254B" : "white",
            height: "24px",
            width: "24px",
          }}
          className={`absolute top-[10px] right-[10px] cursor-pointer`}
          onClick={() => {
            setIsClicked(!isClicked);
            if (!isClicked) {
              addToFavorites({ desc, price, id });
              console.log(favorites);
            } else {
              removeFromFavorites(id);
            }
          }}
        />
        <img src={image} alt="" />
        <img className="rounded-sm w-full h-[auto]" src={dress1} alt="" />
        {screenSize ? (
          <motion.div
            initial={{ y: 7, opacity: 0 }}
            animate={{
              y: isHovered ? 0 : 7,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-[7px] flex justify-center w-full"
          >
            <button
              className="bg-darkPrimary hover:bg-opacity-100 text-white font-montserrat border-none border py-2 px-8 cursor-pointer text-[10px] w-fit font-light"
              onClick={() => {
                addToBasket({ desc, price, id });
              }}
            >
              Add to Cart
            </button>
          </motion.div>
        ) : (
          <div className="absolute bottom-[7px] flex justify-center w-full">
            <button
              className="bg-darkPrimary hover:bg-opacity-100 text-white font-montserrat border-none border py-2 px-8 cursor-pointer text-[10px] w-fit font-light"
              onClick={() => {
                addToBasket({ desc, price, id });
              }}
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
      <div className="pt-[10px] grid gap-1">
        <p className="leading-tight font-light">{desc}</p>
        <p className="font-montserrat font-bold">₦ {formatNumber(price)}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
