import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import OnlinePayment from "../components/OnlinePayment"; // Import your online payment form component


const Payment = () => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState<
    string | null
  >("");

  const handlePaymentOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentOption(event.target.value);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className=" font-montserrat">Payment Method</h2>

        <div className="flex space-x- items-center  font-montserrat text-[#36254B] text-[16px]">
          <Link to="/cart/info" className="hover:text-darkPrimary">
            <ArrowBackIosNewOutlinedIcon />
            return to shipping
          </Link>
        </div>
      </div>
      <div className="max-w-md p-4 border rounded-md font-montserrat">
        <div className="payment-option mb-4">
          <input
            type="radio"
            name="paymentMethod"
            id="onlinePayment"
            value="online"
            className="mr-2"
            onChange={handlePaymentOptionChange}
          />
          <label htmlFor="onlinePayment" className="text-gray-700">
            Online Payment (Credit, Dedit Card, etc.)
          </label>
        </div>

        <hr className="my-4 border-t border-gray-300" />

        <div className="payment-option">
          <input
            type="radio"
            name="paymentMethod"
            id="offlinePayment"
            value="offline"
            className="mr-2"
            onChange={handlePaymentOptionChange}
          />
          <label htmlFor="offlinePayment" className="text-gray-700">
            Offline Payment
          </label>
        </div>
      </div>

      {selectedPaymentOption === "online" && <OnlinePayment />}
    </>
  );
};

export default Payment;
