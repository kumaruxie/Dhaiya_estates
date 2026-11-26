import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { HERO_DATA } from '../data/siteData';
import {
  ArrowIcon,
  EDITORIAL_EASE,
  HairlineRule,
  MaskedLine,
  SPRING_SCROLL,
  useSmoothScroll,
} from './MotionPrimitives';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollToSection } = useSmoothScroll();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, SPRING_SCROLL);

  const imageY = useTransform(smoothProgress, [0, 1], ['0%', '20%']);
  const imageScale = useTransform(smoothProgress, [0, 1], [1.02, 1.14]);
  const contentY = useTransform(smoothProgress, [0, 1], ['0%', '14%']);
  const contentOpacity = useTransform(smoothProgress, [0, 0.78], [1, 0.18]);
  const badgeY = useTransform(smoothProgress, [0, 1], ['0%', '-24%']);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      ref={sectionRef}
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-[#173a2d]"
    >
      {/* Apple-style continuous spring-scrubbed parallax + initial scale settle */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        initial={{ scale: 1.11, opacity: 0.92 }}
        animate={{ scale: 1.02, opacity: 1 }}
        transition={{ duration: 1.9, ease: EDITORIAL_EASE }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={HERO_DATA.image}
          alt={HERO_DATA.imageAlt}
          fetchPriority="high"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Directional deep forest green gradient overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(100deg, rgba(16, 44, 33, 0.89) 0%, rgba(19, 49, 37, 0.67) 44%, rgba(16, 44, 33, 0.34) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(16, 44, 33, 0.48) 0%, rgba(16, 44, 33, 0) 30%, rgba(16, 44, 33, 0.5) 100%)',
        }}
      />

      {/* Editorial Hero Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-[1320px] mx-auto px-6 md:px-12 pt-36 pb-16 sm:pb-20 md:pb-24 will-change-transform"
      >
        <div className="max-w-[780px]">
          <div className="flex items-center gap-4 mb-6">
            <HairlineRule
              immediate
              delay={0.12}
              className="w-8 h-[1px] bg-[#d4b065]"
            />
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.18, ease: EDITORIAL_EASE }}
              className="text-[11px] font-semibold tracking-[0.26em] text-[#d4b065] uppercase"
            >
              {HERO_DATA.eyebrow}
            </motion.span>
          </div>

          <h1
            id="hero-heading"
            className="font-serif font-normal text-[52px] sm:text-[72px] md:text-[88px] leading-[1.0] tracking-[-0.012em] text-white"
          >
            <MaskedLine immediate delay={0.2}>
              {HERO_DATA.titleLead}
            </MaskedLine>
            <MaskedLine immediate delay={0.34}>
              <em className="italic text-[#d4b065] font-normal">
                {HERO_DATA.titleAccent}
              </em>
            </MaskedLine>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.46, ease: EDITORIAL_EASE }}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-14"
          >
            <p className="border-l border-white/25 pl-5 max-w-[360px] text-[15px] leading-[1.68] text-white/85">
              {HERO_DATA.subtitle}
            </p>

            <motion.a
              href={HERO_DATA.ctaHref}
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: EDITORIAL_EASE }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(HERO_DATA.ctaHref);
              }}
              className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.24em] text-[#d4b065] hover:text-[#ecd191] uppercase transition-colors duration-200 pb-1 group self-start sm:self-end"
            >
              <span>{HERO_DATA.ctaLabel}</span>
              <ArrowIcon className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-2" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom-right corporate nameplate */}
      <motion.div
        style={{ y: badgeY }}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85, delay: 0.58, ease: EDITORIAL_EASE }}
        className="hidden md:flex items-center bg-[#d4b065] text-[#173a2d] px-8 py-4 text-[11px] font-semibold tracking-[0.22em] uppercase absolute bottom-0 right-0 z-20 will-change-transform"
      >
        {HERO_DATA.cornerBadge}
      </motion.div>
    </section>
  );
}
