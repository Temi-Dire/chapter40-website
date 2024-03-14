import { useNavigate } from "react-router-dom";
import useUserInfoStore from "../../store/userInfo";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  firstName: z.string().min(3, "Name should have at least 3 characters"),
  lastName: z.string().min(3, "Name should have at least 3 characters"),
  address: z.string().min(5, "The Address field is required"),
  phone: z
    .string()
    .min(11, "Number should be at least 11 digits")
    .max(11, "Number exceeds 11 digits"),
});
type FormData = z.infer<typeof schema>;

const AddressBook = () => {
  const {
    address,
    phoneNumber,
    fullName,
    setAddress,
    setPhoneNumber,
    setFullName,
  } = useUserInfoStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    //   reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onBlur" });

  return (
    <>
      <div className="bg-white h-fit w-full rounded-md">
        <div className="p-4 flex items-center">
          <KeyboardBackspaceIcon
            className="cursor-pointer"
            onClick={() => navigate("/customer/address")}
          />
          <p className="ml-4">Account Overview</p>
        </div>
        <hr />
        <form
          onSubmit={handleSubmit((data) => {
            setFullName({ firstname: data.firstName, lastname: data.lastName });
            setPhoneNumber(data.phone);
            setAddress(data.address);
          })}
          className="p-4"
        >
          <div className="md:flex gap-5 mb-5">
            <div className="flex flex-col md:w-1/2 mb-4 md:mb-0">
              <label htmlFor="" className="mb-2">
                First Name
              </label>
              <input
                type="text"
                className={`border rounded-md outline-none px-4 py-3 text-lg ${
                  errors.firstName ? "border-red-600" : "border-slate-500"
                }`}
                {...register("firstName")}
                defaultValue={fullName?.firstname}
              />
            </div>
            <div className="flex flex-col md:w-1/2">
              <label htmlFor="" className="mb-2">
                Last Name
              </label>
              <input
                type="text"
                className={`border rounded-md outline-none px-4 py-3 text-lg ${
                  errors.lastName ? "border-red-600" : "border-slate-500"
                }`}
                {...register("lastName")}
                defaultValue={fullName?.lastname}
              />
            </div>
          </div>
          <div className="md:flex gap-5">
            <div className="flex flex-col md:w-1/3 mb-4 md:mb-0">
              <label htmlFor="" className="mb-2">
                Phone Number
              </label>
              <input
                type="text"
                className={`border rounded-md outline-none px-4 py-3 text-lg ${
                  errors.address ? "border-red-600" : "border-slate-500"
                }`}
                {...register("phone")}
                defaultValue={phoneNumber}
              />
              {errors.phone && (
                <p className="text-red-600 ">{errors.phone.message}</p>
              )}
            </div>
            <div className="flex flex-col md:w-2/3">
              <label htmlFor="" className="mb-2">
                Address
              </label>
              <input
                type="text"
                className="border border-slate-500 rounded-md outline-none px-4 py-3 text-lg"
                {...register("address")}
                defaultValue={address}
              />
            </div>
          </div>
          <button
            className={`bg-[#36254B] py-1 px-6 mt-6 text-white w-fit xl:text-[15px] mb-2 rounded-md `}
          >
            EDIT
          </button>
        </form>
        {/* <button onClick={() => console.log(address)}>Click</button> */}
      </div>
    </>
  );
};

export default AddressBook;
