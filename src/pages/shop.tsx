import { useState } from "react";

import Navbar from "../components/Navbar";
import FooterSection from "../sections/footer";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import getProduct from "../hooks/getProduct";
import { ThreeDots } from "react-loader-spinner";

const Shop = () => {
  const categories = [
    "all",
    "jewelries",
    "gowns",
    "trousers",
    "skirts",
    "shirts",
  ];
  const [category, setCategory] = useState<string>();

  const { data: product, isLoading } = getProduct(category);

  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <Navbar />
      <Container>
        {!isLoading ? (
          <div>
            <div className="pt-[30px] lg:pt-[20px] min-w-[375px] w-full max-w-[1230px] mx-auto">
              <div className="flex justify-between items-center lg:flex-col lg:justify-normal">
                <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:items-center">
                  <p className="font-playfair text-[20px] md:text-[28px] lg:text-[32px] xl:text-[36px] text-lightPrimary">
                    Corporate Wear
                  </p>
                  <p className="text-[11px] md:text-[14px] font-light">
                    Home/Shop/Checkout
                  </p>
                </div>
                <div className="lg:flex justify-between items-center lg:w-full lg:pt-[20px]">
                  <p className="font-montserrat hidden lg:block text-[20px]">
                    37 Products
                  </p>
                  <div className="text-sm sm:text-base grid gap-1 relative">
                    <button
                      className="flex gap-[2px] items-center justify-between border-[1px] border-black-500 rounded-[5px] h-fit p-[8px] w-[145px]"
                      onClick={() => setShow(!show)}
                    >
                      <span className="text-[13px] font-playfair">
                        sort by: {!category ? "all" : category}
                      </span>
                      <KeyboardArrowDownIcon />
                    </button>
                    <div
                      className={`shadow-md bg-white absolute z-30 rounded-md w-full top-[45px] left-0 grid gap-2 transition-all duration-300 ease-in-out p-[8px]  border-black-500 ${
                        show
                          ? "p-4 opacity-100 block border-[0.2px] "
                          : "p-0 opacity-0 hidden"
                      }}`}
                    >
                      {categories.map((category) => (
                        <button
                          className={`text-left hover:cursor-pointer hover:font-bold capitalize font-playfair ${
                            show ? "block" : "hidden"
                          }`}
                          type="button"
                          onClick={() => {
                            if (category !== "all") {
                              setCategory(category);
                            } else setCategory(undefined);
                          }}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-[45px] w-full grid grid-cols-2 2sm:grid-cols-3 lg:grid-cols-4 gap-[24px] lg:mx-auto lg:w-fit">
              {product?.data.map((item, i) => (
                <ProductCard
                  key={i}
                  id={item.id}
                  desc={item.attributes.productName}
                  price={item.attributes.price}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-screen">
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#634d93"
              radius="9"
              ariaLabel="three-dots-loading"
            />
          </div>
        )}
      </Container>
      <FooterSection />
    </>
  );
};

export default Shop;
