import { motion } from 'framer-motion'

export default function WizonTeamSection() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-white text-black px-4 sm:px-6 py-12 overflow-hidden">
      {/* Curved Lines */}
      <div className="hidden md:flex w-full max-w-3xl mx-auto absolute top-32 h-[350px] overflow-hidden pointer-events-none">
        <div className="w-1/2 border-r border-t border-black rounded-[140px] min-h-[800px]"></div>
        <div className="w-1/2 border-l border-t border-black rounded-[140px] min-h-[800px]"></div>
      </div>

      {/* Team Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl relative z-10">
        {/* Dhiman Bansal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center md:w-1/2 w-full"
        >
          <div className="w-56 h-56 sm:w-64 sm:h-64 select-none p-4 bg-white border border-black rounded-xl flex items-center justify-center text-sm sm:text-xl font-medium heading">
            PHOTO WILL BE IN BLACK AND WHITE
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-2xl sm:text-3xl font-bold mt-6 heading"
          >
            DHIMAN BANSAL
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-gray-700 text-lg sm:text-xl mb-3 text"
          >
            – GROWTH & META ADS
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-gray-800 max-w-xs text-base sm:text-[18px] text"
          >
            The strategist behind every profitable ad account. Leads data, scaling plans, and client strategy.
          </motion.p>
        </motion.div>

        {/* Kapil Khanna */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center md:w-1/2 w-full"
        >
          <div className="w-56 h-56 sm:w-64 sm:h-64 select-none p-4 bg-white border border-black rounded-xl flex items-center justify-center text-sm sm:text-xl font-medium heading">
            PHOTO WILL BE IN BLACK AND WHITE
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-2xl sm:text-3xl font-bold mt-6 heading"
          >
            KAPIL KHANNA
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-gray-700 text-lg sm:text-xl mb-3 text"
          >
            – CREATIVE & DELIVERY
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-gray-800 max-w-xs text-base sm:text-[18px] text"
          >
            The execution backbone. Handles UGC, operations, and ensures top-notch creative delivery and systems.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="border-2 border-green-400 p-3 sm:p-4 rounded-md text-center max-w-3xl mt-16 mx-4"
      >
        <p className="font-medium text-sm sm:text-xl">
          Together, we run Wizon Media lean and hands-on — working only with clients we believe we can scale.
        </p>
      </motion.div>
    </div>
  )
}
