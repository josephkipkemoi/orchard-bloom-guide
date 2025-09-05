import { Button } from "@/components/ui/button";
import { ArrowRight, TreePine } from "lucide-react";
import { Phone, Mail, Globe } from "lucide-react";
 
const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-hero mt-12">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <TreePine className="h-16 w-16 text-accent mx-auto mb-6" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Ready to Make a 
            <span className="text-accent block mt-2">Green Difference?</span>
          </h2>
          
          {/* <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of gardeners who are already growing their own food while helping the environment. 
            Start your fruit tree journey today and taste the difference tomorrow.
          </p> */}
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-foreground shadow-organic px-10 py-6 text-xl font-semibold group">
               Donate Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>          
          </div>          
          {/* <div className="mt-16  text-primary-foreground/80">
              <h2 >
                <span className="text-4xl text-accent block font-bold ">Gather & Grow</span>  <br/>               
              </h2>
              <p className="mt-2 text-2xl"> 
                An initiative by Revitalize Homes & Gardens to support women to nurture their families, one fruit tree at a time.
              </p>
          </div> */}
         <div className="mt-8">
              <h2 className="text-3xl font-bold text-primary-foreground">Contact Us</h2>
                 <div className="flex items-center space-x-3  mt-4 mb-4 text-primary-foreground">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                    <a href="tel:+254719889999" className="text-primary-foreground hover:text-green-700">
                      +254 719 889 999
                    </a>
                  </div>
                     <div className="flex items-center space-x-3  mt-4 mb-4">
            <Mail className="w-5 h-5 text-primary-foreground" />
            <a href="mailto:managingdirector@revitalize-hg.org" className="text-primary-foreground hover:text-blue-700">
              managingdirector@revitalize-hg.org
            </a>
          </div>

          {/* Website */}
          <div className="flex items-center space-x-3 mt-4 mb-4">
             <Globe className="w-5 h-5 text-primary-foreground" />
             <a
              href="https://www.revitalize-hg.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-purple-700"
            >
              Facebook
            </a>
          </div>
            <div className="flex items-center space-x-3 mt-4 mb-4">
            <Globe className="w-5 h-5 text-primary-foreground" />
            <a
              href="https://www.revitalize-hg.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-purple-700"
            >
              Linkedin
            </a>
          </div>
         </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;