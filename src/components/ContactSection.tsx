import { useEffect, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { INTEREST_OPTIONS } from '../data/siteData';
import {
  ArrowIcon,
  EDITORIAL_EASE,
  MaskedLine,
  Reveal,
} from './MotionPrimitives';

interface ContactSectionProps {
  selectedInterest?: string;
}

interface StoredEnquiry {
  name: string;
  phone: string;
  interest: string;
  submittedAt: string;
}

const STORAGE_KEY = 'dahiya_estates_enquiries';

export function ContactSection({ selectedInterest }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState(INTEREST_OPTIONS[0]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedInterest && INTEREST_OPTIONS.includes(selectedInterest)) {
      setInterest(selectedInterest);
      setSubmitted(false);
    }
  }, [selectedInterest]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    try {
      const existingRaw = localStorage.getItem(STORAGE_KEY);
      const existing: StoredEnquiry[] = existingRaw
        ? (JSON.parse(existingRaw) as StoredEnquiry[])
        : [];
      existing.push({
        name: name.trim(),
        phone: phone.trim(),
        interest,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    } catch {
      // Ignore storage errors in restricted browsing contexts
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="grid grid-cols-1 lg:grid-cols-2 min-h-[100svh] items-stretch"
    >
      {/* Left 50%: Warm Gold Panel */}
      <div className="bg-[#d4b065] text-[#173a2d] px-6 sm:px-12 lg:px-16 xl:px-24 py-24 md:py-28 flex flex-col justify-between">
        <div className="max-w-[460px] my-auto">
          <Reveal y={16}>
            <p className="text-[11px] font-bold tracking-[0.26em] uppercase text-[#173a2d]/75">
              START A CONVERSATION
            </p>
          </Reveal>

          <h2
            id="contact-heading"
            className="font-serif font-normal text-[44px] sm:text-[52px] md:text-[58px] leading-[1.06] text-[#173a2d] mt-4"
          >
            <MaskedLine delay={0.06}>Your next landmark</MaskedLine>
            <MaskedLine delay={0.16}>starts here.</MaskedLine>
          </h2>

          <Reveal delay={0.22} y={18}>
            <p className="mt-7 text-[15.5px] leading-[1.7] text-[#173a2d]/82">
              Whether you are looking for land, planning a farmhouse or
              exploring a development opportunity, we would be glad to
              understand your vision.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.24} y={14} className="mt-14 lg:mt-16">
          <a
            href="mailto:hello@dahiyaestates.com"
            className="inline-block text-[15px] font-semibold text-[#173a2d] border-b border-[#173a2d]/45 pb-1.5 transition-all duration-300 hover:border-[#173a2d] hover:translate-x-1"
          >
            hello@dahiyaestates.com
          </a>
        </Reveal>
      </div>

      {/* Right 50%: Cream Form Panel */}
      <div className="bg-[#f5f1e8] px-6 sm:px-12 lg:px-16 xl:px-24 py-24 md:py-28 flex flex-col justify-center">
        <div className="max-w-[500px] w-full mx-auto lg:mx-0">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="enquiry-form"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: EDITORIAL_EASE }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <h3 className="font-serif font-normal text-[30px] leading-[1.2] text-[#173a2d]">
                  Tell us what you&apos;re looking for
                </h3>

                <div className="space-y-7 pt-2">
                  <label className="block relative">
                    <span className="block text-[10.5px] font-bold tracking-[0.22em] uppercase text-[#173a2d]/75">
                      YOUR NAME
                    </span>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name"
                      className="peer mt-2.5 w-full bg-transparent border-b border-[#173a2d]/20 pb-3 text-[15px] text-[#173a2d] placeholder:text-[#173a2d]/40 transition-colors duration-200 focus:border-[#173a2d] focus:outline-none"
                    />
                    <span className="pointer-events-none absolute bottom-0 left-0 h-[1.5px] w-full bg-[#173a2d] scale-x-0 origin-left transition-transform duration-300 ease-out peer-focus:scale-x-100" />
                  </label>

                  <label className="block relative">
                    <span className="block text-[10.5px] font-bold tracking-[0.22em] uppercase text-[#173a2d]/75">
                      PHONE NUMBER
                    </span>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 00000 00000"
                      className="peer mt-2.5 w-full bg-transparent border-b border-[#173a2d]/20 pb-3 text-[15px] text-[#173a2d] placeholder:text-[#173a2d]/40 transition-colors duration-200 focus:border-[#173a2d] focus:outline-none"
                    />
                    <span className="pointer-events-none absolute bottom-0 left-0 h-[1.5px] w-full bg-[#173a2d] scale-x-0 origin-left transition-transform duration-300 ease-out peer-focus:scale-x-100" />
                  </label>

                  <label className="block relative">
                    <span className="block text-[10.5px] font-bold tracking-[0.22em] uppercase text-[#173a2d]/75">
                      I&apos;M INTERESTED IN
                    </span>
                    <div className="relative mt-2.5">
                      <select
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full appearance-none bg-transparent border-b border-[#173a2d]/20 pb-3 pr-8 text-[15px] font-medium text-[#173a2d] transition-colors duration-200 focus:border-[#173a2d] focus:outline-none cursor-pointer"
                      >
                        {INTEREST_OPTIONS.map((opt) => (
                          <option
                            key={opt}
                            value={opt}
                            className="bg-[#f5f1e8] text-[#173a2d]"
                          >
                            {opt}
                          </option>
                        ))}
                      </select>
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        aria-hidden="true"
                        className="w-3.5 h-3.5 text-[#173a2d] pointer-events-none absolute right-0 top-1.5"
                      >
                        <path d="M4 6l4 4 4-4" />
                      </svg>
                    </div>
                  </label>
                </div>

                <div className="pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ backgroundColor: '#1f4c3b', y: -1 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.25, ease: EDITORIAL_EASE }}
                    className="w-full bg-[#173a2d] text-white px-7 py-4.5 flex items-center justify-between text-[11.5px] font-semibold tracking-[0.24em] uppercase cursor-pointer group transition-shadow duration-300 hover:shadow-[0_14px_30px_-14px_rgba(23,58,45,0.45)]"
                  >
                    <span>SEND ENQUIRY</span>
                    <ArrowIcon className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                  </motion.button>

                  <p className="mt-4 text-[12px] text-[#173a2d]/55">
                    Prototype note: details are stored only in your browser, not
                    sent to a server.
                  </p>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="enquiry-confirmation"
                role="status"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.5, ease: EDITORIAL_EASE }}
                className="py-10 text-center"
              >
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.45, ease: EDITORIAL_EASE }}
                  className="w-12 h-12 rounded-full bg-[#173a2d] text-white flex items-center justify-center mx-auto"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="w-5 h-5"
                  >
                    <motion.path
                      d="M4.5 10.5l3.5 3.5L15.5 6.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.45, delay: 0.15 }}
                    />
                  </svg>
                </motion.div>

                <h3 className="font-serif font-normal text-[32px] leading-[1.2] text-[#173a2d] mt-6">
                  Thank you.
                </h3>

                <p className="mt-3 text-[14.5px] leading-[1.68] text-[#173a2d]/72 max-w-[380px] mx-auto">
                  Your enquiry has been saved on this device for this prototype.
                  You can also email us directly for a response.
                </p>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-8 inline-block text-[13.5px] font-semibold text-[#173a2d] border-b border-[#173a2d]/45 pb-1 hover:border-[#173a2d] transition-colors cursor-pointer"
                >
                  Send another enquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
