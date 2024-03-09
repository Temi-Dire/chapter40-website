import Navbar from "../components/Navbar";
import ContactUs from "../components/contactUs";
const GetAquote = () => {
  return (
    <>
    <Navbar/>
      <div className="max-w-[1300px]  text-gray-300 mx-auto w-full lg:p-20 sm:mt-[50px] lg:mt-[100px] mb-[40px] mt-10 px-0 md:px-0 ">
        <div className=" w-full lg:flex gap-x-6 flex flex-col lg:flex-row justify-center ">
          <div className="bg-[#36254B] lg:rounded-tl-3xl py-10 lg:justify-center lg:items-center lg:rounded-bl-3xl lg:w-1/2 lg:flex flex-col p-5 sm:p-10  text-center">
            <h2 className="text-2xl mb-3">CONTACT US</h2>
            <p className=" mb-3">Trying to reach us?</p>
            <p className=" mb-6">
              We're more than open to hear from you. Whether you have questions,
              feedback, or thoughts, we'd love to connect with you.
            </p>
            <img src="/assets/images/contactUs.jpeg" alt="" />
 
          </div>
          <div className=" pt-10 lg:w-1/2">
            <ContactUs />
          </div>
        </div>
      </div>
    </>
  );
};

export default GetAquote;
