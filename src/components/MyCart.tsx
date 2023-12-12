const MyCart = () => {
  return (
    <div className="lg:pt-[24px] pl-[24px] pr-[170px]">
      <p className=" font-playfair text-[32px] text-[#242424] text-center mb-[51px]">
        Your Cart
      </p>
      <div className="flex space-x-[20px] mb-[387px]">
        <img src="/assets/images/cartImage.png" alt="Cart Image" />
        <div className=" w-full">
          <p className=" font-playfair text-[#242424] text-[20px] mb-[8px]">
            <span className="block">Privé Contrast Collar</span> cooperate Dress
          </p>
          <div className=" flex justify-between mb-[33px]">
            <p className="text-[#242424] font-montserrat text-[16px]">
              ₦ 30,000
            </p>
            <img src="/assets/Rating.svg" alt="ratings" />
          </div>
          <div className="flex justify-between">
            <div className="flex border border-[#242424] justify-between">
              <button>
                <img src="/assets/Minus.svg" alt="reduce button" />
              </button>
              <p className=" font-montserrat">1</p>
              <button>
                <img src="/assets/Add.svg" alt="increase button" />
              </button>
            </div>
            <button className=" font-roboto text-[#242424] text-[16px] underline">
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="border border-[#DFDFDF] px-[24px] py-[20px] ml-[27px]">
        <p className=" font-playfair text-[#242424] text-[24px]">
          Order Summary
        </p>
      </div>
    </div>
  );
};

export default MyCart;
