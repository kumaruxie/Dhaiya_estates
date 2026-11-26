import { motion } from 'motion/react';
import { useSmoothScroll } from './MotionPrimitives';

interface BrandLogoProps {
  className?: string;
}

export function BrandLogo({ className = '' }: BrandLogoProps) {
  const { scrollToSection } = useSmoothScroll();

  return (
    <motion.a
      href="#home"
      aria-label="Dahiya Estates, home"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection('#home');
      }}
      whileHover={{ opacity: 0.92 }}
      transition={{ duration: 0.2 }}
      className={`inline-flex items-center gap-3.5 group select-none ${className}`}
    >
      <span className="w-10 h-10 border border-white/45 flex items-center justify-center transition-colors duration-300 group-hover:border-[#d4b065]">
        <span className="font-sans font-bold text-[17px] leading-none text-white">
          D
        </span>
      </span>
      <span className="flex flex-col">
        <strong className="font-serif font-normal text-[17px] tracking-[0.06em] text-white leading-none">
          DAHIYA
        </strong>
        <span className="font-sans text-[9px] font-medium tracking-[0.34em] text-white/75 leading-none mt-1.5">
          ESTATES
        </span>
      </span>
    </motion.a>
  );
}
