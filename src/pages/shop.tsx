import Card from "../components/Card";
import Navbar from "../components/Navbar";
import FooterSection from "../sections/footer";

const Shop = () => {
  const products = [
    {
      desc: "Quality products",
      price: 30000,
      id: 1,
    },
    {
      desc: "Quality products",
      price: 30000,
      id: 1,
    },
    {
      desc: "Quality products",
      price: 30000,
      id: 1,
    },
    {
      desc: "Quality products",
      price: 30000,
      id: 1,
    },
    {
      desc: "Quality products",
      price: 30000,
      id: 1,
    },
    {
      desc: "Quality products",
      price: 30000,
      id: 1,
    },
  ];
  return (
    <>
      <Navbar />
      <div className="px-14">
        <div className="flex justify-between  mt-10">
          <div className="font-playfair text-[#634D93] text-2xl">
            Corporate Wear
          </div>
          <div>Home/Shop/Checkout</div>
        </div>
        <div className="flex justify-between my-14 font-playfair">
          <div className="text-xl">37 products</div>
          <div className="border border-[#CAC6DA] p-2">Sort by: Featured</div>
        </div>
        <div className="flex justify-between overflow-x-auto space-x-10 card__container">
          {products.map((prod) => (
            <Card desc={prod.desc} price={prod.price} id={prod.id} />
          ))}
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default Shop;
