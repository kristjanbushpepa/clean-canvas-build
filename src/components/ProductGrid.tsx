import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import headphonesImg from "@/assets/headphones.jpg";
import smartphoneImg from "@/assets/smartphone.jpg";
import earbudsImg from "@/assets/earbuds.jpg";
import laptopImg from "@/assets/laptop.jpg";
import smartwatchImg from "@/assets/smartwatch.jpg";
import keyboardImg from "@/assets/keyboard.jpg";

const products = [
  {
    id: "1",
    name: "Wireless Premium Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: headphonesImg,
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller"
  },
  {
    id: "2",
    name: "Latest Smartphone Pro",
    price: 1099.99,
    originalPrice: 1199.99,
    image: smartphoneImg,
    rating: 4.9,
    reviews: 892,
    badge: "New"
  },
  {
    id: "3",
    name: "True Wireless Earbuds",
    price: 179.99,
    originalPrice: 249.99,
    image: earbudsImg,
    rating: 4.7,
    reviews: 2156,
    badge: "Sale"
  },
  {
    id: "4",
    name: "MacBook Pro 16-inch",
    price: 2399.99,
    image: laptopImg,
    rating: 4.9,
    reviews: 543,
    badge: "Premium"
  },
  {
    id: "5",
    name: "Smart Fitness Watch",
    price: 349.99,
    originalPrice: 399.99,
    image: smartwatchImg,
    rating: 4.6,
    reviews: 1876,
  },
  {
    id: "6",
    name: "Mechanical Gaming Keyboard",
    price: 159.99,
    originalPrice: 199.99,
    image: keyboardImg,
    rating: 4.8,
    reviews: 734,
    badge: "Gaming"
  }
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium electronics and accessories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-in"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View All Products
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;