import { Card, CardContent} from "@/components/ui/card";
import "./cost.css"

const CostOfFruitTrees = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">            
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
             Financial Investment
          </h2>
          <div className="cost-container">
            <h2 className="text-4xl md:text-4xl font-bold mb-6">
                Kes. 1,100,000/=
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              The estimated cost per shamba (that is, one plot owned by one woman plus VAT)
            </p>
          </div>
          <hr className="horizontal"/>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
             Cost of  Fruit trees, Cash crops & Land preparation
          </h2>
          <div className="cost-container">
            <h2 className="text-4xl md:text-4xl font-bold mb-6">
                Kes. 875,000/=
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              The estimated cost per shamba (that is, one plot owned by one woman plus VAT)
            </p>


          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-organic transition-all duration-300 cursor-pointer border-border/50 animate-grow">             
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2 mt-5">
                    Purchase of seedlings (150 fruit trees & 50 medicinal trees)
                  </h3>                
                </div>
              </CardContent>              
            </Card>
            <Card className="group hover:shadow-organic transition-all duration-300 cursor-pointer border-border/50 animate-grow">             
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2 mt-5">
                    Purchase of vegetables, herbs and nuts
                  </h3>                
                </div>
              </CardContent>              
            </Card>
            <Card className="group hover:shadow-organic transition-all duration-300 cursor-pointer border-border/50 animate-grow">             
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2 mt-5">
                    Land preparation costs for 1 acre of land
                  </h3>                
                </div>
              </CardContent>              
            </Card>
            <Card className="group hover:shadow-organic transition-all duration-300 cursor-pointer border-border/50 animate-grow">             
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2 mt-5">
                    Staff transport and accomodation
                  </h3>                
                </div>
              </CardContent>              
            </Card>
            <Card className="group hover:shadow-organic transition-all duration-300 cursor-pointer border-border/50 animate-grow">             
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2 mt-5">
                    Photography and publicity costs
                  </h3>                
                </div>
              </CardContent>              
            </Card>
            <Card className="group hover:shadow-organic transition-all duration-300 cursor-pointer border-border/50 animate-grow">             
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2 mt-5">
                    Training the women on tree mantainance - 6 visits a year
                  </h3>                
                </div>
              </CardContent>              
            </Card>
             
        </div>
          <hr className="horizontal"/>  
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
             Cost of Water Tank & Rain Saucer
          </h2>
          <div className="cost-container">
            <h2 className="text-4xl md:text-4xl font-bold mb-6">
                Kes. 225,000/=
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              The estimated cost per shamba (that is, one plot owned by one woman plus VAT)
            </p>
          </div>      
        </div>
 
             <hr className="horizontal"/>  
     
      </div>
     
    </section>
  );
};

export default CostOfFruitTrees;