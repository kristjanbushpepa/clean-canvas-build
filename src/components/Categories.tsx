import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Headphones, 
  Monitor, 
  Watch, 
  Gamepad2, 
  Camera,
  ArrowRight
} from "lucide-react";

const categories = [
  {
    id: "smartphones",
    name: "Smartphones",
    icon: Smartphone,
    count: "250+ products",
    color: "text-blue-600"
  },
  {
    id: "audio",
    name: "Audio & Headphones",
    icon: Headphones,
    count: "180+ products",
    color: "text-purple-600"
  },
  {
    id: "computers",
    name: "Computers & Laptops",
    icon: Monitor,
    count: "120+ products",
    color: "text-green-600"
  },
  {
    id: "wearables",
    name: "Wearables",
    icon: Watch,
    count: "90+ products",
    color: "text-orange-600"
  },
  {
    id: "gaming",
    name: "Gaming",
    icon: Gamepad2,
    count: "200+ products",
    color: "text-red-600"
  },
  {
    id: "cameras",
    name: "Cameras & Photo",
    icon: Camera,
    count: "75+ products",
    color: "text-indigo-600"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you're looking for in our comprehensive product categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <Card 
                key={category.id} 
                className="group cursor-pointer hover:shadow-hover transition-all duration-300 bg-gradient-card border-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 rounded-full bg-background shadow-card group-hover:shadow-hover transition-shadow">
                      <IconComponent className={`h-8 w-8 ${category.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.count}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Browse <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;