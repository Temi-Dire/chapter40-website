import { useForm } from "react-hook-form";
import FormFooter from "./contactUsFooter";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyboardEventHandler, useState } from "react";
import FeedBack from "./FeedBack";

const schema = z.object({
  name: z.string().min(3, { message: "Name should be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email format" }),
  phoneNo: z.string().min(11, { message: "Phone number should be 11 characters" }),
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

  const [showFeedback, setShowFeedback] = useState(false);

  const handleFormSubmit = (data: FormData) => {
    if (isValid) {
      // Handle form submission logic here
      console.log(data);
      setShowFeedback(true);
      reset();
    }
  };

  const allowOnlyNumbers: KeyboardEventHandler<HTMLInputElement> = (evt) => {
    const keysAllowed: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace"];
    const keyPressed: string = evt.key;

    if (!keysAllowed.includes(keyPressed)) {
      evt.preventDefault();
    }
  };

  return (
    <>
      {!showFeedback && (
        <div className="xl:mr-8">
          <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold mb-7 font-montserrat">
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
            onKeyDown={allowOnlyNumbers}
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
      )}
      {showFeedback && <FeedBack />}
    </>
  );
};

export default ContactForm;

