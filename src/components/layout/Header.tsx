import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  Heart,
  Store
} from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  cartItemCount?: number;
  onCartOpen?: () => void;
}

const Header = ({ cartItemCount = 0, onCartOpen }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-fade-in">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 animate-slide-up">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary hover-glow transition-smooth">
            <Store className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            ShopVibe
          </span>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-6 animate-slide-up animate-stagger-1">
          <Button variant="ghost" className="text-sm font-medium hover-lift transition-smooth">
            Home
          </Button>
          <Button variant="ghost" className="text-sm font-medium hover-lift transition-smooth">
            Categories
          </Button>
          <Button variant="ghost" className="text-sm font-medium hover-lift transition-smooth">
            Deals
          </Button>
          <Button variant="ghost" className="text-sm font-medium hover-lift transition-smooth">
            About
          </Button>
        </nav>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search products..."
              className="w-full rounded-lg border bg-background pl-10 pr-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2 animate-slide-up animate-stagger-2">
          {/* Wishlist */}
          <Button variant="ghost" size="icon" className="relative hover-lift transition-smooth">
            <Heart className="h-5 w-5" />
          </Button>

          {/* Cart */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative hover-lift transition-smooth hover-glow"
            onClick={onCartOpen}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs animate-bounce-in"
              >
                {cartItemCount}
              </Badge>
            )}
          </Button>

          {/* User Account */}
          <Button variant="ghost" size="icon" className="hover-lift transition-smooth">
            <User className="h-5 w-5" />
          </Button>

          {/* Mobile Menu */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden hover-lift transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background animate-slide-up">
          <div className="container py-4 space-y-2">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search products..."
                className="w-full rounded-lg border bg-background pl-10 pr-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
              />
            </div>
            <Button variant="ghost" className="w-full justify-start hover-lift transition-smooth">
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start hover-lift transition-smooth">
              Categories
            </Button>
            <Button variant="ghost" className="w-full justify-start hover-lift transition-smooth">
              Deals
            </Button>
            <Button variant="ghost" className="w-full justify-start hover-lift transition-smooth">
              About
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;