import Navbar from "../components/Navbar";

const Order = () => {
  return (
    <>
      <Navbar />
      <div className="m-4 lg:mx-16 text-[#7C7C7C] flex flex-col">
        <div>
          <h1 className="font-playfair text-lg font-bold text-[#242424] lg:text-xl">Order Confirmed!</h1>
          <p className="mt-3 font-montserrat">
            Your order has been confirmed, kindly check your profile to track
            your order
          </p>
        </div>
        <hr className="my-10" />
        <div className="grid grid-cols-3 gap-4">
          <p className="justify-self-start font-montserrat">Item</p>
          <p className="justify-self-center font-montserrat">Quantity</p>
          <p className="justify-self-end font-montserrat">Price</p>

          <div>
            <div className="bg-red-600 w-20 h-20 "></div>
            <p className="font-playfair mt-2 text-sm text-[#242424] lg:text-base">
              Privé Contrast Collar cooperate Dress
            </p>
          </div>
          <div className="justify-self-center  self-center text-[#242424]">01</div>
          <div className="justify-self-end self-center text-[#242424]">$30000</div>
        </div>

        <hr className="my-10" />

        <div className="lg:flex lg:justify-between mb-10">
          <div className="font-montserrat">
            <div className="flex justify-between mb-4 lg:w-60">
              <p>Subtotal</p>
              <p className="font-bold text-[#242424]">$40000</p>
            </div>
            <div className="flex justify-between mb-4 lg:w-60">
              <p>Tax</p>
              <p className="font-bold text-[#242424]">$40000</p>
            </div>
            <div className="flex justify-between mb-4 lg:w-60">
              <p>Shipping Fee</p>
              <p className="font-bold text-[#242424]">$40000</p>
            </div>
            <div className="flex justify-between lg:w-60">
              <p className="font-bold text-[#242424]">Total</p>
              <p className="font-bold text-[#242424]">$40000</p>
            </div>
          </div>
          <hr className="my-10 lg:hidden"/>
          <div>
            <div className="mb-10 lg:mb-5">
              <p className="font-playfair mb-1">Payment</p>
              <p className="font-semibold text-[#242424] font-montserrat">Transfer/Card</p>
            </div>
            <div className="mb-10 lg:mb-0">
              <p className="font-playfair mb-1">Shipping Address</p>
              <p className="font-semibold text-[#242424] font-montserrat">7A, Taiwo Odunuga Close, Ire-Akari Estate</p>
            </div>
          </div>
        </div>

        <button className="text-white bg-purple-950 w-full py-3 font-roboto lg:w-60 self-center">Track Order</button>
      </div>
    </>
  );
};

export default Order;
