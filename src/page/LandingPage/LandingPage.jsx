import HeroSection from "./components/HeroSection";
import Carousel from "./components/Carousel";
import FleetSection from "./components/FleetSection";
import ServiceSeaction from "./components/ServiceSeaction";
import TrackDivider from "./components/TrackDivider";
import { AboutCard, Footer } from "@/components";
import WaveDivider from "./components/WaveDivider";
import BusBenefitsSection from "./BusBenefitsSection";
export default function LandingPage() {
  return (
    <>
      <HeroSection />
           <Carousel />
      <ServiceSeaction />
      <AboutCard />
      <BusBenefitsSection />
      <TrackDivider />  
      <FleetSection />
          </>
  );
}
