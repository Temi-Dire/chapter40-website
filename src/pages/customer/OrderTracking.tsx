const OrderTracking = () => {
  return (
    <>
      <div className="bg-white h-fit w-full rounded-md">
        <p className="p-4">Order Tracking</p>
        <hr />
        <div className="p-4">
          <div className="flex justify-between my-6 text-xs text-center h-24 font-montserrat">
            <div className="flex flex-col items-center ">
              <div className="flex items-center mb-4">
                <p className="w-20 text-[#12B76A]">Order Confirmed</p>
                <div className="bg-[#12B76A] w-5 h-5 rounded-full" />
              </div>
              <p>Wed, 11 Jan</p>
            </div>
            <div className="flex flex-col items-center ">
              <div className="flex items-center mb-4">
                <p className="w-20 text-[#7C7C7C]">Already Shipped</p>
                <div className="bg-[#7C7C7C] w-5 h-5 rounded-full" />
              </div>
              <p>Wed, 11 Jan</p>
            </div>
            <div className="flex flex-col items-center ">
              <div className="flex items-center mb-4">
                <p className="w-20 text-[#7C7C7C]">Out for Delivery</p>
                <div className="bg-[#7C7C7C] w-5 h-5 rounded-full" />
              </div>
              <p>Wed, 11 Jan</p>
            </div>
            <div className="flex flex-col items-center ">
              <div className="flex items-center mb-4">
                <p className="w-20 text-[#7C7C7C]">Delivered, thanks!</p>
                <div className="bg-[#7C7C7C] w-5 h-5 rounded-full" />
              </div>
              <p>Wed, 11 Jan</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderTracking;
