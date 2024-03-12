import { useForm } from "react-hook-form";
import FormFooter from "./contactUsFooter";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name shouldnt be less than 3 characters" }),
  email: z
    .string()
    .email({ message: "The email format you entered is invalid" }),
  phoneNo: z
    .string()
    .min(11, { message: "Phone number should be at 11 characters" }),
  message: z.string(),
  referral: z.string(),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onBlur" });

  const handleFormSubmit = (data: FormData) => {
    if (isValid) {
      // this is where i mutate data when endpoint is ready
      alert(`Hi ${data.name.toUpperCase()}, we'll get back to you shortly..`);
      reset();
    }
  };

  return (
    <div className="xl:mr-8">
      <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold mb-7 font-playfair">
        Trying to <span>reach</span> us?
      </h1>
      <p className="mb-5 font-poppins text-sm">
        We're more than open to hear from you. <br /> Whether you have
        questions, feedback, or thoughts, we'd love to connect with you.
      </p>
      <form
        className="font-poppins text-sm"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="mb-4">
          <input
            type="text"
            {...register("name")}
            id="name"
            placeholder="Name"
            className="w-full p-2 border "
            required
          />

          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <input
            type="email"
            {...register("email")}
            id="email"
            placeholder="Email"
            className="w-full p-2 border "
            required
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="phoneNo"
            {...register("phoneNo")}
            name="phoneNo"
            placeholder="Phone number"
            className="w-full p-2 border "
            required
          />
          {errors.phoneNo && (
            <p className="text-red-500">{errors.phoneNo.message}</p>
          )}
        </div>

        <div className="mb-4">
          <select
            id="referral"
            {...register("referral")}
            className="border  w-full p-2"
          >
            <option value="">How did you find us</option>

            <option value="google">Google</option>
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
            <option value="referral">Referral</option>
            <option value="ads">Ads</option>
          </select>

          {errors.referral && (
            <p className="text-red-500">{errors.referral.message}</p>
          )}
        </div>

        <div className="mb-6">
          <textarea
            placeholder="How can we help you?"
            id="message"
            rows={4}
            {...register("message")}
            className="w-full p-2 border "
            required
          ></textarea>
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#36254B] text-white p-3  w-full hover:bg-[#36256B]"
        >
          Send
        </button>
      </form>
      <FormFooter />
    </div>
  );
};

export default ContactForm;
