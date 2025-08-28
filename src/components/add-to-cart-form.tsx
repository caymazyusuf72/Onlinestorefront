"use client";

import { useState } from 'react';
import { useCart } from '@/context/cart-context';
import type { Product } from '@/lib/types';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AddToCartFormProps {
  product: Product;
}

export default function AddToCartForm({ product }: AddToCartFormProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (quantity > 0 && quantity <= product.stock) {
      addToCart(product, quantity);
    } else if (quantity > product.stock) {
        toast({
            title: "Not enough stock",
            description: `Only ${product.stock} items available.`,
            variant: "destructive"
        })
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
         <Button
            variant="outline"
            size="icon"
            className="h-11 w-11"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            disabled={product.stock === 0}
            >
            -
            </Button>
            <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                max={product.stock}
                className="h-11 w-20 text-center text-lg font-bold"
                disabled={product.stock === 0}
            />
            <Button
            variant="outline"
            size="icon"
            className="h-11 w-11"
            onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
            disabled={product.stock === 0}
            >
            +
        </Button>
      </div>
      <Button 
        size="lg" 
        className="flex-1"
        onClick={handleAddToCart}
        disabled={product.stock === 0}
      >
        <ShoppingCart className="mr-2 h-5 w-5" />
        {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
      </Button>
    </div>
  );
}
