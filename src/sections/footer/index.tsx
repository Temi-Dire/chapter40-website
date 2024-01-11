import Footer from "../../components/Footer/Footer";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";

const FooterSection = () => {
  const menu = [
    "New Arrivals",
    "Best Sellers",
    "Recently Viewed",
    "Popular This Week",
    "All Products",
  ];

  const categories = [
    "Crockery",
    "Furniture",
    "Homeware",
    "Plant pots",
    "Chairs",
    "Crocker",
  ];

  const ourCompany = [
    "About Us",
    "Vacancies",
    "Contact Us",
    "Privacy",
    "Returns policy",
  ];

  const currentYear = new Date();
  return (
    <>
      <div className="w-full h-[1px] bg-[#CAC6DA] mt-36 " />
      <div className="px-14 py-14 lg:px-20">
        <div className="w-full lg:py-14 grid grid-cols-1 md:grid-cols-2 grid-rows-3 lg:grid-rows-none  lg:grid-cols-[1fr,1fr,1fr,auto] lg:gap-4 ">
          <div className="mr-[12px] ">
            <Footer header={"Menu"} items={menu} />
          </div>
          <div>
            <Footer header={"Categories"} items={categories} />
          </div>
          <div>
            <Footer header={"Our Company"} items={ourCompany} />
          </div>
          <div className="row-start-1 row-span-1 col-span-2 lg:row-start-auto lg:row-auto lg:col-auto">
            <p className="font-playfair">Join our mailing list</p>
            <div className="flex mt-4">
              <input
                className="lg:w-80 outline-none py-4 px-4 bg-[#F9F9F9] font-montserrat"
                type="text"
                placeholder="your@email.com"
              />
              <button className="text-white bg-[#36254B] px-4 lg:px-8 py-4 w-[126px]">
                Sign up
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center gap-[30px] lg:space-y-0 lg:flex-row lg:justify-between">
          <div>Copyright {currentYear.getFullYear()} Avion LTD</div>
          <div className="space-x-6 lg:space-x-4">
            <LinkedInIcon />
            <TwitterIcon />
            <InstagramIcon />
            <FacebookIcon />
            <PinterestIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
