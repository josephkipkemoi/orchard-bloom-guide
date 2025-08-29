import Hero from "@/components/Hero";
import EnvironmentalBenefits from "@/components/EnvironmentalBenefits";
// import PopularTrees from "@/components/PopularTrees";
import PlantingGuide from "@/components/PlantingGuide";
import CallToAction from "@/components/CallToAction";
import AboutUs from "@/components/About";
import MissionVision from "@/components/MissionVision";
import TreeForestCounter from "@/components/ui/counter";
import ChangingNarrative from "@/components/ui/changing-narrative";
import MeetTheTeam from "@/components/ui/meet-the-team";
import CostOfFruitTrees from "@/components/CostOfFruitTrees";
import SharedJourney from "@/components/SharedJourney";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs/>
      <TreeForestCounter/>
      <ChangingNarrative/>
      <MissionVision/>
      <EnvironmentalBenefits />
      <CostOfFruitTrees/>
      <SharedJourney/>
      {/* <PopularTrees /> */}
      <PlantingGuide />
      <MeetTheTeam/>
      <CallToAction />
    </div>
  );
};

export default Index;
