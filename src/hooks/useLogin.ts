import { useMutation } from "@tanstack/react-query";
import axios from "axios";
interface Details {
  identifier: string;
  password: string;
}

const useLogin = () => {
  return useMutation({
    mutationFn: (data: Details) => {
      return axios
        .post<Details>(
          "https://chapter40-demo.onrender.com/api/auth/local",
          data
        )
        .then((res) => res.data);
    },
  });
};

export default useLogin;
