import { HiMiniCheckBadge } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function TrustBadges() {
  const items = [
    "NOT A SALES PITCH",
    "NO STRINGS ATTACHED",
    "NO GATEKEEPING",
  ];

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex py-10 sm:justify-evenly justify-center items-center px-1 gap-2 sm:gap-6 overflow-x-auto whitespace-nowrap sm:px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {items.map((text, idx) => (
        <motion.div
          key={idx}
          className="flex items-center sm:gap-2 "
          variants={itemVariants}
        >
          <HiMiniCheckBadge className="text-green-600 sm:w-8 sm:h-8 flex-shrink-0" />
          <span className="text-black sm:text-[20px] text-[11px] font-[500] sm:font-bold whitespace-nowrap">
            {text}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
