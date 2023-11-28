interface ButtonProps {
  text: String;
  paddingX?: String;
  bgColor?: String;
  textColor?: String;
}

const Button: React.FC<ButtonProps> = ({
  textColor = "text-white",
  paddingX = "px-8",
  bgColor = "bg-[#36254B]",
  text = "",
}) => {
  return (
    <button className={`${paddingX} py-4 ${textColor} ${bgColor} font-roboto`}>
      {text}
    </button>
  );
};

export default Button;
