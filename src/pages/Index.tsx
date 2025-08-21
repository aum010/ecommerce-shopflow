import { useState } from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProductSection from "@/components/sections/ProductSection";
import ShoppingCart from "@/components/cart/ShoppingCart";
import { useCart } from "@/hooks/useCart";
import { sampleProducts } from "@/data/products";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const {
    cartItems,
    isCartOpen,
    addToCart,
    updateQuantity,
    removeFromCart,
    getTotalItems,
    openCart,
    closeCart,
  } = useCart();

  const [wishlistedProducts, setWishlistedProducts] = useState<Set<string>>(new Set());

  const handleToggleWishlist = (productId: string) => {
    setWishlistedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
        toast({
          title: "Removed from wishlist",
          description: "Item has been removed from your wishlist",
        });
      } else {
        newSet.add(productId);
        toast({
          title: "Added to wishlist", 
          description: "Item has been added to your wishlist",
        });
      }
      return newSet;
    });
  };

  const handleCheckout = () => {
    toast({
      title: "Checkout",
      description: "Redirecting to checkout page...",
    });
    // In a real app, this would navigate to the checkout page
    console.log("Proceeding to checkout with items:", cartItems);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header 
        cartItemCount={getTotalItems()} 
        onCartOpen={openCart}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Products Section */}
      <ProductSection 
        products={sampleProducts}
        onAddToCart={addToCart}
        onToggleWishlist={handleToggleWishlist}
        wishlistedProducts={wishlistedProducts}
      />

      {/* Shopping Cart */}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={closeCart}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default Index;
