import NavigateComponent from "../components/NavigateComponent";

const Shipping = () => {
    return (
      <div>
        <div className="flex justify-between font-montserrat py-[16px]">
          <p className="text-[#36254B] text-[20px]">Contact</p>
          <p className="text-[#CDC8E3] text-[16px]">Change</p>
        </div>
        <div className="border border-[#DFDFDF] my-[16px]" />
        <div className="flex justify-between font-montserrat py-[16px] mb-[30px]">
          <p className="text-[#634D93] text-[20px]">Ship to</p>
          <p className="text-[#CDC8E3] text-[16px]">Change</p>
        </div>
        <p className="font-playfair text-[#272F25] text-[24px]">
          Delivery Options
        </p>
        <div className="border bg-[#DFDFDF] my-[30px]" />
        <div className="flex justify-between mb-[20px]">
          <p className="font-montserrat text-[#868686] text-[20px]">
            Express Courier (Air)
          </p>
          <p className=" font-roboto text-[16px] text-[#0C0C0C]">Free</p>
        </div>
            <p className=" font-roboto text-[#606060] text-[16px]">3 to 4 Business Days</p>
            


        <NavigateComponent label="Payment" continueToPath={"/payment"} />
        </div>
        

        
    );
};

export default Shipping;