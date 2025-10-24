import Hero from '../components/home/Hero'
import VideoSection from '../components/home/VideoSection'
import TrustBadges from '../components/home/TrustBadges'
import CardLanding from '../components/ui/CardLanding'
import { motion } from "framer-motion"
import StuckSales from '../components/home/StuckSales'
import TrustedBrands from '../components/home/TrustedBrands'
import CTASection from '../components/home/CTASection'
import FAQ from '../components/FAQ'
import ContactForm from '../components/ContactForm'
import CarouselSection from '../components/home/CarouselSection '
import ScaleSection from '../components/home/ScaleSection'

const LandingPage = () => {

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
    <div className='max-w-8xl mx-auto '>
      <Hero />
      <VideoSection />
      <TrustBadges />

      <div className="flex justify-center items-center sm:mt-10">
        <hr className="w-40 sm:w-80 border-t-3 border-gray-800" />
      </div>

      {/* Stats Section */}
      <motion.div
  className="grid max-w-6xl mx-auto grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-12 mt-5 px-4 md:px-0"
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
<CarouselSection />

<ScaleSection />
    

      <TrustedBrands />
      <CTASection />
      <FAQ />
      {/* <ContactForm /> */}
      
    </div>
  )
}

export default LandingPage
