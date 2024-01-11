import Card from "../../components/Card";

interface NewarrivalsProps {
  header?: string;
  desc?: string;
}

const Newarrivals: React.FC<NewarrivalsProps> = ({
  header = "New Arrivals",
  desc = "Looking for the latest trends in clothing, shoes and accessories? Browse our new arrivals.",
}) => {
  const items = [
    {
      desc: "Red ankara gown sumami crimison",
      price: 30000,
      id: 1,
    },
    {
      desc: "Pink ankara gown sumami crimison",
      price: 30000,
      id: 2,
    },
    {
      desc: "Green ankara gown sumami crimison",
      price: 30000,
      id: 3,
    },
    {
      desc: "Yellow ankara gown sumami crimison",
      price: 30000,
      id: 4,
    },
  ];

  return (
    <div className="px-8 lg:px-16 mt-5 sm:mt-20">
      <div className=" px-5 w-full flex flex-col justify-center items-center gap-2 mb-6">
        <h1 className="sm:text-4xl text-2xl font-playfair">{header}</h1>
        <p className="font-montserrat text-[#7C7C7C] text-sm sm:text-base">
          {desc}
        </p>
      </div>
      <div className="flex justify-between overflow-x-auto space-x-10 card__container">
        {items.map((item) => (
          <Card desc={item.desc} price={item.price} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Newarrivals;
