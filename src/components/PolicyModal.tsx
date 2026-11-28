import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { POLICIES, type PolicyKey } from '../data/siteData';
import { EDITORIAL_EASE, HairlineRule } from './MotionPrimitives';

interface PolicyModalProps {
  activePolicy: PolicyKey | null;
  onClose: () => void;
}

export function PolicyModal({ activePolicy, onClose }: PolicyModalProps) {
  useEffect(() => {
    if (!activePolicy) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activePolicy, onClose]);

  const policy = activePolicy ? POLICIES[activePolicy] : null;

  return (
    <AnimatePresence>
      {policy && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="policy-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-[#173a2d]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          data-lenis-prevent
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: EDITORIAL_EASE }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#f5f1e8] text-[#173a2d] w-full max-w-[660px] border border-[#173a2d]/15 shadow-2xl p-7 sm:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10.5px] font-bold tracking-[0.24em] uppercase text-[#7b6948]">
                  {policy.subtitle}
                </p>
                <h3
                  id="policy-modal-title"
                  className="font-serif font-normal text-[30px] leading-[1.15] text-[#173a2d] mt-2"
                >
                  {policy.title}
                </h3>
              </div>

              <button
                type="button"
                aria-label="Close policy modal"
                onClick={onClose}
                className="w-8 h-8 border border-[#173a2d]/20 flex items-center justify-center text-[#173a2d] hover:bg-[#173a2d] hover:text-white transition-colors shrink-0 cursor-pointer"
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

            <HairlineRule
              immediate
              className="h-[1px] w-full bg-[#173a2d]/14 my-6"
            />

            <div className="space-y-6">
              {policy.sections.map((section) => (
                <div key={section.heading}>
                  <h4 className="text-[13px] font-bold tracking-[0.14em] uppercase text-[#173a2d]">
                    {section.heading}
                  </h4>
                  <p className="mt-2 text-[14.5px] leading-[1.7] text-[#173a2d]/78">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-5 border-t border-[#173a2d]/12 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="bg-[#173a2d] text-white px-5 py-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#224a3b] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
