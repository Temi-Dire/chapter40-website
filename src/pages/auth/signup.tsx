import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const schema = z.object({
    name: z
      .string()
      .min(4, { message: "Name should be atleast 4 characters long" }),
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z
      .string()
      .refine(
        (value) => passwordPattern.test(value),
        "Password must contain at least one letter, one number, one special character, and be at least 8 characters long"
      ),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const passwordPattern =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@#$%^&+=!])(?=\S+$).{8,}$/;

  const notify = () => {
    toast.success("Sign Up Successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center font-playfair text-3xl mb-7">
        CREATE AN ACCOUNT
      </div>
      <form
        className="flex flex-col justify-center items-center mx-8 lg:mx-40"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <input
          {...register("name")}
          className={`w-full outline-none px-5 py-3 border  ${
            errors.name ? "border-red-600 mb-1" : "mb-6"
          }`}
          type="text"
          placeholder="NAME"
        />
        {errors.name && (
          <p className="text-red-800 mb-3 text-sm text-left">
            {errors.name.message}
          </p>
        )}
        <input
          {...register("email")}
          className={`w-full outline-none px-5 py-3 border ${
            errors.email ? "border-red-600 mb-1" : "mb-6"
          }`}
          type="text"
          placeholder="EMAIL"
        />
        {errors.email && (
          <p className="text-red-800 mb-3 text-sm text-left">
            {errors.email.message}
          </p>
        )}
        <input
          {...register("password")}
          className={`w-full outline-none px-5 py-3 border ${
            errors.password ? "border-red-600 mb-1" : "mb-6"
          } `}
          type="password"
          placeholder="PASSWORD"
        />
        {errors.password && (
          <p className="text-red-800 mb-3 text-sm">{errors.password.message}</p>
        )}
        <input
          className="w-full outline-none px-5 py-3 border border-[#CAC6DA] mb-3"
          type="password"
          placeholder="RE-ENTER PASSWORD"
        />
        <button
          className="bg-[#36254B] text-white px-4 py-2 font-roboto"
          disabled={!isValid}
          type="submit"
          onClick={notify}
        >
          Create Account
        </button>
      </form>
      {/* <div className="flex justify-center flex-col space-y-6">
        <Button text={"create account"} />
        <div className="text-xl font-montserrat">
          Already have an account?{" "}
          <span className="text-[#634D93] cursor-pointer">Log in</span>
        </div>
      </div> */}
      <ToastContainer />
    </div>
  );
};

export default Signup;
