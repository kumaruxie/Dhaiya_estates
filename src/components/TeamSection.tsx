import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { TEAM_MEMBERS } from '../data/siteData';
import {
  ArrowIcon,
  ClipRevealFrame,
  EDITORIAL_EASE,
  MaskedLine,
  Reveal,
  SPRING_SCROLL,
  VIEWPORT_CONFIG,
} from './MotionPrimitives';

export function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, SPRING_SCROLL);
  const shift0 = useTransform(smoothProgress, [0, 0.5, 1], [18, 0, -14]);
  const shift1 = useTransform(smoothProgress, [0, 0.5, 1], [34, 0, -24]);
  const shift2 = useTransform(smoothProgress, [0, 0.5, 1], [22, 0, -16]);
  const shifts = [shift0, shift1, shift2];

  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      ref={sectionRef}
      className="bg-[#ebe4d6] min-h-[100svh] flex flex-col justify-center py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1320px] w-full mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 md:mb-16">
          <div>
            <Reveal y={16}>
              <p className="section-label">LEADERSHIP</p>
            </Reveal>
            <h2
              id="team-heading"
              className="font-serif font-normal text-[40px] sm:text-[46px] md:text-[54px] leading-[1.08] text-[#173a2d] mt-3"
            >
              <MaskedLine delay={0.06}>People behind the vision.</MaskedLine>
            </h2>
          </div>

          <Reveal delay={0.14} y={18} className="max-w-[380px]">
            <p className="text-[14.5px] leading-[1.68] text-[#173a2d]/72">
              A focused team bringing together strategic vision, on-ground
              development understanding and trusted client relationships.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.role}
              style={{ y: shifts[idx] }}
              className="will-change-transform"
            >
              <motion.article
                initial={{ opacity: 0, y: 28, scale: 0.975 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={VIEWPORT_CONFIG}
                whileHover={{ y: -7 }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.1,
                  ease: EDITORIAL_EASE,
                }}
                className="group bg-[#f5f1e8] border border-[#173a2d]/10 transition-shadow duration-500 ease-out hover:shadow-[0_26px_55px_-22px_rgba(23,58,45,0.22)]"
              >
                <ClipRevealFrame delay={idx * 0.08}>
                  <div className="aspect-[4/4.2] overflow-hidden bg-[#d8d0c0]">
                    <img
                      src={member.image}
                      alt={member.alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-top grayscale transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:grayscale-0 group-hover:scale-[1.05]"
                    />
                  </div>
                </ClipRevealFrame>

                <div className="px-7 py-6 flex items-center justify-between bg-[#f5f1e8]">
                  <div>
                    <h3 className="font-serif font-normal text-[24px] leading-[1.2] text-[#173a2d]">
                      {member.role}
                    </h3>
                    <p className="mt-1.5 text-[10.5px] font-semibold tracking-[0.22em] uppercase text-[#7b6948]">
                      {member.subtitle}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="w-10 h-10 border border-[#173a2d]/20 flex items-center justify-center text-[#173a2d] transition-all duration-300 ease-out group-hover:bg-[#173a2d] group-hover:text-white group-hover:border-[#173a2d]"
                  >
                    <ArrowIcon className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.article>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.18} y={12}>
          <p className="mt-8 text-[12px] leading-[1.6] text-[#173a2d]/55">
            Representative portraits are used for website visualisation. Replace
            them with official team photographs and names before publication.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
