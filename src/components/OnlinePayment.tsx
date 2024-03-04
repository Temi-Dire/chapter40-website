import { PaystackButton } from "react-paystack";
import useStore from "../State";
import useInformationStore from "../store/shippingInfo";

const OnlinePayment = () => {

  const publicKey: string = "YOUR_PAYSTACK_PUBLIC_KEY";

  const onSuccess = (reference: string) => {
    console.log("Payment successful", reference);
    //use toastify....
  };

  const onClose = () => {
    console.log("Payment closed");
    // remember to use toastify to notify user...
  };

  const store = useStore();
  const basket = store.basket;

  const getTotal = () => {
    let sum: number = 0;
    for (let i = 0; i < basket.length; i++) {
      sum += basket[i].price * basket[i].quantity;
    }
    return sum;
  };

  const { email } = useInformationStore();

  const config = {
    email,
    amount: getTotal() * 100,
    publicKey,
    text: "Pay Now",
    onSuccess,
    onClose,
  };

  console.log(email);
  console.log(getTotal() * 100)

  return (
    <div className="max-w-md my-8 p-4 bg-white shadow-md rounded-md font-montserrat">
      <h1 className="text-2xl font-semibold mb-4">Pay with Paystack</h1>



      <PaystackButton {...config} />
    </div>
  );
};

export default OnlinePayment;
