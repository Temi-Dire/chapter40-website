import useStore from "../State";
import CheckoutProduct from "./CheckoutProduct";

const MyCart = () => {
  const store = useStore();
  const basket = store.basket;

  return (
    <div className="lg:pt-[24px] px-10">
      <p className=" font-playfair text-[32px] text-[#242424] text-center mb-[51px]">
        Your Cart
      </p>
      {basket.map((item) => (
        <CheckoutProduct
          desc={item.desc}
          id={item.id}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};

export default MyCart;
