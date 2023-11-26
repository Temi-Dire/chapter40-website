interface ButtonProps {
    text: String,
}

const Button: React.FC<ButtonProps> = ({text}) => {
  return (
        <button className="px-8 py-4 text-white bg-[#984288]">{text}</button>
  )
}

export default Button