import { Benefits } from "@/components/sections/benefits";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { SocialProof } from "@/components/sections/social-proof";
import { Solution } from "@/components/sections/solution";
import { UrgencyCta } from "@/components/sections/urgency-cta";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <SocialProof />
      <UrgencyCta />
    </main>
  );
}