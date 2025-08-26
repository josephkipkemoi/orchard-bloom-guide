import Hero from "@/components/Hero";
import EnvironmentalBenefits from "@/components/EnvironmentalBenefits";
import PopularTrees from "@/components/PopularTrees";
import PlantingGuide from "@/components/PlantingGuide";
import CallToAction from "@/components/CallToAction";
import AboutUs from "@/components/About";
import MissionVision from "@/components/MissionVision";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs/>
      <MissionVision/>
      <EnvironmentalBenefits />
      <PopularTrees />
      <PlantingGuide />
      <CallToAction />
    </div>
  );
};

export default Index;
