import { Link } from "react-router-dom";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import NavigateComponent from "../components/NavigateComponent";


const Information = () => {
  

  
  return (
    <>
      <div>
        <div className="flex justify-between mb-2">
          <p className="text-[20px]">Contact</p>
          <div className="space-x-2 flex font-montserrat text-[16px] font-normal">
            <p className="text-[#0C0C0C]">have an account?</p>
            <Link
              to="/"
              className="hover:text-[#634D93] text-[#0C0C0C] cursor-pointer"
            >
              {" "}
              login
            </Link>
          </div>
        </div>
        <div className="flex border items-center border-[#606060] px-[16px] py-2 space-x-[4px]">
          <Person4OutlinedIcon fontSize="small" className="text-[#606060]" />
          <div className="flex-1">
            <input
              type="email"
              placeholder="Email"
              required
              className="font-montserrat outline-none w-full text-[#606060]"
            />
          </div>
        </div>
        <div className="flex space-x-1 mt-1 mb-[28px]">
          <input type="checkbox" className="rounded-none" />
          <p className="font-montserrat text-[#0C0C0C] text-[14px]">
            email me with news and offers
          </p>
        </div>
        <header className="text-playfair text-[20px] font-normal mb-[20px]">
          Shipping Address
        </header>
        <div className="space-y-[8px] font-montserrat">
          <div className="flex justify-between border border-[#606060] px-[16px] py-2 space-x-[4px]">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Country/region"
                required
                className="outline-none w-full text-[#606060]"
              />
            </div>
            <button>
              <CloseOutlinedIcon
                fontSize="small"
                className="w-[16px] h-[16px] text-[#606060]"
              />
            </button>
          </div>
          <div className="flex space-x-[24px] font-montserrat">
            <div className="w-1/2 flex justify-between border border-[#606060] px-[16px] py-2">
              <input
                type="text"
                placeholder="first name"
                required
                className="outline-none w-full"
              />
            </div>
            <div className="w-1/2 flex justify-between border border-[#606060] px-[16px] py-2">
              <input
                type="text"
                placeholder="last name"
                required
                className="outline-none w-full"
              />
            </div>
          </div>
          <div className="flex justify-between border border-[#606060] px-[16px] py-2">
            <input
              type="text"
              placeholder="Company(Optional)"
              className="outline-none w-full"
            />
          </div>
          <div className="flex justify-between border border-[#606060] px-[16px] py-2">
            <input
              type="text"
              placeholder="Address"
              required
              className="outline-none w-full"
            />
          </div>
          <div className="flex justify-between border border-[#606060] px-[16px] py-2">
            <input
              type="text"
              placeholder="apartment,suite,etc.(optional)"
              className="outline-none w-full"
            />
          </div>
          <div className="flex space-x-[24px] font-montserrat">
            <div className="w-1/2 flex justify-between border border-[#606060] px-[16px] py-2">
              <input
                type="text"
                placeholder="postal code"
                required
                className="outline-none w-full"
              />
            </div>
            <div className="w-1/2 flex justify-between border border-[#606060] px-[16px] py-2">
              <input
                type="text"
                placeholder="city"
                required
                className="outline-none w-full"
              />
            </div>
          </div>
          <div className="flex justify-between border border-[#606060] px-[16px] py-2 space-x-[4px]">
            <div className="flex-1">
              <input
                type="text"
                placeholder="phone"
                required
                className="outline-none w-full text-[#606060]"
              />
            </div>
            <PhoneIphoneOutlinedIcon
              fontSize="small"
              className=" text-[#606060]"
            />
          </div>
        </div>
        <div className="flex space-x-1 mt-1 mb-[80px]">
          <input type="checkbox" className="rounded-none" />
          <p className="font-montserrat text-[#0C0C0C] text-[14px]">
            save this information for next time
          </p>
        </div>
        <NavigateComponent label="Shipping" continueToPath={"/shipping"} />
      </div>
    </>
  );
};

export default Information;
