import Hero from '@/components/landing/Hero';
import PainPoints from '@/components/landing/PainPoints';
import Solution from '@/components/landing/Solution';
import Differentials from '@/components/landing/Differentials';
import Benefits from '@/components/landing/Benefits';
import Proof from '@/components/landing/Proof';
import Pricing from '@/components/landing/Pricing';
import FAQ from '@/components/landing/FAQ';
import FinalCTA from '@/components/landing/FinalCTA';

export default function SistemaImobiliaria() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <PainPoints />
      <Solution />
      <Differentials />
      <Benefits />
      <Proof />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
