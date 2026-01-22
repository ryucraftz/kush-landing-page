import { motion } from "framer-motion";
import useRazorpay from "../src/hooks/useRazorpay";

export default function CallToActionButton() {
  const isLoaded = useRazorpay();

  const handlePayment = () => {
    if (!isLoaded) return;

    if (!import.meta.env.VITE_RAZORPAY_KEY_ID) {
      alert("Error: Razorpay Key ID is missing. Please check Vercel Environment Variables.");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: "900", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Coach Kush",
      description: "1:1 FitDad Transformation Call",
      handler: function (response) {
        window.location.href = "/thank-you";
      },
      theme: {
        color: "#dc2626",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert("Payment Failed. Please try again. " + response.error.description);
    });

    rzp1.open();
  };


  return (
    <motion.div
      className="py-4 px-4 sm:px-0 flex justify-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        onClick={handlePayment}
        disabled={!isLoaded}
        className="
          relative inline-flex w-full sm:max-w-md
          items-center justify-center text-center
          rounded-full bg-red-600 text-white font-semibold
          shadow-md hover:shadow-lg
          px-6 sm:px-12 py-4 sm:py-5
          text-sm sm:text-base md:text-lg
          whitespace-nowrap
          transition duration-300 ease-out
          max-[380px]:text-[13px] max-[380px]:px-5
          cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed
        "
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        Book Your 1:1 FitDad Transformation Call
        <span className="animate-cross-line"></span>
      </motion.button>
    </motion.div>
  );
}
