import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useRegister from "../../hooks/useRegister";
import { Triangle } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

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

  // const passwordPattern =
  //   /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@#$%^&+=!])(?=\S+$).{8,}$/;

  const { mutate, isPending } = useRegister();

  const successnotification = () => {
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

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center font-playfair text-3xl mb-7">
        CREATE AN ACCOUNT
      </div>
      <form
        className="flex flex-col items-center mx-auto w-full max-w-xl p-7"
        onSubmit={handleSubmit((data) => {
          if (isValid) {
            mutate(data, {
              onSuccess: () => {
                setTimeout(() => {
                  successnotification();
                }, 100);
              },
              onError: () =>
                setTimeout(() => {
                  errornotification("something is wrong");
                }, 100),
            });
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
        <input
          {...register("password")}
          className={`w-full outline-none px-5 py-3 border-2 mb-6 rounded-lg ${
            errors.password ? "border-red-600" : "border-[#CAC6DA]"
          }`}
          placeholder="PASSWORD"
          type="password"
        />
        {/* <input
          {...register("re-entered password")}
          className={`w-full outline-none px-5 py-3 border mb-6 ${
            errors["re-entered password"]
              ? "border-red-600"
              : "border-[#CAC6DA]"
          }`}
          placeholder="RE-ENTER PASSWORD"
          type="text"
        /> */}
        <button
          className="bg-[#634D93] text-white text-xl py-4 px-10 w-full max-w-md flex justify-center"
          // disabled={!isValid}
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
