import { ABOUT_DATA } from '../data/siteData';
import { HairlineRule, Reveal } from './MotionPrimitives';

export function AboutSection() {
  return (
    <section id="about" className="bg-[#f5f1e8] py-24 md:py-36">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div className="lg:col-span-4">
          <Reveal y={16}>
            <p className="section-label">{ABOUT_DATA.eyebrow}</p>
          </Reveal>
          <HairlineRule
            delay={0.15}
            className="w-20 h-[1px] bg-[#d4b065] mt-5"
          />
        </div>

        <div className="lg:col-span-8">
          <Reveal delay={0.08} y={24}>
            <h2 className="font-serif font-normal text-[34px] sm:text-[42px] md:text-[48px] leading-[1.14] tracking-[-0.005em] text-[#173a2d] max-w-[700px]">
              {ABOUT_DATA.headingLead}
              <span className="text-[#937b50]">{ABOUT_DATA.headingMuted}</span>
            </h2>
          </Reveal>

          <HairlineRule
            delay={0.2}
            className="h-[1px] w-full bg-[#173a2d]/15 my-9 md:my-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            {ABOUT_DATA.paragraphs.map((text, idx) => (
              <Reveal key={idx} delay={0.18 + idx * 0.1} y={20}>
                <p className="text-[15px] leading-[1.72] text-[#173a2d]/78">
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
