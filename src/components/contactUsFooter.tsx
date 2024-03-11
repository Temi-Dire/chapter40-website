const FormFooter = () => {
  return (
    <div className="mt-4 font-poppins">
      <div className="flex justify-between items-center lg:text-sm max-w-full text-xs  flex-wrap   [&>*:not(:last-child)]:mb-5">
        <div className="flex sm:mr-7 items-center">
          <div className="flex justify-center flex-shrink-0 items-center mr-2 ">
            <img
              src="/assets/images/phone.svg"
              className="w-7 h-7 object-cover"
              alt=""
            />
          </div>
          <div>
            <p>PHONE</p>
            <p className="text-[#36254B] whitespace-nowrap">
              08033231939
            </p>
          </div>
        </div>
  
        <div className="flex">
          <div className="flex justify-center mr-2 flex-shrink-0">
            <img
              src="/assets/images/mail.svg"
              className="w-7 h-7	 object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col flex-wrap">
            <p>EMAIL</p>
            <p className="text-[#36254B]]">chapter40fashion@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormFooter;
