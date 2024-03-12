import { formatNumber } from "../../components/ProductCard";

const OrderTracking = () => {
  return (
    <>
      <div className="bg-white h-fit w-full rounded-md">
        <p className="p-4">Orders</p>
        <hr />
        <div className="p-4">
          <div className="border border-slate-400 rounded-md">
            <p className="p-4 font-medium">ORDERS(4)</p>
            <hr />
            <div className="p-4 flex justify-between flex-col gap-y-4">
              <div className="flex border border-slate-400 rounded-md p-4 w-full">
                <img
                  className="w-28 h-28 object-cover mr-2 lg:mr-4"
                  src="/assets/images/dress1.png"
                />
                <div className="w-44 lg:w-full flex flex-col justify-between font-montserrat text-[10px] xl:text-base">
                  <p>Privé Contrast Collar cooperate Dress</p>
                  <div>
                    <p>Available</p>
                    <p>₦{formatNumber(30000)}</p>
                  </div>
                  <button className="bg-[#36254B] py-1 px-6 text-white w-fit xl:text-[15px]">
                    Track Order
                  </button>
                </div>
              </div>
              <div className="flex border border-slate-400 rounded-md p-4 w-full">
                <img
                  className="w-28 h-28 object-cover mr-2 lg:mr-4"
                  src="/assets/images/dress1.png"
                />
                <div className="w-44 lg:w-full flex flex-col justify-between font-montserrat text-[10px] xl:text-base">
                  <p>Privé Contrast Collar cooperate Dress</p>
                  <div>
                    <p>Available</p>
                    <p>₦{formatNumber(30000)}</p>
                  </div>
                  <button className="bg-[#36254B] py-1 px-6 text-white w-fit xl:text-[15px]">
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderTracking;
