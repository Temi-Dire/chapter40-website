import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useLogin from "../../hooks/useLogin";
import { Triangle } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const schema = z.object({
    identifier: z.string().min(5, "not up to 10 characters"),
    password: z.string(),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutate, isPending } = useLogin();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="font-playfair text-3xl">Login</div>
      <form
        className="w-full p-7 max-w-2xl flex flex-col items-center"
        onSubmit={handleSubmit((data) => mutate(data))}
      >
        <input
          {...register("identifier")}
          className={`outline-none w-full border-[#CAC6DA] border-2 px-5 py-4 rounded-lg mb-6 ${
            errors.identifier ? "border-red-600" : "border-[#CAC6DA]"
          }`}
          placeholder="Email/Username"
          type="text"
        />
        <div
          className={`w-full flex border-[#CAC6DA] border-2 px-5 py-4 rounded-lg mb-6 ${
            errors.password ? "border-red-600" : "border-[#CAC6DA]"
          }`}
        >
          <input
            {...register("password")}
            className="outline-none w-full"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
          />
          <div
            className="ml-4 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <VisibilityIcon className="text-[#CAC6DA]" />
            ) : (
              <VisibilityOffIcon className="text-[#CAC6DA]" />
            )}
          </div>
        </div>
        <button className="bg-[#634D93] text-white text-xl py-4 px-10 w-full max-w-md flex justify-center items-center ">
          {isPending && <Triangle height="20" width="20" color="#ffffff" />}
          <p className="ml-3 font-montserrat">Login</p>
        </button>
      </form>
      <div className="flex justify-center px-7">
        <div className="font-montserrat">
          Don't have an account?{" "}
          <span
            className="text-[#634D93] cursor-pointer"
            onClick={() => navigate("/auth/signup")}
          >
            Sign up
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
