import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById, getProducts } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import AddToCartForm from '@/components/add-to-cart-form';
import ProductCard from '@/components/product-card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ProductChatbot from '@/components/product-chatbot';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id, 10);
  const product = getProductById(productId);
  const relatedProducts = getProducts({ limit: 4 });

  if (!product) {
    notFound();
  }

  const averageRating = product.reviews.length > 0
    ? product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length
    : 0;

  return (
    <div className="container mx-auto px-4 py-12 lg:px-6">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images Carousel */}
        <div>
           <Carousel className="w-full">
            <CarouselContent>
              {product.images.map((img, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden">
                    <div className="relative aspect-square w-full">
                      <Image
                        src={img}
                        alt={`${product.name} image ${index + 1}`}
                        data-ai-hint="product image"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            {product.images.length > 1 && (
              <>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </>
            )}
           </Carousel>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
            <div>
                <Badge variant="outline">{product.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold mt-2">{product.name}</h1>
                <p className="text-muted-foreground text-lg mt-1">{product.brand}</p>
            </div>
            {product.reviews.length > 0 && (
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.round(averageRating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground text-sm">({product.reviews.length} reviews)</span>
              </div>
            )}
            <p className="text-muted-foreground text-base">{product.description}</p>
            <div>
              <p className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</p>
              <Badge variant={product.stock > 0 ? "default" : "destructive"} className="mt-2 bg-accent text-accent-foreground">
                {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
              </Badge>
            </div>
          
            <AddToCartForm product={product} />
            <ProductChatbot product={product} />
        </div>
      </div>

      <Separator className="my-12" />

      {/* Reviews Section */}
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
            {product.reviews.length > 0 ? (
                <div className="space-y-8">
                {product.reviews.map((review) => (
                    <Card key={review.id} className="bg-muted/50">
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                        <Avatar>
                            <AvatarImage src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${review.author}`} />
                            <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold">{review.author}</p>
                                <p className="text-xs text-muted-foreground">{new Date(review.date).toLocaleDateString()}</p>
                            </div>
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                                ))}
                            </div>
                            </div>
                            <p className="mt-2 text-sm text-foreground/80">{review.comment}</p>
                        </div>
                        </div>
                    </CardContent>
                    </Card>
                ))}
                </div>
            ) : (
                <Card className="flex flex-col items-center justify-center p-12 bg-muted/50">
                  <p className="text-muted-foreground">No reviews yet for this product.</p>
                </Card>
            )}
        </div>
      </div>
      
      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {relatedProducts.filter(p => p.id !== product.id).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
