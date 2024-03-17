import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyboardEventHandler } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import useStore from "../store/State";
import useInformationStore from "../store/shippingInfo";
import useUserInfoStore from "../store/userInfo";

const schema = z.object({
  state: z.string().min(3, { message: "State should be a least 3 characters" }),
  email: z
    .string()
    .min(5, "not up to 5 characters")
    .email("The email format you entered is invalid"),
  firstName: z.string().min(3, "Name should have at least 3 characters"),
  lastName: z.string().min(3, "Name should have at least 3 characters"),
  company: z.string(),
  address: z.string().min(5, "The Address field is required"),
  apartment: z.string(),
  postalCode: z.string().min(6, "Postal code should be at least 6 digits"),
  city: z.string().min(3),
  phone: z.string().min(5, "Number should be at least 5 digits"),
});

type FormData = z.infer<typeof schema>;

const Information = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onBlur" });

  const inputContainerStyles = {
    base: "lg:w-1/2 border border-[#606060]",
    input: "outline-none px-[16px] py-2 w-full",
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
  const {
    setEmail,
    setCountryState,
    setFullName,
    setCompany,
    setAddress,
    setApartment,
    setPhoneNumber,
    setPostalCode,
    setCity,
  } = useUserInfoStore();

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            setEmail(data.email);
            setCountryState(data.state);
            setFullName({ firstname: data.firstName, lastname: data.lastName });
            setCompany(data.company);
            setAddress(data.address);
            setApartment(data.apartment);
            setPhoneNumber(data.phone);
            setPostalCode(data.postalCode);
            setCity(data.city);
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
            className={`flex border items-center border-[#606060]  ${
              errors.email ? "border-red-600" : ""
            } `}
          >
            <div className="flex-1">
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                required
                className="font-montserrat py-2 px-[16px]  outline-none w-full text-[#606060]"
              />
            </div>
          </div>
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
          {/* <div className="flex space-x-1 mt-1 mb-[28px]">
            <input type="checkbox" className="rounded-none" />
            <p className="font-montserrat text-[#0C0C0C] text-[14px]">
              email me with news and offers
            </p>
          </div> */}
          <header className=" font-montserrat lg:font-playfair text-[20px] font-normal mt-5 mb-3">
            Shipping Address
          </header>
          <div className="space-y-[8px] font-montserrat">
            <div className="flex justify-between border border-[#606060]  space-x-[4px]">
              <input
                {...register("state")}
                type="text"
                placeholder="State"
                required
                className="outline-none px-[16px] py-2 w-full text-[#606060]"
              />
            </div>
            {errors.state && (
              <p className="text-red-600">{errors.state.message}</p>
            )}
            <div className="space-y-[8px] lg:space-y-0 lg:flex lg:space-x-[24px] font-montserrat">
              <div
                className={`${inputContainerStyles.base} ${
                  errors.firstName ? "border-red-600" : ""
                }`}
              >
                <input
                  {...register("firstName")}
                  type="text"
                  placeholder="first name"
                  required
                  className={inputContainerStyles.input}
                />
              </div>

              <div
                className={`${inputContainerStyles.base} ${
                  errors.lastName ? "border-red-600" : ""
                }`}
              >
                <input
                  {...register("lastName")}
                  type="text"
                  placeholder="last name"
                  required
                  className={inputContainerStyles.input}
                />
              </div>
            </div>
            <div className="flex justify-between border border-[#606060]">
              <input
                {...register("company")}
                type="text"
                placeholder="Company(Optional)"
                className="outline-none px-[16px] py-2 w-full"
              />
            </div>
            <div className="flex justify-between border border-[#606060] ">
              <input
                {...register("address")}
                type="text"
                placeholder="Address"
                required
                className="outline-none px-[16px] py-2 w-full"
              />
            </div>
            {errors.address && (
              <p className="text-red-600">{errors.address.message}</p>
            )}
            <div className="flex justify-between border border-[#606060]">
              <input
                {...register("apartment")}
                type="text"
                placeholder="apartment,suite,etc.(optional)"
                className="outline-none px-[16px] py-2 w-full"
              />
            </div>
            <div className="space-y-[8px] lg:space-y-0 lg:flex lg:space-x-[24px] font-montserrat">
              <div
                className={`${inputContainerStyles.base} ${
                  errors.postalCode ? "border-red-600" : ""
                }`}
              >
                <input
                  {...register("postalCode")}
                  type="text"
                  placeholder="postal code"
                  required
                  className={inputContainerStyles.input}
                  onKeyDown={allowOnlyNumbers}
                />
              </div>
              {errors.postalCode && (
                <p className="text-red-600 lg:hidden">
                  {errors.postalCode.message}
                </p>
              )}
              <div
                className={`${inputContainerStyles.base} ${
                  errors.city ? "border-red-600" : ""
                }`}
              >
                <input
                  {...register("city")}
                  type="text"
                  placeholder="city"
                  required
                  className={inputContainerStyles.input}
                />
              </div>
            </div>
            {errors.postalCode && (
              <p className="text-red-600 sm:hidden lg:block">
                {errors.postalCode.message}
              </p>
            )}
            <div
              className={`flex justify-between border ${
                errors.phone ? "border-red-600" : ""
              } border-[#606060] space-x-[4px]`}
            >
              <input
                {...register("phone")}
                type="text"
                placeholder="phone"
                required
                className="outline-none w-full px-[16px] py-2 text-[#606060]"
                onKeyDown={allowOnlyNumbers}
              />
            </div>
            {errors.phone && (
              <p className="text-red-600">{errors.phone.message}</p>
            )}
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
              onClick={() =>
                setTimeout(() => {
                  navigate("/checkout/shipping"), 3000;
                })
              }
              className={`bg-${
                isValid ? "darkPrimary" : "darkPrimary hover:brightness-125"
              }  w-full lg:w-auto px-[32px] py-[16px] text-white font-roboto`}
              style={{ cursor: isValid ? "pointer" : "not-allowed" }}
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
