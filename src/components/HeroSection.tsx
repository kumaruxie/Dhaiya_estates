import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { HERO_DATA } from '../data/siteData';
import {
  ArrowIcon,
  EDITORIAL_EASE,
  HairlineRule,
  MaskedLine,
  useSmoothScroll,
} from './MotionPrimitives';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollToSection } = useSmoothScroll();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100svh] md:min-h-[680px] flex items-end overflow-hidden bg-[#173a2d]"
    >
      {/* Parallax & atmospheric zoom-settle background photograph */}
      <motion.div
        style={{ y: imageY }}
        initial={{ scale: 1.09 }}
        animate={{ scale: 1.02 }}
        transition={{ duration: 1.8, ease: EDITORIAL_EASE }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={HERO_DATA.image}
          alt={HERO_DATA.imageAlt}
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Directional deep forest green gradient overlay matching prototype */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(100deg, rgba(16, 44, 33, 0.88) 0%, rgba(19, 49, 37, 0.66) 44%, rgba(16, 44, 33, 0.32) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(16, 44, 33, 0.48) 0%, rgba(16, 44, 33, 0) 28%, rgba(16, 44, 33, 0.45) 100%)',
        }}
      />

      {/* Main editorial hero content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-[1320px] mx-auto px-6 md:px-12 pt-36 pb-16 md:pb-24"
      >
        <div className="max-w-[780px]">
          <div className="flex items-center gap-4 mb-6">
            <HairlineRule
              immediate
              delay={0.15}
              className="w-8 h-[1px] bg-[#d4b065]"
            />
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: EDITORIAL_EASE }}
              className="text-[11px] font-semibold tracking-[0.26em] text-[#d4b065] uppercase"
            >
              {HERO_DATA.eyebrow}
            </motion.span>
          </div>

          <h1 className="font-serif font-normal text-[54px] sm:text-[72px] md:text-[86px] leading-[1.01] tracking-[-0.01em] text-white">
            <MaskedLine immediate delay={0.22}>
              {HERO_DATA.titleLead}
            </MaskedLine>
            <MaskedLine immediate delay={0.34}>
              <em className="italic text-[#d4b065] font-normal">
                {HERO_DATA.titleAccent}
              </em>
            </MaskedLine>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.48, ease: EDITORIAL_EASE }}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-14"
          >
            <p className="border-l border-white/25 pl-5 max-w-[355px] text-[15px] leading-[1.68] text-white/85">
              {HERO_DATA.subtitle}
            </p>

            <a
              href={HERO_DATA.ctaHref}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(HERO_DATA.ctaHref);
              }}
              className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.24em] text-[#d4b065] hover:text-[#e8ca86] uppercase transition-colors duration-200 pb-1 group self-start sm:self-end"
            >
              <span>{HERO_DATA.ctaLabel}</span>
              <ArrowIcon className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom-right corporate nameplate */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.62, ease: EDITORIAL_EASE }}
        className="hidden md:flex items-center bg-[#d4b065] text-[#173a2d] px-8 py-4 text-[11px] font-semibold tracking-[0.22em] uppercase absolute bottom-0 right-0 z-20"
      >
        {HERO_DATA.cornerBadge}
      </motion.div>
    </section>
  );
}
