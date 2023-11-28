interface FooterItemProps {
  text: string;
}

const FooterItem: React.FC<FooterItemProps> = ({ text }) => {
  return <p className="text-gray-600 font-montserrat text-sm my-3">{text}</p>;
};

export default FooterItem;
