import CloseIcon from "@mui/icons-material/Close";
import CheckoutProduct from "./CheckoutProduct";
import Button from "./Button";
import { Link } from "react-router-dom";

const CheckoutModal = () => {
  const products = [
    {
      desc: "Privé Contrast Collar cooperate Dress",
      price: 30000,
    },
    {
      desc: "Privé Contrast Collar cooperate Dress",
      price: 30000,
    },
    {
      desc: "Privé Contrast Collar cooperate Dress",
      price: 30000,
    },
    {
      desc: "Privé Contrast Collar cooperate Dress",
      price: 30000,
    },
    {
      desc: "Privé Contrast Collar cooperate Dress",
      price: 30000,
    },
  ];
  const getTotal = () => {
    let sum: number = 0;
    for (let i = 0; i < products.length; i++) {
      sum += products[i].price;
    }
    return sum;
  };
  return (
    <>
      <div className=" h-screen overflow-y-scroll px-4 max-w-[500px] flex flex-col items-center bg-white">
        <div className="flex justify-between py-4 font-playfair text-2xl sticky top-0 bg-white w-full">
          <div>Cart</div>
          <CloseIcon />
        </div>
        <div>
          {products.map((product) => (
            <CheckoutProduct desc={product.desc} price={product.price} />
          ))}
        </div>
        <div className="sticky bottom-0 bg-white w-full flex justify-center py-4 border-t border-[#F1F1F1]">
          <Button text={`CHECKOUT: ₦${getTotal()}`} />
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;
