import { useEffect, useState } from "react";
import useStore from "../store/State";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface NewArrivalCardProps {
  id: number;
  image?: string;
  desc: string;
  price: number;
}

const NewArrivalCard: React.FC<NewArrivalCardProps> = ({
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
      className={`font-outfit text-[12px] sm:text-[15px] 2sm:text-[12px] capitalize md:text-[15px] lg:max-w-[280px] w-full cursor-pointer mx-auto relative`}
    >
      <div className={`h-[220px] overflow-hidden lg:h-auto`}>
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
        <div className="aspect-w-1 aspect-h-1 lg:aspect-w-4 lg:aspect-h-5 relative">
          <img
            className="mx-auto w-full object-cover bg-[center] lg:h-[359px] aspect-auto"
            src={image}
            alt=""
          />
        </div>

        {screenSize ? (
          <motion.div
            initial={{ y: 7, opacity: 0 }}
            animate={{
              y: isHovered ? 0 : 7,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-[26%] flex justify-center w-full"
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
          <div className="absolute bottom-[26%] flex justify-center w-full">
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
        <p className="font-montserrat font-bold">₦{price.toLocaleString()}</p>
      </div>
    </motion.div>
  );
};

export default NewArrivalCard;
