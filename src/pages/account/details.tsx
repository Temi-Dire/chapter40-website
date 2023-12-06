import Navbar from "../../components/Navbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { Link } from "react-router-dom";
import SavedProduct from "../../components/SavedProduct";
import Button from "../../components/Button";
import FooterSection from "../../sections/footer";

const Details = () => {
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
  return (
    <>
      <Navbar />
      <section className="grid grid-cols-[auto,1fr] pt-32 px-[105px] gap-x-24">
        <div className="w-[335px] p-3 border border-black text-3xl space-y-12 font-playfair font-light">
          {details.map((item) => (
            <div
              className="w-full flex justify-between items-center cursor-pointer"
              onClick={() => setSection(item.id)}
            >
              <p>{item.name}</p>
              <ArrowForwardIosIcon />
            </div>
          ))}
        </div>
        <div
          className={`${
            section !== 4 ? " border border-black px-4 py-6" : ""
          } text-[#242424] h-[312px]`}
        >
          {section === 1 && (
            <div className="space-y-6 ">
              <div className="text-2xl">Username: Ikeowku Somto</div>
              <div className="text-2xl">Email: temidireowoeye@gmail.com</div>
              <div className="flex justify-between items-end">
                <div className="text-2xl">Password: ******</div>
                <div className="underline text-sm">Reset Password</div>
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
          {section === 3 && <div></div>}
          {section === 4 && (
            <div className="h-full overflow-y-scroll container">
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
      </section>
      <FooterSection />
    </>
  );
};

export default Details;
