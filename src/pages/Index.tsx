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
import TwoSectionLayout from "@/components/TwoSections";
import ImageSlider from "@/components/ui/img-slider";

const Index = () => {
  return (
    <div className="min-h-screen">     
      <TwoSectionLayout/>
      <TreeForestCounter/>
      <MissionVision/>
      <CostOfFruitTrees/>
      <ImageSlider 
        images={
          [
            "https://i.ibb.co/4ntnLpr7/20250725-103136.jpg",
            "https://i.ibb.co/vp8VvJn/20250725-103719.jpg",
            "https://i.ibb.co/4ntnLpr7/20250725-103136.jpg",
            "https://i.ibb.co/vp8VvJn/20250725-103719.jpg"
          ]
        }
      />
      <AboutUs/>
      <MeetTheTeam/>
      <CallToAction />
      
      {/* <Hero />
      <AboutUs/>
      <TreeForestCounter/>
      <ChangingNarrative/>
      <MissionVision/>
      <EnvironmentalBenefits />
      <CostOfFruitTrees/>
      <SharedJourney/> */}
   
      {/* <PopularTrees /> */}
      {/* <PlantingGuide /> */}
      {/* <MeetTheTeam/>
      <CallToAction /> */}
    </div>
  );
};

export default Index;
