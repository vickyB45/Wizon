import { motion } from "framer-motion";

export default function MetaAdsSection() {
  return (
    <section className="flex flex-col max-w-6xl mx-auto items-center justify-center text-center py-8 md:px-6 px-2 bg-white">
      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <h2 className="text-4xl heading tracking-tight md:text-5xl  font-semibold text-black">
          We Don’t Outsource Meta Ads.
        </h2>
        <h2 className="text-4xl heading tracking-tight md:text-5xl font-semibold text-black mt-1">
          We Own Every{" "}
          <motion.span
            className="bg-black text-white px-2 py-1 inline-block rounded-sm cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Click.
          </motion.span>
        </h2>

        {/* Description */}
      </motion.div>
        <div className="flex justify-between flex-col-reverse items-center  w-full md:flex-row">
            <p className=" text-start mt-6 text-xl text md:text-2xl md:w-[60%]">
          Our entire Meta Ads execution — from strategy to creatives to
          optimization — is handled 100% in-house. No freelancers. No delays.
          Just tight control, faster results, and full accountability.
        </p>

      {/* Meta Logo */}
      <motion.div
        className=" md:w-[30%]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <img
          src="/image/meta.png"
          alt="Meta Logo"
          className="w-60 md:w-full"
        />
      </motion.div>
        </div>
    </section>
  );
}

