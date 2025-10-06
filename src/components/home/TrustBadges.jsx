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
        staggerChildren: 0.2, // delay between children animations
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
      className="flex py-10 flex-wrap md:justify-evenly items-center gap-3 md:gap-8 md:py-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="show" // animate when visible in viewport
      viewport={{ once: true, amount: 0.3 }} // triggers once
    >
      {items.map((text, idx) => (
        <motion.div
          key={idx}
          className="flex items-center gap-2"
          variants={itemVariants}
        >
          <HiMiniCheckBadge className="text-green-600 w-8 h-8" />
          <span className=" text-black text-[20px] tracking-tight font-[700] text">
            {text}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
