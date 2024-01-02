import AddCircleIcon from "@mui/icons-material/AddCircle";
import Star from "./Star";

const Minicard = () => {
  return (
    <div className=" grid-cols-[auto,1fr] gap-x-3 bg-[#F7F0F6] max-w-sm p-4  relative mb-8 hidden lg:grid">
      <img className="" src="/assets/images/dress2small.png" alt="" />
      {/* <div>dire ege eigei iegf eig </div> */}
      <div className="text-xs md:text-base lg:text-lg ">
        <p className="font-playfair">Red ankara gown sumami crimison black</p>
        <p className="font-montserrat">₦ 30,000</p>
        {/* <Star filled /> */}
      </div>
      <AddCircleIcon
        className="absolute bottom-2 right-2"
        style={{ fontSize: 30 }}
      />
    </div>
  );
};

export default Minicard;
