import AddCircleIcon from "@mui/icons-material/AddCircle";
import Star from "./Star";
import useStore from "../State";

interface CardProps {
  desc: string;
  price: number;
  id: number;
}

const Minicard: React.FC<CardProps> = ({ desc, price, id }) => {
  const { addToBasket } = useStore();

  return (
    <div className=" grid-cols-[auto,1fr] gap-x-3 bg-[#F7F0F6] max-w-sm p-4  relative mb-8 hidden lg:grid">
      <img className="" src="/assets/images/dress2small.png" alt="" />
      {/* <div>dire ege eigei iegf eig </div> */}
      <div className="text-xs md:text-base lg:text-lg ">
        <p className="font-playfair">{desc}</p>
        <p className="font-montserrat">₦ {price}</p>
        {/* <Star filled /> */}
      </div>

      <AddCircleIcon
        className="absolute bottom-2 right-2 cursor-pointer"
        style={{ fontSize: 30 }}
        onClick={() => addToBasket({ desc, price, id })}
      />
    </div>
  );
};

export default Minicard;
