import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { HERITAGE_DATA } from '../data/siteData';
import {
  ClipRevealFrame,
  MaskedLine,
  Reveal,
  SPRING_SCROLL,
} from './MotionPrimitives';

export function HeritageSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [featured, ...secondary] = HERITAGE_DATA.images;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, SPRING_SCROLL);
  const topPhotoY = useTransform(smoothProgress, [0, 1], [18, -18]);
  const bottomLeftY = useTransform(smoothProgress, [0, 1], [32, -24]);
  const bottomRightY = useTransform(smoothProgress, [0, 1], [44, -30]);
  const secondaryY = [bottomLeftY, bottomRightY];

  return (
    <section
      aria-labelledby="heritage-heading"
      ref={sectionRef}
      className="bg-[#173a2d] text-white min-h-[100svh] flex flex-col justify-center py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1320px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <div className="lg:col-span-4">
          <Reveal y={16}>
            <p className="text-[11px] font-bold tracking-[0.26em] text-[#d4b065] uppercase">
              {HERITAGE_DATA.eyebrow}
            </p>
          </Reveal>

          <h2
            id="heritage-heading"
            className="font-serif font-normal text-[40px] sm:text-[46px] md:text-[54px] leading-[1.08] text-white mt-4"
          >
            <MaskedLine delay={0.06}>{HERITAGE_DATA.headingLine1}</MaskedLine>
            <MaskedLine delay={0.16}>{HERITAGE_DATA.headingLine2}</MaskedLine>
          </h2>

          <Reveal delay={0.22} y={18}>
            <p className="mt-6 text-[15px] leading-[1.7] text-white/70 max-w-[330px]">
              {HERITAGE_DATA.description}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8 grid grid-cols-2 gap-4 md:gap-5">
          <motion.div
            style={{ y: topPhotoY }}
            className="col-span-2 will-change-transform"
          >
            <ClipRevealFrame>
              <div className="aspect-[16/8.6] overflow-hidden bg-[#102b21] group">
                <img
                  src={featured.src}
                  alt={featured.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.06]"
                />
              </div>
            </ClipRevealFrame>
          </motion.div>

          {secondary.map((img, idx) => (
            <motion.div
              key={img.src}
              style={{ y: secondaryY[idx] }}
              className="will-change-transform"
            >
              <ClipRevealFrame delay={0.1 + idx * 0.1}>
                <div className="aspect-[16/10] overflow-hidden bg-[#102b21] group">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.07]"
                  />
                </div>
              </ClipRevealFrame>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
