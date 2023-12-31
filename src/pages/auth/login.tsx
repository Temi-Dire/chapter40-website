import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useLogin from "../../hooks/useLogin";
import { Triangle } from "react-loader-spinner";

const Login = () => {
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

  const { error } = useLogin();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="font-playfair text-3xl mb-7">Login</div>
      <form
        className="w-full px-7 max-w-2xl flex flex-col items-center"
        onSubmit={handleSubmit((data) => console.log(data))}
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
          <Triangle height="20" width="20" color="#ffffff" />
          <p className="ml-3 font-montserrat">Login</p>
        </button>
      </form>
    </div>
  );
};

export default Login;
