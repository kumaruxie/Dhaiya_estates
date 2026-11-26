import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { SmoothScrollProvider } from './components/MotionPrimitives';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { CorridorsSection } from './components/CorridorsSection';
import { WhyDahiyaSection } from './components/WhyDahiyaSection';
import { HeritageSection } from './components/HeritageSection';
import { ScopeSection } from './components/ScopeSection';
import { TeamSection } from './components/TeamSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [selectedInterest, setSelectedInterest] = useState<string | undefined>(
    undefined,
  );

  return (
    <MotionConfig reducedMotion="user">
      <SmoothScrollProvider>
        <div className="min-h-screen flex flex-col bg-[#f5f1e8] text-[#173a2d]">
          <Header />
          <main className="flex-1">
            <HeroSection />
            <AboutSection />
            <ExpertiseSection />
            <CorridorsSection onSelectCorridor={setSelectedInterest} />
            <WhyDahiyaSection />
            <HeritageSection />
            <ScopeSection />
            <TeamSection />
            <ContactSection selectedInterest={selectedInterest} />
          </main>
          <Footer />
        </div>
      </SmoothScrollProvider>
    </MotionConfig>
  );
}

export default App;
