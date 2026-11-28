import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { EXPERTISE_ITEMS, type ExpertiseItem } from '../data/siteData';
import {
  EDITORIAL_EASE,
  MaskedLine,
  Reveal,
  SPRING_SCROLL,
  VIEWPORT_CONFIG,
} from './MotionPrimitives';

function ExpertiseIcon({ type }: { type: ExpertiseItem['icon'] }) {
  const commonProps = {
    viewBox: '0 0 28 28',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className:
      'w-6 h-6 text-[#d4b065] transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-0.5',
    'aria-hidden': true,
  };

  switch (type) {
    case 'agricultural':
      return (
        <svg {...commonProps}>
          <path d="M4 20l6-9 4.5 6 3.5-4.5L24 20H4z" />
          <path d="M8.5 14l2.5 2.5" />
        </svg>
      );
    case 'farmhouse':
      return (
        <svg {...commonProps}>
          <path d="M5 13l9-7 9 7" />
          <path d="M7.5 11.5V22h13V11.5" />
          <path d="M12 22v-5.5a2 2 0 0 1 4 0V22" />
        </svg>
      );
    case 'plots':
      return (
        <svg {...commonProps}>
          <rect x="5" y="5" width="18" height="18" />
          <path d="M14 5v18M5 14h18" />
        </svg>
      );
    case 'development':
      return (
        <svg {...commonProps}>
          <path d="M5 22V11.5L14 6l9 5.5V22H5z" />
          <path d="M10 22v-7h8v7" />
          <path d="M10 18h8" />
        </svg>
      );
  }
}

export function ExpertiseSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, SPRING_SCROLL);
  const gridY = useTransform(smoothProgress, [0, 0.5, 1], [24, 0, -18]);

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      ref={sectionRef}
      className="bg-[#173a2d] text-white min-h-[100svh] flex flex-col justify-center pt-28 pb-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1320px] w-full mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-14">
          <div>
            <Reveal y={16}>
              <p className="text-[11px] font-bold tracking-[0.26em] text-[#d4b065] uppercase">
                WHAT WE DO
              </p>
            </Reveal>
            <h2
              id="expertise-heading"
              className="font-serif font-normal text-[40px] md:text-[54px] leading-[1.08] text-white mt-3"
            >
              <MaskedLine delay={0.08}>Our expertise</MaskedLine>
            </h2>
          </div>

          <Reveal delay={0.14} y={18} className="max-w-[300px]">
            <p className="text-[14.5px] leading-[1.65] text-white/70">
              A considered portfolio across the full land and real estate
              lifecycle.
            </p>
          </Reveal>
        </div>

        <motion.div
          style={{ y: gridY }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/15 divide-y sm:divide-y-0 lg:divide-x divide-white/15 will-change-transform"
        >
          {EXPERTISE_ITEMS.map((item, idx) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              whileHover={{ y: -4 }}
              transition={{
                duration: 0.75,
                delay: idx * 0.08,
                ease: EDITORIAL_EASE,
              }}
              className="relative flex flex-col justify-between group transition-colors duration-400 ease-out hover:bg-white/[0.06] sm:border-b sm:border-white/15 lg:border-b-0 sm:odd:border-r sm:odd:border-white/15 lg:odd:border-r-0"
            >
              {/* Top gold hairline sweep */}
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-[2px] bg-[#d4b065] scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-10"
              />

              {/* Authentic regional photo preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#102b21] border-b border-white/12">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-85 transition-all duration-700 ease-out will-change-transform group-hover:opacity-100 group-hover:scale-[1.07]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#173a2d]/80 via-[#173a2d]/20 to-transparent"
                />
                <span className="absolute top-3.5 right-4 text-[11px] font-semibold tracking-[0.16em] text-white/85 bg-[#173a2d]/75 backdrop-blur-sm px-2.5 py-1 border border-white/15 transition-colors duration-300 group-hover:text-[#d4b065] group-hover:border-[#d4b065]/50">
                  {item.number}
                </span>
              </div>

              <div className="p-7 md:p-8 flex-1 flex flex-col justify-between">
                <div className="mb-6">
                  <ExpertiseIcon type={item.icon} />
                </div>

                <div>
                  <h3 className="font-serif font-normal text-[23px] leading-[1.25] text-white transition-transform duration-300 ease-out group-hover:translate-x-1">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-[1.68] text-white/72 transition-colors duration-300 group-hover:text-white/90">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom subtle gold accent */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-7 right-7 h-[1px] bg-[#d4b065]/45 scale-x-0 origin-center transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
