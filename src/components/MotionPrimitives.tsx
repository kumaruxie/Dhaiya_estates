import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from 'react';
import Lenis from 'lenis';
import { motion, type HTMLMotionProps } from 'motion/react';

export const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const;

export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.16,
} as const;

interface SmoothScrollContextValue {
  scrollToSection: (target: string) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  scrollToSection: (target: string) => {
    const el = document.querySelector(target);
    el?.scrollIntoView({ behavior: 'smooth' });
  },
});

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollToSection = useCallback((target: string) => {
    const el = document.querySelector(target);
    if (!el) return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(el as HTMLElement, {
        duration: 1.35,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ scrollToSection }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

interface RevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
}

export function Reveal({
  children,
  delay = 0,
  y = 26,
  duration = 0.8,
  className = '',
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_CONFIG}
      transition={{
        duration,
        delay,
        ease: EDITORIAL_EASE,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MaskedLine({
  children,
  delay = 0,
  duration = 0.9,
  immediate = false,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  immediate?: boolean;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: '108%', opacity: 0 }}
        {...(immediate
          ? { animate: { y: '0%', opacity: 1 } }
          : {
              whileInView: { y: '0%', opacity: 1 },
              viewport: VIEWPORT_CONFIG,
            })}
        transition={{
          duration,
          delay,
          ease: EDITORIAL_EASE,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function HairlineRule({
  className = '',
  delay = 0,
  immediate = false,
}: {
  className?: string;
  delay?: number;
  immediate?: boolean;
}) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      {...(immediate
        ? { animate: { scaleX: 1 } }
        : {
            whileInView: { scaleX: 1 },
            viewport: VIEWPORT_CONFIG,
          })}
      transition={{ duration: 0.95, delay, ease: EDITORIAL_EASE }}
      className={`origin-left ${className}`}
    />
  );
}

export function ArrowIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.35}
      aria-hidden="true"
      className={className}
    >
      <path d="M2.5 8h11" strokeLinecap="square" />
      <path d="M9.5 4l4 4-4 4" strokeLinecap="square" />
    </svg>
  );
}
