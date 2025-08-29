import { Button } from "@/components/ui/button";
import heroOrchard from "@/assets/hero-orchard.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroOrchard})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Plant Trees,
          <br />
          <span className="text-accent">Grow Tomorrow</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          An initiative by Revitalize Homes & Gardens to support women to nurture their families, one fruit tree at a time.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-foreground shadow-organic px-8 py-6 text-lg font-semibold">
            Start Planting Today
          </Button>
          <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;