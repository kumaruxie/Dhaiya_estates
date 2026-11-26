import { BrandLogo } from './BrandLogo';
import { HairlineRule, Reveal } from './MotionPrimitives';

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-[#173a2d] text-white py-14 md:py-16">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <Reveal y={16}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <BrandLogo />
            <p className="text-[13px] leading-[1.6] text-white/68 max-w-[420px] md:text-right">
              Farms · Agricultural Land · Farmhouses · Plots · Real Estate
              Development
            </p>
          </div>
        </Reveal>

        <HairlineRule className="h-[1px] w-full bg-white/12 my-9" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[12px] text-white/55">
          <p>&copy; 2026 Dahiya Agro Estates Private Limited</p>
          <p>dahiyaestates.com · Building Landmarks. Creating Legacies.</p>
        </div>
      </div>
    </footer>
  );
}
