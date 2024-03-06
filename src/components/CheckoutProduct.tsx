import useStore from "../State";

interface CheckoutProductProps {
  desc: string;
  price: number;
  id: number;
  quantity: number;
}

const CheckoutProduct: React.FC<CheckoutProductProps> = ({
  desc,
  price,
  id,
  quantity,
}) => {
  const store = useStore();
  const decrement = store.decrement;
  const increment = store.increment;
  const removeFromBasket = store.removeFromBasket;
  return (
    <div className="grid grid-cols-[auto,1fr] gap-5  border border-[#CAC6DA] px-3 py-2 mb-4 bg-white max-w-md flex-shrink-0 ">
      <img
        className="h-[140px] object-cover"
        src="/assets/images/checkoutproduct.png"
        alt=""
      />
      <div className="flex flex-col justify-between">
        <div>
          <div className="font-playfair text-base ">{desc}</div>
          <div className="flex justify-between mt-3">
            <div className="font-montserrat text-md">{"₦" + price}</div>
            {/* <div>⭐⭐⭐⭐⭐</div> */}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="border border-black flex justify-between lg:py-1 px-2 sm:px-4 items-center">
            {/* <RemoveIcon
              onClick={() => decrement(id)}
              className="cursor-pointer"
            /> */}
            <p onClick={() => decrement(id)} className="cursor-pointer">
              -
            </p>
            <p className="lg:mx-4 mx-2">{quantity}</p>
            {/* <AddIcon onClick={() => increment(id)} className="cursor-pointer" /> */}
            <p onClick={() => increment(id)} className="cursor-pointer">
              +
            </p>
          </div>
          <button
            className="underline text-sm"
            onClick={() => removeFromBasket(id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
