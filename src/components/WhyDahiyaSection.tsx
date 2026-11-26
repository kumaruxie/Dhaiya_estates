import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { WHY_DAHIYA_DATA } from '../data/siteData';
import {
  EDITORIAL_EASE,
  HairlineRule,
  Reveal,
  VIEWPORT_CONFIG,
} from './MotionPrimitives';

export function WhyDahiyaSection() {
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[640px]">
      {/* Left 50%: Architectural estate photo with parallax + frosted overlay card */}
      <div
        ref={imageContainerRef}
        className="relative min-h-[420px] lg:min-h-[680px] overflow-hidden bg-[#173a2d]"
      >
        <motion.div
          style={{ y: parallaxY }}
          className="absolute inset-[-8%] will-change-transform"
        >
          <img
            src={WHY_DAHIYA_DATA.image}
            alt={WHY_DAHIYA_DATA.imageAlt}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.8, delay: 0.15, ease: EDITORIAL_EASE }}
          className="absolute bottom-7 left-7 z-10 bg-[#173a2d]/82 backdrop-blur-sm border border-white/15 px-7 py-6 max-w-[300px]"
        >
          <p className="font-serif font-normal text-[23px] leading-[1.25] text-white">
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

          <Reveal delay={0.08} y={24}>
            <h2 className="font-serif font-normal text-[40px] sm:text-[46px] md:text-[52px] leading-[1.08] text-[#173a2d] mt-4">
              {WHY_DAHIYA_DATA.headingLine1}
              <br />
              {WHY_DAHIYA_DATA.headingLine2}
            </h2>
          </Reveal>

          <div className="mt-12">
            {WHY_DAHIYA_DATA.pillars.map((pillar, idx) => (
              <div key={pillar.number}>
                <HairlineRule
                  delay={0.1 + idx * 0.08}
                  className="h-[1px] w-full bg-[#173a2d]/14"
                />
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_CONFIG}
                  transition={{
                    duration: 0.7,
                    delay: 0.12 + idx * 0.09,
                    ease: EDITORIAL_EASE,
                  }}
                  className="py-7 flex items-start gap-7 group"
                >
                  <span className="font-serif text-[16px] text-[#937b50] pt-0.5 tabular-nums transition-colors duration-300 group-hover:text-[#173a2d]">
                    {pillar.number}
                  </span>
                  <div>
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
