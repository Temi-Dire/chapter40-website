import EditIcon from "@mui/icons-material/Edit";
const Account = () => {
  return (
    <>
      <div className="bg-white h-fit w-full rounded-md">
        <p className="p-4">Account Overview</p>
        <hr />
        <div className="p-4 lg:flex lg:gap-6">
          <div className="border border-slate-400 rounded-md w-96 mb-4 lg:mb-0">
            <p className="p-4 font-medium">ACCOUNT DETAILS</p>
            <hr />
            <div className="p-4">
              <p>Username: Temidire Owoeye</p>
              <p>Email: temidireowoeye@gmail.com</p>
            </div>
          </div>
          <div className="border border-slate-400 rounded-md w-full">
            <div className="p-4 font-medium flex justify-between">
              <p>ADDRESS</p>
              <EditIcon />
            </div>
            <hr />
            <div className="p-4">
              <p className="mb-1 font-medium">Your default shipping address:</p>
              <p>abc street, google</p>
              <p>+234 90 7321 0998</p>
            </div>
          </div>
        </div>
        <button className="bg-[#36254B] py-1 px-6 text-white w-fit xl:text-[15px] mx-4 mb-2">
          SIGN OUT
        </button>
      </div>
    </>
  );
};

export default Account;
