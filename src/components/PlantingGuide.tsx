import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Garlic",
    description: "Plant cloves upright, 2 inches deep, spaced 6 apart, water lightly, ensure sun.",
    tips: ["Plant in well-drained, loose soil; avoid waterlogging to prevent rot.", "Use large, healthy cloves for better bulb development.", "Harvest when lower leaves turn brown, then cure bulbs in shade."]
  },
  {
    step: 2,
    title: "Avocado",
    description: "Dig large hole, plant seedling shallow, water deeply, mulch base, provide sunlight, protect wind.",
    tips: ["Choose a sunny, wind-protected location with rich, well-drained soil.", "Water deeply but infrequently; allow soil to dry slightly between waterings.", "Prune lightly to shape tree and encourage strong branching."]
  },
  {
    step: 3,
    title: "Mango",
    description: "Plant seedling in sunny spot, water generously, mulch around, avoid waterlogging, stake if windy.",
    tips: ["Plant in full sun with space for large root and canopy growth.", "Water young trees regularly, but reduce frequency as tree matures.", "Prune after harvest to improve airflow and sunlight penetration."]
  },
  {
    step: 4,
    title: "Chillies",
    description: "Transplant seedlings carefully, space 18 inches, water regularly, ensure sun, support stems, harvest ripe.",
    tips: ["Start seeds in warm conditions or transplant healthy seedlings after frost danger.", "Water consistently but avoid soggy soil to prevent root disease.", "Pick chillies regularly to encourage continuous production."]
  }
];

const PlantingGuide = () => {
  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            High Yield Crops
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            33% os the contribution of agriculture to Kenya's GDP
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-20 w-px h-full bg-border z-0"></div>
              )}
              
              <Card className="relative z-10 shadow-soft bg-card/80 backdrop-blur-sm hover:shadow-organic transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                        {step.step}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Pro Tips:</h4>
                        {step.tips.map((tip, tipIndex) => (
                          <div key={tipIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantingGuide;