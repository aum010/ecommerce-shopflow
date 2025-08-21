import { Product } from "@/components/product/ProductCard";

// Sample product data - in a real app, this would come from your database/API
export const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    image: "/api/placeholder/400/400",
    category: "Electronics",
    rating: 4.8,
    reviews: 156,
    badge: "Best Seller",
    isNew: false,
    inStock: true
  },
  {
    id: "2", 
    name: "Minimalist Leather Wallet",
    price: 89,
    image: "/api/placeholder/400/400",
    category: "Accessories",
    rating: 4.6,
    reviews: 89,
    isNew: true,
    inStock: true
  },
  {
    id: "3",
    name: "Smart Fitness Watch",
    price: 249,
    originalPrice: 329,
    image: "/api/placeholder/400/400", 
    category: "Electronics",
    rating: 4.7,
    reviews: 203,
    badge: "Featured",
    inStock: true
  },
  {
    id: "4",
    name: "Organic Cotton T-Shirt",
    price: 35,
    image: "/api/placeholder/400/400",
    category: "Clothing",
    rating: 4.4,
    reviews: 67,
    isNew: true,
    inStock: true
  },
  {
    id: "5",
    name: "Professional Camera Lens",
    price: 599,
    originalPrice: 799,
    image: "/api/placeholder/400/400",
    category: "Photography", 
    rating: 4.9,
    reviews: 92,
    badge: "Pro Choice",
    inStock: false
  },
  {
    id: "6",
    name: "Luxury Skincare Set",
    price: 199,
    image: "/api/placeholder/400/400",
    category: "Beauty",
    rating: 4.5,
    reviews: 134,
    isNew: true,
    inStock: true
  }
];

export const categories = [
  "All",
  "Electronics", 
  "Clothing",
  "Accessories",
  "Beauty",
  "Photography",
  "Sports"
];