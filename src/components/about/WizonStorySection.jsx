import { motion } from 'framer-motion'
import Button from '../ui/Button'

export default function WizonStorySection() {
  return (
    <div className="flex flex-col text-black px-4 sm:px-6 py-6 space-y-6">
      {/* Quote */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="italic text-end text-xl sm:text-3xl font-medium"
      >
        “Before we helped others grow, we failed at growing our own.”
      </motion.p>

      {/* Paragraphs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-gray-800 max-w-5xl text-[20px] md:text-[25px] text space-y-5"
      >
        <p className="text-start">
          We started Wizon Media after launching — and shutting down — 3 of our own ventures. Every time, the products were good, the teams were dedicated, but marketing broke everything.
        </p>
        <p className="text-end">
          We wasted money on the wrong campaigns. Listened to generic advice. Worked with freelancers who didn’t care. And when the numbers didn’t add up — no one told us why.
        </p>
        <p>
          That’s when we realized: if we’re struggling with this, hundreds of other founders are too. So we decided to build what we wished we had back then — an agency that doesn’t just “run ads”… but helps scale a brand like a co-pilot.
        </p>
      </motion.div>

      {/* Highlight Box */}
      <div className='w-full flex justify-end '>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="border-2 border-green-400  whitespace-nowrap p-2 "
      >
        <p className=" sm:text-[25px] text">
          Today, Wizon Media is exactly that:
        </p>
      </motion.div>
      </div>

      {/* Final Paragraph */}
        <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-end text-gray-800 max-w-5xl ml-auto text text-base sm:text-[25px]"
      >
        A high-performance team helping fashion brands grow with <br /> real business logic, proper content systems, and Meta Ads that convert.
      </motion.p>

      {/* Button */}
      <motion.div
        className="text-center text-xs md:text[16px] mb-12 mx-3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
      >
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-block"
        >
          <Button full="true" text="Book Free Consultation Now!" to="/contact"/>
        </motion.div>
      </motion.div>
    </div>
  )
}
