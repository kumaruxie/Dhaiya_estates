import type { PolicyKey } from '../data/siteData';
import { BrandLogo } from './BrandLogo';
import { HairlineRule, Reveal } from './MotionPrimitives';

interface FooterProps {
  onOpenPolicy: (policy: PolicyKey) => void;
}

export function Footer({ onOpenPolicy }: FooterProps) {
  return (
    <footer role="contentinfo" className="bg-[#173a2d] text-white py-14 md:py-16">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <Reveal y={16}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <BrandLogo />
            <p className="text-[13px] leading-[1.6] text-white/68 max-w-[460px] md:text-right">
              Alwar · Sariska · Dhadikar · Khairthal · Tatarpur — Agricultural
              Land, Farmhouses, Plots &amp; Real Estate Development
            </p>
          </div>
        </Reveal>

        <HairlineRule className="h-[1px] w-full bg-white/12 my-9" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-[12px] text-white/58">
          <p>&copy; 2026 Dahiya Agro Estates Private Limited</p>

          <div className="flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-[#d4b065] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-[#d4b065] transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
            <button
              type="button"
              onClick={() => onOpenPolicy('diligence')}
              className="hover:text-[#d4b065] transition-colors cursor-pointer"
            >
              Due Diligence Policy
            </button>
          </div>

          <p>dahiyaestates.com · Building Landmarks. Creating Legacies.</p>
        </div>
      </div>
    </footer>
  );
}
