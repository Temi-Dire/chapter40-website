import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import useUserInfoStore from "../store/userInfo";

const date = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sat",
];

const day = days[date.getDay()];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const month = months[date.getMonth()];

const Shipping = () => {
  const navigate = useNavigate();
  const { phoneNumber, address } = useUserInfoStore();

  return (
    <div className="font-montserrat">
      <div className="flex justify-between font-montserrat mb-2">
        <p className="text-[#36254B] text-[20px] font-medium">Contact</p>
        <p
          className="text-[#CDC8E3] text-[16px] hover:text-black hover:cursor-pointer"
          onClick={() => navigate("/checkout/info")}
        >
          Change
        </p>
      </div>
      <p className="font-montserrat">{phoneNumber}</p>
      <div className="border border-[#DFDFDF] my-4" />
      <div className="flex justify-between font-montserrat mb-2 mt-6">
        <p className="text-[#36254B] text-[20px] font-medium">Ship to</p>
        <p
          className="text-[#CDC8E3] text-[16px] hover:text-black hover:cursor-pointer"
          onClick={() => navigate("/checkout/info")}
        >
          Change
        </p>
      </div>
      <p className="font-montserrat">{address}</p>
      <div className="border bg-[#DFDFDF] my-4" />
      <p className="font-montserrat font-medium text-[#272F25] text-xl mt-6 mb-2">
        Delivery Day
      </p>
      <p className=" text-[#606060] text-[16px] mb-5">
        Takes within 3 to 4 Business Days
      </p>
      <div className="flex justify-between">
        <p>Expected Date:</p>
        <div className="flex items-center space-x-1">
          <p className=" font-montserrat text-[16px] text-[#606060]">
            {`Between ${day} ${date.getDate()} ${month}, ${date.getFullYear()} & ${day} ${date.getDate()} ${month}, ${date.getFullYear()}`}
          </p>
        </div>
      </div>
      <div className="border bg-[#DFDFDF] mt-4 mb-6" />

      <div className="flex flex-col space-y-4 lg:flex-row-reverse lg:justify-between items-center">
        <button
          type="submit"
          onClick={() => navigate("/checkout/payment")}
          className="bg-darkPrimary w-full lg:w-auto px-[32px] py-[16px] text-white font-roboto"
        >
          <p>Continue to Payment</p>
        </button>

        <Link
          to="/checkout/info"
          className="hover:text-darkPrimary flex space-x-2 font-montserrat text-[#634D93] text-[16px]"
        >
          <ArrowBackIosNewOutlinedIcon />
          <p>return to info</p>
        </Link>
      </div>
    </div>
  );
};

export default Shipping;
