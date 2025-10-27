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
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=800&q=80",
];

const productsRow2 = [
  "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=800&q=80",
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
