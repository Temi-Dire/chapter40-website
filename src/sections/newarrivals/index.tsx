import { useEffect, useRef } from "react";
import Card from "../../components/Card";

interface NewarrivalsProps {
  header?: string;
  desc?: string;
}

const Newarrivals: React.FC<NewarrivalsProps> = ({
  header = "New Arrivals",
  desc = "Looking for the latest trends in clothing, shoes and accessories? Browse our new arrivals.",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        if (container.scrollLeft > 10) {
          container.style.marginLeft = "0";
          // container.style.marginRight = "10px";
          container.style.position = "sticky";
          container.style.left = "0";
        } else {
          container.style.marginLeft = "20px"; // Adjust the initial margin as needed
          container.style.position = "relative";
          container.style.left = "unset";
        }
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

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
    <div className=" lg:px-16 mt-20">
      <div className=" px-5 w-full flex flex-col justify-center items-center gap-2 mb-6">
        <h1 className="sm:text-4xl text-2xl font-playfair">{header}</h1>
        <p className="font-montserrat text-[#7C7C7C] text-sm sm:text-base">
          {desc}
        </p>
      </div>
      <div
        ref={containerRef}
        className="flex justify-between overflow-x-auto space-x-10"
      >
        {items.map((item) => (
          <Card desc={item.desc} price={item.price} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Newarrivals;
