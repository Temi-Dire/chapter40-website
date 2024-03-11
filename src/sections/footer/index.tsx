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
      <div className="px-[24px] py-[40px] mt-[50px] border-t-borderDark border-t-[0.5px] xl:px-[40px] 3xl:px-[56px] max-w-[1440px] w-full mx-auto">
        <div className="max-w-[1440px] w-full mx-auto">
          <div className="grid gap-[30px] 2lg:grid-cols-2 items-start">
            <div className="grid gap-[14px] 2lg:col-start-2 2lg:row-start-1">
              <p className="font-playfair">Join our mailing list</p>
              <div className="flex font-montserrat ">
                <input
                  className="text-[14px] border-none outline-none py-3 px-3 bg-white-300 w-full"
                  type="text"
                  placeholder="your@email.com"
                />
                <button className="text-white text-[14px] bg-darkPrimary px-2 max-w-[82px] w-full">
                  Sign up
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
            <div>Copyright {currentYear.getFullYear()} Chapter40</div>
            <div className="space-x-6 lg:space-x-4">
              <LinkedInIcon />
              <TwitterIcon />
              <InstagramIcon />
              <FacebookIcon />
              <PinterestIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
