import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { WHY_DAHIYA_DATA } from '../data/siteData';
import {
  EDITORIAL_EASE,
  HairlineRule,
  MaskedLine,
  Reveal,
  SPRING_SCROLL,
  VIEWPORT_CONFIG,
} from './MotionPrimitives';

export function WhyDahiyaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, SPRING_SCROLL);
  const parallaxY = useTransform(smoothProgress, [0, 1], ['-9%', '9%']);
  const imageScale = useTransform(smoothProgress, [0, 0.5, 1], [1.12, 1.04, 1]);
  const cardFloatY = useTransform(smoothProgress, [0, 1], [20, -20]);

  return (
    <section
      aria-labelledby="why-heading"
      ref={sectionRef}
      className="grid grid-cols-1 lg:grid-cols-2 min-h-[100svh] items-stretch overflow-hidden"
    >
      {/* Left 50%: Architectural estate photo with spring parallax + frosted overlay card */}
      <div className="relative min-h-[55svh] lg:min-h-[100svh] overflow-hidden bg-[#173a2d] group">
        <motion.div
          style={{ y: parallaxY, scale: imageScale }}
          className="absolute inset-[-9%] will-change-transform"
        >
          <img
            src={WHY_DAHIYA_DATA.image}
            alt={WHY_DAHIYA_DATA.imageAlt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
          />
        </motion.div>

        <motion.div
          style={{ y: cardFloatY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.9, delay: 0.12, ease: EDITORIAL_EASE }}
          className="absolute bottom-7 left-7 z-10 bg-[#173a2d]/84 backdrop-blur-md border border-white/15 px-7 py-6 max-w-[310px] will-change-transform transition-colors duration-300 group-hover:border-[#d4b065]/45"
        >
          <p className="font-serif font-normal text-[24px] leading-[1.25] text-white">
            {WHY_DAHIYA_DATA.overlayTitle}
          </p>
          <p className="mt-2 text-[10px] font-semibold tracking-[0.26em] uppercase text-[#d4b065]">
            {WHY_DAHIYA_DATA.overlaySubtitle}
          </p>
        </motion.div>
      </div>

      {/* Right 50%: Warm sand background with 3 pillars */}
      <div className="bg-[#ebe4d6] px-6 sm:px-12 lg:px-16 xl:px-20 py-20 md:py-24 flex flex-col justify-center">
        <div className="max-w-[540px]">
          <Reveal y={16}>
            <p className="section-label">{WHY_DAHIYA_DATA.eyebrow}</p>
          </Reveal>

          <h2
            id="why-heading"
            className="font-serif font-normal text-[40px] sm:text-[46px] md:text-[54px] leading-[1.08] text-[#173a2d] mt-4"
          >
            <MaskedLine delay={0.06}>
              {WHY_DAHIYA_DATA.headingLine1}
            </MaskedLine>
            <MaskedLine delay={0.16}>
              {WHY_DAHIYA_DATA.headingLine2}
            </MaskedLine>
          </h2>

          <div className="mt-12">
            {WHY_DAHIYA_DATA.pillars.map((pillar, idx) => (
              <div key={pillar.number}>
                <HairlineRule
                  delay={0.1 + idx * 0.08}
                  className="h-[1px] w-full bg-[#173a2d]/14"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_CONFIG}
                  transition={{
                    duration: 0.75,
                    delay: 0.12 + idx * 0.09,
                    ease: EDITORIAL_EASE,
                  }}
                  className="py-7 flex items-start gap-7 group cursor-default"
                >
                  <span className="font-serif text-[16px] text-[#937b50] pt-0.5 tabular-nums transition-all duration-300 group-hover:text-[#173a2d] group-hover:scale-110">
                    {pillar.number}
                  </span>
                  <div className="transition-transform duration-400 ease-out group-hover:translate-x-2">
                    <h3 className="text-[16px] font-semibold text-[#173a2d] leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.65] text-[#173a2d]/72">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
