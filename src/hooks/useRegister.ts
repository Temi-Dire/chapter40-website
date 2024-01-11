import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { errornotification, successnotification } from "./useLogin";
import { useNavigate } from "react-router-dom";

interface Details {
  email: string;
  username: string;
  password: string;
}

const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (details: Details) =>
      axios
        .post<Details>(
          "https://chapter40-demo.onrender.com/api/auth/local/register",
          details
        )
        .then((res) => res.data),
    onSuccess: () => {
      setTimeout(() => {
        successnotification();
      }, 100);
      setTimeout(() => {
        navigate("/auth/login");
      }, 7000);
    },
    onError: () =>
      setTimeout(() => {
        errornotification("something is wrong");
      }, 100),
  });
};
export default useRegister;
