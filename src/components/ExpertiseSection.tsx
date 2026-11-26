import { motion } from 'motion/react';
import { EXPERTISE_ITEMS, type ExpertiseItem } from '../data/siteData';
import { EDITORIAL_EASE, Reveal, VIEWPORT_CONFIG } from './MotionPrimitives';

function ExpertiseIcon({ type }: { type: ExpertiseItem['icon'] }) {
  const commonProps = {
    viewBox: '0 0 28 28',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className:
      'w-7 h-7 text-[#d4b065] transition-transform duration-500 ease-out group-hover:scale-110',
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
  return (
    <section id="expertise" className="bg-[#173a2d] text-white py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-16">
          <Reveal y={20}>
            <p className="text-[11px] font-bold tracking-[0.26em] text-[#d4b065] uppercase">
              WHAT WE DO
            </p>
            <h2 className="font-serif font-normal text-[40px] md:text-[50px] leading-[1.1] text-white mt-3">
              Our expertise
            </h2>
          </Reveal>

          <Reveal delay={0.12} y={18} className="max-w-[300px]">
            <p className="text-[14px] leading-[1.65] text-white/70">
              A considered portfolio across the full land and real estate
              lifecycle.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/12 divide-y sm:divide-y-0 lg:divide-x divide-white/12">
          {EXPERTISE_ITEMS.map((item, idx) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{
                duration: 0.75,
                delay: idx * 0.09,
                ease: EDITORIAL_EASE,
              }}
              className="relative p-8 md:p-9 min-h-[290px] flex flex-col justify-between group transition-colors duration-300 ease-out hover:bg-white/[0.06] sm:border-b sm:border-white/12 lg:border-b-0 sm:odd:border-r sm:odd:border-white/12 lg:odd:border-r-0"
            >
              {/* Subtle top gold indicator sweep on hover */}
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-[2px] bg-[#d4b065] scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"
              />

              <div className="flex items-start justify-between">
                <ExpertiseIcon type={item.icon} />
                <span className="text-[11px] font-medium tracking-[0.14em] text-white/45 transition-colors duration-300 group-hover:text-[#d4b065]/80">
                  {item.number}
                </span>
              </div>

              <div className="mt-12">
                <h3 className="font-serif font-normal text-[23px] leading-[1.25] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-[1.68] text-white/68">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
