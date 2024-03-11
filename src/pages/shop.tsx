import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import FooterSection from "../sections/footer";
import ProductFilter from "../components/ProductFilter";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";

interface Product {
  id: number;
  description: string;
  price: number;
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
  };

  const handleDropDownState = () => {
    setDropDownState(!dropDownState);
  };

  const products: Product[] = [
    {
      id: 2,
      description: "Red ankara shirt sumami crimison",
      price: 30000,
      category: "shirts",
    },
    {
      id: 2,
      description: "Red ankara shirt sumami crimison",
      price: 30000,
      category: "shirts",
    },
    {
      id: 3,
      description: "Red ankara gown sumami crimison",
      price: 30000,
      category: "gowns",
    },
    {
      id: 3,
      description: "Red ankara gown sumami crimison",
      price: 30000,
      category: "gowns",
    },
    {
      id: 4,
      description: "Red ankara skirt sumami crimison",
      price: 30000,
      category: "skirt",
    },
    {
      id: 5,
      description: "Red ankara trousers sumami crimison",
      price: 30000,
      category: "trousers",
    },
    {
      id: 5,
      description: "Red ankara trousers sumami crimison",
      price: 30000,
      category: "trousers",
    },
    {
      id: 5,
      description: "Red ankara trousers sumami crimison",
      price: 30000,
      category: "trousers",
    },
    {
      id: 5,
      description: "Red ankara trousers sumami crimison",
      price: 30000,
      category: "trousers",
    },
    {
      id: 5,
      description: "Red ankara trousers sumami crimison",
      price: 30000,
      category: "trousers",
    },
    {
      id: 5,
      description: "Red ankara trousers sumami crimison",
      price: 30000,
      category: "trousers",
    },
    {
      id: 5,
      description: "Red ankara trousers sumami crimison",
      price: 30000,
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
      <Container>
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
              <ProductFilter
                handleFilterMenu={handleDropDownState}
                filterState={dropDownState}
                category={category}
                onCategoryChange={handleCategoryClick}
              />
            </div>
          </div>
        </div>
        <div className="py-[45px] w-full grid grid-cols-2 2sm:grid-cols-3 lg:grid-cols-4 gap-[24px] lg:mx-auto lg:w-fit">
          {filteredProducts.slice(0, displayedProducts).map((prod, index) => (
            <ProductCard
              key={index}
              id={prod.id}
              desc={prod.description}
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
      </Container>
      <FooterSection />
    </>
  );
};

export default Shop;
