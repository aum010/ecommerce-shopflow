import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Eye,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
  isNew?: boolean;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (productId: string) => void;
  isWishlisted?: boolean;
  className?: string;
}

const ProductCard = ({ 
  product, 
  onAddToCart, 
  onToggleWishlist,
  isWishlisted = false,
  className 
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <Card 
      className={cn(
        "group overflow-hidden border-0 shadow-md hover:shadow-primary transition-smooth product-hover bg-gradient-card",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-secondary/50">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-success text-success-foreground">New</Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-destructive text-destructive-foreground">
              -{discount}%
            </Badge>
          )}
          {product.badge && (
            <Badge variant="secondary">{product.badge}</Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className={cn(
          "absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <Button
            size="icon"
            variant="outline"
            className="h-9 w-9 bg-background/90 backdrop-blur-sm hover:bg-background border-border/50"
            onClick={() => onToggleWishlist?.(product.id)}
          >
            <Heart 
              className={cn(
                "h-4 w-4 transition-colors",
                isWishlisted ? "fill-destructive text-destructive" : ""
              )} 
            />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="h-9 w-9 bg-background/90 backdrop-blur-sm hover:bg-background border-border/50"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* Add to Cart Button - Overlay */}
        {isHovered && (
          <div className="absolute inset-x-3 bottom-3">
            <Button 
              className="w-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg transition-smooth"
              onClick={() => onAddToCart?.(product)}
              disabled={!product.inStock}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
          </div>
        )}
      </div>

      <CardContent className="p-4 space-y-3">
        {/* Category */}
        <div className="text-xs text-muted-foreground uppercase tracking-wide">
          {product.category}
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-3 w-3",
                  i < Math.floor(product.rating)
                    ? "fill-accent text-accent"
                    : "text-muted-foreground"
                )}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="space-x-2">
            <span className="text-xl font-bold text-primary">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          
          {/* Mobile Add to Cart */}
          <Button
            size="icon"
            variant="outline"
            className="md:hidden h-8 w-8"
            onClick={() => onAddToCart?.(product)}
            disabled={!product.inStock}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;