import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

const Shipping = () => {
  const navigate = useNavigate();
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
      <p className=" font-roboto text-[#606060] text-[16px] mb-[24px]">
        3 to 4 Business Days
      </p>
      <div className="flex justify-between">
        <p>Expected Date:</p>
        <div className="flex items-center space-x-1">
          <div className=" border border-[#A2B39F] rounded-lg h-[16px] w-[16px]" />
          <p className=" font-montserrat text-[16px] text-[#202020]">
            Monday, August 14
          </p>
        </div>
      </div>
      <div className="border bg-[#DFDFDF] my-[30px]" />

      <div className="flex flex-col space-y-4 lg:flex-row-reverse lg:justify-between items-center">
        <button
          type="submit"
          onClick={() => navigate("/payment")}
          className="bg-darkPrimary w-full lg:w-auto px-[32px] py-[16px] text-white font-roboto"
        >
          <p>Continue to Payment</p>
        </button>
        <div className="flex space-x-2 font-montserrat text-[#634D93] text-[16px]">
          <button onClick={() => navigate("/Checkoutpage/info")}>
            <ArrowBackIosNewOutlinedIcon />
          </button>
          <Link to="/Checkoutpage/info" className="hover:text-darkPrimary">
            return to info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
