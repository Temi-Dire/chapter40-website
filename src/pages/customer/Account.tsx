import EditIcon from "@mui/icons-material/Edit";
import useStore from "../../store/State";
import { useNavigate } from "react-router-dom";
import useUserInfoStore from "../../store/userInfo";
const Account = () => {
  const { user, removeUser } = useStore();
  const { address, phoneNumber } = useUserInfoStore();
  const navigate = useNavigate();
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
              <p>Username: {user?.username}</p>
              <p>Email: {user?.email}</p>
            </div>
          </div>
          <div className="border border-slate-400 rounded-md w-full">
            <div className="p-4 font-medium flex justify-between">
              <p>ADDRESS</p>
              <EditIcon
                className="cursor-pointer"
                onClick={() => navigate("/customer/address")}
              />
            </div>
            <hr />
            <div className="p-4">
              <p className="mb-1 font-medium">Your default shipping address:</p>
              <p>{address}</p>
              <p>{phoneNumber}</p>
            </div>
          </div>
        </div>
        <button
          className="bg-[#36254B] py-1 px-6 text-white w-fit xl:text-[15px] mx-4 mb-2"
          onClick={() => {
            removeUser();
            navigate("/");
          }}
        >
          SIGN OUT
        </button>
      </div>
    </>
  );
};

export default Account;
