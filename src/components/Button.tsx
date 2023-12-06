interface ButtonProps {
  text: String;
  paddingX?: String;
  bgColor?: String;
  textColor?: String;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({
  textColor = "text-white",
  paddingX = "px-8",
  bgColor = "bg-[#36254B]",
  text = "",
  width = "",
}) => {
  return (
    <button
      className={`${paddingX} ${width} py-4 ${textColor} ${bgColor} font-roboto text-lg border border-[#4E4D93]`}
    >
      {text}
    </button>
  );
};

export default Button;
