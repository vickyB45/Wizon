
import ScalingSection from '../components/mainHome/ScalingSection'
import GrowthSection from '../components/mainHome/GrowthSection'
import GraphicPortfolio from '../components/mainHome/GraphicPortfolio'
import UGCPortfolio from '../components/mainHome/UGCPortfolio'
import WizonSection from '../components/mainHome/WizonSection'
import ComparisonTable from '../components/mainHome/ComparisonTable'
import FashionBrand from '../components/mainHome/FashionBrand'
import FAQSection from '../components/mainHome/FAQSection'

import { motion, useInView } from "framer-motion";
import  { useRef } from "react";

const Home = () => {
    const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div className='w-full overflow-hidden'>
        <ScalingSection/>
        <GrowthSection />
        <GraphicPortfolio />
        <UGCPortfolio />
        <WizonSection/>
        <ComparisonTable/>
        <FashionBrand />
        <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="max-w-5xl mx-auto py-10 mt-10"
    >
      <div className="border-2 p-4 rounded-xl">
        <h3 className="text-center">
          <span className="bg-black text-4xl font-bold text-yellow-300 heading px-2 py-1 rounded">
            How We Scale Fashion Brands?
          </span>
        </h3>

        <div className="md:px-6">
          <p className="py-2 mt-4 tracking-tight text-lg md:text-2xl text md:leading-6 leading-8">
            We follow our{" "}
            <span className="inline-block border-red-600 border-2">
              Business-Led Growth
            </span>{" "}
            System — a Proven Framework to scale fashion brands beyond ₹10L/month profitably.
          </p>

          <p className="py-2 mt-4 tracking-tight text-lg md:text-2xl text md:leading-6 leading-8">
            We don't just run ads. <br />
            We combine your business number, customer behavior, Meta Ads data, and
            high-converting content (like UGC & influencer collabs) to build a real
            growth engine.
          </p>

          <p className="py-2 mt-4 tracking-tight text-lg md:text-2xl text md:leading-6 leading-8">
            Everything we do is backed by data, psychology, and proven strategy — not
            random trends.
          </p>

          <p className="py-2 mt-4 tracking-tight text-lg md:text-2xl text md:leading-6 leading-8">
            <span className="inline-block border-green-600 border-2">Our Goal?</span>{" "}
            <br />
            To turn your fashion into a profitable, scalable business — not just
            generate temporary sales.
          </p>
        </div>
      </div>
    </motion.div>
        <FAQSection/>
    </div>
  )
}

export default Home