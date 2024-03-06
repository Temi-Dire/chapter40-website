import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import FooterSection from "../sections/footer";
import ProductFilter from "../components/ProductFilter";
import ProductCard from "../components/ProductCard";

interface Product {
  id: number;
  description: string;
  price: number;
  rating: number;
  category: string;
}

const Shop = () => {
  const [category, setCategory] = useState("all");
  const [dropDownState, setDropDownState] = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState(6);
  const [incrementValue, setIncrementValue] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setDisplayedProducts(6);
        setIncrementValue(4);
      } else {
        setDisplayedProducts(12);
        setIncrementValue(8);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCategoryClick = (category: string) => {
    setCategory(category);
    setDropDownState(false);
    setDisplayedProducts(6);
  };

  const handleDropDownState = () => {
    setDropDownState(!dropDownState);
  };

  const products: Product[] = [
    {
      id: 2,
      description: "Red ankara shirt sumami crimison",
      price: 30000,
      rating: 3,
      category: "shirts",
    },
    {
      id: 2,
      description: "Red ankara shirt sumami crimison",
      price: 30000,
      rating: 4,
      category: "shirts",
    },
    {
      id: 3,
      description: "Red ankara gown sumami crimison",
      price: 30000,
      rating: 4,
      category: "gowns",
    },
    {
      id: 3,
      description: "Red ankara gown sumami crimison",
      price: 30000,
      rating: 4,
      category: "gowns",
    },
    {
      id: 4,
      description: "Red ankara skirt sumami crimison",
      price: 30000,
      rating: 4,
      category: "skirt",
    },
    {
      id: 5,
      description: "Red ankara trousers sumami crimison",
      price: 30000,
      rating: 4,
      category: "trousers",
    },
    {
      id: 5,
      description: "Red ankara trousers sumami crimison",
      price: 30000,
      rating: 4,
      category: "trousers",
    },
    {
      id: 5,
      description: "Red ankara trousers sumami crimison",
      price: 30000,
      rating: 4,
      category: "trousers",
    },
    {
      id: 5,
      description: "Red ankara trousers sumami crimison",
      price: 30000,
      rating: 4,
      category: "trousers",
    },
    {
      id: 5,
      description: "Red ankara trousers sumami crimison",
      price: 30000,
      rating: 4,
      category: "trousers",
    },
    {
      id: 5,
      description: "Red ankara trousers sumami crimison",
      price: 30000,
      rating: 4,
      category: "trousers",
    },
    {
      id: 5,
      description: "Red ankara trousers sumami crimison",
      price: 30000,
      rating: 4,
      category: "trousers",
    },
  ];

  const filteredProducts =
    category !== "all"
      ? products.filter((product) => product.category === category)
      : products;

  const handleLoadMore = () => {
    setDisplayedProducts((prevDisplayed) => prevDisplayed + incrementValue);
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto w-fit">
        <div className="px-[20px] pt-[40px] min-w-[375px] w-full">
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
              <ProductFilter
                handleFilterMenu={handleDropDownState}
                filterState={dropDownState}
                category={category}
                onCategoryChange={handleCategoryClick}
              />
            </div>
          </div>
        </div>
        <div className="px-[20px] pt-[40px] lg:pt-[50px] grid grid-cols-2 gap-y-[40px] gap-x-[20px] pb-14 mx-auto w-fit sm:gap-x-[40px] sm:gap-y-[50px] 2sm:gap-x-[60px] md:grid-cols-3 md:gap-x-[30px] 2lg:gap-y-[80px] 2lg:grid-cols-4 2xl:gap-x-[50px]">
          {filteredProducts.slice(0, displayedProducts).map((prod, index) => (
            <ProductCard
              key={index}
              id={prod.id}
              desc={prod.description}
              rating={prod.rating}
              price={prod.price}
            />
          ))}
        </div>
        <div
          onClick={handleLoadMore}
          className="font-montserrat px-10 py-4 border border-black mx-auto w-fit cursor-pointer"
        >
          Load More
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default Shop;
