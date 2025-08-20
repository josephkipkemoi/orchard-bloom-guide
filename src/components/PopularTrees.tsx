import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const trees = [
  {
    name: "Apple Trees",
    varieties: ["Honeycrisp", "Gala", "Granny Smith"],
    season: "Fall",
    difficulty: "Beginner",
    climate: "Temperate",
    benefits: ["High yield", "Cold hardy", "Long storage life"],
    color: "fruit-orange"
  },
  {
    name: "Cherry Trees",
    varieties: ["Sweet Cherry", "Sour Cherry", "Bing"],
    season: "Early Summer",
    difficulty: "Intermediate",
    climate: "Cool to Moderate",
    benefits: ["Beautiful blossoms", "Antioxidant rich", "Attracts birds"],
    color: "berry-purple"
  },
  {
    name: "Citrus Trees",
    varieties: ["Orange", "Lemon", "Lime"],
    season: "Winter",
    difficulty: "Intermediate",
    climate: "Warm/Mediterranean",
    benefits: ["Year-round harvest", "Vitamin C rich", "Fragrant blooms"],
    color: "fruit-orange"
  },
  {
    name: "Pear Trees",
    varieties: ["Bartlett", "Anjou", "Bosc"],
    season: "Late Summer",
    difficulty: "Beginner",
    climate: "Temperate",
    benefits: ["Disease resistant", "High fiber", "Long-lived trees"],
    color: "sage-green"
  }
];

const PopularTrees = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Popular Fruit Trees
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from these tried-and-tested varieties that thrive in different climates and skill levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trees.map((tree, index) => (
            <Card key={index} className="group hover:shadow-organic transition-all duration-300 cursor-pointer border-border/50 animate-grow" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-sm">
                    {tree.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    {tree.season}
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors">
                  {tree.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Popular Varieties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tree.varieties.map((variety, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {variety}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Climate:</h4>
                  <p className="text-sm text-muted-foreground">{tree.climate}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Benefits:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {tree.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTrees;