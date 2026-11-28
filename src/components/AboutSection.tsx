import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react';
import { ABOUT_DATA } from '../data/siteData';
import {
  ClipRevealFrame,
  HairlineRule,
  Reveal,
  SPRING_SCROLL,
} from './MotionPrimitives';

function ScrubWord({
  word,
  progress,
  range,
  muted = false,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  muted?: boolean;
}) {
  const opacity = useTransform(progress, range, [0.65, 1]);
  const y = useTransform(progress, range, [4, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className={`inline-block mr-[0.24em] will-change-transform ${
        muted ? 'text-[#937b50]' : 'text-[#173a2d]'
      }`}
    >
      {word}
    </motion.span>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.98', 'start 0.58'],
  });

  const smoothProgress = useSpring(scrollYProgress, SPRING_SCROLL);

  const leadWords = ABOUT_DATA.headingLead.trim().split(' ');
  const mutedWords = ABOUT_DATA.headingMuted.trim().split(' ');
  const totalWords = leadWords.length + mutedWords.length;

  const leftColY = useTransform(smoothProgress, [0, 1], [14, 0]);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      ref={sectionRef}
      className="bg-[#f5f1e8] min-h-[100svh] flex flex-col justify-center pt-28 pb-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1320px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Eyebrow on top + framed Alwar Aravalli visual beside the story */}
        <motion.div
          style={{ y: leftColY }}
          className="lg:col-span-5 will-change-transform"
        >
          <Reveal y={16}>
            <p className="section-label">{ABOUT_DATA.eyebrow}</p>
          </Reveal>
          <HairlineRule
            delay={0.12}
            className="w-20 h-[1px] bg-[#d4b065] mt-4 mb-7"
          />

          <ClipRevealFrame delay={0.14}>
            <div className="relative aspect-[4/3] overflow-hidden border border-[#173a2d]/12 bg-[#ebe4d6] group">
              <img
                src={ABOUT_DATA.image}
                alt={ABOUT_DATA.imageAlt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.06]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#173a2d]/80 to-transparent"
              />
              <span className="absolute bottom-3 left-3.5 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#f5f1e8]">
                {ABOUT_DATA.imageCaption}
              </span>
            </div>
          </ClipRevealFrame>
        </motion.div>

        {/* Right Column: Editorial Headline + Two-Column Perspective Copy */}
        <div className="lg:col-span-7">
          <h2
            id="about-heading"
            className="font-serif font-normal text-[34px] sm:text-[44px] md:text-[50px] leading-[1.13] tracking-[-0.005em] max-w-[700px]"
          >
            {leadWords.map((word, idx) => {
              const start = (idx / totalWords) * 0.7;
              const end = Math.min(1, ((idx + 1) / totalWords) * 0.7 + 0.15);
              return (
                <ScrubWord
                  key={`lead-${idx}`}
                  word={word}
                  progress={smoothProgress}
                  range={[start, end]}
                />
              );
            })}
            {mutedWords.map((word, idx) => {
              const globalIdx = leadWords.length + idx;
              const start = (globalIdx / totalWords) * 0.7;
              const end = Math.min(1, ((globalIdx + 1) / totalWords) * 0.7 + 0.15);
              return (
                <ScrubWord
                  key={`muted-${idx}`}
                  word={word}
                  progress={smoothProgress}
                  range={[start, end]}
                  muted
                />
              );
            })}
          </h2>

          <HairlineRule
            delay={0.18}
            className="h-[1px] w-full bg-[#173a2d]/15 my-9 md:my-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {ABOUT_DATA.paragraphs.map((text, idx) => (
              <Reveal key={idx} delay={0.14 + idx * 0.12} y={24}>
                <p className="text-[15.5px] leading-[1.75] text-[#173a2d]/78">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
