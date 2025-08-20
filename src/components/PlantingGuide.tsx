import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Choose Your Location",
    description: "Select a sunny spot with well-draining soil. Most fruit trees need 6-8 hours of direct sunlight daily.",
    tips: ["Check soil pH (6.0-7.0 ideal)", "Ensure good air circulation", "Consider mature tree size"]
  },
  {
    step: 2,
    title: "Prepare the Soil",
    description: "Dig a hole twice as wide as the root ball and slightly shallower than the pot depth.",
    tips: ["Add compost to enrich soil", "Remove rocks and weeds", "Test drainage with water"]
  },
  {
    step: 3,
    title: "Plant Your Tree",
    description: "Gently remove the tree from its container and place it in the hole at the same depth.",
    tips: ["Don't bury the root flare", "Backfill with native soil", "Water thoroughly after planting"]
  },
  {
    step: 4,
    title: "Care & Maintenance",
    description: "Water regularly, mulch around the base, and prune annually for best growth.",
    tips: ["Water weekly for first year", "Apply 2-3 inches of mulch", "Prune in late winter"]
  }
];

const PlantingGuide = () => {
  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Planting Guide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow these simple steps to give your fruit trees the best start for a lifetime of healthy growth.
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