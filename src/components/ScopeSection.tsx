import { motion } from 'motion/react';
import { SCOPE_ITEMS } from '../data/siteData';
import {
  EDITORIAL_EASE,
  MaskedLine,
  Reveal,
  VIEWPORT_CONFIG,
} from './MotionPrimitives';

export function ScopeSection() {
  return (
    <section
      aria-labelledby="scope-heading"
      className="bg-[#f5f1e8] min-h-[100svh] flex flex-col justify-center py-24 md:py-32 border-b border-[#173a2d]/10"
    >
      <div className="max-w-[1320px] w-full mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          <div className="lg:col-span-4">
            <Reveal y={16}>
              <p className="section-label">OUR SCOPE</p>
            </Reveal>
            <h2
              id="scope-heading"
              className="font-serif font-normal text-[38px] sm:text-[46px] md:text-[52px] leading-[1.1] text-[#173a2d] mt-4"
            >
              <MaskedLine delay={0.06}>From raw land</MaskedLine>
              <MaskedLine delay={0.16}>to real value.</MaskedLine>
            </h2>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2">
            {SCOPE_ITEMS.map((item, idx) => {
              const borderClasses = [
                'border-b border-[#173a2d]/12 sm:border-r',
                'border-b border-[#173a2d]/12',
                'border-b sm:border-b-0 border-[#173a2d]/12 sm:border-r',
                '',
              ][idx];

              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_CONFIG}
                  transition={{
                    duration: 0.75,
                    delay: idx * 0.09,
                    ease: EDITORIAL_EASE,
                  }}
                  className={`py-9 sm:py-10 sm:px-8 first:sm:pl-0 nth-[3]:sm:pl-0 flex items-start gap-4 group transition-colors duration-300 hover:bg-[#173a2d]/[0.025] ${borderClasses}`}
                >
                  <svg
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    aria-hidden="true"
                    className="w-4 h-4 text-[#937b50] shrink-0 mt-1 transition-transform duration-300 ease-out group-hover:scale-115 group-hover:text-[#173a2d]"
                  >
                    <motion.path
                      d="M3.5 9.5l3.5 3.5L14.5 5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={VIEWPORT_CONFIG}
                      transition={{
                        duration: 0.7,
                        delay: 0.18 + idx * 0.08,
                        ease: EDITORIAL_EASE,
                      }}
                    />
                  </svg>
                  <p className="text-[15.5px] font-medium leading-[1.6] text-[#173a2d] transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                    {item}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.18} y={12}>
          <p className="mt-14 text-[12px] leading-[1.6] text-[#173a2d]/55">
            All activities are undertaken subject to applicable laws, statutory
            approvals and due diligence.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
