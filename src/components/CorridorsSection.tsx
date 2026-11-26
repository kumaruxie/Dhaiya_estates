import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { CORRIDOR_ITEMS } from '../data/siteData';
import {
  ArrowIcon,
  ClipRevealFrame,
  EDITORIAL_EASE,
  MaskedLine,
  Reveal,
  SPRING_SCROLL,
  useSmoothScroll,
  VIEWPORT_CONFIG,
} from './MotionPrimitives';

interface CorridorsSectionProps {
  onSelectCorridor: (interestOption: string) => void;
}

export function CorridorsSection({ onSelectCorridor }: CorridorsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollToSection } = useSmoothScroll();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, SPRING_SCROLL);
  const cardShiftLeft = useTransform(smoothProgress, [0, 0.5, 1], [18, 0, -14]);
  const cardShiftMid = useTransform(smoothProgress, [0, 0.5, 1], [36, 0, -24]);
  const cardShiftRight = useTransform(smoothProgress, [0, 0.5, 1], [22, 0, -16]);
  const cardShifts = [cardShiftLeft, cardShiftMid, cardShiftRight];

  return (
    <section
      id="corridors"
      aria-labelledby="corridors-heading"
      ref={sectionRef}
      className="bg-[#f5f1e8] min-h-[100svh] flex flex-col justify-center py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1320px] w-full mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 md:mb-16">
          <div>
            <Reveal y={16}>
              <p className="section-label">WHERE WE ARE LOOKING</p>
            </Reveal>
            <h2
              id="corridors-heading"
              className="font-serif font-normal text-[40px] sm:text-[46px] md:text-[54px] leading-[1.08] mt-3"
            >
              <MaskedLine delay={0.06} className="text-[#173a2d]">
                Connected land.
              </MaskedLine>
              <MaskedLine delay={0.16} className="text-[#937b50]">
                Emerging corridors.
              </MaskedLine>
            </h2>
          </div>

          <Reveal delay={0.14} y={18} className="max-w-[420px]">
            <p className="text-[14.5px] leading-[1.7] text-[#173a2d]/72">
              We monitor high-potential land markets shaped by better access,
              urban expansion and changing lifestyles—always subject to title
              verification, zoning and applicable approvals.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {CORRIDOR_ITEMS.map((item, idx) => (
            <motion.div
              key={item.number}
              style={{ y: cardShifts[idx] }}
              className="will-change-transform"
            >
              <motion.article
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={VIEWPORT_CONFIG}
                whileHover={{ y: -8 }}
                transition={{
                  duration: 0.85,
                  delay: idx * 0.1,
                  ease: EDITORIAL_EASE,
                }}
                className="relative h-full bg-white border border-[#173a2d]/10 flex flex-col group transition-shadow duration-500 ease-out hover:shadow-[0_28px_60px_-24px_rgba(23,58,45,0.22)]"
              >
                <ClipRevealFrame delay={idx * 0.08}>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#ebe4d6]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.08]"
                    />
                    <span className="absolute top-4 left-4 bg-[#f5f1e8] text-[#173a2d] px-3.5 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 ease-out group-hover:-translate-y-0.5 group-hover:bg-[#173a2d] group-hover:text-white">
                      {item.tag}
                    </span>
                  </div>
                </ClipRevealFrame>

                <div className="p-7 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#7b6948]">
                      <span>{item.number}</span>
                      <span className="w-6 h-[1px] bg-[#7b6948]/50 transition-all duration-500 group-hover:w-10 group-hover:bg-[#d4b065]" />
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
                    <ArrowIcon className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover/link:translate-x-2" />
                  </a>
                </div>

                {/* Bottom gold border trace on hover */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d4b065] scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
              </motion.article>
            </motion.div>
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
