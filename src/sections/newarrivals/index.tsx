import Container from "../../components/Container";
import ProductCard from "../../components/ProductCard";

interface NewarrivalsProps {
  header?: string;
  desc?: string;
}

const Newarrivals: React.FC<NewarrivalsProps> = ({
  header = "New Arrivals",
  desc = "Looking for the latest trends in clothing, shoes and accessories? Browse our new arrivals.",
}) => {
  const prods = [
    {
      description: "Red ankara gown sumami crimison",
      price: 30000,
      id: 1,
    },
    {
      description: "Pink ankara gown sumami crimison",
      price: 30000,
      id: 2,
    },
    {
      description: "Green ankara gown sumami crimison",
      price: 30000,
      id: 3,
    },
    {
      description: "Yellow ankara gown sumami crimison",
      price: 30000,
      id: 4,
    },
  ];

  return (
    <Container className="mt-5 sm:mt-10">
      <div className=" px-5 w-full text-center">
        <h1 className="sm:text-4xl text-2xl font-playfair mb-2">{header}</h1>
        <p className="font-montserrat text-[#7C7C7C] text-sm sm:text-base">
          {desc}
        </p>
      </div>
      <div className=" pt-[40px] lg:pt-[50px] grid grid-cols-2 gap-y-[40px] gap-x-[20px] pb-14 mx-auto w-fit sm:gap-x-[40px] sm:gap-y-[50px] 2sm:gap-x-[60px] md:grid-cols-3 md:gap-x-[30px] 2lg:gap-y-[80px] 2lg:grid-cols-4 2xl:gap-x-[50px]">
        {prods.map((prod, index) => (
          <ProductCard
            key={index}
            id={prod.id}
            desc={prod.description}
            price={prod.price}
          />
        ))}
      </div>
    </Container>
  );
};

export default Newarrivals;
