"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import DashboardCard from "../components/portfolio/DashboardCard";
import AdShowcase from "../components/portfolio/AdShowcase";
import ReelCard from "../components/portfolio/ReelCard";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Link } from "react-router-dom";
import { Volume2, VolumeX } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const brandData = [
  {
    name: "Arush",
    heading: "Scaled from",
    heading2: " ₹90K → ₹8L+",
    heading3: "in 45 Days",
    description: "By identifying the perfect",
    description2: "Product–Market Fit.",
    metaImage: "/image/portfolio/Arush_Ads_Manager.jpeg",
    shopifyImage: "/image/portfolio/Arush_Shopify.jpeg",
  },
  {
    name: "Crook Store",
    heading: "Scaled from",
    heading2: " ₹3L → ₹15L+",
    heading3: "in Just 3 Months",
    description: "Achieved sustainable growth in",
    description2: "a LOW AOV category - profitable.",
    metaImage: "/image/portfolio/Crook_Ads_Manager.jpeg",
    shopifyImage: "/image/portfolio/Crook_Shopify.jpeg",
  },
  {
    name: "Liveology",
    heading: "Scaled profitably",
    heading2: "Beyond ₹5L Monthly",
    heading3: "Sales",
    description: "Build consistent, sustainable growth",
    description2: "with full - funnel Meta strategy.",
    metaImage: "/image/portfolio/Liveology_Ads_Manager.jpeg",
    shopifyImage: "/image/portfolio/Liveology_Ads_Manager.jpeg",
  },
];

export const adShowcaseData = [
  { image: "/image/portfolio/ads/1.jpg", heading1: "CTR:2.27% | ROAS:2.95X |", heading2: "Revenue:9.4L+" },
  { image: "/image/portfolio/ads/2.jpg", heading1: "CTR:3% | ROAS:2.7X |", heading2: "Revenue:1.4L+" },
  { image: "/image/portfolio/ads/3.png", heading1: "CTR:3.4% | ROAS:2.9X |", heading2: "Revenue:1.3L+" },
  { image: "/image/portfolio/ads/4.png", heading1: "CTR:1% | ROAS:4.1X |", heading2: "Revenue:7.2L+" },
  { image: "/image/portfolio/ads/5.jpeg", heading1: "CTR:1% | ROAS:4X |", heading2: "Revenue:6.3L+" },
  { image: "/image/portfolio/ads/6.png", heading1: "CTR:1.2% | ROAS:3X |", heading2: "Revenue:2.1L+" },
  { image: "/image/portfolio/ads/7.png", heading1: "CTR:1.3% | ROAS:3.4X |", heading2: "Revenue:1.5L+" },
  { image: "/image/portfolio/ads/8.png", heading1: "CTR:1.4% | ROAS:2X |", heading2: "Revenue:4.2L+" },
  { image: "/image/portfolio/ads/9.png", heading1: "CTR:1.2% | ROAS:1.8X |", heading2: "Revenue:4L+" },
  { image: "/image/portfolio/ads/11.jpeg", heading1: "CTR:2.5% | ROAS:2.4X |", heading2: "Revenue:3.5L+" },
  { image: "/image/portfolio/ads/10.png", heading1: "CTR:1.7% | ROAS:1.9X |", heading2: "Revenue:3.2L+" },
  { image: "/image/portfolio/ads/TJC_1.png", heading1: "CTR:3.8% | ROAS:2.5X |", heading2: "Revenue:5.1L+" },
  { image: "/image/portfolio/ads/TJC_2.png", heading1: "CTR:3% | ROAS:3.6X |", heading2: "Revenue:2.7L+" },
  { image: "/image/portfolio/ads/TJC_3.png", heading1: "CTR:3.1% | ROAS:3.1X |", heading2: "Revenue:1L+" },
  { image: "/image/portfolio/ads/12.jpeg", heading1: "CTR:2.1% | ROAS:4X |", heading2: "Revenue:11L+" },
  { image: "/image/portfolio/ads/13.png", heading1: "CTR:2.1% | ROAS:5X |", heading2: "Revenue:3L+" },
  { image: "/image/portfolio/ads/14.png", heading1: "CTR:3.9% | ROAS:4.1X |", heading2: "Revenue:1.3L+" },
  { image: "/image/portfolio/ads/15.png", heading1: "CTR:5.6% | ROAS:3.7X |", heading2: "Revenue:1.1L+" },
];

