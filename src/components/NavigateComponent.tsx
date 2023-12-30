import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

interface Props {
  continueToPath: string;
  label: string;
  onSubmit: () => void;
  isValid: boolean;
}

const NavigateComponent = ({ continueToPath, label, onSubmit, isValid }: Props) => {
  const navigate = useNavigate();

  const handleContinueClick = () => {
    onSubmit();
    navigate(continueToPath);
  };

  return (
    <div className="flex flex-col space-y-4 lg:flex-row-reverse lg:justify-between items-center">
      <button
        type="submit"
        onClick={handleContinueClick}
        className="bg-darkPrimary w-full lg:w-auto px-[32px] py-[16px] text-white font-roboto"
      >
        <p>Continue to {label}</p>
      </button>
      <div className="flex space-x-2 font-montserrat text-[#634D93] text-[16px]">
        <button onClick={() => navigate("/cart")}>
          <ArrowBackIosNewOutlinedIcon />
        </button>
        <Link to="/cart" className="hover:text-darkPrimary">
          return to Cart
        </Link>
      </div>
    </div>
  );
};

export default NavigateComponent;
