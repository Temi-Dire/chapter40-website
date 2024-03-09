import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const OrderTracking = () => {
  return (
    <div>
      <p className="font-montserrat font-bold ">ORDER ID: 335465465426</p>
      <div className="flex items-center font-montserrat my-6">
        <p className="pr-2 border-r-2 border-[#7C7C7C]">
          Order date: <span className="font-bold ">Feb 12, 2022</span>
        </p>
        <p className="pl-2 text-[#12B76A] font-bold">
          <LocalShippingIcon /> Estimated delivery: May 16, 2022
        </p>
      </div>
      <hr />
      {/* <Stepper /> */}
      <div className="flex justify-between my-6 text-xs text-center h-24 font-montserrat">
        <div className="flex flex-col items-center justify-between">
          <p className="w-20 text-[#12B76A]">Order Confirmed</p>
          <div className="bg-[#12B76A] w-5 h-5 rounded-full" />
          <p className="w-10">Wed, 11 Jan</p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <p className="w-20">Already Shipped</p>
          <div className="bg-[#7C7C7C] w-5 h-5 rounded-full" />
          <p className="w-10">Wed, 11 Jan</p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <p className="w-20">Out for Delivery</p>
          <div className="bg-[#7C7C7C] w-5 h-5 rounded-full" />
          <p className="w-10">Wed, 11 Jan</p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <p className="w-20">Delivered, thanks!</p>
          <div className="bg-[#7C7C7C] w-5 h-5 rounded-full" />
          <p className="w-10">Wed, 11 Jan</p>
        </div>
      </div>

      <p className="font-bold text-[#7C7C7C] underline ">YOUR ORDERS</p>
      <div className="flex justify-between my-6">
        <div className="flex">
          <img
            className="w-28 h-28 object-cover mr-2 lg:mr-4"
            src="/assets/images/dress1.png"
          />
          <div className="w-44 lg:w-full flex flex-col justify-between font-montserrat">
            <p>Privé Contrast Collar cooperate Dress</p>
            <div>
              <p>Quantity: 1</p>
              <p>$30000</p>
            </div>
            {/* <button className="bg-[#36254B] py-1 px-6 text-white">Cancel Order</button> */}
          </div>
        </div>
      </div>
      <hr />
      <div className="lg:flex lg:justify-between my-10 font-montserrat">
        <div className=" flex flex-col justify-between">
          <div className="flex justify-between md:w-60">
            <p>Subtotal</p>
            <p className="font-bold text-[#242424]">$40000</p>
          </div>
          <div className="flex justify-between md:w-60">
            <p>Tax</p>
            <p className="font-bold text-[#242424]">$40000</p>
          </div>
          <div className="flex justify-between md:w-60">
            <p>Shipping Fee</p>
            <p className="font-bold text-[#242424]">$40000</p>
          </div>
          <div className="flex justify-between md:w-60">
            <p className="font-bold text-[#242424]">Total</p>
            <p className="font-bold text-[#242424]">$40000</p>
          </div>
        </div>
        <hr className="my-10 lg:hidden" />
        <div>
          <div className="mb-10 lg:mb-5">
            <p className=" mb-1 underline">Payment</p>
            <p className="font-semibold text-[#242424] ">Transfer/Card</p>
          </div>
          <div className="mb-10 lg:mb-0">
            <p className=" mb-1 underline">Shipping Address</p>
            <p className="font-semibold text-[#242424] ">
              7A, Taiwo Odunuga Close, Ire-Akari Estate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
