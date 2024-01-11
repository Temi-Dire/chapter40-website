import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useRegister from "../../hooks/useRegister";
import { Triangle } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { errornotification } from "../../hooks/useLogin";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const schema = z.object({
    username: z
      .string()
      .min(4, { message: "Name should be atleast 4 characters long" }),
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z
      .string()
      .min(5, { message: "Password should be atleast 5 characters long" }),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutate, isPending } = useRegister();

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center font-playfair text-3xl mb-7">
        CREATE AN ACCOUNT
      </div>
      <form
        className="flex flex-col items-center mx-auto w-full max-w-xl p-7"
        onSubmit={handleSubmit((data) => {
          if (isValid) {
            mutate(data);
          }
        })}
      >
        <input
          {...register("username")}
          className={`w-full outline-none px-5 py-3 border-2 mb-6 rounded-lg ${
            errors.username ? "border-red-600" : "border-[#CAC6DA]"
          }`}
          type="text"
          placeholder="NAME"
        />
        <input
          {...register("email")}
          className={`w-full outline-none px-5 py-3 border-2 mb-6 rounded-lg ${
            errors.email ? "border-red-600" : "border-[#CAC6DA]"
          }`}
          type="text"
          placeholder="EMAIL"
        />
        <div
          className={`w-full flex px-5 py-3 border-2 mb-6 rounded-lg ${
            errors.password ? "border-red-600" : "border-[#CAC6DA]"
          }`}
        >
          <input
            {...register("password")}
            className="w-full outline-none"
            placeholder="PASSWORD"
            type={showPassword ? "text" : "password"}
          />
          <div className="ml-4" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <VisibilityIcon className="text-[#CAC6DA]" />
            ) : (
              <VisibilityOffIcon className="text-[#CAC6DA]" />
            )}
          </div>
        </div>
        <button
          className="bg-[#634D93] text-white text-xl py-4 px-10 w-full max-w-md flex justify-center"
          type="submit"
          onClick={() => {
            if (errors.username) errornotification(errors.username.message);
            else if (errors.email) errornotification(errors.email.message);
            else if (errors.password)
              errornotification(errors.password.message);
          }}
        >
          {isPending && <Triangle height="20" width="20" color="#ffffff" />}
          <p className="ml-3 font-montserrat">create account</p>
        </button>
      </form>
      <div className="flex justify-center px-7">
        <div className="font-montserrat">
          Already have an account?{" "}
          <span
            className="text-[#634D93] cursor-pointer"
            onClick={() => navigate("/auth/login")}
          >
            Log in
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
