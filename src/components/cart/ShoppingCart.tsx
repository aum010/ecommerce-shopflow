import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { 
  Minus, 
  Plus, 
  Trash2, 
  ShoppingBag,
  CreditCard,
  Truck
} from "lucide-react";
import { Product } from "@/components/product/ProductCard";

export interface CartItem extends Product {
  quantity: number;
}

interface ShoppingCartProps {
  isOpen?: boolean;
  onClose?: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

const ShoppingCart = ({
  isOpen = false,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}: ShoppingCartProps) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const EmptyCart = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
        <ShoppingBag className="w-10 h-10 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
      <p className="text-muted-foreground mb-6 max-w-sm">
        Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
      </p>
      <Button onClick={onClose} className="bg-gradient-primary">
        Continue Shopping
      </Button>
    </div>
  );

  const CartContent = () => (
    <div className="flex flex-col h-full">
      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto space-y-4">
        {cartItems.map((item) => (
          <Card key={item.id} className="border-border/50">
            <CardContent className="p-4">
              <div className="flex gap-3">
                {/* Product Image */}
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-secondary/50 flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm line-clamp-2 mb-1">{item.name}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{item.category}</p>
                  
                  {/* Price and Quantity */}
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary">${item.price}</span>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Remove Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-destructive"
                  onClick={() => onRemoveItem(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Order Summary */}
      <div className="border-t pt-4 space-y-4">
        <Card className="bg-gradient-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Subtotal ({totalItems} items)</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span className={shipping === 0 ? "text-success" : ""}>
                {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span className="text-primary">${total.toFixed(2)}</span>
            </div>
            
            {subtotal < 100 && (
              <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded">
                <Truck className="inline w-3 h-3 mr-1" />
                Add ${(100 - subtotal).toFixed(2)} more for free shipping!
              </div>
            )}
          </CardContent>
        </Card>

        {/* Checkout Button */}
        <Button 
          onClick={onCheckout}
          className="w-full bg-gradient-primary hover:bg-gradient-accent text-lg py-6 shadow-glow"
        >
          <CreditCard className="mr-2 h-5 w-5" />
          Proceed to Checkout
        </Button>
        
        <Button variant="outline" onClick={onClose} className="w-full">
          Continue Shopping
        </Button>
      </div>
    </div>
  );

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Shopping Cart
            {totalItems > 0 && (
              <Badge variant="secondary" className="ml-2">
                {totalItems}
              </Badge>
            )}
          </SheetTitle>
          <SheetDescription>
            {totalItems > 0 
              ? `You have ${totalItems} item${totalItems === 1 ? '' : 's'} in your cart`
              : "Your shopping cart"
            }
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 h-full pb-6">
          {cartItems.length === 0 ? <EmptyCart /> : <CartContent />}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;