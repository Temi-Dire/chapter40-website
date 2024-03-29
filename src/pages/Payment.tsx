import { PaystackButton } from "react-paystack";
import useStore from "../store/State";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Link, useNavigate } from "react-router-dom";
import useUserInfoStore from "../store/userInfo";

const PaystackPayment = () => {
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const navigate = useNavigate();

  const onSuccess = (reference: string) => {
    navigate('/customer/orders')
    console.log(reference);
  
    // also remember to use toastify here
  };

  const onClose = () => {
    console.log("Payment closed");
    // Remember to use toastify here
  };

  const { email } = useUserInfoStore();
  const store = useStore();
  const basket = store.basket;

  const getTotal = () => {
    let sum: number = 0;
    for (let i = 0; i < basket.length; i++) {
      sum += basket[i].price * basket[i].quantity;
    }
    return sum;
  };

  const config = {
    email,
    amount: getTotal() * 100,
    publicKey,
    text: "Pay Now",
    onSuccess,
    onClose,
  };

  return (
    <>
      <div className="max-w-md my-8 text-sm md:text-lg lg:text-xl bg-white shadow-md font-poppins rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Pay with Paystack</h1>
        </div>
      </div>
      <div className="flex justify-between items-center font-poppins">
        <PaystackButton
          {...config}
          className="bg-[#36254B] text-gray-200 p-4"
        />

        <Link to={"/cart/shipping"} className="flex items-center group">
          <ArrowBackIosNewOutlinedIcon className="w-6 h-6 mr-1 transition-transform transform translate-x-0 group-hover:-translate-x-[4px] duration-300 ease-in-out" />
          <span>Return to Shipping</span>
        </Link>
      </div>
    </>
  );
};

export default PaystackPayment;
