import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Item {
  id: number;
  attributes: {
    productName: string;
    price: number;
  };
}

interface ProductData {
  data: Item[];
}


const getProduct = (category: string | undefined) => {
  return useQuery({
    queryKey: category ? ["category", category, "products"] : ["products"],
    queryFn: () =>
      axios
        .get<ProductData>("https://chapter40-demo.onrender.com/api/products", {
          params: {
            category,
          },
        })
        .then((res) => res.data),
  });
};

export default getProduct;
