import FormFooter from "./contactUsFooter";

const ContactForm = () => {

  return (
    <div>
      <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold mb-7 font-poppins">
        <span className="text-[#36254B]">Connect</span> with us
      </h1>
      <form>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="w-full p-3 border "
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border "
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="phoneNo"
            name="phoneNo"
            placeholder="Phone number"
            className="w-full p-3 border "
            required
          />
        </div>

        <div className="mb-4">
          <select name="referral" id="referral" className="border  w-full p-3">
            <option value="">How did you find us</option>

            <option value="google">Google</option>
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
            <option value="referral">Referral</option>
            <option value="ads">Ads</option>
          </select>
        </div>

        <div className="mb-6">
          <textarea
          placeholder="How can we help you?"
            id="message"
            name="message"
            rows={4}
            className="w-full p-3 border "
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#36254B] text-white p-3  w-full hover:bg-[#36256B]"
        >
          Send
        </button>
      </form>
      <FormFooter/>
    </div>
  );
};

export default ContactForm;
