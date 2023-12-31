import CloseIcon from "@mui/icons-material/Close";
import CheckoutProduct from "./CheckoutProduct";
import Button from "./Button";
import { AnimatePresence, motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface CheckoutModalProps {
  onClick: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ onClick }) => {
  const navigate = useNavigate();
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
    <m.div
      initial={{ y: "-100vh" }}
      animate={{ y: "0" }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className=" h-screen overflow-y-scroll px-4 max-w-[500px] flex flex-col items-center bg-white fixed right-0 border-l border-[#CAC6DA]"
    >
      <div className="flex justify-between py-4 font-playfair text-2xl sticky top-0 bg-white w-full">
        <div>Cart</div>
        <CloseIcon onClick={onClick} className="cursor-pointer" />
      </div>
      <div>
        {products.map((product) => (
          <CheckoutProduct desc={product.desc} price={product.price} />
        ))}
      </div>
      <div
        className="sticky bottom-0 bg-white w-full flex justify-center py-4 border-t border-[#F1F1F1]"
        onClick={() => navigate("/checkout")}
      >
        <Button text={`CHECKOUT: ₦${getTotal()}`} />
      </div>
    </m.div>
  );
};

export default CheckoutModal;
