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
      name: "Red ankara gown sumami crimison",
      price: "30000",
      color: "bg-red-700",
    },
    {
      name: "Pink ankara gown sumami crimison",
      price: "30000",
      color: "bg-red-100",
    },
    {
      name: "Green ankara gown sumami crimison",
      price: "30000",
      color: "bg-[green]",
    },
    {
      name: "Yellow ankara gown sumami crimison",
      price: "30000",
      color: "bg-[yellow]",
    },
  ];

  return (
    <section className="mt-20 px-[74.5px]">
      <div className="w-full flex flex-col justify-center items-center gap-2 mb-6">
        <h1 className="text-4xl font-playfair">{header}</h1>
        <p className="font-montserrat text-[#7C7C7C]">{desc}</p>
      </div>
      <div className="flex justify-between">
        {items.map((item) => (
          <Card name={item.name} price={item.price} />
        ))}
      </div>
    </section>
  );
};

export default Newarrivals;
