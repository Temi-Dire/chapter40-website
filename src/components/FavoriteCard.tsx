import useStore from "../store/State";
import useFavoritesStore from "../store/favorites";

interface Props {
  id: number;
  image?: string;
  desc: string;
  price: number;
}

const FavoriteCard = ({ id, image, desc, price }: Props) => {
  const { addToBasket } = useStore();
  const {removeFromFavorites} = useFavoritesStore()
  return (
    <div className="border shadow-md border-borderDark p-4 mb-5 flex flex-col md:flex-row items-center max-w-[800px]">
      <div className="grid grid-cols-[auto,1fr] mb-3 w-full md:w-auto lg:w-auto ">
        <div className=" m-auto mr-4 md:mr-8 flex-auto">
          <img
            className=" object-cover"
            width={"40px"}
            src={image}
            alt={`dress ${id}`}
          />
        </div>
        <div className="flex flex-col space-y-2 md:space-y-8">
          <p className="leading-tight font-medium">{desc}</p>
          <p className="font-montserrat">{price}</p>
        </div>
      </div>
      <div className="ml-auto w-full md:w-auto flex flex-row justify-between md:flex-col md:space-y-8">
        <button
          onClick={() => addToBasket({ desc, price, id })}
          className=" bg-darkPrimary hover:bg-opacity-100 text-white font-montserrat border-none border py-2 px-8 cursor-pointer text-[10px] w-fit font-light"
        >
          Add to Cart
        </button>
        <button
          type="button"
          onClick={() => removeFromFavorites(id)}
          className=" flex justify-center hover:underline "
        >

          <p>Remove</p>

        </button>
      </div>
    </div>
  );
};

export default FavoriteCard;
