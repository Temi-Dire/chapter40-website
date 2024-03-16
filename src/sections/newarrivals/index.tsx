import NewArrivalCard from "../../components/NewArrivalCard";
import getProduct from "../../hooks/getProduct";
import line from "/assets/line.svg";

interface NewarrivalsProps {
  header?: string;
  desc?: string;
}

const Newarrivals: React.FC<NewarrivalsProps> = ({
  header = "New Arrivals",
  desc = "Looking for the latest trends in clothing, shoes and accessories? Browse our new arrivals.",
}) => {


  const {data: products} = getProduct(undefined);

  return (
    <div className="grid gap-[40px] lg:gap-[50px] py-[50px] max-w-[1440px] mx-auto w-full">
      <div className=" px-5 w-full text-center text-sm grid place-content-center gap-2 sm:text-base">
        <h1 className="sm:text-4xl text-2xl font-playfair mb-2">{header}</h1>
        <img className="w-fit mx-auto" src={line} alt="" />
        <p className="font-montserrat text-[#7C7C7C]">{desc}</p>
      </div>
      <div className="grid grid-cols-2 px-[20px] xl:px-[40px] gap-[20px] lg:grid-cols-4 max-w-[1440px] mx-auto w-full">
        {products?.data.slice(0, 4).map((product, index) => (
          <NewArrivalCard
          key={index}
            id={product.id}
            image={'/assets/images/dress1.png'}
            desc={product.attributes.productName}
            price={product.attributes.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Newarrivals;
