import { motion } from 'motion/react';
import { TEAM_MEMBERS } from '../data/siteData';
import {
  ArrowIcon,
  EDITORIAL_EASE,
  Reveal,
  VIEWPORT_CONFIG,
} from './MotionPrimitives';

export function TeamSection() {
  return (
    <section id="team" className="bg-[#ebe4d6] py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 md:mb-16">
          <Reveal y={20}>
            <p className="section-label">LEADERSHIP</p>
            <h2 className="font-serif font-normal text-[40px] sm:text-[46px] md:text-[52px] leading-[1.1] text-[#173a2d] mt-3">
              People behind the vision.
            </h2>
          </Reveal>

          <Reveal delay={0.12} y={18} className="max-w-[380px]">
            <p className="text-[14px] leading-[1.68] text-[#173a2d]/72">
              A focused team bringing together strategic vision, on-ground
              development understanding and trusted client relationships.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.article
              key={member.role}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                ease: EDITORIAL_EASE,
              }}
              className="group bg-[#f5f1e8] border border-[#173a2d]/10 transition-shadow duration-500 ease-out hover:shadow-[0_20px_45px_-22px_rgba(23,58,45,0.2)]"
            >
              <div className="aspect-[4/4.2] overflow-hidden bg-[#d8d0c0]">
                <img
                  src={member.image}
                  alt={member.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-top grayscale transition-all duration-700 ease-out will-change-transform group-hover:grayscale-0 group-hover:scale-[1.03]"
                />
              </div>

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
                  <ArrowIcon className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.article>
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
