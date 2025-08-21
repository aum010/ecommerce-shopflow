import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Shopping hero background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="h-16 w-16 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center">
          <Sparkles className="h-8 w-8 text-accent" />
        </div>
      </div>
      <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="h-12 w-12 rounded-full bg-primary/20 backdrop-blur-sm" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '4s' }}>
        <div className="h-8 w-8 rounded-full bg-accent/30 backdrop-blur-sm" />
      </div>

      <div className="container relative z-10 text-center text-white">
        <div className="mx-auto max-w-4xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm">
            <Sparkles className="mr-2 h-4 w-4" />
            New Collections Available
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Discover Your
            <span className="block bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Perfect Style
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
            Explore our curated collection of premium products designed to elevate your lifestyle. 
            From fashion to tech, find everything you need in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-glow transition-smooth group px-8 py-6 text-lg"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg"
            >
              View Collections
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">1000+</div>
              <div className="text-white/70 text-sm uppercase tracking-wide">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">50K+</div>
              <div className="text-white/70 text-sm uppercase tracking-wide">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">24/7</div>
              <div className="text-white/70 text-sm uppercase tracking-wide">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;