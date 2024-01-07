import { Link } from "react-router-dom";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import NavigateComponent from "../components/NavigateComponent";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  onSubmit: (data: FormData) => void;
}

const schema = z.object({
  email: z.string(),
  country: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  company: z.string(),
  address: z.string(),
  apartment: z.string(),
  postalCode: z.number(),
  city: z.string(),
  phone: z.number(),
});

type FormData = z.infer<typeof schema>;

const Information = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const inputContainerStyles = {
    base: "lg:w-1/2 border border-[#606060] px-[16px] py-2",
    input: "outline-none w-full",
  };
  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
            reset();
          })}
        >
          <div className="flex justify-between mb-2">
            <p className="text-[14px] lg:text-[20px]">Contact</p>
            <div className="space-x-2 flex font-montserrat text-[12px] lg:text-[16px] font-normal">
              <p className="text-[#0C0C0C]">have an account?</p>
              <Link
                to="/"
                className="hover:text-[#634D93] text-[#5A6D57] lg:text-[#0C0C0C] cursor-pointer"
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
                {...register("email")}
                type="email"
                placeholder="Email"
                required
                className="font-montserrat outline-none w-full text-[#606060]"
              />
            </div>
            {errors.email && (
              <p className=" text-red-600">{errors.email.message}</p>
            )}
          </div>
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
              <div className="flex-1">
                <input
                  {...register("country")}
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

          <NavigateComponent
            isValid={!isValid}
            label="Shipping"
            continueToPath={"/navigation-page/shipping"}
            onSubmit={handleSubmit((data) => {
              onSubmit(data);
              reset(data);
            })}
          />
        </form>
      </div>
    </>
  );
};

export default Information;
