import Navbar from "../../components/Navbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { Link } from "react-router-dom";
// import SavedProduct from "../../components/SavedProduct";
import Button from "../../components/Button";
import FooterSection from "../../sections/footer";
import useStore from "../../State";
import { useNavigate } from "react-router-dom";
import OrderTracking from "../../components/OrderTracking";

const Details = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>("Account");
  const [section, setSection] = useState(1);
  const price = 500;
  const details = [
    {
      name: "Account",
      id: 1,
    },
    {
      name: "Address",
      id: 2,
    },
    {
      name: "Order Tracking",
      id: 3,
    },
    {
      name: "Saved Items",
      id: 4,
    },
  ];

  const { user, removeUser } = useStore();

  return (
    <>
      <Navbar />
      <section className="md:grid grid-cols-[auto,1fr] pt-10 px-4 md:px-6 lg:px-20 gap-x-6 lg:gap-x-16 ">
        <div className="md:hidden my-5 border border-[#DFDFDF] px-4 py-2 ">
          <select
            className="w-full text-2xl outline-none"
            id="category"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          >
            <option value=""></option>
            <option value="Account">Account</option>
            <option value="Order Tracking">Order Tracking</option>
            <option value="Saved Product">Saved Products</option>
          </select>
        </div>
        <div className=" px-10 py-6 border border-black text-2xl space-y-12 font-montserrat font-light hidden md:block h-fit">
          {details.map((item) => (
            <div
              className="w-full flex justify-between items-center cursor-pointer"
              onClick={() => setSection(item.id)}
            >
              <p>{item.name}</p>
              <ArrowForwardIosIcon className="ml-5" />
            </div>
          ))}
        </div>
        <div
          className={`${
            section !== 4 && section !== 3
              ? " border border-black px-4 py-6"
              : ""
          } text-[#242424] hidden md:block`}
        >
          {section === 1 && (
            <div className="flex flex-col h-full justify-between">
              <div className="space-y-6">
                <div className="text-2xl">Username: {user?.username}</div>
                <div className="text-2xl">Email: {user?.email}</div>
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-[#634D93] text-white text-xl py-2 px-4 rounded-lg"
                  onClick={() => {
                    removeUser();
                    navigate("/");
                  }}
                >
                  SIGN OUT
                </button>
              </div>
            </div>
          )}
          {section === 2 && (
            <div className="space-y-6 ">
              <div className="flex justify-between items-end">
                <div className="text-2xl">Default Address</div>
                <Link to={"/account/editaddress"} className="underline text-sm">
                  Reset Address
                </Link>
              </div>
              <div className="text-2xl">Email: temidireowoeye@gmail.com</div>
              <div className="text-2xl">Password: ******</div>
            </div>
          )}
          {section === 3 && <OrderTracking />}
          {/* {section === 4 &&
            favorites.map((prod) => (
              <div className="h-full  container">
                <SavedProduct
                  desc={prod.desc}
                  price={prod.price}
                  id={prod.id}
                />
              </div>
            ))} } */}
        </div>
        {section === 4 && (
          <div className="col-start-2 mt-4 mx-auto ">
            <Button
              bgColor={"bg-white"}
              textColor={"text-[#4E4D93]"}
              text={`Add all items to cart - ${price}`}
            />
          </div>
        )}
        <div
          className={`${
            value !== "Saved Product" && value !== "Order Tracking"
              ? " border border-black px-4 py-6"
              : ""
          } text-[#242424] px-2 md:hidden`}
        >
          {value === "Account" && (
            <div className="space-y-6">
              <div className="text-2xl">Username: {user?.username}</div>
              <div className="text-2xl">Email: {user?.email}</div>
              <div className="flex justify-center">
                <button
                  className="bg-[#634D93] text-white text-xl py-2 px-4 rounded-lg"
                  onClick={() => {
                    removeUser();
                    navigate("/");
                  }}
                >
                  SIGN OUT
                </button>
              </div>
            </div>
          )}
          {value === "Order Tracking" && <OrderTracking />}
          {/* {value === "Saved Product" &&
            favorites.map((prod) => (
              <div className="h-full  container">
                <SavedProduct
                  desc={prod.desc}
                  price={prod.price}
                  id={prod.id}
                />
              </div>
            ))}  */}
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default Details;
