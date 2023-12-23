import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const publicKey = "pk_test_bbaa5b02968054dc8332e5c2fc4b566c84d08f4e";

  const amount = 10000;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const paystackButtonProps = {
    email,
    publicKey,
    amount: 100,
    text: "PAY NOW",
    onSuccess: () => {
      console.log("works");
      console.log(email);
    },
    onClose: () => navigate("/"),
  };

  return (
    <div>
      <div>name</div>
      <input
        className="border border-gray-700"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          //   console.log(name);
        }}
      />
      <div>email</div>
      <input
        className="border border-gray-700"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          //   console.log(email);
        }}
      />
      <div>phone</div>
      <input
        className="border border-gray-700"
        type="text"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
          //   console.log(phone);
        }}
      />
      <PaystackButton {...paystackButtonProps} />
    </div>
  );
};

export default Payment;
