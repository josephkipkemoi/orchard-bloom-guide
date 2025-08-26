import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
           About Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Gather & Grow is an Edible Forest planting initiative birthed in October 2024, 
            with the objective of supporting women in vulnerable communities and circumstances, 
            to generate income through smart agricultural practices.
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Through various strategic partnerships, we aim to alleviate poverty and create economic 
            alternatives by providing sustainable business opportunities and access to 
            markets for these women to sell their produce.
          </p>
        </div>
 
      </div>
    </section>
  );
};

export default AboutUs;