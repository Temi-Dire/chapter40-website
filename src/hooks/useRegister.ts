import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface Details {
  email: string;
  username: string;
  password: string;
}

const useRegister = () => {
  return useMutation({
    mutationFn: (details: Details) =>
      axios
        .post<Details>(
          "https://chapter40-demo.onrender.com/api/auth/local/register",
          details
        )
        .then((res) => res.data),
  });
};
export default useRegister;
