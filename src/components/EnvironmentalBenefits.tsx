import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Wind, Droplets, Heart } from "lucide-react";
import environmentalBenefits from "@/assets/environmental-benefits.jpg";

const benefits = [
  {
    icon: Leaf,
    title: "Biodiversity",
    description: "Biodiversity will be boosted by planting a variety of plant and fruit tree species."
  },
  {
    icon: Wind,
    title: "Ownership of Process",
    description: "The trees will be planted and maintained by the women, to allow equitable distribution of resources."
  },
  {
    icon: Droplets,
    title: "Community Engagement",
    description: "Tree planting is a communal process, allowing the women to train younger women who will take after them and thereby enhancing sustainability."
  },
  {
    icon: Heart,
    title: "Organic farming methods",
    description: "The farming and maintenance methods will be fully organic, with no dependence on chemicals."
  }
];

const EnvironmentalBenefits = () => {
  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
           Benefits of Edible Forests
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every fruit tree you plant contributes to a healthier planet. Here's how your trees make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-soft bg-card/50 backdrop-blur-sm hover:shadow-organic transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <img 
              src={environmentalBenefits} 
              alt="Environmental benefits of planting fruit trees" 
              className="w-full h-auto rounded-2xl shadow-organic"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-foreground p-6 rounded-xl shadow-soft">
              <div className="text-3xl font-bold">48lbs</div>
              <div className="text-sm">CO2 absorbed annually</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalBenefits;