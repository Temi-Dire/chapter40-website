import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import Star from "./Star";
import Button from "./Button";

interface CardProps {
  name: String;
  price: String;
}

const Card: React.FC<CardProps> = ({ name, price }) => {
  return (
    <>
      <div className="w-60">
        <div className="relative ">
          <FavoriteBorderOutlined className="absolute right-6 top-6" />
          <img
            className="w-full object-cover"
            src="/assets/images/dress1.png"
          />
          <div className="absolute bottom-4 flex justify-center items-center w-full">
            <Button
              text={"Add to cart"}
              paddingX={"px-12"}
              bgColor={"bg-[#36254B]"}
              textColor={"text-white"}
            />
          </div>
        </div>
        <div>
          <p className="font-playfair text-xl">{name}</p>
          <p className="font-montserrat">{"₦" + price}</p>
          <Star filled />
        </div>
      </div>
    </>
  );
};

export default Card;
