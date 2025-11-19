"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const productsRow1 = [
  "/image/portfolio/ads/1.jpg",
  "/image/portfolio/ads/2.jpg",
  "/image/portfolio/ads/3.png",
  "/image/portfolio/ads/4.png",
  "/image/portfolio/ads/5.jpeg",
  "/image/portfolio/ads/6.png",
  "/image/portfolio/ads/7.png",
];

const productsRow2 = [
   "/image/portfolio/ads/8.png",
  "/image/portfolio/ads/9.png",
  "/image/portfolio/ads/10.png",
  "/image/portfolio/ads/11.jpeg",
  "/image/portfolio/ads/12.jpeg",
  "/image/portfolio/ads/13.png",
  "/image/portfolio/ads/14.png",
];

// merge all images for lightbox slider
const allImages = [...productsRow1, ...productsRow2];

export default function GraphicPortfolio() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section>
      <div className="max-w-7xl mx-auto">

        {/* First Row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <Marquee speed={60} gradient={false} pauseOnHover={false} loop={0}>
            {productsRow1.map((img, i) => (
              <div key={i} className="px-2 cursor-pointer">
                <img
                  src={img}
                  alt=""
                  onClick={() => { setIndex(i); setOpen(true); }}
                  className="md:h-64 md:w-64 h-44 w-44 object-cover"
                />
              </div>
            ))}
          </Marquee>
        </motion.div>

        {/* Second Row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Marquee speed={60} gradient={false} pauseOnHover={false} loop={0} direction="right">
            {productsRow2.map((img, i) => (
              <div key={i + productsRow1.length} className="px-2 cursor-pointer">
                <img
                  src={img}
                  alt=""
                  onClick={() => { setIndex(i + productsRow1.length); setOpen(true); }}
                  className="md:h-64 md:w-64 h-44 w-44 object-cover"
                />
              </div>
            ))}
          </Marquee>
        </motion.div>

      </div>

      {/* Lightbox */}
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={allImages.map((img) => ({ src: img }))}
          plugins={[Thumbnails]}
        />
      )}
    </section>
  );
}
