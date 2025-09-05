import { Card, CardContent} from "@/components/ui/card";
import "./cost.css"

const CostOfFruitTrees = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-left mb-16">
          <div className="flex">
            <h2 style={{ backgroundColor: "rgb(26, 77, 26)", borderBottomLeftRadius: "28px", borderBottomRightRadius: "28px", color: "#fff" }} className="text-2xl md:text-3xl font-bold mb-6 p-6">
              Financial Investment
            </h2>
          </div>            
          <div className="cost-container shadow-lg">
            <h2 className="text-5xl md:text-5xl font-bold mb-6 text-center">
                USD $10,000/=
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              The estimated cost per shamba ( that is, one 1/2 acre plot owned by one woman )
            </p>
          </div>
          {/* <div className="flex mt-4" >
            <h2 style={{ backgroundColor: "#7FFFD4", borderBottomLeftRadius: "28px", borderBottomRightRadius: "28px" }} className="text-2xl md:text-3xl font-bold mb-6 p-6">
              Cost of  Fruit Trees, Cash Crops & Land Preparation
            </h2>
          </div>   */}
          {/* <div className="cost-container">
            <h2 className="text-4xl md:text-4xl font-bold mb-6 text-center">
                Kes. 875,000/=
            </h2>
            <p className="text-xl  max-w-2xl mx-auto">
              The estimated cost per shamba (that is, one plot owned by one woman plus VAT)
            </p>
          </div> */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-organic transition-all duration-300 cursor-pointer border-border/50 animate-grow">             
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground text-center mb-2 mt-5">
                    Purchase of seedlings (150 fruit trees & 50 medicinal trees)
                  </h3>                
                </div>
              </CardContent>              
            </Card>
            <Card className="group hover:shadow-organic transition-all duration-300 cursor-pointer border-border/50 animate-grow">             
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground text-center mb-2 mt-5">
                    Purchase of vegetables, herbs and nuts
                  </h3>                
                </div>
              </CardContent>              
            </Card>
            <Card className="group hover:shadow-organic transition-all duration-300 cursor-pointer border-border/50 animate-grow">             
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground text-center mb-2 mt-5">
                    Land preparation costs for 1 acre of land
                  </h3>                
                </div>
              </CardContent>              
            </Card>
            <Card className="group hover:shadow-organic transition-all duration-300 cursor-pointer border-border/50 animate-grow">             
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground text-center mb-2 mt-5">
                    Staff transport and accomodation
                  </h3>                
                </div>
              </CardContent>              
            </Card>
            <Card className="group hover:shadow-organic transition-all duration-300 cursor-pointer border-border/50 animate-grow">             
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground text-center mb-2 mt-5">
                    Photography and publicity costs
                  </h3>                
                </div>
              </CardContent>              
            </Card>
            <Card className="group hover:shadow-organic transition-all duration-300 cursor-pointer border-border/50 animate-grow">             
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground text-center mb-2 mt-5">
                    Training the women on tree mantainance - 6 visits a year
                  </h3>                
                </div>
              </CardContent>              
            </Card>
             
        </div>
        {/* <div className="flex mt-8">
            <h2 style={{ backgroundColor: "#7FFFD4", borderBottomLeftRadius: "28px", borderBottomRightRadius: "28px" }} className="text-2xl md:text-3xl font-bold mb-6 p-6">
              Cost of Water Tank & Rain Saucer
            </h2>
          </div>  */}
          {/* <div className="cost-container">
            <h2 className="text-4xl md:text-4xl font-bold mb-6 text-center">
                Kes. 225,000/=
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              The estimated cost per shamba (that is, one plot owned by one woman plus VAT)
            </p>
          </div>       */}
        </div>     
      </div>
    </section>
  );
};

export default CostOfFruitTrees;