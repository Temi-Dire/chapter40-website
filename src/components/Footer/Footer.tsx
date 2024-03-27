import { useNavigate } from "react-router";

interface Items {
  item: string;
  link: string;
}

interface FooterProps {
  header: string;
  items: Items[];
}

const Footer: React.FC<FooterProps> = ({ header, items }) => {
  const navigate = useNavigate();
  return (
    <footer className="">
      <p className="font-playfair text-base">{header}</p>
      {items.map((item, index) => (
        <p
          key={index}
          className="text-gray-400 font-montserrat text-sm my-3 cursor-pointer hover:text-black"
          onClick={() => {
            const linkWithoutSpace = item.link.split(" ").join("");
            navigate("/" + linkWithoutSpace);
          }}
        >
          {item.item}
        </p>
      ))}
    </footer>
  );
};

export default Footer;
