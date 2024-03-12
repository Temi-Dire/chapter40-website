import FavoriteIcon from "@mui/icons-material/Favorite";
// import Star from "./Star";
import useStore from "../store/State";
import { useState } from "react";

interface CardProps {
  desc: string;
  price: number;
  id: number;
}

const Card: React.FC<CardProps> = ({ desc, price, id }) => {
  const { favorites, addToBasket, addToFavorites, removeFromFavorites } =
    useStore();
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className="w-[150px] sm:w-[205px] md:w-[220px] flex-shrink-0">
        <div className="relative ">
          <FavoriteIcon
            style={{ color: isClicked ? "red" : "white" }}
            className={`absolute right-6 top-6 cursor-pointer`}
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
          <img
            className="w-full object-cover"
            src="/assets/images/dress1.png"
          />
          <div className="absolute bottom-4 flex justify-center items-center w-full">
            <button
              className="px-8 bg-[#684b8b] text-white font-roboto text-lg border border-[#4E4D93] py-2 cursor-pointer"
              onClick={() => {
                addToBasket({ desc, price, id });
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div>
          <p className="font-playfair text-xl">{desc}</p>
          <p className="font-montserrat">{"₦" + price}</p>
        </div>
      </div>
    </>
  );
};

export default Card;

