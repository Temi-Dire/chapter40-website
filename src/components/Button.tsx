interface ButtonProps {
  text: string;
  paddingX?: string;
  bgColor?: string;
  textColor?: string;
  width?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  textColor = "text-white",
  paddingX = "px-8",
  bgColor = "bg-[#36254B]",
  text,
  width,
  onClick,
}) => {
  return (
    <button
      className={`${paddingX} ${width} py-4 ${textColor} ${bgColor} font-roboto text-lg border border-[#4E4D93]`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
