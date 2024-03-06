import { PaystackButton } from "react-paystack";
import useInformationStore from "../store/shippingInfo";
import useStore from "../State";

const PaystackPayment = () => {
  

  const publicKey = import.meta.env.VITE_PUBLIC_KEY; 

  const onSuccess = (reference: string) => {
    console.log("Payment successful", reference);
    // and here too as well
  };

  const onClose = () => {
    console.log("Payment closed");

    // remember to use toastify here
  };
  const {email} = useInformationStore();
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
    text: "Click here to pay now",
    onSuccess,
    onClose,
  };

  return (
    <div className="max-w-md my-8 p-4 bg-white shadow-md  font-montserrat rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Pay with Paystack</h1>
      <PaystackButton {...config} />
    </div>
  );
};

export default PaystackPayment;
