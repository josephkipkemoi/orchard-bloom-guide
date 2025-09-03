import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";



const MissionVision = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Mission & Vision
          </h2>
        
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card className="group hover:shadow-organic transition-all duration-300 cursor-pointer border-border/50 animate-grow">
              <CardHeader className="pb-4">
            
              <CardTitle className="text-3xl text-primary group-hover:text-accent transition-colors">
                   <h2>Mission</h2>
              </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-1xl">
                  To foster strategic partnerships to provide green agricultural solutions to women in underprivileged communities, to drive impactful economic, environmental and social change.
                </p>
              </CardContent>
            </Card>
           <Card className="group hover:shadow-organic transition-all duration-300 cursor-pointer border-border/50 animate-grow">
              <CardHeader className="pb-4">
            
              <CardTitle className="text-3xl text-primary group-hover:text-accent transition-colors">
                   <h2>Vision</h2>
              </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-1xl">
                  To support women in vulnerable economic and social situations, to sustainably generate income for themselves and their families.
                </p>
              </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;