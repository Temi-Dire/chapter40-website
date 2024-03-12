import { PaystackButton } from "react-paystack";
import useStore from "../store/State";
import useInformationStore from "../store/shippingInfo";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Link, useNavigate } from "react-router-dom";


const PaystackPayment = () => {
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const navigate = useNavigate()

  const onSuccess = (reference: string) => {
    navigate('/customer/orders')
    console.log("Payment successful", reference);
    // also remember to use toastify here
  };

  const onClose = () => {
    
    console.log("Payment closed");
    // Remember to use toastify here
  };

  const { email } = useInformationStore();
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

        <Link  to={'/cart/shipping'} className=" flex-nowrap">
          <ArrowBackIosNewOutlinedIcon />
          return to shipping
        </Link>
      </div>
    </>
  );
};

export default PaystackPayment;
