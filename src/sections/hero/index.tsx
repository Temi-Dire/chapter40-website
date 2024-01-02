import Button from "../../components/Button";
import Minicard from "../../components/Minicard";

const Hero = () => {
  return (
    <section
      className="px-10 pt-10"
      style={{
        background: "linear-gradient(to right, white 50%, purple 50%)",
      }}
    >
      <Minicard />
      <div className="hidden sm:flex justify-center text-lg sm:text-3xl md:text-3xl lg:pt-0 lg:text-7xl font-playfair pt-10">
        FASHION COLLECTION
      </div>
      <div className="flex justify-between">
        <div className="w-1/2 pr-10 lg:block my-8 text-[#24242499]">
          We only sell quality items, so click the shop now and get started
        </div>
        <div className=" w-1/2 my-8 flex justify-center items-center pl-10 text-white font-playfair sm:hidden">
          CHAPTER 40 FASHION
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="font-roboto text-lg border h-14 border-[#4E4D93]  mb-10 bg-[#984288] flex items-center justify-center px-2 sm:px-8 text-white ">
          Shop Now
        </button>
        <Minicard />
      </div>
    </section>
  );
};
export default Hero;

// const Hero = () => {
//   return (
//     <div className="relative">
//       <section className="grid grid-cols-2 w-full relative">
//         <div className="bg-white  px-[74.5px] -z-20">
//           <Minicard />
//           {/* <h1 className="font-playfair mt-9 mb-7 text-8xl">FASHION</h1> */}
//           <p className="text-base font-montserrat text-[#7C7C7C]  mb-7 mt-44">
//             is simply dummy text of the printing and typesetting industry. Lorem
//             Ipsum has been the industry's standard dummy text ever since the
//             1500s, when an unknown printer took a galley of type and scrambled
//             it to make a type specimen book.
//           </p>
//           <Button
//             text={"Shop Now"}
//             paddingX={"px-16"}
//             bgColor={"bg-[#36254B]"}
//             textColor={"text-white"}
//           />
//         </div>
//         <div className="bg-[purple] pt-[210px] pr-[74.5px] -z-20">
//           <h1 className="text-white font-playfair mt-[160px] mb-7 text-8xl">
//             COLLECTION
//             </h1>
//             <div className="flex justify-end mt-[117px] mb-60">
//             <Minicard />
//           </div>
//         </div>
//       </section>
//       <div
//         className="absolute top-1/2 right-48 font-playfair text-6xl
//       "
//       >
//         {" "}
//         CHAPTER 40 FASHION
//       </div>
//     </div>
//   );
// };
// export default Hero;
