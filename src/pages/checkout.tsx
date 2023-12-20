import { Link } from "react-router-dom";
import Button from "../components/Button";
import CheckoutProduct from "../components/CheckoutProduct";
import Navbar from "../components/Navbar";
import FooterSection from "../sections/footer";
import Newarrivals from "../sections/newarrivals";
import useStore from "../State";

const Checkout = () => {
  const store = useStore();

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < store.basket.length; i++) {
      total = total + store.basket[i].price;
    }
    return total;
  };

  return (
    <>
      <Navbar />
      <section className="pt-32  px-32">
        <div className="mb-16 ">Home/Shop/Checkout</div>
        <div className="grid grid-cols-2 gap-36 ">
          <div className="">
            {store.basket.length !== 0 ? (
              <div>
                {store.basket.map((item, index) => (
                  <CheckoutProduct
                    desc={item.desc}
                    price={item.price}
                    id={item.id}
                    quantity={item.quantity}
                  />
                ))}
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                No items have been added yet!
              </div>
            )}
          </div>
          <div className="border border-[#CAC6DA] px-6 py-5 space-y-6 h-[400px]">
            <h1 className="text-2xl font-playfair">Order Summary</h1>
            <div className="space-y-5">
              <div className="flex justify-between font-montserrat text-lg text-[#666666]">
                <div>Subtotal</div>
                <div>{"$" + getTotal()}</div>
              </div>
              <div className="flex justify-between font-montserrat text-lg text-[#FF3333]">
                <div>Discount</div>
                <div>-$565</div>
              </div>
              <div className="flex justify-between font-montserrat text-lg text-[#666666]">
                <div>Delivery Fee</div>
                <div>$565</div>
              </div>
              <div className="w-full h-[1px] bg-[#CAC6DA]" />
            </div>
            <div className="w-full flex">
              <input
                className="flex-1 outline-none bg-[#F0F0F0] px-2"
                type="text"
                placeholder="Add promo code"
              />
              <Button text={"Apply"} />
            </div>
            <Button text={"Go to Checkout"} width={"w-full"} />
          </div>
        </div>
      </section>
      {/* <div className="flex flex-col justify center items-center pt-32">
        <div className="text-4xl text-[#36254B] mb-6">
          Your shopping bag is empty
        </div>
        <div className="text-xl mb-14">
          Discover chapter40 and add products to your bag
        </div>
        <Link to={"/"}>
          <Button text={"collection"} />
        </Link>
      </div>
      <Newarrivals header="YOU MIGHT LIKE" />
      <FooterSection /> */}
    </>
  );
};

export default Checkout;
