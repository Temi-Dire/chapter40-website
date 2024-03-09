


import { PaystackButton } from "react-paystack";
import useStore from "../State";
import useInformationStore from "../store/shippingInfo";

const PaystackPayment = () => {

  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const onSuccess = (reference: string) => {
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
    <div className="max-w-md my-8 p-4 bg-white shadow-md font-montserrat rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Pay with Paystack</h1>

      </div>
      <PaystackButton {...config} className="bg-[#36254B] text-gray-200 p-4" />
    </div>
  );
};

export default PaystackPayment;

