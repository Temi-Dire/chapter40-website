import { Link, useNavigate } from "react-router-dom";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyboardEventHandler } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import useStore from "../State";

interface Props {
  onSubmit: (data: FormData) => void;
}

const schema = z.object({
  state: z.string(),
  email: z.string().min(5, "not up to 5 characters"),
  firstName: z.string(),
  lastName: z.string(),
  company: z.string(),
  address: z.string(),
  apartment: z.string(),
  postalCode: z.string().min(6).max(6),
  city: z.string(),
  phone: z.string().min(5),
});

type FormData = z.infer<typeof schema>;

const Information = ({ onSubmit }: Props) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onBlur" });


  const inputContainerStyles = {
    base: "lg:w-1/2 border border-[#606060] px-[16px] py-2",
    input: "outline-none w-full",
  };
  const allowOnlyNumbers: KeyboardEventHandler<HTMLInputElement> = (evt) => {
    const keysAllowed: string[] = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "Backspace",
    ];
    const keyPressed: string = evt.key;

    if (!keysAllowed.includes(keyPressed)) {
      evt.preventDefault();
    }
  };

  const { user } = useStore();

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            reset();
          })}
        >
          <div className="flex justify-between mb-2">
            <p className="text-[14px] lg:text-[20px]">Contact</p>
            {!user && (
              <div className="space-x-2 flex font-montserrat text-[12px] lg:text-[16px] font-normal">
                <p className="text-[#0C0C0C]">have an account?</p>
                <Link
                  to="/auth/login"
                  className="hover:text-[#634D93] text-[#5A6D57] lg:text-[#0C0C0C] cursor-pointer"
                >
                  {" "}
                  login
                </Link>
              </div>
            )}
          </div>
          <div
            className={`flex border items-center border-[#606060] px-[16px] ${
              errors.email ? "border-red-600" : ""
            } py-2 space-x-[4px]`}
          >
            <Person4OutlinedIcon fontSize="small" className="text-[#606060]" />
            <div className="flex-1">
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                required
                className={`font-montserrat  outline-none w-full text-[#606060]`}
              />
            </div>
          </div>
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
          <div className="flex space-x-1 mt-1 mb-[28px]">
            <input type="checkbox" className="rounded-none" />
            <p className="font-montserrat text-[#0C0C0C] text-[14px]">
              email me with news and offers
            </p>
          </div>
          <header className=" font-montserrat lg:font-playfair text-[20px] font-normal mb-[20px]">
            Shipping Address
          </header>
          <div className="space-y-[8px] font-montserrat">
            <div className="flex justify-between border border-[#606060] px-[16px] py-2 space-x-[4px]">
              <input
                {...register("state")}
                type="text"
                placeholder="State"
                required
                className="outline-none w-full text-[#606060]"
              />
            </div>
            <div className="space-y-[8px] lg:space-y-0 lg:flex lg:space-x-[24px] font-montserrat">
              <div className={inputContainerStyles.base}>
                <input
                  {...register("firstName")}
                  type="text"
                  placeholder="first name"
                  required
                  className={inputContainerStyles.input}
                />
              </div>
              <div className={inputContainerStyles.base}>
                <input
                  {...register("lastName")}
                  type="text"
                  placeholder="last name"
                  required
                  className={inputContainerStyles.input}
                />
              </div>
            </div>
            <div className="flex justify-between border border-[#606060] px-[16px] py-2">
              <input
                {...register("company")}
                type="text"
                placeholder="Company(Optional)"
                className="outline-none w-full"
              />
            </div>
            <div className="flex justify-between border border-[#606060] px-[16px] py-2">
              <input
                {...register("address")}
                type="text"
                placeholder="Address"
                required
                className="outline-none w-full"
              />
            </div>
            <div className="flex justify-between border border-[#606060] px-[16px] py-2">
              <input
                {...register("apartment")}
                type="text"
                placeholder="apartment,suite,etc.(optional)"
                className="outline-none w-full"
              />
            </div>
            <div className="space-y-[8px] lg:space-y-0 lg:flex lg:space-x-[24px] font-montserrat">
              <div className={inputContainerStyles.base}>
                <input
                  {...register("postalCode")}
                  type="text"
                  placeholder="postal code"
                  required
                  className={inputContainerStyles.input}
                  onKeyDown={allowOnlyNumbers}
                />
              </div>
              <div className={inputContainerStyles.base}>
                <input
                  {...register("city")}
                  type="text"
                  placeholder="city"
                  required
                  className={inputContainerStyles.input}
                />
              </div>
            </div>
            <div className="flex justify-between border border-[#606060] px-[16px] py-2 space-x-[4px]">
              <div className="flex-1">
                <input
                  {...register("phone")}
                  type="text"
                  placeholder="phone"
                  required
                  className="outline-none w-full text-[#606060]"
                  onKeyDown={allowOnlyNumbers}
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

          <div className="flex flex-col space-y-4 lg:flex-row-reverse lg:justify-between items-center">
            <button
              disabled={!isValid}
              type="submit"
              onClick={() => setTimeout(() => {
                navigate("/navigation-page/shipping"), 3000
        
              })}
              className="bg-darkPrimary w-full lg:w-auto px-[32px] hover:cursor-pointer py-[16px] text-white font-roboto"
            >
              <p>Continue to Shipping</p>
            </button>
            <div className="flex space-x-2 font-montserrat text-[#634D93] text-[16px]">


              <button onClick={() => navigate("/cart")}>
                <ArrowBackIosNewOutlinedIcon />
              </button>
              <Link to="/cart" className="hover:text-darkPrimary">
                return to Cart
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Information;
