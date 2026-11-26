import { motion } from 'motion/react';
import { SCOPE_ITEMS } from '../data/siteData';
import { EDITORIAL_EASE, Reveal, VIEWPORT_CONFIG } from './MotionPrimitives';

export function ScopeSection() {
  return (
    <section className="bg-[#f5f1e8] py-24 md:py-32 border-b border-[#173a2d]/10">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          <div className="lg:col-span-4">
            <Reveal y={20}>
              <p className="section-label">OUR SCOPE</p>
              <h2 className="font-serif font-normal text-[38px] sm:text-[44px] md:text-[48px] leading-[1.12] text-[#173a2d] mt-4">
                From raw land
                <br />
                to real value.
              </h2>
            </Reveal>
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
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_CONFIG}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.08,
                    ease: EDITORIAL_EASE,
                  }}
                  className={`py-8 sm:py-9 sm:px-8 first:sm:pl-0 nth-[3]:sm:pl-0 flex items-start gap-4 group ${borderClasses}`}
                >
                  <svg
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    aria-hidden="true"
                    className="w-4 h-4 text-[#937b50] shrink-0 mt-1"
                  >
                    <motion.path
                      d="M3.5 9.5l3.5 3.5L14.5 5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={VIEWPORT_CONFIG}
                      transition={{
                        duration: 0.65,
                        delay: 0.15 + idx * 0.08,
                        ease: EDITORIAL_EASE,
                      }}
                    />
                  </svg>
                  <p className="text-[15px] font-medium leading-[1.58] text-[#173a2d] transition-transform duration-300 ease-out group-hover:translate-x-1">
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
