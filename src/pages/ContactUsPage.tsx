import ContactForm from "../components/ContactUsForm";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import FooterSection from "../sections/footer";
// import FooterSection from "../sections/footer";

// const ContactUsPage = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="w-full self-stretch">
//         <div className="flex justify-center items-center flex-col mb-9 px-5">
//           <h1 className="text-4xl font-bold mb-5 mt-16">Trying to reach us?</h1>
//           <p className="text-gray-600 mb-6">
//             We're more than open to hear from you. Whether you have questions,
//             feedback, or thoughts, we'd love to connect with you.
//           </p>
//         </div>
//         <div className="flex flex-col-reverse lg:flex-row gap-12 justify-between lg:mb-20 items-center relative sm:px-16 lg:px-32 sm:py-[50px] py-8 lg:py-[100px]">
//           <div className="flex-1 h-full max-w-[545px] px-4 sm:px-0">
//             <ContactForm />
//           </div>
//           <div className="lg:flex-1 z-20 max-w-[545px] lg:self-stretch h-[300px] lg:h-auto w-full mx-2.5">
//             <img
//               src="/assets/images/contactUs.jpeg"
//               className=" object-cover "
//               alt=""
//             />
//           </div>
//           <div className="w-[20vw] self-end bg-[#36254B] hidden lg:block h-full max-h-[904px] z-10 absolute max-w-[426px] right-0 top-0" />
//         </div>
//       </div>
//       <FooterSection />
//     </>
//   );
// };

// export default ContactUsPage;




const ContactUs = () => {
  return (
    <>
      <Navbar />
      <Container className="self-stretch">
        <div className="flex justify-center items-center flex-col mb-9">
          <h1 className="text-4xl font-bold mb-2 mt-3">Trying to reach us?</h1>
          <p className="text-gray-600 mb-3">
            We're more than open to hear from you. Whether you have questions,
            feedback, or thoughts, we'd love to connect with you.
          </p>
        </div>
        <div className="flex border border-slate-200 flex-col-reverse lg:flex-row gap-12 justify-between lg:mb-20 items-center relative sm:px-16 lg:px-32 sm:py-[50px] py-8 lg:py-[100px]">
          <div className="flex-1 h-full max-w-[545px] px-4 sm:px-0">
            <ContactForm />
          </div>
          <div className="lg:flex-1 z-20 max-w-[545px] lg:self-stretch h-[300px] lg:h-auto w-full mx-2.5">
            <img
              src="/assets/images/contactUsImg.jpeg"
              className="h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-[20vw] self-end bg-[#36254B] hidden xl:block h-full max-h-[904px] z-10 absolute max-w-[426px] right-0 top-0" />
        </div>
      </Container>
      <FooterSection />
    </>
  );

};

export default ContactUs;

