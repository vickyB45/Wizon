
import { motion } from "framer-motion";

const FashionBrand = () => {
  return (
    <section className="relative h-30 md:min-h-46 mt-10 overflow-hidden">
      {/* Slanted Black Bar */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-[102vw] -rotate-3 text origin-bottom-right text-white bg-black flex justify-evenly items-center gap-8 py-1.5  text-sm md:text-[30px] tracking-wide "
      >
        <span>Build For D2C Growth</span>
        <span>|</span>
        <span>Build For D2C Growth</span>
        <span>|</span>
        <span>Build For D2C Growth</span>
      </motion.div>
   </section>
  );
};

export default FashionBrand;