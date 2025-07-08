import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Shield,
  Truck
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-background/80 mb-6">
              Get the latest tech news, exclusive deals, and product launches delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button variant="cta" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
              TechStore
            </h4>
            <p className="text-background/80 mb-4">
              Your trusted destination for premium electronics and cutting-edge technology. 
              We bring innovation to your doorstep.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold text-lg mb-6">Quick Links</h5>
            <ul className="space-y-3">
              {["About Us", "Contact", "Careers", "Blog", "Reviews", "Help Center"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h5 className="font-semibold text-lg mb-6">Categories</h5>
            <ul className="space-y-3">
              {["Smartphones", "Laptops", "Headphones", "Gaming", "Wearables", "Accessories"].map((category) => (
                <li key={category}>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-semibold text-lg mb-6">Get in Touch</h5>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-background/60" />
                <span className="text-background/80">123 Tech Street, Silicon Valley, CA 94000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-background/60" />
                <span className="text-background/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-background/60" />
                <span className="text-background/80">support@techstore.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-3 text-background/80">
              <Shield className="h-6 w-6" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-background/80">
              <Truck className="h-6 w-6" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-background/80">
              <CreditCard className="h-6 w-6" />
              <span>Easy Returns</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-background/20">
            <p className="text-background/60 text-sm">
              © 2024 TechStore. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;