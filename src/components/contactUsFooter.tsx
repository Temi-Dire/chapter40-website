
const contactUsFooter = () => {
  return (
    <div className="mt-5 flex justify-between font-poppins text-sm flex-wrap">
      <div className="flex items-center mr-3 mb-3">
        <img
          src="/assets/images/phone.svg"
          className="w-7 h-7	 object-cover mr-2"
          alt=""
        />
        <div>
          <p>PHONE</p>
          <p className="text-[#36254B]">0803 323 1939</p>
        </div>
      </div>
      <div className="flex items-center">
        <img
          src="/assets/images/mail.svg"
          className="w-7 h-7	 object-cover mr-2"
          alt=""
        />
        <div>
          <p>EMAIL</p>
          <p className="text-[#36254B]">chapter40fashion@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default contactUsFooter
