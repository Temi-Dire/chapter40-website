import { FaRegTrashAlt } from "react-icons/fa";
import useStore from "../State";

interface Props {
  id: number;
  image?: string;
  desc: string;
  price: number;
}

const FavoriteCard = ({ id, image, desc, price }: Props) => {
  const { addToBasket, removeFromFavorites } = useStore();
  return (
    <div className="border shadow-md border-borderDark p-4 mb-5 flex items-center">
      <div className="mr-8">
        <img src={image} alt={`dress ${id}`} />
      </div>
      <div className="flex flex-col space-y-8 mr-2">
        <p className="leading-tight">{desc}</p>
        <p className="font-montserrat">{price}</p>
      </div>
      <div className="ml-auto flex flex-col space-y-8">
        <button
          onClick={() => addToBasket({ desc, price, id })}
          className=" uppercase bg-lightPrimary bg-opacity-80 hover:bg-opacity-100 text-white font-montserrat border-none text-[13px] border py-1 px-4 cursor-pointer rounded-sm "
        >
          Add to Cart
        </button>
        <button
          type="button"
          onClick={() => removeFromFavorites(id)}
          className=" flex uppercase justify-center"
        >
          <span className="sr-only">Trash</span>
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default FavoriteCard;
