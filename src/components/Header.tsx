import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { NAV_ITEMS } from '../data/siteData';
import { BrandLogo } from './BrandLogo';
import { ArrowIcon, EDITORIAL_EASE, useSmoothScroll } from './MotionPrimitives';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <motion.header
      role="banner"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EDITORIAL_EASE }}
      className="absolute top-0 inset-x-0 z-30 border-b border-white/15"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <BrandLogo />

        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-10"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="relative py-1 text-[13.5px] font-medium text-white/85 hover:text-white transition-colors duration-200 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#d4b065] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#contact');
          }}
          className="hidden md:inline-flex items-center gap-3 border border-white/40 px-5 py-2.5 text-[13.5px] font-medium text-white transition-all duration-300 ease-out hover:bg-white hover:text-[#173a2d] hover:border-white group"
        >
          <span>Enquire now</span>
          <ArrowIcon className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </a>

        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden w-10 h-10 border border-white/40 flex items-center justify-center text-white transition-colors duration-200 hover:border-white/75"
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-4 h-4"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path d="M4.5 4.5l11 11M15.5 4.5l-11 11" strokeLinecap="square" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="square" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.38, ease: EDITORIAL_EASE }}
            className="md:hidden overflow-hidden bg-[#173a2d] border-t border-white/15"
          >
            <nav aria-label="Mobile navigation" className="px-6 py-2">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: idx * 0.045,
                    ease: EDITORIAL_EASE,
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block py-4 text-[15px] font-medium text-white/90 hover:text-[#d4b065] border-b border-white/10 last:border-b-0 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
