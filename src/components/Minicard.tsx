import add from "/assets/addIcon.svg";
import dress from "/assets/images/dress2.png";
import useStore from "../State";

interface CardProps {
  desc: string;
  price: number;
  id: number;
  star: string;
}

const Minicard: React.FC<CardProps> = ({ desc, price, id, star }) => {
  const { addToBasket } = useStore();

  return (
    <div
      key={id}
      className=" rounded-sm text-[11px] grid grid-cols-[50px,1fr] 2sm:grid-cols-[70px,1fr] 2lg:grid-cols-[100px,1fr] place-items-start relative p-[10px] font-montserrat max-w-[210px] 2sm:max-w-[250px] md:max-w-[270px] 2lg:max-w-[320px] w-full 2sm:text-[13px] max-h-[100px]"
    >
      <div className="w-[40px] 2sm:w-[60px] 2lg:w-[80px] max-h-[83px] overflow-hidden">
        <img className="w-full rounded-sm" src={dress} alt="" />
      </div>
      <div className="grid gap-[3.5px]">
        <p>{desc}</p>
        <p className="font-bold">₦{price.toLocaleString()}</p>
        <img className="2sm:h-[16px] h-[10px]" src={star} alt="" />
      </div>
      <img
        className="absolute right-[10px] bottom-[10px] w-[14px] cursor-pointer"
        onClick={() => addToBasket({ desc, price, id })}
        src={add}
        alt=""
      />
    </div>
  );
};

export default Minicard;
