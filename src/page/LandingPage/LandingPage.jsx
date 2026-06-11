import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";
import Spinner from "../../components/Spinner";

const fallback = <Spinner />;

const Carousel       = dynamic(() => import("./components/Carousel"),              { loading: () => fallback });
const ServiceSection = dynamic(() => import("./components/ServiceSeaction"),       { loading: () => fallback });
const AboutCard      = dynamic(() => import("@/components/AboutCard/AboutCard"),   { loading: () => fallback });
const BusBenefits    = dynamic(() => import("./components/BusBenefitsSection"),    { loading: () => fallback });
const TrackDivider   = dynamic(() => import("../../components/TrackDivider"),      { loading: () => fallback });
const FleetSection   = dynamic(() => import("./components/FleetSection"),          { loading: () => fallback });
import CTA from "@/components/CTA";
export default function LandingPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <Carousel />
      <AboutCard />
      <TrackDivider />
      <FleetSection />
      <BusBenefits />
      <CTA />
    </div>
  );
}