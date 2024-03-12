import CloseIcon from "@mui/icons-material/Close";
import CheckoutProduct from "./CheckoutProduct";
import Button from "./Button";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useStore from "../store/State";

interface CheckoutModalProps {
  onClick: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ onClick }) => {
  const navigate = useNavigate();

  const store = useStore();
  const basket = store.basket;

  const getTotal = () => {
    let sum: number = 0;
    for (let i = 0; i < basket.length; i++) {
      sum += basket[i].price * basket[i].quantity;
    }
    return sum;
  };
  return (
    <div className="w-full flex justify-end">
      <m.div
        initial={{ y: "-100vh" }}
        animate={{ y: "0" }}
        exit={{ y: "100vh" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className=" max-h-[500px] overflow-y-scroll w-full max-w-[500px] flex flex-col items-center bg-white fixed border-t-[0.3px] border-black-500 shadow-lg rounded-sm z-50 border border-slate-200 card__container"
      >
        <div className="flex justify-between px-4 my-2 py-4 font-playfair text-2xl sticky top-0 bg-white w-full border-b border-slate-200">
          <div>Cart</div>
          <CloseIcon onClick={onClick} className="cursor-pointer" />
        </div>
        {basket.length !== 0 ? (
          <div>
            {basket.map((item) => (
              <CheckoutProduct
                desc={item.desc}
                price={item.price}
                id={item.id}
                quantity={item.quantity}
              />
            ))}
            <div
              className="sticky bottom-0 bg-white w-full flex justify-center py-4 border-t border-[#F1F1F1]"
              onClick={() => navigate("/checkout")}
            >
              <Button text={`CHECKOUT: ₦${getTotal()}`} />
            </div>
          </div>
        ) : (
          <div className="w-[400px] h-full flex items-center justify-center mb-10">
            No items have been added yet!
          </div>
        )}
      </m.div>
    </div>
  );
};

export default CheckoutModal;
