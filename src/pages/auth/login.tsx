import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useLogin from "../../hooks/useLogin";
import { Triangle } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useStore from "../../State";

const Login = () => {
  const [userCredentials, setUserCredentials] = useState<{
    username: string | undefined;
    email: string | undefined;
  } | null>({ username: "", email: "" });

  useEffect(() => {
    const storedUserData = localStorage.getItem("userCredentials");
    if (storedUserData) {
      setUserCredentials(JSON.parse(storedUserData));
    }
  }, []);

  const navigate = useNavigate();

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

  const successnotification = () => {
    toast.success("Sign In Successful", {
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

  const errornotification = (err: any) => {
    toast.error(err, {
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

  const { user, addUser } = useStore();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="font-playfair text-3xl">Login</div>
      <form
        className="w-full p-7 max-w-2xl flex flex-col items-center"
        onSubmit={handleSubmit((data) =>
          mutate(data, {
            onSuccess: (data) => {
              addUser(data?.user?.username, data?.user?.email);
              setTimeout(() => {
                successnotification();
              }, 100);
              // console.log(userCredentials);
            },
            onError: (res) =>
              setTimeout(() => {
                errornotification(res.message);
              }, 100),
          })
        )}
      >
        <input
          {...register("identifier")}
          className={`outline-none w-full border-[#CAC6DA] border-2 px-5 py-4 rounded-lg mb-6 ${
            errors.identifier ? "border-red-600" : "border-[#CAC6DA]"
          }`}
          placeholder="Email/Username"
          type="text"
        />
        <input
          {...register("password")}
          className={`outline-none w-full border-[#CAC6DA] border-2 px-5 py-4 rounded-lg mb-6 ${
            errors.password ? "border-red-600" : "border-[#CAC6DA]"
          }`}
          placeholder="Password"
          type="text"
        />
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
      <button
        onClick={() => {
          console.log(user);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Login;
