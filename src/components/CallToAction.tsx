import { Button } from "@/components/ui/button";
import { ArrowRight, TreePine } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <TreePine className="h-16 w-16 text-accent mx-auto mb-6" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Ready to Make a 
            <span className="text-accent block mt-2">Green Difference?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of gardeners who are already growing their own food while helping the environment. 
            Start your fruit tree journey today and taste the difference tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-foreground shadow-organic px-10 py-6 text-xl font-semibold group">
              Get Your Tree Kit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="text-primary-foreground/80 text-lg">
              <span className="font-semibold text-accent">Free shipping</span> on orders over $50
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-primary-foreground/80">
            <div>
              <div className="text-3xl font-bold text-accent">10K+</div>
              <div className="text-sm">Trees Planted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">95%</div>
              <div className="text-sm">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">480K</div>
              <div className="text-sm">lbs CO2 Absorbed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">2,400+</div>
              <div className="text-sm">Happy Gardeners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;