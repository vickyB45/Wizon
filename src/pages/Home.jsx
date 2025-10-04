
import Hero from '../components/home/Hero'
import VideoSection from '../components/home/VideoSection'
import TrustBadges from '../components/home/TrustBadges'
import CardLanding from '../components/ui/CardLanding'
import { motion } from "framer-motion"
import StuckSales from '../components/home/StuckSales'
import CardLanding2 from '../components/ui/CardLanding2'
import ScaleSection from '../components/home/ScaleSection'

const Home = () => {

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }


  return (
    <div className='max-w-5xl mx-auto'>
      <Hero />
      <VideoSection />
      <TrustBadges />
      <div className="flex justify-center items-center">
        <hr className="w-80 border-t-2 border-gray-800" />
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 mt-5 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          { heading: "₹2CR+", text: "AD SPEND MANAGED EVERY YEAR" },
          { heading: "3X", text: "AVERAGE ROAS ACROSS CLIENTS" },
          { heading: "80%+", text: "CLIENT RETENTION RATE" },
        ].map((item, i) => (
          <motion.div key={i} custom={i} variants={cardVariants}>
            <CardLanding heading={item.heading} text={item.text} />
          </motion.div>
        ))}
      </motion.div>
      <StuckSales />
      <div className="py-6 mt-8">
        {/* Animated Heading */}
        <motion.h2
          className="text-center text-[52px] heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Here's What Changes When{" "}
          <span className="font-[600] border-b-[3px] border-green-500">
            We Partner
          </span>
        </motion.h2>

        {/* Animated Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            {
              heading: "Clear Strategy",
              text: "Get a custom, data-backed plan to scale your brand without guesswork.",
            },
            {
              heading: "Optimized for Profit",
              text: "We build a real acquisition machine — not just pretty ROAS on paper.",
            },
            {
              heading: "Consistent Growth",
              text: "No more up-down sales. We engineer month-on-month stability.",
            },
            {
              heading: "Strategy-Led Content",
              text: "Ads your customers actually want to see — and buy from.",
            },
            {
              heading: "A Partner, Not Agency",
              text: "From website to products, we guide what drives real growth — not just ads.",
            },
          ].map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <CardLanding2 heading={item.heading} text={item.text} />
            </motion.div>
          ))}
        </motion.div>
        <ScaleSection />
      </div>
    </div>

  )
}

export default Home