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
      <div className=" px-20 py-14 grid grid-cols-[1fr,1fr,1fr,auto] gap-4 ">
        <div>
          <Footer header={"Menu"} items={menu} />
        </div>
        <div>
          <Footer header={"Categories"} items={categories} />
        </div>
        <div>
          <Footer header={"Our Company"} items={ourCompany} />
        </div>
        <div>
          <p className="font-playfair">Join our mailing list</p>
          <div className="flex mt-4">
            <input
              className="w-80 outline-none py-4 px-8 bg-[#F9F9F9] font-montserrat"
              type="text"
              placeholder="your@email.com"
            />
            <button className="text-white bg-[#36254B] px-8 py-4 w-[126px]">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-20 pb-6">
        <div>Copyright {currentYear.getFullYear()} Avion LTD</div>
        <div className="space-x-4">
          <LinkedInIcon />
          <TwitterIcon />
          <InstagramIcon />
          <FacebookIcon />
          <PinterestIcon />
        </div>
      </div>
    </>
  );
};

export default FooterSection;
