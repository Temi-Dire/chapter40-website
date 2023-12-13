import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface CheckoutProductProps {
  desc: string;
  price: number;
}

const CheckoutProduct: React.FC<CheckoutProductProps> = ({ desc, price }) => {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-5  border border-[#CAC6DA] px-3 py-2 mb-4">
      <img
        className="h-[140px] object-cover"
        src="/assets/images/checkoutproduct.png"
        alt=""
      />
      <div className="flex flex-col justify-between">
        <div>
          <div className="font-playfair text-base">{desc}</div>
          <div className="flex justify-between">
            <div className="font-montserrat text-lg">{"₦" + price}</div>
            <div>⭐⭐⭐⭐⭐</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="border border-black flex w-[124px] h-[44px] justify-between px-2 items-center">
            <RemoveIcon />
            <p></p>
            <AddIcon />
          </div>
          <button className="underline text-md">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
