import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { CoreValue } from "@/components/sections/CoreValue";
import { ProductCapabilities } from "@/components/sections/ProductCapabilities";
import { SolutionCTA } from "@/components/sections/SolutionCTA";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <CoreValue />
      <ProductCapabilities />
      <SolutionCTA />
    </main>
  );
}
