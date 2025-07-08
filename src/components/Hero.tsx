import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-white py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/20"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-white/15"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-white/10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-6 mb-8 text-white/80">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
              <span className="text-sm">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="text-sm">50K+ Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="text-sm">Secure Shopping</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Discover the Latest in
            <span className="block bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
              Tech Innovation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-slide-up">
            Premium electronics, cutting-edge gadgets, and accessories 
            from the world's leading brands. Experience technology like never before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button variant="cta" size="xl" className="group">
              Shop Now
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              View Categories
            </Button>
          </div>

          {/* Featured stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-white/80">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Free</div>
              <div className="text-white/80">Worldwide Shipping</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;