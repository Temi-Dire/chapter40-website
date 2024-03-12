import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email({ message: "This email format is not valid" }),
  phone: z.string().min(1, "Phone Number is required"),
  referral: z.string(),
});

export type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    // handleSubmit,
    formState: { errors},
    // reset,
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onBlur" });

//   const { mutate } = useContact();

//   const handleFormSubmit = (data: FormData) => {
//     if (isValid) {
//       mutate(data);
//       reset();
//     }
//   };

  return (
    <div className="ml-auto font-poppins">
      <div className="text-center lg:text-left">
        <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold mb-7 font-poppins">
          Get in <span className="text-[#DD5471] ">Touch</span>
        </h1>
        <p className="mb-9 font-poppins">
          Let's meet you <br />
          We are delighted to be a part of your success story
        </p>
      </div>
      {/* <form onSubmit={handleSubmit(handleFormSubmit)}> */}
      <form>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Name"
            className="border md:py-4 py-2 w-full px-3 border-gray-300 outline-none"
          />

          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Email"
            className="border md:py-4 py-2 w-full px-3 border-gray-300 outline-none"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="phone"
            {...register("phone")}
            placeholder="Phone number"
            className="border md:py-4 w-full py-2 px-3 border-gray-300 outline-none"
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>
        <div className="mb-7">
          <select
            className="border md:py-4 w-full py-2 px-3 border-gray-300 outline-none"
            id="referralMethod"
            {...register("referral")}
          >
            <option value="">How did you find us?</option>
            <option value="Google">Google</option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Referral">Referral</option>
            <option value="Twitter">Twitter</option>
            <option value="Ads">Ads</option>
            <option value="Website">Website</option>
          </select>
        </div>
        <button className=" md:py-4 py-2 w-full bg-[#DD5471] lg:mb-10 mb-5 transition duration-300 ease-in-out text-white">
          Send
        </button>

      </form>
    </div>
  );
};

export default Form;
