import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Editaccount = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="space-y-6 w-[600px]">
        <div className="text-2xl font-playfair">Edit Adress</div>
        <Input placeholder="Country" />
        <div className="grid grid-cols-[1fr,1fr] gap-4">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
        </div>
        <Input placeholder="Address" />
        <Input placeholder="City" />
        <Input placeholder="Phone" />
        <Button width="w-full" text={"Update"} />
        <Button
          bgColor={"bg-white"}
          textColor={"text-[#242424]"}
          width="w-full"
          text={"Cancel"}
        />
      </div>
    </div>
  );
};

export default Editaccount;
