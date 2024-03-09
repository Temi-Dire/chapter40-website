import FooterItem from "./FooterItem";

interface FooterProps {
  header: string;
  items: string[];
}

const Footer: React.FC<FooterProps> = ({ header, items }) => {
  return (
    <footer className="">
      <p className="font-playfair text-base">{header}</p>
      {items.map((item, index) => (
        <FooterItem key={index} text={item} />
      ))}
    </footer>
  );
};

export default Footer;
