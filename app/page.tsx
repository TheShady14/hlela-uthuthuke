import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { SlideSection, SlideStack } from "@/components/motion/slide-section";
import { Approach } from "@/components/sections/approach";
import { Difference } from "@/components/sections/difference";
import { Hero } from "@/components/sections/hero";
import { Industries } from "@/components/sections/industries";
import { Services } from "@/components/sections/services";
import { Team } from "@/components/sections/team";
import { Values } from "@/components/sections/values";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { WhyHlela } from "@/components/sections/why-hlela";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <SlideStack>
          <SlideSection index={0} first>
            <Hero />
          </SlideSection>

          <SlideSection index={1} anchorId="who-we-are">
            <WhoWeAre />
          </SlideSection>

          <SlideSection index={2}>
            <Values />
          </SlideSection>

          <SlideSection index={3} anchorId="approach">
            <Approach />
          </SlideSection>

          <SlideSection index={4} anchorId="services">
            <Services />
          </SlideSection>

          {/* Use whatever ids your NAV_LINKS point to for these three */}
          <SlideSection index={5} anchorId="industries">
            <Industries />
          </SlideSection>

          <SlideSection index={6} anchorId="why-hlela">
            <WhyHlela />
          </SlideSection>

          <SlideSection index={7} anchorId="difference">
            <Difference />
          </SlideSection>

          <SlideSection index={8} anchorId="team">
            <Team />
          </SlideSection>
        </SlideStack>
      </main>
      <Footer />
    </>
  );
}
