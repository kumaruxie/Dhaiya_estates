import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import { TEAM_MEMBERS, type TeamMember } from '../data/siteData';
import {
  ArrowIcon,
  ClipRevealFrame,
  EDITORIAL_EASE,
  HairlineRule,
  MaskedLine,
  Reveal,
  SPRING_SCROLL,
  useSmoothScroll,
  VIEWPORT_CONFIG,
} from './MotionPrimitives';

export function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);
  const { scrollToSection } = useSmoothScroll();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, SPRING_SCROLL);
  const shift0 = useTransform(smoothProgress, [0, 0.5, 1], [16, 0, -12]);
  const shift1 = useTransform(smoothProgress, [0, 0.5, 1], [30, 0, -20]);
  const shift2 = useTransform(smoothProgress, [0, 0.5, 1], [18, 0, -14]);
  const shifts = [shift0, shift1, shift2];

  useEffect(() => {
    if (!activeMember) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveMember(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeMember]);

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

          <Reveal delay={0.14} y={18} className="max-w-[390px]">
            <p className="text-[14.5px] leading-[1.68] text-[#173a2d]/72">
              Select any leader below to read their full story, on-ground
              experience across Alwar and Sariska, and area of stewardship.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
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
                <button
                  type="button"
                  onClick={() => setActiveMember(member)}
                  aria-label={`Read full story for ${member.role} — ${member.name}`}
                  className="w-full text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#d4b065]"
                >
                  <ClipRevealFrame delay={idx * 0.08}>
                    <div className="relative aspect-[4/4.2] overflow-hidden bg-[#d8d0c0]">
                      <img
                        src={member.image}
                        alt={member.alt}
                        loading="lazy"
                        className="w-full h-full object-cover object-top grayscale transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:grayscale-0 group-hover:scale-[1.05]"
                      />
                      <span className="absolute bottom-3 left-3 bg-[#173a2d]/88 text-white px-3 py-1 text-[9.5px] font-semibold tracking-[0.18em] uppercase opacity-0 translate-y-2 transition-all duration-400 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                        Read full story
                      </span>
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
                </button>
              </motion.article>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.18} y={12}>
          <p className="mt-8 text-[12px] leading-[1.6] text-[#173a2d]/55">
            Click any profile card to view their complete background and
            regional responsibilities.
          </p>
        </Reveal>
      </div>

      {/* Full Leadership Story View */}
      <AnimatePresence>
        {activeMember && (
          <motion.div
            key="team-story-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="leader-story-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveMember(null)}
            className="fixed inset-0 z-50 bg-[#173a2d]/82 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 overflow-y-auto"
            data-lenis-prevent
          >
            <motion.div
              key={activeMember.id}
              initial={{ opacity: 0, y: 28, scale: 0.975 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.45, ease: EDITORIAL_EASE }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#f5f1e8] text-[#173a2d] w-full max-w-[980px] border border-[#173a2d]/15 shadow-2xl overflow-hidden my-auto"
            >
              {/* Top navigation bar with Back button */}
              <div className="px-6 sm:px-9 py-4 border-b border-[#173a2d]/12 flex items-center justify-between bg-[#ebe4d6]">
                <button
                  type="button"
                  onClick={() => setActiveMember(null)}
                  className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.18em] uppercase text-[#173a2d] hover:text-[#7b6948] transition-colors cursor-pointer group"
                >
                  <ArrowIcon className="w-3.5 h-3.5 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
                  <span>Back to Leadership</span>
                </button>

                <button
                  type="button"
                  aria-label="Close leadership story"
                  onClick={() => setActiveMember(null)}
                  className="w-8 h-8 border border-[#173a2d]/20 flex items-center justify-center text-[#173a2d] hover:bg-[#173a2d] hover:text-white transition-colors cursor-pointer"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                  >
                    <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-5 bg-[#ebe4d6]">
                  <div className="aspect-[4/4.3] md:h-full overflow-hidden">
                    <img
                      src={activeMember.image}
                      alt={activeMember.alt}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="md:col-span-7 p-7 sm:p-10 md:p-11 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.24em] uppercase text-[#7b6948]">
                      {activeMember.role} · {activeMember.subtitle}
                    </p>
                    <h3
                      id="leader-story-title"
                      className="font-serif font-normal text-[34px] sm:text-[40px] leading-[1.12] text-[#173a2d] mt-2"
                    >
                      {activeMember.name}
                    </h3>
                    <p className="mt-2 text-[12px] font-semibold tracking-[0.14em] uppercase text-[#937b50]">
                      {activeMember.locationFocus}
                    </p>

                    <HairlineRule
                      immediate
                      className="h-[1px] w-full bg-[#173a2d]/14 my-6"
                    />

                    <div className="space-y-4 text-[14.5px] leading-[1.72] text-[#173a2d]/82">
                      {activeMember.story.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="mt-7 pt-6 border-t border-[#173a2d]/12">
                      <p className="text-[10.5px] font-bold tracking-[0.22em] uppercase text-[#7b6948] mb-3">
                        KEY FOCUS AREAS
                      </p>
                      <ul className="space-y-2">
                        {activeMember.focusAreas.map((area) => (
                          <li
                            key={area}
                            className="flex items-start gap-2.5 text-[13.5px] text-[#173a2d]"
                          >
                            <span className="text-[#d4b065] font-bold mt-0.5">
                              —
                            </span>
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#173a2d]/12 flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setActiveMember(null)}
                      className="text-[13px] font-semibold text-[#173a2d]/70 hover:text-[#173a2d] transition-colors cursor-pointer"
                    >
                      ← Back to all leaders
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveMember(null);
                        scrollToSection('#contact');
                      }}
                      className="inline-flex items-center gap-3 bg-[#173a2d] text-white px-5 py-3 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#224a3b] transition-colors cursor-pointer group"
                    >
                      <span>Schedule a conversation</span>
                      <ArrowIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
