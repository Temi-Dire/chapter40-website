import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

interface Props {
  continueToPath: string;
  path: string;
}

const NavigateComponent = ({ continueToPath, path }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row-reverse justify-between items-center">
      <button
        onClick={() => navigate(continueToPath)}
        className="bg-darkPrimary px-[32px] py-[16px] text-white font-roboto"
      >
        <Link to="continueToPath">Continue to {path}</Link>
      </button>
      <div className="flex space-x-2 font-montserrat text-[#634D93] text-[16px]">
        <button onClick={() => navigate(continueToPath)}>
          <ArrowBackIosNewOutlinedIcon />
        </button>
        <Link to={continueToPath} className="hover:text-darkPrimary">
          return to Cart
        </Link>
      </div>
    </div>
  );
};

export default NavigateComponent;
