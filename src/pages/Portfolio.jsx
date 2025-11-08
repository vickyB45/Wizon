"use client";
import { motion } from "framer-motion";
import DashboardCard from "../components/portfolio/DashboardCard";
import AdShowcase from "../components/portfolio/AdShowcase";
import ReelCard from "../components/portfolio/ReelCard";

export const brandData = [
  {
    name: "Arush",
    heading: "Scaled from ",
    heading2: " ₹90K → ₹8L+",
    heading3: "in 45 Days",
    description: "By identifying the perfect ",
    description2: "Product–Market Fit.",
    image:
      "https://i.pinimg.com/736x/79/e7/b4/79e7b43087f01c932ae5eba9af3f5ad3.jpg1",
    image2:
      "https://i.pinimg.com/1200x/7f/b6/dd/7fb6ddf1d5c10da50f4e06310ab60d30.jpg",
  },
  {
    name: "Crook Store",
    heading: "Scaled from ",
    heading2: " ₹3L → ₹15L+",
    heading3: "in Just 3 Months",
    description: "Achieved sustainable growth in ",
    description2: "a LOW AOV category - profitable.",
    image: "https://yourcdn.com/images/arush-dashboard.png",
    image2: "https://yourcdn.com/images/arush-dashboard.png",
  },
  {
    name: "Liveology",
    heading: "Scaled profitably ",
    heading2: "Beyond ₹5L Monthly",
    heading3: "Sales",
    description: "Build consistent, sustainable growth",
    description2: "with full - funnel Meta strategy.",
    image: "https://yourcdn.com/images/arush-dashboard.png",
    image2: "https://yourcdn.com/images/arush-dashboard.png",
  },
];

