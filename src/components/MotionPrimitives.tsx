import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from 'react';
import Lenis from 'lenis';
import {
  motion,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from 'motion/react';

export const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const;

export const SPRING_SCROLL = {
  stiffness: 90,
  damping: 26,
  mass: 0.85,
  restDelta: 0.0005,
} as const;

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
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.92,
      touchMultiplier: 1.4,
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
        duration: 1.4,
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

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#d4b065] origin-left z-50 pointer-events-none"
    />
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
  y = 28,
  duration = 0.85,
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
  duration = 0.95,
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
        className="block will-change-transform"
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
      transition={{ duration: 1, delay, ease: EDITORIAL_EASE }}
      className={`origin-left ${className}`}
    />
  );
}

export function ClipRevealFrame({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ clipPath: 'inset(10% 0% 0% 0%)', opacity: 0 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
      viewport={VIEWPORT_CONFIG}
      transition={{ duration: 1.05, delay, ease: EDITORIAL_EASE }}
      className={className}
    >
      {children}
    </motion.div>
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
