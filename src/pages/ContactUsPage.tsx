import ContactForm from "../components/ContactUsForm";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import FooterSection from "../sections/footer";
// import FooterSection from "../sections/footer";


const ContactUs = () => {
  return (
    <>
      <Navbar />
      <Container className="self-stretch xl:mt-9">
        <div className="flex  flex-col-reverse xl:flex-row gap-12 justify-between lg:mb-20 items-center relative sm:px-16 xl:pl-0 sm:py-[50px] py-8 xl:py-[100px]">
          <div className="flex-1 h-full max-w-[545px] ">
            <ContactForm />
          </div>
          <div className="lg:flex-1 z-20 max-w-[545px] lg:self-stretch h-[300px] mx-auto items-center  lg:h-auto w-full ">
            <img
              src="/assets/images/contactUs.jpg"
              className="h-full object-cover  self-stretch"
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