const adShowcaseData = [
  {
    image: "https://i.pinimg.com/736x/0e/38/5b/0e385b662f1b40084d151d7fb51a46a6.jpg",
    heading1: "CONFIDENCE STARTS",
    heading2: "with comfort",
  },
  {
    image: "https://i.pinimg.com/736x/0e/38/5b/0e385b662f1b40084d151d7fb51a46a6.jpg",
    heading1: "STYLE MEETS",
    heading2: "every occasion",
  },
  {
    image: "https://i.pinimg.com/736x/0e/38/5b/0e385b662f1b40084d151d7fb51a46a6.jpg",
    heading1: "ELEVATE YOUR",
    heading2: "daily look",
  },
  {
    image: "https://i.pinimg.com/736x/0e/38/5b/0e385b662f1b40084d151d7fb51a46a6.jpg",
    heading1: "BREEZY WEAR",
    heading2: "for summer vibes",
  },
  {
    image: "https://i.pinimg.com/736x/0e/38/5b/0e385b662f1b40084d151d7fb51a46a6.jpg",
    heading1: "CONFIDENCE STARTS",
    heading2: "with comfort",
  },
  {
    image: "https://i.pinimg.com/736x/0e/38/5b/0e385b662f1b40084d151d7fb51a46a6.jpg",
    heading1: "STYLE MEETS",
    heading2: "every occasion",
  },
  {
    image: "https://i.pinimg.com/736x/0e/38/5b/0e385b662f1b40084d151d7fb51a46a6.jpg",
    heading1: "ELEVATE YOUR",
    heading2: "daily look",
  },
  {
    image: "https://i.pinimg.com/736x/0e/38/5b/0e385b662f1b40084d151d7fb51a46a6.jpg",
    heading1: "BREEZY WEAR",
    heading2: "for summer vibes",
  },
  {
    image: "https://i.pinimg.com/736x/0e/38/5b/0e385b662f1b40084d151d7fb51a46a6.jpg",
    heading1: "CONFIDENCE STARTS",
    heading2: "with comfort",
  },
  {
    image: "https://i.pinimg.com/736x/0e/38/5b/0e385b662f1b40084d151d7fb51a46a6.jpg",
    heading1: "STYLE MEETS",
    heading2: "every occasion",
  },
  {
    image: "https://i.pinimg.com/736x/0e/38/5b/0e385b662f1b40084d151d7fb51a46a6.jpg",
    heading1: "ELEVATE YOUR",
    heading2: "daily look",
  },
  {
    image: "https://i.pinimg.com/736x/0e/38/5b/0e385b662f1b40084d151d7fb51a46a6.jpg",
    heading1: "BREEZY WEAR",
    heading2: "for summer vibes",
  },
  {
    image: "https://i.pinimg.com/736x/0e/38/5b/0e385b662f1b40084d151d7fb51a46a6.jpg",
    heading1: "STYLE MEETS",
    heading2: "every occasion",
  },
  {
    image: "https://i.pinimg.com/736x/0e/38/5b/0e385b662f1b40084d151d7fb51a46a6.jpg",
    heading1: "ELEVATE YOUR",
    heading2: "daily look",
  },
  {
    image: "https://i.pinimg.com/736x/0e/38/5b/0e385b662f1b40084d151d7fb51a46a6.jpg",
    heading1: "BREEZY WEAR",
    heading2: "for summer vibes",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Portfolio = () => {
  return (
    <section className="relative w-full overflow-hidden md:py-20 px-6 md:px-12">
      {/* HEADER SECTION */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={{
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="flex flex-col md:flex-row w-full items-start md:justify-between"
      >
        <div className="hidden md:block z-20 relative w-full md:w-[45%] md:mt-14 border-t-4"></div>

        <div className="relative w-full md:w-[55%] z-10 text mt-8 md:mt-0 text-center md:text-left">
          <motion.h1
            variants={fadeUp}
            className="text-[36px] md:text-6xl font-medium leading-12 text-gray-900 md:leading-tight"
          >
            <span className="text-black font-bold">Brand </span>
            <span className="relative inline-block">
              <span className="relative px-1 z-10">Dashboards</span>
              <span className="absolute inset-0 border-2 border-green-500 rounded-sm -z-0"></span>
            </span>{" "}
            That <br className="hidden md:block" /> Speak for Themselves
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 md:mt-6 text-sm md:text-xl text-gray-800 leading-relaxed"
          >
            <span className="bg-black text-white px-1">
              Here’s what our clients’ real dashboards looked like
            </span>{" "}
            <br />
            <span className="bg-black text-white px-1">
              inside Shopify and Meta Ads — backed by data,
            </span>{" "}
            <br />
            <span className="bg-black text-white px-1">
              not{" "}
              <span className="line-through decoration-red-500 decoration-2">
                promises
              </span>
              .
            </span>
          </motion.p>
        </div>
      </motion.div>

      {/* DASHBOARD SECTION */}
      <div className="space-y-4 mt-10 relative z-10">
        <DashboardCard brands={brandData} />
      </div>

      {/* ADS SECTION */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={{
          show: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="mt-16 md:mt-20  max-w-6xl mx-auto"
      >
        <motion.h2
          variants={fadeUp}
          className="text-center text-[36px] md:text-6xl font-[400] text"
        >
          The Ads Behind the{" "}
          <span className="border-b-4 ">Number</span>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 my-8 md:my-12"
        >
          {adShowcaseData.map((ad, index) => (
            <AdShowcase key={index} data={ad} />
          ))}
        </motion.div>
      </motion.div>

      {/* REELS SECTION */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={{
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="mt-16 md:mt-24"
      >
        <motion.h2
          variants={fadeUp}
          className="text-[34px] md:text-[52px] text text-center leading-tight"
        >
          Reels That Convert{" "}
          <span className="inline-block px-2 bg-green-600 text-white">
            Views Into Money
          </span>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="mt-6 max-w-[1150px] mx-auto text-center grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          <ReelCard title="CTR: 2% | ROAS: 3.5X | Revenue: 1.1L +" />
          <ReelCard title="CTR: 1.1% | ROAS: 2.1X | Revenue: 2.4L +" />
          <ReelCard title="CTR: 2% | ROAS: 2.5X | Revenue: 1L +" />
        </motion.div>
      </motion.div>

      {/* FOOTER CTA */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        className="mt-24 text text-center leading-14"
      >
        <h3 className="text-[36px] md:text-[54px] font-bold">
          WANT DASHBOARDS LIKE THESE?
        </h3>
        <p className="text-xl md:text-3xl mt-2">
          Let's build your next growth story together.
        </p>
        <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.92 }}
  transition={{ type: "spring", stiffness: 300, damping: 15 }}
  className="text-2xl md:text-4xl bg-black text-white px-6 md:px-10 mt-6 rounded-3xl font-bold py-3 md:py-4 w-full sm:w-auto"
>
  Book Free Consultation Now!
</motion.button>

      </motion.div>
    </section>
  );
};

export default Portfolio;
