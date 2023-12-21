import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import Star from "./Star";
import useStore from "../State";
import { useState } from "react";

interface CardProps {
  desc: string;
  price: number;
  id: number;
}

const Card: React.FC<CardProps> = ({ desc, price, id }) => {
  const store = useStore();
  const addToBasket = store.addToBasket;
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const addToFavorites = store.addToFavorites;

  return (
    <>
      <div
        className="w-60"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative ">
          <FavoriteBorderOutlined
            className={`absolute right-6 top-6 cursor-pointer ${
              isClicked && "text-red-600"
            }`}
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          />
          <img
            className="w-full object-cover"
            src="/assets/images/dress1.png"
          />
          <div className="absolute bottom-4 flex justify-center items-center w-full">
            {isHovered && (
              <button
                className="px-12 bg-[#36254B] text-white font-roboto text-lg border border-[#4E4D93] py-4 cursor-pointer"
                onClick={() => {
                  addToBasket({ desc, price, id });
                  console.log(store.basket);
                }}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
        <div>
          <p className="font-playfair text-xl">{desc}</p>
          <p className="font-montserrat">{"₦" + price}</p>
          <Star filled />
        </div>
      </div>
    </>
  );
};

export default Card;
