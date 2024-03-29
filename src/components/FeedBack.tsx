import { motion } from "framer-motion";

const FeedBack = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full font-montserrat">
      <motion.h3
        className="text-center lg:text-4xl text-3xl mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Thank you!!
      </motion.h3>
      <motion.p
        className="text-center lg:text-2xl text-xl text-gray-600"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Your response has been recorded. We'll get back to you shortly
      </motion.p>
    </div>
  );
};

export default FeedBack;