const Portfolio = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = adShowcaseData.map((ad) => ({ src: ad.image }));

  const [activeVideo, setActiveVideo] = useState(null);
  const toggleMute = (id) => {
    setActiveVideo((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full overflow-hidden md:py-20 px-6 md:px-12">

      {/* HEADER SECTION */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
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
        </div>
      </motion.div>

      {/* DASHBOARD SECTION */}
      <div className="space-y-4 mt-10 relative z-10">
        <DashboardCard brands={brandData} />
      </div>

      {/* DESKTOP ADS GRID (UNCHANGED) */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        className="mt-16 md:mt-20 max-w-6xl mx-auto"
      >
        <motion.h2 variants={fadeUp} className="text-center text-[36px] md:text-6xl font-[400] text">
          The Ads Behind the <span className="border-b-4 ">Number</span>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 my-8 md:my-12"
        >
          {adShowcaseData.map((ad, index) => (
            <AdShowcase
              key={index}
              data={ad}
              onClick={() => {
                setCurrentIndex(index);
                setLightboxOpen(true);
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={slides}
          index={currentIndex}
        />
      )}

      {/* --- MOBILE ADS (ROW FORMAT) --- */}
      <div className="md:hidden mt-10">

        <div className="flex overflow-x-auto gap-4 px-3 pb-4 scrollbar-hide">
          {adShowcaseData.map((item, index) => (
            <div
              key={index}
              className="min-w-[260px] rounded-lg overflow-hidden shadow-md cursor-pointer flex-shrink-0"
              onClick={() => {
                setCurrentIndex(index);
                setLightboxOpen(true);
              }}
            >
              <img
                src={item.image}
                alt={`ad-${index}`}
                className="w-full h-68 object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* REELS SECTION */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
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

        {/* DESKTOP REELS GRID */}
        <motion.div
          variants={fadeUp}
          className="hidden md:grid mt-6 max-w-[1150px] mx-auto text-center grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          <ReelCard title="CTR: 2% | ROAS: 3.5X | Revenue: 1.1L +" src="/video/portfolio/1.mp4" />
          <ReelCard title="CTR: 1.1% | ROAS: 2.1X | Revenue: 2.4L +" src="/video/portfolio/2.mp4" />
          <ReelCard title="CTR: 2% | ROAS: 2.5X | Revenue: 1L +" src="/video/portfolio/3.mp4" />
        </motion.div>

        {/* MOBILE REELS ROW (SCROLLABLE) */}
        <div className="md:hidden mt-6 overflow-x-auto pb-4 flex gap-4 px-4">
          {[ 
            { src:"/video/portfolio/1.mp4", id:1 },
            { src:"/video/portfolio/2.mp4", id:2 },
            { src:"/video/portfolio/3.mp4", id:3 }
          ].map((v) => {
            const isActive = activeVideo === v.id;
            return (
              <div
                key={v.id}
                className="min-w-[260px] rounded-xl overflow-hidden shadow-md relative flex-shrink-0"
              >
                <video
                  src={v.src}
                  autoPlay
                  loop
                  playsInline
                  muted={!isActive}
                  className="w-full h-[440px] object-cover"
                />
                <button
                  onClick={() => toggleMute(v.id)}
                  className="absolute bottom-3 right-3 bg-black/60 text-white p-2 rounded-full"
                >
                  {isActive ? <Volume2 size={18} /> : <VolumeX size={18} />}
                </button>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* FOOTER CTA */}
      <motion.div initial="hidden" whileInView="show" variants={fadeUp} className="mt-24 text text-center leading-14">
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
          <Link to="/contact">Book Free Consultation Now!</Link>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Portfolio;
