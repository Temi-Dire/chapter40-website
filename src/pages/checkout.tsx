import { useNavigate } from "react-router-dom";
import CheckoutProduct from "../components/CheckoutProduct";
import Navbar from "../components/Navbar";
import FooterSection from "../sections/footer";
import Newarrivals from "../sections/newarrivals";
import useStore from "../store/State";
import { useEffect } from "react";
import Container from "../components/Container";

const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const store = useStore();
  const basket = store.basket;

  const getTotal = () => {
    let total: number = 0;
    for (let i = 0; i < basket.length; i++) {
      total += basket[i].price * basket[i].quantity;
    }
    return total;
  };

  return (
    <>
      <Navbar />

      <Container>
        {basket.length !== 0 ? (
          <section className="mt-10">
            <div className="md:grid grid-cols-2 gap-20 ">
              <div className="h-80 overflow-y-scroll">
                {store.basket.length !== 0 ? (
                  <div>
                    {store.basket.map((item) => (
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
              <div className="border border-[#CAC6DA] px-6 py-5 space-y-6 h-80 flex-1 flex flex-col ">
                <h1 className="text-2xl font-playfair">Order Summary</h1>
                <div className="space-y-5">
                  <div className="flex justify-between font-montserrat text-lg text-[#666666]">
                    <div>Subtotal</div>
                    <div>{"₦" + getTotal()}</div>
                  </div>
                  <div className="flex justify-between font-montserrat text-lg text-[#666666]">
                    <div>Discount</div>
                    <div className=" text-[#FF3333]">-₦ 400</div>
                  </div>
                  <div className="flex justify-between font-montserrat text-lg text-[#666666]">
                    <div>Delivery Fee</div>
                    <div>₦ 500</div>
                  </div>
                  <div className="w-full h-[1px] bg-[#CAC6DA]" />
                </div>
                <button
                  className="py-2 text-white bg-[#36254B] font-roboto text-lg border border-[#4E4D93]"
                  onClick={() => navigate("/checkout/info")}
                >
                  Go to Checkout
                </button>
              </div>
            </div>
          </section>
        ) : (
          <div className="flex items-center justify-center flex-col mt-5 h-[80vh]">
            <div className=" bg-slate-100 inline  p-6 rounded-full mb-4">
              <img className="" src="/assets/wishlist.png" />
            </div>
            <p className="mb-4 font-medium">
              Oops, looks like your shoopping cart is empty
            </p>
            <button
              className=" bg-darkPrimary text-white px-4 py-3"
              onClick={() => navigate("/shop")}
            >
              Continue shopping
            </button>
          </div>
        )}
      </Container>

      <Newarrivals header="YOU MIGHT LIKE" />
      <FooterSection />
    </>
  );
};

export default Checkout;
