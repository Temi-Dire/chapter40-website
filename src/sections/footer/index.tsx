import Footer from "../../components/Footer/Footer";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import PinterestIcon from "@mui/icons-material/Pinterest";
import Container from "../../components/Container";

const FooterSection = () => {
  const menu = [
    { item: "Wishlist", link: "wishlist" },
    { item: "Shop", link: "shop" },
    { item: "Cart", link: "cart" },
  ];

  const categories = [
    { item: "Shoes", link: "shoes" },
    { item: "Bags", link: "bags" },
    { item: "Necklaces", link: "necklaces" },
    { item: "Watches", link: "watches" },
  ];

  const ourCompany = [
    { item: "About Us", link: "about" },
    { item: "Contact Us", link: "contact-us" },
    { item: "Our Products", link: "shop" },
  ];

  const currentYear = new Date();
  return (
    <>
      <Container className=" py-[40px] mt-[50px] border-t-borderDark border-t-[0.5px] xl:px-[40px] 3xl:px-[56px] w-full mx-auto">
        <div className="max-w-[1440px] w-full mx-auto">
          <div className="grid gap-[30px] 2lg:grid-cols-2 items-start">
            <div className="grid gap-[14px] 2lg:col-start-2 2lg:row-start-1">
              <p className="font-playfair">Any questions?</p>
              <div className="flex font-montserrat ">
                <input
                  className="text-[14px] border-none outline-none py-3 px-3 bg-white-300 w-full"
                  type="text"
                  placeholder="How can we help you?"
                />
                <button className="text-white text-[14px] bg-darkPrimary px-2 max-w-[82px] w-full">
                  Send
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[40px]">
              <div>
                <Footer header={"Categories"} items={categories} />
              </div>
              <div className="ml-auto sm:ml-0">
                <Footer header={"Our Company"} items={ourCompany} />
              </div>
              <div>
                <Footer header={"Menu"} items={menu} />
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse items-center gap-[30px] lg:space-y-0 lg:flex-row lg:justify-between font-thin pt-[30px] lg:pt-[46px]">
            <div className="font-bold">
              Copyright {currentYear.getFullYear()} Chapter40
            </div>
            {/* <div className="space-x-6 lg:space-x-4">
              <LinkedInIcon />
              <TwitterIcon />
              <InstagramIcon />
              <FacebookIcon />
              <PinterestIcon />
            </div> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default FooterSection;
