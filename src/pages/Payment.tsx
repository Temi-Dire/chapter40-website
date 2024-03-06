const PaymentOptions = () => {
  return (
    <>
      <h2 className="mb-4 font-montserrat">Payment Method</h2>
      <div className="max-w-md p-4 border rounded-md font-montserrat">
        <div className="payment-option mb-4">
          <input
            type="radio"
            name="paymentMethod"
            id="onlinePayment"
            value="online"
            className="mr-2"
          />
          <label htmlFor="onlinePayment" className="text-gray-700">
            Online Payment (Credit Card, etc.)
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
          />
          <label htmlFor="offlinePayment" className="text-gray-700">
            Offline Payment
          </label>
        </div>
      </div>
    </>
  );
};

export default PaymentOptions;
