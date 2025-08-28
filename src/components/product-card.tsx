import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative h-60 w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              data-ai-hint="product image"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {product.stock === 0 && (
                <Badge variant="destructive" className="absolute top-3 right-3">Sold Out</Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold leading-tight truncate">{product.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{product.brand}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <p className="text-lg font-bold text-primary">${product.price.toFixed(2)}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
