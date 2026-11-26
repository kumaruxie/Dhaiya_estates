import { motion } from 'motion/react';
import { CORRIDOR_ITEMS } from '../data/siteData';
import {
  ArrowIcon,
  EDITORIAL_EASE,
  Reveal,
  useSmoothScroll,
  VIEWPORT_CONFIG,
} from './MotionPrimitives';

interface CorridorsSectionProps {
  onSelectCorridor: (interestOption: string) => void;
}

export function CorridorsSection({ onSelectCorridor }: CorridorsSectionProps) {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section id="corridors" className="bg-[#f5f1e8] py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 md:mb-16">
          <Reveal y={22}>
            <p className="section-label">WHERE WE ARE LOOKING</p>
            <h2 className="font-serif font-normal text-[40px] sm:text-[46px] md:text-[52px] leading-[1.1] mt-3">
              <span className="text-[#173a2d] block">Connected land.</span>
              <span className="text-[#937b50] block">Emerging corridors.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12} y={18} className="max-w-[420px]">
            <p className="text-[14px] leading-[1.7] text-[#173a2d]/72">
              We monitor high-potential land markets shaped by better access,
              urban expansion and changing lifestyles—always subject to title
              verification, zoning and applicable approvals.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {CORRIDOR_ITEMS.map((item, idx) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                ease: EDITORIAL_EASE,
              }}
              className="bg-white border border-[#173a2d]/10 flex flex-col group transition-shadow duration-500 ease-out hover:shadow-[0_20px_45px_-20px_rgba(23,58,45,0.16)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#ebe4d6]">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-[#f5f1e8] text-[#173a2d] px-3.5 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
                  {item.tag}
                </span>
              </div>

              <div className="p-7 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#7b6948]">
                    <span>{item.number}</span>
                    <span className="w-6 h-[1px] bg-[#7b6948]/50" />
                    <span>{item.region}</span>
                  </div>

                  <h3 className="font-serif font-normal text-[25px] leading-[1.22] text-[#173a2d] mt-3.5">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[13.5px] leading-[1.68] text-[#173a2d]/72">
                    {item.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectCorridor(item.interestOption);
                    scrollToSection('#contact');
                  }}
                  className="mt-8 inline-flex items-center gap-3 text-[13px] font-semibold text-[#173a2d] hover:text-[#7b6948] transition-colors duration-200 self-start group/link"
                >
                  <span>Discuss this corridor</span>
                  <ArrowIcon className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover/link:translate-x-1.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <Reveal delay={0.18} y={12}>
          <p className="mt-10 text-[12px] leading-[1.6] text-[#173a2d]/55">
            Corridor information is indicative and does not constitute a project
            launch or investment offer. Specific availability is confirmed only
            after direct enquiry and due diligence.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
