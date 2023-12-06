import Button from "../../components/Button";
import Input from "../../components/Input";

const Signup = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center font-playfair text-3xl mb-7">
        CREATE AN ACCOUNT
      </div>
      <div className="flex flex-col justify-center items-center mx-40 space-y-6">
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Input placeholder="Re-Enter Password" />
        <div className="flex justify-center flex-col space-y-6">
          <Button text={"create account"} />
          <div className="text-xl font-montserrat">
            Already have an account?{" "}
            <span className="text-[#634D93] cursor-pointer">Log in</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
