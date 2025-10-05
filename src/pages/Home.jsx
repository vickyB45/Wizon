import Hero from '../components/home/Hero'
import VideoSection from '../components/home/VideoSection'
import TrustBadges from '../components/home/TrustBadges'
import CardLanding from '../components/ui/CardLanding'
import { motion } from "framer-motion"
import StuckSales from '../components/home/StuckSales'
import CardLanding2 from '../components/ui/CardLanding2'
import ScaleSection from '../components/home/ScaleSection'
import TrustedBrands from '../components/home/TrustedBrands'
import CTASection from '../components/home/CTASection'
import FAQ from '../components/FAQ'
import ContactForm from '../components/ContactForm'

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
    <div className='max-w-5xl mx-auto md:px-4'>
      <Hero />
      <VideoSection />
      <TrustBadges />

      <div className="flex justify-center items-center my-6 sm:my-10">
        <hr className="w-40 sm:w-80 border-t-2 border-gray-800" />
      </div>

      {/* Stats Section */}
      <motion.div
  className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-12 mt-5 px-4 md:px-0"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  {[
    { heading: "₹2CR+", text: "AD SPEND MANAGED EVERY YEAR" },
    { heading: "3X", text: "AVERAGE ROAS ACROSS CLIENTS" },
    { heading: "80%+", text: "CLIENT RETENTION RATE" },
  ].map((item, i) => (
    <motion.div
      key={i}
      custom={i}
      variants={cardVariants}
      className="flex justify-center sm:justify-start"
    >
      <CardLanding  heading={item.heading} text={item.text} />
    </motion.div>
  ))}
</motion.div>


      <StuckSales />

     <div className="py-8 sm:py-12 md:mt-8 sm:mt-16 px-4 sm:px-0">
  {/* Animated Heading */}
  <motion.h2
    className="text-center text-4xl md:text-[52px] heading font-semibold leading-snug"
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
    className="grid grid-cols-1 p-2 gap-4 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 mt-6 sm:mt-10"
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
      <motion.div
        key={i}
        variants={itemVariants}
        className="flex justify-center sm:justify-start"
      >
        <CardLanding2 heading={item.heading} text={item.text} />
      </motion.div>
    ))}
  </motion.div>


        <ScaleSection />
      </div>

      <TrustedBrands />
      <CTASection />
      <FAQ />
      <ContactForm />
    </div>
  )
}

export default Home
