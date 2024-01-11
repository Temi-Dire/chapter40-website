import Navbar from "../../components/Navbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { Link } from "react-router-dom";
import SavedProduct from "../../components/SavedProduct";
import Button from "../../components/Button";
import FooterSection from "../../sections/footer";
import useStore from "../../State";

const Details = () => {
  const [value, setValue] = useState<string>("Address");
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

  const { user, addUser } = useStore();

  return (
    <>
      <Navbar />
      <section className="md:grid grid-cols-[auto,1fr] pt-10 px-4 md:px-6 lg:px-28 gap-x-16 ">
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
            <option value="Address">Address</option>
            <option value="Order Tracking">Order Tracking</option>
            <option value="Saved Product">Saved Products</option>
          </select>
        </div>
        <div className=" p-3 border border-black text-md space-y-12 font-playfair font-light hidden md:block max-h-80">
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
            section !== 4 ? " border border-black px-4 py-6" : ""
          } text-[#242424] hidden md:block`}
        >
          {section === 1 && (
            <div className="flex flex-col h-full justify-between">
              <div className="space-y-6">
                <div className="text-2xl">Username: {user?.username}</div>
                <div className="text-2xl">Email: {user?.email}</div>
                <div className="flex justify-between items-end">
                  <div className="text-2xl">Password: ******</div>
                  <div className="underline text-sm">Reset Password</div>
                </div>
              </div>
              <div className="underline cursor-pointer">SIGN OUT</div>
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
          {section === 3 && <div></div>}
          {section === 4 && (
            <div className="h-full  container">
              <SavedProduct />
              <SavedProduct />
              <SavedProduct />
            </div>
          )}
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
            value !== "Saved Product" ? " border border-black px-4 py-6" : ""
          } text-[#242424] px-5 md:hidden`}
        >
          {value === "Account" && (
            <div className="space-y-6">
              <div className="text-2xl">Username: {user?.username}</div>
              <div className="text-2xl">Email: {user?.email}</div>
              <div className="flex justify-between items-end">
                <div className="text-2xl">Password: ******</div>
                <div className="underline text-sm">Reset Password</div>
              </div>
            </div>
          )}
          {value === "Address" && (
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
          {value === "Saved Product" && (
            <div className="h-full  container">
              <SavedProduct />
              <SavedProduct />
              <SavedProduct />
            </div>
          )}
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default Details;
