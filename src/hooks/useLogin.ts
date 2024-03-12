import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import useStore from "../store/State";
import { useNavigate } from "react-router-dom";

interface Details {
  identifier: string;
  password: string;
  user?: {
    email: string;
    username: string;
  };
}

export const successnotification = () => {
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

export const errornotification = (err: any) => {
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

const useLogin = () => {
  const { addUser } = useStore();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: Details) => {
      return axios
        .post<Details>(
          "https://chapter40-demo.onrender.com/api/auth/local",
          data
        )
        .then((res) => res.data);
    },
    onSuccess: (data) => {
      const { username, email } = data.user || {};
      addUser({ username, email });
      setTimeout(() => {
        successnotification();
      }, 100);
      setTimeout(() => {
        navigate("/");
      }, 7000);
      console.log(data);
    },
    onError: (res) => {
      setTimeout(() => {
        errornotification(res.message);
      }, 100);
      console.log(res);
    },
  });
};

export default useLogin;
