import { motion } from 'motion/react';
import { HERITAGE_DATA } from '../data/siteData';
import { EDITORIAL_EASE, Reveal, VIEWPORT_CONFIG } from './MotionPrimitives';

export function HeritageSection() {
  const [featured, ...secondary] = HERITAGE_DATA.images;

  return (
    <section className="bg-[#173a2d] text-white py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <div className="lg:col-span-4">
          <Reveal y={20}>
            <p className="text-[11px] font-bold tracking-[0.26em] text-[#d4b065] uppercase">
              {HERITAGE_DATA.eyebrow}
            </p>
            <h2 className="font-serif font-normal text-[40px] sm:text-[46px] md:text-[52px] leading-[1.08] text-white mt-4">
              {HERITAGE_DATA.headingLine1}
              <br />
              {HERITAGE_DATA.headingLine2}
            </h2>
            <p className="mt-6 text-[14.5px] leading-[1.7] text-white/70 max-w-[330px]">
              {HERITAGE_DATA.description}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8 grid grid-cols-2 gap-4 md:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.85, ease: EDITORIAL_EASE }}
            className="col-span-2 aspect-[16/8.6] overflow-hidden bg-[#102b21] group"
          >
            <img
              src={featured.src}
              alt={featured.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
            />
          </motion.div>

          {secondary.map((img, idx) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 24, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={VIEWPORT_CONFIG}
              transition={{
                duration: 0.85,
                delay: 0.1 + idx * 0.1,
                ease: EDITORIAL_EASE,
              }}
              className="aspect-[16/10] overflow-hidden bg-[#102b21] group"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
