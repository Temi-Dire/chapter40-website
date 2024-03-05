import { useState } from "react";
import useStore from "../State";

import Star from "./Star";
import dress1 from "/assets/images/dress1.png";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface ProductCardProps {
  id: number;
  image?: string;
  desc: string;
  price: number;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  desc,
  price,
  rating,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const { favorites, addToBasket, addToFavorites, removeFromFavorites } =
    useStore();

  const renderStars = (rating: number): JSX.Element[] => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<Star key={i} filled={i < rating} />);
    }
    return stars;
  };

  return (
    <div className="font-playfair text-[16px] w-[156px] 2sm:w-[180px] md:w-[160px] relative lg:w-[180px] xl:w-[200px] 2xl:w-[230px] 3xl:w-[260px] 4xl:w-[275px]">
      <div className="relative">
        <FavoriteIcon
          strokeWidth={0.5}
          stroke="black"
          style={{ color: isClicked ? "red" : "white" }}
          className={`absolute top-[5px] right-[5px] cursor-pointer`}
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
        <div className="absolute left-[3px] bottom-[5px] w-full">
          <button
            className="bg-lightPrimary bg-opacity-80 hover:bg-opacity-100 text-white font-montserrat border-none text-[13px] border py-1 px-4 cursor-pointer rounded-sm"
            onClick={() => {
              addToBasket({ desc, price, id });
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div>
        <p className="leading-tight">{desc}</p>
        <p className="font-montserrat">#{price}</p>
        <div className="flex gap-[0.5px]">{renderStars(rating)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
